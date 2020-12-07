const graphql = require ('graphql');
const _ = require('lodash');
const Karyawan = require('./models/KaryawanModel');
const KlienTagihan = require('./models/KlienTagihanModel');
const AkunDebitKredit = require('./models/AkunDebitKreditModel');
const Divisi = require('./models/DivisiModel');

const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLSchema,
	GraphQLNonNull
} = graphql;


const KaryawanType = new GraphQLObjectType({
	name: 'Karyawan',
	fields: () => ({
		id: {type: GraphQLID},
		nama: {type:GraphQLString},
		tanggal_lahir: {type:GraphQLString},
		jenis_kelamin: {type:GraphQLString},
		agama: {type:GraphQLString},
		tempat_lahir: {type:GraphQLString},
		alamat: {type:GraphQLString},
		no_kontak: {type:GraphQLString},
		email: {type:GraphQLString},
		jabatan: {type:GraphQLString},
		divisi: {
			type: DivisiType,
			resolve(parent,args){
				return Divisi.findById(parent.divisi_id);
			}
		},
	})
});

const KlienTagihanType = new GraphQLObjectType({
	name: 'KlienTagihan',
	fields: () => ({
		id: {type: GraphQLID},
		nama_klien: {type:GraphQLString},
	})
});

const AkunDebitKreditType = new GraphQLObjectType({
	name: 'AkunDebitKredit',
	fields: () => ({
		id: {type: GraphQLID},
		kode_akun: {type:GraphQLString},
		nama_akun: {type:GraphQLString},
		jenis_akun: {type:GraphQLString},
	})
});

const DivisiType = new GraphQLObjectType({
	name: 'Divisi',
	fields: () => ({
		id: {type: GraphQLID},
		nama: {type:GraphQLString},
		karyawans:{
			type: new GraphQLList(KaryawanType),
			resolve(parent,args){
				return Karyawan.find({divisi_id: parent.id});
			}
		},
	})
});
//----------------------------------------------------------------------------//
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {

		karyawan:{
			type: KaryawanType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Karyawan.findById(args.id);
			}
		},
		karyawans:{
			type: new GraphQLList(KaryawanType),
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Karyawan.find({});
			}
		},
//----------------------------------------------------------------------------//
		divisi:{
			type: DivisiType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Divisi.findById(args.id);
			}
		},
		divisis:{
			type: new GraphQLList(DivisiType),
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Divisi.find({});
			}
		},
//----------------------------------------------------------------------------//
		klientagihan:{
			type: KlienTagihanType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return KlienTagihan.findById(args.id);
			}
		},
		klientagihans:{
			type: new GraphQLList(KlienTagihanType),
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return KlienTagihan.find({});
			}
		},
//----------------------------------------------------------------------------//
		akundebitkredit:{
			type: AkunDebitKreditType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return AkunDebitKredit.findById(args.id);
			}
		},
		akundebitkredits:{
			type: new GraphQLList(AkunDebitKreditType),
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return AkunDebitKredit.find({});
			}
		},

	}
});
//----------------------------------------------------------------------------//
const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {

		addKaryawan:{
			type: KaryawanType,
			args:{
				nama:  {type: new GraphQLNonNull(GraphQLString)},
				tanggal_lahir:  {type: new GraphQLNonNull(GraphQLString)},
				jenis_kelamin:  {type: new GraphQLNonNull(GraphQLString)},
				agama:  {type: new GraphQLNonNull(GraphQLString)},
				tempat_lahir:  {type: new GraphQLNonNull(GraphQLString)},
				alamat:  {type: new GraphQLNonNull(GraphQLString)},
				no_kontak:  {type: new GraphQLNonNull(GraphQLString)},
				email:  {type: new GraphQLNonNull(GraphQLString)},
				jabatan:  {type: new GraphQLNonNull(GraphQLString)},
				divisi_id: {type: new GraphQLNonNull(GraphQLString)},
			},
			resolve(parent, args){
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
					divisi_id: args.divisi_id,
				});
				return request.save();
			}
		},

		updateKaryawan:{
			type: KaryawanType,
			args:{
				id: {type: new GraphQLNonNull(GraphQLID)},
				nama:  {type: new GraphQLNonNull(GraphQLString)},
				tanggal_lahir:  {type: new GraphQLNonNull(GraphQLString)},
				jenis_kelamin:  {type: new GraphQLNonNull(GraphQLString)},
				agama:  {type: new GraphQLNonNull(GraphQLString)},
				tempat_lahir:  {type: new GraphQLNonNull(GraphQLString)},
				alamat:  {type: new GraphQLNonNull(GraphQLString)},
				no_kontak:  {type: new GraphQLNonNull(GraphQLString)},
				email:  {type: new GraphQLNonNull(GraphQLString)},
				jabatan:  {type: new GraphQLNonNull(GraphQLString)},
				divisi_id: {type: new GraphQLNonNull(GraphQLString)},
			},
			resolve(parent, args){
		
				return Karyawan.findOneAndUpdate({_id: args.id}, 
					{nama: args.nama,
					tanggal_lahir: args.tanggal_lahir,
					jenis_kelamin: args.jenis_kelamin,
					agama: args.agama,
					tempat_lahir: args.tempat_lahir,
					alamat: args.alamat,
					no_kontak: args.no_kontak,
					email: args.email,
					jabatan: args.jabatan,
					divisi_id: args.divisi_id,})
			}
		},
		hapusKaryawan:{
			type: KaryawanType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Karyawan.deleteOne({_id:args.id});
			}
		},
//----------------------------------------------------------------------------//
		addKlienTagihan:{
			type: KlienTagihanType,
			args:{
				nama_klien:  {type: new GraphQLNonNull(GraphQLString)},
			},
			resolve(parent, args){
				let request = new KlienTagihan({
					nama_klien: args.nama_klien,
				});
				return request.save();
			}
		},
		hapusKlienTagihan:{
			type: KlienTagihanType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return KlienTagihan.deleteOne({_id:args.id});
			}
		},
//----------------------------------------------------------------------------//
		addAkunDebitKredit:{
			type: AkunDebitKreditType,
			args:{
				kode_akun:  {type: new GraphQLNonNull(GraphQLString)},
				nama_akun:  {type: new GraphQLNonNull(GraphQLString)},
				jenis_akun:  {type: new GraphQLNonNull(GraphQLString)},
			},
			resolve(parent, args){
				let request = new AkunDebitKredit({
					kode_akun: args.kode_akun,
					nama_akun: args.nama_akun,
					jenis_akun: args.jenis_akun,
				});
				return request.save();
			}
		},
		hapusAkunDebitKredit:{
			type: AkunDebitKreditType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return AkunDebitKredit.deleteOne({_id:args.id});
			}
		},

	}
});
//----------------------------------------------------------------------------//
module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});
