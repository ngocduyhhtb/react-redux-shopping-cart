(this["webpackJsonpreact-readux-cart"]=this["webpackJsonpreact-readux-cart"]||[]).push([[0],{21:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a,c,r=n(1),s=n.n(r),i=n(7),l=n.n(i),o=(n(21),n(0)),d=function(){return Object(o.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/#",children:"Navbar"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(o.jsxs)("div",{className:"navbar-nav",children:[Object(o.jsxs)("a",{className:"nav-item nav-link active",href:"/#",children:["Home ",Object(o.jsx)("span",{className:"sr-only",children:"(current)"})]}),Object(o.jsx)("a",{className:"nav-item nav-link",href:"/#",children:"Features"}),Object(o.jsx)("a",{className:"nav-item nav-link",href:"/#",children:"Pricing"}),Object(o.jsx)("a",{className:"nav-item nav-link disabled",href:"/#",children:"Disabled"})]})})]})},j={backgroundColor:"rgba(0, 0, 0, 0.2)"},h=function(e){return Object(o.jsxs)("div",{className:"text-center p-3",style:j,children:["\xa9 2020 Copyright:",Object(o.jsx)("a",{className:"text-dark",href:"https://mdbootstrap.com/",children:"MDBootstrap.com"})]})},b=function(e){var t=e.children;return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsxs)("section",{className:"section",children:[Object(o.jsx)("h1",{className:"section-heading",children:"Danh S\xe1ch S\u1ea3n Ph\u1ea9m"}),Object(o.jsx)("div",{className:"row",children:t})]})})},u="ADD_TO_CART",g="REMOVE_FROM_CART",m="DELETE_ITEM_FROM_CART",x="ON_CHANGE_MESSAGE",O=function(e){return{type:u,product:e}},p=function(e){return{type:x,message:e}},v=n(3),f="Gi\u1ecf h\xe0ng tr\u1ed1ng",N="Th\xeam gi\u1ecf h\xe0ng th\xe0nh c\xf4ng!",y=function(e){var t=e.product;return Object(o.jsx)("div",{className:"col-lg-4 col-md-6 mb-r",children:Object(o.jsxs)("div",{className:"card text-center card-cascade narrower",children:[Object(o.jsxs)("div",{className:"view overlay hm-white-slight z-depth-1",children:[Object(o.jsx)("img",{src:t.image,className:"img-fluid",alt:""}),Object(o.jsx)("a",{href:"/",children:Object(o.jsx)("div",{className:"mask waves-light waves-effect waves-light"})})]}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h4",{className:"card-title",children:Object(o.jsx)("strong",{children:Object(o.jsx)("span",{children:t.name})})}),Object(o.jsx)("ul",{className:"rating",children:function(){var e=[];if(t.star>0)for(var n=0;n<t.star;n++)e.push(Object(o.jsx)("li",{children:Object(o.jsx)("i",{className:"fa fa-star"})},n));return e}()}),Object(o.jsx)("p",{className:"card-text",children:t.description}),Object(o.jsxs)("div",{className:"card-footer",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsxs)("button",{className:"btn btn-primary",children:[t.price,"$"]})}),Object(o.jsxs)("span",{className:"right",children:[Object(o.jsx)("button",{className:"btn btn-dark","data-toggle":"tooltip","data-placement":"top",onClick:function(){return function(t){e.onAddTocart(t),e.onChangeMessage(N)}(t)},children:"Add To Cart"}),Object(o.jsx)("i",{className:"bi bi-cart"})]})]})]})]})})},C=Object(v.b)((function(e){return{products:e.products}}),(function(e,t){return{onAddToCart:function(t){e(O(t))},onChangeMessage:function(t){e(p(t))}}}))((function(e){var t=e.products;return Object(o.jsx)(b,{children:function(t){var n=null,a=e.onAddToCart;return t.length>0&&(n=t.map((function(t,n){return Object(o.jsx)(y,{product:t,onAddTocart:a,onChangeMessage:e.onChangeMessage},n)}))),n}(t)})})),T=n(8),k=n(9),w=k.a.th(a||(a=Object(T.a)(["\n    text-align: center;\n"]))),S=function(e){var t=e.children;return Object(o.jsx)("section",{className:"section",children:Object(o.jsx)("div",{className:"table-responsive",children:Object(o.jsxs)("table",{className:"table product-table",id:"cart-table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)(w,{children:"\u1ea2nh"}),Object(o.jsx)(w,{children:"T\xean S\u1ea3n Ph\u1ea9m"}),Object(o.jsx)(w,{children:"Gi\xe1"}),Object(o.jsx)(w,{children:Object(o.jsx)("span",{children:"S\u1ed1 L\u01b0\u1ee3ng"})}),Object(o.jsx)(w,{children:"T\u1ed5ng C\u1ed9ng"}),Object(o.jsx)(w,{})]})}),Object(o.jsx)("tbody",{children:t})]})})})},A=k.a.tr(c||(c=Object(T.a)(["\n  text-align: center;\n"]))),_=function(e){var t,n,a=e.product;return Object(o.jsxs)(A,{children:[Object(o.jsx)("th",{scope:"row",children:Object(o.jsx)("img",{src:a.image,alt:"",className:"img-fluid z-depth-0"})}),Object(o.jsx)("td",{children:Object(o.jsx)("strong",{children:a.name})}),Object(o.jsx)("td",{children:Object(o.jsxs)("strong",{children:[a.price,"$"]})}),Object(o.jsx)("td",{children:Object(o.jsx)("span",{children:a.quantity})}),Object(o.jsx)("td",{children:Object(o.jsxs)("strong",{children:[(t=a.price,n=a.quantity,t*n),"$"]})}),Object(o.jsx)("td",{children:Object(o.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic mixed styles example",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){e.onAddToCart(a),e.onChangeMessage(N)},children:Object(o.jsx)("strong",{children:"+"})}),Object(o.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){e.onRemoveFromCart(a),e.onChangeMessage("C\u1eadp nh\u1eadt gi\u1ecf h\xe0ng th\xe0nh c\xf4ng!")},children:"-"})]})}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{type:"button",className:"btn btn-sm btn-primary waves-effect waves-light","data-toggle":"tooltip","data-placement":"top",onClick:function(){e.onDeleteItemFromCart(a),e.onChangeMessage("Xo\xe1 s\u1ea3n ph\u1ea9m th\xe0nh c\xf4ng!")},children:"X"})})]})},M=function(e){var t=e.cart;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{colSpan:3}),Object(o.jsx)("td",{children:Object(o.jsx)("h4",{children:Object(o.jsx)("strong",{children:"T\u1ed5ng Ti\u1ec1n"})})}),Object(o.jsx)("td",{children:Object(o.jsx)("h4",{children:Object(o.jsxs)("strong",{children:[function(e){var t=0;if(e.length>0)for(var n=0;n<e.length;n++)t+=e[n].price*e[n].quantity;return t}(t),"$"]})})}),Object(o.jsx)("td",{colSpan:3,children:Object(o.jsxs)("button",{type:"button",className:"btn btn-primary waves-effect waves-light",children:["Complete purchase",Object(o.jsx)("i",{className:"fa fa-angle-right right"})]})})]})},E=Object(v.b)((function(e){return{cart:e.cart}}),(function(e,t){return{onAddToCart:function(t){e(O(t))},onRemoveFromCart:function(t){e(function(e){return{type:g,product:e}}(t))},onDeleteItemFromCart:function(t){e(function(e){return{type:m,product:e}}(t))},onChangeMessage:function(t){e(p(t))}}}))((function(e){var t=e.cart;return Object(o.jsxs)(S,{children:[function(t){var n=f;return t.length>0&&(n=t.map((function(t,n){return Object(o.jsx)(_,{product:t,index:n,onAddToCart:e.onAddToCart,onRemoveFromCart:e.onRemoveFromCart,onDeleteItemFromCart:e.onDeleteItemFromCart,onChangeMessage:e.onChangeMessage},n)}))),n}(t),function(e){var t=null;return e.length>0&&(t=Object(o.jsx)(M,{cart:e})),t}(t)]})})),F=function(e){var t=e.message;return Object(o.jsx)("h3",{children:Object(o.jsx)("span",{className:"badge amber darken-2",children:t})})},D=Object(v.b)((function(e){return{message:e.message}}),(function(e,t){return{}}))((function(e){var t=e.message;return Object(o.jsx)(F,{message:t})}));var G=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{}),Object(o.jsx)("main",{id:"mainContainer",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(C,{}),Object(o.jsx)(D,{}),Object(o.jsx)(E,{})]})}),Object(o.jsx)("footer",{className:"bg-light text-center text-lg-start",children:Object(o.jsx)(h,{})})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},P=n(5),R=n(2),q=n(32),B=[{id:Object(q.a)(),name:"Samsung Galaxy S21 Ultra 5G",image:"https://cdn.tgdd.vn/Products/Images/42/226316/samsung-galaxy-s21-ultra-bac-600x600-1-600x600.jpg",price:100,star:4,inventory:10,description:"\u0110\xf3n n\u0103m m\u1edbi r\u1ed9n r\xe0ng c\xf9ng v\u1edbi series Galaxy S21 \u0111\u1ebfn t\u1eeb Samsung. Phi\xean b\u1ea3n ti\xeau chu\u1ea9n cho series l\u1ea7n n\xe0y l\xe0 Samsung Galaxy S21 5G, n\u1ed5i b\u1eadt v\u1edbi thi\u1ebft k\u1ebf tr\xe0n vi\u1ec1n, c\u1ee5m camera \u1ea5n t\u01b0\u1ee3ng cho \u0111\u1ebfn hi\u1ec7u n\u0103ng m\u1ea1nh m\u1ebd h\xe0ng \u0111\u1ea7u.",quantity:1},{id:Object(q.a)(),name:"iPhone 12 64GB",image:"https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg",price:110,star:5,inventory:5,description:"Trong nh\u1eefng th\xe1ng cu\u1ed1i n\u0103m 2020 Apple \u0111\xe3 ch\xednh th\u1ee9c gi\u1edbi thi\u1ec7u \u0111\u1ebfn ng\u01b0\u1eddi d\xf9ng c\u0169ng nh\u01b0 iFan th\u1ebf h\u1ec7 iPhone 12 series m\u1edbi v\u1edbi h\xe0ng lo\u1ea1t t\xednh n\u0103ng b\u1ee9c ph\xe1, thi\u1ebft k\u1ebf \u0111\u01b0\u1ee3c l\u1ed9t x\xe1c ho\xe0n to\xe0n, hi\u1ec7u n\u0103ng \u0111\u1ea7y m\u1ea1nh m\u1ebd v\xe0 m\u1ed9t trong s\u1ed1 \u0111\xf3 ch\xednh l\xe0 iPhone 12 64GB.",quantity:1},{id:Object(q.a)(),name:"Samsung Galaxy Note 20 Ultra",image:"https://cdn.tgdd.vn/Products/Images/42/220522/samsung-galaxy-note-20-ultra-vangdong-600x600-600x600.jpg",price:90,star:4,inventory:15,description:"Sau Galaxy Note 20 th\xec Galaxy Note 20 Ultra l\xe0 phi\xean b\u1ea3n ti\u1ebfp theo cao c\u1ea5p h\u01a1n thu\u1ed9c d\xf2ng Note 20 Series c\u1ee7a Samsung, v\u1edbi nhi\u1ec1u thay \u0111\u1ed5i, t\u1eeb c\u1ee5m camera h\u1ed7 tr\u1ee3 l\u1ea5y n\xe9t laser AF c\xf9ng \u1ed1ng k\xednh g\xf3c r\u1ed9ng m\u1edbi, m\xe0n h\xecnh tr\xe0n vi\u1ec1n l\xean \u0111\u1ebfn 6.9 inch.",quantity:1}],L=B||[],X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:default:return Object(R.a)(e)}},U=[],$=function(e,t){var n=-1;if(e.length>0)for(var a=0;a<e.length;a++)if(e[a].id===t.id){n=a;break}return n},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,n=t.product;switch(t.type){case u:var a=$(e,n);return-1!==a?e[a].quantity+=1:e.push(n),Object(R.a)(e);case g:var c=$(e,n);return-1!==c&&(e[c].quantity<=1?e.splice(c,1):e[c].quantity-=1),Object(R.a)(e);case m:var r=$(e,n);return-1!==r&&e.splice(r,1),Object(R.a)(e);default:return Object(R.a)(e)}},z=f,H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return console.log(t),e=t.message,Object(R.a)(e);default:return Object(R.a)(e)}},J=Object(P.b)({products:X,cart:V,message:H}),K=Object(P.c)(J,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(Object(o.jsx)(v.a,{store:K,children:Object(o.jsx)(G,{})}),document.getElementById("root")),I()}},[[30,1,2]]]);
//# sourceMappingURL=main.2745ebc4.chunk.js.map