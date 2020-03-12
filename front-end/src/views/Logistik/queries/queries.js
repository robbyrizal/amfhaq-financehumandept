import {gql} from 'apollo-boost';

const getVendorsQuery = gql`
{
	vendors {
		nama
		jenis_usaha
		id
	}
}
`

const getAlatsQuery = gql`
{
	alats {
		nama
		jumlah
		id
	}
}
`
const getDivisisQuery = gql`
{
	divisis {
		nama
		id
	}
}
`
const getRequestsQuery = gql`
{
	requests {
		tanggal
		id
		divisi{
			nama
		}
	}
}
`

const addAlatMutation = gql`
	mutation($nama:String!, $jumlah:Int!){
		addAlat(nama: $nama, jumlah: $jumlah){
			nama
			jumlah
			id
		}
	}
`

const addVendorMutation = gql`
	mutation($nama:String!, $jenis_usaha:String!){
		addVendor(nama: $nama, jenis_usaha: $jenis_usaha){
			nama
			jenis_usaha
			id
		}
	}
`

const addDivisiMutation = gql`
	mutation($nama:String!){
		addDivisi(nama: $nama){
			nama
			id
		}
	}
`

const addRequestMutation = gql`
	mutation($tanggal:String!, $divisi_id: ID!){
		addRequest(tanggal: $tanggal, divisi_id: $divisi_id){
			id
		}
	}
`

const addListRequestMutation = gql`
	mutation($nama_barang:String!, $jumlah_barang:Int!, $satuan:String!, $request_id: ID!){
		addListRequest(nama_barang: $nama_barang, jumlah_barang: $jumlah_barang, satuan:$satuan, request_id: $request_id){
			nama_barang
			jumlah_barang
			satuan
			id
		}
	}
`


export {
	getVendorsQuery, 
	getAlatsQuery,
	getDivisisQuery,
	getRequestsQuery,
	addDivisiMutation, 
	addAlatMutation, 
	addVendorMutation,
	addRequestMutation,
	addListRequestMutation
};