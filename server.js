const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0-ghaim.mongodb.net/db_skripsi?retryWrites=true&w=majority`,{useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.once('open', () => {
	console.log('connected to database');
})

app.use(express.static('client/build'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
const DATE = new Date;

app.listen(PORT,() => {
	console.log(`now listening on port ${PORT} at ${DATE}`);
});
