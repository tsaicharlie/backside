import{f as F,_ as H,u as S,a as o,o as t,c as a,w as e,b as n,g as L,h as m,F as x,i as b,j as v,e as s,t as $,d as B}from"./index-DTQW0rsp.js";const D=F("collapse",{state(){return{isCollapse:!0}}}),N={class:"menuLabel"},U={class:"menuLabel"},V={class:"menuLabel"},j={__name:"CommonAside",setup(y){const h=S(),_=[{path:"/home",name:"home",label:"首頁",icon:"house",url:"Home/Home"},{path:"/user",name:"user",label:"使用者管理",icon:"user",url:"UserManage/UserManage"}];let r=D();const i=()=>_.filter(c=>!c.children),p=()=>_.filter(c=>c.children),u=c=>{h.push({name:c.name})};return(c,M)=>{const f=o("el-menu-item"),k=o("el-menu-item-group"),C=o("el-sub-menu"),w=o("el-menu"),g=o("el-aside");return t(),a(g,{width:L(r).isCollapse?"64px":"240px"},{default:e(()=>[n(w,{"active-text-color":"#ffd04b","background-color":"#545c64",class:"el-menu-vertical-demo",collapse:L(r).isCollapse,"collapse-transition":!1,"text-color":"#fff"},{default:e(()=>[(t(!0),m(x,null,b(i(),l=>(t(),a(f,{index:l.path,key:l.path,onClick:d=>u(l)},{default:e(()=>[(t(),a(v(l.icon),{class:"icons"})),s("span",N,$(l.label),1)]),_:2},1032,["index","onClick"]))),128)),(t(!0),m(x,null,b(p(),l=>(t(),a(C,{index:l.path,key:l.path},{title:e(()=>[(t(),a(v(l.icon),{class:"icons"})),s("span",U,$(l.label),1)]),default:e(()=>[n(k,null,{default:e(()=>[(t(!0),m(x,null,b(l.children,d=>(t(),a(f,{index:d.path,key:d.path,onClick:z=>u(d)},{default:e(()=>[(t(),a(v(d.icon),{class:"icons"})),s("span",V,$(d.label),1)]),_:2},1032,["index","onClick"]))),128))]),_:2},1024)]),_:2},1032,["index"]))),128))]),_:1},8,["collapse"])]),_:1},8,["width"])}}},A=H(j,[["__scopeId","data-v-cd650112"]]),I={class:"l-content"},R=s("h3",null,"首頁",-1),E={class:"r-content"},T={class:"el-dropdown-link"},W=["src"],X={__name:"CommonHeader",setup(y){const h=S();let _=D();function r(){_.isCollapse=!_.isCollapse}const i=()=>new URL("/assets/user-DWFuteXb.jpg",import.meta.url).href,p=()=>{h.push("/")};return(u,c)=>{const M=o("Menu"),f=o("el-icon"),k=o("el-button"),C=o("el-dropdown-item"),w=o("el-dropdown-menu"),g=o("el-dropdown");return t(),m(x,null,[s("div",I,[n(k,{onClick:r},{default:e(()=>[n(f,null,{default:e(()=>[n(M)]),_:1})]),_:1}),R]),s("div",E,[n(g,null,{dropdown:e(()=>[n(w,null,{default:e(()=>[n(C,null,{default:e(()=>[B("個人中心")]),_:1}),n(C,{onClick:p},{default:e(()=>[B(" 登出 ")]),_:1})]),_:1})]),default:e(()=>[s("span",T,[s("img",{class:"user",src:i()},null,8,W)])]),_:1})])],64)}}},q={class:"common-layout"},J={__name:"Main",setup(y){return(h,_)=>{const r=o("el-header"),i=o("router-view"),p=o("el-main"),u=o("el-container");return t(),m("div",q,[n(u,null,{default:e(()=>[n(A),n(u,null,{default:e(()=>[n(r,null,{default:e(()=>[n(X)]),_:1}),n(p,null,{default:e(()=>[n(i)]),_:1})]),_:1})]),_:1})])}}};export{J as default};
