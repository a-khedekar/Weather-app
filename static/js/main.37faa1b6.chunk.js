(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),i=t(6),s=t.n(i),r=(t(12),t(3),t(5)),o=t(2),l=t.n(o),d=t(0);var u=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"container maindiv "+(e.apidata.weather?(n=e.apidata.weather[0].main,console.log("weatherType",n),n.toLowerCase().includes("cloud")?"cloudy":n.toLowerCase().includes("rain")?"rainy":n.toLowerCase().includes("wind")?"windy":n.toLowerCase().includes("clear")?"clear":"default"):""),children:[Object(d.jsxs)("div",{className:"weatherinfo",children:[Object(d.jsx)("span",{className:"cityCss",children:e.apidata.name}),Object(d.jsx)("span",{className:"mainCss",children:e.apidata.weather[0].main}),Object(d.jsxs)("span",{style:{paddingTop:"10px",paddingBottom:"10px",fontSize:"40px"},children:[Math.round(l.a.convert(e.apidata.main.temp,l.a.unit.Kelvin,l.a.unit.Celcius)),"\xb0","C"]}),Object(d.jsxs)("span",{children:["Feels like ",Math.round(l.a.convert(e.apidata.main.feels_like,l.a.unit.Kelvin,l.a.unit.Celcius)),"\xb0","C"]})]}),Object(d.jsx)("div",{className:"forIcon",children:Object(d.jsx)("img",{className:"imgCss",src:"http://openweathermap.org/img/wn/".concat(e.apidata.weather[0].icon,"@4x.png")})})]})});var n};var j=function(e){return Object(d.jsxs)("div",{className:"searchContainer",children:[Object(d.jsx)("input",{className:"searchInput",placeholder:"Enter the City name",onKeyPress:function(n){"Enter"===n.key&&e.onSearchHandler()},onChange:e.onCityHandler,type:"text",required:!0}),Object(d.jsx)("button",{className:"searchButton",onClick:e.onSearchHandler,children:"Search"}),Object(d.jsx)("p",{})]})},p=t(7),h=t.n(p);var b=function(){var e=Object(a.useState)({}),n=Object(r.a)(e,2),t=n[0],c=n[1];console.log("state",t);var i=Object(a.useState)(""),s=Object(r.a)(i,2),o=s[0],l=s[1];return Object(d.jsxs)("div",{className:"Centralization",children:[Object(d.jsx)(j,{onCityHandler:function(e){var n=e.target.value;console.log(n),l(n)},onSearchHandler:function(){""!==o&&fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(o,"&appid=65be9299e69214eeae8e45289fef144b")).then((function(e){return e.json()})).then((function(e){console.log(e),"404"===e.cod?alert("City not found!!"):c(e)}))}}),!h.a.isEmpty(t)&&Object(d.jsx)(u,{apidata:t})]})};var m=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(b,{})})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),x()},3:function(e,n,t){}},[[25,1,2]]]);
//# sourceMappingURL=main.37faa1b6.chunk.js.map