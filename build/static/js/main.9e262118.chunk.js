(this["webpackJsonpsubmission-2"]=this["webpackJsonpsubmission-2"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var i,a=n(0),r=n.n(a),c=n(8),s=n.n(c),o=(n(71),n(33)),l=(n(72),n(25)),u=n(30),b=n(134),d=n(52),j=n.n(d),f=n(130),h=n(60),m=n.n(h),g=n(4),p=n(9),x=[{name:"Avatar",cell:function(e){return Object(p.jsx)("img",{src:e.avatar_url,width:"40",alt:""})},sortable:!1},{name:"Login",selector:"login",sortable:!0},{name:"Type",selector:"type",sortable:!0,right:!0}],O=Object(g.a)({ResultsTable:{display:"flex",flexDirection:"column",fontWeight:"400",lineHeight:"1.42857",textRendering:"optimizeLegibility",width:"100%",height:"100%"}})((function(e){var t=e.classes;return Object(p.jsx)("div",{className:t.ResultsTable,children:Object(p.jsx)(f.a,{children:Object(p.jsx)(j.a,{title:"Users",columns:x,data:e.users,defaultSortField:"title",sortIcon:Object(p.jsx)(m.a,{}),pagination:!0})})})})),v=n(135),y=n(61),w=n.n(y);function S(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),c=Object(u.a)(r,2),s=c[0],o=c[1],l=Object(a.useState)(!1),d=Object(u.a)(l,2),j=d[0],f=d[1],h=Object(a.useState)([]),m=Object(u.a)(h,2),g=m[0],x=m[1];return Object(a.useEffect)((function(){""!==n&&(f(!0),w.a.get("https://api.github.com/search/users?q=".concat(n,"in:login")).then((function(e){var t=e.data.items;x(t),f(!1)})))}),[n]),Object(p.jsx)(L,{children:Object(p.jsxs)(b.a,{fixed:!0,children:[Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===s?alert("Please enter text"):i(s)},children:[Object(p.jsx)(v.a,{className:"search-input",label:"search",margin:"normal",variant:"outlined",onChange:function(e){return function(e){o(e.target.value)}(e)}}),Object(p.jsx)("input",{type:"submit",value:j?"Loading...":"Search",variant:"contained",color:"primary"})]}),Object(p.jsx)(O,{users:g})]})})}var F,L=l.default.div(i||(i=Object(o.a)(['\n    padding: 5rem 0;\n    form {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-bottom: 2rem;\n\n        .search-input {\n            width: 360px;\n            margin: 0 2rem 0 0;\n            \n        }\n\n        input[type="submit"] {\n            width: 150px;\n            height: 56px;\n            padding: 6px 16px;\n            font-size: 0.875rem;\n            min-width: 64px;\n            font-family: "Roboto", "Helvetica", "Arial", sans-serif;\n            font-weight: 500;\n            line-height: 1.75;\n            border-radius: 4px;\n            border: none;\n            color: #fff;\n            background-color: #3f51b5;\n            text-transform: uppercase;\n            cursor: pointer;\n        }\n    }\n'])));var T=l.default.div(F||(F=Object(o.a)(["\n  background-color: #cfe8fc;\n  height: 100vh;\n  margin: '2rem auto';\n  width: '100%';\n"]))),k=function(){return Object(p.jsx)(T,{children:Object(p.jsx)(S,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),C()},71:function(e,t,n){},72:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.9e262118.chunk.js.map