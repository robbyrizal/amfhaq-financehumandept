(this["webpackJsonpamfhaq-financehumandept"]=this["webpackJsonpamfhaq-financehumandept"]||[]).push([[68],{733:function(n,a,t){"use strict";t.r(a);var e=t(23),i=t(24),r=t(26),u=t(25),d=t(2),k=t.n(d),l=t(29),_=t(745),o=t(80),m=t(87),c=t(78),g=t(67),s=t(68),b=t(70),h=t(64),$=t(71),j=t(95),f=t(119),p=t(120),O=t(121),y=t(154),S=t(148),v=t(149),E=t(91),I=t(93),D=t(94),T=t(85),K=function(n){Object(r.a)(t,n);var a=Object(u.a)(t);function t(n){var i;return Object(e.a)(this,t),(i=a.call(this,n)).state={nama_klien:"",modalIsOpen:!1},i}return Object(i.a)(t,[{key:"toggleModal",value:function(){this.setState({modalIsOpen:!this.state.modalIsOpen})}},{key:"submitForm",value:function(n){n.preventDefault(),this.toggleModal(),this.props.addKlienTagihanMutation({variables:{nama_klien:this.state.nama_klien},refetchQueries:[{query:m.g}]})}},{key:"onDelete",value:function(n){this.props.hapusKlienTagihanMutation({variables:{id:n},refetchQueries:[{query:m.g}]})}},{key:"displayKlienTagihan",value:function(){var n=this,a=this.props.getKlienTagihansQuery,t=0;return a.loading?k.a.createElement("div",null,"Loading Daftar KlienTagihan..."):a.klientagihans.map((function(a){return t++,k.a.createElement("tr",null,k.a.createElement("td",{key:a.id},t),k.a.createElement("td",{key:a.id},a.nama_klien),k.a.createElement("td",{key:a.id},k.a.createElement(l.Link,{to:"/datamaster/editKlienTagihan/".concat(a.id)},k.a.createElement(c.a,{color:"success",size:"sm"},k.a.createElement("i",{className:"fa fa-pencil"})))),k.a.createElement("td",null,k.a.createElement(c.a,{onClick:n.onDelete.bind(n,a.id),color:"danger",size:"sm"},k.a.createElement("i",{className:"fa fa-trash"}))))}))}},{key:"render",value:function(){var n=this;return k.a.createElement("div",{className:"animated fadeIn"},k.a.createElement(g.a,null,k.a.createElement(s.a,null,k.a.createElement(b.a,null,k.a.createElement(h.a,null,k.a.createElement(g.a,null,k.a.createElement(s.a,null,k.a.createElement("i",{className:"fa fa-align-justify"})," Daftar Klien Tagihan"),k.a.createElement(s.a,null,k.a.createElement(c.a,{size:"sm",color:"primary",className:"float-right mb-0",onClick:this.toggleModal.bind(this)},k.a.createElement("i",{className:"fa fa-plus"})," Tambah Data Klien Tagihan")))),k.a.createElement($.a,null,k.a.createElement(j.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},k.a.createElement("thead",{align:"center"},k.a.createElement("tr",null,k.a.createElement("th",null,"No"),k.a.createElement("th",null,"Nama"),k.a.createElement("th",{colspan:"2"},"Aksi"))),k.a.createElement("tbody",{align:"center"},this.displayKlienTagihan())),k.a.createElement("nav",null,k.a.createElement(f.a,null,k.a.createElement(p.a,null,k.a.createElement(O.a,{previous:!0,tag:"button"},"Prev")),k.a.createElement(p.a,{active:!0},k.a.createElement(O.a,{tag:"button"},"1")),k.a.createElement(p.a,null,k.a.createElement(O.a,{tag:"button"},"2")),k.a.createElement(p.a,null,k.a.createElement(O.a,{tag:"button"},"3")),k.a.createElement(p.a,null,k.a.createElement(O.a,{tag:"button"},"4")),k.a.createElement(p.a,null,k.a.createElement(O.a,{next:!0,tag:"button"},"Next")))))))),k.a.createElement(y.a,{isOpen:this.state.modalIsOpen},k.a.createElement(S.a,null,"Form Tambah Data Klien Tagihan"),k.a.createElement(v.a,null,k.a.createElement(E.a,{onSubmit:function(a){n.submitForm(a)}},k.a.createElement(I.a,null,k.a.createElement(D.a,{htmlFor:"name"},"Nama Klien Tagihan"),k.a.createElement(T.a,{type:"text",id:"nama_klientagihan",placeholder:"Nama Lengkap",onChange:function(a){return n.setState({nama_klien:a.target.value})},required:!0})),k.a.createElement(c.a,{type:"submit",color:"primary"},"Submit"),k.a.createElement(c.a,{color:"danger",onClick:this.toggleModal.bind(this)},"Batal")))))}}]),t}(d.Component);a.default=o(Object(_.a)(m.g,{name:"getKlienTagihansQuery"}),Object(_.a)(m.b,{name:"addKlienTagihanMutation"}),Object(_.a)(m.m,{name:"hapusKlienTagihanMutation"}))(K)},87:function(n,a,t){"use strict";t.d(a,"f",(function(){return z})),t.d(a,"j",(function(){return C})),t.d(a,"g",(function(){return B})),t.d(a,"b",(function(){return G})),t.d(a,"m",(function(){return H})),t.d(a,"e",(function(){return R})),t.d(a,"a",(function(){return U})),t.d(a,"p",(function(){return V})),t.d(a,"l",(function(){return W})),t.d(a,"k",(function(){return X})),t.d(a,"i",(function(){return A})),t.d(a,"d",(function(){return F})),t.d(a,"o",(function(){return Q})),t.d(a,"h",(function(){return x})),t.d(a,"c",(function(){return L})),t.d(a,"q",(function(){return w})),t.d(a,"n",(function(){return J}));var e=t(92),i=t(31);function r(){var n=Object(e.a)(["\n  {\n    pemasukans {\n      klien {\n        nama\n        id\n      }\n      proyek {\n        nama\n        id\n      }\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      total_harga\n      dana_diterima\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      id\n    }\n  }\n"]);return r=function(){return n},n}function u(){var n=Object(e.a)(["\n  {\n    purchaseOrders {\n      kode\n      tanggal\n      tanggal_setuju\n      status\n      total_harga\n      id\n    }\n  }\n"]);return u=function(){return n},n}function d(){var n=Object(e.a)(["\n  mutation($id: ID!) {\n    hapusAkunDebitKredit(id: $id) {\n      id\n    }\n  }\n"]);return d=function(){return n},n}function k(){var n=Object(e.a)(["\n  mutation($id: ID!, $kode_akun: String!, $nama_akun: String!) {\n    updateAkunDebitKredit(\n      id: $id\n      kode_akun: $kode_akun\n      nama_akun: $nama_akun\n    ) {\n      kode_akun\n      nama_akun\n      id\n    }\n  }\n"]);return k=function(){return n},n}function l(){var n=Object(e.a)(["\n  mutation($kode_akun: String!, $nama_akun: String!) {\n    addAkunDebitKredit(kode_akun: $kode_akun, nama_akun: $nama_akun) {\n      kode_akun\n      nama_akun\n      id\n    }\n  }\n"]);return l=function(){return n},n}function _(){var n=Object(e.a)(["\n  query($id: ID) {\n    akundebitkredit(id: $id) {\n      kode_akun\n      nama_akun\n      id\n    }\n  }\n"]);return _=function(){return n},n}function o(){var n=Object(e.a)(["\n  {\n    akundebitkredits {\n      kode_akun\n      nama_akun\n      id\n    }\n  }\n"]);return o=function(){return n},n}function m(){var n=Object(e.a)(["\n  mutation($id: ID!) {\n    hapusKlienTagihan(id: $id) {\n      id\n    }\n  }\n"]);return m=function(){return n},n}function c(){var n=Object(e.a)(["\n  mutation($nama_klien: String!) {\n    addKlienTagihan(nama_klien: $nama_klien) {\n      nama_klien\n      id\n    }\n  }\n"]);return c=function(){return n},n}function g(){var n=Object(e.a)(["\n  query($id: ID) {\n    klientagihan(id: $id) {\n      nama_klien\n      id\n    }\n  }\n"]);return g=function(){return n},n}function s(){var n=Object(e.a)(["\n  {\n    klientagihans {\n      nama_klien\n      id\n    }\n  }\n"]);return s=function(){return n},n}function b(){var n=Object(e.a)(["\n  mutation($id: ID!) {\n    hapusPemasukan(id: $id) {\n      id\n    }\n  }\n"]);return b=function(){return n},n}function h(){var n=Object(e.a)(["\n  mutation(\n    $id: ID!,\n    $klien_id: String!,\n    $proyek_id: String!,\n    $tanggal_transaksi: String!,\n    $jatuh_tempo: String!,\n    $keterangan: String!,\n    $akun_debit: String!,\n    $akun_kredit: String!,\n    $total_harga: Int!,\n    $dana_diterima: Int!,\n  ) {\n    updatePemasukan(\n      id: $id,\n      klien_id: $klien_id,\n      proyek_id: $proyek_id,\n      tanggal_transaksi: $tanggal_transaksi,\n      jatuh_tempo: $jatuh_tempo,\n      keterangan: $keterangan,\n      akun_debit: $akun_debit,\n      akun_kredit: $akun_kredit,\n      total_harga: $total_harga,\n      dana_diterima: $dana_diterima,\n    ) {\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      total_harga\n      dana_diterima\n      id\n    }\n  }\n"]);return h=function(){return n},n}function $(){var n=Object(e.a)(["\n  mutation(\n    $klien_id: String!\n    $proyek_id: String!\n    $tanggal_transaksi: String!\n    $jatuh_tempo: String!\n    $keterangan: String!\n    $kode: String!\n    $akun_debit: String!\n    $akun_kredit: String!\n    $total_harga: Int!\n    $dana_diterima: Int!\n  ) {\n    addPemasukan(\n      klien_id: $klien_id\n      proyek_id: $proyek_id\n      tanggal_transaksi: $tanggal_transaksi\n      jatuh_tempo: $jatuh_tempo\n      keterangan: $keterangan\n      kode: $kode\n      akun_debit: $akun_debit\n      akun_kredit: $akun_kredit\n      total_harga: $total_harga\n      dana_diterima: $dana_diterima\n    ) {\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      total_harga\n      dana_diterima\n      id\n    }\n  }\n"]);return $=function(){return n},n}function j(){var n=Object(e.a)(["\n  query($id: ID) {\n    pemasukan(id: $id) {\n      klien {\n        nama\n        id\n      }\n      proyek {\n        nama\n        id\n      }\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      total_harga\n      dana_diterima\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      id\n    }\n  }\n"]);return j=function(){return n},n}function f(){var n=Object(e.a)(["\n  {\n    pemasukans {\n      klien {\n        nama\n        id\n      }\n      proyek {\n        nama\n        id\n      }\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      total_harga\n      dana_diterima\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      id\n    }\n  }\n"]);return f=function(){return n},n}function p(){var n=Object(e.a)(["\n  mutation($id: ID!) {\n    hapusPengeluaran(id: $id) {\n      id\n    }\n  }\n"]);return p=function(){return n},n}function O(){var n=Object(e.a)(["\n  mutation(\n    $id: ID!\n    $klientagihan_id: String!\n    $tanggal_transaksi: String!\n    $jatuh_tempo: String!\n    $keterangan: String!\n    $kode: String!\n    $akun_debit: String!\n    $akun_kredit: String!\n    $jumlah_dana: Int!\n    $jumlah_bayar: Int!\n  ) {\n    updatePengeluaran(\n      id: $id\n      klientagihan_id: $klientagihan_id\n      tanggal_transaksi: $tanggal_transaksi\n      jatuh_tempo: $jatuh_tempo\n      keterangan: $keterangan\n      kode: $kode\n      akun_debit: $akun_debit\n      akun_kredit: $akun_kredit\n      jumlah_dana: $jumlah_dana\n      jumlah_bayar: $jumlah_bayar\n    ) {\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      jumlah_dana\n      jumlah_bayar\n      id\n    }\n  }\n"]);return O=function(){return n},n}function y(){var n=Object(e.a)(["\n  mutation(\n    $klientagihan_id: String!\n    $tanggal_transaksi: String!\n    $jatuh_tempo: String!\n    $keterangan: String!\n    $kode: String!\n    $akun_debit: String!\n    $akun_kredit: String!\n    $jumlah_dana: Int!\n    $jumlah_bayar: Int!\n  ) {\n    addPengeluaran(\n      klientagihan_id: $klientagihan_id\n      tanggal_transaksi: $tanggal_transaksi\n      jatuh_tempo: $jatuh_tempo\n      keterangan: $keterangan\n      kode: $kode\n      akun_debit: $akun_debit\n      akun_kredit: $akun_kredit\n      jumlah_dana: $jumlah_dana\n      jumlah_bayar: $jumlah_bayar\n    ) {\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      jumlah_dana\n      jumlah_bayar\n      id\n    }\n  }\n"]);return y=function(){return n},n}function S(){var n=Object(e.a)(["\n  query($id: ID) {\n    pengeluaran(id: $id) {\n      klien {\n        nama_klien\n        id\n      }\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      jumlah_dana\n      jumlah_bayar\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      id\n    }\n  }\n"]);return S=function(){return n},n}function v(){var n=Object(e.a)(["\n  {\n    pengeluarans {\n      klien {\n        nama_klien\n        id\n      }\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      jumlah_dana\n      jumlah_bayar\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      id\n    }\n  }\n"]);return v=function(){return n},n}function E(){var n=Object(e.a)(["\n  mutation($id: ID!) {\n    hapusTransaksi(id: $id) {\n      id\n    }\n  }\n"]);return E=function(){return n},n}function I(){var n=Object(e.a)(["\n  mutation(\n    $id: ID!\n    $klientagihan_id: String!\n    $klien_id: String!\n    $proyek_id: String!\n    $tanggal_transaksi: String!\n    $jatuh_tempo: String!\n    $keterangan: String!\n    $kode: String!\n    $akun_debit: String!\n    $akun_kredit: String!\n    $jumlah_dana: Int!\n    $jumlah_bayar: Int!\n    $jenis_transaksi: String!\n  ) {\n    updateTransaksi(\n      id: $id\n      klientagihan_id: $klientagihan_id\n      klien_id: $klien_id\n      proyek_id: $proyek_id\n      tanggal_transaksi: $tanggal_transaksi\n      jatuh_tempo: $jatuh_tempo\n      keterangan: $keterangan\n      kode: $kode\n      akun_debit: $akun_debit\n      akun_kredit: $akun_kredit\n      jumlah_dana: $jumlah_dana\n      jumlah_bayar: $jumlah_bayar\n      jenis_transaksi: $jenis_transaksi\n    ) {\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      jumlah_dana\n      jumlah_bayar\n      jenis_transaksi\n      id\n    }\n  }\n"]);return I=function(){return n},n}function D(){var n=Object(e.a)(["\n  mutation(\n    $klientagihan_id: String!\n    $klien_id: String!\n    $proyek_id: String!\n    $tanggal_transaksi: String!\n    $jatuh_tempo: String!\n    $keterangan: String!\n    $kode: String!\n    $akun_debit: String!\n    $akun_kredit: String!\n    $jumlah_dana: Int!\n    $jumlah_bayar: Int!\n    $jenis_transaksi: String!\n  ) {\n    addTransaksi(\n      klientagihan_id: $klientagihan_id\n      klien_id: $klien_id\n      proyek_id: $proyek_id\n      tanggal_transaksi: $tanggal_transaksi\n      jatuh_tempo: $jatuh_tempo\n      keterangan: $keterangan\n      kode: $kode\n      akun_debit: $akun_debit\n      akun_kredit: $akun_kredit\n      jumlah_dana: $jumlah_dana\n      jumlah_bayar: $jumlah_bayar\n      jenis_transaksi: $jenis_transaksi\n    ) {\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      jumlah_dana\n      jumlah_bayar\n      jenis_transaksi\n      id\n    }\n  }\n"]);return D=function(){return n},n}function T(){var n=Object(e.a)(["\n  query($id: ID) {\n    transaksi(id: $id) {\n      klientagihan {\n        nama_klien\n        id\n      }\n      klien {\n        nama\n        id\n      }\n      proyek {\n        nama\n        id\n      }\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      jumlah_dana\n      jumlah_bayar\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      jenis_transaksi\n      id\n    }\n  }\n"]);return T=function(){return n},n}function K(){var n=Object(e.a)(["\n  {\n    transaksis {\n      klientagihan {\n        nama_klien\n        id\n      }\n      klien {\n        nama\n        id\n      }\n      proyek {\n        nama\n        id\n      }\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      jumlah_dana\n      jumlah_bayar\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      jenis_transaksi\n      id\n    }\n  }\n"]);return K=function(){return n},n}function q(){var n=Object(e.a)(["\n  query($id: ID) {\n    client(id: $id) {\n      nama\n      alamat\n      no_kontak\n      email\n      id\n    }\n  }\n"]);return q=function(){return n},n}function N(){var n=Object(e.a)(["\n  {\n    clients {\n      nama\n      alamat\n      no_kontak\n      email\n      id\n    }\n  }\n"]);return N=function(){return n},n}function M(){var n=Object(e.a)(["\n  query($id: ID) {\n    proyek(id: $id) {\n      nama\n      alamat\n      budget\n      tanggal_mulai\n      tanggal_selesai\n      client {\n        nama\n        alamat\n        no_kontak\n        email\n        id\n      }\n      id\n    }\n  }\n"]);return M=function(){return n},n}function P(){var n=Object(e.a)(["\n  {\n    proyeks {\n      nama\n      alamat\n      budget\n      tanggal_mulai\n      tanggal_selesai\n      client {\n        nama\n        alamat\n        no_kontak\n        email\n        id\n      }\n      id\n    }\n  }\n"]);return P=function(){return n},n}var C=Object(i.b)(P()),z=(Object(i.b)(M()),Object(i.b)(N())),A=(Object(i.b)(q()),Object(i.b)(K()),Object(i.b)(T()),Object(i.b)(D()),Object(i.b)(I()),Object(i.b)(E()),Object(i.b)(v())),F=(Object(i.b)(S()),Object(i.b)(y())),Q=(Object(i.b)(O()),Object(i.b)(p())),x=Object(i.b)(f()),L=(Object(i.b)(j()),Object(i.b)($())),w=Object(i.b)(h()),J=Object(i.b)(b()),B=Object(i.b)(s()),G=(Object(i.b)(g()),Object(i.b)(c())),H=Object(i.b)(m()),R=Object(i.b)(o()),U=(Object(i.b)(_()),Object(i.b)(l())),V=Object(i.b)(k()),W=Object(i.b)(d()),X=Object(i.b)(u());Object(i.b)(r())}}]);
//# sourceMappingURL=68.7bbabef3.chunk.js.map