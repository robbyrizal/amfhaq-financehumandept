const graphql = require('graphql');
const _ = require('lodash');
const Karyawan = require('./models/KaryawanModel');
const KlienTagihan = require('./models/KlienTagihanModel');
const AkunDebitKredit = require('./models/AkunDebitKreditModel');
const Akun = require('./models/AkunModel');
const Divisi = require('./models/DivisiModel');
const PurchaseOrder = require('./models/PurchaseOrderModel');
const Pengeluaran = require('./models/PengeluaranModel');
const Pemasukan = require('./models/PemasukanModel');
const Client = require('./models/ClientModel');
const Proyek = require('./models/ProyekModel');

const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLSchema,
	GraphQLNonNull
} = graphql;


const ProyekType = new GraphQLObjectType({
	name: 'Proyek',
	fields: () => ({
		id: { type: GraphQLID },
		nama: { type: GraphQLString },
		alamat: { type: GraphQLString },
		budget: { type: GraphQLInt },
		tanggal_mulai: { type: GraphQLString },
		tanggal_selesai: { type: GraphQLString },
		client: {
			type: ClientType,
			resolve(parent, args) {
				return Client.findById({ _id: parent.client_id });
			}
		}
	})
});

const ClientType = new GraphQLObjectType({
	name: "Client",
	fields: () => ({
		id: { type: GraphQLID },
		nama: { type: GraphQLString },
		alamat: { type: GraphQLString },
		no_kontak: { type: GraphQLString },
		email: { type: GraphQLString },
		proyeks: {
			type: new GraphQLList(ProyekType),
			resolve(parent, args) {
				return Proyek.find({ client_id: parent.id });
			}
		},
	})
});


const AkunType = new GraphQLObjectType({
	name: "Akun",
	fields: () => ({
		id: { type: GraphQLID },
		username: { type: GraphQLString },
		password: { type: GraphQLString },
		karyawan: {
			type: KaryawanType,
			resolve(parent, args) {
				return Karyawan.findById(parent.karyawan_id);
			}
		},
	})
});

const PurchaseOrderType = new GraphQLObjectType({
	name: 'PurchaseOrder',
	fields: () => ({
		id: { type: GraphQLID },
		kode: { type: GraphQLString },
		tanggal: { type: GraphQLString },
		tanggal_setuju: { type: GraphQLString },
		status: { type: GraphQLString },
		total_harga: { type: GraphQLInt },
	})
});

const PengeluaranType = new GraphQLObjectType({
	name: 'Pengeluaran',
	fields: () => ({
		id: { type: GraphQLID },
		kode: { type: GraphQLString },
		klien: {
			type: KlienTagihanType,
			resolve(parent, args) {
				return KlienTagihan.findById(parent.klientagihan_id);
			}
		},
		keterangan: { type: GraphQLString },
		tanggal_transaksi: { type: GraphQLString },
		jatuh_tempo: { type: GraphQLString },
		jumlah_dana: { type: GraphQLInt },
		jumlah_bayar: { type: GraphQLInt },
		akun_debit: { type: GraphQLString },
		akun_kredit: { type: GraphQLString },
	})
});

const PemasukanType = new GraphQLObjectType({
	name: 'Pemasukan',
	fields: () => ({
		id: { type: GraphQLID },
		kode: { type: GraphQLString },
		klien: {
			type: ClientType,
			resolve(parent, args) {
				return Client.findById(parent.klien_id);
			}
		},
		proyek: {
			type: ProyekType,
			resolve(parent, args) {
				return Proyek.findById(parent.proyek_id);
			}
		},
		keterangan: { type: GraphQLString },
		tanggal_transaksi: { type: GraphQLString },
		jatuh_tempo: { type: GraphQLString },
		total_harga: { type: GraphQLInt },
		dana_diterima: { type: GraphQLInt },
		akun_debit: { type: GraphQLString },
		akun_kredit: { type: GraphQLString },
	})
});

const KaryawanType = new GraphQLObjectType({
	name: 'Karyawan',
	fields: () => ({
		id: { type: GraphQLID },
		nama: { type: GraphQLString },
		tanggal_lahir: { type: GraphQLString },
		jenis_kelamin: { type: GraphQLString },
		agama: { type: GraphQLString },
		tempat_lahir: { type: GraphQLString },
		alamat: { type: GraphQLString },
		no_kontak: { type: GraphQLString },
		email: { type: GraphQLString },
		jabatan: { type: GraphQLString },
		gaji: { type: GraphQLInt },
		divisi: {
			type: DivisiType,
			resolve(parent, args) {
				return Divisi.findById(parent.divisi_id);
			}
		},
		getAkun: {
			type: AkunType,
			resolve(parent, args) {
				return Akun.findOne({ karyawan_id: parent.id });
			}
		},
	})
});

const KlienTagihanType = new GraphQLObjectType({
	name: 'KlienTagihan',
	fields: () => ({
		id: { type: GraphQLID },
		nama_klien: { type: GraphQLString },
	})
});

const AkunDebitKreditType = new GraphQLObjectType({
	name: 'AkunDebitKredit',
	fields: () => ({
		id: { type: GraphQLID },
		kode_akun: { type: GraphQLString },
		nama_akun: { type: GraphQLString },
	})
});

const DivisiType = new GraphQLObjectType({
	name: 'Divisi',
	fields: () => ({
		id: { type: GraphQLID },
		nama: { type: GraphQLString },
		karyawans: {
			type: new GraphQLList(KaryawanType),
			resolve(parent, args) {
				return Karyawan.find({ divisi_id: parent.id });
			}
		},
	})
});
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		proyek: {
			type: ProyekType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Proyek.findById(args.id);
			}
		},
		proyeks: {
			type: new GraphQLList(ProyekType),
			resolve(parent, args) {
				return Proyek.find({});
			}
		},
		//----------------------------------------------------------------------------//
		client: {
			type: ClientType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Client.findById(args.id);
			}
		},
		clients: {
			type: new GraphQLList(ClientType),
			resolve(parent, args) {
				return Client.find({});
			}
		},
		//----------------------------------------------------------------------------//
		akun: {
			type: AkunType,
			args: {
				username: { type: GraphQLString },
				password: { type: GraphQLString },
			},
			resolve(parent, args) {
				return Akun.findOne({ username: args.username, password: args.password });
			}
		},
		akuns: {
			type: new GraphQLList(AkunType),
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Akun.find({});
			}
		},
		//----------------------------------------------------------------------------//
		purchaseOrders: {
			type: new GraphQLList(PurchaseOrderType),
			resolve(parent, args) {
				return PurchaseOrder.find({ status: "Disetujui" });
			}
		},
		//----------------------------------------------------------------------------//
		karyawan: {
			type: KaryawanType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Karyawan.findById(args.id);
			}
		},
		karyawans: {
			type: new GraphQLList(KaryawanType),
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Karyawan.find({});
			}
		},
		//----------------------------------------------------------------------------//
		pengeluaran: {
			type: PengeluaranType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Pengeluaran.findById(args.id);
			}
		},
		pengeluarans: {
			type: new GraphQLList(PengeluaranType),
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Pengeluaran.find({});
			}
		},
		//----------------------------------------------------------------------------//
		pemasukan: {
			type: PemasukanType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Pemasukan.findById(args.id);
			}
		},
		pemasukans: {
			type: new GraphQLList(PemasukanType),
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Pemasukan.find({});
			}
		},
		//----------------------------------------------------------------------------//
		divisi: {
			type: DivisiType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Divisi.findById(args.id);
			}
		},
		divisis: {
			type: new GraphQLList(DivisiType),
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Divisi.find({});
			}
		},
		//----------------------------------------------------------------------------//
		klientagihan: {
			type: KlienTagihanType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return KlienTagihan.findById(args.id);
			}
		},
		klientagihans: {
			type: new GraphQLList(KlienTagihanType),
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return KlienTagihan.find({});
			}
		},

		//----------------------------------------------------------------------------//
		akundebitkredit: {
			type: AkunDebitKreditType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return AkunDebitKredit.findById(args.id);
			}
		},
		akundebitkredits: {
			type: new GraphQLList(AkunDebitKreditType),
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return AkunDebitKredit.find().sort({
					kode_akun: 1, // ascending
				})
			}
		},

	}
});
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {

		addAkun: {
			type: AkunType,
			args: {
				username: { type: new GraphQLNonNull(GraphQLString) },
				password: { type: new GraphQLNonNull(GraphQLString) },
				karyawan_id: { type: new GraphQLNonNull(GraphQLID) }
			},
			resolve(parent, args) {
				let akun = new Akun({
					username: args.username,
					password: args.password,
					karyawan_id: args.karyawan_id,
				});
				return akun.save();
			}
		},
		hapusAkun: {
			type: AkunType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Akun.deleteOne({ _id: args.id });
			}
		},
		editAkun: {
			type: AkunType,
			args: {
				id: { type: GraphQLID },
				username: { type: new GraphQLNonNull(GraphQLString) },
				password: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				return Akun.findOneAndUpdate({ _id: args.id }, { username: args.username, password: args.password })
			}
		},
		//----------------------------------------------------------------------------//
		addKaryawan: {
			type: KaryawanType,
			args: {
				nama: { type: new GraphQLNonNull(GraphQLString) },
				tanggal_lahir: { type: new GraphQLNonNull(GraphQLString) },
				jenis_kelamin: { type: new GraphQLNonNull(GraphQLString) },
				agama: { type: new GraphQLNonNull(GraphQLString) },
				tempat_lahir: { type: new GraphQLNonNull(GraphQLString) },
				alamat: { type: new GraphQLNonNull(GraphQLString) },
				no_kontak: { type: new GraphQLNonNull(GraphQLString) },
				email: { type: new GraphQLNonNull(GraphQLString) },
				jabatan: { type: new GraphQLNonNull(GraphQLString) },
				divisi_id: { type: new GraphQLNonNull(GraphQLString) },
				gaji: { type: new GraphQLNonNull(GraphQLInt) },
			},
			resolve(parent, args) {
				let request = new Karyawan({
					nama: args.nama,
					tanggal_lahir: args.tanggal_lahir,
					jenis_kelamin: args.jenis_kelamin,
					agama: args.agama,
					tempat_lahir: args.tempat_lahir,
					alamat: args.alamat,
					no_kontak: args.no_kontak,
					email: args.email,
					jabatan: args.jabatan,
					gaji: args.gaji,
					divisi_id: args.divisi_id,
				});
				return request.save();
			}
		},

		updateKaryawan: {
			type: KaryawanType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
				nama: { type: new GraphQLNonNull(GraphQLString) },
				tanggal_lahir: { type: new GraphQLNonNull(GraphQLString) },
				jenis_kelamin: { type: new GraphQLNonNull(GraphQLString) },
				agama: { type: new GraphQLNonNull(GraphQLString) },
				tempat_lahir: { type: new GraphQLNonNull(GraphQLString) },
				alamat: { type: new GraphQLNonNull(GraphQLString) },
				no_kontak: { type: new GraphQLNonNull(GraphQLString) },
				email: { type: new GraphQLNonNull(GraphQLString) },
				jabatan: { type: new GraphQLNonNull(GraphQLString) },
				divisi_id: { type: new GraphQLNonNull(GraphQLString) },
				gaji: { type: new GraphQLNonNull(GraphQLInt) },
			},
			resolve(parent, args) {

				return Karyawan.findOneAndUpdate({ _id: args.id },
					{
						nama: args.nama,
						tanggal_lahir: args.tanggal_lahir,
						jenis_kelamin: args.jenis_kelamin,
						agama: args.agama,
						tempat_lahir: args.tempat_lahir,
						alamat: args.alamat,
						no_kontak: args.no_kontak,
						email: args.email,
						jabatan: args.jabatan,
						gaji: args.gaji,
						divisi_id: args.divisi_id,
					})
			}
		},
		hapusKaryawan: {
			type: KaryawanType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Karyawan.deleteOne({ _id: args.id });
			}
		},
		//----------------------------------------------------------------------------//
		addPengeluaran: {
			type: PengeluaranType,
			args: {
				kode: { type: new GraphQLNonNull(GraphQLString) },
				klientagihan_id: { type: new GraphQLNonNull(GraphQLString) },
				keterangan: { type: new GraphQLNonNull(GraphQLString) },
				tanggal_transaksi: { type: new GraphQLNonNull(GraphQLString) },
				jatuh_tempo: { type: new GraphQLNonNull(GraphQLString) },
				jumlah_dana: { type: new GraphQLNonNull(GraphQLInt) },
				jumlah_bayar: { type: new GraphQLNonNull(GraphQLInt) },
				akun_debit: { type: new GraphQLNonNull(GraphQLString) },
				akun_kredit: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				let request = new Pengeluaran({
					kode: args.kode,
					tanggal_transaksi: args.tanggal_transaksi,
					klientagihan_id: args.klientagihan_id,
					keterangan: args.keterangan,
					jatuh_tempo: args.jatuh_tempo,
					jumlah_dana: args.jumlah_dana,
					jumlah_bayar: args.jumlah_bayar,
					akun_debit: args.akun_debit,
					akun_kredit: args.akun_kredit,
				});
				return request.save();
			}
		},

		updatePengeluaran: {
			type: PengeluaranType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
				kode: { type: new GraphQLNonNull(GraphQLString) },
				klientagihan_id: { type: new GraphQLNonNull(GraphQLString) },
				keterangan: { type: new GraphQLNonNull(GraphQLString) },
				tanggal_transaksi: { type: new GraphQLNonNull(GraphQLString) },
				jatuh_tempo: { type: new GraphQLNonNull(GraphQLString) },
				jumlah_dana: { type: new GraphQLNonNull(GraphQLInt) },
				jumlah_bayar: { type: new GraphQLNonNull(GraphQLInt) },
				akun_debit: { type: new GraphQLNonNull(GraphQLString) },
				akun_kredit: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {

				return Pengeluaran.findOneAndUpdate({ _id: args.id },
					{
						kode: args.kode,
						tanggal_transaksi: args.tanggal_transaksi,
						klientagihan_id: args.klientagihan_id,
						keterangan: args.keterangan,
						jatuh_tempo: args.jatuh_tempo,
						jumlah_dana: args.jumlah_dana,
						jumlah_bayar: args.jumlah_bayar,
						akun_debit: args.akun_debit,
						akun_kredit: args.akun_kredit,
					})
			}
		},
		hapusPengeluaran: {
			type: PengeluaranType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Pengeluaran.deleteOne({ _id: args.id });
			}
		},
		//----------------------------------------------------------------------------//
		addPemasukan: {
			type: PemasukanType,
			args: {
				kode: { type: new GraphQLNonNull(GraphQLString) },
				klien_id: { type: new GraphQLNonNull(GraphQLString) },
				proyek_id: { type: new GraphQLNonNull(GraphQLString) },
				keterangan: { type: new GraphQLNonNull(GraphQLString) },
				tanggal_transaksi: { type: new GraphQLNonNull(GraphQLString) },
				jatuh_tempo: { type: new GraphQLNonNull(GraphQLString) },
				total_harga: { type: new GraphQLNonNull(GraphQLInt) },
				dana_diterima: { type: new GraphQLNonNull(GraphQLInt) },
				akun_debit: { type: new GraphQLNonNull(GraphQLString) },
				akun_kredit: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				let request = new Pemasukan({
					kode: args.kode,
					tanggal_transaksi: args.tanggal_transaksi,
					klien_id: args.klien_id,
					proyek_id: args.proyek_id,
					keterangan: args.keterangan,
					jatuh_tempo: args.jatuh_tempo,
					total_harga: args.total_harga,
					dana_diterima: args.dana_diterima,
					akun_debit: args.akun_debit,
					akun_kredit: args.akun_kredit,
				});
				return request.save();
			}
		},

		updatePemasukan: {
			type: PemasukanType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
				kode: { type: new GraphQLNonNull(GraphQLString) },
				klien_id: { type: new GraphQLNonNull(GraphQLString) },
				proyek_id: { type: new GraphQLNonNull(GraphQLString) },
				keterangan: { type: new GraphQLNonNull(GraphQLString) },
				tanggal_transaksi: { type: new GraphQLNonNull(GraphQLString) },
				jatuh_tempo: { type: new GraphQLNonNull(GraphQLString) },
				total_harga: { type: new GraphQLNonNull(GraphQLInt) },
				dana_diterima: { type: new GraphQLNonNull(GraphQLInt) },
				akun_debit: { type: new GraphQLNonNull(GraphQLString) },
				akun_kredit: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {

				return Pemasukan.findOneAndUpdate({ _id: args.id },
					{
						kode: args.kode,
						tanggal_transaksi: args.tanggal_transaksi,
						klien_id: args.klien_id,
						proyek_id: args.proyek_id,
						keterangan: args.keterangan,
						jatuh_tempo: args.jatuh_tempo,
						total_harga: args.total_harga,
						dana_diterima: args.dana_diterima,
						akun_debit: args.akun_debit,
						akun_kredit: args.akun_kredit,
					})
			}
		},
		hapusPemasukan: {
			type: PemasukanType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Pemasukan.deleteOne({ _id: args.id });
			}
		},
		//----------------------------------------------------------------------------//
		addKlienTagihan: {
			type: KlienTagihanType,
			args: {
				nama_klien: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				let request = new KlienTagihan({
					nama_klien: args.nama_klien,
				});
				return request.save();
			}
		},
		hapusKlienTagihan: {
			type: KlienTagihanType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return KlienTagihan.deleteOne({ _id: args.id });
			}
		},
		//----------------------------------------------------------------------------//
		addAkunDebitKredit: {
			type: AkunDebitKreditType,
			args: {
				kode_akun: { type: new GraphQLNonNull(GraphQLString) },
				nama_akun: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				let request = new AkunDebitKredit({
					kode_akun: args.kode_akun,
					nama_akun: args.nama_akun,
				});
				return request.save();
			}
		},

		updateAkunDebitKredit: {
			type: AkunDebitKreditType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
				kode_akun: { type: new GraphQLNonNull(GraphQLString) },
				nama_akun: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {

				return AkunDebitKredit.findOneAndUpdate({ _id: args.id },
					{
						kode_akun: args.kode_akun,
						nama_akun: args.nama_akun,
					})
			}
		},
		hapusAkunDebitKredit: {
			type: AkunDebitKreditType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return AkunDebitKredit.deleteOne({ _id: args.id });
			}
		},

	}
});
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});
