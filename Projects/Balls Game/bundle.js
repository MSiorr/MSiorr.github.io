(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>s});var i=e(537),o=e.n(i),r=e(645),a=e.n(r)()(o());a.push([n.id,"* {\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    box-sizing: border-box;\n}\nbody, html{\n    height: 100%;\n    background-color: #121212;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#board{\n    color: white;\n    display: flex;\n    width: min-content;\n    border: 1px solid white;\n    border-radius: 20px;\n    overflow: hidden;\n}\n.boardColumn:first-child .field:first-child {border-radius: 20px 0 0 0;}\n.boardColumn:first-child .field:last-child {border-radius: 0 0 0 20px;}\n.boardColumn:last-child .field:first-child {border-radius: 0 20px 0 0;}\n.boardColumn:last-child .field:last-child {border-radius: 0 0 20px 0;}\n.boardColumn{\n    /* border: 1px solid white; */\n    display: flex;\n    flex-direction: column;\n}\n.field {\n    box-sizing: border-box;\n    width: 80px;\n    height: 80px;\n    border: 1px solid white;\n    font-weight: bold;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    font-size: 50px;\n    cursor: pointer;\n    overflow: hidden;\n    transition: background-color .1s;\n}\n\n.smallCostsField {\n    width: 100%;\n    max-height: 50%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    font-size: 36px;\n}\n\n.mainCostsField {\n    height: 50%;\n    font-size: 50px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.pathDisplay {\n    background-color: rgba(208, 131, 60, 0.5);\n}\n\n.ball {\n    width: 60%;\n    height: 60%;\n    border-radius: 100%;\n    box-shadow: 0 0 16px 2px white;\n    transition: width .2s, height .2s;\n}\n\n.prev {\n    border-radius: 100%;\n    width: calc(0.6 * 80px);\n    height: calc(0.6 * 80px);\n    margin: 10px;\n    box-shadow: 0 0 16px 0px white;\n}\n\n.activeBall {\n    width: 80%;\n    height: 80%;\n}\n\n#gameInfo {\n    border-radius: 20px;\n    border: 3px solid white;\n    padding: 5px 15px;\n    display: flex;\n    flex-direction: column;\n    margin: 20px;\n}\n\n#ballInfo {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 5px;\n}\n\n#scoreDiv {\n    color: white;\n    padding: 5px;\n    text-align: center;\n    font-size: 30px;\n    margin-top: 10px;\n}\n\n#mainDiv {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.red {\n    background-color: red !important;\n}\n\n.ball2 {\n    width: 200px;\n    height: 200px;\n    border-radius: 100%;\n    box-shadow: 0 0 16px 0px white;\n}\n\n#overlay {\n    background-color: rgba(0,0,0,0.8);\n    transition: opacity 2s;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#endGameInfo {\n    background-color: rgba(0,0,0,0.9);\n    border: 5px solid white;\n    border-radius: 20px;\n    padding: 30px;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 30px;\n}\n\n#spanTitle {\n    font-size: 80px;\n    font-weight: bold;\n    margin-bottom: 40px;\n}\n\n#spanScoreTitle {\n    font-size: 40px;\n}\n\n#spanScore {\n    font-size: 54px;\n    margin: 10px 0 40px 0;\n}\n\n.btn {\n    padding: 10px 20px;\n    font-size: 34px;\n    background-color: transparent;\n    outline: none;\n    color: white;\n    border: 4px solid white;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.btn:hover {\n    background-color: rgba(255,255,255,0.1);\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,qGAAqG;IACrG,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,yBAAyB;IACzB,UAAU;IACV,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;AACA,6CAA6C,yBAAyB,CAAC;AACvE,4CAA4C,yBAAyB,CAAC;AACtE,4CAA4C,yBAAyB,CAAC;AACtE,2CAA2C,yBAAyB,CAAC;AACrE;IACI,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,iBAAiB;IACjB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,WAAW;IACX,eAAe;IACf,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,8BAA8B;IAC9B,iCAAiC;AACrC;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,wBAAwB;IACxB,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,iCAAiC;IACjC,sBAAsB;IACtB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,6BAA6B;IAC7B,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C",sourcesContent:["* {\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    box-sizing: border-box;\n}\nbody, html{\n    height: 100%;\n    background-color: #121212;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#board{\n    color: white;\n    display: flex;\n    width: min-content;\n    border: 1px solid white;\n    border-radius: 20px;\n    overflow: hidden;\n}\n.boardColumn:first-child .field:first-child {border-radius: 20px 0 0 0;}\n.boardColumn:first-child .field:last-child {border-radius: 0 0 0 20px;}\n.boardColumn:last-child .field:first-child {border-radius: 0 20px 0 0;}\n.boardColumn:last-child .field:last-child {border-radius: 0 0 20px 0;}\n.boardColumn{\n    /* border: 1px solid white; */\n    display: flex;\n    flex-direction: column;\n}\n.field {\n    box-sizing: border-box;\n    width: 80px;\n    height: 80px;\n    border: 1px solid white;\n    font-weight: bold;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    font-size: 50px;\n    cursor: pointer;\n    overflow: hidden;\n    transition: background-color .1s;\n}\n\n.smallCostsField {\n    width: 100%;\n    max-height: 50%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    font-size: 36px;\n}\n\n.mainCostsField {\n    height: 50%;\n    font-size: 50px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.pathDisplay {\n    background-color: rgba(208, 131, 60, 0.5);\n}\n\n.ball {\n    width: 60%;\n    height: 60%;\n    border-radius: 100%;\n    box-shadow: 0 0 16px 2px white;\n    transition: width .2s, height .2s;\n}\n\n.prev {\n    border-radius: 100%;\n    width: calc(0.6 * 80px);\n    height: calc(0.6 * 80px);\n    margin: 10px;\n    box-shadow: 0 0 16px 0px white;\n}\n\n.activeBall {\n    width: 80%;\n    height: 80%;\n}\n\n#gameInfo {\n    border-radius: 20px;\n    border: 3px solid white;\n    padding: 5px 15px;\n    display: flex;\n    flex-direction: column;\n    margin: 20px;\n}\n\n#ballInfo {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 5px;\n}\n\n#scoreDiv {\n    color: white;\n    padding: 5px;\n    text-align: center;\n    font-size: 30px;\n    margin-top: 10px;\n}\n\n#mainDiv {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.red {\n    background-color: red !important;\n}\n\n.ball2 {\n    width: 200px;\n    height: 200px;\n    border-radius: 100%;\n    box-shadow: 0 0 16px 0px white;\n}\n\n#overlay {\n    background-color: rgba(0,0,0,0.8);\n    transition: opacity 2s;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#endGameInfo {\n    background-color: rgba(0,0,0,0.9);\n    border: 5px solid white;\n    border-radius: 20px;\n    padding: 30px;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 30px;\n}\n\n#spanTitle {\n    font-size: 80px;\n    font-weight: bold;\n    margin-bottom: 40px;\n}\n\n#spanScoreTitle {\n    font-size: 40px;\n}\n\n#spanScore {\n    font-size: 54px;\n    margin: 10px 0 40px 0;\n}\n\n.btn {\n    padding: 10px 20px;\n    font-size: 34px;\n    background-color: transparent;\n    outline: none;\n    color: white;\n    border: 4px solid white;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.btn:hover {\n    background-color: rgba(255,255,255,0.1);\n}"],sourceRoot:""}]);const s=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",i=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),i&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),i&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},537:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(o," */"),a=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([r]).join("\n")}return[t].join("\n")}},379:n=>{var t=[];function e(n){for(var e=-1,i=0;i<t.length;i++)if(t[i].identifier===n){e=i;break}return e}function i(n,i){for(var r={},a=[],s=0;s<n.length;s++){var l=n[s],c=i.base?l[0]+i.base:l[0],d=r[c]||0,A="".concat(c," ").concat(d);r[c]=d+1;var h=e(A),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var u=o(p,i);i.byIndex=s,t.splice(s,0,{identifier:A,updater:u,references:1})}a.push(A)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=e(r[a]);t[s].references--}for(var l=i(n,o),c=0;c<r.length;c++){var d=e(r[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=l}}},569:n=>{var t={};n.exports=function(n,e){var i=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,o&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return n[i](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n,t={colors:["#e63946","#ffba08","#c77dff","#00b4d8","#40916c","#240046","#70e000"],pos:[{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1}],destroyCount:3,ballSpawnerCount:3,fastGame:!0,chanceForJoker:.1,board_length:9,board_height:9},i=function(n,e,i){var o=i.value;return i.value=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var i=Math.random();return i<t.chanceForJoker&&(n[0]=!0),o.apply(this,n)},i},o=function(n){var e=n,i=function(n,e){var i=function(){return this.afterMoveTime=t.fastGame?0:1e3,n.apply(this,e)};return i.prototype=n.prototype,new i},o=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return console.log("New: "+e.name+" "+n),i(e,n)};return o.prototype=e.prototype,o},r=function(){function n(n,t){this.x=n,this.y=t,this.costs={roadCost:0,distanceCost:0},this.cost=0,this.free=!0,this.div=document.createElement("div"),this.div.classList.add("field")}return n.prototype.restartField=function(){this.costs={roadCost:0,distanceCost:0},this.cost=0,this.parent=void 0},n.prototype.calculateCost=function(n,t){return{roadCost:t?t.costs.roadCost+1:1,distanceCost:this.calculateDistance(n)}},n.prototype.setCost=function(n){this.cost=n.roadCost+n.distanceCost,this.costs=n},n.prototype.addBall=function(n){this.child=n,n.parent=this,this.free=!1,this.div.appendChild(n.div)},n.prototype.removeBall=function(){return this.child?(this.div.removeChild(this.child.div),this.free=!0,this.child):null},n.prototype.addClass=function(n){this.div.classList.add(n)},n.prototype.removeClass=function(n){this.div.classList.remove(n)},n.prototype.calculateDistance=function(n){return Math.abs(n.x-this.x)+Math.abs(n.y-this.y)},n}(),a=function(){function n(){this.openList=[],this.closedList=[],this.targetFound=!1}return n.prototype.find=function(n,e,i){var o=this,r=i.length,a=i[0].length;this.openList=[n],this.closedList=[],this.targetFound=!1;var s=[],l=t.pos,c=function(){var n=d.openList.sort((function(n,t){return n.cost-t.cost})).filter((function(n,t,e){if(n.cost===e[0].cost)return n})).sort((function(n,t){return n.costs.distanceCost-t.costs.distanceCost}))[0];d.openList.splice(d.openList.indexOf(n),1),d.closedList.push(n),n==e&&(d.targetFound=!0,d.openList=[]),0==d.targetFound&&l.forEach((function(t){if(n.x+t.x>=0&&n.x+t.x<r&&n.y+t.y>=0&&n.y+t.y<a){var s=n.x+t.x,l=n.y+t.y;if(1==i[s][l].free&&0==o.closedList.includes(i[s][l])){var c=i[s][l],d=c.calculateCost(e,n),A=d.roadCost+d.distanceCost;(!c.parent||c.parent&&c.cost>A)&&(c.setCost(d),c.parent=n),0==o.openList.includes(c)&&o.openList.push(c)}}}))},d=this;do{c()}while(this.openList.length>0);if(this.targetFound){for(var A=e;A.parent;)s.push(A),A=A.parent;s.push(n)}return s},n}(),s=function(){function n(n){this.color=1==n.length?n[0]:"all",this.div=document.createElement("div"),this.div.classList.add("ball"),this.div.style.background="conic-gradient("+n.map((function(n,t,e){return e.length>1?n:n+", "+n}))+")",this.isActive=!1}return n.prototype.addClass=function(n){this.div.classList.add(n)},n.prototype.removeClass=function(n){this.div.classList.remove(n)},n}();!function(n){n.VERTICAL="VERTICAL",n.HORIZONTAL="HORIZONTAL",n.DIAGONAL_LEFT="DIAGONAL_LEFT",n.DIAGONAL_RIGHT="DIAGONAL_RIGHT"}(n||(n={}));var l=function(){function e(){this.toDestroy=[],this.minCountToDestroy=t.destroyCount}return e.prototype.checkTab=function(t){return this.toDestroy=[],this.checkingLoop(t,n.VERTICAL),this.checkingLoop(t,n.HORIZONTAL),this.checkingLoop(t,n.DIAGONAL_LEFT),this.checkingLoop(t,n.DIAGONAL_RIGHT),Array.from(this.toDestroy)},e.prototype.checkingLoop=function(n,t){var e=[],i="";if("VERTICAL"==t||"HORIZONTAL"==t)for(var o=0;o<n.length;o++){for(var r=0;r<n[o].length;r++)(s="VERTICAL"==t?n[o][r]:n[r][o]).child?(s.child.color!=i&&"all"!=s.child.color&&(""!=i&&(e=this.clearTempFields(e,!1)),i=s.child.color),e.push(s)):e=this.clearTempFields(e);e=this.clearTempFields(e),i=""}else for(var a=0;a<2*n.length-1-2*(this.minCountToDestroy-1);a++){for(o="DIAGONAL_LEFT"==t?Math.abs(Math.min(0,n.length-1-(this.minCountToDestroy-1)-a)):n.length-1-Math.abs(Math.min(0,n.length-1-(this.minCountToDestroy-1)-a)),r=Math.abs(Math.max(0,n.length-1-(this.minCountToDestroy-1)-a));"DIAGONAL_LEFT"==t?o<n.length&&r<n.length:o>=0&&r<n.length;"DIAGONAL_LEFT"==t?o++:o--,r++){var s;(s=n[o][r]).child?(s.child.color!=i&&"all"!=s.child.color&&(""!=i&&(e=this.clearTempFields(e,!1)),i=s.child.color),e.push(s)):e=this.clearTempFields(e)}e=this.clearTempFields(e),i=""}this.removeDuplicats()},e.prototype.clearTempFields=function(n,t){var e;void 0===t&&(t=!0),n.length>=this.minCountToDestroy&&(e=this.toDestroy).push.apply(e,n);var i=[];if(0==t)for(var o=n.length-1;o>=0&&"all"==n[o].child.color;o--)i.push(n[o]);return i},e.prototype.removeDuplicats=function(){this.toDestroy=this.toDestroy.filter((function(n,t,e){if(e.indexOf(n)==t)return n}))},e}(),c=function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},d=function(n,t,e,i){return new(e||(e=Promise))((function(o,r){function a(n){try{l(i.next(n))}catch(n){r(n)}}function s(n){try{l(i.throw(n))}catch(n){r(n)}}function l(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,s)}l((i=i.apply(n,t||[])).next())}))},A=function(n,t){var e,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(n,a)}catch(n){r=[6,n],i=0}finally{e=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},h=function(){function n(n,t){this.mainDiv=document.createElement("div"),this.mainDiv.id="board",this.width=n,this.height=t,this.fieldsList=[],this.ballList=[],this.pathFinder=new a,this.pathFindingProc=!1,this.path=[],this.ballSmasher=new l,this.slideEffectBool=!1,this.init()}return n.prototype.init=function(){for(var n=this,e=0;e<this.width;e++){var i=document.createElement("div");i.classList.add("boardColumn"),this.fieldsList[e]=[];for(var o=function(o){var s=new r(e,o);s.div.onclick=function(e){return d(n,void 0,void 0,(function(){var n,e=this;return A(this,(function(i){switch(i.label){case 0:return 0!=this.slideEffectBool?[3,3]:s.child?(0==s.child.isActive?(n=!1,t.pos.forEach((function(t){s.x+t.x>=0&&s.x+t.x<e.width&&s.y+t.y>=0&&s.y+t.y<e.height&&1==e.fieldsList[s.x+t.x][s.y+t.y].free&&(n=!0)})),n&&(this.ballList.forEach((function(n){return n.removeClass("activeBall")})),s.child.addClass("activeBall"),s.child.isActive=!0,this.startField&&this.startField.child&&(this.startField.child.isActive=!1),this.startField=s)):(s.child.removeClass("activeBall"),s.child.isActive=!1,this.startField=void 0),[3,3]):[3,1];case 1:return 1!=this.pathFindingProc?[3,3]:this.startField&&this.startField.child&&this.path.length>0?(this.startField.child.removeClass("activeBall"),this.startField.child.isActive=!1,[4,this.slideBall()]):[3,3];case 2:i.sent(),setTimeout((function(){e.slideEffectBool=!1,e.fieldsList.forEach((function(n){return n.forEach((function(n){n.removeClass("pathDisplay"),n.restartField()}))})),(0==e.boardScan()||0==e.anyBallOnBoard())&&e.parent.ballManage()}),this.afterMoveTime?this.afterMoveTime:0),i.label=3;case 3:return[2]}}))}))},s.div.onmouseover=function(t){n.fieldsList.forEach((function(t){return t.forEach((function(t){0==n.slideEffectBool&&(t.removeClass("pathDisplay"),t.restartField())}))})),n.startField&&n.startField!=s?(n.endField=s,n.pathFinding()):n.pathFindingProc=!1},a.fieldsList[e][o]=s,i.appendChild(s.div)},a=this,s=0;s<this.height;s++)o(s);this.mainDiv.appendChild(i)}},n.prototype.createBalls=function(n){var t=this.fieldsList.flatMap((function(n,t){return n.map((function(n,t){return n}))})).filter((function(n){if(n.free)return n}));if(t.length>=n.length)for(var e=0;e<n.length;e++){var i=t.splice(Math.floor(Math.random()*t.length),1)[0],o=new s(n[e]);i.addBall(o),this.ballList.push(o)}else this.parent.endGame()},n.prototype.pathFinding=function(){this.startField&&this.endField&&(this.pathFindingProc=!0,this.path=this.pathFinder.find(this.startField,this.endField,this.fieldsList),this.path.forEach((function(n){n.addClass("pathDisplay")})))},n.prototype.slideBall=function(){return d(this,void 0,void 0,(function(){var n;return A(this,(function(t){switch(t.label){case 0:return this.slideEffectBool=!0,n=this.startField.child,this.startField=void 0,this.endField=void 0,this.pathFindingProc=!1,null==n?[3,2]:[4,this.slideEffect(n)];case 1:if(1==t.sent())return[2,!0];t.label=2;case 2:return[2,!1]}}))}))},n.prototype.slideEffect=function(n){var t=this;return new Promise((function(e){var i=t.path.length-1,o=setInterval((function(){i<t.path.length-1&&(t.path[i+1].removeBall(),t.path[i+1].child=void 0),t.path[i].addBall(n),--i<0&&(clearInterval(o),e(!0))}),20)}))},n.prototype.boardScan=function(){var n=this.ballSmasher.checkTab(this.fieldsList);return n.forEach((function(n){n.removeBall(),n.child=void 0})),this.parent.addScore(n.length),n.length>0},n.prototype.anyBallOnBoard=function(){return this.fieldsList.filter((function(n){if(n.filter((function(n){if(n.child)return n})).length>0)return n})).length>0},function(n,t,e,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,i);else for(var s=n.length-1;s>=0;s--)(o=n[s])&&(a=(r<3?o(a):r>3?o(t,e,a):o(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a}([o,c("design:paramtypes",[Number,Number])],n)}(),p=function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},u=function(n,t,e){if(e||2===arguments.length)for(var i,o=0,r=t.length;o<r;o++)!i&&o in t||(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return n.concat(i||Array.prototype.slice.call(t))},f=function(){function n(){this.div=document.createElement("div"),this.div.id="mainDiv",this.gameInfo=document.createElement("div"),this.gameInfo.id="gameInfo",this.ballInfo=document.createElement("div"),this.ballInfo.id="ballInfo",this.scoreDiv=document.createElement("div"),this.scoreDiv.id="scoreDiv",this.score=0,this.board=new h(t.board_length,t.board_height),this.board.parent=this,this.ballSpawnerCount=t.ballSpawnerCount,this.ballPrevColor=new Array(this.ballSpawnerCount).fill(null).map((function(n){return new Array(t.colors[Math.floor(Math.random()*t.colors.length)])})),this.init()}return n.prototype.init=function(){var n=this;document.body.appendChild(this.div),this.gameInfo.appendChild(this.ballInfo),this.gameInfo.appendChild(this.scoreDiv),this.div.appendChild(this.gameInfo),this.div.appendChild(this.board.mainDiv),this.scoreDiv.innerHTML="Score: "+this.score.toString(),this.ballPrevColor.map((function(t){var e=new s(t);e.addClass("prev"),e.removeClass("ball"),n.ballInfo.appendChild(e.div)})),this.ballManage()},n.prototype.ballManage=function(n){var e=this;void 0===n&&(n=!1),this.board.createBalls(this.ballPrevColor),this.board.slideEffectBool=!0,0==t.fastGame&&(this.gameInfo.style.borderColor="red"),setTimeout((function(){e.gameInfo.style.borderColor="white",e.board.slideEffectBool=!1,e.board.boardScan(),0==e.board.fieldsList.flatMap((function(n,t){return n.map((function(n,t){return n}))})).filter((function(n){if(n.free)return n})).length&&e.endGame(),e.ballPrevColor=new Array(e.ballSpawnerCount).fill(null).map((function(n){return new Array(t.colors[Math.floor(Math.random()*t.colors.length)])})),e.ballInfo.innerHTML="",e.ballPrevColor.map((function(i,o,r){var a;0==o&&1==n?(a=new s(u([],t.colors,!0)),r[o]=u([],t.colors,!0)):a=new s(i),a.addClass("prev"),a.removeClass("ball"),e.ballInfo.appendChild(a.div)}))}),t.fastGame?1:1e3)},n.prototype.addScore=function(n){this.score+=n,this.scoreDiv.innerHTML="Score: "+this.score.toString()},n.prototype.endGame=function(){var n=this,e=document.createElement("div");e.id="overlay",document.body.appendChild(e),e.style.opacity="0";var i=document.createElement("div");i.id="endGameInfo",e.appendChild(i);var o=document.createElement("span");o.id="spanTitle",o.innerHTML="YOU LOSE",i.appendChild(o);var r=document.createElement("span");r.id="spanScoreTitle",r.innerHTML="Score",i.appendChild(r);var a=document.createElement("span");a.id="spanScore",a.innerHTML=""+this.score,i.appendChild(a);var s=document.createElement("button");s.classList.add("btn"),s.innerHTML="RESTART",i.appendChild(s),s.onclick=function(){document.body.innerHTML="",n.div.innerHTML="",n.board=new h(t.board_length,t.board_height),n.board.parent=n,n.score=0,n.init()},setTimeout((function(){e.style.opacity="1"}),10)},function(n,t,e,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,i);else for(var s=n.length-1;s>=0;s--)(o=n[s])&&(a=(r<3?o(a):r>3?o(t,e,a):o(t,e))||a);r>3&&a&&Object.defineProperty(t,e,a)}([i,p("design:type",Function),p("design:paramtypes",[Object]),p("design:returntype",void 0)],n.prototype,"ballManage",null),n}(),C=e(379),m=e.n(C),b=e(795),v=e.n(b),g=e(569),y=e.n(g),B=e(565),x=e.n(B),I=e(216),w=e.n(I),L=e(589),E=e.n(L),T=e(426),F={};F.styleTagTransform=E(),F.setAttributes=x(),F.insert=y().bind(null,"head"),F.domAPI=v(),F.insertStyleElement=w(),m()(T.Z,F),T.Z&&T.Z.locals&&T.Z.locals,new f})()})();
//# sourceMappingURL=bundle.js.map