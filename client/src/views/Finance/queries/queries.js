import { gql } from 'apollo-boost';

const getProyeksQuery = gql`
{
	proyeks {
		nama
		alamat
		budget
		tanggal_mulai
		tanggal_selesai
		client{
			nama
			alamat
			no_kontak
			email
			id
		}
		id
	}
}
`
const getProyekQuery = gql`
	query($id: ID){
		proyek(id: $id) {
			nama
			alamat
			budget
			tanggal_mulai
			tanggal_selesai
			client{
				nama
				alamat
				no_kontak
				email
				id
			}
			id
		}
	}
`
const getClientsQuery = gql`
{
	clients {
		nama
		alamat
		no_kontak
		email
		id
	}
}
`
const getClientQuery = gql`
	query($id: ID){
		client(id: $id) {
			nama
			alamat
			no_kontak
			email
			id
		}
	}
`
const getPengeluaransQuery = gql`
{
	pengeluarans {
		klien{
			nama_klien
			id
		}
		tanggal_transaksi
		jatuh_tempo
		keterangan
		kode
		jumlah_dana
		jumlah_bayar
		akun_debit
		akun_kredit
		id
	}
}
`
const getPengeluaranQuery = gql`
	query($id: ID){
		pengeluaran(id: $id) {
			klien{
				nama_klien
				id
			}
			tanggal_transaksi
			jatuh_tempo
			keterangan
			kode
			jumlah_dana
			jumlah_bayar
			akun_debit
			akun_kredit
			id
		}
	}
`
const addPengeluaranMutation = gql`
	mutation($klientagihan_id:String!, $tanggal_transaksi:String!, $jatuh_tempo:String!,
		$keterangan:String!, $kode:String!,
		$akun_debit:String!, $akun_kredit:String!, $jumlah_dana:Int!,
		$jumlah_bayar:Int!,){
		addPengeluaran(klientagihan_id: $klientagihan_id,
		tanggal_transaksi: $tanggal_transaksi,
		jatuh_tempo: $jatuh_tempo,
		keterangan: $keterangan,
		kode: $kode,
		akun_debit: $akun_debit,
		akun_kredit: $akun_kredit,
		jumlah_dana: $jumlah_dana,
		jumlah_bayar: $jumlah_bayar,){
			tanggal_transaksi
			jatuh_tempo
			keterangan
			kode
			akun_debit
			akun_kredit
			jumlah_dana
			jumlah_bayar
			id
		}
	}
`
const updatePengeluaranMutation = gql`
	mutation($id:ID!, $klientagihan_id:String!, $tanggal_transaksi:String!, $jatuh_tempo:String!,
		$keterangan:String!, $kode:String!,
		$akun_debit:String!, $akun_kredit:String!, $jumlah_dana:Int!,
		$jumlah_bayar:Int!,){
		updatePengeluaran(id:$id,
		klientagihan_id: $klientagihan_id,
		tanggal_transaksi: $tanggal_transaksi,
		jatuh_tempo: $jatuh_tempo,
		keterangan: $keterangan,
		kode: $kode,
		akun_debit: $akun_debit,
		akun_kredit: $akun_kredit,
		jumlah_dana: $jumlah_dana,
		jumlah_bayar: $jumlah_bayar,){
			tanggal_transaksi
			jatuh_tempo
			keterangan
			kode
			akun_debit
			akun_kredit
			jumlah_dana
			jumlah_bayar
			id
		}
	}
`
const hapusPengeluaranMutation = gql`
	mutation($id:ID!){
		hapusPengeluaran(id: $id){
			id
		}
	}
`
//----------------------------------------------------------------------------//
const getPemasukansQuery = gql`
{
	pemasukans {
		klien{
			nama
			id
		}
		proyek{
			nama
			id
		}
		tanggal_transaksi
		jatuh_tempo
		keterangan
		kode
		total_harga
		dana_diterima
		akun_debit
		akun_kredit
		id
	}
}
`
const getPemasukanQuery = gql`
	query($id: ID){
		pemasukan(id: $id) {
			klien{
				nama
				id
			}
			proyek{
				nama
				id
			}
			tanggal_transaksi
			jatuh_tempo
			keterangan
			kode
			total_harga
			dana_diterima
			akun_debit
			akun_kredit
			id
		}
	}
`
const addPemasukanMutation = gql`
	mutation($klien_id:String!,$proyek_id:String!, $tanggal_transaksi:String!, $jatuh_tempo:String!,
		$keterangan:String!, $kode:String!,
		$akun_debit:String!, $akun_kredit:String!, $total_harga:Int!,
		$dana_diterima:Int!,){
		addPemasukan(klien_id: $klien_id,
		proyek_id: $proyek_id,
		tanggal_transaksi: $tanggal_transaksi,
		jatuh_tempo: $jatuh_tempo,
		keterangan: $keterangan,
		kode: $kode,
		akun_debit: $akun_debit,
		akun_kredit: $akun_kredit,
		total_harga: $total_harga,
		dana_diterima: $dana_diterima,){
			tanggal_transaksi
			jatuh_tempo
			keterangan
			kode
			akun_debit
			akun_kredit
			total_harga
			dana_diterima
			id
		}
	}
`
const updatePemasukanMutation = gql`
	mutation($id:ID!, $klientagihan_id:String!, $tanggal_transaksi:String!, $jatuh_tempo:String!,
		$keterangan:String!, $kode:String!,
		$akun_debit:String!, $akun_kredit:String!, $jumlah_dana:Int!,
		$jumlah_bayar:Int!,){
		updatePemasukan(id:$id,
		klientagihan_id: $klientagihan_id,
		tanggal_transaksi: $tanggal_transaksi,
		jatuh_tempo: $jatuh_tempo,
		keterangan: $keterangan,
		kode: $kode,
		akun_debit: $akun_debit,
		akun_kredit: $akun_kredit,
		jumlah_dana: $jumlah_dana,
		jumlah_bayar: $jumlah_bayar,){
			tanggal_transaksi
			jatuh_tempo
			keterangan
			kode
			akun_debit
			akun_kredit
			jumlah_dana
			jumlah_bayar
			id
		}
	}
`
const hapusPemasukanMutation = gql`
	mutation($id:ID!){
		hapusPemasukan(id: $id){
			id
		}
	}
`
//----------------------------------------------------------------------------//
const getKlienTagihansQuery = gql`
{
	klientagihans {
		nama_klien
		id
	}
}
`
const getKlienTagihanQuery = gql`
	query($id: ID){
		klientagihan(id: $id) {
			nama_klien
			id
		}
	}
`
const addKlienTagihanMutation = gql`
	mutation($nama_klien:String!){
		addKlienTagihan(nama_klien: $nama_klien){
			nama_klien
			id
		}
	}
`
const hapusKlienTagihanMutation = gql`
	mutation($id:ID!){
		hapusKlienTagihan(id: $id){
			id
		}
	}
`
//----------------------------------------------------------------------------//
const getAkunDebitKreditsQuery = gql`
{
	akundebitkredits {
		kode_akun
		nama_akun
		id
	}
}
`
const getAkunDebitKreditQuery = gql`
	query($id: ID){
		akundebitkredit(id: $id) {
			kode_akun
			nama_akun
			id
		}
	}
`
const addAkunDebitKreditMutation = gql`
	mutation($kode_akun:String!,
		$nama_akun:String!,){
		addAkunDebitKredit(kode_akun: $kode_akun,
			nama_akun: $nama_akun,){
			kode_akun
			nama_akun
			id
		}
	}
`
const updateAkunDebitKreditMutation = gql`
	mutation($id:ID!,
		$kode_akun:String!,
		$nama_akun:String!,){
		updateAkunDebitKredit(id:$id,
			kode_akun: $kode_akun,
			nama_akun: $nama_akun,){
			kode_akun
			nama_akun
			id
		}
	}
`
const hapusAkunDebitKreditMutation = gql`
	mutation($id:ID!){
		hapusAkunDebitKredit(id: $id){
			id
		}
	}
`
//----------------------------------------------------------------------------//
const getPurchaseOrdersQuery = gql`
{
	purchaseOrders {
		kode
		tanggal
		tanggal_setuju
		status
		total_harga
		id
	}
}
`
//----------------------------------------------------------------------------//
export {
	getClientsQuery,
	getClientQuery,
	getProyeksQuery,
	getProyekQuery,
	getKlienTagihansQuery,
	getKlienTagihanQuery,
	addKlienTagihanMutation,
	hapusKlienTagihanMutation,
	getAkunDebitKreditsQuery,
	getAkunDebitKreditQuery,
	addAkunDebitKreditMutation,
	updateAkunDebitKreditMutation,
	hapusAkunDebitKreditMutation,
	getPurchaseOrdersQuery,
	getPengeluaranQuery,
	getPengeluaransQuery,
	addPengeluaranMutation,
	updatePengeluaranMutation,
	hapusPengeluaranMutation,
	getPemasukanQuery,
	getPemasukansQuery,
	addPemasukanMutation,
	updatePemasukanMutation,
	hapusPemasukanMutation,
};
