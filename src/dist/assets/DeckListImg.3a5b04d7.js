import{r as u,u as b,j as t,a,F as g}from"./index.8245c379.js";import{C as k}from"./CardGallery.b29e8f51.js";function L(){const[i,s]=u.exports.useState("main"),[l,c]=u.exports.useState({cmc:"all",type:"all"}),{decklist:o,sideboard:m}=b(e=>e.requestDecklist),p=e=>l.cmc!=="all"?e.filter(r=>Number(r.cmc)===Number(l.cmc)):e,h=e=>{if(l.type!=="all"){let r=e.filter(n=>n.type.includes(l.type));return l.type.includes("Enchantment")||l.type.includes("Artifact")?r.filter(n=>!n.type.includes("Creature")).filter(n=>!n.type.includes("Land")):r}return e},f=()=>{s("main"),c({cmc:"all",type:"all"})},v=e=>h(p(e)),d=()=>i==="main"?o:m,y=d().map(e=>e.cmc),C=[...new Set(y)].sort((e,r)=>e-r);return t("div",{children:o?a(g,{children:[a("div",{className:"center",children:[t("h5",{children:"Filter By:"}),a("select",{onChange:e=>{c({...l,cmc:"all"}),s(e.target.value)},value:i,className:"filter-by",children:[t("option",{value:"main",children:"Main"}),t("option",{value:"sideboard",children:"Sideboard"})]}),a("select",{onChange:e=>c({...l,type:e.target.value}),value:l.type,className:"filter-by",children:[t("option",{value:"all",children:"Select Type"}),t("option",{value:"Creature",children:"Creature"}),t("option",{value:"Instant",children:"Instant"}),t("option",{value:"Sorcery",children:"Sorcery"}),t("option",{value:"Planeswalker",children:"Planeswalker"}),t("option",{value:"Enchantment",children:"Enchantment"}),t("option",{value:"Artifact",children:"Artifact"}),t("option",{value:"Land",children:"Land"})]}),a("select",{onChange:e=>c({...l,cmc:e.target.value}),value:l.cmc,className:"filter-by",children:[t("option",{value:"all",children:"CMC"}),C.map((e,r)=>t("option",{value:e,children:e},r))]}),t("button",{onClick:()=>f(),className:"clear-filters",children:"CLEAR"})]}),t(k,{Cards:v(d()),view:null})]}):t("div",{children:"Use the search bar to find cards to add"})})}export{L as default};
