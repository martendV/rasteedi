(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4db42127"],{1148:function(e,t,n){"use strict";var r=n("a691"),o=n("1d80");e.exports=function(e){var t=String(o(this)),n="",c=r(e);if(c<0||c==1/0)throw RangeError("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(t+=t))1&c&&(n+=t);return n}},"408a":function(e,t,n){var r=n("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},a434:function(e,t,n){"use strict";var r=n("23e7"),o=n("23cb"),c=n("a691"),a=n("50c4"),l=n("7b0b"),u=n("65f0"),d=n("8418"),i=n("1dde"),s=i("splice"),b=Math.max,f=Math.min,h=9007199254740991,p="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!s},{splice:function(e,t){var n,r,i,s,m,g,v=l(this),x=a(v.length),j=o(e,x),O=arguments.length;if(0===O?n=r=0:1===O?(n=0,r=x-j):(n=O-2,r=f(b(c(t),0),x-j)),x+n-r>h)throw TypeError(p);for(i=u(v,r),s=0;s<r;s++)m=j+s,m in v&&d(i,s,v[m]);if(i.length=r,n<r){for(s=j;s<x-r;s++)m=s+r,g=s+n,m in v?v[g]=v[m]:delete v[g];for(s=x;s>x-r+n;s--)delete v[s-1]}else if(n>r)for(s=x-r;s>j;s--)m=s+r-1,g=s+n-1,m in v?v[g]=v[m]:delete v[g];for(s=0;s<n;s++)v[s+j]=arguments[s+2];return v.length=x-r+n,i}})},b536:function(e,t,n){"use strict";n.r(t);n("b680"),n("d81d");var r=n("7a23"),o={key:0,class:"flex flex-col space-y-4"},c=Object(r["h"])("div",{class:"bg-green-100 rounded-xl text-rttext-500 p-3"}," Verkauf erfolgreich! ",-1),a={class:"bg-white rounded-xl"},l=Object(r["h"])("li",{class:"bg-green-900 p-3 text-white"},"Warenkorb",-1),u={class:"flex space-x-4"},d={class:"self-end"},i={class:"flex justify-end pr-1 border-t-4 border-green-900"},s={key:1,class:"flex flex-col space-y-8"},b={key:0,class:"\r\n        relative\r\n        py-3\r\n        pl-4\r\n        pr-10\r\n        leading-normal\r\n        text-yellow-700\r\n        bg-yellow-100\r\n        rounded-lg\r\n        mt-5\r\n        text-base\r\n      ",role:"alert"},f=Object(r["h"])("p",null,[Object(r["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"\r\n            h-6\r\n            w-6\r\n            animate-ping\r\n            inline-flex\r\n            rounded-full\r\n            bg-green-500\r\n            opacity-90\r\n            mr-2\r\n          ",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(r["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]),Object(r["g"])("Suche Barcode... ")],-1),h={id:"code-scanner",class:""},p=Object(r["h"])("video",{class:"w-60 mb-10"},null,-1),m=Object(r["h"])("canvas",{class:"drawingBuffer absolute left-0 top-0"},null,-1),g={class:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2"},v={class:"flex flex-col space-y-1"},x=Object(r["h"])("label",{class:"text-rttext-500 text-sm",for:"productCode"},"Produkt-Code",-1),j=Object(r["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"object-contain w-10 md:w-8 mx-auto md:mx-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(r["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"})],-1),O=Object(r["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"object-contain w-10 md:w-8 mx-auto md:mx-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(r["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),w={key:1,class:"border border-rttext-500 rounded-xl bg-green-900 text-white p-2"},_={key:2},y={key:3,class:"flex flex-col space-y-4"},k={class:"flex flex-col"},M={class:"text-rttext-500 text-sm",for:"amount"},C={class:"flex flex-col"},S=Object(r["h"])("label",{class:"text-rttext-500 text-sm",for:"discount"},"Rabatt in %",-1),q={key:4,class:"flex flex-col space-y-4"},E={class:"bg-white rounded-xl"},F=Object(r["h"])("li",{class:"bg-green-900 p-3 text-white"},"Warenkorb",-1),I={class:"flex space-x-4"},T={class:"self-end"},A=Object(r["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(r["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),R={class:"flex justify-end pr-11 border-t-4 border-green-900"},B={key:0},P={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 animate-spin",viewBox:"0 0 20 20",fill:"currentColor"},z=Object(r["h"])("path",{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"},null,-1);function D(e,t,n,D,V,H){return e.sellingSuccess?(Object(r["q"])(),Object(r["d"])("div",o,[c,Object(r["h"])("ul",a,[l,(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(e.cart,(function(e){return Object(r["q"])(),Object(r["d"])("li",{class:"flex justify-between p-1 pl-3",key:e.product_code},[Object(r["h"])("span",null,Object(r["x"])(e.amount)+"x",1),Object(r["h"])("span",null,Object(r["x"])(e.product_name),1),Object(r["h"])("div",u,[Object(r["h"])("span",d,Object(r["x"])(e.sold_for.toFixed(2))+"€",1)])])})),128)),Object(r["h"])("li",i,Object(r["x"])((Math.round(100*e.cart.map((function(e){return e.sold_for})).reduce((function(e,t){return e+t})))/100).toFixed(2))+"€ ",1)]),Object(r["h"])("button",{onClick:t[1]||(t[1]=function(t){return e.sellMore()}),class:"\r\n        rounded-xl\r\n        bg-green-500\r\n        hover:bg-green-600\r\n        text-white\r\n        py-1\r\n        px-2\r\n        w-1/2\r\n        self-center\r\n      "}," Neuen Verkauf starten ")])):(Object(r["q"])(),Object(r["d"])("div",s,[e.quagging&&!e.codeFound?(Object(r["q"])(),Object(r["d"])("div",b,[f])):Object(r["e"])("",!0),Object(r["D"])(Object(r["h"])("div",h,[p,m],512),[[r["B"],e.quagging]]),Object(r["h"])("div",g,[Object(r["h"])("div",v,[x,Object(r["h"])("input",{value:e.productCode,onInput:t[2]||(t[2]=function(){return e.debounceCode&&e.debounceCode.apply(e,arguments)}),name:"productCode",placeholder:"Produkt-Code",class:"\r\n            rounded-3xl\r\n            border border-gray-500\r\n            text-rttext-500\r\n            focus:outline-none focus:ring focus:ring-green-500\r\n            px-2\r\n            py-1\r\n          ",type:"text"},null,40,["value"])]),Object(r["h"])("button",{class:"rounded bg-green-500 hover:bg-green-600 text-white py-1 px-2",onClick:t[3]||(t[3]=function(t){return e.startScanning()})},[j]),e.quagging&&!e.codeFound?(Object(r["q"])(),Object(r["d"])("button",{key:0,class:"rounded bg-red-400 hover:bg-red-600 text-white py-2 px-3",onClick:t[4]||(t[4]=function(t){return e.stopScanning()})},[O])):Object(r["e"])("",!0)]),e.itemInfo.product_code&&!e.loading?(Object(r["q"])(),Object(r["d"])("div",w,Object(r["x"])(e.itemInfo.product_name),1)):Object(r["e"])("",!0),e.noItemFound?(Object(r["q"])(),Object(r["d"])("div",_,"Produkt nicht gefunden!")):Object(r["e"])("",!0),e.itemInfo.product_code&&!e.loading?(Object(r["q"])(),Object(r["d"])("div",y,[Object(r["h"])("div",k,[Object(r["h"])("label",M,Object(r["x"])(e.itemInfo.is_gram?"Menge in g":"Anzahl"),1),Object(r["D"])(Object(r["h"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.amountToSell=t}),class:"\r\n            rounded-3xl\r\n            border border-gray-500\r\n            text-rttext-500\r\n            focus:outline-none focus:ring focus:ring-green-500\r\n            px-2\r\n            py-1\r\n          ",type:"number",name:"amount"},null,512),[[r["A"],e.amountToSell]])]),Object(r["h"])("div",C,[S,Object(r["D"])(Object(r["h"])("input",{"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.discount=t}),class:"\r\n            rounded-3xl\r\n            border border-gray-500\r\n            text-rttext-500\r\n            focus:outline-none focus:ring focus:ring-green-500\r\n            px-2\r\n            py-1\r\n          ",type:"number",name:"discount"},null,512),[[r["A"],e.discount]])]),Object(r["h"])("button",{onClick:t[7]||(t[7]=function(){return e.addProduct&&e.addProduct.apply(e,arguments)}),disabled:e.amountToSell<=0,class:"\r\n          rounded-xl\r\n          bg-green-500\r\n          hover:bg-green-600\r\n          text-white\r\n          py-1\r\n          px-2\r\n          w-1/2\r\n          self-center\r\n          disabled:opacity-50\r\n        "}," Hinzufügen ",8,["disabled"])])):Object(r["e"])("",!0),e.cart.length>0?(Object(r["q"])(),Object(r["d"])("div",q,[Object(r["h"])("ul",E,[F,(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(e.cart,(function(t,n){return Object(r["q"])(),Object(r["d"])("li",{class:"flex justify-between p-1 pl-3",key:t.product_code},[Object(r["h"])("span",null,Object(r["x"])(t.amount)+"x",1),Object(r["h"])("span",null,Object(r["x"])(t.product_name),1),Object(r["h"])("div",I,[Object(r["h"])("span",T,Object(r["x"])(t.sold_for.toFixed(2))+"€",1),Object(r["h"])("button",{onClick:function(t){return e.removeProduct(n)},class:"\r\n                border border-red-600\r\n                text-red-600\r\n                hover:text-white hover:bg-red-600\r\n                rounded-xl\r\n              "},[A],8,["onClick"])])])})),128)),Object(r["h"])("li",R,Object(r["x"])((Math.round(100*e.cart.map((function(e){return e.sold_for})).reduce((function(e,t){return e+t})))/100).toFixed(2))+"€ ",1)]),Object(r["h"])("button",{disabled:e.selling,onClick:t[8]||(t[8]=function(t){return e.sellStuff()}),class:"\r\n          bg-green-500\r\n          hover:bg-green-700\r\n          rounded-xl\r\n          text-white text-3xl\r\n          px-2\r\n          py-1\r\n        "},[e.selling?(Object(r["q"])(),Object(r["d"])("svg",P,[z])):(Object(r["q"])(),Object(r["d"])("span",B,"Bestätigen"))],8,["disabled"])])):Object(r["e"])("",!0)]))}var V=n("1da1"),H=(n("96cf"),n("d3b7"),n("99af"),n("a434"),n("159b"),n("be2c")),N=n.n(H),L=n("e00f"),W=Object(r["i"])({name:"Verkauf",setup:function(){var e,t=Object(r["t"])([]),n=Object(r["t"])(""),o=Object(r["t"])(0),c=Object(r["t"])(0),a=Object(r["t"])({id:"",product_code:"",product_name:"",is_gram:!1,price_tag:0,old_amount:0,amount:0,mwst:0}),l=Object(r["t"])(!0),u=Object(r["t"])(!1),d=Object(r["t"])(!1),i=Object(r["t"])(!1),s=Object(r["t"])(!1),b=Object(r["t"])(!1),f=function(){b.value=!0,N.a.init({locate:!0,frequency:5,numOfWorkers:2,locator:{halfSample:!0,patchSize:"medium"},inputStream:{name:"Live",type:"LiveStream",target:document.getElementById("code-scanner")||void 0},decoder:{readers:["ean_reader"]}},(function(e){if(e)throw new Error(e);N.a.start()}))},h=function(){b.value=!1,N.a.stop()};N.a.onProcessed((function(e){e&&e.codeResult&&e.codeResult.code&&(u.value=!0)})),N.a.onDetected((function(e){n.value=e.codeResult.code?e.codeResult.code:"",b.value=!1,N.a.stop()}));var p=function(t){void 0!==e&&clearTimeout(e),e=setTimeout((function(){n.value=t.target.value}),500)};Object(r["C"])(n,(function(e){a.value={id:"",product_code:"",product_name:"",is_gram:!1,price_tag:0,old_amount:0,amount:0,mwst:0},d.value=!1,""!==e&&(l.value=!0,new L["b"]("".concat(L["a"].SEARCH_ITEM,"?filter[product_code][_eq]=").concat(e)).get().execute().then((function(e){0===e.data.length?d.value=!0:(d.value=!1,a.value=e.data[0])})).catch((function(e){throw new Error(e)})).finally((function(){l.value=!1})))}));var m=function(){if(""!==a.value.id){var e=a.value.is_gram?a.value.price_tag*o.value/100:a.value.price_tag*o.value,r=(100-c.value)/100;t.value.push({id:a.value.id,product_name:a.value.product_name,product_code:a.value.product_code,amount:o.value,item_amount:a.value.amount,old_amount:a.value.old_amount,is_gram:a.value.is_gram,sold_for:e*r,discount:c.value,mwst:a.value.mwst}),n.value="",o.value=0,c.value=0}},g=function(e){t.value.splice(e,1)},v=function(){t.value.length>0&&(i.value=!0,t.value.forEach(function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=0,r=t.item_amount,o=(100+t.mwst)/100,t.amount>t.old_amount?r-=t.amount-t.old_amount:t.amount<t.old_amount&&(n-=t.amount),e.next=6,new L["b"]("".concat(L["a"].UPDATE_ITEM,"/").concat(t.id)).patch().body({old_amount:n,amount:r}).execute().catch((function(e){throw new Error(e)}));case 6:return e.next=8,new L["b"](L["a"].ADD_NEW_SOLD_ENTRY).post().body({sale_date:new Date,product_name:t.product_name,amount:t.amount,is_gram:t.is_gram,sold_for:t.sold_for,discount:t.discount,mwst:t.mwst,sold_for_mwst:t.sold_for*o}).execute().catch((function(e){throw new Error(e)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),i.value=!1,s.value=!0)},x=function(){t.value=[],s.value=!1};return{startScanning:f,stopScanning:h,addProduct:m,removeProduct:g,amountToSell:o,productCode:n,itemInfo:a,loading:l,quagging:b,codeFound:u,noItemFound:d,debounceCode:p,cart:t,discount:c,sellStuff:v,selling:i,sellingSuccess:s,sellMore:x}}});W.render=D;t["default"]=W},b680:function(e,t,n){"use strict";var r=n("23e7"),o=n("a691"),c=n("408a"),a=n("1148"),l=n("d039"),u=1..toFixed,d=Math.floor,i=function(e,t,n){return 0===t?n:t%2===1?i(e,t-1,n*e):i(e*e,t/2,n)},s=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},b=function(e,t,n){var r=-1,o=n;while(++r<6)o+=t*e[r],e[r]=o%1e7,o=d(o/1e7)},f=function(e,t){var n=6,r=0;while(--n>=0)r+=e[n],e[n]=d(r/t),r=r%t*1e7},h=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var r=String(e[t]);n=""===n?r:n+a.call("0",7-r.length)+r}return n},p=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){u.call({})}));r({target:"Number",proto:!0,forced:p},{toFixed:function(e){var t,n,r,l,u=c(this),d=o(e),p=[0,0,0,0,0,0],m="",g="0";if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(m="-",u=-u),u>1e-21)if(t=s(u*i(2,69,1))-69,n=t<0?u*i(2,-t,1):u/i(2,t,1),n*=4503599627370496,t=52-t,t>0){b(p,0,n),r=d;while(r>=7)b(p,1e7,0),r-=7;b(p,i(10,r,1),0),r=t-1;while(r>=23)f(p,1<<23),r-=23;f(p,1<<r),b(p,1,1),f(p,2),g=h(p)}else b(p,0,n),b(p,1<<-t,0),g=h(p)+a.call("0",d);return d>0?(l=g.length,g=m+(l<=d?"0."+a.call("0",d-l)+g:g.slice(0,l-d)+"."+g.slice(l-d))):g=m+g,g}})},d81d:function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").map,c=n("1dde"),a=c("map");r({target:"Array",proto:!0,forced:!a},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-4db42127.cdfcbd46.js.map