(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78ca371a"],{"46c8":function(t,c,e){},5090:function(t,c,e){"use strict";e.r(c);var a=e("7a23"),l=Object(a["z"])("data-v-9c6c6640");Object(a["r"])("data-v-9c6c6640");var i={class:"container"},r={class:"light-wrapper"},n={class:"traffic-light"},o=Object(a["f"])("div",{class:"traffic-light__yellow light opacity"},null,-1),s=Object(a["f"])("div",{class:"traffic-light__green light opacity"},null,-1),u=Object(a["f"])("div",{class:"pillar"},null,-1);Object(a["p"])();var f=l((function(t,c,e,l,f,v){return Object(a["o"])(),Object(a["d"])("div",i,[Object(a["f"])("h1",null,Object(a["w"])(f.counter),1),Object(a["f"])("div",r,[Object(a["f"])("div",n,[Object(a["f"])("div",{class:[{opacity:f.opacity},"traffic-light__red light"]},null,2),o,s]),u])])})),v={data:function(){return{counter:10,opacity:!1}},mounted:function(){var t=this;localStorage.setItem("previousLight","red"),localStorage.setItem("yellow","false");var c=setInterval((function(){var e;5===t.counter&&(e=setInterval((function(){t.opacity=!t.opacity}),500)),t.counter--,t.counter<=0&&(clearInterval(c),clearInterval(e),t.$router.push({path:"/yellow"}))}),1e3)}};e("5be3");v.render=f,v.__scopeId="data-v-9c6c6640";c["default"]=v},"5be3":function(t,c,e){"use strict";e("46c8")}}]);
//# sourceMappingURL=chunk-78ca371a.409d0e31.js.map