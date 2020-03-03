const graphql = require ('graphql');
const _ = require('lodash');


const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLSchema,
	GraphQLNonNull
} = graphql;



const RootQueryAlat = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		
	}
});

const MutationAlat = new GraphQLObjectType({
	name: 'MutationAlat',
	fields: {
		
	}
});

module.exports = new GraphQLSchema({
	query: RootQueryAlat,
	mutation: MutationAlat
});