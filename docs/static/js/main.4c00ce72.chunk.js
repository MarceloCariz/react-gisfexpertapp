(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),r=n.n(a),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),o(""))},className:"flex justify-center",children:Object(u.jsx)("input",{className:"border-gray-500 bg-gray-200 text-black border-4 w-2/4 text-center rounded-lg",type:"text",value:r,onChange:function(e){o(e.target.value)}})})})},j=n(10),l=n(6),d=n.n(l),b=n(8),m=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,c,a,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=Vb6yI84dtEvTxR0OCMrvpvjgGjfQB3nw"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,r=a.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){e.id;var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:" card animate__animated animate__bounce mb-8 ",children:[Object(u.jsx)("img",{className:"object-fit w-auto max-h-64 ",src:n,alt:t}),Object(u.jsx)("p",{className:"text-white text-center font-semibold",children:t})]})},x=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){m(e).then((function(e){setTimeout((function(){r({data:e,loading:!1})}),3e3)}))}),[e]),a}(t),a=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"text-white text-2xl uppercase text-center mb-20",children:t}),r&&Object(u.jsx)("p",{children:"Loading"}),Object(u.jsx)("div",{className:" ",children:Object(u.jsx)("ol",{className:"grid sm:gap-2 gap-1 sm:grid-cols-3 place-content-end grid-cols-2 justify-items-center",children:a.map((function(e){return Object(u.jsx)(p,Object(j.a)({},e),e.id)}))})})]})},f=function(){var e=Object(c.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"text-3xl text-white text-center mb-8",children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:a}),Object(u.jsx)("ol",{className:"mt-10 content-center",children:n.map((function(e){return Object(u.jsx)(x,{category:e},e)}))})]})};n(17);r.a.render(Object(u.jsx)(f,{}),document.getElementById("app"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4c00ce72.chunk.js.map