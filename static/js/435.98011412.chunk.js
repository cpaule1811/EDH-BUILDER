"use strict";(self.webpackChunkedh_builder=self.webpackChunkedh_builder||[]).push([[435],{4619:function(e,n,t){t(2791);n.Z=t.p+"static/media/star.1e1c0a25a58a62001c86b425c215c28e.svg"},4435:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var c=t(6515),a=t(3430),r=t(2791),s=t(1899),i=t(4619),u=t(1523),d=t(7087),o=t(184);var h=function(e){var n=e.deckID,t=e.cardArt,c=e.deckName,a=e.partner,r=e.username,s=e.avgRating,h=e.commander,l=e.artist;return(0,o.jsx)(u.rU,{to:"decklist/".concat(n),children:(0,o.jsxs)("div",{className:"a-box",children:[(0,o.jsx)(d.LazyLoadImage,{id:"commander-art",src:t,alt:"commander",title:"Artist: ".concat(l),width:220,height:210}),(0,o.jsxs)("div",{className:"deck-info-container",children:[(0,o.jsx)("div",{className:"inner-diagnal"}),(0,o.jsx)("h3",{children:c}),(0,o.jsx)("h4",{children:h}),a&&(0,o.jsx)("h4",{children:"& ".concat(a)}),(0,o.jsx)("div",{style:{color:"black"},children:r}),(0,o.jsxs)("div",{className:"rating",children:[(0,o.jsx)("span",{id:"rating",children:s})," ",(0,o.jsx)("img",{src:i.Z,alt:"star rating",height:"25px",width:"25px"})]})]})]})})};var l=function(e){var n=e.source,i=(0,r.useState)(1),u=(0,a.Z)(i,2),d=u[0],l=u[1],f=(0,r.useState)(0),m=(0,a.Z)(f,2),p=m[0],x=m[1],j=(0,r.useState)(1),g=(0,a.Z)(j,2),v=g[0],k=g[1],b=(0,r.useState)([]),N=(0,a.Z)(b,2),Z=N[0],S=N[1],w=(0,s.v9)((function(e){return e.loginStatus})).userId,C=(0,r.lazy)((function(){return t.e(824).then(t.bind(t,824))}));(0,r.useEffect)((function(){var e="".concat("https://edh-builder-api.herokuapp.com/","/decknum").concat(n,"/").concat(w);fetch(e).then((function(e){return e.json()})).then((function(e){x(Number(e.count)),k(Math.ceil(Number(e.count)/8))}))}),[n,w]);var y=(0,r.useCallback)((function(e){l(e);var t="".concat("https://edh-builder-api.herokuapp.com/","/decks").concat(n,"/").concat(e,"/").concat(w);fetch(t).then((function(e){return e.json()})).then((function(e){S(e)}))}),[n,w]);return(0,r.useEffect)((function(){y(1)}),[y]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"deckcard-container",children:Z.map((function(e,n){return(0,o.jsx)(h,(0,c.Z)({},e),n)}))}),p>8&&(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(C,{handlePageChange:y,pageNo:d,lastPage:v,decks:Z,between:function(e,n){var t=[];return e>2&&t.push(e-1),e!==n&&1!==e&&t.push(e),e<n-1&&t.push(e+1),t}})})]})}}}]);
//# sourceMappingURL=435.98011412.chunk.js.map