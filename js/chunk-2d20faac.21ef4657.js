(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20faac"],{b536:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a={key:0,class:"text-white text-2xl mx-auto my-10"};function o(e,t,n,o,u,r){return Object(c["p"])(),Object(c["d"])("div",a,"In Arbeit...")}var u=n("be2c"),r=n.n(u),d=Object(c["h"])({name:"Verkauf",setup:function(){var e=Object(c["s"])([]),t=Object(c["s"])(""),n=Object(c["s"])(!1),a=Object(c["s"])(!1),o=function(){a.value=!0,r.a.init({locate:!0,frequency:5,numOfWorkers:2,locator:{halfSample:!0,patchSize:"medium"},inputStream:{name:"Live",type:"LiveStream",target:document.getElementById("code-scanner")||void 0},decoder:{readers:["ean_reader"]}},(function(e){if(e)throw new Error(e);r.a.start()}))},u=function(){""!==t.value&&e.value.push({productCode:t.value})};return r.a.onProcessed((function(e){e&&e.codeResult&&e.codeResult.code&&(n.value=!0)})),r.a.onDetected((function(e){t.value=e.codeResult.code?e.codeResult.code:"",a.value=!1,r.a.stop()})),{startScanning:o,addProduct:u,productCode:t,quagging:a,codeFound:n}}});d.render=o;t["default"]=d}}]);
//# sourceMappingURL=chunk-2d20faac.21ef4657.js.map