const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AkunDebitKreditSchema = new Schema({
	kode_akun: String,
	nama_akun: String,
	jenis_akun: String,

});

module.exports = mongoose.model('AkunDebitKredit', AkunDebitKreditSchema);
