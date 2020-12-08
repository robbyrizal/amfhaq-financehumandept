import {gql} from 'apollo-boost';

const getKaryawansQuery = gql`
{
	karyawans {
		nama
		tanggal_lahir
		jenis_kelamin
		agama
		tempat_lahir
		alamat
		no_kontak
		email
		jabatan
		divisi{
			nama
			id
		}
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
			tempat_lahir
			alamat
			no_kontak
			email
			jabatan
			divisi{
				nama
				id
			}
			id
		}
	}
`



const addKaryawanMutation = gql`
	mutation($nama:String!, $tanggal_lahir:String!, $jenis_kelamin:String!,
		$agama:String!, $tempat_lahir:String!, $alamat:String!,
		$no_kontak:String!, $email:String!, $jabatan:String!,
		$divisi_id:String!){
		addKaryawan(nama: $nama,
		tanggal_lahir: $tanggal_lahir,
		jenis_kelamin: $jenis_kelamin,
		agama: $agama,
		tempat_lahir: $tempat_lahir,
		alamat: $alamat,
		no_kontak: $no_kontak,
		email: $email,
		jabatan: $jabatan,
		divisi_id: $divisi_id,){
			nama
			tanggal_lahir
			jenis_kelamin
			agama
			tempat_lahir
			alamat
			no_kontak
			email
			jabatan
			id
		}
	}
`
const updateKaryawanMutation = gql`
	mutation($id:ID!, $nama:String!, $tanggal_lahir:String!, $jenis_kelamin:String!,
		$agama:String!, $tempat_lahir:String!, $alamat:String!,
		$no_kontak:String!, $email:String!, $jabatan:String!,
		$divisi_id:String!){
		updateKaryawan(id:$id,
		nama: $nama,
		tanggal_lahir: $tanggal_lahir,
		jenis_kelamin: $jenis_kelamin,
		agama: $agama,
		tempat_lahir: $tempat_lahir,
		alamat: $alamat,
		no_kontak: $no_kontak,
		email: $email,
		jabatan: $jabatan,
		divisi_id: $divisi_id,){
			nama
			tanggal_lahir
			jenis_kelamin
			agama
			tempat_lahir
			alamat
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
//----------------------------------------------------------------------------//

const getDivisisQuery = gql`
{
	divisis {
		nama
		id
	}
}
`
export {
	getKaryawansQuery,
	getKaryawanQuery,
	addKaryawanMutation,
	updateKaryawanMutation,
	hapusKaryawanMutation,
	getDivisisQuery,
};
