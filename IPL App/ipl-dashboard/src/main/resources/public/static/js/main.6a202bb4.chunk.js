(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(18),r=a.n(s),i=(a(25),a(26),a(4)),j=a(2),m=a(8),h=a.n(m),l=a(10),o=a(11),d=(a(28),a(29),a(0)),u=function(e){var t=e.teamName,a=e.match;if(!a)return null;var c=a.team1===t?a.team2:a.team1,n="/teams/".concat(c),s=t===a.matchWinner;return Object(d.jsxs)("div",{className:s?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(d.jsxs)("div",{className:"main-match-data",children:[Object(d.jsxs)(i.b,{to:n,children:[Object(d.jsx)("span",{children:"vs"}),Object(d.jsx)("h1",{children:c})]}),Object(d.jsx)("h2",{className:"match-date",children:a.date}),Object(d.jsxs)("h3",{className:"match-venue",children:["at ",a.venue," in ",a.city]}),Object(d.jsxs)("h3",{className:"match-result",children:[a.matchWinner," won by ",a.resultMargin," ",a.result]})]}),Object(d.jsxs)("div",{className:"additional-match-data",children:[Object(d.jsx)("h3",{children:"First Innings"}),Object(d.jsx)("p",{children:a.team1}),Object(d.jsx)("h3",{children:"Second Innings"}),Object(d.jsx)("p",{children:a.team2}),Object(d.jsx)("h3",{children:"Man of the Match"}),Object(d.jsx)("p",{children:a.playerOfMatch}),Object(d.jsx)("h3",{children:"Umpires"}),Object(d.jsxs)("p",{children:[a.umpire1,", ",a.umpire2]})]})]})},b=(a(36),function(e){var t=e.teamName,a=e.match;if(!a)return null;var c=a.team1===t?a.team2:a.team1,n="/teams/".concat(c),s=t===a.matchWinner;return Object(d.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(d.jsx)("span",{className:"vs",children:"vs"}),Object(d.jsx)("h3",{children:Object(d.jsxs)(i.b,{to:n,children:[" ",c]})}),Object(d.jsxs)("h3",{className:"match-result",children:[a.matchWinner," won by ",a.resultMargin," ",a.result]})]})}),O=a(20),x=function(){var e=Object(c.useState)({matches:[]}),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(j.f)().teamName;return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",e.next=3,fetch("".concat("","/team/").concat(s),{method:"GET",headers:{"Content-Type":"application/json",matchesCount:4}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),a&&a.teamName?Object(d.jsxs)("div",{className:"TeamPage",children:[Object(d.jsx)("div",{className:"team-name-section",children:Object(d.jsx)("h1",{className:"team-name",children:a.teamName})}),Object(d.jsxs)("div",{className:"win-loss-section",children:[Object(d.jsx)("div",{className:"win-loss",children:"Wins Losses"}),Object(d.jsx)(O.PieChart,{data:[{title:"Losses",value:a.totalMatches-a.totalWins,color:"#a34d5a"},{title:"Wins",value:a.totalWins,color:"#4da372"}]})]}),Object(d.jsxs)("div",{className:"latest-match-detail-section",children:[Object(d.jsx)("h3",{className:"latest-match-detail",children:"Latest Match Details"}),Object(d.jsx)(u,{teamName:a.teamName,match:a.matches[0]})]}),a.matches.slice(1).map((function(e){return Object(d.jsx)(b,{teamName:a.teamName,match:e},e.id)})),Object(d.jsx)("div",{className:"more-link",children:Object(d.jsx)(i.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:"More >"})})]}):Object(d.jsx)("h1",{children:"Team Not Found"})},f=(a(37),function(e){for(var t=e.teamName,a=[],c="2008";c<="2020";c++)a.push(c);return Object(d.jsx)("ol",{className:"YearSelector",children:a.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),p=(a(38),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(j.f)(),r=s.teamName,i=s.year;return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",e.next=3,fetch("".concat("","/team/").concat(r,"/matches?year=").concat(i),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),a&&i?Object(d.jsxs)("div",{className:"MatchPage",children:[Object(d.jsxs)("div",{className:"year-selector",children:[Object(d.jsx)("h3",{children:"Select Year"}),Object(d.jsx)(f,{teamName:r})]}),Object(d.jsxs)("div",{className:"match-details-section",children:[Object(d.jsxs)("h1",{className:"page-heading",children:[r," matches in ",i]}),Object(d.jsx)(u,{}),a.map((function(e){return Object(d.jsx)(u,{teamName:r,match:e},e.id)}))]})]}):Object(d.jsx)("h1",{children:"Invalid Match Data"})}),N=(a(39),a(40),function(e){var t=e.teamName;return Object(d.jsx)("div",{className:"TeamTile",children:Object(d.jsx)(i.b,{to:"/teams/".concat(t),children:Object(d.jsx)("h1",{className:"team-card-name",children:t})})})}),v=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",e.next=3,fetch("".concat("","/team"),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)("div",{className:"HomePage",children:[Object(d.jsx)("div",{className:"page-heading",children:Object(d.jsx)("h1",{className:"app-name",children:"IPL Dashboard"})}),Object(d.jsx)("div",{className:"team-grid",children:a.map((function(e){return Object(d.jsx)(N,{teamName:e.teamName},e.id)}))})]})};var g=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(i.a,{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/teams/:teamName/matches/:year",children:Object(d.jsx)(p,{})}),Object(d.jsx)(j.a,{path:"/teams/:teamName",children:Object(d.jsx)(x,{})}),Object(d.jsx)(j.a,{path:"/",children:Object(d.jsx)(v,{})})]})})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),y()}},[[41,1,2]]]);
//# sourceMappingURL=main.6a202bb4.chunk.js.map