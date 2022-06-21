"use strict";(self.webpackChunkedh_builder=self.webpackChunkedh_builder||[]).push([[76,435],{4619:function(e,n,c){c(2791);n.Z=c.p+"static/media/star.1e1c0a25a58a62001c86b425c215c28e.svg"},7076:function(e,n,c){c.r(n),c.d(n,{default:function(){return h}});var s=c(3430),a=c(2791),t=c(1523),i=c(4619),r=c(184);var d=function(e){var n=e.rankings,c=e.time;return(0,r.jsxs)("div",{className:"leaderboard-container",children:[(0,r.jsxs)("div",{className:"first-tab",children:[(0,r.jsxs)("h1",{children:["Top 5"," ",(0,r.jsx)("span",{className:"month",children:"Monthly"===c&&"(Past Month)"})]}),(0,r.jsx)("h2",{children:"Highest Ranked Decks"}),(0,r.jsx)("img",{src:n[0].cardArt,alt:"best magic the gathering cardArt",title:n[0].artist}),(0,r.jsxs)("div",{className:"white-background",children:[(0,r.jsxs)("div",{id:"first-rank",children:[(0,r.jsx)("div",{children:n[0].avgRating}),(0,r.jsx)("img",{src:i.Z,alt:"rating for mtg commander deck",width:"25px",height:"25px"})]}),(0,r.jsxs)("div",{className:"deck-details first",children:[(0,r.jsx)("div",{className:"deck",children:n[0].deckName}),(0,r.jsx)("div",{children:n[0].commander}),(0,r.jsx)("div",{children:n[0].partner&&"& ".concat(n[0].partner)}),(0,r.jsx)("div",{children:n[0].username})]})]}),(0,r.jsx)("div",{className:"description-wrapper",children:(0,r.jsx)("div",{className:"description",children:"".concat(n[0].deckDescription.substring(0,100),"...")})}),(0,r.jsx)(t.rU,{to:"/decklist/".concat(n[0].deckID),children:(0,r.jsx)("button",{className:"decklist-button",id:"signUp",children:"Decklist"})})]}),(0,r.jsx)("div",{className:"leaderboard-tabs",children:n.concat([0,0,0,0]).slice(1,5).map((function(e,n){return(0,r.jsxs)("div",{className:"leaderboard-tab",children:[(0,r.jsx)(t.rU,{to:"/decklist/".concat(e.deckID),children:(0,r.jsxs)("div",{className:"deck-details",children:[(0,r.jsx)("div",{children:e.deckName}),(0,r.jsx)("div",{children:e.commander}),(0,r.jsx)("div",{children:e.partner&&"& ".concat(e.partner)}),(0,r.jsx)("div",{children:e.username})]})}),(0,r.jsx)("div",{className:"factor",children:e.avgRating})]},n)}))})]})},l=c(4435),o=c(3394);var h=function(){var e=(0,a.useState)([[],[]]),n=(0,s.Z)(e,2),c=n[0],i=n[1],h=(0,a.useState)(!0),u=(0,s.Z)(h,2),m=u[0],x=u[1];return(0,a.useEffect)((function(){fetch("".concat({NODE_ENV:"production",PUBLIC_URL:"/EDH-BUILDER",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL,"/leaderboard")).then((function(e){return e.json()})).then((function(e){x(!1),e[0].length&&i(e)}))}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"welcome",children:(0,r.jsx)("div",{className:"welcome-overlay",children:(0,r.jsxs)("div",{className:"welcome-content",children:[(0,r.jsx)("h1",{children:"Welcome to EDH Builder"}),(0,r.jsx)("h2",{children:"An Unofficial commander deckbuilding site for Magic the Gathering"}),(0,r.jsx)("h6",{children:"EDH Builder is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. \xa9Wizards of the Coast LLC."}),(0,r.jsx)(t.rU,{to:"/adddeck",children:(0,r.jsx)("button",{className:"build",children:"BUILD"})})]})})}),m?(0,r.jsx)(o.Z,{}):(0,r.jsxs)("div",{className:"dashboard-page",children:[(0,r.jsx)("h1",{children:"Top Decks"}),(0,r.jsxs)("div",{className:"dashboard-rankings-container",children:[c[0].length?(0,r.jsx)(d,{rankings:c[0],time:"alltime"}):null,c[1].length?(0,r.jsx)(d,{rankings:c[1],time:"Monthly"}):null]}),(0,r.jsx)("h1",{children:"Most Recent Decks"}),(0,r.jsx)(l.default,{source:"pub"})]})]})}},4435:function(e,n,c){c.r(n),c.d(n,{default:function(){return u}});var s=c(6515),a=c(3430),t=c(2791),i=c(1899),r=c(4619),d=c(1523),l=c(7087),o=c(184);var h=function(e){var n=e.deckID,c=e.cardArt,s=e.deckName,a=e.partner,t=e.username,i=e.avgRating,h=e.commander,u=e.artist;return(0,o.jsx)(d.rU,{to:"decklist/".concat(n),children:(0,o.jsxs)("div",{className:"a-box",children:[(0,o.jsx)(l.LazyLoadImage,{id:"commander-art",src:c,alt:"commander",title:"Artist: ".concat(u),width:220,height:210}),(0,o.jsxs)("div",{className:"deck-info-container",children:[(0,o.jsx)("div",{className:"inner-diagnal"}),(0,o.jsx)("h3",{children:s}),(0,o.jsx)("h4",{children:h}),a&&(0,o.jsx)("h4",{children:"& ".concat(a)}),(0,o.jsx)("div",{style:{color:"black"},children:t}),(0,o.jsxs)("div",{className:"rating",children:[(0,o.jsx)("span",{id:"rating",children:i})," ",(0,o.jsx)("img",{src:r.Z,alt:"star rating",height:"25px",width:"25px"})]})]})]})})};var u=function(e){var n=e.source,r=(0,t.useState)(1),d=(0,a.Z)(r,2),l=d[0],u=d[1],m=(0,t.useState)(0),x=(0,a.Z)(m,2),j=x[0],v=x[1],f=(0,t.useState)(1),g=(0,a.Z)(f,2),p=g[0],k=g[1],N=(0,t.useState)([]),_=(0,a.Z)(N,2),E=_[0],S=_[1],b=(0,i.v9)((function(e){return e.loginStatus})).userId,D=(0,t.lazy)((function(){return c.e(824).then(c.bind(c,824))}));(0,t.useEffect)((function(){var e="".concat({NODE_ENV:"production",PUBLIC_URL:"/EDH-BUILDER",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL,"/decknum").concat(n,"/").concat(b);fetch(e).then((function(e){return e.json()})).then((function(e){v(Number(e.count)),k(Math.ceil(Number(e.count)/8))}))}),[n,b]);var R=(0,t.useCallback)((function(e){u(e);var c="".concat({NODE_ENV:"production",PUBLIC_URL:"/EDH-BUILDER",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL,"/decks").concat(n,"/").concat(e,"/").concat(b);fetch(c).then((function(e){return e.json()})).then((function(e){S(e)}))}),[n,b]);return(0,t.useEffect)((function(){R(1)}),[R]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"deckcard-container",children:E.map((function(e,n){return(0,o.jsx)(h,(0,s.Z)({},e),n)}))}),j>8&&(0,o.jsx)(t.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(D,{handlePageChange:R,pageNo:l,lastPage:p,decks:E,between:function(e,n){var c=[];return e>2&&c.push(e-1),e!==n&&1!==e&&c.push(e),e<n-1&&c.push(e+1),c}})})]})}},3394:function(e,n,c){c(2791);var s=c(8815),a=c(184);n.Z=function(){return(0,a.jsx)("img",{className:"spinner",src:s.Z,alt:"loading spinner"})}}}]);
//# sourceMappingURL=76.e7e79126.chunk.js.map