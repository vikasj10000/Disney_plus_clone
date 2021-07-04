(this.webpackJsonpdisney_plus=this.webpackJsonpdisney_plus||[]).push([[0],{56:function(n,e,i){},82:function(n,e,i){},83:function(n,e,i){"use strict";i.r(e);var t,a,r,c,o,s,p,d,l,x,b,j,g,h,m,u,O,f,v,w,y,k,z,I,S,E,D,L,A,R,T,G,C,M,P,H,U,X,N,W,B,F,J,K=i(3),V=i.n(K),_=i(32),q=i.n(_),Y=i(14),Z=i(24),$=Object(Z.b)({name:"user",initialState:{name:" ",email:" ",photo:" "},reducers:{setUserLoginDetails:function(n,e){n.name=e.payload.name,n.email=e.payload.email,n.photo=e.payload.photo},setSignOutState:function(n){n.name=null,n.email=null,n.photo=null}}}),Q=$.actions,nn=Q.setUserLoginDetails,en=Q.setSignOutState,tn=function(n){return n.user.name},an=function(n){return n.user.photo},rn=$.reducer,cn=Object(Z.b)({name:"movie",initialState:{recommend:null,newDisney:null,original:null,trending:null},reducers:{setMovies:function(n,e){n.recommend=e.payload.recommend,n.newDisney=e.payload.newDisney,n.original=e.payload.original,n.trending=e.payload.trending}}}),on=cn.actions.setMovies,sn=function(n){return n.movie.recommend},pn=function(n){return n.movie.newDisney},dn=function(n){return n.movie.original},ln=function(n){return n.movie.trending},xn=cn.reducer,bn=Object(Z.a)({reducer:{user:rn,movie:xn},middleware:Object(Z.c)({serializableCheck:!1})}),jn=(i(56),i(18)),gn=i(12),hn=i(6),mn=i(7),un=i(2),On=mn.a.section(t||(t=Object(hn.a)(["\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  height: 100vh;\n"]))),fn=mn.a.div(a||(a=Object(hn.a)(["\n  margin-bottom: 10vw;\n  width: 100%;\n  position: relative;\n  min-height: 100vh;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 80px 40px;\n  height: 100%;\n"]))),vn=mn.a.div(r||(r=Object(hn.a)(['\n  height: 100%;\n  background-position : top;\n  background-image : url("/images/login-background.jpg");\n  background-size : cover;\n  position : absolute;\n  top : 0;\n  right: 0;\n  left : 0;\n  z-index : -1;\n  ']))),wn=mn.a.div(c||(c=Object(hn.a)(["\n  max-width: 650px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),yn=mn.a.img(o||(o=Object(hn.a)(["\n  margin-bottom : 12px;\n  max-width : 600px;\n  min-height : 1px;\n  display : block;\n  width : 100%;\n"]))),kn=mn.a.a(s||(s=Object(hn.a)(["\n  font-weight: bold;\n  color: #f9f9f9;\n  background-color: #0063e5;\n  margin-bottom: 12px;\n  width: 100%;\n  letter-spacing: 1.5px;\n  font-size: 18px;\n  padding: 16.5px 0;\n  border: 1px solid transparent;\n  border-radius: 4px;\n\n  &:hover {\n    background-color: #0483ee;\n  }\n"]))),zn=mn.a.p(p||(p=Object(hn.a)(["\n  color: hsla(0, 0%, 95.3%, 1);\n  font-size: 11px;\n  margin: 0 0 24px;\n  line-height: 1.5;\n  letter-spacing: 1.5px;\n"]))),In=mn.a.img(d||(d=Object(hn.a)(["\n  max-width: 600px;\n  margin-bottom: 20px;\n  display: inline-block;\n  vertical-align: bottom;\n  width: 100%;\n"]))),Sn=function(n){return Object(un.jsx)(On,{children:Object(un.jsxs)(fn,{children:[Object(un.jsxs)(wn,{children:[Object(un.jsx)(yn,{src:"/images/cta-logo-one.svg",alt:"uperMark"}),Object(un.jsx)(kn,{children:" GET ALL THERE "}),Object(un.jsx)(zn,{children:"Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1."}),Object(un.jsx)(In,{src:"/images/cta-logo-two.png",alt:""})]}),Object(un.jsx)(vn,{})]})})},En=i(37),Dn=i.n(En),Ln=i(46),An=i(29),Rn=An.a.initializeApp({apiKey:"AIzaSyCztqDibbyO-GyLZmdIUkUlXFvLGKJc8z8",authDomain:"disney-plus-a8d25.firebaseapp.com",projectId:"disney-plus-a8d25",storageBucket:"disney-plus-a8d25.appspot.com",messagingSenderId:"910155362717",appId:"1:910155362717:web:d3465dacab0ec0fb137f74",measurementId:"G-RGLX80MRWG"}).firestore(),Tn=An.a.auth(),Gn=new An.a.auth.GoogleAuthProvider,Cn=(An.a.storage(),Rn),Mn=mn.a.nav(l||(l=Object(hn.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 70px;\n  background-color: #090b13;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 36px;\n  letter-spacing: 16px;\n  z-index: 3;\n"]))),Pn=mn.a.a(x||(x=Object(hn.a)(["\n  padding: 0;\n  width: 80px;\n  margin-top: 4px;\n  max-height: 70px;\n  font-size: 0;\n  display: inline-block;\n\n  img {\n    display: block;\n    width: 100%;\n  }\n"]))),Hn=mn.a.div(b||(b=Object(hn.a)(['\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  height: 100%;\n  justify-content: flex-end;\n  margin: 0px;\n  padding: 0px;\n  position: relative;\n  margin-right: auto;\n  margin-left: 25px;\n\n  a {\n    display: flex;\n    align-items: center;\n    padding: 0 12px;\n\n    img {\n      height: 20px;\n      min-width: 20px;\n      width: 20px;\n      z-index: auto;\n    }\n\n    span {\n      color: rgb(249, 249, 249);\n      font-size: 13px;\n      letter-spacing: 1.42px;\n      line-height: 1.08;\n      padding: 2px 0px;\n      white-space: nowrap;\n      position: relative;\n\n      &:before {\n        background-color: rgb(249, 249, 249);\n        border-radius: 0px 0px 4px 4px;\n        bottom: -6px;\n        content: "";\n        height: 2px;\n        left: 0px;\n        opacity: 0;\n        position: absolute;\n        right: 0px;\n        transform-origin: left center;\n        transform: scaleX(0);\n        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n        visibility: hidden;\n        width: auto;\n      }\n    }\n\n    &:hover {\n      span:before {\n        transform: scaleX(1);\n        visibility: visible;\n        opacity: 1 !important;\n      }\n    }\n  }\n\n   @media (max-width: 768px) {\n    display: none;\n  } \n']))),Un=mn.a.a(j||(j=Object(hn.a)(["\n  background-color: rgba(0, 0, 0, 0.6);\n  padding: 8px 16px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  border: 1px solid #f9f9f9;\n  border-radius: 4px;\n  transition: all 0.2s ease 0s;\n\n  &:hover {\n    background-color: #f9f9f9;\n    color: #000;\n    border-color: transparent;\n  }\n"]))),Xn=mn.a.img(g||(g=Object(hn.a)(["\n  height: 100%;\n"]))),Nn=mn.a.div(h||(h=Object(hn.a)(["\n  position: absolute;\n  top: 48px;\n  right: 0px;\n  background: rgb(19, 19, 19);\n  border: 1px solid rgba(151, 151, 151, 0.34);\n  border-radius: 4px;\n  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;\n  padding: 10px;\n  font-size: 14px;\n  letter-spacing: 3px;\n  width: 100px;\n  opacity: 0;\n"]))),Wn=mn.a.div(m||(m=Object(hn.a)(["\n  position: relative;\n  height: 48px;\n  width: 48px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n\n  "," {\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n  }\n\n  &:hover {\n    "," {\n      opacity: 1;\n      transition-duration: 1s;\n    }\n  }\n"])),Xn,Nn),Bn=function(n){var e=Object(Y.b)(),i=Object(gn.f)(),t=Object(Y.c)(tn),a=Object(Y.c)(an);Object(K.useEffect)((function(){Tn.onAuthStateChanged(function(){var n=Object(Ln.a)(Dn.a.mark((function n(e){return Dn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e&&(c(e),i.push("/home"));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[t]);var r=function(){t?t&&Tn.signOut().then((function(){e(en()),i.push("/")})).catch((function(n){return alert(n.message)})):Tn.signInWithPopup(Gn).then((function(n){c(n.user)})).catch((function(n){alert(n.message)}))},c=function(n){e(nn({name:n.displayName,email:n.email,photo:n.photoURL}))};return Object(un.jsxs)(Mn,{children:[Object(un.jsx)(Pn,{children:Object(un.jsx)("img",{src:"/images/logo.svg",alt:"Disney+"})}),t?Object(un.jsxs)(un.Fragment,{children:[Object(un.jsxs)(Hn,{children:[Object(un.jsxs)("a",{href:"/home",children:[Object(un.jsx)("img",{src:"/images/home-icon.svg",alt:"HOME"}),Object(un.jsx)("span",{children:"HOME"})]}),Object(un.jsxs)("a",{children:[Object(un.jsx)("img",{src:"/images/search-icon.svg",alt:"SEARCH"}),Object(un.jsx)("span",{children:"SEARCH"})]}),Object(un.jsxs)("a",{children:[Object(un.jsx)("img",{src:"/images/watchlist-icon.svg",alt:"WATCHLIST"}),Object(un.jsx)("span",{children:"WATCHLIST"})]}),Object(un.jsxs)("a",{children:[Object(un.jsx)("img",{src:"/images/original-icon.svg",alt:"ORIGINALS"}),Object(un.jsx)("span",{children:"ORIGINALS"})]}),Object(un.jsxs)("a",{children:[Object(un.jsx)("img",{src:"/images/movie-icon.svg",alt:"MOVIES"}),Object(un.jsx)("span",{children:"MOVIES"})]}),Object(un.jsxs)("a",{children:[Object(un.jsx)("img",{src:"/images/series-icon.svg",alt:"SERIES"}),Object(un.jsx)("span",{children:"SERIES"})]})]}),Object(un.jsxs)(Wn,{children:[Object(un.jsx)(Xn,{src:a,alt:t}),Object(un.jsx)(Nn,{children:Object(un.jsx)("span",{onClick:r,children:"Sign out"})})]})]}):Object(un.jsx)(Un,{onClick:r,children:"Login"})]})},Fn=i(22),Jn=i(30),Kn=(i(65),i(66),i(47)),Vn=i.n(Kn),_n=Object(mn.a)(Vn.a)(u||(u=Object(hn.a)(["\n  margin-top: 20px;\n\n  & > button {\n    opacity: 0;\n    height: 100%;\n    width: 5vw;\n    z-index: 1;\n\n    &:hover {\n      opacity: 1;\n      transition: opacity 0.2s ease 0s;\n    }\n  }\n\n  ul li button {\n    &:before {\n      font-size: 10px;\n      color: rgb(150, 158, 171);\n    }\n  }\n\n  li.slick-active button:before {\n    color: white;\n  }\n\n  .slick-list {\n    overflow: initial;\n  }\n\n  .slick-prev {\n    left: -75px;\n  }\n\n  .slick-next {\n    right: -75px;\n  }\n"]))),qn=mn.a.div(O||(O=Object(hn.a)(["\n  border-radius: 4px;\n  cursor: pointer;\n  position: relative;\n\n  a {\n    border-radius: 4px;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n      rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor: pointer;\n    display: block;\n    position: relative;\n    padding: 4px;\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n\n    &:hover {\n      padding: 0;\n      border: 4px solid rgba(249, 249, 249, 0.8);\n      transition-duration: 300ms;\n    }\n  }\n"]))),Yn=function(n){return Object(un.jsxs)(_n,Object(Fn.a)(Object(Fn.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{children:[Object(un.jsx)(qn,{children:Object(un.jsx)("a",{children:Object(un.jsx)("img",{src:"/images/slider-badging.jpg",alt:""})})}),Object(un.jsx)(qn,{children:Object(un.jsx)("a",{children:Object(un.jsx)("img",{src:"/images/slider-scale.jpg",alt:""})})}),Object(un.jsx)(qn,{children:Object(un.jsx)("a",{children:Object(un.jsx)("img",{src:"/images/slider-badag.jpg",alt:""})})}),Object(un.jsx)(qn,{children:Object(un.jsx)("a",{children:Object(un.jsx)("img",{src:"/images/slider-scales.jpg",alt:""})})})]}))},Zn=mn.a.div(f||(f=Object(hn.a)(["\n  margin-top: 30px;\n  padding: 30px 0px 26px;\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n"]))),$n=mn.a.div(v||(v=Object(hn.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n\n  video {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0px;\n    opacity: 0;\n    z-index: 0;\n  }\n\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n\n    video {\n      opacity: 1;\n    }\n  }\n"]))),Qn=function(n){return Object(un.jsxs)(Zn,{children:[Object(un.jsxs)($n,{children:[Object(un.jsx)("img",{src:"/images/viewers-disney.png",alt:""}),Object(un.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(un.jsx)("source",{src:"/videos/1564674844-disney.mp4",type:"video/mp4"})})]}),Object(un.jsxs)($n,{children:[Object(un.jsx)("img",{src:"/images/viewers-pixar.png",alt:""}),Object(un.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(un.jsx)("source",{src:"/videos/1564676714-pixar.mp4",type:"video/mp4"})})]}),Object(un.jsxs)($n,{children:[Object(un.jsx)("img",{src:"/images/viewers-marvel.png",alt:""}),Object(un.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(un.jsx)("source",{src:"/videos/1564676115-marvel.mp4",type:"video/mp4"})})]}),Object(un.jsxs)($n,{children:[Object(un.jsx)("img",{src:"/images/viewers-starwars.png",alt:""}),Object(un.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(un.jsx)("source",{src:"/videos/1608229455-star-wars.mp4",type:"video/mp4"})})]}),Object(un.jsxs)($n,{children:[Object(un.jsx)("img",{src:"/images/viewers-national.png",alt:""}),Object(un.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(un.jsx)("source",{src:"/videos/1564676296-national-geographic.mp4",type:"video/mp4"})})]})]})},ne=mn.a.div(w||(w=Object(hn.a)(["\n  padding: 0 0 26px;\n"]))),ee=mn.a.div(y||(y=Object(hn.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),ie=mn.a.div(k||(k=Object(hn.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),te=function(n){var e=Object(Y.c)(sn);return console.log(e,":\ud83d\udee2\ufe0f"),Object(un.jsxs)(ne,{children:[Object(un.jsx)("h4",{children:"Recommended for You"}),Object(un.jsx)(ee,{children:e&&e.map((function(n,e){return Object(un.jsxs)(ie,{children:[n.id,Object(un.jsx)(jn.b,{to:"/detail/"+n.id,children:Object(un.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},ae=mn.a.div(z||(z=Object(hn.a)(["\n  padding: 0 0 26px;\n"]))),re=mn.a.div(I||(I=Object(hn.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),ce=mn.a.div(S||(S=Object(hn.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),oe=function(n){var e=Object(Y.c)(pn);return Object(un.jsxs)(ae,{children:[Object(un.jsx)("h4",{children:"New to Disney+"}),Object(un.jsx)(re,{children:e&&e.map((function(n,e){return Object(un.jsxs)(ce,{children:[n.id,Object(un.jsx)(jn.b,{to:"/detail/"+n.id,children:Object(un.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},se=mn.a.div(E||(E=Object(hn.a)(["\n  padding: 0 0 26px;\n"]))),pe=mn.a.div(D||(D=Object(hn.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),de=mn.a.div(L||(L=Object(hn.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),le=function(n){var e=Object(Y.c)(dn);return Object(un.jsxs)(se,{children:[Object(un.jsx)("h4",{children:"Originals"}),Object(un.jsx)(pe,{children:e&&e.map((function(n,e){return Object(un.jsxs)(de,{children:[n.id,Object(un.jsx)(jn.b,{to:"/detail/"+n.id,children:Object(un.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},xe=mn.a.div(A||(A=Object(hn.a)(["\n  padding: 0 0 26px;\n"]))),be=mn.a.div(R||(R=Object(hn.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),je=mn.a.div(T||(T=Object(hn.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),ge=function(n){var e=Object(Y.c)(ln);return Object(un.jsxs)(xe,{children:[Object(un.jsx)("h4",{children:"Trending"}),Object(un.jsx)(be,{children:e&&e.map((function(n,e){return Object(un.jsxs)(je,{children:[n.id,Object(un.jsx)(jn.b,{to:"/detail/"+n.id,children:Object(un.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},he=mn.a.main(G||(G=Object(hn.a)(['\n      position: relative;\n      min-height: calc(100vh - 250px);\n      overflow-x: hidden;\n      display: block;\n      top: 72px;\n      padding: 0 calc(3.5vw + 5px);\n    \n      &:after {\n        background: url("/images/home-background.png") center center / cover\n          no-repeat fixed;\n        content: "";\n        position: absolute;\n        inset: 0px;\n        opacity: 1;\n        z-index: -1;\n      }\n    ']))),me=function(n){var e=Object(Y.b)(),i=Object(Y.c)(tn),t=[],a=[],r=[],c=[];return Object(K.useEffect)((function(){console.log("hello"),Cn.collection("movies").onSnapshot((function(n){n.docs.map((function(n){switch(console.log(t),n.data().type){case"recommend":t=[].concat(Object(Jn.a)(t),[Object(Fn.a)({id:n.id},n.data())]);break;case"new":a=[].concat(Object(Jn.a)(a),[Object(Fn.a)({id:n.id},n.data())]);break;case"original":r=[].concat(Object(Jn.a)(r),[Object(Fn.a)({id:n.id},n.data())]);break;case"trending":c=[].concat(Object(Jn.a)(c),[Object(Fn.a)({id:n.id},n.data())])}})),e(on({recommend:t,newDisney:a,original:r,trending:c}))}))}),[i]),Object(un.jsxs)(he,{children:[Object(un.jsx)(Yn,{}),Object(un.jsx)(Qn,{}),Object(un.jsx)(te,{}),Object(un.jsx)(oe,{}),Object(un.jsx)(le,{}),Object(un.jsx)(ge,{})]})},ue=i(48),Oe=mn.a.div(C||(C=Object(hn.a)(["\n  position: relative;\n  min-height: calc(100vh-250px);\n  overflow-x: hidden;\n  display: block;\n  top: 72px;\n  padding: 0 calc(3.5vw + 5px);\n"]))),fe=mn.a.div(M||(M=Object(hn.a)(["\n  left: 0px;\n  opacity: 0.8;\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  z-index: -1;\n\n  img {\n    width: 100vw;\n    height: 100vh;\n\n    @media (max-width: 768px) {\n      width: initial;\n    }\n  }\n"]))),ve=mn.a.div(P||(P=Object(hn.a)(["\n  align-items: flex-end;\n  display: flex;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  margin: 0px auto;\n  height: 30vw;\n  min-height: 170px;\n  padding-bottom: 24px;\n  width: 100%;\n\n  img {\n    max-width: 600px;\n    min-width: 200px;\n    width: 35vw;\n  }\n"]))),we=mn.a.div(H||(H=Object(hn.a)(["\n  max-width: 874px;\n"]))),ye=mn.a.div(U||(U=Object(hn.a)(["\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  margin: 24px 0px;\n  min-height: 56px;\n"]))),ke=mn.a.button(X||(X=Object(hn.a)(["\n  font-size: 15px;\n  margin: 0px 22px 0px 0px;\n  padding: 0px 24px;\n  height: 56px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 1.8px;\n  text-align: center;\n  text-transform: uppercase;\n  background: rgb (249, 249, 249);\n  border: none;\n  color: rgb(0, 0, 0);\n\n  img {\n    width: 32px;\n  }\n\n  &:hover {\n    background: rgb(198, 198, 198);\n  }\n\n  @media (max-width: 768px) {\n    height: 45px;\n    padding: 0px 12px;\n    font-size: 12px;\n    margin: 0px 10px 0px 0px;\n\n    img {\n      width: 25px;\n    }\n  }\n"]))),ze=Object(mn.a)(ke)(N||(N=Object(hn.a)(["\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgb(249, 249, 249);\n  color: rgb(249, 249, 249);\n"]))),Ie=mn.a.div(W||(W=Object(hn.a)(["\n  margin-right: 16px;\n  height: 44px;\n  width: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  border: 2px solid white;\n  cursor: pointer;\n\n  span {\n    background-color: rgb(249, 249, 249);\n    display: inline-block;\n\n    &:first-child {\n      height: 2px;\n      transform: translate(1px, 0px) rotate(0deg);\n      width: 16px;\n    }\n\n    &:nth-child(2) {\n      height: 16px;\n      transform: translateX(-8px) rotate(0deg);\n      width: 2px;\n    }\n  }\n"]))),Se=mn.a.div(B||(B=Object(hn.a)(["\n  height: 44px;\n  width: 44px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: white;\n\n  div {\n    height: 40px;\n    width: 40px;\n    background: rgb(0, 0, 0);\n    border-radius: 50%;\n\n    img {\n      width: 100%;\n    }\n  }\n"]))),Ee=mn.a.div(F||(F=Object(hn.a)(["\n  color: rgb(249, 249, 249);\n  font-size: 15px;\n  min-height: 20px;\n\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"]))),De=mn.a.div(J||(J=Object(hn.a)(["\n  line-height: 1.4;\n  font-size: 20px;\n  padding: 16px 0px;\n  color: rgb(249, 249, 249);\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n  }\n"]))),Le=function(n){var e=Object(gn.g)().id,i=Object(K.useState)({}),t=Object(ue.a)(i,2),a=t[0],r=t[1];return Object(K.useEffect)((function(){Cn.collection("movies").doc(e).get().then((function(n){n.exists?r(n.data()):console.log("no such document in firebase \ud83d\udd25")})).catch((function(n){console.log("Error getting document:",n)}))}),[e]),Object(un.jsxs)(Oe,{children:[Object(un.jsx)(fe,{children:Object(un.jsx)("img",{alt:a.title,src:a.backgroundImg})}),Object(un.jsx)(ve,{children:Object(un.jsx)("img",{alt:a.title,src:a.titleImg})}),Object(un.jsxs)(we,{children:[Object(un.jsxs)(ye,{children:[Object(un.jsxs)(ke,{children:[Object(un.jsx)("img",{src:"/images/play-icon-black.png",alt:""}),Object(un.jsx)("span",{children:"Play"})]}),Object(un.jsxs)(ze,{children:[Object(un.jsx)("img",{src:"/images/play-icon-white.png",alt:""}),Object(un.jsx)("span",{children:"Trailer"})]}),Object(un.jsxs)(Ie,{children:[Object(un.jsx)("span",{}),Object(un.jsx)("span",{})]}),Object(un.jsx)(Se,{children:Object(un.jsx)("div",{children:Object(un.jsx)("img",{src:"/images/group-icon.png",alt:""})})})]}),Object(un.jsx)(Ee,{children:a.subTitle}),Object(un.jsx)(De,{children:a.description})]})]})};i(82);var Ae=function(){return Object(un.jsx)(un.Fragment,{children:Object(un.jsxs)(jn.a,{children:[Object(un.jsx)(Bn,{}),Object(un.jsxs)(gn.c,{children:[Object(un.jsx)(gn.a,{exact:!0,path:"/",children:Object(un.jsx)(Sn,{})}),Object(un.jsx)(gn.a,{path:"/home",children:Object(un.jsx)(me,{})}),Object(un.jsx)(gn.a,{path:"/detail/:id",children:Object(un.jsx)(Le,{})})]})]})})};q.a.render(Object(un.jsx)(V.a.StrictMode,{children:Object(un.jsx)(Y.a,{store:bn,children:Object(un.jsx)(Ae,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.29b0e6b7.chunk.js.map