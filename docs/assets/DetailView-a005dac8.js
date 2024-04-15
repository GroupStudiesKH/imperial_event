import{_ as u,u as v,a as D,r as b,b as k,o as w,c as B,d as r,e as c,f as x,g as s,t as e,n as y,l as N,i as h,F as V}from"./index-e082cd19.js";import{H as C}from"./bootstrap.bundle-8ae3a1c8.js";import"./api-service-4751efbb.js";import{_ as S,a as T,b as H,c as j,d as A}from"./previous_member-3206d6e4.js";const E="/assets/img/get_ticket.png",F={components:{Header:C},setup(){const l=v(),{t,locale:_}=D(),o=b({store_name:"",subtitle:"",store_address:"",class:"",description:"",store_fb:"",store_ig:""}),d=k().params.id,n=async()=>{try{const a=await fetch("/data/bar.json");if(!a.ok)throw new Error("Network response was not ok");let g=await a.json();o.value=g.find(f=>f.id==d)}catch(a){console.error("There was a problem with the fetch operation:",a)}},i=()=>{l.go(-1)},m=()=>{window.location.href="/detail/19"};return w(()=>{n()}),{t,locale:_,shopData:o,toPrevious:i,goBannerBar:m}}},I={id:"index"},M={class:"container",id:"bars"},P={class:"row"},R={class:"col-12 px-5 BarDetailTitle"},z={class:"col-12 px-5 BarDetailName"},J={class:"col-12 px-5 BarDetailAddress"},K={class:"address_bg"},W={class:"annotation"},q=s("img",{src:S},null,-1),G=s("div",{class:"address"},null,-1),L={class:"col-12 px-5 BarDetailTag"},O={class:"pill"},Q={class:"pill"},U=s("hr",null,null,-1),X={class:"col-12 px-5 BarDetailContent"},Y=s("hr",null,null,-1),Z={class:"col-12 px-5 BarDetailSocial"},$=["href"],ss=s("img",{src:T},null,-1),os=[ss],ts=["href"],es=s("img",{src:H},null,-1),as=[es],ns=["href"],is=s("img",{src:j},null,-1),rs=[is],cs={class:"col-12 px-5 BarDetailAction"},ls=s("a",{class:"getTicket",href:"https://liff.line.me/1657256835-VrMKDJ6W/member/giftbox?key=cc9bfd1e448d8e53020829b87f22",target:"_blank"},[s("img",{src:E})],-1),_s=s("img",{src:A},null,-1),ds=[_s],hs=s("div",{id:"page_bottom"},null,-1);function ps(l,t,_,o,p,d){const n=B("Header");return r(),c(V,null,[x(n),s("main",I,[s("div",{class:"container monthStar",id:"banner",onClick:t[0]||(t[0]=i=>o.goBannerBar())}),s("div",M,[s("div",P,[s("div",R,[s("h4",null,e(o.shopData.store_name),1)]),s("div",z,[s("div",null,[s("h4",null,e(o.shopData.subtitle),1),s("div",{class:"img",style:y(`background-image: url('/assets/img/shop/${o.shopData.id}-1.jpg?time=202403291325')`)},null,4)])]),s("div",J,[s("div",K,[s("div",W,[q,N(" "+e(o.shopData.store_address),1)]),G])]),s("div",L,[s("div",O,e(o.shopData.location),1),s("div",Q,e(o.shopData.class),1),U]),s("div",X,[s("p",null,e(o.shopData.description),1),Y]),s("div",Z,[o.shopData.store_fb.length>0?(r(),c("a",{key:0,href:o.shopData.store_fb,target:"_blank"},os,8,$)):h("",!0),o.shopData.store_ig.length>0?(r(),c("a",{key:1,href:o.shopData.store_ig,target:"_blank"},as,8,ts)):h("",!0),s("a",{href:`https://www.google.com.tw/maps/place/${o.shopData.store_address}`,target:"_blank"},rs,8,ns)]),s("div",cs,[ls,s("a",{class:"previous",onClick:t[1]||(t[1]=i=>o.toPrevious())},ds)])]),hs])])],64)}const vs=u(F,[["render",ps]]);export{vs as default};
