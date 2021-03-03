const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PemasukanSchema = new Schema({
	proyek_id: String,
	klien_id: String,
	total_harga: Number,
	dana_diterima: Number,
	tanggal_transaksi: String,
	jatuh_tempo: String,
	keterangan: String,
	akun_debit: String,
	akun_kredit: String,
	kode: String,
});

module.exports = mongoose.model('Pemasukan', PemasukanSchema);
