(this.webpackJsonpecom_webapp=this.webpackJsonpecom_webapp||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},69:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(3),s=c.n(n),i=c(27),r=c.n(i),o=(c(49),c(38)),l=c(11),j=(c(50),c(51),c(40)),d=c.n(j),h=c(20),m=c(41),b=c.n(m),u=Object(n.createContext)(),p=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(a.jsx)(u.Provider,{value:Object(n.useReducer)(t,c),children:s})},O=function(){return Object(n.useContext)(u)},g=c(33),x=(g.a.initializeApp({apiKey:"AIzaSyBoDmxG0OazVn_B0Ivg1mC405jvayaK6SI",authDomain:"ecom-webapp-453ea.firebaseapp.com",projectId:"ecom-webapp-453ea",storageBucket:"ecom-webapp-453ea.appspot.com",messagingSenderId:"145980743055",appId:"1:145980743055:web:f50cf5654c071dbc947ffa",measurementId:"G-H9DYSLSKC1"}).firestore(),g.a.auth());var _=function(){var e=O(),t=Object(l.a)(e,2),c=t[0],n=c.basket,s=c.user;return t[1],Object(a.jsxs)("div",{className:"header",children:[Object(a.jsxs)("div",{id:"header_company",children:[Object(a.jsx)("img",{className:"header_logo",src:"https://raw.githubusercontent.com/pradeepsinghjaroliya/image/master/company_logo.png",alt:"company-logo"}),Object(a.jsx)("span",{id:"company_name",children:"PSJ "})]}),Object(a.jsx)(h.b,{to:"/",style:{textDecoration:"none"},children:Object(a.jsx)("div",{id:"header_company_name",children:Object(a.jsx)("span",{id:"header_company_nameTwo",children:"QuickBUY "})})}),Object(a.jsxs)("div",{className:"header_search",children:[Object(a.jsx)("input",{className:"header_searchInput",type:"text"}),Object(a.jsx)(d.a,{className:"header_searchIcon"})]}),Object(a.jsxs)("div",{className:"header_nav",children:[Object(a.jsx)(h.b,{to:!s&&"/login",style:{textDecoration:"none",color:"white"},children:Object(a.jsxs)("div",{onClick:function(){s&&x.signOut()},className:"header_option",children:[Object(a.jsxs)("span",{className:"header_optionLineOne",children:["Hello,",null===s||void 0===s?void 0:s.Email]}),Object(a.jsx)("span",{className:"header_optionLineTwo",children:s?"Sign Out":"Sign In"})]})}),Object(a.jsxs)("div",{className:"header_option",children:[Object(a.jsx)("span",{className:"header_optionLineOne",children:"Returns"}),Object(a.jsx)("span",{className:"header_optionLineTwo",children:"& Orders"})]}),Object(a.jsx)(h.b,{to:"/checkout",style:{textDecoration:"none",color:"white"},children:Object(a.jsxs)("div",{className:"header_option_cart",children:[Object(a.jsx)(b.a,{}),Object(a.jsx)("span",{className:"header_basketCount",children:null===n||void 0===n?void 0:n.length})]})})]})]})};c(63),c(64);var f=function(e){var t=e.id,c=e.title,n=e.image,s=e.price,i=e.rating,r=O(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(a.jsxs)("div",{className:"product",children:[Object(a.jsxs)("div",{className:"product_info",children:[Object(a.jsx)("p",{children:c}),Object(a.jsxs)("p",{className:"product_price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:s})]}),Object(a.jsx)("div",{className:"product_rating",children:Array(i).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\u2b50"})}))})]}),Object(a.jsx)("img",{src:n,alt:""}),Object(a.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:s,rating:i}})},children:"Add to Basket"})]})};var v=function(){return Object(a.jsx)("div",{className:"home",children:Object(a.jsxs)("div",{className:"home_container",children:[Object(a.jsx)("img",{className:"home_image",src:"https://raw.githubusercontent.com/pradeepsinghjaroliya/image/master/ad1.png",alt:""}),Object(a.jsxs)("div",{className:"home_row",children:[Object(a.jsx)(f,{id:"1001",title:"Hanes Men's Full-Zip Eco-Smart Fleece Hoodie",price:20.99,image:"https://m.media-amazon.com/images/I/817EoIxv-8L._AC_UL320_.jpg",rating:5}),Object(a.jsx)(f,{id:"1002",title:"Mast & Harbour\r Men Navy Blue & Mustard Yellow Round Neck T-shirt",price:30.99,image:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11700074/2020/9/3/399f940e-d5ef-4976-8bf5-f723d4aa16201599121831638-Mast--Harbour-Men-Tshirts-9761599121830062-1.jpg",rating:4}),Object(a.jsx)(f,{id:"1003",title:"Roadster\r Women Black Solid Round Neck T-shirt",price:18.69,image:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10969776/2020/1/24/7ffe1797-42af-4fb5-8b52-9d9642c41d561579867814320-Roadster-Women-Tshirts-5061579867812499-1.jpg",rating:5})]}),Object(a.jsxs)("div",{className:"home_row",children:[Object(a.jsx)(f,{id:"2001",title:"LG Ultragear 27 inch, 4K-UHD, Nano IPS 144Hz, 1ms G-Sync Compatible Gaming Monitor - with VESA HDR 600 - Display Port, HDMI, USB up/Down, HAS Stand, RGB Sphere Lighting - 27GN950 (Black)",price:1001.99,image:"https://images-na.ssl-images-amazon.com/images/I/71Cn04gV7bL._SL1500_.jpg",rating:5}),Object(a.jsx)(f,{id:"2002",title:"New Apple iPhone 11 (64GB) - Black",price:1045.29,image:"https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg",rating:5})]}),Object(a.jsxs)("div",{className:"home_row",children:[Object(a.jsx)(f,{id:"3001",title:"Biggest Fly Extra Thick Yoga and Exercise Mat",price:49.99,image:"https://m.media-amazon.com/images/I/41gbv0RmiiL._AC_SY161_.jpg",rating:3}),Object(a.jsx)(f,{id:"3002",title:"World\u2019s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect",price:29.99,image:"https://images-na.ssl-images-amazon.com/images/I/51Do0NLYmDL._SX445_BO1,204,203,200_.jpg",rating:5}),Object(a.jsx)(f,{id:"3003",title:"ComicSense.xyz Re-Usable Unisex Ghoul Anime Printed Cotton Mask (Free Size)",price:11.99,image:"https://images-na.ssl-images-amazon.com/images/I/61Wz0m-ph6L._UL1467_.jpg",rating:4})]})]})})},k=(c(65),c(10));var N=function(){var e=Object(k.f)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(n.useState)(""),o=Object(l.a)(r,2),j=o[0],d=o[1];return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(h.b,{to:"/",style:{textDecoration:"none"},children:Object(a.jsxs)("div",{id:"company_cont",children:[Object(a.jsx)("img",{className:"login_logo",src:"https://raw.githubusercontent.com/pradeepsinghjaroliya/image/master/company_logo.png",alt:""}),Object(a.jsx)("span",{id:"company_name1",children:"PSJ "}),Object(a.jsx)("span",{id:"company_name2",children:"QuickBUY"})]})}),Object(a.jsxs)("div",{className:"login_container",children:[Object(a.jsx)("h1",{children:"Sign-In"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("h5",{children:"E-mail"}),Object(a.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("h5",{children:"Password"}),Object(a.jsx)("input",{type:"password",value:j,onChange:function(e){return d(e.target.value)}}),Object(a.jsx)("button",{className:"login_signInButton",type:"submit",onClick:function(t){t.preventDefault(),x.signInWithEmailAndPassword(s,j).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]}),Object(a.jsx)("button",{className:"login_registerButton",onClick:function(t){t.preventDefault(),x.createUserWithEmailAndPassword(s,j).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Create your new Account"})]})]})},S=(c(66),c(67),c(42)),y=c.n(S),w=c(23),B=c(24),I=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},C=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(B.a)(Object(B.a)({},e),{},{basket:[].concat(Object(w.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(w.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Cant remove (id: ".concat(t.id," as its not in basket)")),Object(B.a)(Object(B.a)({},e),{},{basket:a});case"SET_USER":return Object(B.a)(Object(B.a)({},e),{},{user:t.user});default:return e}};var E=function(){var e=O(),t=Object(l.a)(e,2),c=t[0].basket;return t[1],Object(a.jsxs)("div",{className:"subtotal",children:[Object(a.jsx)(y.a,{renderText:function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(a.jsx)("strong",{children:e})]}),Object(a.jsxs)("small",{className:"subtotal_gift",children:[Object(a.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},decimalScale:2,value:I(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(a.jsx)("button",{children:"Proceed to Checkout"})]})};c(69);var A=function(e){var t=e.id,c=e.image,n=e.title,s=e.price,i=e.rating,r=O(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(a.jsxs)("div",{className:"checkoutProduct",children:[Object(a.jsx)("img",{className:"checkoutProduct_image",src:c,alt:""}),Object(a.jsxs)("div",{className:"checkoutProduct_info",children:[Object(a.jsx)("p",{className:"checkoutProduct_title",children:n}),Object(a.jsxs)("p",{className:"checkoutProduct_price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:s})]}),Object(a.jsx)("div",{className:"checkoutProduct_rating",children:Array(i).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\u2b50"})}))}),Object(a.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})};var T=function(){var e=O(),t=Object(l.a)(e,2),c=t[0],n=c.basket,s=c.user;return t[1],Object(a.jsxs)("div",{className:"checkout",children:[Object(a.jsx)("div",{className:"checkout_left",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:null===s||void 0===s?void 0:s.email}),Object(a.jsx)("h2",{className:"checkout_title",children:"Your Shopping Basket"}),n.map((function(e){return Object(a.jsx)(A,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})}),Object(a.jsx)("div",{className:"checkout_right",children:Object(a.jsx)(E,{})})]})};var D=function(){var e=O(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){x.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(a.jsx)(h.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(k.c,{children:[Object(a.jsx)(k.a,{path:"/login",children:Object(a.jsx)(N,{})}),Object(a.jsxs)(k.a,{path:"/checkout",children:[Object(a.jsx)(_,{}),Object(a.jsx)(T,{})]}),Object(a.jsxs)(k.a,{path:"/",children:[Object(a.jsx)(_,{}),Object(a.jsx)(v,{})]})]})})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p,{initialState:{basket:[],user:null},reducer:C,children:Object(a.jsx)(D,{})})}),document.getElementById("root")),P()}},[[71,1,2]]]);
//# sourceMappingURL=main.3dbc2b91.chunk.js.map