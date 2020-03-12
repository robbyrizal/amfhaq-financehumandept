const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListRequestSchema = new Schema({
	nama_barang: String,
	jumlah_barang: Number,
	satuan: String,
	request_id: String,
});

module.exports = mongoose.model('ListRequest', ListRequestSchema);