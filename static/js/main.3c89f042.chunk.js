(this["webpackJsonpstromland.github.io"]=this["webpackJsonpstromland.github.io"]||[]).push([[0],{65:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(25),s=n.n(a),i=n(12),o=n(2),u=n(1),l=function(){var t=Object(o.f)();return Object(u.jsx)("div",{children:Object(u.jsxs)("h3",{children:["No match for ",Object(u.jsx)("code",{children:t.pathname})]})})},h=function(t){var e=t.children;return Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsx)("span",{className:"navbar-brand mb-0 h1",children:"stromland.github.io"})})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col"}),Object(u.jsx)("div",{className:"col-6 px-5 py-3 bg-light",children:e}),Object(u.jsx)("div",{className:"col"})]})]})},d=n(8),j=n.n(d),b=n(11),v=n(31),f=n(27),x=n(28),m=n(29),p=n.n(m),O=function(){function t(e){Object(f.a)(this,t),this.config=void 0,this.config=null!==e&&void 0!==e?e:{basePath:"/docs",fileSuffix:".md"}}return Object(x.a)(t,[{key:"getDocumentForPath",value:function(){var t=Object(b.a)(j.a.mark((function t(e){var n,r,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(this.config.basePath).concat(e),t.next=3,this.getDocument(r);case 3:if(c=t.sent,404!==(null===(n=c.error)||void 0===n?void 0:n.status)){t.next=8;break}return t.next=7,this.retryWithNewPath(r);case 7:return t.abrupt("return",t.sent);case 8:return t.abrupt("return",c);case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"retryWithNewPath",value:function(t){var e=t.endsWith("/")?t.substr(0,t.length-2):"".concat(t,"/");return this.getDocument(e)}},{key:"getDocument",value:function(){var t=Object(b.a)(j.a.mark((function t(e){var n,r,c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=this.getMarkdownName(e),t.next=4,p.a.get(n);case 4:return r=t.sent,t.abrupt("return",{content:r.data});case 8:return t.prev=8,t.t0=t.catch(0),a=t.t0,t.abrupt("return",{error:{message:a.message,status:null===(c=a.response)||void 0===c?void 0:c.status}});case 12:case"end":return t.stop()}}),t,this,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getMarkdownName",value:function(t){return t.endsWith("/")?"".concat(t,"index").concat(this.config.fileSuffix):"".concat(t).concat(this.config.fileSuffix)}}]),t}();var g=n(30),w=n.n(g),N=function(t){var e=t.content;if(!e)return null;var n=w()(e);return Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})},k=function(){var t,e,n,c=function(){var t=Object(r.useState)(),e=Object(v.a)(t,2),n=e[0],c=e[1],a=Object(o.f)();return Object(r.useEffect)((function(){Object(b.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new O,t.next=3,e.getDocumentForPath(a.pathname);case 3:n=t.sent,c(n);case 5:case"end":return t.stop()}}),t)})))()}),[a.pathname]),{success:void 0===(null===n||void 0===n?void 0:n.error),content:null===n||void 0===n?void 0:n.content,error:null===n||void 0===n?void 0:n.error}}();return c.success?Object(u.jsx)(N,{content:c.content}):404===(null===(t=c.error)||void 0===t?void 0:t.status)?Object(u.jsx)(l,{}):Object(u.jsx)("h1",{children:null!==(e=null===(n=c.error)||void 0===n?void 0:n.message)&&void 0!==e?e:"Something went wrong"})};n(64),n(65);s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(h,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:k}),Object(u.jsx)(o.a,{path:"/about",component:k}),Object(u.jsx)(o.a,{path:"*",children:Object(u.jsx)(l,{})})]})})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.3c89f042.chunk.js.map