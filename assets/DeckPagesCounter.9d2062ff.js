import{j as e,a,F as u}from"./index.2a882545.js";const o="/assets/chevron-left.df57153e.svg",d="/assets/chevron-right.6e16ac4a.svg";function f({handlePageChange:i,pageNo:r,lastPage:c,decks:m,between:v}){let t=0;return e("div",{className:"pagination-container",children:e("div",{className:"pagination-wrapper",children:c<=4?m.map((n,s)=>s%8===0?(t++,e("div",{onClick:l=>i(Number(l.target.innerText)),className:`number ${r===t?"active-page":"none"}`,children:t},s)):null):a(u,{children:[r===1?null:e("div",{className:"prev",onClick:n=>i(r-1),children:e("img",{src:d,alt:"next-page"})}),e("div",{className:`number ${r===1?"active-page":"none"}`,onClick:n=>i(1),children:"1"}),v(r,c).map((n,s)=>e("div",{onClick:l=>i(Number(l.target.innerText)),className:`number ${r===n&&"active-page"}`,children:n},s)),e("div",{className:`number ${r===c?"active-page":"none"}`,onClick:n=>i(c),children:c}),r<c&&e("div",{className:"next",onClick:n=>i(r+1),children:e("img",{src:o,alt:"previous-page"})})]})})})}export{f as default};