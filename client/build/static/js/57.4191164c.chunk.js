(this["webpackJsonpamfhaq-financehumandept"]=this["webpackJsonpamfhaq-financehumandept"]||[]).push([[57],{445:function(e,a,t){"use strict";var r=t(5),n=t(13),l=t(63),s=t(2),c=t.n(s),i=t(14),o=t.n(i),m=t(58),u=t.n(m),f=t(59),d=t(75);function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){Object(l.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var b={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:f.q,transition:o.a.shape(d.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},g={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:h(h({},d.a.defaultProps),{},{unmountOnExit:!0})};function E(e){var a=e.className,t=e.closeClassName,l=e.closeAriaLabel,s=e.cssModule,i=e.tag,o=e.color,m=e.isOpen,p=e.toggle,b=e.children,g=e.transition,E=e.fade,O=e.innerRef,y=Object(n.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),j=Object(f.m)(u()(a,"alert","alert-"+o,{"alert-dismissible":p}),s),k=Object(f.m)(u()("close",t),s),v=h(h(h({},d.a.defaultProps),g),{},{baseClass:E?g.baseClass:"",timeout:E?g.timeout:0});return c.a.createElement(d.a,Object(r.a)({},y,v,{tag:i,className:j,in:m,role:"alert",innerRef:O}),p?c.a.createElement("button",{type:"button",className:k,"aria-label":l,onClick:p},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,b)}E.propTypes=b,E.defaultProps=g,a.a=E},64:function(e,a,t){"use strict";var r=t(5),n=t(13),l=t(2),s=t.n(l),c=t(14),i=t.n(c),o=t(58),m=t.n(o),u=t(59),f={tag:u.q,className:i.a.string,cssModule:i.a.object},d=function(e){var a=e.className,t=e.cssModule,l=e.tag,c=Object(n.a)(e,["className","cssModule","tag"]),i=Object(u.m)(m()(a,"card-header"),t);return s.a.createElement(l,Object(r.a)({},c,{className:i}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},67:function(e,a,t){"use strict";var r=t(5),n=t(13),l=t(2),s=t.n(l),c=t(14),i=t.n(c),o=t(58),m=t.n(o),u=t(59),f=i.a.oneOfType([i.a.number,i.a.string]),d={tag:u.q,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},p={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,c=e.tag,i=e.form,o=e.widths,f=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),d=[];o.forEach((function(a,t){var r=e[a];if(delete f[a],r){var n=!t;d.push(n?"row-cols-"+r:"row-cols-"+a+"-"+r)}}));var p=Object(u.m)(m()(a,l?"no-gutters":null,i?"form-row":"row",d),t);return s.a.createElement(c,Object(r.a)({},f,{className:p}))};h.propTypes=d,h.defaultProps=p,a.a=h},68:function(e,a,t){"use strict";var r=t(5),n=t(13),l=t(2),s=t.n(l),c=t(14),i=t.n(c),o=t(58),m=t.n(o),u=t(59),f=i.a.oneOfType([i.a.number,i.a.string]),d=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:f,offset:f})]),p={tag:u.q,xs:d,sm:d,md:d,lg:d,xl:d,className:i.a.string,cssModule:i.a.object,widths:i.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,l=e.widths,c=e.tag,i=Object(n.a)(e,["className","cssModule","widths","tag"]),o=[];l.forEach((function(a,r){var n=e[a];if(delete i[a],n||""===n){var l=!r;if(Object(u.k)(n)){var s,c=l?"-":"-"+a+"-",f=b(l,a,n.size);o.push(Object(u.m)(m()(((s={})[f]=n.size||""===n.size,s["order"+c+n.order]=n.order||0===n.order,s["offset"+c+n.offset]=n.offset||0===n.offset,s)),t))}else{var d=b(l,a,n);o.push(d)}}})),o.length||o.push("col");var f=Object(u.m)(m()(a,o),t);return s.a.createElement(c,Object(r.a)({},i,{className:f}))};g.propTypes=p,g.defaultProps=h,a.a=g},718:function(e,a,t){"use strict";t.r(a);var r=t(23),n=t(24),l=t(27),s=t(26),c=t(25),i=t(2),o=t.n(i),m=t(67),u=t(68),f=t(70),d=t(64),p=t(71),h=t(445),b=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={visible:!0},n.onDismiss=n.onDismiss.bind(Object(l.a)(n)),n}return Object(n.a)(t,[{key:"onDismiss",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(m.a,null,o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(f.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("div",{className:"card-header-actions"},o.a.createElement("a",{href:"https://reactstrap.github.io/components/alerts/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},o.a.createElement("small",{className:"text-muted"},"docs")))),o.a.createElement(p.a,null,o.a.createElement(h.a,{color:"primary"},"This is a primary alert \u2014 check it out!"),o.a.createElement(h.a,{color:"secondary"},"This is a secondary alert \u2014 check it out!"),o.a.createElement(h.a,{color:"success"},"This is a success alert \u2014 check it out!"),o.a.createElement(h.a,{color:"danger"},"This is a danger alert \u2014 check it out!"),o.a.createElement(h.a,{color:"warning"},"This is a warning alert \u2014 check it out!"),o.a.createElement(h.a,{color:"info"},"This is a info alert \u2014 check it out!"),o.a.createElement(h.a,{color:"light"},"This is a light alert \u2014 check it out!"),o.a.createElement(h.a,{color:"dark"},"This is a dark alert \u2014 check it out!")))),o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(f.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null," use ",o.a.createElement("code",null,".alert-link")," to provide links")),o.a.createElement(p.a,null,o.a.createElement(h.a,{color:"primary"},"This is a primary alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(h.a,{color:"secondary"},"This is a secondary alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(h.a,{color:"success"},"This is a success alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(h.a,{color:"danger"},"This is a danger alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(h.a,{color:"warning"},"This is a warning alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(h.a,{color:"info"},"This is a info alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(h.a,{color:"light"},"This is a light alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(h.a,{color:"dark"},"This is a dark alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."))))),o.a.createElement(m.a,null,o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(f.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null,"additional content")),o.a.createElement(p.a,null,o.a.createElement(h.a,{color:"success"},o.a.createElement("h4",{className:"alert-heading"},"Well done!"),o.a.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),o.a.createElement("hr",null),o.a.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."))))),o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(f.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null,"dismissing")),o.a.createElement(p.a,null,o.a.createElement(h.a,{color:"info",isOpen:this.state.visible,toggle:this.onDismiss},"I am an alert and I can be dismissed!"))))))}}]),t}(i.Component);a.default=b},75:function(e,a,t){"use strict";var r=t(5),n=t(13),l=t(63),s=t(2),c=t.n(s),i=t(14),o=t.n(i),m=t(58),u=t.n(m),f=t(82),d=t(59);function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){Object(l.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var b=h(h({},f.Transition.propTypes),{},{children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),tag:d.q,baseClass:o.a.string,baseClassActive:o.a.string,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])}),g=h(h({},f.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:d.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function E(e){var a=e.tag,t=e.baseClass,l=e.baseClassActive,s=e.className,i=e.cssModule,o=e.children,m=e.innerRef,p=Object(n.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),h=Object(d.o)(p,d.c),b=Object(d.n)(p,d.c);return c.a.createElement(f.Transition,h,(function(e){var n="entered"===e,f=Object(d.m)(u()(s,t,n&&l),i);return c.a.createElement(a,Object(r.a)({className:f},b,{ref:m}),o)}))}E.propTypes=b,E.defaultProps=g,a.a=E}}]);
//# sourceMappingURL=57.4191164c.chunk.js.map