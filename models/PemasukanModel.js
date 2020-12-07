const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PemasukanSchema = new Schema({
	nama_proyek: String,
	nama_klien: String,
	jumlah_dana: Number,
	jumlah_bayar: Number,
	tgl_transaksi: String,
	jatuh_tempo: String,
	kategori: String,
	akun_debit: String,
	akun_kredit: String,

});

module.exports = mongoose.model('Pemasukan', PemasukanSchema);
