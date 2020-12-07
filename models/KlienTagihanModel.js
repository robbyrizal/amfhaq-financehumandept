const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KlienTagihanSchema = new Schema({
	nama_klien: String,

});

module.exports = mongoose.model('Klien_Tagihan', KlienTagihanSchema);
