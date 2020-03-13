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
		status
		id
		divisi{
			nama
		}
	}
}
`
const getListRequestsQuery = gql`
{
	listrequests {
		nama_barang
		jumlah_barang
		jenis
		satuan
		id
		request{
			status
			tanggal
			divisi{
				nama
			}
		}
	}
}
`

const getOrdersQuery = gql`
{
	orders {
		kode
		tanggal
		jenis
		status
		id
		vendor{
			nama
			jenis_usaha
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
	mutation($tanggal:String!, $status:String!, $divisi_id: ID!){
		addRequest(tanggal: $tanggal, status: $status, divisi_id: $divisi_id){
			tanggal
			status
			id
		}
	}
`

const addListRequestMutation = gql`
	mutation($nama_barang:String!, $jumlah_barang:Int!, $satuan:String!, $jenis:String!, $request_id: ID!){
		addListRequest(nama_barang: $nama_barang, jumlah_barang: $jumlah_barang, satuan:$satuan, jenis:$jenis, request_id: $request_id){
			nama_barang
			jumlah_barang
			satuan
			jenis
			id
		}
	}
`


export {
	getVendorsQuery, 
	getAlatsQuery,
	getDivisisQuery,
	getRequestsQuery,
	getListRequestsQuery,
	getOrdersQuery,
	addDivisiMutation, 
	addAlatMutation, 
	addVendorMutation,
	addRequestMutation,
	addListRequestMutation
};