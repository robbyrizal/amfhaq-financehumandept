(this["webpackJsonpamfhaq-financehumandept"]=this["webpackJsonpamfhaq-financehumandept"]||[]).push([[34],{101:function(e,t,n){"use strict";var r=n(5),a=n(62),o=n(13),i=n(11),c=n(2),s=n.n(c),l=n(14),p=n.n(l),u=n(58),d=n.n(u),f=n(337),b=n(68),m=n(59);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={tag:m.q,children:p.a.node.isRequired,right:p.a.bool,flip:p.a.bool,modifiers:p.a.object,className:p.a.string,cssModule:p.a.object,persist:p.a.bool,positionFixed:p.a.bool},v={flip:{enabled:!1}},j={up:"top",left:"left",right:"right",down:"bottom"},y=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.className,a=t.cssModule,i=t.right,c=t.tag,l=t.flip,p=t.modifiers,u=t.persist,b=t.positionFixed,h=Object(o.a)(t,["className","cssModule","right","tag","flip","modifiers","persist","positionFixed"]),O=Object(m.m)(d()(n,"dropdown-menu",{"dropdown-menu-right":i,show:this.context.isOpen}),a),y=c;if(u||this.context.isOpen&&!this.context.inNavbar){var x=(j[this.context.direction]||"bottom")+"-"+(i?"end":"start"),E=l?p:g(g({},p),v),w=!!b;return s.a.createElement(f.a,{placement:x,modifiers:E,positionFixed:w},(function(t){var n=t.ref,a=t.style,o=t.placement,i=g(g({},e.props.style),a);return s.a.createElement(y,Object(r.a)({tabIndex:"-1",role:"menu",ref:n},h,{style:i,"aria-hidden":!e.context.isOpen,className:O,"x-placement":o}))}))}return s.a.createElement(y,Object(r.a)({tabIndex:"-1",role:"menu"},h,{"aria-hidden":!this.context.isOpen,className:O,"x-placement":h.placement}))},t}(s.a.Component);y.propTypes=O,y.defaultProps={tag:"div",flip:!0},y.contextType=b.a,t.a=y},102:function(e,t,n){"use strict";var r=n(5),a=n(13),o=n(60),i=n(11),c=n(2),s=n.n(c),l=n(14),p=n.n(l),u=n(58),d=n.n(u),f=n(68),b=n(59),m={children:p.a.node,active:p.a.bool,disabled:p.a.bool,divider:p.a.bool,tag:b.q,header:p.a.bool,onClick:p.a.func,className:p.a.string,cssModule:p.a.object,toggle:p.a.bool,text:p.a.bool},h=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(o.a)(n)),n.getTabIndex=n.getTabIndex.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){var t=this.props,n=t.disabled,r=t.header,a=t.divider,o=t.text;n||r||a||o?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},n.getTabIndex=function(){var e=this.props,t=e.disabled,n=e.header,r=e.divider,a=e.text;return t||n||r||a?"-1":"0"},n.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,n=Object(b.n)(this.props,["toggle"]),o=n.className,i=n.cssModule,c=n.divider,l=n.tag,p=n.header,u=n.active,f=n.text,m=Object(a.a)(n,["className","cssModule","divider","tag","header","active","text"]),h=Object(b.m)(d()(o,{disabled:m.disabled,"dropdown-item":!c&&!p&&!f,active:u,"dropdown-header":p,"dropdown-divider":c,"dropdown-item-text":f}),i);return"button"===l&&(p?l="h6":c?l="div":m.href?l="a":f&&(l="span")),s.a.createElement(l,Object(r.a)({type:"button"===l&&(m.onClick||this.props.toggle)?"button":void 0},m,{tabIndex:e,role:t,className:h,onClick:this.onClick}))},t}(s.a.Component);h.propTypes=m,h.defaultProps={tag:"button",toggle:!0},h.contextType=f.a,t.a=h},104:function(e,t,n){"use strict";var r=n(5),a=n(13),o=n(60),i=n(11),c=n(2),s=n.n(c),l=n(14),p=n.n(l),u=n(58),d=n.n(u),f=n(85),b=n.n(f),m=n(78),h=n.n(m),g=n(79),O=n.n(g),v=n(80),j=n.n(v),y=n(83),x=n.n(y),E=n(82),w=n(86),N=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,j()(h()(t),"refHandler",(function(e){Object(w.b)(t.props.innerRef,e),Object(w.a)(t.props.setReferenceNode,e)})),t}O()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){Object(w.b)(this.props.innerRef,null)},n.render=function(){return x()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),Object(w.c)(this.props.children)({ref:this.refHandler})},t}(c.Component);function k(e){return c.createElement(E.b.Consumer,null,(function(t){return c.createElement(N,b()({setReferenceNode:t},e))}))}var C=n(68),P=n(59),T=n(70),D={caret:p.a.bool,color:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,disabled:p.a.bool,onClick:p.a.func,"aria-haspopup":p.a.bool,split:p.a.bool,tag:P.q,nav:p.a.bool},M=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled||this.context.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},n.render=function(){var e,t=this,n=this.props,o=n.className,i=n.color,c=n.cssModule,l=n.caret,p=n.split,u=n.nav,f=n.tag,b=n.innerRef,m=Object(a.a)(n,["className","color","cssModule","caret","split","nav","tag","innerRef"]),h=m["aria-label"]||"Toggle Dropdown",g=Object(P.m)(d()(o,{"dropdown-toggle":l||p,"dropdown-toggle-split":p,"nav-link":u}),c),O="undefined"!==typeof m.children?m.children:s.a.createElement("span",{className:"sr-only"},h);return u&&!f?(e="a",m.href="#"):f?e=f:(e=T.a,m.color=i,m.cssModule=c),this.context.inNavbar?s.a.createElement(e,Object(r.a)({},m,{className:g,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:O})):s.a.createElement(k,{innerRef:b},(function(n){var a,o=n.ref;return s.a.createElement(e,Object(r.a)({},m,((a={})["string"===typeof e?"ref":"innerRef"]=o,a),{className:g,onClick:t.onClick,"aria-expanded":t.context.isOpen,children:O}))}))},t}(s.a.Component);M.propTypes=D,M.defaultProps={"aria-haspopup":!0,color:"secondary"},M.contextType=C.a;t.a=M},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(62),a=n(5),o=n(60),i=n(11),c=n(2),s=n.n(c),l=n(14),p=n.n(l),u=n(98),d=n(59);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var b=["defaultOpen"],m=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},n.toggle=n.toggle.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.toggle=function(e){this.setState({isOpen:!this.state.isOpen}),this.props.onToggle&&this.props.onToggle(e,!this.state.isOpen)},n.render=function(){return s.a.createElement(u.a,Object(a.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(d.n)(this.props,b)))},t}(c.Component);m.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({defaultOpen:p.a.bool,onToggle:p.a.func},u.a.propTypes)},194:function(e,t,n){e.exports=n.p+"static/media/amfhaq.9045a83e.PNG"},336:function(e,t,n){"use strict";n.r(t);var r=n(81),a=n(23),o=n(24),i=n(26),c=n(25),s=n(2),l=n.n(s),p=n(28),u=n(327),d=n(324),f=n(326),b=n(144),m=n(104),h=n(101),g=n(102),O=n(112),v=n(194),j=n.n(v),y=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props;t.children,Object(r.a)(t,["children"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.l,{className:"d-lg-none",display:"md",mobile:!0}),l.a.createElement(O.e,{full:{src:j.a,width:89,height:35,alt:"AMF-HAQ"},minimized:{src:j.a,width:30,height:30,alt:"CoreUI Logo"}}),l.a.createElement(O.l,{className:"d-md-down-none",display:"lg"}),l.a.createElement(u.a,{className:"ml-auto",navbar:!0},l.a.createElement(d.a,{className:"d-md-down-none"},l.a.createElement(p.NavLink,{to:"#",className:"nav-link"},l.a.createElement("i",{className:"icon-bell"}),l.a.createElement(f.a,{pill:!0,color:"danger"},"5"))),l.a.createElement(b.a,{nav:!0,direction:"down"},l.a.createElement(m.a,{nav:!0},l.a.createElement("img",{src:"../../assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),l.a.createElement(h.a,{right:!0},l.a.createElement(g.a,{header:!0,tag:"div",className:"text-center"},l.a.createElement("strong",null,"Settings")),l.a.createElement(g.a,null,l.a.createElement("i",{className:"fa fa-user"})," Profile"),l.a.createElement(g.a,{onClick:function(t){return e.props.onLogout(t)}},l.a.createElement("i",{className:"fa fa-lock"})," Logout")))))}}]),n}(s.Component);y.defaultProps={},t.default=y},62:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},81:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=34.cae6b4de.chunk.js.map