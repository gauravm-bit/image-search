(this["webpackJsonpimage-search"]=this["webpackJsonpimage-search"]||[]).push([[0],{74:function(t,e,n){"use strict";n.r(e);var a=n(4),c=n(0),r=n.n(c),s=n(37),i=n.n(s),o=n(13),u=n(14),l=n(19),h=n(18),j=n(76),b=n(77),m=n(78),p=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={term:""},t.handleChange=function(e){t.setState({term:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSearchSubmit(t.state.term),t.setState({term:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)(j.a,{children:" Image Search "}),Object(a.jsx)(b.a,{value:this.state.term,onChange:this.handleChange,type:"text"}),Object(a.jsx)(m.a,{children:"Using Unsplash API"})]})})}}]),n}(r.a.Component),O=n(42),d=n.n(O),g=function(t){var e=t.image,n=t.alt;t.style;return Object(a.jsx)("div",{className:"image-list",children:Object(a.jsx)("img",{src:e,alt:n})})},f=n(27),v=n.n(f),x=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(f.ResponsiveMasonry,{columnsCountBreakPoints:{350:1,750:2,900:3},children:Object(a.jsx)(v.a,{columnsCount:3,gutter:"15px",children:this.props.images.map((function(t){return Object(a.jsx)(g,{image:t.urls.small,alt:t.alt_description},t.id)}))})})})}}]),n}(r.a.Component),S=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={images:[]},t.onSearchSubmit=function(e){console.log(e),d.a.get("https://api.unsplash.com/search/photos/?client_id=Uq9ptKE0KiHhkc82EOAcM4w0scD0KZeiyPYxBXpLEcc",{params:{query:e}}).then((function(e){t.setState({images:e.data.results})})).catch((function(t){console.log(t)}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(p,{onSearchSubmit:this.onSearchSubmit}),Object(a.jsx)(x,{images:this.state.images})]})}}]),n}(r.a.Component),y=n(43),C=n(79);i.a.render(Object(a.jsxs)(y.a,{children:[Object(a.jsx)(C.a,{}),Object(a.jsx)(S,{})]}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.72b37e08.chunk.js.map