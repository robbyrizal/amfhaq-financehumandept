(this["webpackJsonpamfhaq-financehumandept"]=this["webpackJsonpamfhaq-financehumandept"]||[]).push([[27],{130:function(e,a,t){"use strict";t.d(a,"d",(function(){return d})),t.d(a,"c",(function(){return u})),t.d(a,"a",(function(){return p})),t.d(a,"f",(function(){return h})),t.d(a,"e",(function(){return b})),t.d(a,"b",(function(){return g}));var n=t(129),i=t(30);function l(){var e=Object(n.a)(["\n{\n\tdivisis {\n\t\tnama\n\t\tid\n\t}\n}\n"]);return l=function(){return e},e}function r(){var e=Object(n.a)(["\n\tmutation($id:ID!){\n\t\thapusKaryawan(id: $id){\n\t\t\tid\n\t\t}\n\t}\n"]);return r=function(){return e},e}function s(){var e=Object(n.a)(["\n\tmutation($id:ID!, $nama:String!, $tanggal_lahir:String!, $jenis_kelamin:String!,\n\t\t$agama:String!, $tempat_lahir:String!, $alamat:String!,\n\t\t$no_kontak:String!, $email:String!, $jabatan:String!,\n\t\t$divisi_id:String!){\n\t\tupdateKaryawan(id:$id,\n\t\tnama: $nama,\n\t\ttanggal_lahir: $tanggal_lahir,\n\t\tjenis_kelamin: $jenis_kelamin,\n\t\tagama: $agama,\n\t\ttempat_lahir: $tempat_lahir,\n\t\talamat: $alamat,\n\t\tno_kontak: $no_kontak,\n\t\temail: $email,\n\t\tjabatan: $jabatan,\n\t\tdivisi_id: $divisi_id,){\n\t\t\tnama\n\t\t\ttanggal_lahir\n\t\t\tjenis_kelamin\n\t\t\tagama\n\t\t\ttempat_lahir\n\t\t\talamat\n\t\t\tno_kontak\n\t\t\temail\n\t\t\tjabatan\n\t\t\tid\n\t\t}\n\t}\n"]);return s=function(){return e},e}function o(){var e=Object(n.a)(["\n\tmutation($nama:String!, $tanggal_lahir:String!, $jenis_kelamin:String!,\n\t\t$agama:String!, $tempat_lahir:String!, $alamat:String!,\n\t\t$no_kontak:String!, $email:String!, $jabatan:String!,\n\t\t$divisi_id:String!){\n\t\taddKaryawan(nama: $nama,\n\t\ttanggal_lahir: $tanggal_lahir,\n\t\tjenis_kelamin: $jenis_kelamin,\n\t\tagama: $agama,\n\t\ttempat_lahir: $tempat_lahir,\n\t\talamat: $alamat,\n\t\tno_kontak: $no_kontak,\n\t\temail: $email,\n\t\tjabatan: $jabatan,\n\t\tdivisi_id: $divisi_id,){\n\t\t\tnama\n\t\t\ttanggal_lahir\n\t\t\tjenis_kelamin\n\t\t\tagama\n\t\t\ttempat_lahir\n\t\t\talamat\n\t\t\tno_kontak\n\t\t\temail\n\t\t\tjabatan\n\t\t\tid\n\t\t}\n\t}\n"]);return o=function(){return e},e}function c(){var e=Object(n.a)(["\n\tquery($id: ID){\n\t\tkaryawan(id: $id) {\n\t\t\tnama\n\t\t\ttanggal_lahir\n\t\t\tjenis_kelamin\n\t\t\tagama\n\t\t\ttempat_lahir\n\t\t\talamat\n\t\t\tno_kontak\n\t\t\temail\n\t\t\tjabatan\n\t\t\tdivisi{\n\t\t\t\tnama\n\t\t\t\tid\n\t\t\t}\n\t\t\tid\n\t\t}\n\t}\n"]);return c=function(){return e},e}function m(){var e=Object(n.a)(["\n{\n\tkaryawans {\n\t\tnama\n\t\ttanggal_lahir\n\t\tjenis_kelamin\n\t\tagama\n\t\ttempat_lahir\n\t\talamat\n\t\tno_kontak\n\t\temail\n\t\tjabatan\n\t\tdivisi{\n\t\t\tnama\n\t\t\tid\n\t\t}\n\t\tid\n\t}\n}\n"]);return m=function(){return e},e}var d=Object(i.b)(m()),u=Object(i.b)(c()),p=Object(i.b)(o()),h=Object(i.b)(s()),b=Object(i.b)(r()),g=Object(i.b)(l())},163:function(e,a,t){"use strict";var n=t(4),i=t(13),l=t(2),r=t.n(l),s=t(14),o=t.n(s),c=t(58),m=t.n(c),d=t(59),u={tag:d.q,wrapTag:d.q,toggle:o.a.func,className:o.a.string,cssModule:o.a.object,children:o.a.node,closeAriaLabel:o.a.string,charCode:o.a.oneOfType([o.a.string,o.a.number]),close:o.a.object},p=function(e){var a,t=e.className,l=e.cssModule,s=e.children,o=e.toggle,c=e.tag,u=e.wrapTag,p=e.closeAriaLabel,h=e.charCode,b=e.close,g=Object(i.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),f=Object(d.m)(m()(t,"modal-header"),l);if(!b&&o){var v="number"===typeof h?String.fromCharCode(h):h;a=r.a.createElement("button",{type:"button",onClick:o,className:Object(d.m)("close",l),"aria-label":p},r.a.createElement("span",{"aria-hidden":"true"},v))}return r.a.createElement(u,Object(n.a)({},g,{className:f}),r.a.createElement(c,{className:Object(d.m)("modal-title",l)},s),b||a)};p.propTypes=u,p.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},a.a=p},164:function(e,a,t){"use strict";var n=t(4),i=t(13),l=t(2),r=t.n(l),s=t(14),o=t.n(s),c=t(58),m=t.n(c),d=t(59),u={tag:d.q,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.tag,s=Object(i.a)(e,["className","cssModule","tag"]),o=Object(d.m)(m()(a,"modal-body"),t);return r.a.createElement(l,Object(n.a)({},s,{className:o}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},166:function(e,a,t){"use strict";var n=t(62),i=t(4),l=t(60),r=t(10),s=t(2),o=t.n(s),c=t(14),m=t.n(c),d=t(58),u=t.n(d),p=t(28),h=t.n(p),b=t(59),g={children:m.a.node.isRequired,node:m.a.any},f=function(e){function a(){return e.apply(this,arguments)||this}Object(r.a)(a,e);var t=a.prototype;return t.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},t.render=function(){return b.f?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},a}(o.a.Component);f.propTypes=g;var v=f,E=t(71);function k(){}var y=m.a.shape(E.a.propTypes),j={isOpen:m.a.bool,autoFocus:m.a.bool,centered:m.a.bool,scrollable:m.a.bool,size:m.a.string,toggle:m.a.func,keyboard:m.a.bool,role:m.a.string,labelledBy:m.a.string,backdrop:m.a.oneOfType([m.a.bool,m.a.oneOf(["static"])]),onEnter:m.a.func,onExit:m.a.func,onOpened:m.a.func,onClosed:m.a.func,children:m.a.node,className:m.a.string,wrapClassName:m.a.string,modalClassName:m.a.string,backdropClassName:m.a.string,contentClassName:m.a.string,external:m.a.node,fade:m.a.bool,cssModule:m.a.object,zIndex:m.a.oneOfType([m.a.number,m.a.string]),backdropTransition:y,modalTransition:y,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func]),unmountOnClose:m.a.bool,returnFocusAfterClose:m.a.bool},O=Object.keys(j),_={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:k,onClosed:k,modalTransition:{timeout:b.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.e.Fade},unmountOnClose:!0,returnFocusAfterClose:!0},C=function(e){function a(a){var t;return(t=e.call(this,a)||this)._element=null,t._originalBodyPadding=null,t.getFocusableChildren=t.getFocusableChildren.bind(Object(l.a)(t)),t.handleBackdropClick=t.handleBackdropClick.bind(Object(l.a)(t)),t.handleBackdropMouseDown=t.handleBackdropMouseDown.bind(Object(l.a)(t)),t.handleEscape=t.handleEscape.bind(Object(l.a)(t)),t.handleStaticBackdropAnimation=t.handleStaticBackdropAnimation.bind(Object(l.a)(t)),t.handleTab=t.handleTab.bind(Object(l.a)(t)),t.onOpened=t.onOpened.bind(Object(l.a)(t)),t.onClosed=t.onClosed.bind(Object(l.a)(t)),t.manageFocusAfterClose=t.manageFocusAfterClose.bind(Object(l.a)(t)),t.clearBackdropAnimationTimeout=t.clearBackdropAnimationTimeout.bind(Object(l.a)(t)),t.state={isOpen:!1,showStaticBackdropAnimation:!1},t}Object(r.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this.props,a=e.isOpen,t=e.autoFocus,n=e.onEnter;a&&(this.init(),this.setState({isOpen:!0}),t&&this.setFocus()),n&&n(),this._isMounted=!0},t.componentDidUpdate=function(e,a){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!a.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},t.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),this.props.isOpen&&this.close()),this._isMounted=!1},t.onOpened=function(e,a){this.props.onOpened(),(this.props.modalTransition.onEntered||k)(e,a)},t.onClosed=function(e){var a=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||k)(e),a&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},t.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},t.getFocusableChildren=function(){return this._element.querySelectorAll(b.h.join(", "))},t.getFocusedChild=function(){var e,a=this.getFocusableChildren();try{e=document.activeElement}catch(t){e=a[0]}return e},t.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var a=this._dialog?this._dialog.parentNode:null;if(a&&e.target===a&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;a&&e.target===a&&this.props.toggle&&this.props.toggle(e)}},t.handleTab=function(e){if(9===e.which){var a=this.getFocusableChildren(),t=a.length;if(0!==t){for(var n=this.getFocusedChild(),i=0,l=0;l<t;l+=1)if(a[l]===n){i=l;break}e.shiftKey&&0===i?(e.preventDefault(),a[t-1].focus()):e.shiftKey||i!==t-1||(e.preventDefault(),a[0].focus())}}},t.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},t.handleEscape=function(e){if(this.props.isOpen&&this.props.keyboard&&e.keyCode===b.l.esc&&this.props.toggle){if(e.preventDefault(),e.stopPropagation(),"static"===this.props.backdrop)return void this.handleStaticBackdropAnimation();this.props.toggle(e)}},t.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},t.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,document.body.appendChild(this._element)),this._originalBodyPadding=Object(b.i)(),Object(b.g)(),0===a.openCount&&(document.body.className=u()(document.body.className,Object(b.m)("modal-open",this.props.cssModule))),a.openCount+=1},t.destroy=function(){this._element&&(document.body.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},t.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},t.close=function(){if(a.openCount<=1){var e=Object(b.m)("modal-open",this.props.cssModule),t=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(t," ").trim()}this.manageFocusAfterClose(),a.openCount=Math.max(0,a.openCount-1),Object(b.p)(this._originalBodyPadding)},t.renderModalDialog=function(){var e,a=this,t=Object(b.n)(this.props,O);return o.a.createElement("div",Object(i.a)({},t,{className:Object(b.m)(u()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){a._dialog=e}}),o.a.createElement("div",{className:Object(b.m)(u()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},t.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var a=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=a?"none":"block";var t=this.props,l=t.wrapClassName,r=t.modalClassName,s=t.backdropClassName,c=t.cssModule,m=t.isOpen,d=t.backdrop,p=t.role,h=t.labelledBy,g=t.external,f=t.innerRef,k={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":h,role:p,tabIndex:"-1"},y=this.props.fade,j=Object(n.a)({},E.a.defaultProps,{},this.props.modalTransition,{baseClass:y?this.props.modalTransition.baseClass:"",timeout:y?this.props.modalTransition.timeout:0}),O=Object(n.a)({},E.a.defaultProps,{},this.props.backdropTransition,{baseClass:y?this.props.backdropTransition.baseClass:"",timeout:y?this.props.backdropTransition.timeout:0}),_=d&&(y?o.a.createElement(E.a,Object(i.a)({},O,{in:m&&!!d,cssModule:c,className:Object(b.m)(u()("modal-backdrop",s),c)})):o.a.createElement("div",{className:Object(b.m)(u()("modal-backdrop","show",s),c)}));return o.a.createElement(v,{node:this._element},o.a.createElement("div",{className:Object(b.m)(l)},o.a.createElement(E.a,Object(i.a)({},k,j,{in:m,onEntered:this.onOpened,onExited:this.onClosed,cssModule:c,className:Object(b.m)(u()("modal",r,this.state.showStaticBackdropAnimation&&"modal-static"),c),innerRef:f}),g,this.renderModalDialog()),_))}return null},t.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},a}(o.a.Component);C.propTypes=j,C.defaultProps=_,C.openCount=0;a.a=C},349:function(e,a,t){"use strict";t.r(a);var n=t(22),i=t(23),l=t(25),r=t(24),s=t(2),o=t.n(s),c=t(27),m=t(357),d=t(109),u=t(130),p=t(69),h=t(63),b=t(64),g=t(65),f=t(67),v=t(66),E=t(76),k=t(92),y=t(93),j=t(94),O=t(166),_=t(163),C=t(164),N=t(110),T=t(115),M=t(116),S=t(84),w=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var i;return Object(n.a)(this,t),(i=a.call(this,e)).state={nama:"",tanggal_lahir:"",jenis_kelamin:"",agama:"",tempat_lahir:"",alamat:"",no_kontak:"",email:"",jabatan:"",divisi_id:"",modalIsOpen:!1},i}return Object(i.a)(t,[{key:"toggleModal",value:function(){this.setState({modalIsOpen:!this.state.modalIsOpen})}},{key:"submitForm",value:function(e){e.preventDefault(),this.toggleModal(),this.props.addKaryawanMutation({variables:{nama:this.state.nama,tanggal_lahir:this.state.tanggal_lahir,tempat_lahir:this.state.tempat_lahir,jenis_kelamin:this.state.jenis_kelamin,agama:this.state.agama,alamat:this.state.alamat,no_kontak:this.state.no_kontak,email:this.state.email,jabatan:this.state.jabatan,divisi_id:this.state.divisi_id},refetchQueries:[{query:u.d}]})}},{key:"onDelete",value:function(e){this.props.hapusKaryawanMutation({variables:{id:e},refetchQueries:[{query:u.d}]})}},{key:"displayDivisi",value:function(){var e=this.props.getDivisisQuery;return e.loading?o.a.createElement("div",null,"Loading Data Divisi..."):e.divisis.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id}," ",e.nama," ")}))}},{key:"displayKaryawan",value:function(){var e=this,a=this.props.getKaryawansQuery,t=0;return a.loading?o.a.createElement("div",null,"Loading Daftar Karyawan..."):a.karyawans.map((function(a){return t++,o.a.createElement("tr",{key:a.id},o.a.createElement("td",null,t),o.a.createElement("td",null,a.nama),o.a.createElement("td",null,a.tanggal_lahir),o.a.createElement("td",null,a.tempat_lahir),o.a.createElement("td",null,a.jenis_kelamin),o.a.createElement("td",null,a.agama),o.a.createElement("td",null,a.alamat),o.a.createElement("td",null,a.no_kontak),o.a.createElement("td",null,a.email),o.a.createElement("td",null,a.jabatan),o.a.createElement("td",null,a.divisi.nama),o.a.createElement("td",null,o.a.createElement(c.Link,{to:"/karyawan/editDataKaryawan/".concat(a.id)},o.a.createElement(p.a,{color:"success",size:"sm"},o.a.createElement("i",{className:"fa fa-pencil"})))),o.a.createElement("td",null,o.a.createElement(p.a,{onClick:e.onDelete.bind(e,a.id),color:"danger",size:"sm"},o.a.createElement("i",{className:"fa fa-trash"}))))}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(h.a,null,o.a.createElement(b.a,null,o.a.createElement(g.a,null,o.a.createElement(f.a,null,o.a.createElement(h.a,null,o.a.createElement(b.a,null,o.a.createElement("i",{className:"fa fa-align-justify"})," Daftar Karyawan"),o.a.createElement(b.a,null,o.a.createElement(p.a,{size:"sm",color:"primary",className:"float-right mb-0",onClick:this.toggleModal.bind(this)},o.a.createElement("i",{className:"fa fa-plus"})," Tambah Data Karyawan")))),o.a.createElement(v.a,null,o.a.createElement(E.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},o.a.createElement("thead",{align:"center"},o.a.createElement("tr",null,o.a.createElement("th",null,"No"),o.a.createElement("th",null,"Nama"),o.a.createElement("th",null,"Tanggal Lahir"),o.a.createElement("th",null,"Tempat Lahir"),o.a.createElement("th",null,"Jenis Kelamin"),o.a.createElement("th",null,"Agama"),o.a.createElement("th",null,"Alamat"),o.a.createElement("th",null,"No Kontak"),o.a.createElement("th",null,"Email"),o.a.createElement("th",null,"Jabatan"),o.a.createElement("th",null,"Divisi"),o.a.createElement("th",{colspan:"2"},"Aksi"))),o.a.createElement("tbody",{align:"center"},this.displayKaryawan())),o.a.createElement("nav",null,o.a.createElement(k.a,null,o.a.createElement(y.a,null,o.a.createElement(j.a,{previous:!0,tag:"button"},"Prev")),o.a.createElement(y.a,{active:!0},o.a.createElement(j.a,{tag:"button"},"1")),o.a.createElement(y.a,null,o.a.createElement(j.a,{tag:"button"},"2")),o.a.createElement(y.a,null,o.a.createElement(j.a,{tag:"button"},"3")),o.a.createElement(y.a,null,o.a.createElement(j.a,{tag:"button"},"4")),o.a.createElement(y.a,null,o.a.createElement(j.a,{next:!0,tag:"button"},"Next")))))))),o.a.createElement(O.a,{isOpen:this.state.modalIsOpen},o.a.createElement(_.a,null,"Form Tambah Data Karyawan"),o.a.createElement(C.a,null,o.a.createElement(N.a,{onSubmit:function(a){e.submitForm(a)}},o.a.createElement(T.a,null,o.a.createElement(M.a,{htmlFor:"name"},"Nama Lengkap"),o.a.createElement(S.a,{type:"text",id:"nama_karyawan",placeholder:"Nama Lengkap",onChange:function(a){return e.setState({nama:a.target.value})},required:!0})),o.a.createElement(T.a,null,o.a.createElement(M.a,{htmlFor:"name"},"Tanggal Lahir"),o.a.createElement(S.a,{type:"date",id:"tanggal_lahir",onChange:function(a){return e.setState({tanggal_lahir:a.target.value})},required:!0})),o.a.createElement(T.a,null,o.a.createElement(M.a,{htmlFor:"name"},"Tempat Lahir"),o.a.createElement(S.a,{type:"text",id:"tempat_lahir",placeholder:"Tempat Lahir",onChange:function(a){return e.setState({tempat_lahir:a.target.value})},required:!0})),o.a.createElement(T.a,null,o.a.createElement(M.a,{htmlFor:"name"},"Jenis Kelamin"),o.a.createElement(S.a,{type:"select",id:"jenis_kelamin",onChange:function(a){return e.setState({jenis_kelamin:a.target.value})},required:!0},o.a.createElement("option",{value:""},"Pilih Jenis Kelamin"),o.a.createElement("option",{value:"Pria"},"Pria"),o.a.createElement("option",{value:"Wanita"},"Wanita"))),o.a.createElement(T.a,null,o.a.createElement(M.a,{htmlFor:"name"},"Agama"),o.a.createElement(S.a,{type:"select",id:"agama",onChange:function(a){return e.setState({agama:a.target.value})},required:!0},o.a.createElement("option",{value:""},"Pilih Agama"),o.a.createElement("option",{value:"Islam"},"Islam"),o.a.createElement("option",{value:"Budha"},"Budha"),o.a.createElement("option",{value:"Hindu"},"Hindu"),o.a.createElement("option",{value:"Katolik"},"Katolik"),o.a.createElement("option",{value:"Kristen"},"Kristen"))),o.a.createElement(T.a,null,o.a.createElement(M.a,{htmlFor:"name"},"Alamat"),o.a.createElement(S.a,{type:"text",id:"alamat",placeholder:"Alamat",onChange:function(a){return e.setState({alamat:a.target.value})},required:!0})),o.a.createElement(T.a,null,o.a.createElement(M.a,{htmlFor:"name"},"No Kontak"),o.a.createElement(S.a,{type:"text",id:"no_kontak",placeholder:"No Kontak",onChange:function(a){return e.setState({no_kontak:a.target.value})},required:!0})),o.a.createElement(T.a,null,o.a.createElement(M.a,{htmlFor:"name"},"Email"),o.a.createElement(S.a,{type:"email",id:"email",placeholder:"Alamat Email",onChange:function(a){return e.setState({email:a.target.value})},required:!0})),o.a.createElement(T.a,null,o.a.createElement(M.a,{htmlFor:"name"},"Jabatan"),o.a.createElement(S.a,{type:"select",id:"jabatan",onChange:function(a){return e.setState({jabatan:a.target.value})},required:!0},o.a.createElement("option",{value:""},"Pilih Jabatan"),o.a.createElement("option",{value:"Manajer"},"Manajer"),o.a.createElement("option",{value:"Staff"},"Staff"),o.a.createElement("option",{value:"Teknisi"},"Teknisi"),o.a.createElement("option",{value:"Akuntan"},"Akuntan"),o.a.createElement("option",{value:"Karyawan Tetap"},"Karyawan Tetap"),o.a.createElement("option",{value:"Karyawan Kontrak"},"Karyawan Kontrak"))),o.a.createElement(T.a,null,o.a.createElement(M.a,{htmlFor:"name"},"Divisi"),o.a.createElement(S.a,{type:"select",id:"divisi",onChange:function(a){return e.setState({divisi_id:a.target.value})},required:!0},o.a.createElement("option",{value:""},"Pilih Divisi"),this.displayDivisi())),o.a.createElement(p.a,{type:"submit",color:"primary"},"Submit"),o.a.createElement(p.a,{color:"danger",onClick:this.toggleModal.bind(this)},"Batal")))))}}]),t}(s.Component);a.default=d(Object(m.a)(u.d,{name:"getKaryawansQuery"}),Object(m.a)(u.a,{name:"addKaryawanMutation"}),Object(m.a)(u.e,{name:"hapusKaryawanMutation"}),Object(m.a)(u.b,{name:"getDivisisQuery"}))(w)},71:function(e,a,t){"use strict";var n=t(4),i=t(13),l=t(62),r=t(2),s=t.n(r),o=t(14),c=t.n(o),m=t(58),d=t.n(m),u=t(73),p=t(59),h=Object(l.a)({},u.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:p.q,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),b=Object(l.a)({},u.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:p.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var a=e.tag,t=e.baseClass,l=e.baseClassActive,r=e.className,o=e.cssModule,c=e.children,m=e.innerRef,h=Object(i.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),b=Object(p.o)(h,p.c),g=Object(p.n)(h,p.c);return s.a.createElement(u.Transition,b,(function(e){var i="entered"===e,u=Object(p.m)(d()(r,t,i&&l),o);return s.a.createElement(a,Object(n.a)({className:u},g,{ref:m}),c)}))}g.propTypes=h,g.defaultProps=b,a.a=g},76:function(e,a,t){"use strict";var n=t(4),i=t(13),l=t(2),r=t.n(l),s=t(14),o=t.n(s),c=t(58),m=t.n(c),d=t(59),u={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:d.q,responsiveTag:d.q,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},p=function(e){var a=e.className,t=e.cssModule,l=e.size,s=e.bordered,o=e.borderless,c=e.striped,u=e.dark,p=e.hover,h=e.responsive,b=e.tag,g=e.responsiveTag,f=e.innerRef,v=Object(i.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),E=Object(d.m)(m()(a,"table",!!l&&"table-"+l,!!s&&"table-bordered",!!o&&"table-borderless",!!c&&"table-striped",!!u&&"table-dark",!!p&&"table-hover"),t),k=r.a.createElement(b,Object(n.a)({},v,{ref:f,className:E}));if(h){var y=Object(d.m)(!0===h?"table-responsive":"table-responsive-"+h,t);return r.a.createElement(g,{className:y},k)}return k};p.propTypes=u,p.defaultProps={tag:"table",responsiveTag:"div"},a.a=p},92:function(e,a,t){"use strict";var n=t(4),i=t(13),l=t(2),r=t.n(l),s=t(14),o=t.n(s),c=t(58),m=t.n(c),d=t(59),u={children:o.a.node,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,size:o.a.string,tag:d.q,listTag:d.q,"aria-label":o.a.string},p=function(e){var a,t=e.className,l=e.listClassName,s=e.cssModule,o=e.size,c=e.tag,u=e.listTag,p=e["aria-label"],h=Object(i.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),b=Object(d.m)(m()(t),s),g=Object(d.m)(m()(l,"pagination",((a={})["pagination-"+o]=!!o,a)),s);return r.a.createElement(c,{className:b,"aria-label":p},r.a.createElement(u,Object(n.a)({},h,{className:g})))};p.propTypes=u,p.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=p},93:function(e,a,t){"use strict";var n=t(4),i=t(13),l=t(2),r=t.n(l),s=t(14),o=t.n(s),c=t(58),m=t.n(c),d=t(59),u={active:o.a.bool,children:o.a.node,className:o.a.string,cssModule:o.a.object,disabled:o.a.bool,tag:d.q},p=function(e){var a=e.active,t=e.className,l=e.cssModule,s=e.disabled,o=e.tag,c=Object(i.a)(e,["active","className","cssModule","disabled","tag"]),u=Object(d.m)(m()(t,"page-item",{active:a,disabled:s}),l);return r.a.createElement(o,Object(n.a)({},c,{className:u}))};p.propTypes=u,p.defaultProps={tag:"li"},a.a=p},94:function(e,a,t){"use strict";var n=t(4),i=t(13),l=t(2),r=t.n(l),s=t(14),o=t.n(s),c=t(58),m=t.n(c),d=t(59),u={"aria-label":o.a.string,children:o.a.node,className:o.a.string,cssModule:o.a.object,next:o.a.bool,previous:o.a.bool,first:o.a.bool,last:o.a.bool,tag:d.q},p=function(e){var a,t=e.className,l=e.cssModule,s=e.next,o=e.previous,c=e.first,u=e.last,p=e.tag,h=Object(i.a)(e,["className","cssModule","next","previous","first","last","tag"]),b=Object(d.m)(m()(t,"page-link"),l);o?a="Previous":s?a="Next":c?a="First":u&&(a="Last");var g,f=e["aria-label"]||a;o?g="\u2039":s?g="\u203a":c?g="\xab":u&&(g="\xbb");var v=e.children;return v&&Array.isArray(v)&&0===v.length&&(v=null),h.href||"a"!==p||(p="button"),(o||s||c||u)&&(v=[r.a.createElement("span",{"aria-hidden":"true",key:"caret"},v||g),r.a.createElement("span",{className:"sr-only",key:"sr"},f)]),r.a.createElement(p,Object(n.a)({},h,{className:b,"aria-label":f}),v)};p.propTypes=u,p.defaultProps={tag:"a"},a.a=p}}]);
//# sourceMappingURL=27.415cdd26.chunk.js.map