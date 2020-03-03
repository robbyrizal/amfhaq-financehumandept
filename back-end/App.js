const express = require("express");
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/VendorSchema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@cluster0-ghaim.mongodb.net/db_skripsi?retryWrites=true&w=majority',{useNewUrlParser: true });
mongoose.connection.once('open', () => {
	console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(4000,() => {
	console.log('now listening on port 4000');
});