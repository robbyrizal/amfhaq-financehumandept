const graphql = require ('graphql');
const _ = require('lodash');
const Vendor = require('../models/VendorModel');


const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
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
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});
