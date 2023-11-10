import{_ as P,o as c,a,b as r,d as _,F as C,f as y,w as h,t as p,g as i,h as T,A as s,i as l,P as v,j as x,l as u,k as b,S as F,C as N,D as V,m as j,n as q,p as R,q as M,s as z,v as L,x as G,r as m,u as H,e as J,y as K,z as O,B as Q}from"./index.96d0bdd2.js";const U="/assets/fancybanner.c7d12a27.png";const f={setup(){H(),J();function d(){try{K.getAccount}catch(e){u.error(e),v.toast(e.message,"error")}}async function n(){try{await b.getAccountCards()}catch(e){u.log("[getting all cards]",e),v.error(e)}}return T(()=>{s.activeDeck={},d(),n()}),{cards:l(()=>s.collection),decks:l(()=>s.decks),activeDeck:l(()=>s.activeDeck),deckCards:l(()=>s.deckCards),cover:l(()=>{var e;return`url(${(e=s.activeDeck)==null?void 0:e.picture})`}),activeCards:l(()=>s.activeProfile),displayCards:l(()=>{let e=[...s.deckCards];for(let t=0;t<e.length;t++){const g=e[t];g.quantity=1;for(let k=t+1;k<e.length;k++){const D=e[k];g.cardId==D.cardId&&(g.quantity++,e.splice(k,1),k--)}}return e}),setEditable(){s.activeDeck={}},noActive(){s.activeDeck={}},async deleteDeck(){try{if(!await v.confirm("Remove Deck?"))return;const t=s.activeDeck.id;await x.deleteDeck(t),s.activeDeck={}}catch(e){u.error("[Deleting Deck]",e),v.toast(e.message,"error")}},async getAccountCards(){try{await b.getAccountCards()}catch(e){u.log("[getting all cards]",e),v.error(e)}},async getDecks(){try{const e=s.account.id;await x.getAccountDecks(e)}catch(e){u.error("[Getting Decks]",e),v.toast(e.message,"error")}}}},components:{SearchedCards:F,CollectionCard:N,DeckForm:V,Deck:j,DeckCard:q,DeckCardCanvas:R,CollectionPageNavbar:M,CollectionFilter:z}},w=()=>{L(d=>({c9b90ac4:d.cover}))},S=f.setup;f.setup=S?(d,n)=>(w(),S(d,n)):w;const W=f,X=d=>(O("data-v-2185d8a4"),d=d(),Q(),d),Y={class:"row collectionPageBg collectionPageViewHeight"},Z={class:"col-2 d-flex flex-column"},$={class:"col-8 px-0"},ee={class:"row align-items-center"},te={class:"col-12 mx-auto"},ce=G('<div class="row" data-v-2185d8a4><div class="myCollectionsBanner mx-auto col-12 col-lg-10 mt-4" data-v-2185d8a4><div class="row mx-auto" data-v-2185d8a4><div class="col-12" data-v-2185d8a4><h1 class="bannerFontSize text-center deckText" data-v-2185d8a4>My Collection</h1></div></div></div></div>',1),ae={class:"row mb-5"},oe=X(()=>r("div",{class:"col-12"},[r("div",{class:"row justify-content-center"})],-1)),se={key:0,class:"d-none d-md-block col-md-2 myDecksSideBar px-0"},re={class:"row mx-auto"},de={class:"row"},ne={class:"deckText mb-0 col-12"},ie={key:0,class:"col-12 deckText"},le={key:2,class:"img-fluid",src:U,alt:""},ke={key:3,class:"row mx-auto"},ve={class:"row fixed-bottom mx-auto justify-content-end px-0"},_e={key:2,"data-bs-toggle":"modal","data-bs-target":"#deck-form",class:"deckText col-1 editButton"};function ue(d,n,e,t,g,k){const D=m("CollectionPageNavbar"),A=m("CollectionCard"),I=m("DeckCardCanvas"),B=m("Deck"),E=m("DeckForm");return c(),a(C,null,[r("div",Y,[r("div",Z,[_(D)]),r("div",$,[r("div",ee,[r("div",te,[ce,r("div",ae,[oe,(c(!0),a(C,null,y(t.cards,o=>(c(),a("div",{key:o.id,class:"col-4 col-md-3"},[_(A,{card:o},null,8,["card"])]))),128))])])])]),t.decks?(c(),a("div",se,[r("div",re,[t.activeDeck.id?(c(),a("div",{key:0,onClick:n[0]||(n[0]=h((...o)=>t.noActive&&t.noActive(...o),["prevent"])),class:"deckImg col-11 mx-auto mt-1 selectable"},[r("div",de,[r("h5",ne,p(t.activeDeck.name),1),t.activeDeck.id?(c(),a("p",ie,"Cards:"+p(" "+t.deckCards.length),1)):i("",!0)])])):i("",!0),t.activeDeck.id?(c(!0),a(C,{key:1},y(t.displayCards,o=>(c(),a("div",{key:o.id,class:"col-12 mx-auto position-relative"},[_(I,{card:o},null,8,["card"])]))),128)):i("",!0),t.activeDeck.id?i("",!0):(c(),a("img",le)),t.decks.length&&!t.activeDeck.id?(c(),a("div",ke,[(c(!0),a(C,null,y(t.decks,o=>(c(),a("div",{key:o.id,class:"col-12 col-md-12 mx-auto my-2"},[_(B,{deck:o},null,8,["deck"])]))),128))])):i("",!0)])])):i("",!0),r("div",ve,[t.activeDeck.id?i("",!0):(c(),a("button",{key:0,"data-bs-toggle":"modal","data-bs-target":"#deck-form",class:"deckText col-2 createButton",onClick:n[1]||(n[1]=h((...o)=>t.setEditable&&t.setEditable(...o),["prevent"]))},"CREATE")),t.activeDeck.id?(c(),a("button",{key:1,class:"deckText square col-1 deleteButton",onClick:n[2]||(n[2]=h((...o)=>t.deleteDeck&&t.deleteDeck(...o),["prevent"]))},"DELETE ")):i("",!0),t.activeDeck.id?(c(),a("button",_e,"EDIT")):i("",!0)])]),_(E)],64)}const ge=P(W,[["render",ue],["__scopeId","data-v-2185d8a4"]]);export{ge as default};