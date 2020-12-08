import {gql} from 'apollo-boost';

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
		jenis_akun
		id
	}
}
`
const getAkunDebitKreditQuery = gql`
	query($id: ID){
		akundebitkredit(id: $id) {
			kode_akun
			nama_akun
			jenis_akun
			id
		}
	}
`
const addAkunDebitKreditMutation = gql`
	mutation($kode_akun:String!,
		$nama_akun:String!,
		$jenis_akun:String!){
		addAkunDebitKredit(kode_akun: $kode_akun,
			nama_akun: $nama_akun,
			jenis_akun: $jenis_akun){
			kode_akun
			nama_akun
			jenis_akun
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
export {
	getKlienTagihansQuery,
	getKlienTagihanQuery,
	addKlienTagihanMutation,
	hapusKlienTagihanMutation,
	getAkunDebitKreditsQuery,
	getAkunDebitKreditQuery,
	addAkunDebitKreditMutation,
	hapusAkunDebitKreditMutation,
};
