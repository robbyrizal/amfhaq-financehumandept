(this["webpackJsonpamfhaq-financehumandept"]=this["webpackJsonpamfhaq-financehumandept"]||[]).push([[62],{204:function(n,a,e){},726:function(n,a,e){"use strict";e.r(a);var t=e(23),i=e(24),r=e(26),u=e(25),d=e(2),k=e.n(d),l=e(78),o=e(67),_=e(68),m=e(70),s=e(64),c=e(71),g=e(95),h=e(119),b=e(120),j=e(121),$=e(154),p=e(148),f=e(149),y=e(91),v=e(93),E=e(94),O=e(85),S=e(126),D=e(131),I=e(745),K=e(80),P=e(29),q=e(87),T=(e(204),function(n){Object(r.a)(e,n);var a=Object(u.a)(e);function e(n){var i;Object(t.a)(this,e),i=a.call(this,n);var r=new Date,u=r.toISOString().substr(0,10);r.setDate(r.getDate()+30);var d=r.toISOString().substr(0,10);return i.state={kode:"",tanggal_transaksi:u,nama_vendor:"",keterangan:"",jatuh_tempo:d,jumlah_dana:"",jumlah_bayar:"",akun_debit:"",akun_kredit:"",modalIsOpen:!1},i}return Object(i.a)(e,[{key:"toggleModal",value:function(){this.setState({modalIsOpen:!this.state.modalIsOpen})}},{key:"getKodeBaru",value:function(){var n="",a=1;return this.props.getPengeluaransQuery.pengeluarans.map((function(a){""!==a.kode&&(n=a.kode)})),""!==n&&(a=parseInt(n.substring(4,7))+1),n=a<10?"EXP-00"+a:a>=10&&a<100?"EXP-0"+a:"EXP-"+a}},{key:"submitForm",value:function(n){n.preventDefault(),this.toggleModal(),this.props.addPengeluaranMutation({variables:{kode:this.getKodeBaru(),tanggal_transaksi:this.state.tanggal_transaksi,klientagihan_id:this.state.nama_vendor,keterangan:this.state.keterangan,jatuh_tempo:this.state.jatuh_tempo,akun_debit:this.state.akun_debit,akun_kredit:this.state.akun_kredit,jumlah_dana:parseInt(this.state.jumlah_dana),jumlah_bayar:parseInt(this.state.jumlah_dana)},refetchQueries:[{query:q.i}]})}},{key:"onDelete",value:function(n){this.props.hapusPengeluaranMutation({variables:{id:n},refetchQueries:[{query:q.i}]})}},{key:"displayAkunDebit",value:function(){var n=this.props.getAkunDebitKreditsQuery;return n.loading?k.a.createElement("div",null,"Loading Data Divisi..."):n.akundebitkredits.map((function(n){return k.a.createElement("option",{key:n.id,value:n.id}," ",n.nama_akun," ")}))}},{key:"displayAkunKredit",value:function(){var n=this.props.getAkunDebitKreditsQuery;return n.loading?k.a.createElement("div",null,"Loading Data Divisi..."):n.akundebitkredits.map((function(n){return k.a.createElement("option",{key:n.id,value:n.id}," ",n.nama_akun," ")}))}},{key:"displayPengeluaran",value:function(){var n=this,a=this.props.getPengeluaransQuery,e=0;return a.loading?void 0:a.pengeluarans.map((function(a){return e++,k.a.createElement("tr",{key:a.id},k.a.createElement("td",null,e),k.a.createElement("td",null,a.tanggal_transaksi),k.a.createElement("td",null,a.keterangan),k.a.createElement("td",null,a.kode),k.a.createElement("td",null,a.jumlah_dana),k.a.createElement("td",null,a.klien.nama_klien),k.a.createElement("td",null,k.a.createElement(P.Link,{to:"/pengeluaran/editDataPengeluaran/".concat(a.id)},k.a.createElement(l.a,{color:"success",size:"sm"},k.a.createElement("i",{className:"fa fa-pencil"})))),k.a.createElement("td",null,k.a.createElement(l.a,{onClick:n.onDelete.bind(n,a.id),color:"danger",size:"sm"},k.a.createElement("i",{className:"fa fa-trash"}))))}))}},{key:"displayKlien",value:function(){var n=this.props.getKlienTagihansQuery;return n.loading?k.a.createElement("div",null,"Loading Data Klien..."):n.klientagihans.map((function(n){return k.a.createElement("option",{key:n.id,value:n.id}," ",n.nama_klien," ")}))}},{key:"setGaji",value:function(){var n=this,a=0,e=this.props.getKlienTagihansQuery;return e.loading?k.a.createElement("div",null,"Loading Data Klien..."):(e.klientagihans.map((function(e){e.id===n.state.nama_vendor&&"5fedc812f3d4210c78a7decc"===n.state.nama_vendor&&(a=parseInt("15000000"))})),a)}},{key:"render",value:function(){var n=this;return k.a.createElement("div",{className:"animated fadeIn"},k.a.createElement(o.a,null,k.a.createElement(_.a,{md:"12"},k.a.createElement(m.a,null,k.a.createElement(s.a,null,k.a.createElement("i",{className:"fa fa-align-justify"})," Daftar Pengeluaran",k.a.createElement(l.a,{size:"sm",color:"primary",className:"float-right mb-0",onClick:this.toggleModal.bind(this)},k.a.createElement("i",{className:"fa fa-plus-square"})," Buat Transaksi Pengeluaran Baru")),k.a.createElement(c.a,null,k.a.createElement(g.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},k.a.createElement("thead",null,k.a.createElement("tr",null,k.a.createElement("th",null,"No"),k.a.createElement("th",null,"Tanggal Transaksi"),k.a.createElement("th",null,"Keterangan"),k.a.createElement("th",null,"Kode Invoice"),k.a.createElement("th",null,"Nilai"),k.a.createElement("th",null,"Klien / Vendor"),k.a.createElement("th",{colSpan:"2"},"Aksi"))),k.a.createElement("tbody",{align:"center"},this.displayPengeluaran())),k.a.createElement("nav",null,k.a.createElement(h.a,null,k.a.createElement(b.a,null,k.a.createElement(j.a,{previous:!0,tag:"button"},"Prev")),k.a.createElement(b.a,{active:!0},k.a.createElement(j.a,{tag:"button"},"1")),k.a.createElement(b.a,null,k.a.createElement(j.a,{tag:"button"},"2")),k.a.createElement(b.a,null,k.a.createElement(j.a,{tag:"button"},"3")),k.a.createElement(b.a,null,k.a.createElement(j.a,{tag:"button"},"4")),k.a.createElement(b.a,null,k.a.createElement(j.a,{next:!0,tag:"button"},"Next")))))))),k.a.createElement($.a,{isOpen:this.state.modalIsOpen},k.a.createElement(p.a,null,"Form Tambah Data Pengeluaran"),k.a.createElement(f.a,null,k.a.createElement(y.a,{onSubmit:function(a){n.submitForm(a)}},k.a.createElement(v.a,null,k.a.createElement(E.a,{htmlFor:"name"},"Klien / Vendor"),k.a.createElement(O.a,{type:"select",id:"vendor",onChange:function(a){return n.setState({nama_vendor:a.target.value})},required:!0},k.a.createElement("option",{value:""},"Pilih Klien / Vendor"),this.displayKlien())),k.a.createElement(v.a,null,k.a.createElement(E.a,{htmlFor:"name"},"Keterangan"),k.a.createElement(O.a,{type:"textarea",name:"Keterangan",id:"keterangan",placeholder:"Keterangan",onChange:function(a){return n.setState({keterangan:a.target.value})},required:!0})),k.a.createElement(v.a,null,k.a.createElement(E.a,{htmlFor:"name"},"Jumlah Biaya"),k.a.createElement(S.a,null,k.a.createElement(D.a,{addonType:"prepend"},"Rp."),k.a.createElement(O.a,{type:"number",id:"jumlahbiaya",defaultValue:this.setGaji(),placeholder:"Masukkan Jumlah Biaya",className:"text-align-right",onChange:function(a){return n.setState({jumlah_dana:a.target.value})},required:!0}),k.a.createElement(D.a,{addonType:"append"},".00"))),k.a.createElement(v.a,null,k.a.createElement(E.a,{htmlFor:"name"},"Tanggal Transaksi"),k.a.createElement(O.a,{type:"date",defaultValue:this.state.tanggal_transaksi,id:"tgltrans",placeholder:"Masukkan Tanggal Transaksi",onChange:function(a){return n.setState({tanggal_transaksi:a.target.value})},required:!0})),k.a.createElement(v.a,null,k.a.createElement(E.a,{htmlFor:"name"},"Akun Debit"),k.a.createElement(O.a,{type:"select",name:"akun_deb",id:"akun_kre",onChange:function(a){return n.setState({akun_debit:a.target.value})},required:!0},k.a.createElement("option",{value:""},"Pilih Akun Debit"),this.displayAkunDebit())),k.a.createElement(v.a,null,k.a.createElement(E.a,{htmlFor:"name"},"Akun Kredit"),k.a.createElement(O.a,{type:"select",name:"akun_kre",id:"akun_kre",onChange:function(a){return n.setState({akun_kredit:a.target.value})},required:!0},k.a.createElement("option",{value:""},"Pilih Akun Kredit"),this.displayAkunKredit())),k.a.createElement(l.a,{type:"submit",color:"primary"},"Submit"),k.a.createElement(l.a,{color:"danger",onClick:this.toggleModal.bind(this)},"Batal")))))}}]),e}(d.Component));a.default=K(Object(I.a)(q.i,{name:"getPengeluaransQuery"}),Object(I.a)(q.g,{name:"getKlienTagihansQuery"}),Object(I.a)(q.d,{name:"addPengeluaranMutation"}),Object(I.a)(q.o,{name:"hapusPengeluaranMutation"}),Object(I.a)(q.e,{name:"getAkunDebitKreditsQuery"}))(T)},87:function(n,a,e){"use strict";e.d(a,"f",(function(){return M})),e.d(a,"j",(function(){return C})),e.d(a,"g",(function(){return J})),e.d(a,"b",(function(){return w})),e.d(a,"m",(function(){return X})),e.d(a,"e",(function(){return G})),e.d(a,"a",(function(){return R})),e.d(a,"p",(function(){return H})),e.d(a,"l",(function(){return U})),e.d(a,"k",(function(){return W})),e.d(a,"i",(function(){return N})),e.d(a,"d",(function(){return F})),e.d(a,"o",(function(){return B})),e.d(a,"h",(function(){return L})),e.d(a,"c",(function(){return V})),e.d(a,"q",(function(){return x})),e.d(a,"n",(function(){return z}));var t=e(92),i=e(31);function r(){var n=Object(t.a)(["\n  {\n    pemasukans {\n      klien {\n        nama\n        id\n      }\n      proyek {\n        nama\n        id\n      }\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      total_harga\n      dana_diterima\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      id\n    }\n  }\n"]);return r=function(){return n},n}function u(){var n=Object(t.a)(["\n  {\n    purchaseOrders {\n      kode\n      tanggal\n      tanggal_setuju\n      status\n      total_harga\n      id\n    }\n  }\n"]);return u=function(){return n},n}function d(){var n=Object(t.a)(["\n  mutation($id: ID!) {\n    hapusAkunDebitKredit(id: $id) {\n      id\n    }\n  }\n"]);return d=function(){return n},n}function k(){var n=Object(t.a)(["\n  mutation($id: ID!, $kode_akun: String!, $nama_akun: String!) {\n    updateAkunDebitKredit(\n      id: $id\n      kode_akun: $kode_akun\n      nama_akun: $nama_akun\n    ) {\n      kode_akun\n      nama_akun\n      id\n    }\n  }\n"]);return k=function(){return n},n}function l(){var n=Object(t.a)(["\n  mutation($kode_akun: String!, $nama_akun: String!) {\n    addAkunDebitKredit(kode_akun: $kode_akun, nama_akun: $nama_akun) {\n      kode_akun\n      nama_akun\n      id\n    }\n  }\n"]);return l=function(){return n},n}function o(){var n=Object(t.a)(["\n  query($id: ID) {\n    akundebitkredit(id: $id) {\n      kode_akun\n      nama_akun\n      id\n    }\n  }\n"]);return o=function(){return n},n}function _(){var n=Object(t.a)(["\n  {\n    akundebitkredits {\n      kode_akun\n      nama_akun\n      id\n    }\n  }\n"]);return _=function(){return n},n}function m(){var n=Object(t.a)(["\n  mutation($id: ID!) {\n    hapusKlienTagihan(id: $id) {\n      id\n    }\n  }\n"]);return m=function(){return n},n}function s(){var n=Object(t.a)(["\n  mutation($nama_klien: String!) {\n    addKlienTagihan(nama_klien: $nama_klien) {\n      nama_klien\n      id\n    }\n  }\n"]);return s=function(){return n},n}function c(){var n=Object(t.a)(["\n  query($id: ID) {\n    klientagihan(id: $id) {\n      nama_klien\n      id\n    }\n  }\n"]);return c=function(){return n},n}function g(){var n=Object(t.a)(["\n  {\n    klientagihans {\n      nama_klien\n      id\n    }\n  }\n"]);return g=function(){return n},n}function h(){var n=Object(t.a)(["\n  mutation($id: ID!) {\n    hapusPemasukan(id: $id) {\n      id\n    }\n  }\n"]);return h=function(){return n},n}function b(){var n=Object(t.a)(["\n  mutation(\n    $id: ID!,\n    $klien_id: String!,\n    $proyek_id: String!,\n    $tanggal_transaksi: String!,\n    $jatuh_tempo: String!,\n    $keterangan: String!,\n    $akun_debit: String!,\n    $akun_kredit: String!,\n    $total_harga: Int!,\n    $dana_diterima: Int!,\n  ) {\n    updatePemasukan(\n      id: $id,\n      klien_id: $klien_id,\n      proyek_id: $proyek_id,\n      tanggal_transaksi: $tanggal_transaksi,\n      jatuh_tempo: $jatuh_tempo,\n      keterangan: $keterangan,\n      akun_debit: $akun_debit,\n      akun_kredit: $akun_kredit,\n      total_harga: $total_harga,\n      dana_diterima: $dana_diterima,\n    ) {\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      total_harga\n      dana_diterima\n      id\n    }\n  }\n"]);return b=function(){return n},n}function j(){var n=Object(t.a)(["\n  mutation(\n    $klien_id: String!\n    $proyek_id: String!\n    $tanggal_transaksi: String!\n    $jatuh_tempo: String!\n    $keterangan: String!\n    $kode: String!\n    $akun_debit: String!\n    $akun_kredit: String!\n    $total_harga: Int!\n    $dana_diterima: Int!\n  ) {\n    addPemasukan(\n      klien_id: $klien_id\n      proyek_id: $proyek_id\n      tanggal_transaksi: $tanggal_transaksi\n      jatuh_tempo: $jatuh_tempo\n      keterangan: $keterangan\n      kode: $kode\n      akun_debit: $akun_debit\n      akun_kredit: $akun_kredit\n      total_harga: $total_harga\n      dana_diterima: $dana_diterima\n    ) {\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      total_harga\n      dana_diterima\n      id\n    }\n  }\n"]);return j=function(){return n},n}function $(){var n=Object(t.a)(["\n  query($id: ID) {\n    pemasukan(id: $id) {\n      klien {\n        nama\n        id\n      }\n      proyek {\n        nama\n        id\n      }\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      total_harga\n      dana_diterima\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      id\n    }\n  }\n"]);return $=function(){return n},n}function p(){var n=Object(t.a)(["\n  {\n    pemasukans {\n      klien {\n        nama\n        id\n      }\n      proyek {\n        nama\n        id\n      }\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      total_harga\n      dana_diterima\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      id\n    }\n  }\n"]);return p=function(){return n},n}function f(){var n=Object(t.a)(["\n  mutation($id: ID!) {\n    hapusPengeluaran(id: $id) {\n      id\n    }\n  }\n"]);return f=function(){return n},n}function y(){var n=Object(t.a)(["\n  mutation(\n    $id: ID!\n    $klientagihan_id: String!\n    $tanggal_transaksi: String!\n    $jatuh_tempo: String!\n    $keterangan: String!\n    $kode: String!\n    $akun_debit: String!\n    $akun_kredit: String!\n    $jumlah_dana: Int!\n    $jumlah_bayar: Int!\n  ) {\n    updatePengeluaran(\n      id: $id\n      klientagihan_id: $klientagihan_id\n      tanggal_transaksi: $tanggal_transaksi\n      jatuh_tempo: $jatuh_tempo\n      keterangan: $keterangan\n      kode: $kode\n      akun_debit: $akun_debit\n      akun_kredit: $akun_kredit\n      jumlah_dana: $jumlah_dana\n      jumlah_bayar: $jumlah_bayar\n    ) {\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      jumlah_dana\n      jumlah_bayar\n      id\n    }\n  }\n"]);return y=function(){return n},n}function v(){var n=Object(t.a)(["\n  mutation(\n    $klientagihan_id: String!\n    $tanggal_transaksi: String!\n    $jatuh_tempo: String!\n    $keterangan: String!\n    $kode: String!\n    $akun_debit: String!\n    $akun_kredit: String!\n    $jumlah_dana: Int!\n    $jumlah_bayar: Int!\n  ) {\n    addPengeluaran(\n      klientagihan_id: $klientagihan_id\n      tanggal_transaksi: $tanggal_transaksi\n      jatuh_tempo: $jatuh_tempo\n      keterangan: $keterangan\n      kode: $kode\n      akun_debit: $akun_debit\n      akun_kredit: $akun_kredit\n      jumlah_dana: $jumlah_dana\n      jumlah_bayar: $jumlah_bayar\n    ) {\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      jumlah_dana\n      jumlah_bayar\n      id\n    }\n  }\n"]);return v=function(){return n},n}function E(){var n=Object(t.a)(["\n  query($id: ID) {\n    pengeluaran(id: $id) {\n      klien {\n        nama_klien\n        id\n      }\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      jumlah_dana\n      jumlah_bayar\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      id\n    }\n  }\n"]);return E=function(){return n},n}function O(){var n=Object(t.a)(["\n  {\n    pengeluarans {\n      klien {\n        nama_klien\n        id\n      }\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      jumlah_dana\n      jumlah_bayar\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      id\n    }\n  }\n"]);return O=function(){return n},n}function S(){var n=Object(t.a)(["\n  mutation($id: ID!) {\n    hapusTransaksi(id: $id) {\n      id\n    }\n  }\n"]);return S=function(){return n},n}function D(){var n=Object(t.a)(["\n  mutation(\n    $id: ID!\n    $klientagihan_id: String!\n    $klien_id: String!\n    $proyek_id: String!\n    $tanggal_transaksi: String!\n    $jatuh_tempo: String!\n    $keterangan: String!\n    $kode: String!\n    $akun_debit: String!\n    $akun_kredit: String!\n    $jumlah_dana: Int!\n    $jumlah_bayar: Int!\n    $jenis_transaksi: String!\n  ) {\n    updateTransaksi(\n      id: $id\n      klientagihan_id: $klientagihan_id\n      klien_id: $klien_id\n      proyek_id: $proyek_id\n      tanggal_transaksi: $tanggal_transaksi\n      jatuh_tempo: $jatuh_tempo\n      keterangan: $keterangan\n      kode: $kode\n      akun_debit: $akun_debit\n      akun_kredit: $akun_kredit\n      jumlah_dana: $jumlah_dana\n      jumlah_bayar: $jumlah_bayar\n      jenis_transaksi: $jenis_transaksi\n    ) {\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      jumlah_dana\n      jumlah_bayar\n      jenis_transaksi\n      id\n    }\n  }\n"]);return D=function(){return n},n}function I(){var n=Object(t.a)(["\n  mutation(\n    $klientagihan_id: String!\n    $klien_id: String!\n    $proyek_id: String!\n    $tanggal_transaksi: String!\n    $jatuh_tempo: String!\n    $keterangan: String!\n    $kode: String!\n    $akun_debit: String!\n    $akun_kredit: String!\n    $jumlah_dana: Int!\n    $jumlah_bayar: Int!\n    $jenis_transaksi: String!\n  ) {\n    addTransaksi(\n      klientagihan_id: $klientagihan_id\n      klien_id: $klien_id\n      proyek_id: $proyek_id\n      tanggal_transaksi: $tanggal_transaksi\n      jatuh_tempo: $jatuh_tempo\n      keterangan: $keterangan\n      kode: $kode\n      akun_debit: $akun_debit\n      akun_kredit: $akun_kredit\n      jumlah_dana: $jumlah_dana\n      jumlah_bayar: $jumlah_bayar\n      jenis_transaksi: $jenis_transaksi\n    ) {\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      jumlah_dana\n      jumlah_bayar\n      jenis_transaksi\n      id\n    }\n  }\n"]);return I=function(){return n},n}function K(){var n=Object(t.a)(["\n  query($id: ID) {\n    transaksi(id: $id) {\n      klientagihan {\n        nama_klien\n        id\n      }\n      klien {\n        nama\n        id\n      }\n      proyek {\n        nama\n        id\n      }\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      jumlah_dana\n      jumlah_bayar\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      jenis_transaksi\n      id\n    }\n  }\n"]);return K=function(){return n},n}function P(){var n=Object(t.a)(["\n  {\n    transaksis {\n      klientagihan {\n        nama_klien\n        id\n      }\n      klien {\n        nama\n        id\n      }\n      proyek {\n        nama\n        id\n      }\n      tanggal_transaksi\n      jatuh_tempo\n      keterangan\n      kode\n      jumlah_dana\n      jumlah_bayar\n      akun_debit {\n        kode_akun\n        nama_akun\n        id\n      }\n      akun_kredit {\n        kode_akun\n        nama_akun\n        id\n      }\n      jenis_transaksi\n      id\n    }\n  }\n"]);return P=function(){return n},n}function q(){var n=Object(t.a)(["\n  query($id: ID) {\n    client(id: $id) {\n      nama\n      alamat\n      no_kontak\n      email\n      id\n    }\n  }\n"]);return q=function(){return n},n}function T(){var n=Object(t.a)(["\n  {\n    clients {\n      nama\n      alamat\n      no_kontak\n      email\n      id\n    }\n  }\n"]);return T=function(){return n},n}function A(){var n=Object(t.a)(["\n  query($id: ID) {\n    proyek(id: $id) {\n      nama\n      alamat\n      budget\n      tanggal_mulai\n      tanggal_selesai\n      client {\n        nama\n        alamat\n        no_kontak\n        email\n        id\n      }\n      id\n    }\n  }\n"]);return A=function(){return n},n}function Q(){var n=Object(t.a)(["\n  {\n    proyeks {\n      nama\n      alamat\n      budget\n      tanggal_mulai\n      tanggal_selesai\n      client {\n        nama\n        alamat\n        no_kontak\n        email\n        id\n      }\n      id\n    }\n  }\n"]);return Q=function(){return n},n}var C=Object(i.b)(Q()),M=(Object(i.b)(A()),Object(i.b)(T())),N=(Object(i.b)(q()),Object(i.b)(P()),Object(i.b)(K()),Object(i.b)(I()),Object(i.b)(D()),Object(i.b)(S()),Object(i.b)(O())),F=(Object(i.b)(E()),Object(i.b)(v())),B=(Object(i.b)(y()),Object(i.b)(f())),L=Object(i.b)(p()),V=(Object(i.b)($()),Object(i.b)(j())),x=Object(i.b)(b()),z=Object(i.b)(h()),J=Object(i.b)(g()),w=(Object(i.b)(c()),Object(i.b)(s())),X=Object(i.b)(m()),G=Object(i.b)(_()),R=(Object(i.b)(o()),Object(i.b)(l())),H=Object(i.b)(k()),U=Object(i.b)(d()),W=Object(i.b)(u());Object(i.b)(r())}}]);
//# sourceMappingURL=62.00da3d6d.chunk.js.map