"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[584],{584:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var a=r(861),n=r(439),o=r(757),s=r.n(o),i=r(791),u=r(689),c=r(87),l=r(596),p=r(673),m={form:"Searchbar_form__D-hp5",listItem:"Searchbar_listItem__2SCbN"},f=r(184),h=function(e){var t=e.onSubmit,r=(0,i.useState)(""),a=(0,n.Z)(r,2),o=a[0],s=a[1];return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o.toLowerCase().trim()),s("")):l.Am.warn("Please enter a film name",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},className:m.form,children:[(0,f.jsx)("input",{onChange:function(e){s(e.currentTarget.value)},type:"text",value:o,autoComplete:"off",autoFocus:!0}),(0,f.jsx)("button",{type:"submit",className:m.button,children:"Search"})]})},d=r(243),b="Movies_listItem__YWcFi",g=function(){var e=(0,u.s0)(),t=(0,i.useState)(""),r=(0,n.Z)(t,2),o=r[0],m=r[1],g=(0,u.TH)(),v=(0,c.lr)(),_=(0,n.Z)(v,1)[0],k=(0,i.useState)([]),x=(0,n.Z)(k,2),S=x[0],C=x[1],w=(0,i.useState)(!1),y=(0,n.Z)(w,2),j=y[0],Z=y[1],N=_.get("query");!o&&N&&m(N),(0,i.useEffect)((function(){if(o){var t=new AbortController;return Z(!0),function(){r.apply(this,arguments)}(),function(){t.abort()}}function r(){return(r=(0,a.Z)(s().mark((function r(){var a;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return"46b140c521482b90437070e922d7e563","https://api.themoviedb.org/3",r.prev=2,r.next=5,d.Z.get("".concat("https://api.themoviedb.org/3","/search/movie?api_key=").concat("46b140c521482b90437070e922d7e563","&query=").concat(o,"&page=",1),{signal:t.signal});case 5:if((a=r.sent).data.results.length){r.next=12;break}return Z(!1),e(""),C([]),l.Am.error("Sorry, no results were found for your search.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),r.abrupt("return");case 12:C(a.data.results),e("?query=".concat(o)),Z(!1),r.next=20;break;case 17:r.prev=17,r.t0=r.catch(2),console.log(r.t0);case 20:case"end":return r.stop()}}),r,null,[[2,17]])})))).apply(this,arguments)}}),[e,o]);return(0,f.jsxs)("main",{children:[(0,f.jsx)(h,{onSubmit:function(e){m(e)}}),j&&(0,f.jsx)(p.a,{}),(0,f.jsx)("ul",{children:S.map((function(e){var t=e.id,r=e.original_title;return(0,f.jsx)("li",{className:b,children:(0,f.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:g},children:r})},t)}))})]})}}}]);
//# sourceMappingURL=584.0c89c8c8.chunk.js.map