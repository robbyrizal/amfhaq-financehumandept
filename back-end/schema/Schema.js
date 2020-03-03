const graphql = require ('graphql');
const _ = require('lodash');
const Vendor = require('../models/VendorModel');
const Alat = require('../models/AlatModel');


const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLSchema,
	GraphQLNonNull
} = graphql;

const VendorType = new GraphQLObjectType({
	name: 'Vendor',
	fields: () => ({
		id: {type: GraphQLID},
		nama: {type:GraphQLString},
		jenis_usaha: {type: GraphQLString}
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
		}
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
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});
