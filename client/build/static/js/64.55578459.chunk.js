(this["webpackJsonpamfhaq-financehumandept"]=this["webpackJsonpamfhaq-financehumandept"]||[]).push([[64],{109:function(t,e,n){"use strict";n.d(e,"d",(function(){return b})),n.d(e,"b",(function(){return E})),n.d(e,"g",(function(){return f})),n.d(e,"c",(function(){return h})),n.d(e,"a",(function(){return g})),n.d(e,"f",(function(){return p})),n.d(e,"e",(function(){return _}));var a=n(96),r=n(31);function i(){var t=Object(a.a)(["\n{\n\tpurchaseOrders {\n\t\tkode\n\t\ttanggal\n\t\ttanggal_setuju\n\t\tstatus\n\t\ttotal_harga\n\t\tid\n\t}\n}\n"]);return i=function(){return t},t}function u(){var t=Object(a.a)(["\n\tmutation($id:ID!){\n\t\thapusAkunDebitKredit(id: $id){\n\t\t\tid\n\t\t}\n\t}\n"]);return u=function(){return t},t}function l(){var t=Object(a.a)(["\n\tmutation($kode_akun:String!,\n\t\t$nama_akun:String!,\n\t\t$jenis_akun:String!){\n\t\taddAkunDebitKredit(kode_akun: $kode_akun,\n\t\t\tnama_akun: $nama_akun,\n\t\t\tjenis_akun: $jenis_akun){\n\t\t\tkode_akun\n\t\t\tnama_akun\n\t\t\tjenis_akun\n\t\t\tid\n\t\t}\n\t}\n"]);return l=function(){return t},t}function c(){var t=Object(a.a)(["\n\tquery($id: ID){\n\t\takundebitkredit(id: $id) {\n\t\t\tkode_akun\n\t\t\tnama_akun\n\t\t\tjenis_akun\n\t\t\tid\n\t\t}\n\t}\n"]);return c=function(){return t},t}function m(){var t=Object(a.a)(["\n{\n\takundebitkredits {\n\t\tkode_akun\n\t\tnama_akun\n\t\tjenis_akun\n\t\tid\n\t}\n}\n"]);return m=function(){return t},t}function o(){var t=Object(a.a)(["\n\tmutation($id:ID!){\n\t\thapusKlienTagihan(id: $id){\n\t\t\tid\n\t\t}\n\t}\n"]);return o=function(){return t},t}function d(){var t=Object(a.a)(["\n\tmutation($nama_klien:String!){\n\t\taddKlienTagihan(nama_klien: $nama_klien){\n\t\t\tnama_klien\n\t\t\tid\n\t\t}\n\t}\n"]);return d=function(){return t},t}function s(){var t=Object(a.a)(["\n\tquery($id: ID){\n\t\tklientagihan(id: $id) {\n\t\t\tnama_klien\n\t\t\tid\n\t\t}\n\t}\n"]);return s=function(){return t},t}function k(){var t=Object(a.a)(["\n{\n\tklientagihans {\n\t\tnama_klien\n\t\tid\n\t}\n}\n"]);return k=function(){return t},t}var b=Object(r.b)(k()),E=(Object(r.b)(s()),Object(r.b)(d())),f=Object(r.b)(o()),h=Object(r.b)(m()),g=(Object(r.b)(c()),Object(r.b)(l())),p=Object(r.b)(u()),_=Object(r.b)(i())},376:function(t,e,n){"use strict";n.r(e);var a=n(23),r=n(24),i=n(26),u=n(25),l=n(2),c=n.n(l),m=n(28),o=n(387),d=n(76),s=n(109),k=n(69),b=n(63),E=n(64),f=n(65),h=n(67),g=n(66),p=n(74),_=n(81),j=n(82),v=n(83),O=n(120),D=n(117),y=n(118),A=n(93),K=n(99),$=n(100),N=n(75),S=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).state={kode_akun:"",nama_akun:"",jenis_akun:"Debit",modalIsOpen:!1},r}return Object(r.a)(n,[{key:"toggleModal",value:function(){this.setState({modalIsOpen:!this.state.modalIsOpen})}},{key:"submitForm",value:function(t){t.preventDefault(),this.toggleModal(),this.props.addAkunDebitKreditMutation({variables:{kode_akun:this.state.kode_akun,nama_akun:this.state.nama_akun,jenis_akun:this.state.jenis_akun},refetchQueries:[{query:s.c}]})}},{key:"onDelete",value:function(t){this.props.hapusAkunDebitKreditMutation({variables:{id:t},refetchQueries:[{query:s.c}]})}},{key:"displayAkunDebitKredit",value:function(){var t=this,e=this.props.getAkunDebitKreditsQuery,n=0;return e.loading?c.a.createElement("div",null,"Loading Daftar AkunDebitKredit..."):e.akundebitkredits.map((function(e){return n++,c.a.createElement("tr",null,c.a.createElement("td",{key:e.id},n),c.a.createElement("td",{key:e.id},e.kode_akun),c.a.createElement("td",{key:e.id},e.nama_akun),c.a.createElement("td",{key:e.id},e.jenis_akun),c.a.createElement("td",{key:e.id},c.a.createElement(m.Link,{to:"/datamaster/editAkunDebitKredit/".concat(e.id)},c.a.createElement(k.a,{color:"success",size:"sm"},c.a.createElement("i",{className:"fa fa-pencil"})))),c.a.createElement("td",null,c.a.createElement(k.a,{onClick:t.onDelete.bind(t,e.id),color:"danger",size:"sm"},c.a.createElement("i",{className:"fa fa-trash"}))))}))}},{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(b.a,null,c.a.createElement(E.a,null,c.a.createElement(f.a,null,c.a.createElement(h.a,null,c.a.createElement(b.a,null,c.a.createElement(E.a,null,c.a.createElement("i",{className:"fa fa-align-justify"})," Daftar Akun Debit Kredit"),c.a.createElement(E.a,null,c.a.createElement(k.a,{size:"sm",color:"primary",className:"float-right mb-0",onClick:this.toggleModal.bind(this)},c.a.createElement("i",{className:"fa fa-plus"})," Tambah Akun Debit Kredit")))),c.a.createElement(g.a,null,c.a.createElement(p.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},c.a.createElement("thead",{align:"center"},c.a.createElement("tr",null,c.a.createElement("th",null,"No"),c.a.createElement("th",null,"Kode Akun"),c.a.createElement("th",null,"Nama Akun"),c.a.createElement("th",null,"Jenis Akun"),c.a.createElement("th",{colspan:"2"},"Aksi"))),c.a.createElement("tbody",{align:"center"},this.displayAkunDebitKredit())),c.a.createElement("nav",null,c.a.createElement(_.a,null,c.a.createElement(j.a,null,c.a.createElement(v.a,{previous:!0,tag:"button"},"Prev")),c.a.createElement(j.a,{active:!0},c.a.createElement(v.a,{tag:"button"},"1")),c.a.createElement(j.a,null,c.a.createElement(v.a,{tag:"button"},"2")),c.a.createElement(j.a,null,c.a.createElement(v.a,{tag:"button"},"3")),c.a.createElement(j.a,null,c.a.createElement(v.a,{tag:"button"},"4")),c.a.createElement(j.a,null,c.a.createElement(v.a,{next:!0,tag:"button"},"Next")))))))),c.a.createElement(O.a,{isOpen:this.state.modalIsOpen},c.a.createElement(D.a,null,"Form Tambah Akun Debit Kredit"),c.a.createElement(y.a,null,c.a.createElement(A.a,{onSubmit:function(e){t.submitForm(e)}},c.a.createElement(K.a,null,c.a.createElement($.a,{htmlFor:"name"},"Kode Akun"),c.a.createElement(N.a,{type:"text",id:"kode_akun",placeholder:"Kode Akun",onChange:function(e){return t.setState({kode_akun:e.target.value})},required:!0})),c.a.createElement(K.a,null,c.a.createElement($.a,{htmlFor:"name"},"Nama Akun"),c.a.createElement(N.a,{type:"text",id:"nama_akun",placeholder:"Nama Akun",onChange:function(e){return t.setState({nama_akun:e.target.value})},required:!0})),c.a.createElement(K.a,null,c.a.createElement($.a,{htmlFor:"name"},"Jenis Akun"),c.a.createElement(N.a,{type:"select",id:"jenis_akun",onChange:function(e){return t.setState({jenis_akun:e.target.value})},required:!0},c.a.createElement("option",{value:"Debit"},"Debit"),c.a.createElement("option",{value:"Kredit"},"Kredit"))),c.a.createElement(k.a,{type:"submit",color:"primary"},"Submit"),c.a.createElement(k.a,{color:"danger",onClick:this.toggleModal.bind(this)},"Batal")))))}}]),n}(l.Component);e.default=d(Object(o.a)(s.c,{name:"getAkunDebitKreditsQuery"}),Object(o.a)(s.a,{name:"addAkunDebitKreditMutation"}),Object(o.a)(s.f,{name:"hapusAkunDebitKreditMutation"}))(S)}}]);
//# sourceMappingURL=64.55578459.chunk.js.map