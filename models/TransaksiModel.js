const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransaksiSchema = new Schema({
	proyek_id: String,
	klien_id: String,
    klientagihan_id: String,
	jumlah_dana: Number,
	jumlah_bayar: Number,
	tanggal_transaksi: String,
	jatuh_tempo: String,
	keterangan: String,
	akun_debit: String,
	akun_kredit: String,
	kode: String,
    jenis_transaksi:String,
});

module.exports = mongoose.model('Transaksi', TransaksiSchema);
