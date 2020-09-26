import {gql} from 'apollo-boost';

const getKaryawansQuery = gql`
{
	karyawans {
		nama
		tanggal_lahir
		jenis_kelamin
		agama
		kota_asal
		domisili
		no_kontak
		email
		jabatan
		id
	}
}
`


const getKaryawanQuery = gql`
	query($id: ID){
		karyawan(id: $id) {
			nama
			tanggal_lahir
			jenis_kelamin
			agama
			kota_asal
			domisili
			no_kontak
			email
			jabatan
			id
		}
	}
`



const addKaryawanMutation = gql`
	mutation($nama:String!, $tanggal_lahir:String!, $jenis_kelamin:String!,
		$agama:String!, $kota_asal:String!, $domisili:String!,
		$no_kontak:String!, $email:String!, $jabatan:String!){
		addKaryawan(nama: $nama,
		tanggal_lahir: $tanggal_lahir,
		jenis_kelamin: $jenis_kelamin,
		agama: $agama,
		kota_asal: $kota_asal,
		domisili: $domisili,
		no_kontak: $no_kontak,
		email: $email,
		jabatan: $jabatan){
			nama
			tanggal_lahir
			jenis_kelamin
			agama
			kota_asal
			domisili
			no_kontak
			email
			jabatan
			id
		}
	}
`
const hapusKaryawanMutation = gql`
	mutation($id:ID!){
		hapusKaryawan(id: $id){
			id
		}
	}
`

export {
	getKaryawansQuery,
	getKaryawanQuery,
	addKaryawanMutation,
	hapusKaryawanMutation,
};
