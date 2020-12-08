const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KaryawanSchema = new Schema({
	nama: String,
	tanggal_lahir: String,
	jenis_kelamin: String,
	agama: String,
	kota_asal: String,
	domisili: String,
	no_kontak: String,
	email: String,
	jabatan: String,

});

module.exports = mongoose.model('HumanResource', KaryawanSchema);
