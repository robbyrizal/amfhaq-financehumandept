(this["webpackJsonpamfhaq-financehumandept"]=this["webpackJsonpamfhaq-financehumandept"]||[]).push([[26],{102:function(e,a,t){"use strict";var n=t(4),l=t(13),o=t(2),s=t.n(o),r=t(14),c=t.n(r),i=t(58),m=t.n(i),u=t(59),d={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.q,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.row,r=e.disabled,c=e.check,i=e.inline,d=e.tag,f=Object(l.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(u.m)(m()(a,!!o&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!r)&&"disabled"),t);return"fieldset"===d&&(f.disabled=r),s.a.createElement(d,Object(n.a)({},f,{className:p}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},103:function(e,a,t){"use strict";var n=t(4),l=t(13),o=t(2),s=t.n(o),r=t(14),c=t.n(r),i=t(58),m=t.n(i),u=t(59),d=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.string,c.a.number,c.a.shape({size:d,order:d,offset:d})]),p={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.q,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,o=e.hidden,r=e.widths,c=e.tag,i=e.check,d=e.size,f=e.for,p=Object(l.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];r.forEach((function(a,n){var l=e[a];if(delete p[a],l||""===l){var o,s=!n;if(Object(u.k)(l)){var r,c=s?"-":"-"+a+"-";o=h(s,a,l.size),b.push(Object(u.m)(m()(((r={})[o]=l.size||""===l.size,r["order"+c+l.order]=l.order||0===l.order,r["offset"+c+l.offset]=l.offset||0===l.offset,r))),t)}else o=h(s,a,l),b.push(o)}}));var g=Object(u.m)(m()(a,!!o&&"sr-only",!!i&&"form-check-label",!!d&&"col-form-label-"+d,b,!!b.length&&"col-form-label"),t);return s.a.createElement(c,Object(n.a)({htmlFor:f},p,{className:g}))};g.propTypes=p,g.defaultProps=b,a.a=g},345:function(e,a,t){"use strict";t.r(a);var n=t(22),l=t(23),o=t(25),s=t(24),r=t(2),c=t.n(r),i=t(27),m=t(62),u=t(63),d=t(65),f=t(67),p=t(69),b=t(66),h=t(102),g=t(103),v=t(79),j=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement(f.a,null,"Tambah Karyawan Baru",c.a.createElement(i.Link,{to:"/karyawan/datakaryawan",className:"float-right mb-0"},c.a.createElement(p.a,{label:!0,color:"danger"},"Batal"))),c.a.createElement(b.a,null,c.a.createElement(h.a,null,c.a.createElement(g.a,{htmlFor:"name"},"Nama Lengkap"),c.a.createElement(v.a,{type:"text",name:"nama_karyawan",id:"nama_karyawan",placeholder:"Nama Lengkap"})),c.a.createElement(h.a,null,c.a.createElement(g.a,{htmlFor:"name"},"Tanggal Lahir"),c.a.createElement(v.a,{type:"date",id:"tgl_lahir",required:!0})),c.a.createElement(h.a,null,c.a.createElement(g.a,{htmlFor:"name"},"Jenis Kelamin"),c.a.createElement(v.a,{type:"select",name:"jenis_kelamin",id:"jenis_kelamin"},c.a.createElement("option",{value:""},"Pria"),c.a.createElement("option",{value:""},"Wanita"))),c.a.createElement(h.a,null,c.a.createElement(g.a,{htmlFor:"name"},"Agama"),c.a.createElement(v.a,{type:"select",name:"agama",id:"agama"},c.a.createElement("option",{value:"islam"},"Islam"),c.a.createElement("option",{value:"budha"},"Budha"),c.a.createElement("option",{value:"hindu"},"Hindu"),c.a.createElement("option",{value:"katolik"},"Katolik"),c.a.createElement("option",{value:"kristen"},"Kristen"))),c.a.createElement(h.a,null,c.a.createElement(g.a,{htmlFor:"name"},"Kota Asal"),c.a.createElement(v.a,{type:"text",name:"kota",id:"kota",placeholder:"Kota Asal"})),c.a.createElement(h.a,null,c.a.createElement(g.a,{htmlFor:"name"},"Domisili Sekarang"),c.a.createElement(v.a,{type:"text",name:"domisili",id:"domisili",placeholder:"Domisili Sekarang"})),c.a.createElement(h.a,null,c.a.createElement(g.a,{htmlFor:"name"},"No Kontak"),c.a.createElement(v.a,{type:"text",name:"no_kontak",id:"no_kontak",placeholder:"No Kontak"})),c.a.createElement(h.a,null,c.a.createElement(g.a,{htmlFor:"name"},"Email"),c.a.createElement(v.a,{type:"email",name:"email",id:"email",placeholder:"Alamat Email"})),c.a.createElement(p.a,{type:"Submit",size:"sm",color:"primary",className:"float-right mb-0"},c.a.createElement("i",{className:"fa fa-pencil"})," Submit"))))))}}]),t}(r.Component);a.default=j},62:function(e,a,t){"use strict";var n=t(4),l=t(13),o=t(2),s=t.n(o),r=t(14),c=t.n(r),i=t(58),m=t.n(i),u=t(59),d=c.a.oneOfType([c.a.number,c.a.string]),f={tag:u.q,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},p={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,r=e.tag,c=e.form,i=e.widths,d=Object(l.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];i.forEach((function(a,t){var n=e[a];if(delete d[a],n){var l=!t;f.push(l?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var p=Object(u.m)(m()(a,o?"no-gutters":null,c?"form-row":"row",f),t);return s.a.createElement(r,Object(n.a)({},d,{className:p}))};b.propTypes=f,b.defaultProps=p,a.a=b},63:function(e,a,t){"use strict";var n=t(4),l=t(13),o=t(2),s=t.n(o),r=t(14),c=t.n(r),i=t(58),m=t.n(i),u=t(59),d=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:d,offset:d})]),p={tag:u.q,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,o=e.widths,r=e.tag,c=Object(l.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach((function(a,n){var l=e[a];if(delete c[a],l||""===l){var o=!n;if(Object(u.k)(l)){var s,r=o?"-":"-"+a+"-",d=h(o,a,l.size);i.push(Object(u.m)(m()(((s={})[d]=l.size||""===l.size,s["order"+r+l.order]=l.order||0===l.order,s["offset"+r+l.offset]=l.offset||0===l.offset,s)),t))}else{var f=h(o,a,l);i.push(f)}}})),i.length||i.push("col");var d=Object(u.m)(m()(a,i),t);return s.a.createElement(r,Object(n.a)({},c,{className:d}))};g.propTypes=p,g.defaultProps=b,a.a=g},65:function(e,a,t){"use strict";var n=t(4),l=t(13),o=t(2),s=t.n(o),r=t(14),c=t.n(r),i=t(58),m=t.n(i),u=t(59),d={tag:u.q,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var a=e.className,t=e.cssModule,o=e.color,r=e.body,c=e.inverse,i=e.outline,d=e.tag,f=e.innerRef,p=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(u.m)(m()(a,"card",!!c&&"text-white",!!r&&"card-body",!!o&&(i?"border":"bg")+"-"+o),t);return s.a.createElement(d,Object(n.a)({},p,{className:b,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},66:function(e,a,t){"use strict";var n=t(4),l=t(13),o=t(2),s=t.n(o),r=t(14),c=t.n(r),i=t(58),m=t.n(i),u=t(59),d={tag:u.q,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,r=e.tag,c=Object(l.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.m)(m()(a,"card-body"),t);return s.a.createElement(r,Object(n.a)({},c,{className:i,ref:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},67:function(e,a,t){"use strict";var n=t(4),l=t(13),o=t(2),s=t.n(o),r=t(14),c=t.n(r),i=t(58),m=t.n(i),u=t(59),d={tag:u.q,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.tag,r=Object(l.a)(e,["className","cssModule","tag"]),c=Object(u.m)(m()(a,"card-header"),t);return s.a.createElement(o,Object(n.a)({},r,{className:c}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},69:function(e,a,t){"use strict";var n=t(4),l=t(13),o=t(60),s=t(10),r=t(2),c=t.n(r),i=t(14),m=t.n(i),u=t(58),d=t.n(u),f=t(59),p={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:f.q,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,s=e.className,r=e.close,i=e.cssModule,m=e.color,u=e.outline,p=e.size,b=e.tag,h=e.innerRef,g=Object(l.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof g.children&&(g.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(u?"-outline":"")+"-"+m,j=Object(f.m)(d()(s,{close:r},r||"btn",r||v,!!p&&"btn-"+p,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),i);g.href&&"button"===b&&(b="a");var y=r?"Close":null;return c.a.createElement(b,Object(n.a)({type:"button"===b&&g.onClick?"button":void 0},g,{className:j,ref:h,onClick:this.onClick,"aria-label":t||y}))},a}(c.a.Component);b.propTypes=p,b.defaultProps={color:"secondary",tag:"button"},a.a=b},79:function(e,a,t){"use strict";var n=t(4),l=t(13),o=t(60),s=t(10),r=t(2),c=t.n(r),i=t(14),m=t.n(i),u=t(58),d=t.n(u),f=t(59),p={children:m.a.node,type:m.a.string,size:m.a.string,bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:f.q,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,s=e.bsSize,r=e.valid,i=e.invalid,m=e.tag,u=e.addon,p=e.plaintext,b=e.innerRef,h=Object(l.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),j=m||("select"===o||"textarea"===o?o:"input"),y="form-control";p?(y+="-plaintext",j=m||"input"):"file"===o?y+="-file":g&&(y=u?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(f.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=h.size,delete h.size);var E=Object(f.m)(d()(a,i&&"is-invalid",r&&"is-valid",!!s&&"form-control-"+s,y),t);return("input"===j||m&&"function"===typeof m)&&(h.type=o),h.children&&!p&&"select"!==o&&"string"===typeof j&&"select"!==j&&(Object(f.t)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(j,Object(n.a)({},h,{ref:b,className:E}))},a}(c.a.Component);b.propTypes=p,b.defaultProps={type:"text"},a.a=b}}]);
//# sourceMappingURL=26.413af70a.chunk.js.map