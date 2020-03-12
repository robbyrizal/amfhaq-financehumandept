const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
	tanggal: String,
	divisi_id: String,
});

module.exports = mongoose.model('Request', RequestSchema);