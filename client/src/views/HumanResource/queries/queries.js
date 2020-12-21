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
		gaji
		divisi{
			nama
			id
		}
		id
		getAkun{
			username
			password
			id
		}
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
			gaji
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
		$gaji:Int!, $divisi_id:String!){
		addKaryawan(nama: $nama,
		tanggal_lahir: $tanggal_lahir,
		jenis_kelamin: $jenis_kelamin,
		agama: $agama,
		tempat_lahir: $tempat_lahir,
		alamat: $alamat,
		no_kontak: $no_kontak,
		email: $email,
		jabatan: $jabatan,
		gaji: $gaji,
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
			gaji
			id
		}
	}
`
const updateKaryawanMutation = gql`
	mutation($id:ID!, $nama:String!, $tanggal_lahir:String!, $jenis_kelamin:String!,
		$agama:String!, $tempat_lahir:String!, $alamat:String!,
		$no_kontak:String!, $email:String!, $jabatan:String!,
		$gaji:Int!, $divisi_id:String!){
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
		gaji: $gaji,
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
			gaji
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
//----------------------------------------------------------------------------//
const getAkunQuery = gql`
	query($username: String!, $password: String!){
		akun(username: $username, password: $password) {
			username
			password
			id
			karyawan {
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
	}
`
const getAkunsQuery = gql`
{
	akuns {
		username
		password
		karyawan{
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
			divisi{
				nama
				id
			}
		}
		id
	}
}
`
const addAkunMutation = gql`
	mutation($username:String!, $password:String!, $karyawan_id:ID!){
		addAkun(username: $username, password: $password, karyawan_id:$karyawan_id){
			username
			password
			id
		}
	}
`
const hapusAkunMutation = gql`
	mutation($id:ID!){
		hapusAkun(id: $id){
			id
		}
	}
`
const editAkunMutation = gql`
	mutation($id : ID, $username : String!, $password : String! ){
		editAkun(id:$id, username:$username, password:$password){
			id
			username
			password
		}
	}
`
//----------------------------------------------------------------------------//
export {
	getKaryawansQuery,
	getKaryawanQuery,
	addKaryawanMutation,
	updateKaryawanMutation,
	hapusKaryawanMutation,
	getDivisisQuery,
	getAkunQuery,
	getAkunsQuery,
	addAkunMutation,
	editAkunMutation,
	hapusAkunMutation,
};
