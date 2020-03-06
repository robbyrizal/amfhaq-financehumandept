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

export {getVendorsQuery, getAlatsQuery, addAlatMutation, addVendorMutation};