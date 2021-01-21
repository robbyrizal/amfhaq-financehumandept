const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PengeluaranSchema = new Schema({
	klientagihan_id: String,
	jumlah_dana: Number,
	jumlah_bayar: Number,
	tanggal_transaksi: String,
	jatuh_tempo: String,
	keterangan: String,
	akun_debit: String,
	akun_kredit: String,
	kode: String,
	// kode_po: String,
});

module.exports = mongoose.model('Pengeluaran', PengeluaranSchema);
