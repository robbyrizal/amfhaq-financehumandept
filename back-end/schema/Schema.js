const graphql = require ('graphql');
const _ = require('lodash');
const Vendor = require('../models/VendorModel');
const Alat = require('../models/AlatModel');
const Divisi = require('../models/DivisiModel');
const Request = require('../models/RequestModel');
const ListRequest = require('../models/ListRequestModel');
const Order = require('../models/OrderModel');


const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLScalarType
} = graphql;


const VendorType = new GraphQLObjectType({
	name: 'Vendor',
	fields: () => ({
		id: {type: GraphQLID},
		nama: {type:GraphQLString},
		jenis_usaha: {type: GraphQLString},
		order: {
			type: new GraphQLList(OrderType),
			resolve(parent, args){
				return Order.find({vendor_id: parent.id});
			}
		}
	})
});

const AlatType = new GraphQLObjectType({
	name: 'Alat',
	fields: () => ({
		id: {type: GraphQLID},
		nama: {type:GraphQLString},
		jumlah: {type: GraphQLInt}
	})
});

const DivisiType = new GraphQLObjectType({
	name: 'Divisi',
	fields: () => ({
		id: {type: GraphQLID},
		nama: {type:GraphQLString},
		request: {
			type: new GraphQLList(RequestType),
			resolve(parent, args){
				return Request.find({divisi_id: parent.id});
			}
		}
	})
});

const RequestType = new GraphQLObjectType({
	name: 'Request',
	fields: () => ({
		id: {type: GraphQLID},
		tanggal: {type:GraphQLString},
		status: {type:GraphQLString},
		divisi: {
			type: DivisiType,
			resolve(parent, args){
				return Divisi.findById(parent.divisi_id);
			}
		},
		listRequest: {
			type: new GraphQLList(ListRequestType),
			resolve(parent,args){
				return ListRequest.find({request_id: parent.id});
			}
		}
	})
});

const ListRequestType = new GraphQLObjectType({
	name: "ListRequest",
	fields: () => ({
		id: {type: GraphQLID},
		nama_barang: {type: GraphQLString},
		jumlah_barang: { type: GraphQLInt},
		satuan: {type: GraphQLString},
		jenis: {type: GraphQLString},
		request: {
			type: RequestType,
			resolve(parent,args){
				return Request.findById(parent.request_id);
			}
		}
	})
});

const OrderType = new GraphQLObjectType({
	name: 'Order',
	fields: () => ({
		id: {type: GraphQLID},
		kode: {type:GraphQLString},
		tanggal: {type:GraphQLString},
		jenis: {type:GraphQLString},
		status: {type:GraphQLString},
		vendor: {
			type: VendorType,
			resolve(parent, args){
				return Vendor.findById(parent.vendor_id);
			}
		}
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		vendor:{
			type: VendorType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Vendor.findById(args.id);
			}
		},
		vendors:{
			type: new GraphQLList(VendorType),
			resolve(parent,args){
				return Vendor.find({});
			}
		},
		alat:{
			type: AlatType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Alat.findById(args.id);
			}
		},
		alats:{
			type: new GraphQLList(AlatType),
			resolve(parent,args){
				return Alat.find({});
			}
		},
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
		request:{
			type: RequestType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Request.findById(args.id);
			}
		},
		requests:{
			type: new GraphQLList(RequestType),
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Request.find({});
			}
		},
		listrequest:{
			type: ListRequestType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return ListRequest.findById(args.id);
			}
		},
		listrequests:{
			type: new GraphQLList(ListRequestType),
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return ListRequest.find({});
			}
		},
		order:{
			type: OrderType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Order.findById(args.id);
			}
		},
		orders:{
			type: new GraphQLList(OrderType),
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Order.find({});
			}
		},
	}
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addVendor:{
			type: VendorType,
			args:{
				nama: {type: new GraphQLNonNull(GraphQLString)},
				jenis_usaha: {type: new GraphQLNonNull(GraphQLString)}
			},
			resolve(parent,args){
				let vendor = new Vendor({
					nama: args.nama,
					jenis_usaha: args.jenis_usaha
				});
				return vendor.save();
			}
		},
		addAlat:{
			type: AlatType,
			args:{
				nama: {type: new GraphQLNonNull(GraphQLString)},
				jumlah: {type: new GraphQLNonNull(GraphQLInt)}
			},
			resolve(parent,args){
				let alat = new Alat({
					nama: args.nama,
					jumlah: args.jumlah
				});
				return alat.save();
			}
		},
		addDivisi:{
			type: DivisiType,
			args:{
				nama: {type: new GraphQLNonNull(GraphQLString)},
			},
			resolve(parent,args){
				let divisi = new Divisi({
					nama: args.nama,
				});
				return divisi.save();
			}
		},
		addRequest:{
			type: RequestType,
			args:{
				tanggal: {type: new GraphQLNonNull(GraphQLString)},
				status: {type: new GraphQLNonNull(GraphQLString)},
				divisi_id: {type: new GraphQLNonNull(GraphQLID)}
			},
			resolve(parent, args){
				let request = new Request({
					tanggal: args.tanggal,
					status:args.status,
					divisi_id: args.divisi_id
				});
				return request.save();
			}
		},
		addListRequest:{
			type: ListRequestType,
			args:{
				nama_barang: {type: new GraphQLNonNull(GraphQLString)},
				jumlah_barang: {type: new GraphQLNonNull(GraphQLInt)},
				satuan: {type: new GraphQLNonNull(GraphQLString)},
				jenis: {type: new GraphQLNonNull(GraphQLString)},
				request_id: {type: new GraphQLNonNull(GraphQLID)}
			},
			resolve(parent, args){
				let listrequest = new ListRequest({
					nama_barang: args.nama_barang,
					jumlah_barang: args.jumlah_barang,
					satuan: args.satuan,
					jenis: args.jenis,
					request_id: args.request_id
				});
				return listrequest.save();
			}
		},
		addOrder:{
			type: OrderType,
			args:{
				kode: {type: new GraphQLNonNull(GraphQLString)},
				tanggal: {type: new GraphQLNonNull(GraphQLString)},
				jenis: {type: new GraphQLNonNull(GraphQLString)},
				status: {type: new GraphQLNonNull(GraphQLString)},
				vendor_id: {type: new GraphQLNonNull(GraphQLID)}
			},
			resolve(parent, args){
				let order = new Order({
					kode: args.kode,
					tanggal: args.tanggal,
					jenis: args.jenis,
					status: args.status,
					vendor_id: args.vendor_id
				});
				return order.save();
			}
		},
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});
