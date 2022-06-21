"use strict";(self.webpackChunkedh_builder=self.webpackChunkedh_builder||[]).push([[76,435],{4619:function(e,n,c){c(2791);n.Z=c.p+"static/media/star.1e1c0a25a58a62001c86b425c215c28e.svg"},7076:function(e,n,c){c.r(n),c.d(n,{default:function(){return h}});var s=c(3430),a=c(2791),t=c(1523),r=c(4619),i=c(184);var d=function(e){var n=e.rankings,c=e.time;return(0,i.jsxs)("div",{className:"leaderboard-container",children:[(0,i.jsxs)("div",{className:"first-tab",children:[(0,i.jsxs)("h1",{children:["Top 5"," ",(0,i.jsx)("span",{className:"month",children:"Monthly"===c&&"(Past Month)"})]}),(0,i.jsx)("h2",{children:"Highest Ranked Decks"}),(0,i.jsx)("img",{src:n[0].cardArt,alt:"best magic the gathering cardArt",title:n[0].artist}),(0,i.jsxs)("div",{className:"white-background",children:[(0,i.jsxs)("div",{id:"first-rank",children:[(0,i.jsx)("div",{children:n[0].avgRating}),(0,i.jsx)("img",{src:r.Z,alt:"rating for mtg commander deck",width:"25px",height:"25px"})]}),(0,i.jsxs)("div",{className:"deck-details first",children:[(0,i.jsx)("div",{className:"deck",children:n[0].deckName}),(0,i.jsx)("div",{children:n[0].commander}),(0,i.jsx)("div",{children:n[0].partner&&"& ".concat(n[0].partner)}),(0,i.jsx)("div",{children:n[0].username})]})]}),(0,i.jsx)("div",{className:"description-wrapper",children:(0,i.jsx)("div",{className:"description",children:"".concat(n[0].deckDescription.substring(0,100),"...")})}),(0,i.jsx)(t.rU,{to:"/decklist/".concat(n[0].deckID),children:(0,i.jsx)("button",{className:"decklist-button",id:"signUp",children:"Decklist"})})]}),(0,i.jsx)("div",{className:"leaderboard-tabs",children:n.concat([0,0,0,0]).slice(1,5).map((function(e,n){return(0,i.jsxs)("div",{className:"leaderboard-tab",children:[(0,i.jsx)(t.rU,{to:"/decklist/".concat(e.deckID),children:(0,i.jsxs)("div",{className:"deck-details",children:[(0,i.jsx)("div",{children:e.deckName}),(0,i.jsx)("div",{children:e.commander}),(0,i.jsx)("div",{children:e.partner&&"& ".concat(e.partner)}),(0,i.jsx)("div",{children:e.username})]})}),(0,i.jsx)("div",{className:"factor",children:e.avgRating})]},n)}))})]})},l=c(4435),o=c(3394);var h=function(){var e=(0,a.useState)([[],[]]),n=(0,s.Z)(e,2),c=n[0],r=n[1],h=(0,a.useState)(!0),u=(0,s.Z)(h,2),m=u[0],x=u[1];return(0,a.useEffect)((function(){fetch("".concat("","/leaderboard")).then((function(e){return e.json()})).then((function(e){x(!1),e[0].length&&r(e)}))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"welcome",children:(0,i.jsx)("div",{className:"welcome-overlay",children:(0,i.jsxs)("div",{className:"welcome-content",children:[(0,i.jsx)("h1",{children:"Welcome to EDH Builder"}),(0,i.jsx)("h2",{children:"An Unofficial commander deckbuilding site for Magic the Gathering"}),(0,i.jsx)("h6",{children:"EDH Builder is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. \xa9Wizards of the Coast LLC."}),(0,i.jsx)(t.rU,{to:"/adddeck",children:(0,i.jsx)("button",{className:"build",children:"BUILD"})})]})})}),m?(0,i.jsx)(o.Z,{}):(0,i.jsxs)("div",{className:"dashboard-page",children:[(0,i.jsx)("h1",{children:"Top Decks"}),(0,i.jsxs)("div",{className:"dashboard-rankings-container",children:[c[0].length?(0,i.jsx)(d,{rankings:c[0],time:"alltime"}):null,c[1].length?(0,i.jsx)(d,{rankings:c[1],time:"Monthly"}):null]}),(0,i.jsx)("h1",{children:"Most Recent Decks"}),(0,i.jsx)(l.default,{source:"pub"})]})]})}},4435:function(e,n,c){c.r(n),c.d(n,{default:function(){return u}});var s=c(6515),a=c(3430),t=c(2791),r=c(1899),i=c(4619),d=c(1523),l=c(7087),o=c(184);var h=function(e){var n=e.deckID,c=e.cardArt,s=e.deckName,a=e.partner,t=e.username,r=e.avgRating,h=e.commander,u=e.artist;return(0,o.jsx)(d.rU,{to:"decklist/".concat(n),children:(0,o.jsxs)("div",{className:"a-box",children:[(0,o.jsx)(l.LazyLoadImage,{id:"commander-art",src:c,alt:"commander",title:"Artist: ".concat(u),width:220,height:210}),(0,o.jsxs)("div",{className:"deck-info-container",children:[(0,o.jsx)("div",{className:"inner-diagnal"}),(0,o.jsx)("h3",{children:s}),(0,o.jsx)("h4",{children:h}),a&&(0,o.jsx)("h4",{children:"& ".concat(a)}),(0,o.jsx)("div",{style:{color:"black"},children:t}),(0,o.jsxs)("div",{className:"rating",children:[(0,o.jsx)("span",{id:"rating",children:r})," ",(0,o.jsx)("img",{src:i.Z,alt:"star rating",height:"25px",width:"25px"})]})]})]})})};var u=function(e){var n=e.source,i=(0,t.useState)(1),d=(0,a.Z)(i,2),l=d[0],u=d[1],m=(0,t.useState)(0),x=(0,a.Z)(m,2),j=x[0],f=x[1],v=(0,t.useState)(1),g=(0,a.Z)(v,2),k=g[0],p=g[1],b=(0,t.useState)([]),N=(0,a.Z)(b,2),Z=N[0],w=N[1],D=(0,r.v9)((function(e){return e.loginStatus})).userId,y=(0,t.lazy)((function(){return c.e(824).then(c.bind(c,824))}));(0,t.useEffect)((function(){var e="".concat("","/decknum").concat(n,"/").concat(D);fetch(e).then((function(e){return e.json()})).then((function(e){f(Number(e.count)),p(Math.ceil(Number(e.count)/8))}))}),[n,D]);var C=(0,t.useCallback)((function(e){u(e);var c="".concat("","/decks").concat(n,"/").concat(e,"/").concat(D);fetch(c).then((function(e){return e.json()})).then((function(e){w(e)}))}),[n,D]);return(0,t.useEffect)((function(){C(1)}),[C]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"deckcard-container",children:Z.map((function(e,n){return(0,o.jsx)(h,(0,s.Z)({},e),n)}))}),j>8&&(0,o.jsx)(t.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(y,{handlePageChange:C,pageNo:l,lastPage:k,decks:Z,between:function(e,n){var c=[];return e>2&&c.push(e-1),e!==n&&1!==e&&c.push(e),e<n-1&&c.push(e+1),c}})})]})}},3394:function(e,n,c){c(2791);var s=c(8815),a=c(184);n.Z=function(){return(0,a.jsx)("img",{className:"spinner",src:s.Z,alt:"loading spinner"})}}}]);
//# sourceMappingURL=76.e1d1fa46.chunk.js.map