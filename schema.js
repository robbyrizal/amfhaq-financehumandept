const graphql = require ('graphql');
const _ = require('lodash');
const Karyawan = require('./models/KaryawanModel');


const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLSchema,
	GraphQLNonNull
} = graphql;


const KaryawanType = new GraphQLObjectType({
	name: 'HumanResource',
	fields: () => ({
		id: {type: GraphQLID},
		nama: {type:GraphQLString},
		tanggal_lahir: {type:GraphQLString},
		jenis_kelamin: {type:GraphQLString},
		agama: {type:GraphQLString},
		kota_asal: {type:GraphQLString},
		domisili: {type:GraphQLString},
		no_kontak: {type:GraphQLString},
		email: {type:GraphQLString},
		jabatan: {type:GraphQLString},
	})
});
//----------------------------------------------------------------------------//
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {

		karyawan:{
			type: KaryawanType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Karyawan.findById(args.id);
			}
		},
		karyawans:{
			type: new GraphQLList(KaryawanType),
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Karyawan.find({});
			}
		},
	}
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {

		addKaryawan:{
			type: KaryawanType,
			args:{
				nama:  {type: new GraphQLNonNull(GraphQLString)},
				tanggal_lahir:  {type: new GraphQLNonNull(GraphQLString)},
				jenis_kelamin:  {type: new GraphQLNonNull(GraphQLString)},
				agama:  {type: new GraphQLNonNull(GraphQLString)},
				kota_asal:  {type: new GraphQLNonNull(GraphQLString)},
				domisili:  {type: new GraphQLNonNull(GraphQLString)},
				no_kontak:  {type: new GraphQLNonNull(GraphQLString)},
				email:  {type: new GraphQLNonNull(GraphQLString)},
				jabatan:  {type: new GraphQLNonNull(GraphQLString)},
			},
			resolve(parent, args){
				let request = new Karyawan({
					nama: args.nama,
					tanggal_lahir: args.tanggal_lahir,
					jenis_kelamin: args.jenis_kelamin,
					agama: args.agama,
					kota_asal: args.kota_asal,
					domisili: args.domisili,
					no_kontak: args.no_kontak,
					email: args.email,
					jabatan: args.jabatan,
				});
				return request.save();
			}
		},
		hapusKaryawan:{
			type: KaryawanType,
			args: {id:{type:GraphQLID}},
			resolve(parent,args){
				return Karyawan.deleteOne({_id:args.id});
			}
		},
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});
