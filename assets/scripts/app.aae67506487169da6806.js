(self.webpackChunkthreejs_digging=self.webpackChunkthreejs_digging||[]).push([[143],{836:function(e,n,r){"use strict";var t=r(7294),o=r(3935),c=r(1570),i=r(3727),u=r(710),a=r(7484),s=r.n(a),l=(r(3852),(0,r(8764).B)({colors:{brand:{200:"#ff7d37",500:"#ffc11f"}},styles:{global:{body:{fontFamily:"Rubik, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}}})),p=(r(2222),r(8674),r(1539),r(9669)),d=r.n(p),f=r(980),m=(0,f.createStandaloneToast)();r(9554),r(4747),r(8783),r(6992),r(3948);var b=[{title:"Home",code:"home",link:"/",component:function(){return r.e(919).then(r.bind(r,4919))}},{title:"Projects",code:"projects",link:"/projects",component:function(){return r.e(427).then(r.bind(r,4427))}}],g=r(3391),h=(r(1249),r(3290),r(2212)),w=r(2886),v="https://public-1258874145.cos.ap-nanjing.myqcloud.com/images/moon.jpg",y="https://public-1258874145.cos.ap-nanjing.myqcloud.com/images/normal.jpg",j="https://public-1258874145.cos.ap-nanjing.myqcloud.com/images/space.jpg";function k(){var e=(0,t.useRef)(null),n=(0,t.useRef)(new h.xsS),r=(0,t.useRef)(new h.cPb(75,window.innerWidth/window.innerHeight,.1,1e3)),o=(0,t.useRef)(),c=(0,t.useRef)(new h.XvJ(10,3,16,100)),i=(0,t.useRef)(new h.Wid({color:16226773})),u=(0,t.useRef)(new h.Kj0(c.current,i.current)),a=(0,t.useRef)(new h.cek(16777215)),s=(0,t.useRef)(new h.Mig(16777215)),l=(0,t.useRef)(),p=(0,t.useRef)((new h.dpR).load(j)),d=(0,t.useRef)((new h.dpR).load(v)),f=(0,t.useRef)((new h.dpR).load(y)),m=(0,t.useRef)(new h.Kj0(new h.xo$(3,32,32),new h.Wid({map:d.current,normalMap:f.current}))),b=(0,t.useCallback)((function(){var e=new h.xo$(.25,24,24),r=new h.Wid({color:16777215}),t=new h.Kj0(e,r),o=Array(3).fill(0).map((function(){return h.M8C.randFloatSpread(100)})),c=(0,g.Z)(o,3),i=c[0],u=c[1],a=c[2];t.position.set(i,u,a),n.current.add(t)}),[]),k=(0,t.useCallback)((function(){var e=document.body.getBoundingClientRect().top;m.current.rotation.x+=.05,m.current.rotation.y+=.075,m.current.rotation.z+=.05,r.current.position.x=-2e-4*(e-3e3),r.current.position.y=-2e-4*(e-3e3),r.current.position.z=-.01*(e-3e3)}),[]),E=(0,t.useCallback)((function(){o.current=new h.CP7({canvas:e.current||void 0}),o.current.setPixelRatio(window.devicePixelRatio),o.current.setSize(window.innerWidth,window.innerHeight),r.current.position.set(.6,.6,30),a.current.position.set(20,20,20),l.current=new w.z(r.current,o.current.domElement),m.current.position.z=30,m.current.position.x=-10,u.current.position.x=20,u.current.position.y=10,u.current.position.z=-10,n.current.add(u.current),n.current.add(a.current,s.current),n.current.add(m.current),n.current.background=p.current,Array(200).fill(0).forEach((function(){return b()}))}),[b]),R=(0,t.useCallback)((function(){requestAnimationFrame(R),o.current&&l.current&&(u.current.rotation.x+=.01,u.current.rotation.y+=.005,u.current.rotation.z+=.01,l.current.update(),o.current.render(n.current,r.current))}),[]);return(0,t.useEffect)((function(){document.body.onscroll=k}),[k]),(0,t.useEffect)((function(){E(),R()}),[E,R]),t.createElement("canvas",{ref:e,className:"app-background-canvas"})}r(9254);var E=r(5977),R=r(1852),O=r(7186),x=(r(7941),r(2526),r(5003),r(9337),r(3321),r(9070),r(7042),r(8309),r(1038),r(1817),r(2165),r(9753),r(6156)),P=r(1253);r(7327),r(2772);function C(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function S(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=0;n<e.length;n+=1){var r=e[n];if(r.link)return r.link;var t=S(r.children);if(t)return t}return""}var z=b.filter((function(e){return e.children&&e.children.length&&!e.hideInMenu})).map((function(e){var n=e.children,r=(0,P.Z)(e,["children"]);return function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?C(Object(r),!0).forEach((function(n){(0,x.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({link:S(n),menus:n||[],key:r.code,code:r.code},r)}));var M=(0,O.f)((function(){var e=(0,R.useMediaQuery)({query:"(max-width: 540px)"}),n=(0,t.useMemo)((function(){return z}),[]),r=(0,t.useState)(n[0]||{}),o=(0,g.Z)(r,2),c=o[0],i=o[1],u=(0,t.useState)(!1),a=(0,g.Z)(u,2),s=a[0],l=a[1];return{apps:n,menus:(0,t.useMemo)((function(){return c.menus||[]}),[c]),currentApp:c,setCurrentApp:i,appDrawerVisible:s,setAppDrawerVisible:l,isMobile:e}}));function A(e){var n,r=e.routes,o=(n=M.useContainer().isMobile,(0,t.useCallback)((function(e){return"".concat(e," ").concat(e,"-").concat(n?"mobile":"pc")}),[n])),c=t.createElement("div",{className:o("app-body-spinner")},t.createElement(f.Spinner,{thickness:"4px",speed:"0.65s",emptyColor:"brand.200",color:"brand.500",size:"lg"}));return t.createElement("div",{className:o("app-body-container")},t.createElement("div",{className:o("app-body-content")},t.createElement("div",{className:o("app-body-route")},t.createElement(t.Suspense,{fallback:c},t.createElement(E.rs,null,r.map((function(e){return e.component&&e.link?t.createElement(E.AW,{key:e.link,exact:!0,path:e.link,component:(0,t.lazy)(e.component)}):null})))))))}function D(){var e,n=(e=b,function n(){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:e).forEach((function(e){e.children?r.concat(n(e.children,r)):r.push(e)})),r}());return t.createElement("div",{className:"app-container"},t.createElement(k,null),t.createElement(A,{routes:n}))}d().interceptors.response.use((function(e){return e.data}),(function(e){return!0!==e.response.config.headers.silent&&(404===e.response.status?m({status:"error",description:"".concat(e.response.status,", ").concat(e.response.config.url," not found.")}):m({status:"error",description:e.response.data.message||e.response.data.error||e.response.data})),Promise.reject(e)})),s().locale("zh-cn");var N=(0,c.w)((function(){return t.createElement(M.Provider,null,t.createElement(u.x,{theme:l},t.createElement(i.VK,{basename:"/threejs-digging"},t.createElement(D,null))))}));o.render(t.createElement(N,null),document.getElementById("app"))}},function(e){"use strict";var n=function(n){return e(e.s=n)};e.O(void 0,[935,19],(function(){return n(3658),n(836)}))}]);