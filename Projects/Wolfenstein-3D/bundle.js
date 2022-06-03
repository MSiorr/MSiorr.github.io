/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
                // Imports


                var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
                // Module
                ___CSS_LOADER_EXPORT___.push([module.id, "img {\r\n    image-rendering: auto;\r\n    image-rendering: crisp-edges;\r\n    image-rendering: pixelated;\r\n}\r\n\r\n* {\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: #121212;\r\n    /* background-color: rgb(56,56,56); */\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n}\r\n\r\n#root {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#scene {\r\n    position: absolute;\r\n    background: linear-gradient(rgb(56,56,56) 50%, rgb(112,112,112) 50%);\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n}\r\n\r\n#hudCanvas {\r\n    /* position: absolute; */\r\n    z-index: 2;\r\n    width: 100%;\r\n    height: 100%;\r\n    /* top: 0;\r\n    left: 0; */\r\n    display: block;\r\n    /* background-color: rgba(0, 64, 64, 1); */\r\n}\r\n\r\n#mapCreatorBtn {\r\n    position: absolute;\r\n    z-index: 1000;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 10px;\r\n    background-color: rgb(255, 205, 40);\r\n    border-radius: 10px;\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n#FPS {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: rgba(0,0,0,0.8);\r\n    color: green;\r\n    font-size: 20px;\r\n    padding: 5px;\r\n    z-index: 1000;\r\n}\r\n\r\n#DATA {\r\n    position: absolute;\r\n    top: 0;\r\n    left: calc(50% - 70px);\r\n    width: 140px;\r\n    background-color: rgba(0,0,0,0.8);\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    line-height: 150%;\r\n    z-index: 1000;\r\n}\r\n\r\n#DATA2 {\r\n    position: absolute;\r\n    z-index: 10;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 10px;\r\n    background-color: rgba(0,0,0,0.8);\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    line-height: 150%;\r\n    overflow: hidden;\r\n}\r\n\r\n#mapCreatorBtn:hover {\r\n    background-color: rgb(255, 218, 124);\r\n}\r\n\r\n#mapCreator {\r\n    z-index: 100;\r\n    background-color: #121212;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    overflow: hidden;\r\n}\r\n\r\n#mapSizeDiv {\r\n    width: 100%;\r\n    height: 60px;\r\n    border-bottom: 2px solid white;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 10px;\r\n}\r\n\r\n#mapSizeDiv *{\r\n    margin: 0 10px;\r\n    background-color: rgba(255,255,255,0.1);\r\n    color: white;\r\n    border: 2px solid white;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n#mapSizeDiv *:hover, #mapSizeDiv input:focus  {\r\n    background-color: rgba(255,255,255,0.2);\r\n}\r\n\r\n#creatorBoard {\r\n    display: flex;\r\n    width: 100%;\r\n    height: calc(100% - 60px);\r\n}\r\n\r\n#creatorMenu {\r\n    width: 280px;\r\n    height: 100%;\r\n    overflow-y: auto;\r\n}\r\n\r\n#topMenu {\r\n    margin-bottom: 50px;\r\n    font-weight: bold;\r\n}\r\n\r\n#creatorBoardArea {\r\n    width: calc(100% - 200px);\r\n    height: 100%;\r\n    border-left: 2px solid white;\r\n    overflow: auto;\r\n}\r\n\r\n.menuElement {\r\n    border: 2px solid white;\r\n    color: white;\r\n    border-radius: 10px;\r\n    margin: 10px 20px;\r\n    text-align: center;\r\n    padding: 10px 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.menuElement:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.field {\r\n    border: .5px solid rgba(255,255,255,0.5);\r\n    cursor: pointer;\r\n    min-width: 32px;\r\n    min-height: 32px;\r\n}\r\n\r\n.field::after{\r\n    content: '';\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.field:hover::after {\r\n    background-color: rgba(255,255,255,0.2);\r\n}\r\n\r\n.boardColumn {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#fieldsBoard {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    margin: 9px auto;\r\n    border: 1px solid white;\r\n    height: fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n#creatorBoardArea {\r\n    display: flex;\r\n}\r\n\r\n.mapBtnGroupTitle{\r\n    width: 100%;\r\n    padding: 10px 0;\r\n    color: white;\r\n    border-top: 4px solid white;\r\n    border-bottom: 4px solid white;\r\n    margin: 40px 0;\r\n    text-align: center;\r\n}\r\n\r\n.menuBtnGroup{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.smallMenuBtn {\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    width: 48px;\r\n    height: 48px;\r\n    border: 1px solid white;\r\n    margin: 5px;\r\n    cursor: pointer;\r\n    transition: transform .5s;\r\n    background-color: rgba(255,255,255,0.1);\r\n}\r\n\r\n.smallMenuBtn:hover{\r\n    transform: scale(1.2);\r\n}\r\n\r\n\r\n#additionalMenu {\r\n    position: absolute;\r\n    height: 400px;\r\n    width: 280px;\r\n    border: 2px solid white;\r\n    border-radius: 10px;\r\n    background-color: rgba(0,0,0,0.7);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    /* top: 110px;\r\n    left: 800px; */\r\n    z-index: 2000;\r\n    color: white;\r\n}\r\n\r\n#additionalMenuTitle{\r\n    width: 100%;\r\n    height: 50px;\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n    border-bottom: 2px solid white;\r\n    position: relative;\r\n    /* color: rgb(213, 213, 31); */\r\n}\r\n\r\n#additionalMenuClose {\r\n    width: 30px;\r\n    height: 30px;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 10px;\r\n    background-color: rgba(216, 56, 56, 0.8);\r\n    border: 1px solid white;\r\n    border-radius: 5px;\r\n    font-size: 24px;\r\n    cursor: pointer;\r\n}\r\n\r\n#additionalMenuClose:hover{\r\n    background-color: rgba(216, 56, 56, 1);;\r\n}\r\n\r\n#additionalMenuContext {\r\n    height: calc(100% - 50px);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n#additionalMenuTargetBtn {\r\n    padding: 15px 25px;\r\n    border: 2px solid white;\r\n    font-size: 20px;\r\n    border-radius: 10px;\r\n    color: white;\r\n    background-color: rgba(41, 209, 47, 0.75);\r\n    cursor: pointer;\r\n}\r\n\r\n#additionalMenuTargetBtn:hover {\r\n    background-color: rgba(41, 209, 47, 1);\r\n}\r\n\r\n#additionalMenuContext select {\r\n    width: 160px;\r\n    padding: 10px 0;\r\n    border: 2px solid white;\r\n    border-radius: 10px;\r\n    color: white;\r\n    background-color: rgba(247, 178, 73, 0.604);\r\n    text-align: center;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n#additionalMenuContext select option {\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: rgba(247, 178, 73, 0.604);\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n.helperClassAfter::after{\r\n    content: '';\r\n    background-color: rgba(255,0,0,0.5) !important;\r\n}\r\n\r\n\r\n\r\n\r\n.displayNone {\r\n    display: none !important;\r\n}\r\n\r\n/* #fakeScene{\r\n    background-color: rgba(255,0,0,0.2);\r\n}\r\n\r\n#fakeBar{\r\n    background-color: rgba(0,255,0,0.2);\r\n} */", "", { "version": 3, "sources": ["webpack://./src/style.css"], "names": [], "mappings": "AAAA;IACI,qBAAqB;IACrB,4BAA4B;IAC5B,0BAA0B;AAC9B;;AAEA;IACI,qGAAqG;IACrG,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,qCAAqC;IACrC,SAAS;IACT,UAAU;IACV,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,oEAAoE;IACpE,WAAW;IACX,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,wBAAwB;IACxB,UAAU;IACV,WAAW;IACX,YAAY;IACZ;cACU;IACV,cAAc;IACd,0CAA0C;AAC9C;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,MAAM;IACN,OAAO;IACP,aAAa;IACb,mCAAmC;IACnC,mBAAmB;IACnB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,iCAAiC;IACjC,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,sBAAsB;IACtB,YAAY;IACZ,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,OAAO;IACP,aAAa;IACb,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;IAC3B,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,8BAA8B;IAC9B,aAAa;IACb,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,uCAAuC;IACvC,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,WAAW;IACX,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,4BAA4B;IAC5B,cAAc;AAClB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,wCAAwC;IACxC,eAAe;IACf,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,YAAY;IACZ,2BAA2B;IAC3B,8BAA8B;IAC9B,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,WAAW;IACX,eAAe;IACf,yBAAyB;IACzB,uCAAuC;AAC3C;;AAEA;IACI,qBAAqB;AACzB;;;AAGA;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,iCAAiC;IACjC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB;kBACc;IACd,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,eAAe;IACf,8BAA8B;IAC9B,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,wCAAwC;IACxC,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,yCAAyC;IACzC,eAAe;AACnB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,2CAA2C;IAC3C,kBAAkB;IAClB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,2CAA2C;IAC3C,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,8CAA8C;AAClD;;;;;AAKA;IACI,wBAAwB;AAC5B;;AAEA;;;;;;GAMG", "sourcesContent": ["img {\r\n    image-rendering: auto;\r\n    image-rendering: crisp-edges;\r\n    image-rendering: pixelated;\r\n}\r\n\r\n* {\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: #121212;\r\n    /* background-color: rgb(56,56,56); */\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n}\r\n\r\n#root {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#scene {\r\n    position: absolute;\r\n    background: linear-gradient(rgb(56,56,56) 50%, rgb(112,112,112) 50%);\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n}\r\n\r\n#hudCanvas {\r\n    /* position: absolute; */\r\n    z-index: 2;\r\n    width: 100%;\r\n    height: 100%;\r\n    /* top: 0;\r\n    left: 0; */\r\n    display: block;\r\n    /* background-color: rgba(0, 64, 64, 1); */\r\n}\r\n\r\n#mapCreatorBtn {\r\n    position: absolute;\r\n    z-index: 1000;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 10px;\r\n    background-color: rgb(255, 205, 40);\r\n    border-radius: 10px;\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n#FPS {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: rgba(0,0,0,0.8);\r\n    color: green;\r\n    font-size: 20px;\r\n    padding: 5px;\r\n    z-index: 1000;\r\n}\r\n\r\n#DATA {\r\n    position: absolute;\r\n    top: 0;\r\n    left: calc(50% - 70px);\r\n    width: 140px;\r\n    background-color: rgba(0,0,0,0.8);\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    line-height: 150%;\r\n    z-index: 1000;\r\n}\r\n\r\n#DATA2 {\r\n    position: absolute;\r\n    z-index: 10;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 10px;\r\n    background-color: rgba(0,0,0,0.8);\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    line-height: 150%;\r\n    overflow: hidden;\r\n}\r\n\r\n#mapCreatorBtn:hover {\r\n    background-color: rgb(255, 218, 124);\r\n}\r\n\r\n#mapCreator {\r\n    z-index: 100;\r\n    background-color: #121212;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    overflow: hidden;\r\n}\r\n\r\n#mapSizeDiv {\r\n    width: 100%;\r\n    height: 60px;\r\n    border-bottom: 2px solid white;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 10px;\r\n}\r\n\r\n#mapSizeDiv *{\r\n    margin: 0 10px;\r\n    background-color: rgba(255,255,255,0.1);\r\n    color: white;\r\n    border: 2px solid white;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    outline: none;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n#mapSizeDiv *:hover, #mapSizeDiv input:focus  {\r\n    background-color: rgba(255,255,255,0.2);\r\n}\r\n\r\n#creatorBoard {\r\n    display: flex;\r\n    width: 100%;\r\n    height: calc(100% - 60px);\r\n}\r\n\r\n#creatorMenu {\r\n    width: 280px;\r\n    height: 100%;\r\n    overflow-y: auto;\r\n}\r\n\r\n#topMenu {\r\n    margin-bottom: 50px;\r\n    font-weight: bold;\r\n}\r\n\r\n#creatorBoardArea {\r\n    width: calc(100% - 200px);\r\n    height: 100%;\r\n    border-left: 2px solid white;\r\n    overflow: auto;\r\n}\r\n\r\n.menuElement {\r\n    border: 2px solid white;\r\n    color: white;\r\n    border-radius: 10px;\r\n    margin: 10px 20px;\r\n    text-align: center;\r\n    padding: 10px 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.menuElement:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.field {\r\n    border: .5px solid rgba(255,255,255,0.5);\r\n    cursor: pointer;\r\n    min-width: 32px;\r\n    min-height: 32px;\r\n}\r\n\r\n.field::after{\r\n    content: '';\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.field:hover::after {\r\n    background-color: rgba(255,255,255,0.2);\r\n}\r\n\r\n.boardColumn {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#fieldsBoard {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    margin: 9px auto;\r\n    border: 1px solid white;\r\n    height: fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n#creatorBoardArea {\r\n    display: flex;\r\n}\r\n\r\n.mapBtnGroupTitle{\r\n    width: 100%;\r\n    padding: 10px 0;\r\n    color: white;\r\n    border-top: 4px solid white;\r\n    border-bottom: 4px solid white;\r\n    margin: 40px 0;\r\n    text-align: center;\r\n}\r\n\r\n.menuBtnGroup{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.smallMenuBtn {\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    width: 48px;\r\n    height: 48px;\r\n    border: 1px solid white;\r\n    margin: 5px;\r\n    cursor: pointer;\r\n    transition: transform .5s;\r\n    background-color: rgba(255,255,255,0.1);\r\n}\r\n\r\n.smallMenuBtn:hover{\r\n    transform: scale(1.2);\r\n}\r\n\r\n\r\n#additionalMenu {\r\n    position: absolute;\r\n    height: 400px;\r\n    width: 280px;\r\n    border: 2px solid white;\r\n    border-radius: 10px;\r\n    background-color: rgba(0,0,0,0.7);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    /* top: 110px;\r\n    left: 800px; */\r\n    z-index: 2000;\r\n    color: white;\r\n}\r\n\r\n#additionalMenuTitle{\r\n    width: 100%;\r\n    height: 50px;\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n    border-bottom: 2px solid white;\r\n    position: relative;\r\n    /* color: rgb(213, 213, 31); */\r\n}\r\n\r\n#additionalMenuClose {\r\n    width: 30px;\r\n    height: 30px;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 10px;\r\n    background-color: rgba(216, 56, 56, 0.8);\r\n    border: 1px solid white;\r\n    border-radius: 5px;\r\n    font-size: 24px;\r\n    cursor: pointer;\r\n}\r\n\r\n#additionalMenuClose:hover{\r\n    background-color: rgba(216, 56, 56, 1);;\r\n}\r\n\r\n#additionalMenuContext {\r\n    height: calc(100% - 50px);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n#additionalMenuTargetBtn {\r\n    padding: 15px 25px;\r\n    border: 2px solid white;\r\n    font-size: 20px;\r\n    border-radius: 10px;\r\n    color: white;\r\n    background-color: rgba(41, 209, 47, 0.75);\r\n    cursor: pointer;\r\n}\r\n\r\n#additionalMenuTargetBtn:hover {\r\n    background-color: rgba(41, 209, 47, 1);\r\n}\r\n\r\n#additionalMenuContext select {\r\n    width: 160px;\r\n    padding: 10px 0;\r\n    border: 2px solid white;\r\n    border-radius: 10px;\r\n    color: white;\r\n    background-color: rgba(247, 178, 73, 0.604);\r\n    text-align: center;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n#additionalMenuContext select option {\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: rgba(247, 178, 73, 0.604);\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n.helperClassAfter::after{\r\n    content: '';\r\n    background-color: rgba(255,0,0,0.5) !important;\r\n}\r\n\r\n\r\n\r\n\r\n.displayNone {\r\n    display: none !important;\r\n}\r\n\r\n/* #fakeScene{\r\n    background-color: rgba(255,0,0,0.2);\r\n}\r\n\r\n#fakeBar{\r\n    background-color: rgba(0,255,0,0.2);\r\n} */"], "sourceRoot": "" }]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


                /***/
}),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

                "use strict";


                /*
                  MIT License http://www.opensource.org/licenses/mit-license.php
                  Author Tobias Koppers @sokra
                */
                module.exports = function (cssWithMappingToString) {
                    var list = []; // return the list of modules as css string

                    list.toString = function toString() {
                        return this.map(function (item) {
                            var content = "";
                            var needLayer = typeof item[5] !== "undefined";

                            if (item[4]) {
                                content += "@supports (".concat(item[4], ") {");
                            }

                            if (item[2]) {
                                content += "@media ".concat(item[2], " {");
                            }

                            if (needLayer) {
                                content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
                            }

                            content += cssWithMappingToString(item);

                            if (needLayer) {
                                content += "}";
                            }

                            if (item[2]) {
                                content += "}";
                            }

                            if (item[4]) {
                                content += "}";
                            }

                            return content;
                        }).join("");
                    }; // import a list of modules into the list


                    list.i = function i(modules, media, dedupe, supports, layer) {
                        if (typeof modules === "string") {
                            modules = [[null, modules, undefined]];
                        }

                        var alreadyImportedModules = {};

                        if (dedupe) {
                            for (var _i = 0; _i < this.length; _i++) {
                                var id = this[_i][0];

                                if (id != null) {
                                    alreadyImportedModules[id] = true;
                                }
                            }
                        }

                        for (var _i2 = 0; _i2 < modules.length; _i2++) {
                            var item = [].concat(modules[_i2]);

                            if (dedupe && alreadyImportedModules[item[0]]) {
                                continue;
                            }

                            if (typeof layer !== "undefined") {
                                if (typeof item[5] === "undefined") {
                                    item[5] = layer;
                                } else {
                                    item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
                                    item[5] = layer;
                                }
                            }

                            if (media) {
                                if (!item[2]) {
                                    item[2] = media;
                                } else {
                                    item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
                                    item[2] = media;
                                }
                            }

                            if (supports) {
                                if (!item[4]) {
                                    item[4] = "".concat(supports);
                                } else {
                                    item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
                                    item[4] = supports;
                                }
                            }

                            list.push(item);
                        }
                    };

                    return list;
                };

                /***/
}),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

                "use strict";


                module.exports = function (item) {
                    var content = item[1];
                    var cssMapping = item[3];

                    if (!cssMapping) {
                        return content;
                    }

                    if (typeof btoa === "function") {
                        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
                        var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
                        var sourceMapping = "/*# ".concat(data, " */");
                        var sourceURLs = cssMapping.sources.map(function (source) {
                            return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
                        });
                        return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
                    }

                    return [content].join("\n");
                };

                /***/
}),

/***/ "./src/assets/dog.png":
/*!****************************!*\
  !*** ./src/assets/dog.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/dog.png");

                /***/
}),

/***/ "./src/assets/endFont.png":
/*!********************************!*\
  !*** ./src/assets/endFont.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/endFont.png");

                /***/
}),

/***/ "./src/assets/enemy.png":
/*!******************************!*\
  !*** ./src/assets/enemy.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/enemy.png");

                /***/
}),

/***/ "./src/assets/favicon.ico":
/*!********************************!*\
  !*** ./src/assets/favicon.ico ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/favicon.ico");

                /***/
}),

/***/ "./src/assets/hud.png":
/*!****************************!*\
  !*** ./src/assets/hud.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/hud.png");

                /***/
}),

/***/ "./src/assets/mapCreator.png":
/*!***********************************!*\
  !*** ./src/assets/mapCreator.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/mapCreator.png");

                /***/
}),

/***/ "./src/assets/menu.png":
/*!*****************************!*\
  !*** ./src/assets/menu.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/menu.png");

                /***/
}),

/***/ "./src/assets/menuFont.png":
/*!*********************************!*\
  !*** ./src/assets/menuFont.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/menuFont.png");

                /***/
}),

/***/ "./src/assets/objects.png":
/*!********************************!*\
  !*** ./src/assets/objects.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/objects.png");

                /***/
}),

/***/ "./src/assets/player.png":
/*!*******************************!*\
  !*** ./src/assets/player.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/player.png");

                /***/
}),

/***/ "./src/assets/wallsMain.png":
/*!**********************************!*\
  !*** ./src/assets/wallsMain.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/wallsMain.png");

                /***/
}),

/***/ "./src/assets/weapons.png":
/*!********************************!*\
  !*** ./src/assets/weapons.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/weapons.png");

                /***/
}),

/***/ "./src/audio/DSDEATH.wav":
/*!*******************************!*\
  !*** ./src/audio/DSDEATH.wav ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/DSDEATH.wav");

                /***/
}),

/***/ "./src/audio/DSWKNIF.wav":
/*!*******************************!*\
  !*** ./src/audio/DSWKNIF.wav ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/DSWKNIF.wav");

                /***/
}),

/***/ "./src/audio/M_BACK.wav":
/*!******************************!*\
  !*** ./src/audio/M_BACK.wav ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/M_BACK.wav");

                /***/
}),

/***/ "./src/audio/M_MOVE.wav":
/*!******************************!*\
  !*** ./src/audio/M_MOVE.wav ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/M_MOVE.wav");

                /***/
}),

/***/ "./src/audio/M_SELECT.wav":
/*!********************************!*\
  !*** ./src/audio/M_SELECT.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/M_SELECT.wav");

                /***/
}),

/***/ "./src/audio/P_AMMO.wav":
/*!******************************!*\
  !*** ./src/audio/P_AMMO.wav ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/P_AMMO.wav");

                /***/
}),

/***/ "./src/audio/P_CGUN.wav":
/*!******************************!*\
  !*** ./src/audio/P_CGUN.wav ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/P_CGUN.wav");

                /***/
}),

/***/ "./src/audio/P_FOOD.wav":
/*!******************************!*\
  !*** ./src/audio/P_FOOD.wav ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/P_FOOD.wav");

                /***/
}),

/***/ "./src/audio/P_LIFE.wav":
/*!******************************!*\
  !*** ./src/audio/P_LIFE.wav ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/P_LIFE.wav");

                /***/
}),

/***/ "./src/audio/P_MEDKIT.wav":
/*!********************************!*\
  !*** ./src/audio/P_MEDKIT.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/P_MEDKIT.wav");

                /***/
}),

/***/ "./src/audio/P_MGUN.wav":
/*!******************************!*\
  !*** ./src/audio/P_MGUN.wav ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/P_MGUN.wav");

                /***/
}),

/***/ "./src/audio/S_100.wav":
/*!*****************************!*\
  !*** ./src/audio/S_100.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/S_100.wav");

                /***/
}),

/***/ "./src/audio/S_BONUSC.wav":
/*!********************************!*\
  !*** ./src/audio/S_BONUSC.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/S_BONUSC.wav");

                /***/
}),

/***/ "./src/audio/THEME_LEVEL.mp3":
/*!***********************************!*\
  !*** ./src/audio/THEME_LEVEL.mp3 ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/THEME_LEVEL.mp3");

                /***/
}),

/***/ "./src/audio/THEME_MENU.mp3":
/*!**********************************!*\
  !*** ./src/audio/THEME_MENU.mp3 ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/THEME_MENU.mp3");

                /***/
}),

/***/ "./src/audio/THEME_SPLASH.mp3":
/*!************************************!*\
  !*** ./src/audio/THEME_SPLASH.mp3 ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/THEME_SPLASH.mp3");

                /***/
}),

/***/ "./src/audio/T_CHEST.wav":
/*!*******************************!*\
  !*** ./src/audio/T_CHEST.wav ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/T_CHEST.wav");

                /***/
}),

/***/ "./src/audio/T_CROSS.wav":
/*!*******************************!*\
  !*** ./src/audio/T_CROSS.wav ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/T_CROSS.wav");

                /***/
}),

/***/ "./src/audio/T_CROWN.wav":
/*!*******************************!*\
  !*** ./src/audio/T_CROWN.wav ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/T_CROWN.wav");

                /***/
}),

/***/ "./src/audio/T_CUP.wav":
/*!*****************************!*\
  !*** ./src/audio/T_CUP.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/T_CUP.wav");

                /***/
}),

/***/ "./src/audio/WSND0000.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0000.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0000.wav");

                /***/
}),

/***/ "./src/audio/WSND0001.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0001.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0001.wav");

                /***/
}),

/***/ "./src/audio/WSND0002.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0002.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0002.wav");

                /***/
}),

/***/ "./src/audio/WSND0003.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0003.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0003.wav");

                /***/
}),

/***/ "./src/audio/WSND0004.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0004.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0004.wav");

                /***/
}),

/***/ "./src/audio/WSND0005.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0005.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0005.wav");

                /***/
}),

/***/ "./src/audio/WSND0006.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0006.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0006.wav");

                /***/
}),

/***/ "./src/audio/WSND0012.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0012.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0012.wav");

                /***/
}),

/***/ "./src/audio/WSND0013.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0013.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0013.wav");

                /***/
}),

/***/ "./src/audio/WSND0014.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0014.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0014.wav");

                /***/
}),

/***/ "./src/audio/WSND0015.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0015.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0015.wav");

                /***/
}),

/***/ "./src/audio/WSND0016.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0016.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0016.wav");

                /***/
}),

/***/ "./src/audio/WSND0021.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0021.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0021.wav");

                /***/
}),

/***/ "./src/audio/WSND0029.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0029.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0029.wav");

                /***/
}),

/***/ "./src/audio/WSND0030.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0030.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0030.wav");

                /***/
}),

/***/ "./src/audio/WSND0034.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0034.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0034.wav");

                /***/
}),

/***/ "./src/audio/WSND0035.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0035.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0035.wav");

                /***/
}),

/***/ "./src/audio/WSND0039.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0039.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0039.wav");

                /***/
}),

/***/ "./src/audio/WSND0040.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0040.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0040.wav");

                /***/
}),

/***/ "./src/audio/WSND0041.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0041.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0041.wav");

                /***/
}),

/***/ "./src/audio/WSND0042.wav":
/*!********************************!*\
  !*** ./src/audio/WSND0042.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/audio/WSND0042.wav");

                /***/
}),

/***/ "./src/shaders/shader.frag":
/*!*********************************!*\
  !*** ./src/shaders/shader.frag ***!
  \*********************************/
/***/ ((module) => {

                module.exports = "precision mediump float;\r\n\r\nvarying vec2 v_texcoord;\r\n\r\nuniform sampler2D u_texture;\r\n\r\nvoid main() {\r\n  vec4 alphaMark = texture2D(u_texture, v_texcoord);\r\n  if (alphaMark.a < 0.1)\r\n    discard;\r\n  gl_FragColor = alphaMark;\r\n}"

                /***/
}),

/***/ "./src/shaders/shader.vert":
/*!*********************************!*\
  !*** ./src/shaders/shader.vert ***!
  \*********************************/
/***/ ((module) => {

                module.exports = "// an attribute will receive data from a buffer\r\nattribute vec4 a_position;\r\nattribute vec2 a_texcoord;\r\n\r\nuniform mat4 u_matrix;\r\n\r\nvarying vec2 v_texcoord;\r\n\r\n// all shaders have a main function\r\nvoid main() {\r\n  gl_Position = u_matrix * a_position;\r\n\r\n  v_texcoord = a_texcoord;\r\n}"

                /***/
}),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");











                var options = {};

                options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
                options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

                options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");

                options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
                options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

                var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


                /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

                "use strict";


                var stylesInDOM = [];

                function getIndexByIdentifier(identifier) {
                    var result = -1;

                    for (var i = 0; i < stylesInDOM.length; i++) {
                        if (stylesInDOM[i].identifier === identifier) {
                            result = i;
                            break;
                        }
                    }

                    return result;
                }

                function modulesToDom(list, options) {
                    var idCountMap = {};
                    var identifiers = [];

                    for (var i = 0; i < list.length; i++) {
                        var item = list[i];
                        var id = options.base ? item[0] + options.base : item[0];
                        var count = idCountMap[id] || 0;
                        var identifier = "".concat(id, " ").concat(count);
                        idCountMap[id] = count + 1;
                        var indexByIdentifier = getIndexByIdentifier(identifier);
                        var obj = {
                            css: item[1],
                            media: item[2],
                            sourceMap: item[3],
                            supports: item[4],
                            layer: item[5]
                        };

                        if (indexByIdentifier !== -1) {
                            stylesInDOM[indexByIdentifier].references++;
                            stylesInDOM[indexByIdentifier].updater(obj);
                        } else {
                            var updater = addElementStyle(obj, options);
                            options.byIndex = i;
                            stylesInDOM.splice(i, 0, {
                                identifier: identifier,
                                updater: updater,
                                references: 1
                            });
                        }

                        identifiers.push(identifier);
                    }

                    return identifiers;
                }

                function addElementStyle(obj, options) {
                    var api = options.domAPI(options);
                    api.update(obj);

                    var updater = function updater(newObj) {
                        if (newObj) {
                            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
                                return;
                            }

                            api.update(obj = newObj);
                        } else {
                            api.remove();
                        }
                    };

                    return updater;
                }

                module.exports = function (list, options) {
                    options = options || {};
                    list = list || [];
                    var lastIdentifiers = modulesToDom(list, options);
                    return function update(newList) {
                        newList = newList || [];

                        for (var i = 0; i < lastIdentifiers.length; i++) {
                            var identifier = lastIdentifiers[i];
                            var index = getIndexByIdentifier(identifier);
                            stylesInDOM[index].references--;
                        }

                        var newLastIdentifiers = modulesToDom(newList, options);

                        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
                            var _identifier = lastIdentifiers[_i];

                            var _index = getIndexByIdentifier(_identifier);

                            if (stylesInDOM[_index].references === 0) {
                                stylesInDOM[_index].updater();

                                stylesInDOM.splice(_index, 1);
                            }
                        }

                        lastIdentifiers = newLastIdentifiers;
                    };
                };

                /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

                "use strict";


                var memo = {};
                /* istanbul ignore next  */

                function getTarget(target) {
                    if (typeof memo[target] === "undefined") {
                        var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

                        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                            try {
                                // This will throw an exception if access to iframe is blocked
                                // due to cross-origin restrictions
                                styleTarget = styleTarget.contentDocument.head;
                            } catch (e) {
                                // istanbul ignore next
                                styleTarget = null;
                            }
                        }

                        memo[target] = styleTarget;
                    }

                    return memo[target];
                }
                /* istanbul ignore next  */


                function insertBySelector(insert, style) {
                    var target = getTarget(insert);

                    if (!target) {
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    }

                    target.appendChild(style);
                }

                module.exports = insertBySelector;

                /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

                "use strict";


                /* istanbul ignore next  */
                function insertStyleElement(options) {
                    var element = document.createElement("style");
                    options.setAttributes(element, options.attributes);
                    options.insert(element, options.options);
                    return element;
                }

                module.exports = insertStyleElement;

                /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

                "use strict";


                /* istanbul ignore next  */
                function setAttributesWithoutAttributes(styleElement) {
                    var nonce = true ? __webpack_require__.nc : 0;

                    if (nonce) {
                        styleElement.setAttribute("nonce", nonce);
                    }
                }

                module.exports = setAttributesWithoutAttributes;

                /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

                "use strict";


                /* istanbul ignore next  */
                function apply(styleElement, options, obj) {
                    var css = "";

                    if (obj.supports) {
                        css += "@supports (".concat(obj.supports, ") {");
                    }

                    if (obj.media) {
                        css += "@media ".concat(obj.media, " {");
                    }

                    var needLayer = typeof obj.layer !== "undefined";

                    if (needLayer) {
                        css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
                    }

                    css += obj.css;

                    if (needLayer) {
                        css += "}";
                    }

                    if (obj.media) {
                        css += "}";
                    }

                    if (obj.supports) {
                        css += "}";
                    }

                    var sourceMap = obj.sourceMap;

                    if (sourceMap && typeof btoa !== "undefined") {
                        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
                    } // For old IE

                    /* istanbul ignore if  */


                    options.styleTagTransform(css, styleElement, options.options);
                }

                function removeStyleElement(styleElement) {
                    // istanbul ignore if
                    if (styleElement.parentNode === null) {
                        return false;
                    }

                    styleElement.parentNode.removeChild(styleElement);
                }
                /* istanbul ignore next  */


                function domAPI(options) {
                    var styleElement = options.insertStyleElement(options);
                    return {
                        update: function update(obj) {
                            apply(styleElement, options, obj);
                        },
                        remove: function remove() {
                            removeStyleElement(styleElement);
                        }
                    };
                }

                module.exports = domAPI;

                /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

                "use strict";


                /* istanbul ignore next  */
                function styleTagTransform(css, styleElement) {
                    if (styleElement.styleSheet) {
                        styleElement.styleSheet.cssText = css;
                    } else {
                        while (styleElement.firstChild) {
                            styleElement.removeChild(styleElement.firstChild);
                        }

                        styleElement.appendChild(document.createTextNode(css));
                    }
                }

                module.exports = styleTagTransform;

                /***/
}),

/***/ "./src/components/Config.ts":
/*!**********************************!*\
  !*** ./src/components/Config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "Scene2DColors": () => (/* binding */ Scene2DColors),
/* harmony export */   "AudioNames": () => (/* binding */ AudioNames),
/* harmony export */   "animNames": () => (/* binding */ animNames),
/* harmony export */   "enemyActionTypes": () => (/* binding */ enemyActionTypes),
/* harmony export */   "enemyAngleStatus": () => (/* binding */ enemyAngleStatus),
/* harmony export */   "weaponStatus": () => (/* binding */ weaponStatus),
/* harmony export */   "weaponTypes": () => (/* binding */ weaponTypes),
/* harmony export */   "pickablesTypes": () => (/* binding */ pickablesTypes),
/* harmony export */   "pickablesNames": () => (/* binding */ pickablesNames),
/* harmony export */   "hudImgNames": () => (/* binding */ hudImgNames),
/* harmony export */   "MenuImgNames": () => (/* binding */ MenuImgNames),
/* harmony export */   "MenuScreens": () => (/* binding */ MenuScreens),
/* harmony export */   "menuFontColors": () => (/* binding */ menuFontColors),
/* harmony export */   "MenuOptionsOptions": () => (/* binding */ MenuOptionsOptions),
/* harmony export */   "MenuDifficultyOptions": () => (/* binding */ MenuDifficultyOptions),
/* harmony export */   "Scene2DStatus": () => (/* binding */ Scene2DStatus),
/* harmony export */   "HUDStatus": () => (/* binding */ HUDStatus),
/* harmony export */   "EnemyData": () => (/* binding */ EnemyData)
                    /* harmony export */
});
/* harmony import */ var _MyAudio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAudio */ "./src/components/MyAudio.ts");

                var wallSize = 100;
                var config = {
                    attributes: ["a_position", "a_color", "a_texcoord"],
                    uniforms: ["u_color", "u_matrix", "u_texture"],
                    wallSize: wallSize,
                    actionDistance: 1 * wallSize,
                    doorsAutoCloseTime: 5000,
                    mapCreatorItems: ['player', 'wall', 'enemy', 'door', 'pickable'],
                    textureSize: 64,
                    usedAmmoSpawnRange: 50,
                    enemyDetectShootRange: 7 * wallSize,
                    enemyFrontSpotRange: 15 * wallSize,
                    enemyBackSpotRange: 2 * wallSize,
                    enemyShootRange: 2 * wallSize,
                    enemyReloadTime: 500,
                    enemyDMG: 25,
                    enemyMissRange: 5 * wallSize,
                    sceneBorderWidth: 4,
                    faceBaseChangeSpeed: 750,
                    faceRandomRangeSpeed: 400,
                    noCollideFurnitures: ["furniture_hangingLamp", "furniture_hangingCandlestick", "furniture_skullsPile", "furniture_lyingSkeleton", "furniture_pot"],
                    redPixelsAmountInX: 200,
                    treasuresNames: ["CROSS", "CHALICE", "CHEST", "CROWN", "EXTRA_LIFE"]
                };
                var Scene2DColors = {
                    HIT: 'rgb(255,0,0)',
                    PICK: 'rgb(213, 213, 31)'
                };
                var AudioNames = {
                    PICKUP_AMMO: "P_AMMO",
                    PICKUP_MACHINEGUN: "P_MGUN",
                    PICKUP_CHAINGUN: "P_CGUN",
                    PICKUP_FOOD: "P_FOOD",
                    PICKUP_MEDKIT: "P_MEDKIT",
                    PICKUP_EXTRALIFE: "P_LIFE",
                    TREASURE_CHEST: "T_CHEST",
                    TREASURE_CROSS: "T_CROSS",
                    TREASURE_CROWN: "T_CROWN",
                    TREASURE_CUP: "T_CUP",
                    DOORS_OPEN: "WSND0003",
                    DOORS_CLOSE: "WSND0002",
                    DOORS_SECRET: "WSND0015",
                    ELEVATOR_SWITCH: "WSND0030",
                    END_100_BONUS: "S_100",
                    END_BONUS_POINTS: "S_BONUSC",
                    WEAPON_KNIFE: "DSWKNIF",
                    WEAPON_PISTOL: "WSND0005",
                    WEAPON_MACHINEGUN: "WSND0004",
                    WEAPON_CHAINGUN: "WSND0006",
                    GUARD_ATTACK: "WSND0021",
                    PLAYER_HIT: "WSND0014",
                    PLAYER_DEAD: "DSDEATH",
                    DOG_DETECT: "WSND0001",
                    DOG_ATTACK: "WSND0029",
                    DOG_DEATH: "WSND0016",
                    GUARD_DEAD_1: "WSND0012",
                    GUARD_DEAD_2: "WSND0013",
                    GUARD_DEAD_3: "WSND0034",
                    GUARD_DEAD_4: "WSND0035",
                    GUARD_DEAD_5: "WSND0039",
                    GUARD_DEAD_6: "WSND0040",
                    GUARD_DEAD_7: "WSND0041",
                    GUARD_DEAD_8: "WSND0042",
                    GUARD_DETECT: "WSND0000",
                    MENU_SELECT: "M_SELECT",
                    MENU_MOVE: "M_MOVE",
                    THEME_SPLASH: "THEME_SPLASH",
                    THEME_MENU: "THEME_MENU",
                    THEME_LEVEL: "THEME_LEVEL"
                };
                var animNames = {
                    ENEMY_SHOOT: "ENEMY_SHOOT",
                    ENEMY_DEAD: "ENEMY_DEAD",
                    ENEMY_RUN: "ENEMY_RUN",
                    ENEMY_STAND: "ENEMY_STAND",
                    ENEMY_HIT: "ENEMY_HIT",
                    WEAPON_DEFAULT: "WEAPON_DEFAULT",
                    WEAPON_PICK: "WEAPON_PICK",
                    WEAPON_SHOOT: "WEAPON_SHOOT",
                    WEAPON_HIDE: "WEAPON_HIDE"
                };
                var enemyActionTypes = {
                    STAND: "STAND",
                    RUN: "RUN",
                    HIT: "HIT",
                    DEAD: "DEAD",
                    SHOOT: "SHOOT"
                };
                var enemyAngleStatus = {
                    FRONT: 1,
                    FRONT_LEFT: 2,
                    LEFT: 3,
                    BACK_LEFT: 4,
                    BACK: 5,
                    BACK_RIGHT: 6,
                    RIGHT: 7,
                    FRONT_RIGHT: 8,
                };
                var weaponStatus = {
                    DEFAULT: "DEFAULT",
                    PICK: "PICK",
                    SHOOT: "SHOOT",
                    HIDE: "HIDE"
                };
                var weaponTypes = {
                    KNIFE: { id: 1, attackSpeed: 2.4, auto: false, range: 1 * config.wallSize, shootID: 0, damage: 50, needAmmo: false, makeNoise: false, audioName: AudioNames.WEAPON_KNIFE },
                    PISTOL: { id: 2, attackSpeed: 2.4, auto: false, range: 10 * config.wallSize, shootID: 1, damage: 100, needAmmo: true, makeNoise: true, audioName: AudioNames.WEAPON_PISTOL },
                    MACHINEGUN: { id: 3, attackSpeed: 6, auto: true, range: 14 * config.wallSize, shootID: 1, damage: 100, needAmmo: true, makeNoise: true, audioName: AudioNames.WEAPON_MACHINEGUN },
                    CHAINGUN: { id: 4, attackSpeed: 6, auto: true, range: 20 * config.wallSize, shootID: null, damage: 100, needAmmo: true, makeNoise: true, audioName: AudioNames.WEAPON_CHAINGUN },
                };
                var pickablesTypes = {
                    CLIP: {
                        action: function (camera) {
                            if (camera.ammo < 99) {
                                camera.addAMMO(8);
                                _MyAudio__WEBPACK_IMPORTED_MODULE_0__["default"].instance.playAudio(AudioNames.PICKUP_AMMO);
                                return true;
                            } return false;
                        }
                    },
                    USED_CLIP: {
                        action: function (camera) {
                            if (camera.ammo < 99) {
                                camera.addAMMO(4);
                                _MyAudio__WEBPACK_IMPORTED_MODULE_0__["default"].instance.playAudio(AudioNames.PICKUP_AMMO);
                                return true;
                            } return false;
                        }
                    },
                    DOG_FOOD: {
                        action: function (camera) {
                            if (camera.hp < 100) {
                                camera.addHP(4);
                                _MyAudio__WEBPACK_IMPORTED_MODULE_0__["default"].instance.playAudio(AudioNames.PICKUP_FOOD);
                                return true;
                            } return false;
                        }
                    },
                    CHICKEN_MEAL: {
                        action: function (camera) {
                            if (camera.hp < 100) {
                                camera.addHP(10);
                                _MyAudio__WEBPACK_IMPORTED_MODULE_0__["default"].instance.playAudio(AudioNames.PICKUP_FOOD);
                                return true;
                            } return false;
                        }
                    },
                    BLOOD: {
                        action: function (camera) {
                            if (camera.hp < 10) {
                                camera.addHP(1);
                                _MyAudio__WEBPACK_IMPORTED_MODULE_0__["default"].instance.playAudio(AudioNames.PICKUP_FOOD);
                                return true;
                            } return false;
                        }
                    },
                    BLOODY_SKELETON: {
                        action: function (camera) {
                            if (camera.hp < 10) {
                                camera.addHP(1);
                                _MyAudio__WEBPACK_IMPORTED_MODULE_0__["default"].instance.playAudio(AudioNames.PICKUP_FOOD);
                                return true;
                            } return false;
                        }
                    },
                    FIRST_AID_KIT: {
                        action: function (camera) {
                            if (camera.hp < 100) {
                                camera.addHP(25);
                                _MyAudio__WEBPACK_IMPORTED_MODULE_0__["default"].instance.playAudio(AudioNames.PICKUP_MEDKIT);
                                return true;
                            } return false;
                        }
                    },
                    CROSS: { action: function (camera) { camera.addPOINTS(100); _MyAudio__WEBPACK_IMPORTED_MODULE_0__["default"].instance.playAudio(AudioNames.TREASURE_CROSS); return true; } },
                    CHALICE: { action: function (camera) { camera.addPOINTS(500); _MyAudio__WEBPACK_IMPORTED_MODULE_0__["default"].instance.playAudio(AudioNames.TREASURE_CUP); return true; } },
                    CHEST: { action: function (camera) { camera.addPOINTS(1000); _MyAudio__WEBPACK_IMPORTED_MODULE_0__["default"].instance.playAudio(AudioNames.TREASURE_CHEST); return true; } },
                    CROWN: { action: function (camera) { camera.addPOINTS(5000); _MyAudio__WEBPACK_IMPORTED_MODULE_0__["default"].instance.playAudio(AudioNames.TREASURE_CROWN); return true; } },
                    EXTRA_LIFE: { action: function (camera) { camera.extraLife(); _MyAudio__WEBPACK_IMPORTED_MODULE_0__["default"].instance.playAudio(AudioNames.PICKUP_EXTRALIFE); return true; } },
                    KEY_SILVER: {
                        action: function (camera) {
                            if (!camera.silverKey) {
                                camera.addKEY('SILVER');
                                return true;
                            } return false;
                        }
                    },
                    KEY_GOLD: {
                        action: function (camera) {
                            if (!camera.goldKey) {
                                camera.addKEY('GOLD');
                                return true;
                            } return false;
                        }
                    },
                    MACHINEGUN: {
                        action: function (camera) {
                            if (camera.weapon.weaponID <= weaponTypes.MACHINEGUN.id) {
                                camera.weapon.changeWeapon(weaponTypes.MACHINEGUN);
                                _MyAudio__WEBPACK_IMPORTED_MODULE_0__["default"].instance.playAudio(AudioNames.PICKUP_MACHINEGUN);
                            } camera.addAMMO(6); return true;
                        }
                    },
                    CHAINGUN: { action: function (camera) { camera.weapon.changeWeapon(weaponTypes.CHAINGUN); _MyAudio__WEBPACK_IMPORTED_MODULE_0__["default"].instance.playAudio(AudioNames.PICKUP_CHAINGUN); camera.addAMMO(6); return true; } },
                };
                var pickablesNames = {
                    "CLIP": pickablesTypes.CLIP,
                    "USED_CLIP": pickablesTypes.USED_CLIP,
                    "DOG_FOOD": pickablesTypes.DOG_FOOD,
                    "BLOOD": pickablesTypes.BLOOD,
                    "CROSS": pickablesTypes.CROSS,
                    "CHALICE": pickablesTypes.CHALICE,
                    "CHEST": pickablesTypes.CHEST,
                    "CROWN": pickablesTypes.CROWN,
                    "CHICKEN_MEAL": pickablesTypes.CHICKEN_MEAL,
                    "EXTRA_LIFE": pickablesTypes.EXTRA_LIFE,
                    "BLOODY_SKELETON": pickablesTypes.BLOODY_SKELETON,
                    "KEY_SILVER": pickablesTypes.KEY_SILVER,
                    "KEY_GOLD": pickablesTypes.KEY_GOLD,
                    "FIRST_AID_KIT": pickablesTypes.FIRST_AID_KIT,
                    "MACHINEGUN": pickablesTypes.MACHINEGUN,
                    "CHAINGUN": pickablesTypes.CHAINGUN,
                };
                var hudImgNames = {
                    HUDBAR: "hudBar",
                    WEAPON_KNIFE: "weapon_knife",
                    WEAPON_PISTOL: "weapon_pistol",
                    WEAPON_MACHINEGUN: "weapon_machingeun",
                    WEAPON_CHAINGUN: "weapon_chaingun",
                    KEY_GOLD: "key_gold",
                    KEY_SILVER: "key_silver",
                    LOADER: "loader",
                    PAUSE: "pause",
                    FACE: "face_dir_id",
                    END_PLAYER: "end_player_id"
                };
                var MenuImgNames = {
                    BLUE_SCREEN_INFO: "blueScreenInfo",
                    GAME_TITLE_SCREEN: "gameTitleScreen",
                    CREDITS_SCREEN: "creditsScreen",
                    EPISODE_PICTURE: "episode_picture_id",
                    MENU_PISTOL_1: "menu_pistol_1",
                    MENU_PISTOL_2: "menu_pistol_2",
                    OPTIONS_DOWN_BANNER: "options_down_banner",
                    DIFFICULTY_FACE: "difficulty_face_id",
                    OPTION_ACTIVE: "option_active",
                    OPTION_DISACTIVE: "option_disactive",
                    TITLE_OPTIONS: "title_options",
                    TITLE_LOADING: "title_loading",
                    TITLE_HIGHSCORE: "title_highScore",
                    HIGHSCORE_CODE: "highScore_code",
                    HIGHSCORE_CODE2: "highScore_code2",
                    HIGHSCORE_LEVEL: "highScore_level",
                    HIGHSCORE_NAME: "highScore_name",
                    HIGHSCORE_SCORE: "highScore_score"
                };
                var MenuScreens = {
                    BLUEINFO: 1,
                    GAME_TITLE: 2,
                    CREDITS: 3,
                    OPTIONS: 4,
                    CHOOSE_EPISODE: 5,
                    CHOOSE_DIFFICULTY: 6
                };
                var menuFontColors = {
                    active: 'rgb(152,152,152)',
                    inactive: 'rgb(121,10,0)',
                    special: 'rgb(255,233,0)'
                };
                var MenuOptionsOptions = {
                    NEW_GAME: { id: 1, active: true },
                    SOUND: { id: 2, active: false },
                    CONTROL: { id: 3, active: false },
                    LOAD_GAME: { id: 4, active: false },
                    SAVE_GAME: { id: 5, active: false },
                    CHANGE_VIEW: { id: 6, active: false },
                    END_GAME: { id: 7, active: false },
                    BACK_TO_GAME: { id: 8, active: false, special: true },
                    QUIT: { id: 9, active: true }
                };
                var MenuDifficultyOptions = {
                    "Can I play, Daddy?": { id: 1, active: true },
                    "Don't hurt me.": { id: 2, active: true },
                    "Bring 'em on!": { id: 3, active: true },
                    "I am Death incarnate!": { id: 4, active: true }
                };
                var Scene2DStatus = {
                    MENU: "MENU",
                    GAME: "GAME"
                };
                var HUDStatus = {
                    LOADING: "LOADING",
                    GAMEPLAY: "GAMEPLAY",
                    ENDSCREEN: "ENDSCREEN"
                };
                var EnemyData = {
                    GUARD: { texture: "ENEMY", name: "GUARD", dmg: 20, hp: 100, moveSpeed: 3, dropAmmo: true, attackRange: 2 },
                    DOG: { texture: "DOG", name: "DOG", dmg: 10, hp: 1, moveSpeed: 5, dropAmmo: false, attackRange: 0.5 }
                };


                /***/
}),

/***/ "./src/components/HUDElements/Element2D.ts":
/*!*************************************************!*\
  !*** ./src/components/HUDElements/Element2D.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
                var Element2D = /** @class */ (function () {
                    function Element2D() {
                    }
                    return Element2D;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element2D);


                /***/
}),

/***/ "./src/components/HUDElements/HUD.ts":
/*!*******************************************!*\
  !*** ./src/components/HUDElements/HUD.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/components/Config.ts");
/* harmony import */ var _game_Vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/Vector2 */ "./src/components/game/Vector2.ts");
/* harmony import */ var _Library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Library */ "./src/components/Library.ts");
/* harmony import */ var _HudBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HudBar */ "./src/components/HUDElements/HudBar.ts");




                var HUD = /** @class */ (function () {
                    function HUD(scene2d) {
                        this.scene2D = scene2d;
                        this.img = _Library__WEBPACK_IMPORTED_MODULE_2__["default"].instance.graphics.HUD;
                        this.fontImg = _Library__WEBPACK_IMPORTED_MODULE_2__["default"].instance.graphics.ENDFONT;
                        this.hudBar = new _HudBar__WEBPACK_IMPORTED_MODULE_3__["default"]();
                        this.status = _Config__WEBPACK_IMPORTED_MODULE_0__.HUDStatus.LOADING;
                        this.endScreenLettersCanvas = document.createElement('canvas');
                        this.lettersPrepared = false;
                        this.lettersSize = 0;
                        this.addesBonusPoint = false;
                        this.endPlayerImg = 1;
                        this.lastEndPlayerChange = 0;
                        this.endPlayerChangeSpeed = 500;
                        this.endTime = 0;
                        this.endScreenStart = 0;
                        this.endScreenVisible = false;
                        this.loaderBar = 0;
                        this.sizeMultip = 0;
                    }
                    HUD.prototype.prepareLetters = function (ctx, camera) {
                        this.lettersSize = _Library__WEBPACK_IMPORTED_MODULE_2__["default"].instance.data.graphics2DData.ENDFONT.pos.A.h * this.sizeMultip;
                        var fastCTX1 = this.endScreenLettersCanvas.getContext('2d');
                        this.endScreenLettersCanvas.width = ctx.canvas.width;
                        this.endScreenLettersCanvas.height = ctx.canvas.height;
                        this.drawLetters(fastCTX1, "FLOOR 1", ctx.canvas.width / 2.857, ctx.canvas.height / 12.5);
                        this.drawLetters(fastCTX1, "COMPLETED", ctx.canvas.width / 2.857, ctx.canvas.height / 6.25);
                        this.drawLetters(fastCTX1, "BONUS", ctx.canvas.width / 2.857, ctx.canvas.height / 3.571);
                        this.drawLetters(fastCTX1, "TIME", ctx.canvas.width / 2.5, ctx.canvas.height / 2.5);
                        this.drawLetters(fastCTX1, "PAR 01:30", ctx.canvas.width / 2.2222, ctx.canvas.height / 2.08333);
                        this.drawLetters(fastCTX1, "    KILL RATIO", ctx.canvas.width / 40, ctx.canvas.height / 1.7857);
                        this.drawLetters(fastCTX1, "  SECRET RATIO", ctx.canvas.width / 40, ctx.canvas.height / 1.562);
                        this.drawLetters(fastCTX1, "TREASURE RATIO", ctx.canvas.width / 40, ctx.canvas.height / 1.3888);
                        for (var i = 0; i < 3; i++) {
                            this.drawLetters(fastCTX1, "%", ctx.canvas.width / 1.0738, (ctx.canvas.height / 1.7857) + i * this.lettersSize);
                        }
                        this.lettersPrepared = true;
                    };
                    HUD.prototype.startLoader = function () {
                        this.status = _Config__WEBPACK_IMPORTED_MODULE_0__.HUDStatus.LOADING;
                        this.loaderBar = 0;
                    };
                    HUD.prototype.drawHUD = function (ctx, deltaTime, camera, scene3D, lvlCreator) {
                        var width = ctx.canvas.width;
                        var height = ctx.canvas.height;
                        var barH = width / 8;
                        this.sizeMultip = ctx.canvas.width / 320;
                        if (this.lettersPrepared == false) {
                            this.prepareLetters(ctx, camera);
                        }
                        ctx.beginPath();
                        ctx.fillStyle = 'rgb(0,64,64)';
                        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                        ctx.fill();
                        var barDest = { dx: 0, dy: height - barH, dWidth: width, dHeight: barH };
                        this.hudBar.update(ctx, barDest, camera, this.status == _Config__WEBPACK_IMPORTED_MODULE_0__.HUDStatus.GAMEPLAY);
                        switch (this.status) {
                            case _Config__WEBPACK_IMPORTED_MODULE_0__.HUDStatus.LOADING: {
                                if (this.scene2D.smoothAction == false) {
                                    this.loader(deltaTime);
                                }
                                this.drawLoader(ctx);
                                this.endScreenVisible = false;
                                break;
                            }
                            case _Config__WEBPACK_IMPORTED_MODULE_0__.HUDStatus.GAMEPLAY: {
                                this.drawScene3D(ctx, scene3D);
                                this.endScreenVisible = false;
                                break;
                            }
                            case _Config__WEBPACK_IMPORTED_MODULE_0__.HUDStatus.ENDSCREEN: {
                                this.checkToChangeEndPlayer();
                                this.drawEndScreen(ctx, camera, lvlCreator);
                                break;
                            }
                        }
                        // this.drawScene3D(ctx, scene3D);
                        ctx.fill();
                        ctx.closePath();
                    };
                    HUD.prototype.checkToChangeEndPlayer = function () {
                        if (Date.now() > this.lastEndPlayerChange + this.endPlayerChangeSpeed) {
                            this.endPlayerImg = this.endPlayerImg == 1 ? 2 : 1;
                            this.lastEndPlayerChange = Date.now();
                        }
                    };
                    HUD.prototype.loader = function (deltaTime) {
                        var _this = this;
                        this.loaderBar = Math.min(1, this.loaderBar += 0.8 * deltaTime);
                        if (this.loaderBar == 1)
                            this.scene2D.enableSmoothAction(function () { _this.status = _Config__WEBPACK_IMPORTED_MODULE_0__.HUDStatus.GAMEPLAY; });
                    };
                    HUD.prototype.drawScene3D = function (ctx, scene3D) {
                        // rgb(56,56,56) 50%, rgb(112,112,112) 50%
                        var sceneW = scene3D.goodWidth;
                        var sceneH = scene3D.goodHeight;
                        var sceneBorderW = (sceneW / 388) * 3 / 2;
                        var sceneBorderH = sceneW / 388;
                        this.drawTriangle(ctx, new _game_Vector2__WEBPACK_IMPORTED_MODULE_1__["default"](scene3D.marginHorizontal - sceneBorderW, scene3D.marginVertical - sceneBorderH), new _game_Vector2__WEBPACK_IMPORTED_MODULE_1__["default"](scene3D.marginHorizontal + sceneW + sceneBorderW, scene3D.marginVertical - sceneBorderH), new _game_Vector2__WEBPACK_IMPORTED_MODULE_1__["default"](scene3D.marginHorizontal - sceneBorderW, scene3D.marginVertical + sceneH + sceneBorderH), 'rgb(0,0,0)');
                        this.drawTriangle(ctx, new _game_Vector2__WEBPACK_IMPORTED_MODULE_1__["default"](scene3D.marginHorizontal + sceneW + sceneBorderW, scene3D.marginVertical - sceneBorderH), new _game_Vector2__WEBPACK_IMPORTED_MODULE_1__["default"](scene3D.marginHorizontal - sceneBorderW, scene3D.marginVertical + sceneH + sceneBorderH), new _game_Vector2__WEBPACK_IMPORTED_MODULE_1__["default"](scene3D.marginHorizontal + sceneW + sceneBorderW, scene3D.marginVertical + sceneH + sceneBorderH), 'rgb(0,102,113)');
                        ctx.fillStyle = 'rgb(0,102,113)';
                        ctx.fillRect(scene3D.marginHorizontal - sceneBorderW, scene3D.marginVertical + sceneH, sceneBorderW, sceneBorderH);
                        ctx.fillRect(scene3D.marginHorizontal + sceneW, scene3D.marginVertical - sceneBorderH, sceneBorderW, sceneBorderH);
                        ctx.fillStyle = "rgb(56,56,56)";
                        ctx.fillRect(scene3D.marginHorizontal, scene3D.marginVertical, sceneW, sceneH / 2);
                        ctx.fillStyle = "rgb(112,112,112)";
                        ctx.fillRect(scene3D.marginHorizontal, scene3D.marginVertical + sceneH / 2, sceneW, sceneH / 2);
                        ctx.drawImage(scene3D.scene, scene3D.marginHorizontal, scene3D.marginVertical, sceneW, sceneH);
                    };
                    HUD.prototype.drawTriangle = function (ctx, p1, p2, p3, color) {
                        ctx.closePath();
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.z);
                        ctx.lineTo(p2.x, p2.z);
                        ctx.lineTo(p3.x, p3.z);
                        ctx.fillStyle = color;
                        ctx.fill();
                        ctx.closePath();
                        ctx.beginPath();
                    };
                    HUD.prototype.drawLoader = function (ctx) {
                        var imgData = _Library__WEBPACK_IMPORTED_MODULE_2__["default"].instance.data.graphics2DData.HUD.pos[_Config__WEBPACK_IMPORTED_MODULE_0__.hudImgNames.LOADER];
                        var fullH = ctx.canvas.height * 7 / 8;
                        var dWidth = imgData.w * this.sizeMultip;
                        var dHeight = imgData.h * this.sizeMultip;
                        var dX = ctx.canvas.width / 2 - dWidth / 2;
                        var dY = fullH / 2 - dHeight / 2;
                        ctx.drawImage(this.img, imgData.x, imgData.y, imgData.w, imgData.h, dX, dY, dWidth, dHeight);
                        var progMargin = dWidth / 44.8;
                        var progWidth = (dWidth - 2 * progMargin) * this.loaderBar;
                        var progHeight = dHeight / 24;
                        var progDX = dX + progMargin;
                        var progDY = dY + (dHeight / 1.0666);
                        ctx.fillStyle = 'rgb(255,26,0)';
                        ctx.fillRect(progDX, progDY, progWidth, progHeight);
                        ctx.fillStyle = 'rgb(255,168,156)';
                        ctx.fillRect(progDX, progDY, progWidth - (dWidth / 320), progHeight / 2);
                    };
                    HUD.prototype.drawEndScreen = function (ctx, camera, lvlCreator) {
                        var _this = this;
                        ctx.beginPath();
                        ctx.drawImage(this.endScreenLettersCanvas, 0, 0);
                        ctx.closePath();
                        if (this.endScreenVisible == false) {
                            this.endScreenStart = Date.now();
                            this.endScreenVisible = true;
                            this.endTime = Date.now();
                            this.addesBonusPoint = false;
                        }
                        ;
                        var time = new Date(this.endTime - camera.startTime);
                        var min = time.getMinutes().toString().padStart(2, '0');
                        var sec = time.getSeconds().toString().padStart(2, '0');
                        var bonus = 0;
                        this.drawLetters(ctx, min + ":" + sec, ctx.canvas.width / 1.5384, ctx.canvas.height / 2.5);
                        var killPercent = Math.min(100, Math.round(camera.killCount / lvlCreator.enemiesCount * 100)).toString().padStart(3, ' ');
                        var secretPercent = Math.min(100, Math.round(lvlCreator.objects.walls.filter(function (e) { return e.moved; }).length / lvlCreator.secretsCount * 100)).toString().padStart(3, ' ');
                        // let secretPercent = '100'.padStart(3, ' ');
                        var treasurePercent = Math.min(100, Math.round(camera.treasuresFound / lvlCreator.treasuresCount * 100)).toString().padStart(3, ' ');
                        [killPercent, secretPercent, treasurePercent].forEach(function (e, i) {
                            if (Date.now() > _this.endScreenStart + 1000 + (i * 500)) {
                                _this.drawLetters(ctx, e, ctx.canvas.width / 1.29, (ctx.canvas.height / 1.7857) + i * _this.lettersSize);
                            }
                            if (e == '100') {
                                bonus += 10000;
                            }
                            ;
                        });
                        var timeBonus = Math.max(0, 90000 - (this.endTime - camera.startTime));
                        bonus += Math.ceil(timeBonus / 1000) * 500;
                        if (this.addesBonusPoint == false) {
                            camera.points += bonus;
                            this.addesBonusPoint = true;
                        }
                        ;
                        var strBonus = bonus.toString().padStart(5, ' ');
                        this.drawLetters(ctx, strBonus, ctx.canvas.width / 1.5384, ctx.canvas.height / 3.5714);
                        this.drawPlayerSelfImage(ctx, ctx.canvas.width / 16, ctx.canvas.height / 12.5);
                    };
                    HUD.prototype.drawPlayerSelfImage = function (ctx, dX, dY) {
                        var imgData = _Library__WEBPACK_IMPORTED_MODULE_2__["default"].instance.data.graphics2DData.HUD.pos[_Config__WEBPACK_IMPORTED_MODULE_0__.hudImgNames.END_PLAYER.replace("_id", "_" + this.endPlayerImg)];
                        var dWidth = imgData.w * this.sizeMultip;
                        var dHeight = imgData.h * this.sizeMultip;
                        ctx.fillStyle = 'rgb(0, 102, 113)';
                        ctx.fillRect((dX + dWidth / imgData.w), (dY + dHeight / imgData.h), dWidth, dHeight);
                        ctx.drawImage(this.img, imgData.x, imgData.y, imgData.w, imgData.h, dX, dY, dWidth, dHeight);
                    };
                    HUD.prototype.drawLetters = function (ctx, letters, dX, dY) {
                        var neededCanvas = document.createElement('canvas');
                        neededCanvas.width = ctx.canvas.width;
                        neededCanvas.height = ctx.canvas.height;
                        var neededCTX = neededCanvas.getContext('2d');
                        //@ts-ignore
                        neededCTX.mozImageSmoothingEnabled = false;
                        neededCTX.imageSmoothingEnabled = false;
                        var pos = 0;
                        for (var i = 0; i < letters.length; i++) {
                            var letter = letters[i];
                            if (letter == " ") {
                                pos += 16 * this.sizeMultip;
                            }
                            else {
                                var imgData = _Library__WEBPACK_IMPORTED_MODULE_2__["default"].instance.data.graphics2DData.ENDFONT.pos[letter];
                                var dWidth = imgData.w * this.sizeMultip;
                                var dHeight = imgData.h * this.sizeMultip;
                                var newDX = dX + pos;
                                pos += dWidth;
                                neededCTX.drawImage(this.fontImg, imgData.x, imgData.y, imgData.w, imgData.h, newDX, dY, dWidth, dHeight);
                            }
                        }
                        ctx.beginPath();
                        ctx.drawImage(neededCanvas, 0, 0);
                        ctx.closePath();
                    };
                    return HUD;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HUD);


                /***/
}),

/***/ "./src/components/HUDElements/HudBar.ts":
/*!**********************************************!*\
  !*** ./src/components/HUDElements/HudBar.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/components/Config.ts");
/* harmony import */ var _Library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Library */ "./src/components/Library.ts");
/* harmony import */ var _Element2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Element2D */ "./src/components/HUDElements/Element2D.ts");
/* harmony import */ var _HudBarFace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HudBarFace */ "./src/components/HUDElements/HudBarFace.ts");
                var __extends = (undefined && undefined.__extends) || (function () {
                    var extendStatics = function (d, b) {
                        extendStatics = Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
                        return extendStatics(d, b);
                    };
                    return function (d, b) {
                        if (typeof b !== "function" && b !== null)
                            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                        extendStatics(d, b);
                        function __() { this.constructor = d; }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                })();




                var HudBar = /** @class */ (function (_super) {
                    __extends(HudBar, _super);
                    function HudBar() {
                        var _this = _super.call(this) || this;
                        _this.img = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.HUD;
                        _this.x = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.HUD.pos[_Config__WEBPACK_IMPORTED_MODULE_0__.hudImgNames.HUDBAR].x;
                        _this.y = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.HUD.pos[_Config__WEBPACK_IMPORTED_MODULE_0__.hudImgNames.HUDBAR].y;
                        _this.w = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.HUD.pos[_Config__WEBPACK_IMPORTED_MODULE_0__.hudImgNames.HUDBAR].w;
                        _this.h = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.HUD.pos[_Config__WEBPACK_IMPORTED_MODULE_0__.hudImgNames.HUDBAR].h;
                        _this.hudBarFace = new _HudBarFace__WEBPACK_IMPORTED_MODULE_3__["default"]();
                        _this.sizeMultip = 0;
                        _this.dyDigit = 0;
                        return _this;
                    }
                    HudBar.prototype.update = function (ctx, dest, camera, updFace) {
                        if (updFace === void 0) { updFace = true; }
                        if (updFace) {
                            this.hudBarFace.update(ctx, camera);
                        }
                        ctx.drawImage(this.img, this.x, this.y, this.w, this.h, dest.dx, dest.dy, dest.dWidth, dest.dHeight);
                        this.sizeMultip = dest.dWidth / this.w;
                        this.dyDigit = dest.dy + ((16 / 40) * dest.dHeight);
                        this.drawLevel(ctx, dest, camera);
                        this.drawScore(ctx, dest, camera);
                        this.drawLives(ctx, dest, camera);
                        this.drawHealt(ctx, dest, camera);
                        this.drawAmmo(ctx, dest, camera);
                        this.drawKeys(ctx, dest, camera);
                        this.drawWeapon(ctx, dest, camera);
                        this.drawFace(ctx, dest);
                    };
                    HudBar.prototype.drawLevel = function (ctx, dest, camera) {
                        var boxWidth = dest.dWidth / 9.6;
                        var boxX = dest.dWidth / 35;
                        var imgData = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.HUD.pos[camera.level.toString()];
                        var dWidth = imgData.w * this.sizeMultip;
                        var dHeight = imgData.h * this.sizeMultip;
                        var dx = boxX + (boxWidth / 2 - dWidth / 2);
                        ctx.drawImage(this.img, imgData.x, imgData.y, imgData.w, imgData.h, dx, this.dyDigit, dWidth, dHeight);
                    };
                    HudBar.prototype.drawScore = function (ctx, dest, camera) {
                        var boxWidth = dest.dWidth / 5.84;
                        var boxX = dest.dWidth / 7.62;
                        var strScore = camera.points.toString().split('').reverse().join('');
                        this.drawDigits(ctx, strScore, boxWidth, boxX);
                    };
                    HudBar.prototype.drawLives = function (ctx, dest, camera) {
                        var boxWidth = dest.dWidth / 10.32;
                        var boxX = dest.dWidth / 3.165;
                        var imgData = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.HUD.pos[camera.lives.toString()];
                        var dWidth = imgData.w * this.sizeMultip;
                        var dHeight = imgData.h * this.sizeMultip;
                        var dx = boxX + (boxWidth / 2 - dWidth / 2);
                        ctx.drawImage(this.img, imgData.x, imgData.y, imgData.w, imgData.h, dx, this.dyDigit, dWidth, dHeight);
                    };
                    HudBar.prototype.drawHealt = function (ctx, dest, camera) {
                        var boxWidth = dest.dWidth / 12.3;
                        var boxX = dest.dWidth / 1.93;
                        var strHp = camera.hp.toString().split('').reverse().join('');
                        this.drawDigits(ctx, strHp, boxWidth, boxX);
                    };
                    HudBar.prototype.drawAmmo = function (ctx, dest, camera) {
                        var boxWidth = dest.dWidth / 11.42;
                        var boxX = dest.dWidth / 1.56;
                        var strAmmo = camera.ammo.toString().split('').reverse().join('');
                        this.drawDigits(ctx, strAmmo, boxWidth, boxX);
                    };
                    HudBar.prototype.drawKeys = function (ctx, dest, camera) {
                        var boxX = dest.dWidth / 1.3333;
                        var boxY = dest.dWidth / 80;
                        var keyTab = [camera.goldKey, camera.silverKey];
                        for (var i = 0; i < keyTab.length; i++) {
                            if (keyTab[i]) {
                                var key = i == 0 ? _Config__WEBPACK_IMPORTED_MODULE_0__.hudImgNames.KEY_GOLD : _Config__WEBPACK_IMPORTED_MODULE_0__.hudImgNames.KEY_SILVER;
                                var imgData = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.HUD.pos[key];
                                var dWidth = imgData.w * this.sizeMultip;
                                var dHeight = imgData.h * this.sizeMultip;
                                var dx = boxX;
                                var dy = dest.dy + boxY + (i * (dHeight + this.sizeMultip));
                                ctx.drawImage(this.img, imgData.x, imgData.y, imgData.w, imgData.h, dx, dy, dWidth, dHeight);
                            }
                        }
                    };
                    HudBar.prototype.drawWeapon = function (ctx, dest, camera) {
                        var boxWidth = dest.dWidth / 5.818;
                        var boxX = dest.dWidth / 1.285;
                        var boxY = dest.dWidth / 35.5;
                        var wID = camera.weapon.weaponID;
                        var weapon = wID == 1 ? _Config__WEBPACK_IMPORTED_MODULE_0__.hudImgNames.WEAPON_KNIFE : wID == 2 ? _Config__WEBPACK_IMPORTED_MODULE_0__.hudImgNames.WEAPON_PISTOL : wID == 3 ? _Config__WEBPACK_IMPORTED_MODULE_0__.hudImgNames.WEAPON_MACHINEGUN : _Config__WEBPACK_IMPORTED_MODULE_0__.hudImgNames.WEAPON_CHAINGUN;
                        var imgData = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.HUD.pos[weapon];
                        var dWidth = imgData.w * this.sizeMultip;
                        var dHeight = imgData.h * this.sizeMultip;
                        var dx = boxX + boxWidth - dWidth;
                        var dy = dest.dy + boxY;
                        ctx.drawImage(this.img, imgData.x, imgData.y, imgData.w, imgData.h, dx, dy, dWidth, dHeight);
                    };
                    HudBar.prototype.drawFace = function (ctx, dest) {
                        var boxX = dest.dWidth / 2.353;
                        var boxY = dest.dWidth / 64;
                        var imgData = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.HUD.pos[this.hudBarFace.currentGraphic];
                        var dWidth = imgData.w * this.sizeMultip;
                        var dHeight = imgData.h * this.sizeMultip;
                        var dx = boxX;
                        var dy = dest.dy + boxY;
                        ctx.drawImage(this.img, imgData.x, imgData.y, imgData.w, imgData.h, dx, dy, dWidth, dHeight);
                    };
                    HudBar.prototype.drawDigits = function (ctx, digits, boxWidth, boxX) {
                        for (var i = 0; i < digits.length; i++) {
                            var digit = digits[i];
                            var imgData = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.HUD.pos[digit];
                            var dWidth = imgData.w * this.sizeMultip;
                            var dHeight = imgData.h * this.sizeMultip;
                            var dx = boxX + boxWidth - ((i + 1) * dWidth);
                            ctx.drawImage(this.img, imgData.x, imgData.y, imgData.w, imgData.h, dx, this.dyDigit, dWidth, dHeight);
                        }
                    };
                    return HudBar;
                }(_Element2D__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HudBar);


                /***/
}),

/***/ "./src/components/HUDElements/HudBarFace.ts":
/*!**************************************************!*\
  !*** ./src/components/HUDElements/HudBarFace.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/components/Config.ts");

                var HudBarFace = /** @class */ (function () {
                    function HudBarFace() {
                        this.faceStatusIndex = 1;
                        this.direction = 2;
                        this.currentGraphic = undefined;
                        this.nextChange = Date.now() + _Config__WEBPACK_IMPORTED_MODULE_0__.config.faceRandomRangeSpeed * 4;
                        this.randomGraphic();
                    }
                    HudBarFace.prototype.randomGraphic = function () {
                        var _this = this;
                        if (this.faceStatusIndex == 8) {
                            this.direction = 2;
                        }
                        else {
                            var tab = [1, 2, 3].filter(function (e) { return e != _this.direction; });
                            this.direction = tab[Math.floor(Math.random() * tab.length)];
                        }
                        this.currentGraphic = _Config__WEBPACK_IMPORTED_MODULE_0__.hudImgNames.FACE.replace("_dir", "_" + this.direction).replace("_id", "_" + this.faceStatusIndex);
                        this.nextChange = Date.now() + (Math.random() * _Config__WEBPACK_IMPORTED_MODULE_0__.config.faceRandomRangeSpeed * 2) - _Config__WEBPACK_IMPORTED_MODULE_0__.config.faceRandomRangeSpeed + _Config__WEBPACK_IMPORTED_MODULE_0__.config.faceBaseChangeSpeed;
                    };
                    HudBarFace.prototype.checkFaceStatus = function (camera) {
                        if (camera.hp > 90)
                            return 1;
                        else if (camera.hp > 75)
                            return 2;
                        else if (camera.hp > 60)
                            return 3;
                        else if (camera.hp > 45)
                            return 4;
                        else if (camera.hp > 30)
                            return 5;
                        else if (camera.hp > 15)
                            return 6;
                        else if (camera.hp > 0)
                            return 7;
                        else
                            return 8;
                    };
                    HudBarFace.prototype.update = function (ctx, camera) {
                        var stat = this.checkFaceStatus(camera);
                        if (stat != this.faceStatusIndex) {
                            this.faceStatusIndex = stat;
                            this.randomGraphic();
                        }
                        else if (Date.now() > this.nextChange) {
                            this.randomGraphic();
                        }
                    };
                    return HudBarFace;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HudBarFace);


                /***/
}),

/***/ "./src/components/HUDElements/Menu.ts":
/*!********************************************!*\
  !*** ./src/components/HUDElements/Menu.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/components/Config.ts");
/* harmony import */ var _Library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Library */ "./src/components/Library.ts");


                var Menu = /** @class */ (function () {
                    function Menu() {
                        // this.screenID = MenuScreens.CHOOSE_DIFFICULTY;
                        this.screenID = _Config__WEBPACK_IMPORTED_MODULE_0__.MenuScreens.BLUEINFO;
                        this.img = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.MENU;
                        this.fontImg = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.MENUFONT;
                        this.optionsLettersCanvas = document.createElement('canvas');
                        this.episodesLettersCanvas = document.createElement('canvas');
                        this.difficultiesLettersCanvas = document.createElement('canvas');
                        this.lettersPrepared = false;
                        this.lettersSize = 0;
                        this.selectedOption = 1;
                        this.currentOptions = undefined;
                        this.enableSpecial = false;
                        this.pistolTexture = _Config__WEBPACK_IMPORTED_MODULE_0__.MenuImgNames.MENU_PISTOL_1;
                        this.pistolAnimChange = 1000;
                        this.lastPistolChange = 0;
                        this.sizeMultip = 0;
                    }
                    Menu.prototype.prepareLettersCanvas = function (ctx, enableSpecial) {
                        var _this = this;
                        if (enableSpecial === void 0) { enableSpecial = false; }
                        this.lettersSize = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.MENUFONT.pos.A.h * this.sizeMultip / 2;
                        var fastCTX1 = this.optionsLettersCanvas.getContext('2d');
                        this.optionsLettersCanvas.width = ctx.canvas.width;
                        this.optionsLettersCanvas.height = ctx.canvas.height;
                        Object.keys(_Config__WEBPACK_IMPORTED_MODULE_0__.MenuOptionsOptions).forEach(function (e, i) {
                            var optionInfo = _Config__WEBPACK_IMPORTED_MODULE_0__.MenuOptionsOptions[e];
                            var color = enableSpecial && optionInfo.special ? _Config__WEBPACK_IMPORTED_MODULE_0__.menuFontColors.special : optionInfo.active == false ? _Config__WEBPACK_IMPORTED_MODULE_0__.menuFontColors.inactive : optionInfo.special ? _Config__WEBPACK_IMPORTED_MODULE_0__.menuFontColors.special : _Config__WEBPACK_IMPORTED_MODULE_0__.menuFontColors.active;
                            _this.drawLetters(fastCTX1, _this.toMenuString(e), ctx.canvas.width / 3.2, ctx.canvas.height / 3.571, i, color);
                        });
                        var fastCTX2 = this.difficultiesLettersCanvas.getContext('2d');
                        this.difficultiesLettersCanvas.width = ctx.canvas.width;
                        this.difficultiesLettersCanvas.height = ctx.canvas.height;
                        this.drawLetters(fastCTX2, 'How tought are you?', ctx.canvas.width / 4.6, ctx.canvas.height / 2.94, 0, _Config__WEBPACK_IMPORTED_MODULE_0__.menuFontColors.special);
                        Object.keys(_Config__WEBPACK_IMPORTED_MODULE_0__.MenuDifficultyOptions).forEach(function (e, i) {
                            var color = _Config__WEBPACK_IMPORTED_MODULE_0__.menuFontColors.active;
                            _this.drawLetters(fastCTX2, e, ctx.canvas.width / 4.05, ctx.canvas.height / 2, i, color);
                        });
                        this.lettersPrepared = true;
                    };
                    Menu.prototype.draw = function (ctx, deltaTime) {
                        this.sizeMultip = ctx.canvas.width / 320;
                        ctx.beginPath();
                        switch (this.screenID) {
                            case _Config__WEBPACK_IMPORTED_MODULE_0__.MenuScreens.BLUEINFO:
                                this.drawBlueScreen(ctx);
                                break;
                            case _Config__WEBPACK_IMPORTED_MODULE_0__.MenuScreens.GAME_TITLE:
                                this.drawGameTitleScreen(ctx);
                                break;
                            case _Config__WEBPACK_IMPORTED_MODULE_0__.MenuScreens.CREDITS:
                                this.drawCreditsScreen(ctx);
                                break;
                            case _Config__WEBPACK_IMPORTED_MODULE_0__.MenuScreens.OPTIONS:
                                this.drawOptionsScreen(ctx);
                                break;
                            case _Config__WEBPACK_IMPORTED_MODULE_0__.MenuScreens.CHOOSE_EPISODE:
                                this.drawChooseEpisodeScreen(ctx);
                                break;
                            case _Config__WEBPACK_IMPORTED_MODULE_0__.MenuScreens.CHOOSE_DIFFICULTY:
                                this.drawChooseDifficultyScreen(ctx);
                                break;
                        }
                        if (this.lettersPrepared == false) {
                            this.prepareLettersCanvas(ctx);
                        }
                        ctx.closePath();
                        this.checkToChangePistol();
                    };
                    Menu.prototype.checkToChangePistol = function () {
                        if (Date.now() > this.lastPistolChange) {
                            this.pistolTexture = this.pistolTexture == _Config__WEBPACK_IMPORTED_MODULE_0__.MenuImgNames.MENU_PISTOL_1 ? _Config__WEBPACK_IMPORTED_MODULE_0__.MenuImgNames.MENU_PISTOL_2 : _Config__WEBPACK_IMPORTED_MODULE_0__.MenuImgNames.MENU_PISTOL_1;
                            this.lastPistolChange = this.pistolAnimChange + Date.now();
                        }
                    };
                    Menu.prototype.drawBlueScreen = function (ctx) {
                        var imgData = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.MENU.pos[_Config__WEBPACK_IMPORTED_MODULE_0__.MenuImgNames.BLUE_SCREEN_INFO];
                        var dx = ctx.canvas.width / 1.481;
                        var dy = ctx.canvas.height / 1.818;
                        this.drawBackground(ctx, 'rgb(32,168,252)');
                        this.drawMyImg(ctx, imgData, dx, dy);
                    };
                    Menu.prototype.drawGameTitleScreen = function (ctx) {
                        var imgData = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.MENU.pos[_Config__WEBPACK_IMPORTED_MODULE_0__.MenuImgNames.GAME_TITLE_SCREEN];
                        var dx = 0;
                        var dy = 0;
                        this.drawMyImg(ctx, imgData, dx, dy);
                    };
                    Menu.prototype.drawCreditsScreen = function (ctx) {
                        var imgData = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.MENU.pos[_Config__WEBPACK_IMPORTED_MODULE_0__.MenuImgNames.CREDITS_SCREEN];
                        var dx = 0;
                        var dy = 0;
                        this.drawMyImg(ctx, imgData, dx, dy);
                    };
                    Menu.prototype.drawOptionsScreen = function (ctx) {
                        var tab = [];
                        Object.keys(_Config__WEBPACK_IMPORTED_MODULE_0__.MenuOptionsOptions).map(function (e) { return tab.push(_Config__WEBPACK_IMPORTED_MODULE_0__.MenuOptionsOptions[e]); });
                        this.currentOptions = Array.from(tab);
                        this.drawBackground(ctx, 'rgb(147,14,0)');
                        this.drawBlackTopLine(ctx);
                        this.drawBanner(ctx, _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.MENU.pos[_Config__WEBPACK_IMPORTED_MODULE_0__.MenuImgNames.TITLE_OPTIONS]);
                        this.drawShadowBox(ctx, 177 * this.sizeMultip, 135 * this.sizeMultip, ctx.canvas.height / 3.846);
                        this.drawDownInfo(ctx);
                        this.drawLettersCanvas(ctx, this.optionsLettersCanvas, ctx.canvas.height / 3.571);
                        this.drawPickPistol(ctx, ctx.canvas.width / 4.3537, (ctx.canvas.height / 3.571) + ((this.selectedOption - 1) * this.lettersSize));
                    };
                    Menu.prototype.drawChooseEpisodeScreen = function (ctx) {
                        this.drawBackground(ctx, 'rgb(147,14,0)');
                        this.drawShadowBox(ctx, 307 * this.sizeMultip, 161 * this.sizeMultip, ctx.canvas.height / 10.52);
                        this.drawDownInfo(ctx);
                    };
                    Menu.prototype.drawChooseDifficultyScreen = function (ctx) {
                        var tab = [];
                        Object.keys(_Config__WEBPACK_IMPORTED_MODULE_0__.MenuDifficultyOptions).map(function (e) { return tab.push(_Config__WEBPACK_IMPORTED_MODULE_0__.MenuDifficultyOptions[e]); });
                        this.currentOptions = Array.from(tab);
                        this.drawBackground(ctx, 'rgb(147,14,0)');
                        this.drawShadowBox(ctx, 224 * this.sizeMultip, 66 * this.sizeMultip, ctx.canvas.height / 2.2222);
                        this.drawDownInfo(ctx);
                        this.drawLettersCanvas(ctx, this.difficultiesLettersCanvas, ctx.canvas.height / 2);
                        this.drawPickPistol(ctx, ctx.canvas.width / 6.122, ctx.canvas.height / 2 + ((this.selectedOption - 1) * this.lettersSize));
                        this.drawDifficultyFace(ctx, ctx.canvas.width / 1.38, ctx.canvas.height / 1.87);
                    };
                    Menu.prototype.drawDifficultyFace = function (ctx, dX, dY) {
                        var imgData = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.MENU.pos[_Config__WEBPACK_IMPORTED_MODULE_0__.MenuImgNames.DIFFICULTY_FACE.replace('_id', "_" + this.selectedOption)];
                        var dWidth = imgData.w * this.sizeMultip;
                        var dHeight = imgData.h * this.sizeMultip;
                        ctx.drawImage(this.img, imgData.x, imgData.y, imgData.w, imgData.h, dX, dY, dWidth, dHeight);
                    };
                    Menu.prototype.drawLettersCanvas = function (ctx, lettCanvas, lettStart) {
                        ctx.beginPath();
                        ctx.globalAlpha = 0.7;
                        ctx.drawImage(lettCanvas, 0, 0);
                        ctx.globalAlpha = 1;
                        var pickedY = lettStart + (this.lettersSize * (this.selectedOption - 1));
                        ctx.drawImage(lettCanvas, 0, pickedY, ctx.canvas.width, this.lettersSize, 0, pickedY, ctx.canvas.width, this.lettersSize);
                        ctx.closePath();
                    };
                    Menu.prototype.drawPickPistol = function (ctx, dX, dY) {
                        var imgData = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.MENU.pos[this.pistolTexture];
                        var dWidth = imgData.w * this.sizeMultip;
                        var dHeight = imgData.h * this.sizeMultip;
                        ctx.drawImage(this.img, imgData.x, imgData.y, imgData.w, imgData.h, dX, dY, dWidth, dHeight);
                    };
                    Menu.prototype.toMenuString = function (txt) {
                        while (txt.indexOf('_') != -1)
                            txt = txt.replace('_', ' ');
                        var tab = txt.split(' ');
                        tab.map(function (e) { return e[0].toUpperCase() + e.substring(1).toLowerCase(); });
                        return tab.join(' ');
                    };
                    Menu.prototype.drawBackground = function (ctx, color) {
                        ctx.fillStyle = color;
                        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    };
                    Menu.prototype.drawMyImg = function (ctx, imgData, dx, dy) {
                        var dWidth = imgData.w * this.sizeMultip;
                        var dHeight = imgData.h * this.sizeMultip;
                        ctx.drawImage(this.img, imgData.x, imgData.y, imgData.w, imgData.h, dx, dy, dWidth, dHeight);
                    };
                    Menu.prototype.drawBlackTopLine = function (ctx) {
                        var x = 0;
                        var y = ctx.canvas.height / 20;
                        var width = ctx.canvas.width;
                        var height = ctx.canvas.height / 8.3333333;
                        ctx.fillStyle = 'black';
                        ctx.fillRect(x, y, width, height);
                        var smallY = ctx.canvas.height / 6.25;
                        var smallHeight = ctx.canvas.height / 200;
                        ctx.fillStyle = 'rgb(107,10,0)';
                        ctx.fillRect(x, smallY, width, smallHeight);
                    };
                    Menu.prototype.drawBanner = function (ctx, imgData) {
                        var dx = (160 - (imgData.w / 2)) * this.sizeMultip;
                        var dy = ctx.canvas.height / 33.3333;
                        this.drawMyImg(ctx, imgData, dx, dy);
                    };
                    Menu.prototype.drawShadowBox = function (ctx, dWidth, dHeight, dy) {
                        var border = ctx.canvas.width / 320;
                        var dx = ctx.canvas.width / 2 - dWidth / 2;
                        // rgb(229,22,0)   rgb(121,10,0)   rgb(94,9,0)
                        ctx.fillStyle = 'rgb(229,22,0)';
                        ctx.fillRect(dx - border, dy - border, dWidth + 2 * border, dHeight + 2 * border);
                        ctx.fillStyle = 'rgb(121,10,0)';
                        ctx.fillRect(dx - border, dy - border, dWidth + border, dHeight + border);
                        ctx.fillStyle = 'rgb(94,9,0)';
                        ctx.fillRect(dx, dy, dWidth, dHeight);
                    };
                    Menu.prototype.drawDownInfo = function (ctx) {
                        var imgData = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.MENU.pos[_Config__WEBPACK_IMPORTED_MODULE_0__.MenuImgNames.OPTIONS_DOWN_BANNER];
                        var dWidth = imgData.w * this.sizeMultip;
                        var dHeight = imgData.h * this.sizeMultip;
                        var dx = ctx.canvas.width / 2 - dWidth / 2;
                        var dy = ctx.canvas.height / 1.0416;
                        ctx.drawImage(this.img, imgData.x, imgData.y, imgData.w, imgData.h, dx, dy, dWidth, dHeight);
                    };
                    Menu.prototype.drawLetters = function (ctx, letters, dX, dY, column, color) {
                        var pos = 0;
                        var fastCanvas = document.createElement('canvas');
                        fastCanvas.width = ctx.canvas.width;
                        fastCanvas.height = ctx.canvas.height;
                        var fastCTX = fastCanvas.getContext('2d');
                        //@ts-ignore
                        fastCTX.mozImageSmoothingEnabled = false;
                        fastCTX.imageSmoothingEnabled = false;
                        var secfastCanvas = document.createElement('canvas');
                        secfastCanvas.width = ctx.canvas.width;
                        secfastCanvas.height = ctx.canvas.height;
                        var secfastCTX = secfastCanvas.getContext('2d');
                        for (var i = 0; i < letters.length; i++) {
                            var letter = letters[i];
                            if (letter == ' ') {
                                pos += 16 * this.sizeMultip / 2;
                            }
                            else {
                                var imgData = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphics2DData.MENUFONT.pos[letter];
                                var dWidth = imgData.w * this.sizeMultip / 2;
                                var dHeight = imgData.h * this.sizeMultip / 2;
                                var newDX = dX + pos;
                                var newDY = dY + column * dHeight;
                                fastCTX.beginPath();
                                fastCTX.drawImage(this.fontImg, imgData.x, imgData.y, imgData.w, imgData.h, newDX, newDY, dWidth, dHeight);
                                fastCTX.closePath();
                                pos += dWidth;
                            }
                        }
                        secfastCTX.beginPath();
                        secfastCTX.fillStyle = color;
                        secfastCTX.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                        secfastCTX.globalCompositeOperation = 'destination-in';
                        secfastCTX.drawImage(fastCanvas, 0, 0);
                        secfastCTX.closePath();
                        ctx.beginPath();
                        ctx.drawImage(secfastCanvas, 0, 0);
                        ctx.closePath();
                    };
                    return Menu;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


                /***/
}),

/***/ "./src/components/HUDElements/Scene2D.ts":
/*!***********************************************!*\
  !*** ./src/components/HUDElements/Scene2D.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _helpers_FPS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/FPS */ "./src/components/HUDElements/helpers/FPS.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config */ "./src/components/Config.ts");
/* harmony import */ var _HUD__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HUD */ "./src/components/HUDElements/HUD.ts");
/* harmony import */ var _helpers_RedPixel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/RedPixel */ "./src/components/HUDElements/helpers/RedPixel.ts");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./src/components/HUDElements/Menu.ts");
/* harmony import */ var _Library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Library */ "./src/components/Library.ts");
/* harmony import */ var _MyAudio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MyAudio */ "./src/components/MyAudio.ts");







                var Scene2D = /** @class */ (function () {
                    function Scene2D(parent, root, scene3D) {
                        this.root = root;
                        this.parent = parent;
                        this.camera = parent.camera;
                        this.scene3D = scene3D;
                        this.scene = document.createElement('canvas');
                        this.scene.id = "hudCanvas";
                        this.fastCanvas = document.createElement('canvas');
                        this.fastCTX = this.fastCanvas.getContext('2d');
                        this.ctx = this.scene.getContext('2d');
                        this.HUD = new _HUD__WEBPACK_IMPORTED_MODULE_2__["default"](this);
                        this.FPS = new _helpers_FPS__WEBPACK_IMPORTED_MODULE_0__["default"]();
                        this.Menu = new _Menu__WEBPACK_IMPORTED_MODULE_4__["default"]();
                        this.sceneStatus = _Config__WEBPACK_IMPORTED_MODULE_1__.Scene2DStatus.MENU;
                        this.renderColorScreen = true;
                        this.colorScreenToRender = _Config__WEBPACK_IMPORTED_MODULE_1__.Scene2DColors.HIT;
                        this.colorScreenOpacity = 0;
                        this.smoothAction = false;
                        this.currAlpha = 1;
                        this.targetReached = false;
                        this.actionOnChange = undefined;
                        this.alphaChangeSpeed = 1.75;
                        this.deathCam = false;
                        this.removePixels = false;
                        this.randomRedPixels = [];
                        this.leftPixels = [];
                        this.pixelsPerFrameDivider = 100;
                        this.pixelsPerFrame = 20;
                        root.appendChild(this.scene);
                        this.fixSize(document.body.clientWidth, document.body.clientHeight);
                        // this.fixSize();
                    }
                    Scene2D.prototype.enableSmoothAction = function (action) {
                        this.smoothAction = true;
                        this.currAlpha = 1;
                        this.targetReached = false;
                        this.actionOnChange = action;
                    };
                    Scene2D.prototype.render = function (deltaTime) {
                        this.baseSettings();
                        // this.FPS.updateFPS(1 / deltaTime);
                        if (this.smoothAction)
                            this.smoothCanvasAction(this.ctx, deltaTime);
                        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
                        this.fastCTX.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
                        this.ctx.beginPath();
                        this.ctx.globalAlpha = this.currAlpha;
                        if (this.sceneStatus == _Config__WEBPACK_IMPORTED_MODULE_1__.Scene2DStatus.MENU) {
                            this.Menu.draw(this.fastCTX, deltaTime);
                        }
                        else {
                            this.HUD.drawHUD(this.fastCTX, deltaTime, this.camera, this.scene3D, this.parent.levelCreator);
                            // this.drawHUD();
                            if (this.deathCam == false) {
                                if (this.renderColorScreen) {
                                    this.drawColorScreen(this.fastCTX, deltaTime);
                                }
                                if (this.randomRedPixels.length > 0) {
                                    this.drawRanomRedPixels(this.fastCTX);
                                }
                            }
                            else {
                                this.drawRanomRedPixels(this.fastCTX);
                            }
                        }
                        this.ctx.drawImage(this.fastCanvas, 0, 0);
                        this.ctx.closePath();
                    };
                    Scene2D.prototype.smoothCanvasAction = function (ctx, deltaTime) {
                        var alpha;
                        if (this.targetReached == false) {
                            alpha = Math.max(0, Math.min(1, this.currAlpha - this.alphaChangeSpeed * deltaTime));
                            if (alpha == 0) {
                                this.targetReached = true;
                                if (this.actionOnChange)
                                    this.actionOnChange();
                            }
                            ;
                        }
                        else {
                            alpha = Math.max(0, Math.min(1, this.currAlpha + this.alphaChangeSpeed * deltaTime));
                            if (alpha == 1) {
                                this.smoothAction = false;
                            }
                        }
                        this.currAlpha = alpha;
                    };
                    Scene2D.prototype.drawRanomRedPixels = function (ctx) {
                        var _this = this;
                        var anyLeft = this.removePixels ? this.removeRedPixels() : this.addRedPixels();
                        ctx.fillStyle = 'red';
                        if (anyLeft) {
                            this.randomRedPixels.forEach(function (e) {
                                ctx.fillRect(Math.max(_this.scene3D.marginHorizontal, _this.scene3D.marginHorizontal + (e.x * e.width) - 1), Math.max(_this.scene3D.marginVertical, _this.scene3D.marginVertical + (e.y * e.width) - 1), e.width + 1.1, e.width + 1.1);
                            });
                        }
                        else {
                            if (this.removePixels == false) {
                                ctx.fillRect(this.scene3D.marginHorizontal, this.scene3D.marginVertical, this.scene3D.scene.width, this.scene3D.scene.height);
                                this.parent.restartLvl();
                            }
                            else {
                                this.deathCam = false;
                                this.parent.inRestartProcess = false;
                            }
                        }
                    };
                    Scene2D.prototype.addRedPixels = function () {
                        for (var i = 0; i < this.pixelsPerFrame; i++) {
                            if (this.leftPixels.length > 0) {
                                var rand = Math.floor(Math.random() * this.leftPixels.length);
                                this.randomRedPixels.push(this.leftPixels[rand]);
                                this.leftPixels.splice(rand, 1);
                            }
                            else {
                                return false;
                            }
                        }
                        return true;
                    };
                    Scene2D.prototype.removeRedPixels = function () {
                        for (var i = 0; i < this.pixelsPerFrame; i++) {
                            if (this.randomRedPixels.length > 0) {
                                var rand = Math.floor(Math.random() * this.randomRedPixels.length);
                                this.randomRedPixels.splice(rand, 1);
                            }
                            else {
                                return false;
                            }
                        }
                        return true;
                    };
                    Scene2D.prototype.drawColorScreen = function (ctx, deltaTime) {
                        this.colorScreenOpacity -= 12 * deltaTime;
                        var opacity = Math.max(0, (1 - Math.abs(this.colorScreenOpacity)) / 4);
                        ctx.globalAlpha = opacity;
                        ctx.fillStyle = this.colorScreenToRender;
                        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                        ctx.fill();
                        ctx.globalAlpha = 1;
                        if (opacity <= 0) {
                            this.renderColorScreen = false;
                        }
                    };
                    Scene2D.prototype.baseSettings = function () {
                        this.ctx.canvas.width = this.scene.clientWidth;
                        this.ctx.canvas.height = this.scene.clientHeight;
                        //@ts-ignore
                        this.ctx.webkitImageSmoothingEnabled = false;
                        //@ts-ignore
                        this.ctx.mozImageSmoothingEnabled = false;
                        this.ctx.imageSmoothingEnabled = false;
                        this.fastCanvas.width = this.ctx.canvas.width;
                        this.fastCanvas.height = this.ctx.canvas.height;
                        //@ts-ignore
                        this.fastCTX.mozImageSmoothingEnabled = false;
                        this.fastCTX.imageSmoothingEnabled = false;
                    };
                    Scene2D.prototype.fixSize = function (width, height) {
                        var size1 = { w: width, h: 10 / 16 * width };
                        var size2 = { w: 16 / 10 * height, h: height };
                        if (size1.w < size2.w) {
                            this.scene.style.width = (size1.w - 10) + "px";
                            this.scene.style.height = (size1.h - 10) + "px";
                        }
                        else {
                            this.scene.style.width = (size2.w - 10) + "px";
                            this.scene.style.height = (size2.h - 10) + "px";
                        }
                        var barH = this.scene.clientWidth / 8;
                        var marginHorizontal = this.scene.clientWidth / 45;
                        var marginVertical = (this.scene.clientHeight - barH) / 54;
                        var scene1 = { w: this.scene.clientWidth - 2 * marginHorizontal, h: (1 / 2) * (this.scene.clientWidth - 2 * marginHorizontal) };
                        var scene2 = { w: (2 / 1) * ((this.scene.clientHeight - barH) - 2 * marginVertical), h: (this.scene.clientHeight - barH) - 2 * marginVertical };
                        var sceneW;
                        var sceneH;
                        if (scene1.w < scene2.w) {
                            sceneW = scene1.w;
                            sceneH = scene1.h;
                            marginVertical = ((this.scene.clientHeight - barH) - sceneH) / 2;
                        }
                        else {
                            sceneW = scene2.w;
                            sceneH = scene2.h;
                            marginHorizontal = (this.scene.clientWidth - sceneW) / 2;
                        }
                        this.scene3D.marginHorizontal = marginHorizontal;
                        this.scene3D.marginVertical = marginVertical;
                        this.scene3D.scene.style.width = sceneW + 'px';
                        this.scene3D.scene.style.height = sceneH + 'px';
                        this.scene3D.goodWidth = sceneW;
                        this.scene3D.goodHeight = sceneH;
                        this.scene3D.scene.width = sceneW;
                        this.scene3D.scene.height = sceneH;
                        this.scene3D.updateCamera();
                        this.deathCam ? this.fixRedPixels() : null;
                    };
                    Scene2D.prototype.fixRedPixels = function () {
                        var width = this.scene3D.scene.width / _Config__WEBPACK_IMPORTED_MODULE_1__.config.redPixelsAmountInX;
                        this.randomRedPixels.flat().map(function (e) { return e.width = width; });
                    };
                    Scene2D.prototype.setColorScreenRender = function (color, startOpacity) {
                        if (startOpacity === void 0) { startOpacity = 0.1; }
                        this.renderColorScreen = true;
                        this.colorScreenToRender = color;
                        this.colorScreenOpacity = 1 - startOpacity;
                    };
                    Scene2D.prototype.enableDeathCam = function () {
                        if (this.deathCam == false) {
                            this.randomRedPixels = [];
                            this.leftPixels = [];
                            this.deathCam = true;
                            this.removePixels = false;
                            var totalPixels = _Config__WEBPACK_IMPORTED_MODULE_1__.config.redPixelsAmountInX * (_Config__WEBPACK_IMPORTED_MODULE_1__.config.redPixelsAmountInX / 2);
                            var width = this.scene3D.scene.width / _Config__WEBPACK_IMPORTED_MODULE_1__.config.redPixelsAmountInX;
                            for (var i = 0; i < _Config__WEBPACK_IMPORTED_MODULE_1__.config.redPixelsAmountInX; i++) {
                                for (var j = 0; j < _Config__WEBPACK_IMPORTED_MODULE_1__.config.redPixelsAmountInX / 2; j++) {
                                    this.leftPixels.push(new _helpers_RedPixel__WEBPACK_IMPORTED_MODULE_3__["default"](i, j, width));
                                }
                            }
                            this.pixelsPerFrame = totalPixels / this.pixelsPerFrameDivider;
                        }
                    };
                    Scene2D.prototype.disableDeathCam = function () {
                        this.removePixels = true;
                    };
                    Scene2D.prototype.moveDown = function () {
                        if (this.inMovebleScreen() && this.smoothAction == false) {
                            this.Menu.selectedOption++;
                            _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_1__.AudioNames.MENU_MOVE);
                            if (this.Menu.selectedOption > Object.keys(this.Menu.currentOptions).length) {
                                this.Menu.selectedOption = 1;
                            }
                            else if (this.checkThisDisabled(this.Menu.selectedOption)) {
                                this.moveDown();
                            }
                        }
                    };
                    Scene2D.prototype.moveUp = function () {
                        if (this.inMovebleScreen() && this.smoothAction == false) {
                            this.Menu.selectedOption--;
                            _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_1__.AudioNames.MENU_MOVE);
                            if (this.Menu.selectedOption < 1) {
                                this.Menu.selectedOption = Object.keys(this.Menu.currentOptions).length;
                            }
                            else if (this.checkThisDisabled(this.Menu.selectedOption)) {
                                this.moveUp();
                            }
                        }
                    };
                    Scene2D.prototype.enter = function () {
                        var _this = this;
                        if (this.smoothAction == false) {
                            if (this.sceneStatus == _Config__WEBPACK_IMPORTED_MODULE_1__.Scene2DStatus.MENU) {
                                switch (this.Menu.screenID) {
                                    case _Config__WEBPACK_IMPORTED_MODULE_1__.MenuScreens.BLUEINFO: {
                                        _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_1__.AudioNames.THEME_SPLASH);
                                        this.enableSmoothAction(function () { _this.Menu.screenID = _Config__WEBPACK_IMPORTED_MODULE_1__.MenuScreens.GAME_TITLE; });
                                        break;
                                    }
                                    case _Config__WEBPACK_IMPORTED_MODULE_1__.MenuScreens.GAME_TITLE: {
                                        this.enableSmoothAction(function () { _this.Menu.screenID = _Config__WEBPACK_IMPORTED_MODULE_1__.MenuScreens.CREDITS; });
                                        break;
                                    }
                                    case _Config__WEBPACK_IMPORTED_MODULE_1__.MenuScreens.CREDITS: {
                                        _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.stopAll();
                                        _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_1__.AudioNames.THEME_MENU);
                                        this.Menu.lettersPrepared = false;
                                        this.enableSmoothAction(function () { _this.Menu.screenID = _Config__WEBPACK_IMPORTED_MODULE_1__.MenuScreens.OPTIONS; });
                                        break;
                                    }
                                    case _Config__WEBPACK_IMPORTED_MODULE_1__.MenuScreens.OPTIONS: {
                                        _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_1__.AudioNames.MENU_SELECT);
                                        if (this.Menu.selectedOption == _Config__WEBPACK_IMPORTED_MODULE_1__.MenuOptionsOptions.NEW_GAME.id) {
                                            this.Menu.lettersPrepared = false;
                                            this.enableSmoothAction(function () { _this.Menu.screenID = _Config__WEBPACK_IMPORTED_MODULE_1__.MenuScreens.CHOOSE_DIFFICULTY; _this.Menu.selectedOption = 3; });
                                        }
                                        else if (this.Menu.selectedOption == _Config__WEBPACK_IMPORTED_MODULE_1__.MenuOptionsOptions.BACK_TO_GAME.id) {
                                            this.enableSmoothAction(function () { _this.sceneStatus = _Config__WEBPACK_IMPORTED_MODULE_1__.Scene2DStatus.GAME; _this.Menu.screenID = _Config__WEBPACK_IMPORTED_MODULE_1__.MenuScreens.OPTIONS; _this.Menu.selectedOption = 1; });
                                            _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.stopAll();
                                            _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_1__.AudioNames.THEME_LEVEL);
                                        }
                                        else {
                                            window.location.reload();
                                        }
                                        break;
                                    }
                                    case _Config__WEBPACK_IMPORTED_MODULE_1__.MenuScreens.CHOOSE_DIFFICULTY: {
                                        _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.stopAll();
                                        _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_1__.AudioNames.THEME_LEVEL);
                                        _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_1__.AudioNames.MENU_SELECT);
                                        this.parent.levelCreator.setDifficulty(this.Menu.selectedOption);
                                        this.parent.createLevel(JSON.stringify(_Library__WEBPACK_IMPORTED_MODULE_5__["default"].instance.levels.level1), true);
                                        this.enableSmoothAction(function () {
                                            _this.sceneStatus = _Config__WEBPACK_IMPORTED_MODULE_1__.Scene2DStatus.GAME;
                                            _this.HUD.startLoader();
                                            _this.Menu.screenID = _Config__WEBPACK_IMPORTED_MODULE_1__.MenuScreens.OPTIONS;
                                            _this.Menu.selectedOption = 1;
                                        });
                                        break;
                                    }
                                }
                            }
                            else {
                                if (this.HUD.status == _Config__WEBPACK_IMPORTED_MODULE_1__.HUDStatus.ENDSCREEN) {
                                    this.Menu.prepareLettersCanvas(this.ctx, false);
                                    this.enableSmoothAction(function () { _this.sceneStatus = _Config__WEBPACK_IMPORTED_MODULE_1__.Scene2DStatus.MENU; _this.Menu.screenID = _Config__WEBPACK_IMPORTED_MODULE_1__.MenuScreens.OPTIONS; _this.Menu.selectedOption = 1; _this.Menu.enableSpecial = false; });
                                    _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.stopAll();
                                    _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_1__.AudioNames.THEME_MENU);
                                }
                            }
                        }
                    };
                    Scene2D.prototype.checkThisDisabled = function (id) {
                        var it = this.Menu.currentOptions.find(function (e) { return e.id == id; });
                        if (this.Menu.enableSpecial == true && it.special) {
                            return false;
                        }
                        else {
                            return !it.active;
                        }
                    };
                    Scene2D.prototype.inMovebleScreen = function () {
                        if (this.Menu.screenID == _Config__WEBPACK_IMPORTED_MODULE_1__.MenuScreens.OPTIONS || this.Menu.screenID == _Config__WEBPACK_IMPORTED_MODULE_1__.MenuScreens.CHOOSE_EPISODE || this.Menu.screenID == _Config__WEBPACK_IMPORTED_MODULE_1__.MenuScreens.CHOOSE_DIFFICULTY) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    };
                    Scene2D.prototype.enableOptions = function () {
                        var _this = this;
                        if (this.sceneStatus != _Config__WEBPACK_IMPORTED_MODULE_1__.Scene2DStatus.MENU) {
                            _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.stopAll();
                            _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_1__.AudioNames.THEME_MENU);
                            this.Menu.lettersPrepared = false;
                            this.enableSmoothAction(function () {
                                _this.sceneStatus = _Config__WEBPACK_IMPORTED_MODULE_1__.Scene2DStatus.MENU;
                                _this.Menu.selectedOption = 1;
                                _this.Menu.enableSpecial = true;
                                _this.Menu.screenID = _Config__WEBPACK_IMPORTED_MODULE_1__.MenuScreens.OPTIONS;
                                _this.Menu.prepareLettersCanvas(_this.ctx, true);
                            });
                        }
                    };
                    return Scene2D;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scene2D);


                /***/
}),

/***/ "./src/components/HUDElements/helpers/Crosshair.ts":
/*!*********************************************************!*\
  !*** ./src/components/HUDElements/helpers/Crosshair.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Element2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element2D */ "./src/components/HUDElements/Element2D.ts");
                var __extends = (undefined && undefined.__extends) || (function () {
                    var extendStatics = function (d, b) {
                        extendStatics = Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
                        return extendStatics(d, b);
                    };
                    return function (d, b) {
                        if (typeof b !== "function" && b !== null)
                            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                        extendStatics(d, b);
                        function __() { this.constructor = d; }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                })();

                var Crosshair = /** @class */ (function (_super) {
                    __extends(Crosshair, _super);
                    function Crosshair() {
                        var _this = _super.call(this) || this;
                        _this.color = 'red';
                        _this.size = 10;
                        return _this;
                    }
                    Crosshair.prototype.update = function (ctx) {
                        ctx.rect(ctx.canvas.width / 2 - (this.size / 2), ctx.canvas.height / 2 - (this.size / 2), this.size, this.size);
                        ctx.fillStyle = 'red';
                        ctx.fill();
                    };
                    return Crosshair;
                }(_Element2D__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Crosshair);


                /***/
}),

/***/ "./src/components/HUDElements/helpers/FPS.ts":
/*!***************************************************!*\
  !*** ./src/components/HUDElements/helpers/FPS.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
                var FPS = /** @class */ (function () {
                    function FPS() {
                        this.div = document.createElement('div');
                        this.div.id = "FPS";
                        document.body.appendChild(this.div);
                    }
                    FPS.prototype.updateFPS = function (fps) {
                        this.div.innerHTML = Math.floor(fps).toString() + " fps";
                    };
                    return FPS;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FPS);


                /***/
}),

/***/ "./src/components/HUDElements/helpers/RedPixel.ts":
/*!********************************************************!*\
  !*** ./src/components/HUDElements/helpers/RedPixel.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
                var RedPixel = /** @class */ (function () {
                    function RedPixel(x, y, width) {
                        this.x = x;
                        this.y = y;
                        this.width = width;
                    }
                    return RedPixel;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedPixel);


                /***/
}),

/***/ "./src/components/Library.ts":
/*!***********************************!*\
  !*** ./src/components/Library.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _MyAudio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAudio */ "./src/components/MyAudio.ts");
                var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
                    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
                    return new (P || (P = Promise))(function (resolve, reject) {
                        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
                        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
                        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };
                var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
                    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                    function verb(n) { return function (v) { return step([n, v]); }; }
                    function step(op) {
                        if (f) throw new TypeError("Generator is already executing.");
                        while (_) try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                            if (y = 0, t) op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0: case 1: t = op; break;
                                case 4: _.label++; return { value: op[1], done: false };
                                case 5: _.label++; y = op[1]; op = [0]; continue;
                                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                                    if (t[2]) _.ops.pop();
                                    _.trys.pop(); continue;
                            }
                            op = body.call(thisArg, _);
                        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
                        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
                    }
                };

                var Library = /** @class */ (function () {
                    function Library() {
                        this.shaders = {
                            vertShader: null,
                            fragShader: null
                        };
                        this.graphics = {
                            WALL: null,
                            ENEMY: null,
                            DOG: null,
                            WEAPON: null,
                            OBJECT: null,
                            HUD: null,
                            PLAYER: null,
                            MAPCREATOR: null,
                            MENU: null,
                            MENUFONT: null,
                            ENDFONT: null
                        };
                        this.levels = {
                            level1: null
                        };
                        this.data = {
                            graphicsData: null,
                            graphics2DData: null,
                            animationsData: null
                        };
                        this.audio = new _MyAudio__WEBPACK_IMPORTED_MODULE_0__["default"]();
                    }
                    Library.prototype.Load = function () {
                        var _this = this;
                        return new Promise(function (resolve, reject) {
                            _this.LoadShaders()
                                .then(function () {
                                    resolve();
                                });
                        });
                    };
                    Library.prototype.LoadShaders = function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var vertS, vertF;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, __webpack_require__(/*! ../shaders/shader.vert */ "./src/shaders/shader.vert")];
                                    case 1:
                                        vertS = _b.sent();
                                        return [4 /*yield*/, __webpack_require__(/*! ../shaders/shader.frag */ "./src/shaders/shader.frag")];
                                    case 2:
                                        vertF = _b.sent();
                                        this.shaders.vertShader = vertS;
                                        this.shaders.fragShader = vertF;
                                        return [4 /*yield*/, this.LoadGraphics()];
                                    case 3:
                                        _b.sent();
                                        return [4 /*yield*/, this.LoadData()];
                                    case 4:
                                        _b.sent();
                                        return [4 /*yield*/, this.LoadLevels()];
                                    case 5:
                                        _b.sent();
                                        return [4 /*yield*/, _MyAudio__WEBPACK_IMPORTED_MODULE_0__["default"].instance.LoadAudios()];
                                    case 6:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    };
                    Library.prototype.LoadGraphics = function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var renderTab, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, i, img;
                            var _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
                            return __generator(this, function (_10) {
                                switch (_10.label) {
                                    case 0:
                                        renderTab = [];
                                        _c = (_b = renderTab).push;
                                        _z = { name: "WALL" };
                                        return [4 /*yield*/, __webpack_require__(/*! ../assets/wallsMain.png */ "./src/assets/wallsMain.png")["default"]];
                                    case 1:
                                        _c.apply(_b, [(_z.src = _10.sent(), _z)]);
                                        _e = (_d = renderTab).push;
                                        _0 = { name: "ENEMY" };
                                        return [4 /*yield*/, __webpack_require__(/*! ../assets/enemy.png */ "./src/assets/enemy.png")["default"]];
                                    case 2:
                                        _e.apply(_d, [(_0.src = _10.sent(), _0)]);
                                        _g = (_f = renderTab).push;
                                        _1 = { name: "DOG" };
                                        return [4 /*yield*/, __webpack_require__(/*! ../assets/dog.png */ "./src/assets/dog.png")["default"]];
                                    case 3:
                                        _g.apply(_f, [(_1.src = _10.sent(), _1)]);
                                        _j = (_h = renderTab).push;
                                        _2 = { name: "WEAPON" };
                                        return [4 /*yield*/, __webpack_require__(/*! ../assets/weapons.png */ "./src/assets/weapons.png")["default"]];
                                    case 4:
                                        _j.apply(_h, [(_2.src = _10.sent(), _2)]);
                                        _l = (_k = renderTab).push;
                                        _3 = { name: "OBJECT" };
                                        return [4 /*yield*/, __webpack_require__(/*! ../assets/objects.png */ "./src/assets/objects.png")["default"]];
                                    case 5:
                                        _l.apply(_k, [(_3.src = _10.sent(), _3)]);
                                        _o = (_m = renderTab).push;
                                        _4 = { name: "HUD" };
                                        return [4 /*yield*/, __webpack_require__(/*! ../assets/hud.png */ "./src/assets/hud.png")["default"]];
                                    case 6:
                                        _o.apply(_m, [(_4.src = _10.sent(), _4)]);
                                        _q = (_p = renderTab).push;
                                        _5 = { name: "PLAYER" };
                                        return [4 /*yield*/, __webpack_require__(/*! ../assets/player.png */ "./src/assets/player.png")["default"]];
                                    case 7:
                                        _q.apply(_p, [(_5.src = _10.sent(), _5)]);
                                        _s = (_r = renderTab).push;
                                        _6 = { name: "MAPCREATOR" };
                                        return [4 /*yield*/, __webpack_require__(/*! ../assets/mapCreator.png */ "./src/assets/mapCreator.png")["default"]];
                                    case 8:
                                        _s.apply(_r, [(_6.src = _10.sent(), _6)]);
                                        _u = (_t = renderTab).push;
                                        _7 = { name: "MENU" };
                                        return [4 /*yield*/, __webpack_require__(/*! ../assets/menu.png */ "./src/assets/menu.png")["default"]];
                                    case 9:
                                        _u.apply(_t, [(_7.src = _10.sent(), _7)]);
                                        _w = (_v = renderTab).push;
                                        _8 = { name: "MENUFONT" };
                                        return [4 /*yield*/, __webpack_require__(/*! ../assets/menuFont.png */ "./src/assets/menuFont.png")["default"]];
                                    case 10:
                                        _w.apply(_v, [(_8.src = _10.sent(), _8)]);
                                        _y = (_x = renderTab).push;
                                        _9 = { name: "ENDFONT" };
                                        return [4 /*yield*/, __webpack_require__(/*! ../assets/endFont.png */ "./src/assets/endFont.png")["default"]];
                                    case 11:
                                        _y.apply(_x, [(_9.src = _10.sent(), _9)]);
                                        i = 0;
                                        _10.label = 12;
                                    case 12:
                                        if (!(i < renderTab.length)) return [3 /*break*/, 15];
                                        img = new Image();
                                        img.src = renderTab[i].src;
                                        return [4 /*yield*/, img.decode()];
                                    case 13:
                                        _10.sent();
                                        this.graphics[renderTab[i].name] = img;
                                        _10.label = 14;
                                    case 14:
                                        i++;
                                        return [3 /*break*/, 12];
                                    case 15: return [2 /*return*/];
                                }
                            });
                        });
                    };
                    Library.prototype.LoadData = function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var textureData, texture2DData, animationsData;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, __webpack_require__(/*! ../textureData.json */ "./src/textureData.json")];
                                    case 1:
                                        textureData = _b.sent();
                                        return [4 /*yield*/, __webpack_require__(/*! ../texture2DData.json */ "./src/texture2DData.json")];
                                    case 2:
                                        texture2DData = _b.sent();
                                        return [4 /*yield*/, __webpack_require__(/*! ../animationsData.json */ "./src/animationsData.json")];
                                    case 3:
                                        animationsData = _b.sent();
                                        this.data.graphicsData = textureData;
                                        this.data.graphics2DData = texture2DData;
                                        this.data.animationsData = animationsData;
                                        return [2 /*return*/];
                                }
                            });
                        });
                    };
                    Library.prototype.LoadLevels = function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var level1;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, __webpack_require__(/*! ../levels/Level1.json */ "./src/levels/Level1.json")];
                                    case 1:
                                        level1 = _b.sent();
                                        // let level1 = await require('../defaultMap.json');
                                        this.levels.level1 = level1;
                                        return [2 /*return*/];
                                }
                            });
                        });
                    };
                    var _a;
                    _a = Library;
                    Library.instance = new _a;
                    return Library;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Library);


                /***/
}),

/***/ "./src/components/Main.ts":
/*!********************************!*\
  !*** ./src/components/Main.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _game_Camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/Camera */ "./src/components/game/Camera.ts");
/* harmony import */ var _game_Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/Keyboard */ "./src/components/game/Keyboard.ts");
/* harmony import */ var _Library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Library */ "./src/components/Library.ts");
/* harmony import */ var _game_Scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/Scene */ "./src/components/game/Scene.ts");
/* harmony import */ var _mapCreator_MapCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapCreator/MapCreator */ "./src/components/mapCreator/MapCreator.ts");
/* harmony import */ var _game_LevelCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/LevelCreator */ "./src/components/game/LevelCreator.ts");
/* harmony import */ var _HUDElements_Scene2D__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HUDElements/Scene2D */ "./src/components/HUDElements/Scene2D.ts");
/* harmony import */ var _game_AnimationManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/AnimationManager */ "./src/components/game/AnimationManager.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Config */ "./src/components/Config.ts");
/* harmony import */ var _MyAudio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MyAudio */ "./src/components/MyAudio.ts");
                var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
                    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
                    return new (P || (P = Promise))(function (resolve, reject) {
                        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
                        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
                        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };
                var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
                    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                    function verb(n) { return function (v) { return step([n, v]); }; }
                    function step(op) {
                        if (f) throw new TypeError("Generator is already executing.");
                        while (_) try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                            if (y = 0, t) op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0: case 1: t = op; break;
                                case 4: _.label++; return { value: op[1], done: false };
                                case 5: _.label++; y = op[1]; op = [0]; continue;
                                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                                    if (t[2]) _.ops.pop();
                                    _.trys.pop(); continue;
                            }
                            op = body.call(thisArg, _);
                        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
                        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
                    }
                };






                //@ts-ignore
                // import defaultMap from '../levels/Level1.json'
                // import defaultMap from '../defaultMap3.json'




                var Main = /** @class */ (function () {
                    function Main(root) {
                        var _this = this;
                        this.root = root;
                        this.library = new _Library__WEBPACK_IMPORTED_MODULE_2__["default"]();
                        this.inRestartProcess = false;
                        _Library__WEBPACK_IMPORTED_MODULE_2__["default"].instance.Load().then(function () {
                            _this.camera = new _game_Camera__WEBPACK_IMPORTED_MODULE_0__["default"]();
                            _this.scene = new _game_Scene__WEBPACK_IMPORTED_MODULE_3__["default"](_this.root, _this.camera);
                            _this.Scene2D = new _HUDElements_Scene2D__WEBPACK_IMPORTED_MODULE_6__["default"](_this, _this.root, _this.scene);
                            _this.timeThen = 0;
                            _this.bodyEvents();
                            _this.creatorActive = false;
                            _this.levelCreated = false;
                            _this.scene.startProgram(_Library__WEBPACK_IMPORTED_MODULE_2__["default"].instance);
                            _this.animationManager = new _game_AnimationManager__WEBPACK_IMPORTED_MODULE_7__["default"](_Library__WEBPACK_IMPORTED_MODULE_2__["default"].instance.data);
                            _this.levelCreator = new _game_LevelCreator__WEBPACK_IMPORTED_MODULE_5__["default"](_this.scene, _this.camera, _this.animationManager);
                            _this.keyboard = new _game_Keyboard__WEBPACK_IMPORTED_MODULE_1__["default"](_this.camera, _this.animationManager, _this.levelCreator, _this.Scene2D);
                            _this.mapCreator = new _mapCreator_MapCreator__WEBPACK_IMPORTED_MODULE_4__["default"](_this, document.body, _this.keyboard);
                            _this.mapCreateBtn();
                            _this.animationFrame = requestAnimationFrame(_this.render.bind(_this));
                        });
                    }
                    Main.prototype.bodyEvents = function () {
                        var _this = this;
                        window.onresize = function (e) {
                            _this.Scene2D.fixSize(document.body.clientWidth, document.body.clientHeight);
                            _this.Scene2D.Menu.lettersPrepared = false;
                            _this.Scene2D.HUD.lettersPrepared = false;
                            if (_this.creatorActive) {
                                _this.mapCreator.updateFieldsSize();
                            }
                        };
                    };
                    Main.prototype.createLevel = function (data, newGame) {
                        if (data === void 0) { data = JSON.stringify(_Library__WEBPACK_IMPORTED_MODULE_2__["default"].instance.levels.level1); }
                        if (newGame === void 0) { newGame = false; }
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.levelCreated = false;
                                        console.log("NEW LEVEL CREATE");
                                        if (this.animationFrame) {
                                            cancelAnimationFrame(this.animationFrame);
                                        }
                                        return [4 /*yield*/, this.levelCreator.createLvl(data, newGame)];
                                    case 1:
                                        _a.sent();
                                        this.levelCreated = true;
                                        return [2 /*return*/];
                                }
                            });
                        });
                    };
                    Main.prototype.render = function (time) {
                        var _this = this;
                        if (time === void 0) { time = 0; }
                        if (this.creatorActive == false) {
                            var deltaTime_1 = time * 0.001 - this.timeThen;
                            this.timeThen = time * 0.001;
                            this.Scene2D.render(deltaTime_1);
                            this.scene.drawScene(deltaTime_1);
                            if ((this.camera.dead == false && this.Scene2D.deathCam == false) || this.Scene2D.sceneStatus == _Config__WEBPACK_IMPORTED_MODULE_8__.Scene2DStatus.MENU) {
                                this.keyboard.update(deltaTime_1, this.levelCreator.objects);
                                if (this.Scene2D.sceneStatus == _Config__WEBPACK_IMPORTED_MODULE_8__.Scene2DStatus.GAME && this.levelCreated && this.Scene2D.smoothAction == false && this.Scene2D.HUD.status == _Config__WEBPACK_IMPORTED_MODULE_8__.HUDStatus.GAMEPLAY) {
                                    this.levelCreator.objects.doors.forEach(function (e) { return e.update(deltaTime_1); });
                                    this.levelCreator.objects.pickables.forEach(function (e) {
                                        e.toDelete ? _this.removePickable(e) : e.update(_this.camera);
                                    });
                                    this.levelCreator.objects.enemies.forEach(function (e) {
                                        e.update(deltaTime_1, _this.camera);
                                    });
                                    this.levelCreator.objects.furnitures.forEach(function (e) {
                                        e.update(deltaTime_1, _this.camera);
                                    });
                                    this.levelCreator.objects.walls.forEach(function (e) { return e.update(deltaTime_1); });
                                    this.levelCreator.objects.end.forEach(function (e) { return e.update(deltaTime_1, _this.camera); });
                                    this.onCameraHit();
                                    this.animationManager.update();
                                }
                            }
                            else {
                                if (this.inRestartProcess == false && this.camera.dead == true) {
                                    this.onDeadCamera(deltaTime_1);
                                }
                            }
                        }
                        this.animationFrame = requestAnimationFrame(this.render.bind(this));
                    };
                    Main.prototype.onDeadCamera = function (deltaTime) {
                        var _this = this;
                        var look = this.camera.smoothLookAt(this.camera.killer, deltaTime);
                        if (look) {
                            setTimeout(function (e) {
                                if (_this.camera.dead == true) {
                                    _this.Scene2D.enableDeathCam();
                                }
                            }, 1000);
                        }
                        else {
                            this.Scene2D.setColorScreenRender(_Config__WEBPACK_IMPORTED_MODULE_8__.Scene2DColors.HIT, 1);
                        }
                    };
                    Main.prototype.removePickable = function (pick) {
                        this.levelCreator.objects.pickables = this.levelCreator.objects.pickables.filter(function (e) { return e != pick; });
                        this.scene.remove(pick);
                        this.Scene2D.setColorScreenRender(_Config__WEBPACK_IMPORTED_MODULE_8__.Scene2DColors.PICK);
                    };
                    Main.prototype.onCameraHit = function () {
                        if (this.camera.hitted) {
                            this.camera.hitted = false;
                            this.Scene2D.setColorScreenRender(_Config__WEBPACK_IMPORTED_MODULE_8__.Scene2DColors.HIT);
                        }
                    };
                    Main.prototype.mapCreateBtn = function () {
                        var _this = this;
                        var btn = document.createElement('div');
                        btn.innerHTML = "MAP CREATOR";
                        btn.id = "mapCreatorBtn";
                        btn.onclick = function () {
                            _this.mapCreator.active();
                            _this.creatorActive = !_this.creatorActive;
                        };
                        document.body.appendChild(btn);
                    };
                    Main.prototype.radToDeg = function (rad) {
                        return rad * (180 / Math.PI);
                    };
                    Main.prototype.restartLvl = function () {
                        var _this = this;
                        if (this.inRestartProcess == false) {
                            this.inRestartProcess = true;
                            if (this.camera.lives > 0) {
                                setTimeout(function () {
                                    _this.levelCreator.createLvl(JSON.stringify(_Library__WEBPACK_IMPORTED_MODULE_2__["default"].instance.levels.level1));
                                    _this.Scene2D.disableDeathCam();
                                }, 1000);
                            }
                            else {
                                this.Scene2D.enableSmoothAction(function () {
                                    _this.camera.dead = false;
                                    _this.Scene2D.disableDeathCam();
                                    _this.camera.refresh();
                                    _this.Scene2D.Menu.enableSpecial = false;
                                    _this.Scene2D.Menu.lettersPrepared = false;
                                    _this.Scene2D.sceneStatus = _Config__WEBPACK_IMPORTED_MODULE_8__.Scene2DStatus.MENU;
                                    _this.Scene2D.Menu.screenID = _Config__WEBPACK_IMPORTED_MODULE_8__.MenuScreens.OPTIONS;
                                    _this.Scene2D.deathCam = false;
                                    _this.Scene2D.randomRedPixels = [];
                                    _MyAudio__WEBPACK_IMPORTED_MODULE_9__["default"].instance.stopAll();
                                    _MyAudio__WEBPACK_IMPORTED_MODULE_9__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_8__.AudioNames.THEME_MENU);
                                });
                            }
                        }
                    };
                    return Main;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);


                /***/
}),

/***/ "./src/components/MyAudio.ts":
/*!***********************************!*\
  !*** ./src/components/MyAudio.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
                var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
                    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
                    return new (P || (P = Promise))(function (resolve, reject) {
                        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
                        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
                        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                };
                var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
                    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                    function verb(n) { return function (v) { return step([n, v]); }; }
                    function step(op) {
                        if (f) throw new TypeError("Generator is already executing.");
                        while (_) try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                            if (y = 0, t) op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0: case 1: t = op; break;
                                case 4: _.label++; return { value: op[1], done: false };
                                case 5: _.label++; y = op[1]; op = [0]; continue;
                                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                                    if (t[2]) _.ops.pop();
                                    _.trys.pop(); continue;
                            }
                            op = body.call(thisArg, _);
                        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
                        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
                    }
                };
                var MyAudio = /** @class */ (function () {
                    function MyAudio() {
                        this.sounds = {
                            P_AMMO: null,
                            P_MGUN: null,
                            P_CGUN: null,
                            P_FOOD: null,
                            P_MEDKIT: null,
                            P_LIFE: null,
                            T_CHEST: null,
                            T_CROSS: null,
                            T_CROWN: null,
                            T_CUP: null,
                            WSND0003: null,
                            WSND0002: null,
                            WSND0015: null,
                            WSND0030: null,
                            S_100: null,
                            S_BONUSC: null,
                            DSWKNIF: null,
                            WSND0005: null,
                            WSND0004: null,
                            WSND0006: null,
                            WSND0021: null,
                            WSND0014: null,
                            DSDEATH: null,
                            WSND0001: null,
                            WSND0029: null,
                            WSND0016: null,
                            WSND0012: null,
                            WSND0013: null,
                            WSND0034: null,
                            WSND0035: null,
                            WSND0039: null,
                            WSND0040: null,
                            WSND0041: null,
                            WSND0042: null,
                            WSND0000: null,
                            M_SELECT: null,
                            M_MOVE: null,
                            THEME_SPLASH: null,
                            THEME_MENU: null,
                            THEME_LEVEL: null
                        };
                    }
                    MyAudio.prototype.LoadAudios = function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var renderTab, i, name_1, _b, _c;
                            var _d;
                            var _this = this;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        renderTab = [];
                                        i = 0;
                                        _e.label = 1;
                                    case 1:
                                        if (!(i < Object.keys(this.sounds).length)) return [3 /*break*/, 4];
                                        name_1 = Object.keys(this.sounds)[i];
                                        _c = (_b = renderTab).push;
                                        _d = { name: name_1 };
                                        return [4 /*yield*/, __webpack_require__("./src/audio sync recursive ^\\.\\/.*$")("./" + name_1 + "." + (name_1.indexOf("THEME") == -1 ? "wav" : "mp3")).default];
                                    case 2:
                                        _c.apply(_b, [(_d.src = _e.sent(), _d)]);
                                        _e.label = 3;
                                    case 3:
                                        i++;
                                        return [3 /*break*/, 1];
                                    case 4:
                                        ;
                                        renderTab.forEach(function (e) {
                                            var audio = new Audio(e.src);
                                            audio.volume = e.name.indexOf("THEME") == -1 ? 0.25 : 0.05;
                                            _this.sounds[e.name] = audio;
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    };
                    MyAudio.prototype.playAudio = function (name, loop) {
                        if (loop === void 0) { loop = false; }
                        if (this.sounds[name].currentTime != 0) {
                            this.stopAudio(name);
                            this.restartAudio(name);
                        }
                        this.sounds[name].play();
                        if (loop || name.indexOf("THEME") != -1) {
                            this.sounds[name].loop = true;
                        }
                    };
                    MyAudio.prototype.stopAudio = function (name) {
                        if (this.sounds[name].currentTime != 0) {
                            this.sounds[name].pause();
                            this.sounds[name].loop = false;
                        }
                    };
                    MyAudio.prototype.restartAudio = function (name) {
                        this.sounds[name].currentTime = 0;
                    };
                    MyAudio.prototype.stopAll = function () {
                        for (var name_2 in this.sounds) {
                            this.stopAudio(name_2);
                        }
                    };
                    var _a;
                    _a = MyAudio;
                    MyAudio.instance = new _a;
                    return MyAudio;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyAudio);


                /***/
}),

/***/ "./src/components/game/Animation.ts":
/*!******************************************!*\
  !*** ./src/components/game/Animation.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
                var Animation = /** @class */ (function () {
                    function Animation(textures, offset, index) {
                        if (index === void 0) { index = 0; }
                        this.textures = textures;
                        this.offset = offset;
                        this.index = index;
                        this.fullPlayed = false;
                    }
                    Animation.prototype.play = function (obj) {
                        var type = obj.texture;
                        obj.textureSet(type, this.textures[this.index]);
                        this.index++;
                        if (this.index >= this.textures.length) {
                            this.index = 0;
                            this.fullPlayed = true;
                        }
                        ;
                    };
                    return Animation;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animation);


                /***/
}),

/***/ "./src/components/game/AnimationManager.ts":
/*!*************************************************!*\
  !*** ./src/components/game/AnimationManager.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animation */ "./src/components/game/Animation.ts");
/* harmony import */ var _objects_Weapon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/Weapon */ "./src/components/game/objects/Weapon.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Config */ "./src/components/Config.ts");
/* harmony import */ var _objects_Enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects/Enemy */ "./src/components/game/objects/Enemy.ts");




                var AnimationManager = /** @class */ (function () {
                    function AnimationManager(data) {
                        this.graphicsData = data.graphicsData;
                        this.animationsData = data.animationsData;
                        this.animations = [];
                    }
                    AnimationManager.prototype.update = function () {
                        this.animations.forEach(function (e) {
                            if (Date.now() > e.lastPlay + e.animation.offset) {
                                var funRet = e.function != null ? e.function(e) : true;
                                if (funRet) {
                                    e.lastPlay = Date.now();
                                    e.animation.play(e.object);
                                }
                            }
                        });
                    };
                    AnimationManager.prototype.add = function (object, animName, func) {
                        if (func === void 0) { func = null; }
                        if (this.animations.find(function (e) { return e.object == object; }) == undefined) {
                            var anim = void 0;
                            if (object instanceof _objects_Weapon__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                                var tab = this.animationsData[animName].textures.map(function (e) { return e.replace("_id", "_" + object.weaponID); });
                                var offset = 1000 / object.fireRate / (object.auto ? 2 : 4);
                                anim = new _Animation__WEBPACK_IMPORTED_MODULE_0__["default"](tab, offset);
                            }
                            else if (object instanceof _objects_Enemy__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                                var tab = this.animationsData[animName].textures.map(function (e) { return e.replace("_angle", "_" + object.angleStatus); });
                                anim = new _Animation__WEBPACK_IMPORTED_MODULE_0__["default"](tab, this.animationsData[animName].offset);
                            }
                            else {
                                anim = new _Animation__WEBPACK_IMPORTED_MODULE_0__["default"](this.animationsData[animName].textures, this.animationsData[animName].offset);
                            }
                            this.animations.push({
                                object: object,
                                animName: animName,
                                animation: anim,
                                lastPlay: 0,
                                function: func
                            });
                        }
                    };
                    AnimationManager.prototype.remove = function (object) {
                        this.animations = this.animations.filter(function (e) { return e.object != object; });
                    };
                    AnimationManager.prototype.change = function (object, animName, func) {
                        if (func === void 0) { func = null; }
                        var ob = this.animations.find(function (e) { return e.object == object; });
                        if (ob == undefined || ob.animName != animName) {
                            if (object instanceof _objects_Weapon__WEBPACK_IMPORTED_MODULE_1__["default"] && ob != undefined) {
                                this.weaponAnimation(ob, object, animName, func);
                            }
                            else {
                                this.changeAnimation(object, animName, func);
                            }
                        }
                    };
                    AnimationManager.prototype.changeAnimation = function (object, animName, func) {
                        if (func === void 0) { func = null; }
                        this.remove(object);
                        this.add(object, animName, func);
                    };
                    AnimationManager.prototype.changeEnemyAnimationTextures = function (object) {
                        var ob = this.animations.find(function (e) { return e.object == object; });
                        if (ob != undefined && ob.animName == _Config__WEBPACK_IMPORTED_MODULE_2__.animNames.ENEMY_RUN || ob.animName == _Config__WEBPACK_IMPORTED_MODULE_2__.animNames.ENEMY_STAND) {
                            var tab = this.animationsData[ob.animName].textures.map(function (e) { return e.replace("_angle", "_" + object.angleStatus); });
                            ob.animation.textures = tab;
                        }
                    };
                    AnimationManager.prototype.changeAnimFunction = function (object, func) {
                        var ob = this.animations.find(function (e) { return e.object == object; });
                        if (ob != undefined) {
                            ob.function = func;
                        }
                    };
                    AnimationManager.prototype.weaponAnimation = function (ob, weapon, animName, func) {
                        var _this = this;
                        if (func === void 0) { func = null; }
                        if (animName == _Config__WEBPACK_IMPORTED_MODULE_2__.animNames.WEAPON_SHOOT) {
                            if (weapon.auto || ob.animName == _Config__WEBPACK_IMPORTED_MODULE_2__.animNames.WEAPON_DEFAULT) {
                                var newFunc_1 = function (aD) {
                                    if (aD.animName == _Config__WEBPACK_IMPORTED_MODULE_2__.animNames.WEAPON_PICK) {
                                        if (aD.animation.index == 0 && aD.animation.fullPlayed == true) {
                                            weapon.changeStatus(_Config__WEBPACK_IMPORTED_MODULE_2__.weaponStatus.SHOOT);
                                            _this.changeAnimation(weapon, _Config__WEBPACK_IMPORTED_MODULE_2__.animNames.WEAPON_SHOOT, newFunc_1);
                                            return false;
                                        }
                                    }
                                    else if (aD.animName == _Config__WEBPACK_IMPORTED_MODULE_2__.animNames.WEAPON_SHOOT) {
                                        if (aD.animation.index == 0 && aD.animation.fullPlayed == true) {
                                            if (weapon.auto == false || weapon.forceStop || weapon.forceChange) {
                                                weapon.forceStop = false;
                                                weapon.changeStatus(_Config__WEBPACK_IMPORTED_MODULE_2__.weaponStatus.HIDE);
                                                _this.changeAnimation(weapon, _Config__WEBPACK_IMPORTED_MODULE_2__.animNames.WEAPON_HIDE, newFunc_1);
                                                return false;
                                            }
                                        }
                                        if (aD.animation.index == weapon.shootID || weapon.shootID == null) {
                                            if (weapon.auto == true || aD.animation.fullPlayed == false) {
                                                func(ob);
                                            }
                                        }
                                    }
                                    else if (aD.animName == _Config__WEBPACK_IMPORTED_MODULE_2__.animNames.WEAPON_HIDE && aD.animation.fullPlayed == true) {
                                        if (aD.animation.index == 0 && aD.animation.fullPlayed == true) {
                                            weapon.changeStatus(_Config__WEBPACK_IMPORTED_MODULE_2__.weaponStatus.DEFAULT);
                                            _this.changeAnimation(weapon, _Config__WEBPACK_IMPORTED_MODULE_2__.animNames.WEAPON_DEFAULT);
                                            weapon.onForceChange();
                                            return false;
                                        }
                                    }
                                    return true;
                                };
                                weapon.changeStatus(_Config__WEBPACK_IMPORTED_MODULE_2__.weaponStatus.PICK);
                                this.changeAnimation(weapon, _Config__WEBPACK_IMPORTED_MODULE_2__.animNames.WEAPON_PICK, newFunc_1);
                            }
                        }
                        else {
                            weapon.forceStop = true;
                        }
                    };
                    return AnimationManager;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimationManager);


                /***/
}),

/***/ "./src/components/game/Camera.ts":
/*!***************************************!*\
  !*** ./src/components/game/Camera.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/components/Config.ts");
/* harmony import */ var _boxHelper_Box2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boxHelper/Box2D */ "./src/components/game/boxHelper/Box2D.ts");
/* harmony import */ var _boxHelper_BoxLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boxHelper/BoxLine */ "./src/components/game/boxHelper/BoxLine.ts");
/* harmony import */ var _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boxHelper/BoxPoint */ "./src/components/game/boxHelper/BoxPoint.ts");
/* harmony import */ var _Matrix4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Matrix4 */ "./src/components/game/Matrix4.ts");
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Vector3 */ "./src/components/game/Vector3.ts");
/* harmony import */ var _MyAudio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MyAudio */ "./src/components/MyAudio.ts");







                var Camera = /** @class */ (function () {
                    function Camera() {
                        this.pos = new _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"](0, 0, 0);
                        this.rotation = new _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"](0, 0, 0);
                        this.movementSpeed = 4 * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize;
                        this.rotateSpeed = Math.PI / 1.6;
                        this.collisionRadius = 0.3 * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize;
                        this.FOV = Math.PI / 3;
                        this.zNear = 1;
                        this.zFar = 20 * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize;
                        this.projectionMatrix;
                        this.hp = 100;
                        this.ammo = 8;
                        this.points = 0;
                        this.lives = 3;
                        this.level = 1;
                        this.dead = false;
                        this.killer = undefined;
                        this.killCount = 0;
                        this.treasuresFound = 0;
                        this.hiddenWalls = 0;
                        this.startTime = Date.now();
                        this.hitted = false;
                        this.smoothRotateSpeed = 2;
                        this.goldKey = false;
                        this.silverKey = false;
                    }
                    Camera.prototype.updateProjectionMatrix = function (aspect) {
                        this.projectionMatrix = new _Matrix4__WEBPACK_IMPORTED_MODULE_4__["default"]().perspective(this.FOV, aspect, this.zNear, this.zFar);
                    };
                    Camera.prototype.move = function (dir, deltaTime, blockObj) {
                        var matRot = new _Matrix4__WEBPACK_IMPORTED_MODULE_4__["default"]().yRotate(this.rotation.y);
                        var deltaPos = dir.clone().normalize().multiply(-this.movementSpeed * deltaTime).transformMat4(matRot);
                        var futurePosX = this.pos.clone().translate(deltaPos.x, deltaPos.y, 0);
                        // this.pos.set(futurePosX)
                        this.pos.set(this.checkColliding(futurePosX, blockObj));
                        var futurePosZ = this.pos.clone().translate(0, 0, deltaPos.z);
                        // this.pos.set(futurePosZ)
                        this.pos.set(this.checkColliding(futurePosZ, blockObj));
                    };
                    Camera.prototype.rotate = function (dir, deltaTime) {
                        this.rotation.rotateY((this.rotateSpeed * deltaTime * dir.y));
                    };
                    Camera.prototype.angleTo = function (target) {
                        var lookDir = _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"].fromAngle(this.rotation.y);
                        var toTargetDir = target.clone().sub(this.pos).normalize();
                        var angleToLook = Math.atan2(lookDir.z, lookDir.x);
                        var angleToTarget = Math.atan2(toTargetDir.z, toTargetDir.x);
                        var diff = angleToLook - angleToTarget;
                        if (diff > Math.PI)
                            diff -= 2 * Math.PI;
                        if (diff < -Math.PI)
                            diff += 2 * Math.PI;
                        return diff;
                    };
                    Camera.prototype.isLookingAt = function (enemy) {
                        var lookDir = _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"].fromAngle(this.rotation.y);
                        var targetXDir = _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"].cross(lookDir, _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"].up()).normalize();
                        var enemyLeftPoint = enemy.pos.clone().sub(targetXDir.clone().multiply(enemy.width / 2));
                        var enemyRightPoint = enemy.pos.clone().add(targetXDir.clone().multiply(enemy.width / 2));
                        var angleLeft = this.angleTo(enemyLeftPoint);
                        var angleRight = this.angleTo(enemyRightPoint);
                        var look = 0 < angleLeft && angleLeft < Math.PI / 2 && -Math.PI / 2 < angleRight && angleRight < 0;
                        return look;
                    };
                    Camera.prototype.checkColliding = function (futPos, obj) {
                        var closestPointDistance = Infinity;
                        var closestOb = null;
                        var closestLine = null;
                        var futurePos = futPos.clone();
                        var futurePoint = new _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_3__["default"](futurePos.x, futurePos.z);
                        obj.forEach(function (ob) {
                            if (_Vector3__WEBPACK_IMPORTED_MODULE_5__["default"].distance(futurePos, ob.pos) <= _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize * 1.5) {
                                var box_1 = new _boxHelper_Box2D__WEBPACK_IMPORTED_MODULE_1__["default"](ob);
                                Object.keys(box_1.lines).forEach(function (line) {
                                    var len = box_1.lines[line].distanceToPoint(futurePoint);
                                    if (len < closestPointDistance) {
                                        closestPointDistance = len;
                                        closestOb = ob;
                                        closestLine = line;
                                    }
                                });
                                if (box_1.checkPointInBox(futurePoint)) {
                                    closestPointDistance = 0;
                                }
                            }
                        });
                        if (closestPointDistance <= this.collisionRadius) {
                            var box_2 = new _boxHelper_Box2D__WEBPACK_IMPORTED_MODULE_1__["default"](closestOb);
                            var closestPoint = void 0;
                            if (box_2.isCornerCollision(futurePoint)) {
                                var closestCorner_1;
                                var closestDst_1 = Infinity;
                                Object.keys(box_2.corners).forEach(function (point) {
                                    var dst = box_2.corners[point].distancePointToPoint(futurePoint);
                                    if (dst < closestDst_1) {
                                        closestDst_1 = dst;
                                        closestCorner_1 = point;
                                    }
                                });
                                var vec = this.pos.sub(new _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"](box_2.corners[closestCorner_1].x, 0, box_2.corners[closestCorner_1].z));
                                if (closestCorner_1 == "TOP_LEFT") {
                                    return Math.abs(vec.x) > Math.abs(vec.z) ?
                                        new _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"](box_2.corners[closestCorner_1].x - this.collisionRadius, 0, futurePoint.z) :
                                        new _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"](futurePoint.x, 0, box_2.corners[closestCorner_1].z - this.collisionRadius);
                                }
                                else if (closestCorner_1 == "TOP_RIGHT") {
                                    return Math.abs(vec.x) > Math.abs(vec.z) ?
                                        new _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"](box_2.corners[closestCorner_1].x + this.collisionRadius, 0, futurePoint.z) :
                                        new _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"](futurePoint.x, 0, box_2.corners[closestCorner_1].z - this.collisionRadius);
                                }
                                else if (closestCorner_1 == "BOTTOM_LEFT") {
                                    return Math.abs(vec.x) > Math.abs(vec.z) ?
                                        new _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"](box_2.corners[closestCorner_1].x - this.collisionRadius, 0, futurePoint.z) :
                                        new _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"](futurePoint.x, 0, box_2.corners[closestCorner_1].z + this.collisionRadius);
                                }
                                else if (closestCorner_1 == "BOTTOM_RIGHT") {
                                    return Math.abs(vec.x) > Math.abs(vec.z) ?
                                        new _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"](box_2.corners[closestCorner_1].x + this.collisionRadius, 0, futurePoint.z) :
                                        new _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"](futurePoint.x, 0, box_2.corners[closestCorner_1].z + this.collisionRadius);
                                }
                            }
                            else {
                                closestPoint = new _boxHelper_BoxLine__WEBPACK_IMPORTED_MODULE_2__["default"](futurePoint, new _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_3__["default"](closestOb.pos.x, closestOb.pos.z)).calcCrossPoint(box_2.lines[closestLine]);
                                if (closestPoint && closestLine) {
                                    if (closestLine == "TOP") {
                                        return new _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"](futurePos.x, 0, closestPoint.z - this.collisionRadius);
                                    }
                                    else if (closestLine == "BOTTOM") {
                                        return new _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"](futurePos.x, 0, closestPoint.z + this.collisionRadius);
                                    }
                                    else if (closestLine == "LEFT") {
                                        return new _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"](closestPoint.x - this.collisionRadius, 0, futurePos.z);
                                    }
                                    else if (closestLine == "RIGHT") {
                                        return new _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"](closestPoint.x + this.collisionRadius, 0, futurePos.z);
                                    }
                                }
                            }
                        }
                        return futurePos;
                    };
                    Camera.prototype.inRenderingRange = function (object) {
                        return _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"].distance(this.pos, object.pos) <= this.zFar * 1.1;
                    };
                    Camera.prototype.preparePlayer = function () {
                        this.ammo = 9;
                        this.hp = 100;
                    };
                    Camera.prototype.onShoot = function () {
                        if (this.weapon.needAmmo) {
                            this.ammo--;
                            if (this.ammo <= 0) {
                                this.ammo = 0;
                                this.weapon.forceChange = true;
                            }
                        }
                    };
                    Camera.prototype.addHP = function (hp) {
                        this.hp = Math.min(100, this.hp + hp);
                    };
                    Camera.prototype.addAMMO = function (ammo) {
                        if (this.ammo == 0) {
                            this.checkToRetriveWeapon();
                        }
                        _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_0__.AudioNames.PICKUP_AMMO);
                        this.ammo = Math.min(99, this.ammo + ammo);
                    };
                    Camera.prototype.addPOINTS = function (points, enemy) {
                        if (enemy === void 0) { enemy = false; }
                        this.points = this.points + points;
                        if (enemy == false) {
                            this.treasuresFound++;
                        }
                    };
                    Camera.prototype.addLIFE = function () {
                        this.lives += 1;
                    };
                    Camera.prototype.addKEY = function (type) {
                        if (type == 'SILVER') {
                            this.silverKey = true;
                        }
                        else {
                            this.goldKey = true;
                        }
                    };
                    Camera.prototype.extraLife = function () {
                        this.hp = 100;
                        this.addAMMO(25);
                        this.addLIFE();
                        this.treasuresFound++;
                    };
                    Camera.prototype.checkToRetriveWeapon = function () {
                        if (this.weapon.weaponID < this.weapon.highestWeaponID) {
                            for (var type in _Config__WEBPACK_IMPORTED_MODULE_0__.weaponTypes) {
                                if (this.weapon.highestWeaponID == _Config__WEBPACK_IMPORTED_MODULE_0__.weaponTypes[type].id) {
                                    this.weapon.changeWeapon(_Config__WEBPACK_IMPORTED_MODULE_0__.weaponTypes[type]);
                                }
                            }
                        }
                    };
                    Camera.prototype.hit = function (enemy) {
                        var dist = _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"].distance(this.pos, enemy.pos);
                        var correctlyHit;
                        if (dist < _Config__WEBPACK_IMPORTED_MODULE_0__.config.enemyMissRange) {
                            correctlyHit = this.isEnemyCorrectlyHit(100);
                        }
                        else {
                            correctlyHit = this.isEnemyCorrectlyHit(25);
                        }
                        if (correctlyHit) {
                            var dmg = Math.round((0.80 + Math.random() * 0.4) * enemy.DMG);
                            this.hp -= dmg;
                            this.hitted = true;
                            if (this.hp <= 0) {
                                this.hp = 0;
                                this.dead = true;
                                this.killer = enemy;
                                _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_0__.AudioNames.PLAYER_DEAD);
                            }
                            else {
                                _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_0__.AudioNames.PLAYER_HIT);
                            }
                        }
                    };
                    Camera.prototype.isEnemyCorrectlyHit = function (chance) {
                        var rand = Math.random() * 100;
                        if (rand < chance) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    };
                    Camera.prototype.smoothLookAt = function (obj, deltaTime) {
                        var dirToTarget = obj.pos.clone().sub(this.pos).normalize();
                        var angleToTarget = Math.atan2(dirToTarget.z, dirToTarget.x);
                        var dir = _Vector3__WEBPACK_IMPORTED_MODULE_5__["default"].fromAngle(this.rotation.y);
                        var angleToLook = Math.atan2(dir.z, dir.x);
                        var diff = angleToTarget - angleToLook;
                        var move = Math.sign(-diff) * Math.min(Math.abs(diff), this.smoothRotateSpeed * deltaTime);
                        this.rotation.rotateY(move);
                        var isLook = Math.abs(diff) <= 0.001;
                        return isLook;
                        // return move <= 0.01 ? true : false
                    };
                    Camera.prototype.respawn = function (newGame) {
                        if (newGame === void 0) { newGame = false; }
                        this.refresh();
                        this.lives = Math.max(0, this.lives - 1);
                        newGame ? this.lives = 3 : null;
                    };
                    Camera.prototype.refresh = function () {
                        this.hitted = false;
                        this.hp = 100;
                        this.ammo = 9;
                        this.points = 0;
                        this.killCount = 0;
                        this.treasuresFound = 0;
                        this.hiddenWalls = 0;
                        if (this.weapon) {
                            this.weapon.changeWeapon(_Config__WEBPACK_IMPORTED_MODULE_0__.weaponTypes.PISTOL);
                        }
                        this.dead = false;
                        this.startTime = Date.now();
                    };
                    return Camera;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Camera);


                /***/
}),

/***/ "./src/components/game/Keyboard.ts":
/*!*****************************************!*\
  !*** ./src/components/game/Keyboard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/components/Config.ts");
/* harmony import */ var _objects_Door__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/Door */ "./src/components/game/objects/Door.ts");
/* harmony import */ var _objects_Enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/Enemy */ "./src/components/game/objects/Enemy.ts");
/* harmony import */ var _Raycaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Raycaster */ "./src/components/game/Raycaster.ts");
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vector3 */ "./src/components/game/Vector3.ts");
/* harmony import */ var _objects_Wall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects/Wall */ "./src/components/game/objects/Wall.ts");
/* harmony import */ var _objects_End__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objects/End */ "./src/components/game/objects/End.ts");
/* harmony import */ var _MyAudio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MyAudio */ "./src/components/MyAudio.ts");
                var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
                    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
                        if (ar || !(i in from)) {
                            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                            ar[i] = from[i];
                        }
                    }
                    return to.concat(ar || Array.prototype.slice.call(from));
                };








                var KEYS;
                (function (KEYS) {
                    KEYS["left"] = "KeyA";
                    KEYS["up"] = "KeyW";
                    KEYS["right"] = "KeyD";
                    KEYS["down"] = "KeyS";
                    KEYS["shoot"] = "Space";
                    KEYS["action"] = "KeyE";
                    KEYS["Digit1"] = "Digit1";
                    KEYS["Digit2"] = "Digit2";
                    KEYS["Digit3"] = "Digit3";
                    KEYS["Digit4"] = "Digit4";
                    KEYS["ctrl"] = "ControlLeft";
                    KEYS["ArrowUp"] = "ArrowUp";
                    KEYS["ArrowDown"] = "ArrowDown";
                    KEYS["Escape"] = "Escape";
                })(KEYS || (KEYS = {}));
                var Keyboard = /** @class */ (function () {
                    function Keyboard(camera, animManager, levelCreator, scene2D) {
                        this.camera = camera;
                        this.animManager = animManager;
                        this.levelCreator = levelCreator;
                        this.objects = null;
                        this.scene2D = scene2D;
                        this.bools = {
                            up: { status: false, offset: 1, nextAction: 0 },
                            down: { status: false, offset: 1, nextAction: 0 },
                            left: { status: false, offset: 1, nextAction: 0 },
                            right: { status: false, offset: 1, nextAction: 0 },
                            shoot: { status: false, offset: 300, nextAction: 0 },
                            action: { status: false, offset: 300, nextAction: 0 },
                            ctrl: { status: false, offset: 1, nextAction: 0 },
                            ArrowUp: { status: false, offset: 300, nextAction: 0 },
                            ArrowDown: { status: false, offset: 300, nextAction: 0 },
                            Escape: { status: false, offset: 300, nextAction: 0 }
                        };
                        this.addEvents();
                    }
                    Keyboard.prototype.addEvents = function () {
                        var _this = this;
                        document.body.onkeydown = function (e) {
                            switch (e.code) {
                                case KEYS.up:
                                    _this.bools.up.status = true;
                                    break;
                                case KEYS.down:
                                    _this.bools.down.status = true;
                                    break;
                                case KEYS.left:
                                    _this.bools.left.status = true;
                                    break;
                                case KEYS.right:
                                    _this.bools.right.status = true;
                                    break;
                                case KEYS.shoot:
                                    if (_this.bools.shoot.status == false && _this.scene2D.sceneStatus == _Config__WEBPACK_IMPORTED_MODULE_0__.Scene2DStatus.GAME && _this.scene2D.HUD.status == _Config__WEBPACK_IMPORTED_MODULE_0__.HUDStatus.GAMEPLAY) {
                                        _this.startShoot();
                                    }
                                    _this.bools.shoot.status = true;
                                    break;
                                case KEYS.action:
                                    _this.bools.action.status = true;
                                    break;
                                case KEYS.Digit1:
                                    _this.camera.weapon.changeWeapon(_Config__WEBPACK_IMPORTED_MODULE_0__.weaponTypes.KNIFE);
                                    break;
                                case KEYS.Digit2:
                                    _this.camera.weapon.changeWeapon(_Config__WEBPACK_IMPORTED_MODULE_0__.weaponTypes.PISTOL);
                                    break;
                                case KEYS.Digit3:
                                    _this.camera.weapon.changeWeapon(_Config__WEBPACK_IMPORTED_MODULE_0__.weaponTypes.MACHINEGUN);
                                    break;
                                case KEYS.Digit4:
                                    _this.camera.weapon.changeWeapon(_Config__WEBPACK_IMPORTED_MODULE_0__.weaponTypes.CHAINGUN);
                                    break;
                                case KEYS.ctrl:
                                    _this.bools.ctrl.status = true;
                                    break;
                                case KEYS.ArrowUp:
                                    _this.bools.ArrowUp.status = true;
                                    break;
                                case KEYS.ArrowDown:
                                    _this.bools.ArrowDown.status = true;
                                    break;
                                case KEYS.Escape:
                                    _this.bools.Escape.status = true;
                                    break;
                            }
                        };
                        document.body.onkeyup = function (e) {
                            switch (e.code) {
                                case KEYS.up:
                                    _this.bools.up.status = false;
                                    break;
                                case KEYS.down:
                                    _this.bools.down.status = false;
                                    break;
                                case KEYS.left:
                                    _this.bools.left.status = false;
                                    break;
                                case KEYS.right:
                                    _this.bools.right.status = false;
                                    break;
                                case KEYS.shoot:
                                    if (_this.bools.shoot.status == true) {
                                        _this.endShoot();
                                    }
                                    _this.bools.shoot.status = false;
                                    break;
                                case KEYS.action:
                                    _this.bools.action.status = false;
                                    break;
                                case KEYS.ctrl:
                                    _this.bools.ctrl.status = false;
                                    break;
                                case KEYS.ArrowUp:
                                    _this.bools.ArrowUp.status = false;
                                    break;
                                case KEYS.ArrowDown:
                                    _this.bools.ArrowDown.status = false;
                                    break;
                                case KEYS.Escape:
                                    _this.bools.Escape.status = false;
                                    break;
                            }
                        };
                    };
                    Keyboard.prototype.deleteNoCollideFurnitures = function (objList) {
                        var tab = [];
                        objList.forEach(function (e) { return _Config__WEBPACK_IMPORTED_MODULE_0__.config.noCollideFurnitures.includes(e.textureName) == false ? tab.push(e) : null; });
                        return tab;
                    };
                    Keyboard.prototype.update = function (deltaTime, objects) {
                        var _this = this;
                        if (this.scene2D.smoothAction) {
                            return;
                        }
                        this.objects = objects;
                        var collisionObjects = __spreadArray(__spreadArray(__spreadArray([], objects.walls, true), objects.doors, true), this.deleteNoCollideFurnitures(objects.furnitures), true);
                        var actionObjects = __spreadArray(__spreadArray(__spreadArray([], objects.doors, true), objects.end, true), objects.walls.filter(function (e) { return e.secretWall == true; }), true);
                        if (this.bools.up.status) {
                            this.camera.move(_Vector3__WEBPACK_IMPORTED_MODULE_4__["default"].forward(), deltaTime, collisionObjects.filter(function (e) { return _this.camera.inRenderingRange(e); }));
                        }
                        if (this.bools.down.status) {
                            this.camera.move(_Vector3__WEBPACK_IMPORTED_MODULE_4__["default"].backward(), deltaTime, collisionObjects.filter(function (e) { return _this.camera.inRenderingRange(e); }));
                        }
                        if (this.bools.left.status) {
                            this.camera.rotate(_Vector3__WEBPACK_IMPORTED_MODULE_4__["default"].up(), deltaTime);
                        }
                        if (this.bools.right.status) {
                            this.camera.rotate(_Vector3__WEBPACK_IMPORTED_MODULE_4__["default"].down(), deltaTime);
                        }
                        if (this.scene2D.sceneStatus == _Config__WEBPACK_IMPORTED_MODULE_0__.Scene2DStatus.MENU || (this.scene2D.sceneStatus == _Config__WEBPACK_IMPORTED_MODULE_0__.Scene2DStatus.GAME && this.scene2D.HUD.status == _Config__WEBPACK_IMPORTED_MODULE_0__.HUDStatus.ENDSCREEN)) {
                            if (this.bools.shoot.status && Date.now() > this.bools.shoot.nextAction) {
                                this.scene2D.enter();
                                this.bools.shoot.nextAction = Date.now() + this.bools.shoot.offset;
                            }
                        }
                        else {
                            if (this.scene2D.HUD.status == _Config__WEBPACK_IMPORTED_MODULE_0__.HUDStatus.GAMEPLAY) {
                                if (this.bools.shoot.status && this.camera.weapon.status == _Config__WEBPACK_IMPORTED_MODULE_0__.weaponStatus.DEFAULT && this.camera.weapon.auto == true) {
                                    this.startShoot();
                                }
                            }
                        }
                        if (this.bools.action.status && Date.now() > this.bools.action.nextAction && this.scene2D.sceneStatus == _Config__WEBPACK_IMPORTED_MODULE_0__.Scene2DStatus.GAME && this.scene2D.HUD.status == _Config__WEBPACK_IMPORTED_MODULE_0__.HUDStatus.GAMEPLAY) {
                            actionObjects.forEach(function (e) {
                                if (e instanceof _objects_Door__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                                    var dist = _Vector3__WEBPACK_IMPORTED_MODULE_4__["default"].distance(_this.camera.pos, e.startPos);
                                    if (dist <= _Config__WEBPACK_IMPORTED_MODULE_0__.config.actionDistance) {
                                        e.move(_this.camera);
                                    }
                                }
                                else if (e instanceof _objects_Wall__WEBPACK_IMPORTED_MODULE_5__["default"]) {
                                    var dist = _Vector3__WEBPACK_IMPORTED_MODULE_4__["default"].distance(_this.camera.pos, e.pos);
                                    if (dist < _Config__WEBPACK_IMPORTED_MODULE_0__.config.actionDistance * 1.2) {
                                        e.move();
                                    }
                                }
                                else if (e instanceof _objects_End__WEBPACK_IMPORTED_MODULE_6__["default"]) {
                                    if (e.playerIn) {
                                        e.change();
                                        setTimeout(function () {
                                            _this.scene2D.enableSmoothAction(function () { _this.scene2D.HUD.status = _Config__WEBPACK_IMPORTED_MODULE_0__.HUDStatus.ENDSCREEN; _MyAudio__WEBPACK_IMPORTED_MODULE_7__["default"].instance.stopAll(); _MyAudio__WEBPACK_IMPORTED_MODULE_7__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_0__.AudioNames.THEME_SPLASH); });
                                        }, 500);
                                    }
                                }
                            });
                            this.bools.action.nextAction = Date.now() + this.bools.action.offset;
                        }
                        if (this.bools.ArrowUp.status && Date.now() > this.bools.ArrowUp.nextAction) {
                            this.scene2D.moveUp();
                            this.bools.ArrowUp.nextAction = Date.now() + this.bools.ArrowUp.offset;
                        }
                        if (this.bools.ArrowDown.status && Date.now() > this.bools.ArrowDown.nextAction) {
                            this.scene2D.moveDown();
                            this.bools.ArrowDown.nextAction = Date.now() + this.bools.ArrowDown.offset;
                        }
                        if (this.bools.Escape.status && Date.now() > this.bools.Escape.nextAction && this.scene2D.sceneStatus == _Config__WEBPACK_IMPORTED_MODULE_0__.Scene2DStatus.GAME && this.scene2D.HUD.status == _Config__WEBPACK_IMPORTED_MODULE_0__.HUDStatus.GAMEPLAY) {
                            this.scene2D.enableOptions();
                            this.bools.Escape.nextAction = Date.now() + this.bools.Escape.offset;
                        }
                    };
                    Keyboard.prototype.startShoot = function () {
                        this.animManager.change(this.camera.weapon, _Config__WEBPACK_IMPORTED_MODULE_0__.animNames.WEAPON_SHOOT, this.weaponShoot.bind(this));
                    };
                    Keyboard.prototype.weaponShoot = function () {
                        var _this = this;
                        _MyAudio__WEBPACK_IMPORTED_MODULE_7__["default"].instance.playAudio(this.camera.weapon.audioName);
                        var collisionObjects = __spreadArray(__spreadArray([], this.objects.walls, true), this.objects.doors, true);
                        var enemies = __spreadArray([], this.objects.enemies.filter(function (e) { return e.dead == false; }), true);
                        var raycaster = new _Raycaster__WEBPACK_IMPORTED_MODULE_3__["default"](this.camera);
                        var rayData = raycaster.create(this.camera.pos, this.camera.weapon.range, collisionObjects);
                        enemies.filter(function (e) { return e.dead == false; }).forEach(function (e) {
                            if (e instanceof _objects_Enemy__WEBPACK_IMPORTED_MODULE_2__["default"]) {
                                var dist = _Vector3__WEBPACK_IMPORTED_MODULE_4__["default"].distance(_this.camera.pos, e.pos);
                                if (dist <= rayData.dist) {
                                    var look = _this.camera.isLookingAt(e);
                                    if (look) {
                                        var isDead = e.hit(_this.camera.weapon.damage);
                                        if (isDead) {
                                            if (e.dropAmmo) {
                                                _this.levelCreator.addUsedClip(e.pos.clone());
                                            }
                                            _this.camera.addPOINTS(100, true);
                                            _this.camera.killCount++;
                                        }
                                        else {
                                            e.detectPlayer(_this.camera);
                                        }
                                    }
                                }
                                if (_this.camera.weapon.makeNoise) {
                                    if (e.spotted == false && dist < _Config__WEBPACK_IMPORTED_MODULE_0__.config.enemyDetectShootRange && e.dead == false) {
                                        e.detectPlayer(_this.camera);
                                    }
                                }
                            }
                        });
                        this.bools.shoot.nextAction = Date.now() + this.bools.shoot.offset;
                        this.camera.onShoot();
                    };
                    Keyboard.prototype.endShoot = function () {
                        this.animManager.change(this.camera.weapon, _Config__WEBPACK_IMPORTED_MODULE_0__.animNames.WEAPON_DEFAULT);
                    };
                    return Keyboard;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);


                /***/
}),

/***/ "./src/components/game/LevelCreator.ts":
/*!*********************************************!*\
  !*** ./src/components/game/LevelCreator.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/components/Config.ts");
/* harmony import */ var _objects_Door__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/Door */ "./src/components/game/objects/Door.ts");
/* harmony import */ var _objects_Enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/Enemy */ "./src/components/game/objects/Enemy.ts");
/* harmony import */ var _objects_Wall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects/Wall */ "./src/components/game/objects/Wall.ts");
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vector3 */ "./src/components/game/Vector3.ts");
/* harmony import */ var _objects_Weapon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects/Weapon */ "./src/components/game/objects/Weapon.ts");
/* harmony import */ var _objects_Pickable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objects/Pickable */ "./src/components/game/objects/Pickable.ts");
/* harmony import */ var _PathFinder_PathFinder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PathFinder/PathFinder */ "./src/components/game/PathFinder/PathFinder.ts");
/* harmony import */ var _objects_Furniture__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./objects/Furniture */ "./src/components/game/objects/Furniture.ts");
/* harmony import */ var _objects_End__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./objects/End */ "./src/components/game/objects/End.ts");
                var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
                    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
                        if (ar || !(i in from)) {
                            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                            ar[i] = from[i];
                        }
                    }
                    return to.concat(ar || Array.prototype.slice.call(from));
                };










                var LevelCreator = /** @class */ (function () {
                    function LevelCreator(scene, camera, animationManager) {
                        this.scene = scene;
                        this.camera = camera;
                        this.animManager = animationManager;
                        this.difficulty = 1;
                        this.enemiesCount = 0;
                        this.treasuresCount = 0;
                        this.secretsCount = 0;
                        this.mapSizeX = 0;
                        this.mapSizeZ = 0;
                        this.objects = {
                            walls: [],
                            enemies: [],
                            doors: [],
                            pickables: [],
                            furnitures: [],
                            end: []
                        };
                        this.pathFinder = new _PathFinder_PathFinder__WEBPACK_IMPORTED_MODULE_7__["default"](this);
                    }
                    LevelCreator.prototype.reset = function () {
                        this.scene.clear();
                        this.animManager.animations = [];
                        this.enemiesCount = 0;
                        this.treasuresCount = 0;
                        this.secretsCount = 0;
                        this.objects = {
                            walls: [],
                            enemies: [],
                            doors: [],
                            pickables: [],
                            furnitures: [],
                            end: []
                        };
                    };
                    LevelCreator.prototype.setDifficulty = function (num) {
                        this.difficulty = num;
                    };
                    LevelCreator.prototype.createLvl = function (data, newGame) {
                        var _this = this;
                        if (newGame === void 0) { newGame = false; }
                        this.reset();
                        var mapData = JSON.parse(data);
                        this.mapSizeX = mapData.sizeX;
                        this.mapSizeZ = mapData.sizeY;
                        mapData.objectData.forEach(function (e, i) {
                            switch (e.type) {
                                case "player": {
                                    _this.camera.pos = new _Vector3__WEBPACK_IMPORTED_MODULE_4__["default"](e.x * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, _this.camera.pos.y, e.z * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize);
                                    _this.camera.respawn(newGame);
                                    if (e.look) {
                                        switch (e.look) {
                                            case 'UP':
                                                _this.camera.rotation.y = 0;
                                                break;
                                            case 'LEFT':
                                                _this.camera.rotation.y = Math.PI / 2;
                                                break;
                                            case 'DOWN':
                                                _this.camera.rotation.y = Math.PI;
                                                break;
                                            case 'RIGHT':
                                                _this.camera.rotation.y = 3 * Math.PI / 2;
                                                break;
                                        }
                                    }
                                    break;
                                }
                                case "wall": {
                                    var wall = new _objects_Wall__WEBPACK_IMPORTED_MODULE_3__["default"](e.x * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, 0, e.z * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize);
                                    wall.textureSet(wall.texture, e.texture);
                                    if (e.goTo) {
                                        wall.setAsSecretWall(new _Vector3__WEBPACK_IMPORTED_MODULE_4__["default"](e.goTo.x * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, 0, e.goTo.z * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize));
                                        _this.secretsCount++;
                                    }
                                    _this.scene.add(wall);
                                    _this.objects.walls.push(wall);
                                    break;
                                }
                                case "enemy": {
                                    if (e.difficulty == undefined || e.difficulty <= _this.difficulty) {
                                        var name_1 = e.name ? e.name : "GUARD";
                                        var enemy = new _objects_Enemy__WEBPACK_IMPORTED_MODULE_2__["default"](_this, _this.pathFinder, _this.animManager, e.x * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, 0, e.z * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, _Config__WEBPACK_IMPORTED_MODULE_0__.enemyActionTypes.RUN, _Config__WEBPACK_IMPORTED_MODULE_0__.EnemyData[name_1]);
                                        enemy.textureSet(enemy.texture, e.texture);
                                        enemy.setDMG(_Config__WEBPACK_IMPORTED_MODULE_0__.config.enemyDMG / (5 - _this.difficulty));
                                        if (e.alive == false) {
                                            enemy.dead = true;
                                            enemy.textureSet(enemy.texture, 'enemy_dead_5');
                                        }
                                        else {
                                            _this.enemiesCount++;
                                            if (e.goTo) {
                                                _this.animManager.add(enemy, _Config__WEBPACK_IMPORTED_MODULE_0__.animNames.ENEMY_RUN);
                                                enemy.setPatrol(new _Vector3__WEBPACK_IMPORTED_MODULE_4__["default"](e.goTo.x * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, 0, e.goTo.z * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize));
                                            }
                                            else {
                                                _this.animManager.add(enemy, _Config__WEBPACK_IMPORTED_MODULE_0__.animNames.ENEMY_STAND);
                                            }
                                            if (e.look) {
                                                switch (e.look) {
                                                    case 'UP':
                                                        enemy.rotation.y = 0;
                                                        break;
                                                    case 'LEFT':
                                                        enemy.rotation.y = Math.PI / 2;
                                                        break;
                                                    case 'DOWN':
                                                        enemy.rotation.y = Math.PI;
                                                        break;
                                                    case 'RIGHT':
                                                        enemy.rotation.y = 3 * Math.PI / 2;
                                                        break;
                                                }
                                            }
                                        }
                                        _this.scene.add(enemy);
                                        _this.objects.enemies.push(enemy);
                                    }
                                    break;
                                }
                                case "door": {
                                    _this.checkDoorConditions(e);
                                    break;
                                }
                                case "pickable": {
                                    var pickable = new _objects_Pickable__WEBPACK_IMPORTED_MODULE_6__["default"](_Config__WEBPACK_IMPORTED_MODULE_0__.pickablesNames[e.name].action, e.x * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, 0, e.z * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize);
                                    pickable.textureSet(pickable.texture, e.texture);
                                    _this.scene.add(pickable);
                                    _this.objects.pickables.push(pickable);
                                    if (_Config__WEBPACK_IMPORTED_MODULE_0__.config.treasuresNames.includes(e.name)) {
                                        _this.treasuresCount++;
                                    }
                                    break;
                                }
                                case "furniture": {
                                    var furnit = new _objects_Furniture__WEBPACK_IMPORTED_MODULE_8__["default"](e.x * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, 0, e.z * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize);
                                    furnit.textureSet(furnit.texture, e.texture);
                                    _this.scene.add(furnit);
                                    _this.objects.furnitures.push(furnit);
                                    break;
                                }
                                case "end": {
                                    var neighPos = [
                                        new _Vector3__WEBPACK_IMPORTED_MODULE_4__["default"]((e.x - 1) * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, 0, e.z * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize),
                                        new _Vector3__WEBPACK_IMPORTED_MODULE_4__["default"]((e.x + 1) * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, 0, e.z * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize),
                                        new _Vector3__WEBPACK_IMPORTED_MODULE_4__["default"](e.x * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, 0, (e.z - 1) * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize),
                                        new _Vector3__WEBPACK_IMPORTED_MODULE_4__["default"](e.x * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, 0, (e.z + 1) * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize)
                                    ];
                                    var neigh_1 = [];
                                    var objL_1 = __spreadArray(__spreadArray([], _this.objects.walls, true), _this.objects.doors, true);
                                    neighPos.forEach(function (e) {
                                        var ob = objL_1.find(function (o) { return o.pos.isEval(e); });
                                        if (ob)
                                            neigh_1.push(ob);
                                    });
                                    var end = new _objects_End__WEBPACK_IMPORTED_MODULE_9__["default"](e.x * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, 0, e.z * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, neigh_1);
                                    _this.objects.end.push(end);
                                    break;
                                }
                                default: {
                                    console.log("NEW OBJECT " + e.type + ". MAYBE ADD?");
                                }
                            }
                        });
                        for (var i = 0; i <= mapData.sizeX + 1; i++) {
                            for (var j = 0; j <= mapData.sizeY + 1; j++) {
                                if (i == 0 || i == mapData.sizeX + 1 || j == 0 || j == mapData.sizeY + 1) {
                                    var wall = new _objects_Wall__WEBPACK_IMPORTED_MODULE_3__["default"](i * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, 0, j * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize);
                                    wall.textureSet(wall.texture, 'wall_wood');
                                    this.scene.add(wall);
                                    this.objects.walls.push(wall);
                                }
                            }
                        }
                        var weapon = new _objects_Weapon__WEBPACK_IMPORTED_MODULE_5__["default"](_Config__WEBPACK_IMPORTED_MODULE_0__.weaponTypes.PISTOL, this.animManager);
                        weapon.textureSet(weapon.texture, "weapon_default_" + weapon.weaponID);
                        this.animManager.add(weapon, _Config__WEBPACK_IMPORTED_MODULE_0__.animNames.WEAPON_DEFAULT);
                        this.scene.add(weapon);
                        this.camera.weapon = weapon;
                        this.camera.preparePlayer();
                        this.pathFinder.updateObjects(__spreadArray(__spreadArray([], this.objects.walls, true), this.objects.furnitures.filter(function (e) { return _Config__WEBPACK_IMPORTED_MODULE_0__.config.noCollideFurnitures.includes(e.textureName) == false; }), true));
                        this.objects.enemies.forEach(function (e) {
                            if (e.patrolTarget) {
                                e.patrolArea();
                            }
                        });
                    };
                    LevelCreator.prototype.checkDoorConditions = function (data) {
                        var rotated = this.objects.walls.find(function (e) { return e.pos.x == data.x * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize - _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize && e.pos.z == data.z * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize; }) === undefined;
                        var door = new _objects_Door__WEBPACK_IMPORTED_MODULE_1__["default"](data.x * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, 0, data.z * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, 0.08 * _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, rotated);
                        door.textureSet(door.texture, data.texture);
                        this.scene.add(door);
                        this.objects.doors.push(door);
                        if (rotated == false) {
                            door.textureSet(door.texture, data.texture, door.wallTypes.FRONT);
                            door.textureSet(door.texture, data.texture, door.wallTypes.BACK);
                            door.textureSet(door.texture, data.texture == 'door_front_1' ? 'door_side_1' : 'door_side_2', door.wallTypes.LEFT, false);
                            door.textureSet(door.texture, data.texture == 'door_front_1' ? 'door_side_1' : 'door_side_2', door.wallTypes.RIGHT, false);
                            var leftWall = this.objects.walls.find(function (e) { return e.pos.x == door.pos.x - _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize && e.pos.z == door.pos.z; });
                            var rightWall = this.objects.walls.find(function (e) { return e.pos.x == door.pos.x + _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize && e.pos.z == door.pos.z; });
                            if (leftWall && leftWall instanceof _objects_Wall__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                                leftWall.textureSet(door.texture, 'wall_door', leftWall.wallTypes.RIGHT);
                            }
                            if (rightWall && rightWall instanceof _objects_Wall__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                                rightWall.textureSet(door.texture, 'wall_door', rightWall.wallTypes.LEFT);
                            }
                        }
                        else {
                            door.rotation.rotateY(-Math.PI / 2);
                            door.textureSet(door.texture, data.texture, door.wallTypes.FRONT, true);
                            door.textureSet(door.texture, data.texture, door.wallTypes.BACK, true);
                            door.textureSet(door.texture, data.texture == 'door_front_1' ? 'door_side_1' : 'door_side_2', door.wallTypes.LEFT);
                            door.textureSet(door.texture, data.texture == 'door_front_1' ? 'door_side_1' : 'door_side_2', door.wallTypes.RIGHT);
                            var topWall = this.objects.walls.find(function (e) { return e.pos.x == door.pos.x && e.pos.z == door.pos.z - _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize; });
                            var bottomWall = this.objects.walls.find(function (e) { return e.pos.x == door.pos.x && e.pos.z == door.pos.z + _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize; });
                            if (topWall && topWall instanceof _objects_Wall__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                                topWall.textureSet(door.texture, 'wall_door', topWall.wallTypes.FRONT);
                            }
                            if (bottomWall && bottomWall instanceof _objects_Wall__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                                bottomWall.textureSet(door.texture, 'wall_door', bottomWall.wallTypes.BACK);
                            }
                        }
                    };
                    LevelCreator.prototype.addUsedClip = function (deathPoint) {
                        var minX = deathPoint.x - (deathPoint.x % _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize) + _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize * 0.05;
                        var maxX = deathPoint.x - (deathPoint.x % _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize) + _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize * 0.95;
                        var minZ = deathPoint.z - (deathPoint.z % _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize) + _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize * 0.05;
                        var maxZ = deathPoint.z - (deathPoint.z % _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize) + _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize * 0.95;
                        var randX = (Math.random() * _Config__WEBPACK_IMPORTED_MODULE_0__.config.usedAmmoSpawnRange * 2) - _Config__WEBPACK_IMPORTED_MODULE_0__.config.usedAmmoSpawnRange;
                        var randZ = (Math.random() * _Config__WEBPACK_IMPORTED_MODULE_0__.config.usedAmmoSpawnRange * 2) - _Config__WEBPACK_IMPORTED_MODULE_0__.config.usedAmmoSpawnRange;
                        var spawnX = Math.max(minX, Math.min(maxX, deathPoint.x + randX));
                        var spawnZ = Math.max(minZ, Math.min(maxZ, deathPoint.z + randZ));
                        var spawnPoint = new _Vector3__WEBPACK_IMPORTED_MODULE_4__["default"](spawnX, 0, spawnZ);
                        var pickable = new _objects_Pickable__WEBPACK_IMPORTED_MODULE_6__["default"](_Config__WEBPACK_IMPORTED_MODULE_0__.pickablesNames.USED_CLIP.action, spawnPoint.x, spawnPoint.y, spawnPoint.z, _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize);
                        pickable.textureSet(pickable.texture, "pickable_clip");
                        this.scene.add(pickable);
                        this.objects.pickables.push(pickable);
                    };
                    return LevelCreator;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LevelCreator);


                /***/
}),

/***/ "./src/components/game/Matrix4.ts":
/*!****************************************!*\
  !*** ./src/components/game/Matrix4.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector3 */ "./src/components/game/Vector3.ts");

                var Matrix4 = /** @class */ (function () {
                    function Matrix4(matrix) {
                        if (matrix === void 0) { matrix = null; }
                        this.matrix = matrix != null ? matrix : [
                            1, 0, 0, 0,
                            0, 1, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1
                        ];
                    }
                    Matrix4.prototype.perspective = function (fieldOfView, aspect, near, far) {
                        var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfView);
                        var rangeInv = 1.0 / (near - far);
                        this.matrix = [
                            f / aspect, 0, 0, 0,
                            0, f, 0, 0,
                            0, 0, (near + far) * rangeInv, -1,
                            0, 0, near * far * rangeInv * 2, 0
                        ];
                        return this;
                    };
                    Matrix4.prototype.translate = function (tx, ty, tz) {
                        this.multiply(Matrix4.translation(tx, ty, tz));
                        return this;
                    };
                    Matrix4.prototype.xRotate = function (angle) {
                        this.multiply(Matrix4.xRotation(angle));
                        return this;
                    };
                    Matrix4.prototype.yRotate = function (angle) {
                        this.multiply(Matrix4.yRotation(angle));
                        return this;
                    };
                    Matrix4.prototype.zRotate = function (angle) {
                        this.multiply(Matrix4.zRotation(angle));
                        return this;
                    };
                    Matrix4.prototype.scale = function (sx, sy, sz) {
                        this.multiply(Matrix4.scaling(sx, sy, sz));
                        return this;
                    };
                    Matrix4.lookAt = function (vec, target, up) {
                        var zAxis = vec.clone().sub(target).normalize();
                        var xAxis = _Vector3__WEBPACK_IMPORTED_MODULE_0__["default"].cross(up, zAxis).normalize();
                        var yAxis = _Vector3__WEBPACK_IMPORTED_MODULE_0__["default"].cross(zAxis, xAxis).normalize();
                        return new Matrix4([
                            xAxis.x, xAxis.y, xAxis.z, 0,
                            yAxis.x, yAxis.y, yAxis.z, 0,
                            zAxis.x, zAxis.y, zAxis.z, 0,
                            vec.x,
                            vec.y,
                            vec.z,
                            1,
                        ]);
                    };
                    Matrix4.prototype.clone = function () {
                        var mat = new Matrix4();
                        mat.matrix = Array.from(this.matrix);
                        return mat;
                    };
                    Matrix4.prototype.positionFromMatrix = function () {
                        return new _Vector3__WEBPACK_IMPORTED_MODULE_0__["default"](this.matrix[12], this.matrix[13], this.matrix[14]);
                    };
                    Matrix4.prototype.multiply = function (mat) {
                        var b00 = mat.matrix[0 * 4 + 0];
                        var b01 = mat.matrix[0 * 4 + 1];
                        var b02 = mat.matrix[0 * 4 + 2];
                        var b03 = mat.matrix[0 * 4 + 3];
                        var b10 = mat.matrix[1 * 4 + 0];
                        var b11 = mat.matrix[1 * 4 + 1];
                        var b12 = mat.matrix[1 * 4 + 2];
                        var b13 = mat.matrix[1 * 4 + 3];
                        var b20 = mat.matrix[2 * 4 + 0];
                        var b21 = mat.matrix[2 * 4 + 1];
                        var b22 = mat.matrix[2 * 4 + 2];
                        var b23 = mat.matrix[2 * 4 + 3];
                        var b30 = mat.matrix[3 * 4 + 0];
                        var b31 = mat.matrix[3 * 4 + 1];
                        var b32 = mat.matrix[3 * 4 + 2];
                        var b33 = mat.matrix[3 * 4 + 3];
                        var a00 = this.matrix[0 * 4 + 0];
                        var a01 = this.matrix[0 * 4 + 1];
                        var a02 = this.matrix[0 * 4 + 2];
                        var a03 = this.matrix[0 * 4 + 3];
                        var a10 = this.matrix[1 * 4 + 0];
                        var a11 = this.matrix[1 * 4 + 1];
                        var a12 = this.matrix[1 * 4 + 2];
                        var a13 = this.matrix[1 * 4 + 3];
                        var a20 = this.matrix[2 * 4 + 0];
                        var a21 = this.matrix[2 * 4 + 1];
                        var a22 = this.matrix[2 * 4 + 2];
                        var a23 = this.matrix[2 * 4 + 3];
                        var a30 = this.matrix[3 * 4 + 0];
                        var a31 = this.matrix[3 * 4 + 1];
                        var a32 = this.matrix[3 * 4 + 2];
                        var a33 = this.matrix[3 * 4 + 3];
                        this.matrix = [
                            b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
                            b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
                            b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
                            b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
                            b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
                            b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
                            b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
                            b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
                            b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
                            b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
                            b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
                            b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
                            b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
                            b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
                            b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
                            b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
                        ];
                        return this;
                    };
                    Matrix4.prototype.inverse = function () {
                        var m00 = this.matrix[0 * 4 + 0];
                        var m01 = this.matrix[0 * 4 + 1];
                        var m02 = this.matrix[0 * 4 + 2];
                        var m03 = this.matrix[0 * 4 + 3];
                        var m10 = this.matrix[1 * 4 + 0];
                        var m11 = this.matrix[1 * 4 + 1];
                        var m12 = this.matrix[1 * 4 + 2];
                        var m13 = this.matrix[1 * 4 + 3];
                        var m20 = this.matrix[2 * 4 + 0];
                        var m21 = this.matrix[2 * 4 + 1];
                        var m22 = this.matrix[2 * 4 + 2];
                        var m23 = this.matrix[2 * 4 + 3];
                        var m30 = this.matrix[3 * 4 + 0];
                        var m31 = this.matrix[3 * 4 + 1];
                        var m32 = this.matrix[3 * 4 + 2];
                        var m33 = this.matrix[3 * 4 + 3];
                        var tmp_0 = m22 * m33;
                        var tmp_1 = m32 * m23;
                        var tmp_2 = m12 * m33;
                        var tmp_3 = m32 * m13;
                        var tmp_4 = m12 * m23;
                        var tmp_5 = m22 * m13;
                        var tmp_6 = m02 * m33;
                        var tmp_7 = m32 * m03;
                        var tmp_8 = m02 * m23;
                        var tmp_9 = m22 * m03;
                        var tmp_10 = m02 * m13;
                        var tmp_11 = m12 * m03;
                        var tmp_12 = m20 * m31;
                        var tmp_13 = m30 * m21;
                        var tmp_14 = m10 * m31;
                        var tmp_15 = m30 * m11;
                        var tmp_16 = m10 * m21;
                        var tmp_17 = m20 * m11;
                        var tmp_18 = m00 * m31;
                        var tmp_19 = m30 * m01;
                        var tmp_20 = m00 * m21;
                        var tmp_21 = m20 * m01;
                        var tmp_22 = m00 * m11;
                        var tmp_23 = m10 * m01;
                        var t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -
                            (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
                        var t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) -
                            (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
                        var t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) -
                            (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
                        var t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -
                            (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
                        var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
                        this.matrix = [
                            d * t0,
                            d * t1,
                            d * t2,
                            d * t3,
                            d * ((tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30) -
                                (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30)),
                            d * ((tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30) -
                                (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30)),
                            d * ((tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30) -
                                (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30)),
                            d * ((tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20) -
                                (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20)),
                            d * ((tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33) -
                                (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33)),
                            d * ((tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33) -
                                (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33)),
                            d * ((tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33) -
                                (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33)),
                            d * ((tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23) -
                                (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23)),
                            d * ((tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12) -
                                (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22)),
                            d * ((tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22) -
                                (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02)),
                            d * ((tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02) -
                                (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12)),
                            d * ((tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12) -
                                (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02))
                        ];
                        return this;
                    };
                    Matrix4.translation = function (tx, ty, tz) {
                        return new Matrix4([
                            1, 0, 0, 0,
                            0, 1, 0, 0,
                            0, 0, 1, 0,
                            tx, ty, tz, 1
                        ]);
                    };
                    Matrix4.xRotation = function (angle) {
                        var c = Math.cos(angle);
                        var s = Math.sin(angle);
                        return new Matrix4([
                            1, 0, 0, 0,
                            0, c, s, 0,
                            0, -s, c, 0,
                            0, 0, 0, 1
                        ]);
                    };
                    Matrix4.yRotation = function (angle) {
                        var c = Math.cos(angle);
                        var s = Math.sin(angle);
                        return new Matrix4([
                            c, 0, -s, 0,
                            0, 1, 0, 0,
                            s, 0, c, 0,
                            0, 0, 0, 1
                        ]);
                    };
                    Matrix4.zRotation = function (angle) {
                        var c = Math.cos(angle);
                        var s = Math.sin(angle);
                        return new Matrix4([
                            c, s, 0, 0,
                            -s, c, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1
                        ]);
                    };
                    Matrix4.scaling = function (sx, sy, sz) {
                        return new Matrix4([
                            sx, 0, 0, 0,
                            0, sy, 0, 0,
                            0, 0, sz, 0,
                            0, 0, 0, 1,
                        ]);
                    };
                    return Matrix4;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Matrix4);


                /***/
}),

/***/ "./src/components/game/PathFinder/PathField.ts":
/*!*****************************************************!*\
  !*** ./src/components/game/PathFinder/PathField.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Vector3 */ "./src/components/game/Vector3.ts");

                var PathField = /** @class */ (function () {
                    function PathField(x, z) {
                        this.x = x;
                        this.z = z;
                        this.gCost = 0;
                        this.hCost = 0;
                        this.fCost = 0;
                        this.block = false;
                    }
                    PathField.prototype.clearCosts = function () {
                        this.gCost = 0;
                        this.hCost = 0;
                        this.fCost = 0;
                        this.parent = undefined;
                    };
                    PathField.prototype.setGCost = function (v) {
                        this.gCost = v;
                    };
                    PathField.prototype.setHCost = function (v) {
                        this.hCost = v;
                    };
                    PathField.prototype.calcFCost = function () {
                        this.fCost = this.gCost + this.hCost;
                    };
                    PathField.prototype.distance = function (target) {
                        return Math.abs(target.x - this.x) + Math.abs(target.z - this.z);
                    };
                    PathField.prototype.advanceDistance = function (target) {
                        return _Vector3__WEBPACK_IMPORTED_MODULE_0__["default"].distance(new _Vector3__WEBPACK_IMPORTED_MODULE_0__["default"](this.x, 0, this.z), new _Vector3__WEBPACK_IMPORTED_MODULE_0__["default"](target.x, 0, target.z));
                    };
                    return PathField;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PathField);


                /***/
}),

/***/ "./src/components/game/PathFinder/PathFinder.ts":
/*!******************************************************!*\
  !*** ./src/components/game/PathFinder/PathFinder.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Config */ "./src/components/Config.ts");
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Vector3 */ "./src/components/game/Vector3.ts");
/* harmony import */ var _PathField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PathField */ "./src/components/game/PathFinder/PathField.ts");



                var PathFinder = /** @class */ (function () {
                    function PathFinder(levelCreator) {
                        this.levelCreator = levelCreator;
                        this.blockObj = [];
                        this.baseTab = [];
                    }
                    PathFinder.prototype.updateObjects = function (ob) {
                        this.blockObj = ob;
                        this.prepareBaseTab();
                    };
                    PathFinder.prototype.clearCosts = function () {
                        this.baseTab.map(function (x) { return x.map(function (z) { return z.clearCosts(); }); });
                    };
                    PathFinder.prototype.prepareBaseTab = function () {
                        var _this = this;
                        this.baseTab = [];
                        for (var x = 0; x < (this.levelCreator.mapSizeX + 2); x++) {
                            this.baseTab[x] = [];
                            for (var z = 0; z < (this.levelCreator.mapSizeZ + 2); z++) {
                                this.baseTab[x][z] = new _PathField__WEBPACK_IMPORTED_MODULE_2__["default"](x, z);
                            }
                        }
                        this.blockObj.forEach(function (e) {
                            var pos = _this.toBasePathPosition(e.pos);
                            _this.baseTab[pos.x][pos.z].block = true;
                        });
                    };
                    PathFinder.prototype.toBasePathPosition = function (vec) {
                        return new _Vector3__WEBPACK_IMPORTED_MODULE_1__["default"](vec.x / _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize, vec.y, vec.z / _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize);
                    };
                    PathFinder.prototype.toAdvancePathPosition = function (vec) {
                        vec = vec.clone().add(new _Vector3__WEBPACK_IMPORTED_MODULE_1__["default"](_Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize / 2, 0, _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize / 2));
                        var newX = (vec.x - (vec.x % _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize)) / _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize;
                        var newZ = (vec.z - (vec.z % _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize)) / _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize;
                        return new _Vector3__WEBPACK_IMPORTED_MODULE_1__["default"](newX, 0, newZ);
                    };
                    PathFinder.prototype.inGoodRange = function (x, z) {
                        if (x >= 0 && x <= this.baseTab.length - 1 && z >= 0 && z <= this.baseTab[x].length - 1) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    };
                    PathFinder.prototype.findPath = function (from, target) {
                        this.clearCosts();
                        var startPos = this.toAdvancePathPosition(from);
                        var endPos = this.toAdvancePathPosition(target);
                        var start = this.baseTab.flat().find(function (e) { return e.x == startPos.x && e.z == startPos.z; });
                        var end = this.baseTab.flat().find(function (e) { return e.x == endPos.x && e.z == endPos.z; });
                        var openTab = [start];
                        var closeTab = [];
                        var targetFound = false;
                        do {
                            var list = openTab.sort(function (a, b) { return a.fCost - b.fCost; });
                            var current = list[0];
                            openTab.splice(openTab.indexOf(current), 1);
                            closeTab.push(current);
                            if (current == end) {
                                targetFound = true;
                                openTab = [];
                            }
                            else {
                                for (var i = -1; i <= 1; i++) {
                                    for (var j = -1; j <= 1; j++) {
                                        if (this.inGoodRange(current.x + i, current.z + j) && (i == 0 || j == 0)) {
                                            if (i == 0 && j == 0) { }
                                            else {
                                                var neigh = this.baseTab[current.x + i][current.z + j];
                                                if (neigh && current && start && end && neigh.block == false && closeTab.includes(neigh) == false) {
                                                    var neighGCost = neigh.advanceDistance(current) + current.gCost;
                                                    var neighHCost = neigh.advanceDistance(end);
                                                    var neighFCost = neighGCost + neighHCost;
                                                    if (openTab.includes(neigh) == false || neigh.fCost > neighFCost || (neigh.fCost == neighFCost && neighHCost < neigh.hCost)) {
                                                        neigh.setGCost(neighGCost);
                                                        neigh.setHCost(neighHCost);
                                                        neigh.calcFCost();
                                                        neigh.parent = current;
                                                        if (openTab.includes(neigh) == false) {
                                                            openTab.push(neigh);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } while (openTab.length > 0);
                        var tab = [];
                        var field = end;
                        while (field && field.parent) {
                            tab.push(field);
                            field = field.parent;
                        }
                        tab = tab.reverse();
                        return tab;
                    };
                    return PathFinder;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PathFinder);


                /***/
}),

/***/ "./src/components/game/Raycaster.ts":
/*!******************************************!*\
  !*** ./src/components/game/Raycaster.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/components/Config.ts");
/* harmony import */ var _boxHelper_BoxLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boxHelper/BoxLine */ "./src/components/game/boxHelper/BoxLine.ts");
/* harmony import */ var _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boxHelper/BoxPoint */ "./src/components/game/boxHelper/BoxPoint.ts");
/* harmony import */ var _Matrix4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Matrix4 */ "./src/components/game/Matrix4.ts");
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vector3 */ "./src/components/game/Vector3.ts");





                var Raycaster = /** @class */ (function () {
                    function Raycaster(camera) {
                        this.camera = camera;
                        this.gridSize = _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize;
                        this.slowLogOffset = 100;
                        this.lastSlowLog = Date.now();
                    }
                    Raycaster.prototype.create = function (S, length, collideObjects, target) {
                        if (target === void 0) { target = null; }
                        var E;
                        var dir;
                        var rayLine;
                        if (target == null) {
                            var matRot = new _Matrix4__WEBPACK_IMPORTED_MODULE_3__["default"]().yRotate(this.camera.rotation.y);
                            dir = _Vector3__WEBPACK_IMPORTED_MODULE_4__["default"].backward().clone().normalize().transformMat4(matRot).normalize();
                            var forwardPos = S.clone().add(dir.clone().multiply(1));
                            E = S.clone().add(dir.clone().multiply(length));
                            rayLine = new _boxHelper_BoxLine__WEBPACK_IMPORTED_MODULE_1__["default"](new _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_2__["default"](S.x, S.z), new _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_2__["default"](forwardPos.x, forwardPos.z));
                        }
                        else {
                            dir = target.clone().sub(S).normalize();
                            E = target.clone();
                            rayLine = new _boxHelper_BoxLine__WEBPACK_IMPORTED_MODULE_1__["default"](new _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_2__["default"](S.x, S.z), new _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_2__["default"](E.x, E.z));
                        }
                        var startPosPoint = new _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_2__["default"](S.x, S.z);
                        var currBlockPos = this.toBlockPosition(startPosPoint);
                        var currBlock = collideObjects.find(function (e) { return e.pos.x == currBlockPos.x && e.pos.z == currBlockPos.z; });
                        var targetBlockPos = this.toBlockPosition(new _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_2__["default"](E.x, E.z));
                        var collideFound = false;
                        while ((currBlockPos.x != targetBlockPos.x || currBlockPos.z != targetBlockPos.z) && collideFound == false) {
                            var newX = dir.x > 0 ? currBlockPos.x + _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize / 2 : currBlockPos.x - _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize / 2;
                            var newZ = dir.z > 0 ? currBlockPos.z + _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize / 2 : currBlockPos.z - _Config__WEBPACK_IMPORTED_MODULE_0__.config.wallSize / 2;
                            var pointCrossZ = rayLine.calcPoint('x', newX);
                            var pointCrossX = rayLine.calcPoint('z', newZ);
                            var distToX = pointCrossX != null ? startPosPoint.distancePointToPoint(pointCrossX) : Infinity;
                            var distToZ = pointCrossZ != null ? startPosPoint.distancePointToPoint(pointCrossZ) : Infinity;
                            if (distToX < distToZ) {
                                var newS = new _Vector3__WEBPACK_IMPORTED_MODULE_4__["default"](pointCrossX.x, 0, pointCrossX.z).add(dir.clone().multiply(0.1));
                                startPosPoint = new _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_2__["default"](newS.x, newS.z);
                            }
                            else {
                                var newS = new _Vector3__WEBPACK_IMPORTED_MODULE_4__["default"](pointCrossZ.x, 0, pointCrossZ.z).add(dir.clone().multiply(0.1));
                                startPosPoint = new _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_2__["default"](newS.x, newS.z);
                            }
                            currBlockPos = this.toBlockPosition(startPosPoint);
                            // currBlock = collideObjects.find(e => e.pos.isEval(new Vector3(currBlockPos.x, 0, currBlockPos.z)) || (e instanceof Door && e.startPos.isEval(new Vector3(currBlockPos.x, 0, currBlockPos.z))));
                            currBlock = collideObjects.find(function (e) { return e.pos.x == currBlockPos.x && e.pos.z == currBlockPos.z; });
                            if (currBlock != undefined) {
                                collideFound = true;
                            }
                        }
                        var dist = collideFound ? new _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_2__["default"](S.x, S.z).distancePointToPoint(startPosPoint) : new _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_2__["default"](S.x, S.z).distancePointToPoint(new _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_2__["default"](E.x, E.z));
                        return { dist: dist, collide: collideFound };
                    };
                    Raycaster.prototype.toBlockPosition = function (p) {
                        var newX = Math.sign(p.x) * ((Math.abs(p.x) + this.gridSize / 2) - ((Math.abs(p.x) + this.gridSize / 2) % this.gridSize));
                        var newY = Math.sign(p.z) * ((Math.abs(p.z) + this.gridSize / 2) - ((Math.abs(p.z) + this.gridSize / 2) % this.gridSize));
                        return new _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_2__["default"](newX, newY);
                    };
                    return Raycaster;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Raycaster);


                /***/
}),

/***/ "./src/components/game/Scene.ts":
/*!**************************************!*\
  !*** ./src/components/game/Scene.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/components/Config.ts");
/* harmony import */ var _objects_Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/Enemy */ "./src/components/game/objects/Enemy.ts");
/* harmony import */ var _Matrix4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Matrix4 */ "./src/components/game/Matrix4.ts");
/* harmony import */ var _HUDElements_helpers_Crosshair__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HUDElements/helpers/Crosshair */ "./src/components/HUDElements/helpers/Crosshair.ts");
/* harmony import */ var _objects_Weapon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objects/Weapon */ "./src/components/game/objects/Weapon.ts");
/* harmony import */ var _objects_Pickable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects/Pickable */ "./src/components/game/objects/Pickable.ts");
/* harmony import */ var _objects_Furniture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objects/Furniture */ "./src/components/game/objects/Furniture.ts");







                var Scene = /** @class */ (function () {
                    function Scene(root, camera) {
                        this.scene = document.createElement('canvas');
                        this.scene.id = 'scene';
                        // root.appendChild(this.scene);
                        this.camera = camera;
                        this.gl = this.scene.getContext('webgl', { antialias: false });
                        this.program;
                        this.locations = { attributes: {}, uniforms: {} };
                        this.items = [];
                        this.textures = {};
                        this.library;
                        this.marginHorizontal = 0;
                        this.marginVertical = 0;
                        this.goodWidth = 0;
                        this.goodHeight = 0;
                        this.crosshair = new _HUDElements_helpers_Crosshair__WEBPACK_IMPORTED_MODULE_3__["default"]();
                        this.lastTexture = null;
                        this.lastTexcoords = null;
                        this.updateCamera();
                    }
                    Scene.prototype.add = function (item) {
                        this.items.push(item);
                        this.items = this.items.sort(function (a, b) {
                            if (a.texture > b.texture) {
                                return -1;
                            }
                            if (b.texture > a.texture) {
                                return 1;
                            }
                            return 0;
                        });
                    };
                    Scene.prototype.remove = function (item) {
                        this.items = this.items.filter(function (e) { return e != item; });
                    };
                    Scene.prototype.clear = function () {
                        this.items = [];
                    };
                    Scene.prototype.startProgram = function (library) {
                        this.library = library;
                        this.updateCamera();
                        var vertexShader = this.createShader(this.gl, this.gl.VERTEX_SHADER, this.library.shaders.vertShader);
                        var fragShader = this.createShader(this.gl, this.gl.FRAGMENT_SHADER, this.library.shaders.fragShader);
                        this.program = this.createProgram(this.gl, vertexShader, fragShader);
                        this.positionBuffer = this.gl.createBuffer();
                        this.texcoordBuffer = this.gl.createBuffer();
                        this.getLocations();
                        this.CreateTextures();
                    };
                    Scene.prototype.drawScene = function (deltaTime) {
                        var _this = this;
                        this.applyBaseSettings();
                        var viewProjectionMatrix = this.CalcViewProjectionMatrix();
                        this.lastTexture = null;
                        var lastPosArray = null;
                        this.items.forEach(function (e, i) {
                            if (_this.camera.inRenderingRange(e) || e instanceof _objects_Weapon__WEBPACK_IMPORTED_MODULE_4__["default"]) {
                                _this.gl.bindBuffer(_this.gl.ARRAY_BUFFER, _this.positionBuffer);
                                if (!_this.FloatArrayIsEval(e.posArray, lastPosArray)) {
                                    _this.gl.bufferData(_this.gl.ARRAY_BUFFER, e.posArray, _this.gl.STATIC_DRAW);
                                    lastPosArray = e.posArray.slice(0);
                                }
                                _this.gl.vertexAttribPointer(_this.locations.attributes['a_position'], 3, _this.gl.FLOAT, false, 0, 0);
                                _this.prepareImg(e, _this.texcoordBuffer);
                                var matrix = void 0;
                                if (e instanceof _objects_Weapon__WEBPACK_IMPORTED_MODULE_4__["default"]) {
                                    matrix = _this.camera.projectionMatrix.clone();
                                }
                                else {
                                    matrix = viewProjectionMatrix.clone();
                                }
                                matrix.translate(e.pos.x, e.pos.y, e.pos.z);
                                if (e instanceof _objects_Enemy__WEBPACK_IMPORTED_MODULE_1__["default"] || e instanceof _objects_Pickable__WEBPACK_IMPORTED_MODULE_5__["default"] || e instanceof _objects_Furniture__WEBPACK_IMPORTED_MODULE_6__["default"]) {
                                    matrix.yRotate(_this.camera.rotation.y);
                                }
                                else {
                                    matrix.yRotate(e.rotation.y);
                                }
                                matrix.xRotate(e.rotation.x);
                                matrix.zRotate(e.rotation.z);
                                matrix.scale(e.scale.x, e.scale.y, e.scale.z);
                                _this.gl.uniformMatrix4fv(_this.locations.uniforms['u_matrix'], false, matrix.matrix);
                                _this.gl.uniform1i(_this.locations.uniforms['u_texture'], 0);
                                _this.gl.drawArrays(_this.gl.TRIANGLES, 0, e.count);
                            }
                        });
                    };
                    Scene.prototype.prepareImg = function (element, buffer) {
                        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
                        if (element.texture != this.lastTexture || !this.FloatArrayIsEval(element.textureArray, this.lastTexcoords)) {
                            this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[element.texture]);
                            this.lastTexture = element.texture;
                            this.lastTexcoords = element.textureArray.slice(0);
                            this.gl.vertexAttribPointer(this.locations.attributes['a_texcoord'], 2, this.gl.FLOAT, false, 0, 0);
                            this.gl.bufferData(this.gl.ARRAY_BUFFER, element.textureArray, this.gl.STATIC_DRAW);
                        }
                    };
                    Scene.prototype.CreateTextures = function () {
                        for (var key in this.library.graphics) {
                            var image = this.library.graphics[key];
                            var texture = this.gl.createTexture();
                            this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
                            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
                            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, new Uint8Array([255, 0, 0, 255]));
                            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image);
                            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
                            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
                            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST_MIPMAP_LINEAR);
                            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
                            if (this.isPowerOf2(image.width) && this.isPowerOf2(image.height)) {
                                this.gl.generateMipmap(this.gl.TEXTURE_2D);
                            }
                            this.textures[key] = texture;
                        }
                    };
                    Scene.prototype.CalcViewProjectionMatrix = function () {
                        var cameraMatrix = new _Matrix4__WEBPACK_IMPORTED_MODULE_2__["default"]();
                        cameraMatrix.translate(this.camera.pos.x, this.camera.pos.y, this.camera.pos.z);
                        cameraMatrix.yRotate(this.camera.rotation.y);
                        cameraMatrix.inverse();
                        return this.camera.projectionMatrix.clone().multiply(cameraMatrix);
                    };
                    Scene.prototype.updateCamera = function () {
                        if (this.camera && this.gl) {
                            this.camera.updateProjectionMatrix(this.scene.width / this.scene.height);
                        }
                    };
                    Scene.prototype.getLocations = function () {
                        var _this = this;
                        _Config__WEBPACK_IMPORTED_MODULE_0__.config.attributes.forEach(function (e) {
                            return (_this.locations.attributes[e] = _this.gl.getAttribLocation(_this.program, e));
                        });
                        _Config__WEBPACK_IMPORTED_MODULE_0__.config.uniforms.forEach(function (e) {
                            return (_this.locations.uniforms[e] = _this.gl.getUniformLocation(_this.program, e));
                        });
                        this.gl.enableVertexAttribArray(this.locations.attributes['a_position']);
                        this.gl.enableVertexAttribArray(this.locations.attributes['a_texcoord']);
                    };
                    Scene.prototype.applyBaseSettings = function () {
                        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
                        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
                        this.gl.useProgram(this.program);
                        this.gl.enable(this.gl.CULL_FACE);
                        this.gl.enable(this.gl.DEPTH_TEST);
                        this.gl.enable(this.gl.BLEND);
                        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
                    };
                    Scene.prototype.createShader = function (gl, type, source) {
                        var shader = gl.createShader(type);
                        gl.shaderSource(shader, source);
                        gl.compileShader(shader);
                        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
                        if (success) {
                            return shader;
                        }
                        console.log(gl.getShaderInfoLog(shader));
                        gl.deleteShader(shader);
                    };
                    Scene.prototype.createProgram = function (gl, vertexShader, fragmentShader) {
                        var program = gl.createProgram();
                        gl.attachShader(program, vertexShader);
                        gl.attachShader(program, fragmentShader);
                        gl.linkProgram(program);
                        var success = gl.getProgramParameter(program, gl.LINK_STATUS);
                        if (success) {
                            return program;
                        }
                        console.log(gl.getProgramInfoLog(program));
                        gl.deleteProgram(program);
                    };
                    Scene.prototype.isPowerOf2 = function (val) {
                        return (val & (val - 1)) == 0;
                    };
                    Scene.prototype.FloatArrayIsEval = function (array1, array2) {
                        if (array1 == null || array2 == null) {
                            return false;
                        }
                        for (var i = 0; i < array1.length; i++) {
                            if (array1[i] != array2[i]) {
                                return false;
                            }
                        }
                        return true;
                    };
                    return Scene;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scene);


                /***/
}),

/***/ "./src/components/game/Vector2.ts":
/*!****************************************!*\
  !*** ./src/components/game/Vector2.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
                var Vector2 = /** @class */ (function () {
                    function Vector2(x, z) {
                        this.x = x;
                        this.z = z;
                    }
                    Vector2.prototype.clone = function () {
                        return new Vector2(this.x, this.z);
                    };
                    Vector2.prototype.multiplyX = function (val) {
                        this.x *= val;
                        return this;
                    };
                    Vector2.prototype.multiplyZ = function (val) {
                        this.z *= val;
                        return this;
                    };
                    Vector2.prototype.add = function (v2) {
                        this.x += v2.x;
                        this.z += v2.z;
                        return this;
                    };
                    return Vector2;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vector2);


                /***/
}),

/***/ "./src/components/game/Vector3.ts":
/*!****************************************!*\
  !*** ./src/components/game/Vector3.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
                var Vector3 = /** @class */ (function () {
                    function Vector3(x, y, z) {
                        this.x = x;
                        this.y = y;
                        this.z = z;
                    }
                    Vector3.prototype.clone = function () {
                        return new Vector3(this.x, this.y, this.z);
                    };
                    Vector3.prototype.set = function (vec) {
                        this.x = vec.x;
                        this.y = vec.y;
                        this.z = vec.z;
                        return this;
                    };
                    Vector3.prototype.normalize = function () {
                        var len = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
                        if (len > 0.00001) {
                            this.x /= len;
                            this.y /= len;
                            this.z /= len;
                        }
                        else {
                            this.x = 0;
                            this.y = 0;
                            this.z = 0;
                        }
                        return this;
                    };
                    Vector3.prototype.sub = function (v) {
                        this.x -= v.x;
                        this.y -= v.y;
                        this.z -= v.z;
                        return this;
                    };
                    Vector3.prototype.add = function (v) {
                        this.x += v.x;
                        this.y += v.y;
                        this.z += v.z;
                        return this;
                    };
                    Vector3.prototype.translate = function (x, y, z) {
                        this.x += x;
                        this.y += y;
                        this.z += z;
                        return this;
                    };
                    Vector3.prototype.rotateY = function (angle) {
                        this.y += angle;
                    };
                    Vector3.prototype.inverse = function () {
                        this.multiply(-1);
                        return this;
                    };
                    Vector3.prototype.multiply = function (val) {
                        this.x *= val;
                        this.y *= val;
                        this.z *= val;
                        return this;
                    };
                    Vector3.prototype.divide = function (val) {
                        this.x /= val;
                        this.y /= val;
                        this.z /= val;
                        return this;
                    };
                    Vector3.prototype.zReverse = function () {
                        this.z *= -1;
                        return this;
                    };
                    Vector3.prototype.xReverse = function () {
                        this.x *= -1;
                        return this;
                    };
                    Vector3.cross = function (v1, v2) {
                        return new Vector3(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);
                    };
                    Vector3.prototype.transformMat4 = function (mat) {
                        var m = mat.matrix;
                        var w = m[3] * this.x + m[7] * this.y + m[11] * this.z + m[15];
                        w = w || 1.0;
                        var out = Vector3.zero();
                        out.x = (m[0] * this.x + m[4] * this.y + m[8] * this.z + m[12]) / w;
                        out.y = (m[1] * this.x + m[5] * this.y + m[9] * this.z + m[13]) / w;
                        out.z = (m[2] * this.x + m[6] * this.y + m[10] * this.z + m[14]) / w;
                        this.x = out.x;
                        this.y = out.y;
                        this.z = out.z;
                        return this;
                    };
                    Vector3.prototype.isEval = function (vec) {
                        if (vec.x == this.x && vec.y == this.y && vec.z == this.z) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    };
                    Vector3.prototype.flipXZ = function () {
                        var x = this.x;
                        var z = this.z;
                        this.x = z;
                        this.z = x;
                        return this;
                    };
                    Vector3.up = function () {
                        return new Vector3(0, 1, 0);
                    };
                    Vector3.forward = function () {
                        return new Vector3(0, 0, 1);
                    };
                    Vector3.backward = function () {
                        return new Vector3(0, 0, -1);
                    };
                    Vector3.down = function () {
                        return new Vector3(0, -1, 0);
                    };
                    Vector3.zero = function () {
                        return new Vector3(0, 0, 0);
                    };
                    Vector3.fromAngle = function (angle) {
                        angle = angle - Math.PI / 2;
                        return new Vector3(-Math.cos(angle), 0, Math.sin(angle));
                    };
                    Vector3.distance = function (v1, v2) {
                        return Math.sqrt(Math.pow(v2.x - v1.x, 2) + Math.pow(v2.z - v1.z, 2));
                    };
                    return Vector3;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vector3);


                /***/
}),

/***/ "./src/components/game/Vector4.ts":
/*!****************************************!*\
  !*** ./src/components/game/Vector4.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
                var Vector4 = /** @class */ (function () {
                    function Vector4(x, y, z, w) {
                        if (w === void 0) { w = 1; }
                        this.x = x;
                        this.y = y;
                        this.z = z;
                        this.w = w;
                        this.tab = [x, y, z, w];
                    }
                    Vector4.vectorMultiply = function (v, m) {
                        var dst = [];
                        for (var i = 0; i < 4; ++i) {
                            dst[i] = 0.0;
                            for (var j = 0; j < 4; ++j) {
                                dst[i] += v.tab[j] * m.matrix[j * 4 + i];
                            }
                        }
                        return new Vector4(dst[0], dst[1], dst[2], dst[3]);
                    };
                    Vector4.prototype.updateTab = function () {
                        this.tab = [this.x, this.y, this.z, this.w];
                    };
                    return Vector4;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vector4);


                /***/
}),

/***/ "./src/components/game/boxHelper/Box2D.ts":
/*!************************************************!*\
  !*** ./src/components/game/boxHelper/Box2D.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _BoxLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxLine */ "./src/components/game/boxHelper/BoxLine.ts");
/* harmony import */ var _BoxPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoxPoint */ "./src/components/game/boxHelper/BoxPoint.ts");


                var Box2D = /** @class */ (function () {
                    function Box2D(obj) {
                        this.obj = obj;
                        this.corners = {
                            TOP_LEFT: new _BoxPoint__WEBPACK_IMPORTED_MODULE_1__["default"](this.obj.pos.x - this.obj.width / 2, this.obj.pos.z - this.obj.deep / 2),
                            TOP_RIGHT: new _BoxPoint__WEBPACK_IMPORTED_MODULE_1__["default"](this.obj.pos.x + this.obj.width / 2, this.obj.pos.z - this.obj.deep / 2),
                            BOTTOM_LEFT: new _BoxPoint__WEBPACK_IMPORTED_MODULE_1__["default"](this.obj.pos.x - this.obj.width / 2, this.obj.pos.z + this.obj.deep / 2),
                            BOTTOM_RIGHT: new _BoxPoint__WEBPACK_IMPORTED_MODULE_1__["default"](this.obj.pos.x + this.obj.width / 2, this.obj.pos.z + this.obj.deep / 2)
                        };
                        this.lines = {
                            TOP: new _BoxLine__WEBPACK_IMPORTED_MODULE_0__["default"](this.corners.TOP_LEFT, this.corners.TOP_RIGHT),
                            RIGHT: new _BoxLine__WEBPACK_IMPORTED_MODULE_0__["default"](this.corners.TOP_RIGHT, this.corners.BOTTOM_RIGHT),
                            BOTTOM: new _BoxLine__WEBPACK_IMPORTED_MODULE_0__["default"](this.corners.BOTTOM_LEFT, this.corners.BOTTOM_RIGHT),
                            LEFT: new _BoxLine__WEBPACK_IMPORTED_MODULE_0__["default"](this.corners.TOP_LEFT, this.corners.BOTTOM_LEFT),
                        };
                    }
                    Box2D.prototype.checkPointInBox = function (point) {
                        var limitTabX = [this.corners.TOP_LEFT, this.corners.TOP_RIGHT].sort(function (a, b) { return a.x - b.x; });
                        var limitTabZ = [this.corners.TOP_LEFT, this.corners.BOTTOM_LEFT].sort(function (a, b) { return a.z - b.z; });
                        return limitTabX[0].x <= point.x && point.x <= limitTabX[1].x && limitTabZ[0].z <= point.z && point.z <= limitTabZ[1].z;
                    };
                    Box2D.prototype.isCornerCollision = function (point) {
                        var limitTabX = [this.corners.TOP_LEFT, this.corners.TOP_RIGHT].sort(function (a, b) { return a.x - b.x; });
                        var limitTabZ = [this.corners.TOP_LEFT, this.corners.BOTTOM_LEFT].sort(function (a, b) { return a.z - b.z; });
                        if ((limitTabX[0].x <= point.x && point.x <= limitTabX[1].x) || (limitTabZ[0].z <= point.z && point.z <= limitTabZ[1].z)) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    };
                    return Box2D;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box2D);


                /***/
}),

/***/ "./src/components/game/boxHelper/BoxLine.ts":
/*!**************************************************!*\
  !*** ./src/components/game/boxHelper/BoxLine.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LINE_TYPE": () => (/* binding */ LINE_TYPE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _BoxPoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxPoint */ "./src/components/game/boxHelper/BoxPoint.ts");

                var LINE_TYPE;
                (function (LINE_TYPE) {
                    LINE_TYPE["FULL"] = "FULL";
                    LINE_TYPE["ONLY_X"] = "ONLY_X";
                    LINE_TYPE["ONLY_Y"] = "ONLY_Y";
                })(LINE_TYPE || (LINE_TYPE = {}));
                var BoxLine = /** @class */ (function () {
                    function BoxLine(p1, p2) {
                        this.p1 = p1;
                        this.p2 = p2;
                        this.type = (p1.x == p2.x ? LINE_TYPE.ONLY_X : p1.z == p2.z ? LINE_TYPE.ONLY_Y : LINE_TYPE.FULL);
                        if (this.type == LINE_TYPE.FULL || this.type == LINE_TYPE.ONLY_Y) {
                            this.a = (p2.z - p1.z) / (p2.x - p1.x);
                            this.b = p1.z - this.a * p1.x;
                        }
                        else {
                            this.a = p1.x;
                            this.b = 0;
                        }
                    }
                    BoxLine.prototype.calcCrossPoint = function (secLine) {
                        var x, z, nulled;
                        if (this.type == LINE_TYPE.ONLY_X && (secLine.type == LINE_TYPE.FULL || secLine.type == LINE_TYPE.ONLY_Y)) {
                            x = this.a;
                            z = secLine.a * x + secLine.b;
                        }
                        else if ((this.type == LINE_TYPE.FULL || this.type == LINE_TYPE.ONLY_Y) && secLine.type == LINE_TYPE.ONLY_X) {
                            x = secLine.a;
                            z = this.a * x + this.b;
                        }
                        else if ((this.type == LINE_TYPE.ONLY_X && secLine.type == LINE_TYPE.ONLY_X) || (this.type == LINE_TYPE.ONLY_Y && secLine.type == LINE_TYPE.ONLY_Y)) {
                            nulled = true;
                        }
                        else {
                            x = (secLine.b - this.b) / (this.a - secLine.a);
                            z = this.a * x + this.b;
                        }
                        return nulled ? null : new _BoxPoint__WEBPACK_IMPORTED_MODULE_0__["default"](x, z);
                    };
                    BoxLine.prototype.checkPointBetweenLimit = function (point) {
                        var limitTabX = [this.p1, this.p2].sort(function (a, b) { return a.x - b.x; });
                        var limitTabZ = [this.p1, this.p2].sort(function (a, b) { return a.z - b.z; });
                        return limitTabX[0].x <= point.x && point.x <= limitTabX[1].x && limitTabZ[0].z <= point.z && point.z <= limitTabZ[1].z;
                    };
                    BoxLine.prototype.distanceToPoint = function (point) {
                        var limitTabX = [this.p1, this.p2].sort(function (a, b) { return a.x - b.x; });
                        var limitTabZ = [this.p1, this.p2].sort(function (a, b) { return a.z - b.z; });
                        var ptX = Math.min(limitTabX[1].x, Math.max(limitTabX[0].x, point.x));
                        var ptZ = Math.min(limitTabZ[1].z, Math.max(limitTabZ[0].z, point.z));
                        var dst = new _BoxPoint__WEBPACK_IMPORTED_MODULE_0__["default"](ptX, ptZ).distancePointToPoint(point);
                        return dst;
                    };
                    BoxLine.prototype.calcPoint = function (type, val) {
                        if (this.type == LINE_TYPE.ONLY_X) {
                            if (type == "x") {
                                return null;
                            }
                            else {
                                return new _BoxPoint__WEBPACK_IMPORTED_MODULE_0__["default"](this.a, val);
                            }
                        }
                        else {
                            if (type == "x") {
                                var cross = this.a * val + this.b;
                                return new _BoxPoint__WEBPACK_IMPORTED_MODULE_0__["default"](val, cross);
                            }
                            else {
                                var cross = (val - this.b) / this.a;
                                return new _BoxPoint__WEBPACK_IMPORTED_MODULE_0__["default"](cross, val);
                            }
                        }
                    };
                    return BoxLine;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxLine);


                /***/
}),

/***/ "./src/components/game/boxHelper/BoxPoint.ts":
/*!***************************************************!*\
  !*** ./src/components/game/boxHelper/BoxPoint.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
                var BoxPoint = /** @class */ (function () {
                    function BoxPoint(x, z) {
                        this.x = x;
                        this.z = z;
                    }
                    BoxPoint.prototype.distancePointToPoint = function (point) {
                        return Math.abs(Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.z - this.z, 2)));
                    };
                    return BoxPoint;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxPoint);


                /***/
}),

/***/ "./src/components/game/objects/Door.ts":
/*!*********************************************!*\
  !*** ./src/components/game/objects/Door.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Matrix4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Matrix4 */ "./src/components/game/Matrix4.ts");
/* harmony import */ var _Object3D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Object3D */ "./src/components/game/objects/Object3D.ts");
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Vector3 */ "./src/components/game/Vector3.ts");
/* harmony import */ var _Vector4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Vector4 */ "./src/components/game/Vector4.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Config */ "./src/components/Config.ts");
/* harmony import */ var _MyAudio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../MyAudio */ "./src/components/MyAudio.ts");
                var __extends = (undefined && undefined.__extends) || (function () {
                    var extendStatics = function (d, b) {
                        extendStatics = Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
                        return extendStatics(d, b);
                    };
                    return function (d, b) {
                        if (typeof b !== "function" && b !== null)
                            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                        extendStatics(d, b);
                        function __() { this.constructor = d; }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                })();






                var Door = /** @class */ (function (_super) {
                    __extends(Door, _super);
                    function Door(x, y, z, width, deep, rotated) {
                        var _this = _super.call(this) || this;
                        _this.pos = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, z);
                        _this.scale = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](1, 1, 1);
                        _this.rotation = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0, 0);
                        _this.width = width;
                        _this.deep = deep;
                        _this.rotated = rotated;
                        _this.texture = 'WALL';
                        _this.textureName = '';
                        _this.open = false;
                        _this.moveSpeed = 1 * _Config__WEBPACK_IMPORTED_MODULE_4__.config.wallSize;
                        _this.futurePos = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, z);
                        _this.startPos = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, z);
                        _this.autoClose = undefined;
                        _this.posArray = new Float32Array();
                        _this.startTextureCoords = [];
                        _this.tempTextureCoords = [];
                        _this.textureArray = new Float32Array();
                        _this.wallTypes = {
                            "FRONT": 0,
                            "TOP": 1,
                            "BOTTOM": 2,
                            "LEFT": 3,
                            "RIGHT": 4,
                            "BACK": 5,
                        };
                        _this.count = 6 * 6;
                        _this.calcPos();
                        _this.calcTexture();
                        return _this;
                    }
                    Door.prototype.calcPos = function () {
                        var midDeepFront = (this.width / 2) - (this.deep / 2);
                        var midDeepBack = (this.width / 2) + (this.deep / 2);
                        this.posArray = new Float32Array([
                            //front
                            0, 0, midDeepFront,
                            0, this.width, midDeepFront,
                            this.width, 0, midDeepFront,
                            0, this.width, midDeepFront,
                            this.width, this.width, midDeepFront,
                            this.width, 0, midDeepFront,
                            //top
                            0, 0, midDeepFront,
                            this.width, 0, midDeepFront,
                            0, 0, midDeepBack,
                            this.width, 0, midDeepFront,
                            this.width, 0, midDeepBack,
                            0, 0, midDeepBack,
                            //bottom
                            0, this.width, midDeepFront,
                            0, this.width, midDeepBack,
                            this.width, this.width, midDeepFront,
                            0, this.width, midDeepBack,
                            this.width, this.width, midDeepBack,
                            this.width, this.width, midDeepFront,
                            //left
                            0, 0, midDeepBack,
                            0, this.width, midDeepBack,
                            0, 0, midDeepFront,
                            0, this.width, midDeepBack,
                            0, this.width, midDeepFront,
                            0, 0, midDeepFront,
                            //right
                            this.width, 0, midDeepFront,
                            this.width, this.width, midDeepFront,
                            this.width, 0, midDeepBack,
                            this.width, this.width, midDeepFront,
                            this.width, this.width, midDeepBack,
                            this.width, 0, midDeepBack,
                            //back
                            0, 0, midDeepBack,
                            this.width, 0, midDeepBack,
                            0, this.width, midDeepBack,
                            0, this.width, midDeepBack,
                            this.width, 0, midDeepBack,
                            this.width, this.width, midDeepBack,
                        ]);
                        var matrix = new _Matrix4__WEBPACK_IMPORTED_MODULE_0__["default"]().xRotate(Math.PI);
                        matrix.translate(-(this.width / 2), -(this.width / 2), -(this.width / 2));
                        for (var i = 0; i < this.posArray.length; i += 3) {
                            var vec = _Vector4__WEBPACK_IMPORTED_MODULE_3__["default"].vectorMultiply(new _Vector4__WEBPACK_IMPORTED_MODULE_3__["default"](this.posArray[i + 0], this.posArray[i + 1], this.posArray[i + 2]), matrix);
                            this.posArray[i + 0] = vec.x;
                            this.posArray[i + 1] = vec.y;
                            this.posArray[i + 2] = vec.z;
                        }
                        if (this.rotated) {
                            var width = this.width;
                            this.width = this.deep;
                            this.deep = width;
                        }
                    };
                    Door.prototype.calcTexture = function () {
                        var tab = [];
                        new Array(5).fill(null).map(function (e) {
                            return tab.push.apply(tab, [
                                0, 0,
                                0, 1,
                                1, 0,
                                0, 1,
                                1, 1,
                                1, 0
                            ]);
                        });
                        tab.push.apply(tab, [
                            0, 0,
                            1, 0,
                            0, 1,
                            0, 1,
                            1, 0,
                            1, 1,
                        ]);
                        this.startTextureCoords = Array.from(tab);
                        this.tempTextureCoords = Array.from(tab);
                    };
                    Door.prototype.forceOpen = function () {
                        var _this = this;
                        if (this.autoClose != undefined) {
                            clearTimeout(this.autoClose);
                            this.autoClose = undefined;
                        }
                        this.open = true;
                        this.futurePos.set(new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](this.startPos.x + (this.rotated ? 0 : _Config__WEBPACK_IMPORTED_MODULE_4__.config.wallSize + 5), this.startPos.y, this.startPos.z + (this.rotated ? _Config__WEBPACK_IMPORTED_MODULE_4__.config.wallSize + 5 : 0)));
                        this.autoClose = setTimeout(function () {
                            _this.move();
                        }, _Config__WEBPACK_IMPORTED_MODULE_4__.config.doorsAutoCloseTime);
                    };
                    Door.prototype.move = function (camera) {
                        var _this = this;
                        if (this.autoClose != undefined) {
                            clearTimeout(this.autoClose);
                            this.autoClose = undefined;
                        }
                        this.open = !this.open;
                        if (this.open) {
                            this.futurePos.set(new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](this.startPos.x + (this.rotated ? 0 : _Config__WEBPACK_IMPORTED_MODULE_4__.config.wallSize + 5), this.startPos.y, this.startPos.z + (this.rotated ? _Config__WEBPACK_IMPORTED_MODULE_4__.config.wallSize + 5 : 0)));
                            this.autoClose = setTimeout(function () {
                                _this.move(camera);
                            }, _Config__WEBPACK_IMPORTED_MODULE_4__.config.doorsAutoCloseTime);
                        }
                        else {
                            this.scale.set(new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](1, 1, 1));
                            this.futurePos.set(this.startPos);
                        }
                        if (camera && _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"].distance(camera.pos, this.pos) < 500) {
                            if (this.open) {
                                _MyAudio__WEBPACK_IMPORTED_MODULE_5__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_4__.AudioNames.DOORS_OPEN);
                            }
                            else {
                                _MyAudio__WEBPACK_IMPORTED_MODULE_5__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_4__.AudioNames.DOORS_CLOSE);
                            }
                        }
                    };
                    Door.prototype.update = function (deltaTime) {
                        if (this.pos.x != this.futurePos.x) {
                            if (Math.abs(this.futurePos.x - this.pos.x) < deltaTime * this.moveSpeed && this.open == true) {
                                this.scale.x = 0.5;
                            }
                            this.pos.x += Math.sign(this.futurePos.x - this.pos.x) * Math.min(deltaTime * this.moveSpeed, Math.abs(this.futurePos.x - this.pos.x));
                        }
                        if (this.pos.z != this.futurePos.z) {
                            if (Math.abs(this.futurePos.z - this.pos.z) < deltaTime * this.moveSpeed && this.open == true) {
                                this.scale.z = 0.5;
                            }
                            this.pos.z += Math.sign(this.futurePos.z - this.pos.z) * Math.min(deltaTime * this.moveSpeed, Math.abs(this.futurePos.z - this.pos.z));
                        }
                    };
                    return Door;
                }(_Object3D__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Door);


                /***/
}),

/***/ "./src/components/game/objects/End.ts":
/*!********************************************!*\
  !*** ./src/components/game/objects/End.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Object3D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object3D */ "./src/components/game/objects/Object3D.ts");
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Vector3 */ "./src/components/game/Vector3.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Config */ "./src/components/Config.ts");
/* harmony import */ var _boxHelper_Box2D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../boxHelper/Box2D */ "./src/components/game/boxHelper/Box2D.ts");
/* harmony import */ var _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../boxHelper/BoxPoint */ "./src/components/game/boxHelper/BoxPoint.ts");
/* harmony import */ var _Wall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Wall */ "./src/components/game/objects/Wall.ts");
/* harmony import */ var _Door__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Door */ "./src/components/game/objects/Door.ts");
/* harmony import */ var _MyAudio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../MyAudio */ "./src/components/MyAudio.ts");
                var __extends = (undefined && undefined.__extends) || (function () {
                    var extendStatics = function (d, b) {
                        extendStatics = Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
                        return extendStatics(d, b);
                    };
                    return function (d, b) {
                        if (typeof b !== "function" && b !== null)
                            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                        extendStatics(d, b);
                        function __() { this.constructor = d; }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                })();








                var End = /** @class */ (function (_super) {
                    __extends(End, _super);
                    function End(x, y, z, width, neighboursList) {
                        var _this = _super.call(this) || this;
                        _this.pos = new _Vector3__WEBPACK_IMPORTED_MODULE_1__["default"](x, y, z);
                        _this.width = width;
                        _this.deep = width;
                        _this.neighbours = { FRONT: undefined, LEFT: undefined, RIGHT: undefined };
                        _this.playerIn = false;
                        _this.UpdateNeighTextures(neighboursList);
                        return _this;
                    }
                    End.prototype.UpdateNeighTextures = function (neigh) {
                        this.FindRightNeighbours(neigh);
                        this.neighbours.FRONT ? this.neighbours.FRONT.textureSet(this.neighbours.FRONT.texture, 'wall_elevatorPins_off') : null;
                        this.neighbours.LEFT ? this.neighbours.LEFT.textureSet(this.neighbours.FRONT.texture, 'wall_elevatorPins_side') : null;
                        this.neighbours.RIGHT ? this.neighbours.RIGHT.textureSet(this.neighbours.FRONT.texture, 'wall_elevatorPins_side') : null;
                    };
                    End.prototype.FindRightNeighbours = function (neigh) {
                        var door = neigh.find(function (e) { return e instanceof _Door__WEBPACK_IMPORTED_MODULE_6__["default"]; });
                        var front;
                        if (door) {
                            var frontPos_1 = this.pos.clone().add(door.pos.clone().sub(this.pos).multiply(-1));
                            front = neigh.find(function (e) { return e.pos.isEval(frontPos_1); });
                            if (front) {
                                front = neigh.find(function (e) { return e instanceof _Wall__WEBPACK_IMPORTED_MODULE_5__["default"]; });
                            }
                        }
                        else {
                            front = neigh.find(function (e) { return e instanceof _Wall__WEBPACK_IMPORTED_MODULE_5__["default"]; });
                        }
                        var toFront = front.pos.clone().sub(this.pos);
                        var leftPos = this.pos.clone().add(toFront.z != 0 ? toFront.clone().flipXZ() : toFront.clone().flipXZ().multiply(-1));
                        var rightPos = this.pos.clone().add(toFront.z != 0 ? toFront.clone().flipXZ().multiply(-1) : toFront.clone().flipXZ());
                        var left = neigh.find(function (e) { return e.pos.isEval(leftPos); });
                        var right = neigh.find(function (e) { return e.pos.isEval(rightPos); });
                        this.neighbours.FRONT = front;
                        this.neighbours.LEFT = left;
                        this.neighbours.RIGHT = right;
                    };
                    End.prototype.checkPlayerIn = function (camera) {
                        var box = new _boxHelper_Box2D__WEBPACK_IMPORTED_MODULE_3__["default"](this);
                        var camIn = box.checkPointInBox(new _boxHelper_BoxPoint__WEBPACK_IMPORTED_MODULE_4__["default"](camera.pos.x, camera.pos.z));
                        this.playerIn = camIn;
                    };
                    End.prototype.change = function () {
                        _MyAudio__WEBPACK_IMPORTED_MODULE_7__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_2__.AudioNames.ELEVATOR_SWITCH);
                        this.neighbours.FRONT ? this.neighbours.FRONT.textureSet(this.neighbours.FRONT.texture, 'wall_elevatorPins_on') : null;
                    };
                    End.prototype.update = function (deltaTime, camera) {
                        this.checkPlayerIn(camera);
                    };
                    return End;
                }(_Object3D__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (End);


                /***/
}),

/***/ "./src/components/game/objects/Enemy.ts":
/*!**********************************************!*\
  !*** ./src/components/game/objects/Enemy.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Matrix4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Matrix4 */ "./src/components/game/Matrix4.ts");
/* harmony import */ var _Object3D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Object3D */ "./src/components/game/objects/Object3D.ts");
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Vector3 */ "./src/components/game/Vector3.ts");
/* harmony import */ var _Vector4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Vector4 */ "./src/components/game/Vector4.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Config */ "./src/components/Config.ts");
/* harmony import */ var _Raycaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Raycaster */ "./src/components/game/Raycaster.ts");
/* harmony import */ var _MyAudio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../MyAudio */ "./src/components/MyAudio.ts");
                var __extends = (undefined && undefined.__extends) || (function () {
                    var extendStatics = function (d, b) {
                        extendStatics = Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
                        return extendStatics(d, b);
                    };
                    return function (d, b) {
                        if (typeof b !== "function" && b !== null)
                            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                        extendStatics(d, b);
                        function __() { this.constructor = d; }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                })();
                var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
                    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
                        if (ar || !(i in from)) {
                            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                            ar[i] = from[i];
                        }
                    }
                    return to.concat(ar || Array.prototype.slice.call(from));
                };







                var Enemy = /** @class */ (function (_super) {
                    __extends(Enemy, _super);
                    function Enemy(lvlCreator, pathFinder, animManager, x, y, z, width, action, enemyData) {
                        var _this = _super.call(this) || this;
                        _this.pos = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, z);
                        _this.rotation = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0, 0);
                        _this.scale = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](1, 1, 1);
                        _this.width = width;
                        _this.deep = 0;
                        _this.texture = enemyData.texture;
                        _this.name = enemyData.name;
                        // this.texture = 'ENEMY';
                        _this.textureName = '';
                        _this.count = 6 * 2;
                        _this.spotted = false;
                        _this.moveSpeed = enemyData.moveSpeed * _Config__WEBPACK_IMPORTED_MODULE_4__.config.wallSize;
                        _this.startPos = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, z);
                        _this.patrolTarget = undefined;
                        _this.targetPos = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, z);
                        _this.lastTarget = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, z);
                        _this.path = [];
                        _this.pathIndex = 0;
                        _this.action = action;
                        _this.angleStatus = _Config__WEBPACK_IMPORTED_MODULE_4__.enemyAngleStatus.FRONT;
                        _this.lastShoot = 0;
                        _this.DMG = enemyData.dmg;
                        _this.attackRange = enemyData.attackRange * _Config__WEBPACK_IMPORTED_MODULE_4__.config.wallSize;
                        _this.dropAmmo = enemyData.dropAmmo;
                        _this.lvlCreator = lvlCreator;
                        _this.pathFinder = pathFinder;
                        _this.animManager = animManager;
                        _this.hp = enemyData.hp;
                        _this.dead = false;
                        _this.posArray = new Float32Array();
                        _this.startTextureCoords = [];
                        _this.tempTextureCoords = [];
                        _this.textureArray = new Float32Array();
                        _this.calsPos();
                        _this.calcTexture();
                        return _this;
                    }
                    Enemy.prototype.calsPos = function () {
                        this.posArray = new Float32Array([
                            0,
                            0,
                            this.width / 2,
                            0,
                            this.width,
                            this.width / 2,
                            this.width,
                            0,
                            this.width / 2,
                            0,
                            this.width,
                            this.width / 2,
                            this.width,
                            this.width,
                            this.width / 2,
                            this.width,
                            0,
                            this.width / 2,
                            0,
                            0,
                            this.width / 2,
                            this.width,
                            0,
                            this.width / 2,
                            0,
                            this.width,
                            this.width / 2,
                            0,
                            this.width,
                            this.width / 2,
                            this.width,
                            0,
                            this.width / 2,
                            this.width,
                            this.width,
                            this.width / 2,
                        ]);
                        var matrix = new _Matrix4__WEBPACK_IMPORTED_MODULE_0__["default"]().xRotate(Math.PI);
                        matrix.translate(-(this.width / 2), -(this.width / 2), -(this.width / 2));
                        for (var i = 0; i < this.posArray.length; i += 3) {
                            var vec = _Vector4__WEBPACK_IMPORTED_MODULE_3__["default"].vectorMultiply(new _Vector4__WEBPACK_IMPORTED_MODULE_3__["default"](this.posArray[i + 0], this.posArray[i + 1], this.posArray[i + 2]), matrix);
                            this.posArray[i + 0] = vec.x;
                            this.posArray[i + 1] = vec.y;
                            this.posArray[i + 2] = vec.z;
                        }
                    };
                    Enemy.prototype.calcTexture = function () {
                        var tab = [];
                        tab.push.apply(tab, [
                            0, 0,
                            0, 1,
                            1, 0,
                            0, 1,
                            1, 1,
                            1, 0
                        ]);
                        tab.push.apply(tab, [
                            0, 0,
                            1, 0,
                            0, 1,
                            1, 1,
                            1, 0,
                            1, 1,
                        ]);
                        this.startTextureCoords = Array.from(tab);
                        this.tempTextureCoords = Array.from(tab);
                    };
                    Enemy.prototype.update = function (deltaTime, camera) {
                        if (this.dead == false) {
                            if (this.action == _Config__WEBPACK_IMPORTED_MODULE_4__.enemyActionTypes.RUN || this.action == _Config__WEBPACK_IMPORTED_MODULE_4__.enemyActionTypes.STAND) {
                                this.moveManager(deltaTime, camera);
                                var ang = this.checkViewAngleToTarget(camera);
                                this.toAngleStatus(ang);
                            }
                            if (this.spotted == true) {
                                this.checkShoot(camera) == false && this.checkDistancedShoot(camera) ? this.shootManage(camera) : null;
                            }
                            this.checkSpot(camera);
                        }
                    };
                    Enemy.prototype.checkDistancedShoot = function (camera) {
                        if ((_Vector3__WEBPACK_IMPORTED_MODULE_2__["default"].distance(camera.pos, this.pos) <= this.attackRange && this.name == "DOG") || this.name == "GUARD") {
                            return true;
                        }
                        else {
                            return false;
                        }
                    };
                    Enemy.prototype.setDMG = function (numb) {
                        this.DMG = numb;
                    };
                    Enemy.prototype.moveManager = function (deltaTime, camera) {
                        if (this.spotted) {
                            this.goToPlayer(camera);
                            if (this.pos.isEval(this.targetPos) == false) {
                                if (_Vector3__WEBPACK_IMPORTED_MODULE_2__["default"].distance(this.pos, camera.pos) > this.attackRange || this.checkShoot(camera) == true) {
                                    this.changeAction(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyActionTypes.RUN);
                                    this.enemyLookAt(this.targetPos);
                                    this.move(deltaTime);
                                }
                                else {
                                    this.changeAction(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyActionTypes.STAND);
                                    this.enemyLookAt(camera.pos);
                                }
                            }
                            else {
                                this.nextPathTarget();
                            }
                        }
                        else if (this.patrolTarget) {
                            // this.patrolArea();
                            if (this.pos.isEval(this.targetPos) == false) {
                                this.enemyLookAt(this.targetPos);
                                this.move(deltaTime, true);
                            }
                            else {
                                this.nextPathTarget(true);
                            }
                        }
                    };
                    Enemy.prototype.changeAction = function (actionName, camera) {
                        var _this = this;
                        this.action = actionName;
                        switch (actionName) {
                            case _Config__WEBPACK_IMPORTED_MODULE_4__.enemyActionTypes.HIT: {
                                this.animManager.change(this, _Config__WEBPACK_IMPORTED_MODULE_4__.animNames.ENEMY_HIT, function (aD) {
                                    if (aD.animation.index == 0 && aD.animation.fullPlayed) {
                                        _this.changeAction(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyActionTypes.RUN);
                                        return false;
                                    } return true;
                                });
                                break;
                            }
                            case _Config__WEBPACK_IMPORTED_MODULE_4__.enemyActionTypes.DEAD: {
                                this.animManager.change(this, _Config__WEBPACK_IMPORTED_MODULE_4__.animNames.ENEMY_DEAD, function (animD) {
                                    if (animD.animation.index == 0 && animD.animation.fullPlayed) {
                                        _this.animManager.remove(_this);
                                        return false;
                                    } return true;
                                });
                                break;
                            }
                            case _Config__WEBPACK_IMPORTED_MODULE_4__.enemyActionTypes.RUN: {
                                this.animManager.change(this, _Config__WEBPACK_IMPORTED_MODULE_4__.animNames.ENEMY_RUN);
                                break;
                            }
                            case _Config__WEBPACK_IMPORTED_MODULE_4__.enemyActionTypes.STAND: {
                                this.animManager.change(this, _Config__WEBPACK_IMPORTED_MODULE_4__.animNames.ENEMY_STAND);
                                break;
                            }
                            case _Config__WEBPACK_IMPORTED_MODULE_4__.enemyActionTypes.SHOOT: {
                                this.animManager.change(this, _Config__WEBPACK_IMPORTED_MODULE_4__.animNames.ENEMY_SHOOT, function (animD) {
                                    // let lastAction = this.action;
                                    if (animD.animation.index == 0 && animD.animation.fullPlayed) {
                                        _this.changeAction(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyActionTypes.STAND);
                                        return false;
                                    }
                                    else if (animD.animation.index == 2) {
                                        _this.shootPlayer(camera);
                                    }
                                    return true;
                                });
                                break;
                            }
                        }
                    };
                    Enemy.prototype.shootManage = function (camera) {
                        // if (Date.now() > this.lastShoot + config.enemyReloadTime && rayData.collide == false && this.action != enemyActionTypes.HIT) {
                        if (Date.now() > this.lastShoot + _Config__WEBPACK_IMPORTED_MODULE_4__.config.enemyReloadTime && this.action != _Config__WEBPACK_IMPORTED_MODULE_4__.enemyActionTypes.HIT) {
                            this.changeAction(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyActionTypes.SHOOT, camera);
                        }
                    };
                    Enemy.prototype.checkShoot = function (camera) {
                        var blocks = __spreadArray(__spreadArray([], this.lvlCreator.objects.walls, true), this.lvlCreator.objects.doors, true);
                        var raycaster = new _Raycaster__WEBPACK_IMPORTED_MODULE_5__["default"](camera);
                        var rayData = raycaster.create(this.pos, 1, blocks, camera.pos);
                        return rayData.collide;
                    };
                    Enemy.prototype.shootPlayer = function (camera) {
                        this.lastShoot = Date.now() + _Config__WEBPACK_IMPORTED_MODULE_4__.config.enemyReloadTime;
                        _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(this.name == 'GUARD' ? _Config__WEBPACK_IMPORTED_MODULE_4__.AudioNames.GUARD_ATTACK : _Config__WEBPACK_IMPORTED_MODULE_4__.AudioNames.DOG_ATTACK);
                        camera.hit(this);
                    };
                    Enemy.prototype.nextPathTarget = function (patrol) {
                        if (patrol === void 0) { patrol = false; }
                        if (this.pathIndex + 1 < this.path.length) {
                            this.pathIndex++;
                            this.targetPos = this.path[this.pathIndex];
                            this.checkToDoorsOpen();
                            this.enemyLookAt(this.targetPos);
                        }
                        else if (patrol == true) {
                            this.patrolArea();
                        }
                    };
                    Enemy.prototype.checkToDoorsOpen = function () {
                        var _this = this;
                        this.lvlCreator.objects.doors.forEach(function (e) {
                            if (e.startPos.isEval(_this.targetPos)) {
                                e.forceOpen();
                            }
                        });
                    };
                    Enemy.prototype.move = function (deltaTime, slow) {
                        if (slow === void 0) { slow = false; }
                        this.pos.x += Math.sign(this.targetPos.x - this.pos.x) * Math.min(deltaTime * (this.moveSpeed / (slow ? 2 : 1)), Math.abs(this.targetPos.x - this.pos.x));
                        this.pos.z += Math.sign(this.targetPos.z - this.pos.z) * Math.min(deltaTime * (this.moveSpeed / (slow ? 2 : 1)), Math.abs(this.targetPos.z - this.pos.z));
                    };
                    Enemy.prototype.checkSpot = function (camera) {
                        if (this.spotted == false) {
                            var angleString = this.angleStatusToString();
                            var spotRange = _Config__WEBPACK_IMPORTED_MODULE_4__.config.enemyFrontSpotRange;
                            if (angleString) {
                                if (angleString.indexOf("FRONT") == -1) {
                                    spotRange = _Config__WEBPACK_IMPORTED_MODULE_4__.config.enemyBackSpotRange;
                                }
                                var blocks = __spreadArray(__spreadArray([], this.lvlCreator.objects.walls, true), this.lvlCreator.objects.doors, true);
                                var raycaster = new _Raycaster__WEBPACK_IMPORTED_MODULE_5__["default"](camera);
                                var rayData = raycaster.create(this.pos, spotRange, blocks, camera.pos);
                                if (rayData.collide == false && rayData.dist < spotRange) {
                                    this.detectPlayer(camera);
                                }
                            }
                        }
                    };
                    Enemy.prototype.angleStatusToString = function () {
                        var _this = this;
                        var angle = undefined;
                        Object.keys(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyAngleStatus).forEach(function (e) {
                            if (_Config__WEBPACK_IMPORTED_MODULE_4__.enemyAngleStatus[e] == _this.angleStatus) {
                                angle = e;
                            }
                        });
                        return angle;
                    };
                    Enemy.prototype.checkViewAngleToTarget = function (obj) {
                        var lookDir = _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"].fromAngle(this.rotation.y);
                        var targetPos = obj.pos.clone().sub(this.pos);
                        var angleToLook = Math.atan2(lookDir.z, lookDir.x);
                        var angleToTarget = Math.atan2(targetPos.z, targetPos.x);
                        var diff = angleToLook - angleToTarget;
                        if (diff > Math.PI)
                            diff -= 2 * Math.PI;
                        if (diff < -Math.PI)
                            diff += 2 * Math.PI;
                        return diff + Math.PI;
                    };
                    Enemy.prototype.toAngleStatus = function (angle) {
                        angle = angle * 180 / Math.PI;
                        if (angle >= 157.5 && angle <= 202.5)
                            this.changeAngle(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyAngleStatus.FRONT);
                        else if (angle >= 202.5 && angle <= 247.5)
                            this.changeAngle(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyAngleStatus.FRONT_LEFT);
                        else if (angle >= 247.5 && angle <= 292.5)
                            this.changeAngle(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyAngleStatus.LEFT);
                        else if (angle >= 292.5 && angle <= 337.5)
                            this.changeAngle(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyAngleStatus.BACK_LEFT);
                        else if (angle <= 22.5 || angle >= 337.5)
                            this.changeAngle(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyAngleStatus.BACK);
                        else if (angle >= 22.5 && angle <= 67.5)
                            this.changeAngle(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyAngleStatus.BACK_RIGHT);
                        else if (angle >= 67.5 && angle <= 112.5)
                            this.changeAngle(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyAngleStatus.RIGHT);
                        else if (angle >= 112.5 && angle <= 157.5)
                            this.changeAngle(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyAngleStatus.FRONT_RIGHT);
                    };
                    Enemy.prototype.changeAngle = function (angleStatus) {
                        if (this.angleStatus != angleStatus) {
                            this.angleStatus = angleStatus;
                            this.animManager.changeEnemyAnimationTextures(this);
                        }
                    };
                    Enemy.prototype.detectPlayer = function (camera) {
                        if (this.spotted == false) {
                            _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(this.name == 'GUARD' ? _Config__WEBPACK_IMPORTED_MODULE_4__.AudioNames.GUARD_DETECT : _Config__WEBPACK_IMPORTED_MODULE_4__.AudioNames.DOG_DETECT);
                            this.spotted = true;
                            this.goToPlayer(camera);
                            this.changeAction(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyActionTypes.RUN);
                            this.lastShoot = Date.now() + (_Config__WEBPACK_IMPORTED_MODULE_4__.config.enemyReloadTime / 2);
                        }
                        // this.animManager.change(this, animNames.ENEMY_RUN);
                    };
                    Enemy.prototype.goToPlayer = function (camera) {
                        if (this.pathFinder.toAdvancePathPosition(camera.pos).isEval(this.lastTarget) == false) {
                            this.lastTarget = this.pathFinder.toAdvancePathPosition(camera.pos);
                            var tab = this.pathFinder.findPath(this.pos, camera.pos);
                            var path = this.pathToPos(tab);
                            if (path.length > 0) {
                                this.path = Array.from(path);
                                this.targetPos = this.path[0];
                                this.pathIndex = 0;
                                this.checkToDoorsOpen();
                                this.enemyLookAt(this.targetPos);
                            }
                        }
                    };
                    Enemy.prototype.enemyLookAt = function (vec) {
                        this.rotation.y = -this.angleToTarget(vec) + Math.PI;
                    };
                    Enemy.prototype.pathToPos = function (tab) {
                        var pos = [];
                        tab.map(function (e) { return pos.push(new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](e.x * _Config__WEBPACK_IMPORTED_MODULE_4__.config.wallSize, 0, e.z * _Config__WEBPACK_IMPORTED_MODULE_4__.config.wallSize)); });
                        return pos;
                    };
                    Enemy.prototype.setPatrol = function (pos) {
                        this.patrolTarget = pos;
                        // this.patrolArea();
                    };
                    Enemy.prototype.patrolArea = function () {
                        if (this.patrolTarget) {
                            var path = void 0;
                            if (this.path.length == 0 || this.path[this.path.length - 1].isEval(this.startPos)) {
                                var tab = this.pathFinder.findPath(this.pos, this.patrolTarget);
                                path = this.pathToPos(tab);
                            }
                            else {
                                var tab = this.pathFinder.findPath(this.pos, this.startPos);
                                path = this.pathToPos(tab);
                            }
                            if (path.length > 0) {
                                this.path = Array.from(path);
                                this.targetPos = this.path[0];
                                this.pathIndex = 0;
                                this.checkToDoorsOpen();
                                this.enemyLookAt(this.targetPos);
                            }
                        }
                    };
                    Enemy.prototype.hit = function (dmg) {
                        dmg = (9.5 + Math.random()) / 10 * dmg;
                        var angleString = this.angleStatusToString();
                        if (angleString.indexOf("BACK") != -1) {
                            dmg *= 2;
                        }
                        this.hp -= dmg;
                        if (this.hp <= 0) {
                            this.hp = 0;
                            this.dead = true;
                            this.changeAction(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyActionTypes.DEAD);
                            if (this.name == "DOG")
                                _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_4__.AudioNames.DOG_DEATH);
                            else
                                this.randomEnemyDeadSound();
                        }
                        else {
                            this.changeAction(_Config__WEBPACK_IMPORTED_MODULE_4__.enemyActionTypes.HIT);
                        }
                        return this.dead;
                    };
                    Enemy.prototype.randomEnemyDeadSound = function () {
                        var rand = Math.ceil(Math.random() * 8);
                        if (rand == 1)
                            _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_4__.AudioNames.GUARD_DEAD_1);
                        else if (rand == 2)
                            _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_4__.AudioNames.GUARD_DEAD_2);
                        else if (rand == 3)
                            _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_4__.AudioNames.GUARD_DEAD_3);
                        else if (rand == 4)
                            _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_4__.AudioNames.GUARD_DEAD_4);
                        else if (rand == 5)
                            _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_4__.AudioNames.GUARD_DEAD_5);
                        else if (rand == 6)
                            _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_4__.AudioNames.GUARD_DEAD_6);
                        else if (rand == 7)
                            _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_4__.AudioNames.GUARD_DEAD_7);
                        else
                            _MyAudio__WEBPACK_IMPORTED_MODULE_6__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_4__.AudioNames.GUARD_DEAD_8);
                    };
                    return Enemy;
                }(_Object3D__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Enemy);


                /***/
}),

/***/ "./src/components/game/objects/Furniture.ts":
/*!**************************************************!*\
  !*** ./src/components/game/objects/Furniture.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Matrix4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Matrix4 */ "./src/components/game/Matrix4.ts");
/* harmony import */ var _Object3D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Object3D */ "./src/components/game/objects/Object3D.ts");
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Vector3 */ "./src/components/game/Vector3.ts");
/* harmony import */ var _Vector4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Vector4 */ "./src/components/game/Vector4.ts");
                var __extends = (undefined && undefined.__extends) || (function () {
                    var extendStatics = function (d, b) {
                        extendStatics = Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
                        return extendStatics(d, b);
                    };
                    return function (d, b) {
                        if (typeof b !== "function" && b !== null)
                            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                        extendStatics(d, b);
                        function __() { this.constructor = d; }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                })();




                var Furniture = /** @class */ (function (_super) {
                    __extends(Furniture, _super);
                    function Furniture(x, y, z, width) {
                        var _this = _super.call(this) || this;
                        _this.pos = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, z);
                        _this.rotation = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0, 0);
                        _this.scale = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](1, 1, 1);
                        _this.width = width;
                        _this.deep = width;
                        _this.texture = 'OBJECT';
                        _this.textureName = '';
                        _this.count = 6;
                        _this.posArray = new Float32Array();
                        _this.startTextureCoords = [];
                        _this.tempTextureCoords = [];
                        _this.textureArray = new Float32Array();
                        _this.calsPos();
                        _this.calcTexture();
                        return _this;
                    }
                    Furniture.prototype.calsPos = function () {
                        this.posArray = new Float32Array([
                            0,
                            0,
                            this.width / 2,
                            0,
                            this.width,
                            this.width / 2,
                            this.width,
                            0,
                            this.width / 2,
                            0,
                            this.width,
                            this.width / 2,
                            this.width,
                            this.width,
                            this.width / 2,
                            this.width,
                            0,
                            this.width / 2,
                        ]);
                        var matrix = new _Matrix4__WEBPACK_IMPORTED_MODULE_0__["default"]().xRotate(Math.PI);
                        matrix.translate(-(this.width / 2), -(this.width / 2), -(this.width / 2));
                        for (var i = 0; i < this.posArray.length; i += 3) {
                            var vec = _Vector4__WEBPACK_IMPORTED_MODULE_3__["default"].vectorMultiply(new _Vector4__WEBPACK_IMPORTED_MODULE_3__["default"](this.posArray[i + 0], this.posArray[i + 1], this.posArray[i + 2]), matrix);
                            this.posArray[i + 0] = vec.x;
                            this.posArray[i + 1] = vec.y;
                            this.posArray[i + 2] = vec.z;
                        }
                    };
                    Furniture.prototype.calcTexture = function () {
                        var tab = [
                            0, 0,
                            0, 1,
                            1, 0,
                            0, 1,
                            1, 1,
                            1, 0
                        ];
                        this.startTextureCoords = Array.from(tab);
                        this.tempTextureCoords = Array.from(tab);
                    };
                    Furniture.prototype.update = function (deltaTime, camera) {
                        this.lookAtCamera(camera);
                    };
                    return Furniture;
                }(_Object3D__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Furniture);


                /***/
}),

/***/ "./src/components/game/objects/Object3D.ts":
/*!*************************************************!*\
  !*** ./src/components/game/objects/Object3D.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Vector2 */ "./src/components/game/Vector2.ts");
/* harmony import */ var _Library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Library */ "./src/components/Library.ts");
                var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
                    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
                        if (ar || !(i in from)) {
                            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                            ar[i] = from[i];
                        }
                    }
                    return to.concat(ar || Array.prototype.slice.call(from));
                };


                var Object3D = /** @class */ (function () {
                    function Object3D() {
                    }
                    Object3D.prototype.textureSet = function (type, name, wall, shadow) {
                        if (shadow === void 0) { shadow = false; }
                        var texData = this.getTextureData(type);
                        if (texData != null) {
                            if (wall == undefined) {
                                this.textureName = name;
                                var newPos = this.CalculateNewTexture(this.startTextureCoords, texData.sizeX, texData.sizeY, texData.pos[name].x, texData.pos[name].y, true);
                                this.tempTextureCoords = Array.from(newPos);
                            }
                            else {
                                var tab = this.startTextureCoords.filter(function (e, i) { return i >= wall * 12 && i < (wall + 1) * 12; });
                                var newPos = this.CalculateNewTexture(tab, texData.sizeX, texData.sizeY, texData.pos[name].x + (wall == 3 || wall == 4 ? 1 : 0), texData.pos[name].y, false, shadow);
                                var newPosTab = __spreadArray(__spreadArray(__spreadArray([], this.tempTextureCoords.filter(function (e, i) { return i < wall * 12; }), true), newPos, true), this.tempTextureCoords.filter(function (e, i) { return i >= (wall + 1) * 12; }), true);
                                this.tempTextureCoords = Array.from(newPosTab);
                            }
                        }
                        this.applyTexture();
                    };
                    Object3D.prototype.CalculateNewTexture = function (array, width, height, x, y, checkShadow, forceShadow) {
                        if (checkShadow === void 0) { checkShadow = false; }
                        if (forceShadow === void 0) { forceShadow = false; }
                        var tab = [];
                        for (var i = 0; i < array.length; i += 2) {
                            var v2 = new _Vector2__WEBPACK_IMPORTED_MODULE_0__["default"](array[i], array[i + 1]);
                            v2.multiplyX(1 / width);
                            v2.multiplyZ(1 / height);
                            var tX = forceShadow == true ? 1 / width * (x + 1) : checkShadow == false ? 1 / width * x : i >= 3 * 12 && i < 5 * 12 ? 1 / width * (x + 1) : 1 / width * x;
                            var tY = 1 / height * y;
                            v2.add(new _Vector2__WEBPACK_IMPORTED_MODULE_0__["default"](tX, tY));
                            tab.push.apply(tab, [this.RoundTo(1 / width, v2.x), this.RoundTo(1 / height, v2.z)]);
                        }
                        return tab;
                    };
                    Object3D.prototype.RoundTo = function (by, value) {
                        return value - (value % by);
                    };
                    Object3D.prototype.getTextureData = function (type) {
                        if (_Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData) {
                            if (type == "WALL") {
                                return _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.WALL;
                            }
                            else if (type == "ENEMY") {
                                return _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.ENEMY;
                            }
                            else if (type == "DOG") {
                                return _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.DOG;
                            }
                            else if (type == "ENEMY") {
                                return _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.ENEMY;
                            }
                            else if (type == "WEAPON") {
                                return _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.WEAPON;
                            }
                            else if (type == "OBJECT") {
                                return _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.OBJECT;
                            }
                        }
                        return null;
                    };
                    Object3D.prototype.applyTexture = function () {
                        this.textureArray = new Float32Array(this.tempTextureCoords);
                    };
                    Object3D.prototype.lookAtCamera = function (target) {
                        this.rotation.y = target.rotation.y;
                    };
                    Object3D.prototype.angleToTarget = function (pos) {
                        var targetPos = pos.clone().sub(this.pos);
                        var angleToTarget = Math.atan2(targetPos.z, targetPos.x);
                        var diff = angleToTarget - Math.PI / 2;
                        return diff;
                    };
                    return Object3D;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object3D);


                /***/
}),

/***/ "./src/components/game/objects/Pickable.ts":
/*!*************************************************!*\
  !*** ./src/components/game/objects/Pickable.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Matrix4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Matrix4 */ "./src/components/game/Matrix4.ts");
/* harmony import */ var _Object3D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Object3D */ "./src/components/game/objects/Object3D.ts");
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Vector3 */ "./src/components/game/Vector3.ts");
/* harmony import */ var _Vector4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Vector4 */ "./src/components/game/Vector4.ts");
                var __extends = (undefined && undefined.__extends) || (function () {
                    var extendStatics = function (d, b) {
                        extendStatics = Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
                        return extendStatics(d, b);
                    };
                    return function (d, b) {
                        if (typeof b !== "function" && b !== null)
                            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                        extendStatics(d, b);
                        function __() { this.constructor = d; }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                })();




                var Pickable = /** @class */ (function (_super) {
                    __extends(Pickable, _super);
                    function Pickable(action, x, y, z, width) {
                        var _this = _super.call(this) || this;
                        _this.pos = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, z);
                        _this.rotation = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0, 0);
                        _this.scale = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](1, 1, 1);
                        _this.width = width;
                        _this.deep = 0;
                        _this.texture = 'OBJECT';
                        _this.textureName = '';
                        _this.count = 6;
                        _this.action = action;
                        _this.toDelete = false;
                        _this.posArray = new Float32Array();
                        _this.startTextureCoords = [];
                        _this.tempTextureCoords = [];
                        _this.textureArray = new Float32Array();
                        _this.calsPos();
                        _this.calcTexture();
                        return _this;
                    }
                    Pickable.prototype.calsPos = function () {
                        this.posArray = new Float32Array([
                            0,
                            0,
                            this.width / 2,
                            0,
                            this.width,
                            this.width / 2,
                            this.width,
                            0,
                            this.width / 2,
                            0,
                            this.width,
                            this.width / 2,
                            this.width,
                            this.width,
                            this.width / 2,
                            this.width,
                            0,
                            this.width / 2,
                        ]);
                        var matrix = new _Matrix4__WEBPACK_IMPORTED_MODULE_0__["default"]().xRotate(Math.PI);
                        matrix.translate(-(this.width / 2), -(this.width / 2), -(this.width / 2));
                        for (var i = 0; i < this.posArray.length; i += 3) {
                            var vec = _Vector4__WEBPACK_IMPORTED_MODULE_3__["default"].vectorMultiply(new _Vector4__WEBPACK_IMPORTED_MODULE_3__["default"](this.posArray[i + 0], this.posArray[i + 1], this.posArray[i + 2]), matrix);
                            this.posArray[i + 0] = vec.x;
                            this.posArray[i + 1] = vec.y;
                            this.posArray[i + 2] = vec.z;
                        }
                    };
                    Pickable.prototype.calcTexture = function () {
                        var tab = [
                            0, 0,
                            0, 1,
                            1, 0,
                            0, 1,
                            1, 1,
                            1, 0
                        ];
                        this.startTextureCoords = Array.from(tab);
                        this.tempTextureCoords = Array.from(tab);
                    };
                    Pickable.prototype.pick = function (camera) {
                        var action = this.action(camera);
                        action ? this.toDelete = true : null;
                    };
                    Pickable.prototype.update = function (camera) {
                        if (_Vector3__WEBPACK_IMPORTED_MODULE_2__["default"].distance(camera.pos, this.pos) < camera.collisionRadius * 2) {
                            this.pick(camera);
                        }
                    };
                    return Pickable;
                }(_Object3D__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pickable);


                /***/
}),

/***/ "./src/components/game/objects/Wall.ts":
/*!*********************************************!*\
  !*** ./src/components/game/objects/Wall.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Matrix4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Matrix4 */ "./src/components/game/Matrix4.ts");
/* harmony import */ var _Object3D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Object3D */ "./src/components/game/objects/Object3D.ts");
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Vector3 */ "./src/components/game/Vector3.ts");
/* harmony import */ var _Vector4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Vector4 */ "./src/components/game/Vector4.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Config */ "./src/components/Config.ts");
/* harmony import */ var _MyAudio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../MyAudio */ "./src/components/MyAudio.ts");
                var __extends = (undefined && undefined.__extends) || (function () {
                    var extendStatics = function (d, b) {
                        extendStatics = Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
                        return extendStatics(d, b);
                    };
                    return function (d, b) {
                        if (typeof b !== "function" && b !== null)
                            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                        extendStatics(d, b);
                        function __() { this.constructor = d; }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                })();






                var Wall = /** @class */ (function (_super) {
                    __extends(Wall, _super);
                    function Wall(x, y, z, width) {
                        var _this = _super.call(this) || this;
                        _this.pos = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, z);
                        _this.scale = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](1, 1, 1);
                        _this.rotation = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0, 0);
                        _this.width = width;
                        _this.deep = width;
                        _this.secretWall = false;
                        _this.futurePos = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, z);
                        _this.moveSpeed = 0.5 * _Config__WEBPACK_IMPORTED_MODULE_4__.config.wallSize;
                        _this.texture = 'WALL';
                        _this.textureName = '';
                        _this.moved = false;
                        _this.posArray = new Float32Array();
                        _this.startTextureCoords = [];
                        _this.tempTextureCoords = [];
                        _this.textureArray = new Float32Array();
                        _this.wallTypes = {
                            "FRONT": 0,
                            "TOP": 1,
                            "BOTTOM": 2,
                            "LEFT": 3,
                            "RIGHT": 4,
                            "BACK": 5,
                        };
                        _this.count = 6 * 6;
                        _this.calcPos();
                        _this.calcTexture();
                        return _this;
                    }
                    Wall.prototype.calcPos = function () {
                        this.posArray = new Float32Array([
                            //front
                            0, 0, 0,
                            0, this.width, 0,
                            this.width, 0, 0,
                            0, this.width, 0,
                            this.width, this.width, 0,
                            this.width, 0, 0,
                            // // back
                            // 0, 0, this.width,
                            // 0, this.width, this.width,
                            // this.width, 0, this.width,
                            // 0, this.width, this.width,
                            // this.width, this.width, this.width,
                            // this.width, 0, this.width,
                            //top
                            0, 0, 0,
                            this.width, 0, 0,
                            0, 0, this.width,
                            this.width, 0, 0,
                            this.width, 0, this.width,
                            0, 0, this.width,
                            //bottom
                            0, this.width, 0,
                            0, this.width, this.width,
                            this.width, this.width, 0,
                            0, this.width, this.width,
                            this.width, this.width, this.width,
                            this.width, this.width, 0,
                            //left
                            0, 0, this.width,
                            0, this.width, this.width,
                            0, 0, 0,
                            0, this.width, this.width,
                            0, this.width, 0,
                            0, 0, 0,
                            //right
                            this.width, 0, 0,
                            this.width, this.width, 0,
                            this.width, 0, this.width,
                            this.width, this.width, 0,
                            this.width, this.width, this.width,
                            this.width, 0, this.width,
                            //back
                            0, 0, this.width,
                            this.width, 0, this.width,
                            0, this.width, this.width,
                            0, this.width, this.width,
                            this.width, 0, this.width,
                            this.width, this.width, this.width,
                        ]);
                        var matrix = new _Matrix4__WEBPACK_IMPORTED_MODULE_0__["default"]().xRotate(Math.PI);
                        matrix.translate(-(this.width / 2), -(this.width / 2), -(this.width / 2));
                        for (var i = 0; i < this.posArray.length; i += 3) {
                            var vec = _Vector4__WEBPACK_IMPORTED_MODULE_3__["default"].vectorMultiply(new _Vector4__WEBPACK_IMPORTED_MODULE_3__["default"](this.posArray[i + 0], this.posArray[i + 1], this.posArray[i + 2]), matrix);
                            this.posArray[i + 0] = vec.x;
                            this.posArray[i + 1] = vec.y;
                            this.posArray[i + 2] = vec.z;
                        }
                    };
                    Wall.prototype.calcTexture = function () {
                        var tab = [];
                        new Array(5).fill(null).map(function (e) {
                            return tab.push.apply(tab, [
                                0, 0,
                                0, 1,
                                1, 0,
                                0, 1,
                                1, 1,
                                1, 0
                            ]);
                        });
                        tab.push.apply(tab, [
                            1, 0,
                            0, 0,
                            1, 1,
                            1, 1,
                            0, 0,
                            0, 1,
                        ]);
                        this.startTextureCoords = Array.from(tab);
                        this.tempTextureCoords = Array.from(tab);
                    };
                    Wall.prototype.setAsSecretWall = function (targetPos) {
                        this.secretWall = true;
                        this.targetPos = targetPos.clone();
                    };
                    Wall.prototype.move = function () {
                        if (this.moved == false) {
                            _MyAudio__WEBPACK_IMPORTED_MODULE_5__["default"].instance.playAudio(_Config__WEBPACK_IMPORTED_MODULE_4__.AudioNames.DOORS_SECRET);
                        }
                        this.futurePos = this.targetPos.clone();
                        this.moved = true;
                    };
                    Wall.prototype.update = function (deltaTime) {
                        if (this.secretWall) {
                            if (this.pos.x != this.futurePos.x) {
                                this.pos.x += Math.sign(this.futurePos.x - this.pos.x) * Math.min(deltaTime * this.moveSpeed, Math.abs(this.futurePos.x - this.pos.x));
                            }
                            if (this.pos.z != this.futurePos.z) {
                                this.pos.z += Math.sign(this.futurePos.z - this.pos.z) * Math.min(deltaTime * this.moveSpeed, Math.abs(this.futurePos.z - this.pos.z));
                            }
                        }
                    };
                    return Wall;
                }(_Object3D__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wall);


                /***/
}),

/***/ "./src/components/game/objects/Weapon.ts":
/*!***********************************************!*\
  !*** ./src/components/game/objects/Weapon.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Config */ "./src/components/Config.ts");
/* harmony import */ var _Matrix4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Matrix4 */ "./src/components/game/Matrix4.ts");
/* harmony import */ var _Vector3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Vector3 */ "./src/components/game/Vector3.ts");
/* harmony import */ var _Vector4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Vector4 */ "./src/components/game/Vector4.ts");
/* harmony import */ var _Object3D__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Object3D */ "./src/components/game/objects/Object3D.ts");
                var __extends = (undefined && undefined.__extends) || (function () {
                    var extendStatics = function (d, b) {
                        extendStatics = Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
                        return extendStatics(d, b);
                    };
                    return function (d, b) {
                        if (typeof b !== "function" && b !== null)
                            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                        extendStatics(d, b);
                        function __() { this.constructor = d; }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                })();





                var Weapon = /** @class */ (function (_super) {
                    __extends(Weapon, _super);
                    function Weapon(type, animManager) {
                        var _this = _super.call(this) || this;
                        _this.pos = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](0, -0.21, -2);
                        _this.scale = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](0.1, 0.1, 0.1);
                        _this.rotation = new _Vector3__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0, 0);
                        _this.width = 12;
                        _this.deep = 0;
                        _this.count = 6;
                        _this.texture = 'WEAPON';
                        _this.textureName = '';
                        _this.weaponID = type.id;
                        _this.fireRate = type.attackSpeed;
                        _this.auto = type.auto;
                        _this.range = type.range;
                        _this.shootID = type.shootID;
                        _this.damage = type.damage;
                        _this.needAmmo = type.needAmmo;
                        _this.makeNoise = type.makeNoise;
                        _this.audioName = type.audioName;
                        _this.forceStop = false;
                        _this.forceChange = false;
                        _this.highestWeaponID = type.id;
                        _this.status = _Config__WEBPACK_IMPORTED_MODULE_0__.weaponStatus.DEFAULT;
                        _this.animManger = animManager;
                        _this.posArray = new Float32Array();
                        _this.startTextureCoords = [];
                        _this.tempTextureCoords = [];
                        _this.textureArray = new Float32Array();
                        _this.calsPos();
                        _this.calcTexture();
                        return _this;
                    }
                    Weapon.prototype.calsPos = function () {
                        this.posArray = new Float32Array([
                            0, 0, 0,
                            0, this.width, 0,
                            this.width, 0, 0,
                            0, this.width, 0,
                            this.width, this.width, 0,
                            this.width, 0, 0,
                        ]);
                        var matrix = new _Matrix4__WEBPACK_IMPORTED_MODULE_1__["default"]().xRotate(Math.PI);
                        matrix.translate(-(this.width / 2), -(this.width / 2), -(this.width / 2));
                        for (var i = 0; i < this.posArray.length; i += 3) {
                            var vec = _Vector4__WEBPACK_IMPORTED_MODULE_3__["default"].vectorMultiply(new _Vector4__WEBPACK_IMPORTED_MODULE_3__["default"](this.posArray[i + 0], this.posArray[i + 1], this.posArray[i + 2]), matrix);
                            this.posArray[i + 0] = vec.x;
                            this.posArray[i + 1] = vec.y;
                            this.posArray[i + 2] = vec.z;
                        }
                    };
                    Weapon.prototype.calcTexture = function () {
                        var tab = [
                            0, 0,
                            0, 1,
                            1, 0,
                            0, 1,
                            1, 1,
                            1, 0
                        ];
                        this.startTextureCoords = Array.from(tab);
                        this.tempTextureCoords = Array.from(tab);
                    };
                    Weapon.prototype.changeWeapon = function (type) {
                        if (this.weaponID != type.id) {
                            this.weaponID = type.id;
                            this.fireRate = type.attackSpeed;
                            this.auto = type.auto;
                            this.range = type.range;
                            this.shootID = type.shootID;
                            this.damage = type.damage;
                            this.needAmmo = type.needAmmo;
                            this.makeNoise = type.makeNoise;
                            this.audioName = type.audioName;
                            this.highestWeaponID = Math.max(type.id, this.highestWeaponID);
                            this.animManger.remove(this);
                            this.animManger.add(this, _Config__WEBPACK_IMPORTED_MODULE_0__.animNames.WEAPON_DEFAULT);
                        }
                    };
                    Weapon.prototype.onForceChange = function () {
                        if (this.forceChange == true) {
                            this.forceChange = false;
                            this.changeWeapon(_Config__WEBPACK_IMPORTED_MODULE_0__.weaponTypes.KNIFE);
                        }
                    };
                    Weapon.prototype.changeStatus = function (status) {
                        this.status = status;
                    };
                    Weapon.prototype.update = function () {
                    };
                    return Weapon;
                }(_Object3D__WEBPACK_IMPORTED_MODULE_4__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weapon);


                /***/
}),

/***/ "./src/components/mapCreator/Field.ts":
/*!********************************************!*\
  !*** ./src/components/mapCreator/Field.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
                var Field = /** @class */ (function () {
                    function Field(x, y) {
                        this.x = x;
                        this.y = y;
                        this.div = document.createElement('div');
                        this.div.classList.add("field");
                        this.div.style.backgroundColor = 'transparent';
                    }
                    Field.prototype.setData = function (data) {
                        this.data = data;
                    };
                    Field.prototype.removeData = function () {
                        this.data = undefined;
                        this.div.style.backgroundColor = 'transparent';
                        this.div.style.backgroundImage = 'none';
                        this.div.style.backgroundSize = '0';
                        this.div.style.backgroundPosition = '0';
                        this.div.style.backgroundPositionY = '0';
                        this.div.style.transform = "rotate(0deg)";
                        this.lastActiveData = undefined;
                        this.difficulty = undefined;
                        this.alive = undefined;
                        if (this.child) {
                            this.child.removeData();
                            this.removeChild();
                        }
                        if (this.parent) {
                            this.parent.removeChild();
                            this.removeParent();
                        }
                    };
                    Field.prototype.setSize = function (size) {
                        this.div.style.width = size + "px";
                        this.div.style.height = size + "px";
                    };
                    Field.prototype.setImg = function (activeElement) {
                        this.lastActiveData = activeElement;
                        this.div.style.backgroundImage = "url(" + activeElement.imgUrl + ")";
                        this.div.style.backgroundSize = this.div.clientWidth * activeElement.imgSizeX + "px " + this.div.clientHeight * activeElement.imgSizeY + "px";
                        this.div.style.backgroundPosition = "-" + this.div.clientWidth * activeElement.x + "px";
                        this.div.style.backgroundPositionY = "-" + this.div.clientHeight * activeElement.y + "px";
                    };
                    Field.prototype.updateBackgroundSize = function () {
                        if (this.lastActiveData) {
                            this.div.style.backgroundSize = this.div.clientWidth * this.lastActiveData.imgSizeX + "px " + this.div.clientHeight * this.lastActiveData.imgSizeY + "px";
                            this.div.style.backgroundPosition = "-" + this.div.clientWidth * this.lastActiveData.x + "px";
                            this.div.style.backgroundPositionY = "-" + this.div.clientHeight * this.lastActiveData.y + "px";
                        }
                    };
                    Field.prototype.rotateBackground = function (deg) {
                        this.div.style.transform = "rotate(" + deg + "deg)";
                    };
                    Field.prototype.setParent = function (field) {
                        this.parent = field;
                    };
                    Field.prototype.setChild = function (field) {
                        if (this.child) {
                            this.child.removeData();
                            this.removeChild();
                        }
                        this.child = field;
                    };
                    Field.prototype.removeParent = function () {
                        this.parent = undefined;
                    };
                    Field.prototype.removeChild = function () {
                        this.child = undefined;
                    };
                    Field.prototype.setAlive = function (bool) {
                        this.alive = bool;
                    };
                    Field.prototype.setDifficulty = function (diff) {
                        this.difficulty = diff;
                    };
                    return Field;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Field);


                /***/
}),

/***/ "./src/components/mapCreator/MapCreator.ts":
/*!*************************************************!*\
  !*** ./src/components/mapCreator/MapCreator.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
});
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./src/components/mapCreator/Field.ts");
/* harmony import */ var _Library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Library */ "./src/components/Library.ts");
                var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
                    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
                        if (ar || !(i in from)) {
                            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                            ar[i] = from[i];
                        }
                    }
                    return to.concat(ar || Array.prototype.slice.call(from));
                };


                var MapCreator = /** @class */ (function () {
                    function MapCreator(parent, root, keyboard) {
                        this.parent = parent;
                        this.root = root;
                        this.keyboard = keyboard;
                        this.div = document.createElement("div");
                        this.div.id = "mapCreator";
                        this.div.classList.add("displayNone");
                        this.mapSizeDiv = document.createElement("div");
                        this.mapSizeDiv.id = "mapSizeDiv";
                        this.board = document.createElement("div");
                        this.board.id = "creatorBoard";
                        this.div.appendChild(this.mapSizeDiv);
                        this.div.appendChild(this.board);
                        this.mapSizeSetting();
                        this.mouseDown = false;
                        this.rightDown = false;
                        this.currX = 0;
                        this.currY = 0;
                        this.fieldsList = [];
                        root.appendChild(this.div);
                    }
                    MapCreator.prototype.mapSizeSetting = function () {
                        var _this = this;
                        var fromJson = document.createElement("button");
                        fromJson.innerHTML = "FROM JSON";
                        this.mapSizeDiv.appendChild(fromJson);
                        var inputX = document.createElement("input");
                        inputX.placeholder = "x";
                        inputX.value = '10';
                        this.mapSizeDiv.appendChild(inputX);
                        var inputY = document.createElement("input");
                        inputY.placeholder = "y";
                        inputY.value = '10';
                        this.mapSizeDiv.appendChild(inputY);
                        var btn = document.createElement("button");
                        btn.innerHTML = "CREATE";
                        this.mapSizeDiv.appendChild(btn);
                        btn.onclick = function () {
                            var x = parseInt(inputX.value);
                            var y = parseInt(inputY.value);
                            _this.createCreator(x, y);
                        };
                        fromJson.onclick = function () {
                            _this.importJSON();
                        };
                    };
                    MapCreator.prototype.active = function () {
                        this.div.classList.toggle("displayNone");
                    };
                    MapCreator.prototype.createCreator = function (x, y) {
                        var _this = this;
                        this.boardArea = undefined;
                        this.board.innerHTML = '';
                        this.fieldsList = [];
                        this.currX = x;
                        this.currY = y;
                        var menu = document.createElement('div');
                        menu.id = "creatorMenu";
                        this.board.appendChild(menu);
                        this.boardArea = document.createElement('div');
                        this.boardArea.id = "creatorBoardArea";
                        this.board.appendChild(this.boardArea);
                        var topMenu = document.createElement("div");
                        topMenu.id = "topMenu";
                        menu.appendChild(topMenu);
                        var el = document.createElement('div');
                        el.innerHTML = 'CREATE';
                        el.classList.add('menuElement');
                        topMenu.appendChild(el);
                        el.style.backgroundColor = '#455A64';
                        el.style.color = '#FF5252';
                        el.onclick = function () { _this.createNewGameMap(); };
                        var el2 = document.createElement('div');
                        el2.innerHTML = 'TO JSON';
                        el2.classList.add('menuElement');
                        topMenu.appendChild(el2);
                        el2.style.backgroundColor = '#455A64';
                        el2.style.color = '#FF5252';
                        el2.onclick = function () { _this.generateJSON(); };
                        this.createButtons(menu);
                        var fieldsBoard = document.createElement('div');
                        fieldsBoard.id = "fieldsBoard";
                        var fieldSize = Math.min((this.boardArea.clientHeight - 20) / y, (this.boardArea.clientWidth - 20) / x);
                        window.onmouseup = function (e) {
                            if (e.button == 0) {
                                _this.mouseDown = false;
                            }
                            else if (e.button == 2) {
                                _this.rightDown = false;
                            }
                        };
                        for (var i = 1; i <= x; i++) {
                            var column = document.createElement('div');
                            column.classList.add('boardColumn');
                            this.fieldsList[i] = [];
                            var _loop_1 = function (j) {
                                var field = new _Field__WEBPACK_IMPORTED_MODULE_0__["default"](i, j);
                                field.setSize(fieldSize);
                                column.appendChild(field.div);
                                this_1.fieldsList[i][j] = field;
                                field.div.onmousedown = function (e) {
                                    if (e.button == 0) {
                                        _this.mouseDown = true;
                                        _this.clickAction(e, field);
                                    }
                                    else if (e.button == 2) {
                                        field.removeData();
                                        _this.rightDown = true;
                                    }
                                };
                                field.div.onmouseover = function (e) {
                                    _this.fieldsList.forEach(function (e) { return e.forEach(function (p) { return p.div.classList.remove('helperClassAfter'); }); });
                                    if (_this.mouseDown == true && _this.activeElement) {
                                        _this.clickAction(e, field);
                                        // this.fillField(field);
                                    }
                                    else if (_this.rightDown) {
                                        field.removeData();
                                    }
                                    if (field.parent) {
                                        field.parent.div.classList.add('helperClassAfter');
                                    }
                                    if (field.child) {
                                        field.child.div.classList.add('helperClassAfter');
                                    }
                                };
                                field.div.onclick = function () {
                                    // this.clickAction(field);
                                };
                                field.div.oncontextmenu = function (e) {
                                    e.preventDefault();
                                    field.removeData();
                                };
                            };
                            var this_1 = this;
                            for (var j = 1; j <= y; j++) {
                                _loop_1(j);
                            }
                            fieldsBoard.appendChild(column);
                        }
                        this.boardArea.appendChild(fieldsBoard);
                    };
                    MapCreator.prototype.clickAction = function (e, field) {
                        if (this.keyboard.bools.ctrl.status) {
                            if (field.data && (field.data.type == 'wall' || field.data.type == 'enemy' || field.data.type == 'player')) {
                                this.createAdditionalMenu(e, field);
                            }
                        }
                        else if (this.activeElement) {
                            this.fillField(field);
                        }
                    };
                    MapCreator.prototype.createButtons = function (menuDiv) {
                        var _this = this;
                        var walls = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.WALL.pos;
                        var obj = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.OBJECT.pos;
                        var btnsData = { SPECIAL: [], CREATURES: [], WALLS: [], PICKABLES: [], FURNITURES: [] };
                        for (var name_1 in walls) {
                            var imgData = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.WALL;
                            var type = name_1.indexOf('door') != 0 ? 'wall' : 'door';
                            btnsData.WALLS.push({ type: type, name: name_1, x: walls[name_1].x, y: walls[name_1].y, imgUrl: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.WALL.src, imgX: imgData.sizeX, imgY: imgData.sizeY });
                        }
                        for (var name_2 in obj) {
                            var imgData = _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.OBJECT;
                            if (name_2.indexOf('pickable') == -1) {
                                btnsData.FURNITURES.push({ type: 'furniture', name: name_2, x: obj[name_2].x, y: obj[name_2].y, imgUrl: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.OBJECT.src, imgX: imgData.sizeX, imgY: imgData.sizeY });
                            }
                            else {
                                btnsData.PICKABLES.push({ type: 'pickable', name: name_2, x: obj[name_2].x, y: obj[name_2].y, imgUrl: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.OBJECT.src, imgX: imgData.sizeX, imgY: imgData.sizeY });
                            }
                        }
                        btnsData.CREATURES.push({
                            type: 'player',
                            name: Object.keys(_Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.PLAYER.pos)[0],
                            x: 0,
                            y: 0,
                            imgUrl: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.PLAYER.src,
                            imgX: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.PLAYER.sizeX,
                            imgY: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.PLAYER.sizeY,
                        });
                        btnsData.CREATURES.push({
                            type: 'enemy',
                            name: Object.keys(_Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.ENEMY.pos)[0],
                            x: 0,
                            y: 0,
                            imgUrl: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.ENEMY.src,
                            imgX: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.ENEMY.sizeX,
                            imgY: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.ENEMY.sizeY,
                        });
                        btnsData.SPECIAL.push({
                            type: 'end',
                            name: 'end_game',
                            x: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.MAPCREATOR.pos.end_game.x,
                            y: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.MAPCREATOR.pos.end_game.y,
                            imgUrl: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.MAPCREATOR.src,
                            imgX: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.MAPCREATOR.sizeX,
                            imgY: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.MAPCREATOR.sizeY,
                        });
                        var _loop_2 = function (type) {
                            var groupTitle = document.createElement('div');
                            groupTitle.classList.add('mapBtnGroupTitle');
                            groupTitle.innerHTML = type;
                            menuDiv.appendChild(groupTitle);
                            var btnsGroup = document.createElement('div');
                            btnsGroup.classList.add('menuBtnGroup');
                            menuDiv.appendChild(btnsGroup);
                            var tabData = btnsData[type];
                            tabData.forEach(function (btn) {
                                var btnDiv = document.createElement('div');
                                btnDiv.classList.add('smallMenuBtn');
                                btnsGroup.appendChild(btnDiv);
                                btnDiv.style.backgroundImage = "url(" + btn.imgUrl + ")";
                                btnDiv.style.backgroundSize = btnDiv.clientWidth * btn.imgX + "px " + btnDiv.clientHeight * btn.imgY + "px";
                                btnDiv.style.backgroundPosition = "-" + btnDiv.clientWidth * btn.x + "px";
                                btnDiv.style.backgroundPositionY = "-" + btnDiv.clientHeight * btn.y + "px";
                                btnDiv.onclick = function () {
                                    _this.activeElement = {
                                        type: btn.type,
                                        texture: btn.name,
                                        imgUrl: btn.imgUrl,
                                        imgSizeX: btn.imgX,
                                        imgSizeY: btn.imgY,
                                        x: btn.x,
                                        y: btn.y,
                                        name: btn.type == "pickable" ? _this.getPickableName(btn.name) : null,
                                        look: btn.type == "enemy" || btn.type == 'player' ? "DOWN" : null,
                                        alive: btn.type == 'enemy' ? true : null,
                                        difficulty: btn.type == 'enemy' ? 1 : null
                                    };
                                };
                            });
                        };
                        for (var type in btnsData) {
                            _loop_2(type);
                        }
                    };
                    MapCreator.prototype.getPickableName = function (textureName) {
                        switch (textureName) {
                            case "pickable_clip": return 'CLIP';
                            case "pickable_dog_food": return 'DOG_FOOD';
                            case "pickable_blood": return 'BLOOD';
                            case "pickable_cross": return 'CROSS';
                            case "pickable_chalice": return 'CHALICE';
                            case "pickable_chest": return 'CHEST';
                            case "pickable_crown": return 'CROWN';
                            case "pickable_chicken_meal": return 'CHICKEN_MEAL';
                            case "pickable_extra_life": return 'EXTRA_LIFE';
                            case "pickable_bloody_skeleton": return 'BLOODY_SKELETON';
                            case "pickable_key_silver": return 'KEY_SILVER';
                            case "pickable_key_gold": return 'KEY_GOLD';
                            case "pickable_first_aid_kit": return 'FIRST_AID_KIT';
                            case "pickable_machinegun": return 'MACHINEGUN';
                            case "pickable_chaingun": return 'CHAINGUN';
                        }
                    };
                    MapCreator.prototype.fillField = function (field) {
                        if (this.activeElement.type == 'player' && this.inFields('player')) {
                            return;
                        }
                        // if ((this.activeElement.type != 'player' || !this.inFields('player')) || (this.activeElement.type != 'end' && !this.inFields('end'))) || ( )) {
                        field.setData({
                            type: this.activeElement.type,
                            texture: this.activeElement.texture,
                            name: this.activeElement.name,
                            look: this.activeElement.look
                        });
                        field.setImg(this.activeElement);
                        if (this.activeElement.type == 'target') {
                            field.setParent(this.activeElement.from);
                            this.activeElement.from.setChild(field);
                            this.activeElement = undefined;
                        }
                        // }
                    };
                    MapCreator.prototype.inFields = function (type) {
                        return this.fieldsList.flat().filter(function (e) { return e.data && e.data.type == type; }).length != 0;
                    };
                    MapCreator.prototype.createNewGameMap = function () {
                        var mapData = this.toMapObject();
                        if (mapData != null) {
                            this.board.innerHTML = '';
                            this.active();
                            this.parent.creatorActive = false;
                            this.parent.createLevel(JSON.stringify(mapData));
                        }
                        else {
                            alert("NIE STWORZONO PLAYERA");
                        }
                    };
                    MapCreator.prototype.updateFieldsSize = function () {
                        var fieldSize = Math.min((this.boardArea.clientHeight - 20) / this.currY, (this.boardArea.clientWidth - 20) / this.currX);
                        this.fieldsList.flat().forEach(function (e) {
                            e.setSize(fieldSize);
                            e.updateBackgroundSize();
                        });
                    };
                    MapCreator.prototype.toMapObject = function () {
                        var array = [];
                        var playerFound = false;
                        this.fieldsList.flat().forEach(function (e) {
                            if (e.data) {
                                if (e.data.type == "player")
                                    playerFound = true;
                                if (e.data.type != 'target') {
                                    array.push({
                                        x: e.x,
                                        z: e.y,
                                        type: e.data.type,
                                        texture: e.data.texture,
                                        name: e.data.name ? e.data.name : undefined,
                                        look: e.data.look ? e.data.look : undefined,
                                        goTo: e.child ? { x: e.child.x, z: e.child.y } : undefined,
                                        alive: e.alive != undefined ? e.alive : undefined,
                                        difficulty: e.difficulty != undefined ? e.difficulty : undefined
                                    });
                                }
                            }
                        });
                        array = __spreadArray(__spreadArray(__spreadArray([], array.filter(function (e) { return e.type == 'wall'; }), true), array.filter(function (e) { return e.type == "door"; }), true), array.filter(function (e) { return e.type != 'wall' && e.type != "door"; }), true);
                        var data = {
                            sizeX: this.currX,
                            sizeY: this.currY,
                            objectData: array
                        };
                        return playerFound ? data : null;
                    };
                    MapCreator.prototype.generateJSON = function () {
                        var mapData = this.toMapObject();
                        if (mapData != null) {
                            var name_3 = prompt('Podaj nazwę pliku');
                            name_3 = name_3 == '' ? 'level' : name_3;
                            var jsonData = JSON.stringify(mapData);
                            var blob = new Blob([jsonData], { type: "application/json" });
                            var url = URL.createObjectURL(blob);
                            var a = document.createElement("a");
                            a.href = url;
                            a.download = name_3;
                            a.click();
                        }
                        else {
                            alert("NIE STWORZONO PLAYERA");
                        }
                    };
                    MapCreator.prototype.importJSON = function () {
                        var _this = this;
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            //@ts-ignore
                            var newData = JSON.parse(e.currentTarget.result);
                            _this.generateMapFromJSON(newData);
                        };
                        var fileInput = document.createElement('input');
                        fileInput.type = "file";
                        fileInput.onchange = function () {
                            var file = fileInput.files[0];
                            reader.readAsText(file, 'utf-8');
                        };
                        fileInput.click();
                    };
                    MapCreator.prototype.generateMapFromJSON = function (data) {
                        this.createCreator(data.sizeX, data.sizeY);
                        var _loop_3 = function (item) {
                            var currItem = data.objectData[item];
                            var imgData = this_2.getImgInfo(currItem.type);
                            var field = this_2.fieldsList.flat().find(function (e) { return e.x == currItem.x && e.y == currItem.z; });
                            if (field) {
                                field.setData({
                                    type: currItem.type,
                                    texture: currItem.texture,
                                    name: currItem.name ? currItem.name : undefined,
                                    look: currItem.look ? currItem.look : undefined,
                                });
                                if (currItem.goTo) {
                                    var target = this_2.fieldsList.flat().find(function (e) { return e.x == currItem.goTo.x && e.y == currItem.goTo.z; });
                                    if (target) {
                                        this_2.setSpecialTarget(field);
                                        this_2.fillField(target);
                                    }
                                }
                                if (currItem.alive != undefined) {
                                    this_2.changeAliveStatus(field, currItem.alive);
                                }
                                if (currItem.difficulty != undefined) {
                                    this_2.changeDifficulty(field, currItem.difficulty);
                                }
                                if (currItem.look) {
                                    this_2.changeDirection(field, currItem.look);
                                }
                                field.setImg({
                                    type: currItem.type,
                                    texture: currItem.texture,
                                    imgUrl: imgData.imgURL,
                                    imgSizeX: imgData.imgData.sizeX,
                                    imgSizeY: imgData.imgData.sizeY,
                                    x: imgData.imgData.pos[currItem.texture].x,
                                    y: imgData.imgData.pos[currItem.texture].y,
                                    name: currItem.name ? currItem.name : undefined,
                                    difficulty: null,
                                    alive: null
                                });
                            }
                        };
                        var this_2 = this;
                        for (var item in data.objectData) {
                            _loop_3(item);
                        }
                    };
                    MapCreator.prototype.getImgInfo = function (type) {
                        switch (type) {
                            case 'wall': {
                                return { imgURL: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.WALL.src, imgData: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.WALL };
                            }
                            case 'door': {
                                return { imgURL: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.WALL.src, imgData: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.WALL };
                            }
                            case 'player': {
                                return { imgURL: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.PLAYER.src, imgData: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.PLAYER };
                            }
                            case 'enemy': {
                                return { imgURL: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.ENEMY.src, imgData: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.ENEMY };
                            }
                            case 'pickable': {
                                return { imgURL: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.OBJECT.src, imgData: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.OBJECT };
                            }
                            case 'furniture': {
                                return { imgURL: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.OBJECT.src, imgData: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.OBJECT };
                            }
                            case 'end': {
                                return { imgURL: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.MAPCREATOR.src, imgData: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.MAPCREATOR };
                            }
                        }
                    };
                    MapCreator.prototype.createAdditionalMenu = function (e, field) {
                        var _this = this;
                        var addMenu = document.getElementById('additionalMenu');
                        if (addMenu)
                            this.removeAddMenu(addMenu);
                        var additionalMenu = document.createElement('div');
                        additionalMenu.id = "additionalMenu";
                        this.boardArea.appendChild(additionalMenu);
                        var menuTitle = document.createElement('div');
                        menuTitle.id = 'additionalMenuTitle';
                        menuTitle.innerHTML = field.data.type.toUpperCase();
                        additionalMenu.appendChild(menuTitle);
                        var closeBtn = document.createElement('div');
                        closeBtn.id = 'additionalMenuClose';
                        closeBtn.innerHTML = "X";
                        menuTitle.appendChild(closeBtn);
                        var menuContext = document.createElement('div');
                        menuContext.id = 'additionalMenuContext';
                        additionalMenu.appendChild(menuContext);
                        if (field.data.type != 'wall') {
                            var direction_1 = document.createElement('select');
                            direction_1.id = 'enemyDirection';
                            menuContext.appendChild(direction_1);
                            ['UP', "LEFT", "DOWN", "RIGHT"].forEach(function (e) {
                                var option = document.createElement('option');
                                option.value = e;
                                option.innerHTML = e;
                                field.data.look == e ? option.selected = true : null;
                                direction_1.appendChild(option);
                            });
                            direction_1.onchange = function () { _this.changeDirection(field, direction_1.value); };
                        }
                        if (field.data.type == 'enemy') {
                            var alive_1 = document.createElement('select');
                            alive_1.id = "enemyAlive";
                            menuContext.appendChild(alive_1);
                            ['TRUE', 'FALSE'].forEach(function (e) {
                                var option = document.createElement('option');
                                option.value = e;
                                option.innerHTML = e;
                                field.alive == false && e == 'FALSE' ? option.selected = true : null;
                                alive_1.appendChild(option);
                            });
                            alive_1.onchange = function () { _this.changeAliveStatus(field, alive_1.value == "TRUE"); };
                            var difficulty_1 = document.createElement('select');
                            difficulty_1.id = 'enemySpawnDiff';
                            menuContext.appendChild(difficulty_1);
                            [1, 2, 3, 4].forEach(function (e) {
                                var option = document.createElement('option');
                                option.value = e.toString();
                                option.innerHTML = e.toString();
                                field.difficulty && e == field.difficulty ? option.selected = true : null;
                                difficulty_1.appendChild(option);
                            });
                            difficulty_1.onchange = function () { _this.changeDifficulty(field, parseInt(difficulty_1.value)); };
                        }
                        if (field.data.type != 'player') {
                            var target = document.createElement('button');
                            target.id = 'additionalMenuTargetBtn';
                            target.innerHTML = "SET TARGET";
                            menuContext.appendChild(target);
                            target.onclick = function () { _this.setSpecialTarget(field, additionalMenu); };
                        }
                        closeBtn.onclick = function () {
                            _this.removeAddMenu(additionalMenu);
                        };
                    };
                    MapCreator.prototype.removeAddMenu = function (menu) {
                        this.boardArea.removeChild(menu);
                    };
                    MapCreator.prototype.setSpecialTarget = function (field, menu) {
                        if (menu)
                            this.removeAddMenu(menu);
                        this.activeElement = {
                            type: 'target',
                            texture: field.data.type == 'wall' ? 'wall_target' : 'enemy_target',
                            imgUrl: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.graphics.MAPCREATOR.src,
                            imgSizeX: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.MAPCREATOR.sizeX,
                            imgSizeY: _Library__WEBPACK_IMPORTED_MODULE_1__["default"].instance.data.graphicsData.MAPCREATOR.sizeY,
                            x: field.data.type == 'wall' ? 1 : 0,
                            y: 0,
                            from: field,
                            difficulty: undefined,
                            alive: undefined
                        };
                    };
                    MapCreator.prototype.changeDirection = function (field, dir) {
                        field.data.look = dir;
                        if (dir == 'DOWN') {
                            field.rotateBackground(0);
                        }
                        else if (dir == 'LEFT') {
                            field.rotateBackground(90);
                        }
                        else if (dir == 'UP') {
                            field.rotateBackground(180);
                        }
                        else {
                            field.rotateBackground(270);
                        }
                        ;
                    };
                    MapCreator.prototype.changeDifficulty = function (field, diff) {
                        field.setDifficulty(diff);
                    };
                    MapCreator.prototype.changeAliveStatus = function (field, bool) {
                        field.setAlive(bool);
                    };
                    return MapCreator;
                }());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapCreator);


                /***/
}),

/***/ "./src/audio sync recursive ^\\.\\/.*$":
/*!**********************************!*\
  !*** ./src/audio/ sync ^\.\/.*$ ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

                var map = {
                    "./DSDEATH.wav": "./src/audio/DSDEATH.wav",
                    "./DSWKNIF.wav": "./src/audio/DSWKNIF.wav",
                    "./M_BACK.wav": "./src/audio/M_BACK.wav",
                    "./M_MOVE.wav": "./src/audio/M_MOVE.wav",
                    "./M_SELECT.wav": "./src/audio/M_SELECT.wav",
                    "./P_AMMO.wav": "./src/audio/P_AMMO.wav",
                    "./P_CGUN.wav": "./src/audio/P_CGUN.wav",
                    "./P_FOOD.wav": "./src/audio/P_FOOD.wav",
                    "./P_LIFE.wav": "./src/audio/P_LIFE.wav",
                    "./P_MEDKIT.wav": "./src/audio/P_MEDKIT.wav",
                    "./P_MGUN.wav": "./src/audio/P_MGUN.wav",
                    "./S_100.wav": "./src/audio/S_100.wav",
                    "./S_BONUSC.wav": "./src/audio/S_BONUSC.wav",
                    "./THEME_LEVEL.mp3": "./src/audio/THEME_LEVEL.mp3",
                    "./THEME_MENU.mp3": "./src/audio/THEME_MENU.mp3",
                    "./THEME_SPLASH.mp3": "./src/audio/THEME_SPLASH.mp3",
                    "./T_CHEST.wav": "./src/audio/T_CHEST.wav",
                    "./T_CROSS.wav": "./src/audio/T_CROSS.wav",
                    "./T_CROWN.wav": "./src/audio/T_CROWN.wav",
                    "./T_CUP.wav": "./src/audio/T_CUP.wav",
                    "./WSND0000.wav": "./src/audio/WSND0000.wav",
                    "./WSND0001.wav": "./src/audio/WSND0001.wav",
                    "./WSND0002.wav": "./src/audio/WSND0002.wav",
                    "./WSND0003.wav": "./src/audio/WSND0003.wav",
                    "./WSND0004.wav": "./src/audio/WSND0004.wav",
                    "./WSND0005.wav": "./src/audio/WSND0005.wav",
                    "./WSND0006.wav": "./src/audio/WSND0006.wav",
                    "./WSND0012.wav": "./src/audio/WSND0012.wav",
                    "./WSND0013.wav": "./src/audio/WSND0013.wav",
                    "./WSND0014.wav": "./src/audio/WSND0014.wav",
                    "./WSND0015.wav": "./src/audio/WSND0015.wav",
                    "./WSND0016.wav": "./src/audio/WSND0016.wav",
                    "./WSND0021.wav": "./src/audio/WSND0021.wav",
                    "./WSND0029.wav": "./src/audio/WSND0029.wav",
                    "./WSND0030.wav": "./src/audio/WSND0030.wav",
                    "./WSND0034.wav": "./src/audio/WSND0034.wav",
                    "./WSND0035.wav": "./src/audio/WSND0035.wav",
                    "./WSND0039.wav": "./src/audio/WSND0039.wav",
                    "./WSND0040.wav": "./src/audio/WSND0040.wav",
                    "./WSND0041.wav": "./src/audio/WSND0041.wav",
                    "./WSND0042.wav": "./src/audio/WSND0042.wav"
                };


                function webpackContext(req) {
                    var id = webpackContextResolve(req);
                    return __webpack_require__(id);
                }
                function webpackContextResolve(req) {
                    if (!__webpack_require__.o(map, req)) {
                        var e = new Error("Cannot find module '" + req + "'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    }
                    return map[req];
                }
                webpackContext.keys = function webpackContextKeys() {
                    return Object.keys(map);
                };
                webpackContext.resolve = webpackContextResolve;
                module.exports = webpackContext;
                webpackContext.id = "./src/audio sync recursive ^\\.\\/.*$";

                /***/
}),

/***/ "./src/animationsData.json":
/*!*********************************!*\
  !*** ./src/animationsData.json ***!
  \*********************************/
/***/ ((module) => {

                "use strict";
                module.exports = JSON.parse('{"ENEMY_STAND":{"textures":["enemy_stand_angle"],"offset":200},"ENEMY_RUN":{"textures":["enemy_run_1_angle","enemy_run_2_angle","enemy_run_3_angle","enemy_run_4_angle"],"offset":200},"ENEMY_DEAD":{"textures":["enemy_dead_1","enemy_dead_2","enemy_dead_3","enemy_dead_4","enemy_dead_5"],"offset":200},"ENEMY_HIT":{"textures":["enemy_hit"],"offset":200},"ENEMY_SHOOT":{"textures":["enemy_pickup_weapon","enemy_shoot_1","enemy_shoot_2","enemy_pickup_weapon"],"offset":200},"WEAPON_DEFAULT":{"textures":["weapon_default_id"],"offset":1000},"WEAPON_PICK":{"textures":["weapon_pick_id"],"offset":200},"WEAPON_SHOOT":{"textures":["weapon_shoot_1_id","weapon_shoot_2_id"],"offset":200},"WEAPON_HIDE":{"textures":["weapon_hide_id"],"offset":200}}');

                /***/
}),

/***/ "./src/levels/Level1.json":
/*!********************************!*\
  !*** ./src/levels/Level1.json ***!
  \********************************/
/***/ ((module) => {

                "use strict";
                module.exports = JSON.parse('{"sizeX":63,"sizeY":57,"objectData":[{"x":1,"z":13,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":14,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":15,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":16,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":17,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":18,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":19,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":20,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":21,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":22,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":23,"type":"wall","texture":"wall_stone_flag"},{"x":1,"z":24,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":25,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":26,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":27,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":28,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":29,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":30,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":31,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":32,"type":"wall","texture":"wall_stone_picture"},{"x":1,"z":33,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":34,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":35,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":36,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":37,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":38,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":40,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":41,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":42,"type":"wall","texture":"wall_stone_1"},{"x":1,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":2,"z":13,"type":"wall","texture":"wall_stone_1"},{"x":2,"z":17,"type":"wall","texture":"wall_stone_1"},{"x":2,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":3,"z":13,"type":"wall","texture":"wall_stone_1"},{"x":3,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":4,"z":13,"type":"wall","texture":"wall_stone_1"},{"x":4,"z":17,"type":"wall","texture":"wall_stone_1"},{"x":4,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":13,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":14,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":15,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":16,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":17,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":18,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":19,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":21,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":22,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":23,"type":"wall","texture":"wall_stone_flag"},{"x":5,"z":24,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":25,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":29,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":30,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":31,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":32,"type":"wall","texture":"wall_stone_picture"},{"x":5,"z":33,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":34,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":35,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":37,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":38,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":5,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":2,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":3,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":4,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":5,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":6,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":7,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":8,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":9,"type":"wall","texture":"wall_stone_flag"},{"x":6,"z":10,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":11,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":12,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":13,"type":"wall","texture":"wall_stone_flag"},{"x":6,"z":14,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":15,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":18,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":22,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":23,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":24,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":25,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":26,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":28,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":29,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":30,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":31,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":32,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":33,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":34,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":38,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":6,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":7,"z":2,"type":"wall","texture":"wall_stone_1"},{"x":7,"z":7,"type":"wall","texture":"wall_stone_1"},{"x":7,"z":15,"type":"wall","texture":"wall_stone_1"},{"x":7,"z":18,"type":"wall","texture":"wall_stone_1"},{"x":7,"z":22,"type":"wall","texture":"wall_stone_1"},{"x":7,"z":32,"type":"wall","texture":"wall_stone_1"},{"x":7,"z":33,"type":"wall","texture":"wall_stone_1"},{"x":7,"z":34,"type":"wall","texture":"wall_stone_1"},{"x":7,"z":38,"type":"wall","texture":"wall_stone_1"},{"x":7,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":7,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":8,"z":2,"type":"wall","texture":"wall_stone_1"},{"x":8,"z":7,"type":"wall","texture":"wall_stone_eagle"},{"x":8,"z":15,"type":"wall","texture":"wall_stone_eagle"},{"x":8,"z":18,"type":"wall","texture":"wall_stone_1"},{"x":8,"z":22,"type":"wall","texture":"wall_stone_1"},{"x":8,"z":32,"type":"wall","texture":"wall_stone_1"},{"x":8,"z":33,"type":"wall","texture":"wall_stone_1"},{"x":8,"z":34,"type":"wall","texture":"wall_stone_1"},{"x":8,"z":38,"type":"wall","texture":"wall_stone_1"},{"x":8,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":8,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":9,"z":2,"type":"wall","texture":"wall_stone_1"},{"x":9,"z":7,"type":"wall","texture":"wall_stone_1"},{"x":9,"z":15,"type":"wall","texture":"wall_stone_1"},{"x":9,"z":16,"type":"wall","texture":"wall_stone_1"},{"x":9,"z":17,"type":"wall","texture":"wall_stone_flag"},{"x":9,"z":18,"type":"wall","texture":"wall_stone_1"},{"x":9,"z":19,"type":"wall","texture":"wall_stone_1"},{"x":9,"z":20,"type":"wall","texture":"wall_stone_flag"},{"x":9,"z":21,"type":"wall","texture":"wall_stone_1"},{"x":9,"z":22,"type":"wall","texture":"wall_stone_1"},{"x":9,"z":32,"type":"wall","texture":"wall_stone_1"},{"x":9,"z":33,"type":"wall","texture":"wall_stone_1"},{"x":9,"z":34,"type":"wall","texture":"wall_stone_1"},{"x":9,"z":35,"type":"wall","texture":"wall_stone_1"},{"x":9,"z":36,"type":"wall","texture":"wall_stone_flag"},{"x":9,"z":37,"type":"wall","texture":"wall_stone_1"},{"x":9,"z":38,"type":"wall","texture":"wall_stone_1"},{"x":9,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":9,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":10,"z":2,"type":"wall","texture":"wall_stone_1"},{"x":10,"z":7,"type":"wall","texture":"wall_stone_1"},{"x":10,"z":15,"type":"wall","texture":"wall_stone_1"},{"x":10,"z":22,"type":"wall","texture":"wall_stone_1"},{"x":10,"z":32,"type":"wall","texture":"wall_stone_1"},{"x":10,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":10,"z":45,"type":"wall","texture":"wall_stone_1"},{"x":11,"z":2,"type":"wall","texture":"wall_stone_1"},{"x":11,"z":3,"type":"wall","texture":"wall_stone_1"},{"x":11,"z":4,"type":"wall","texture":"wall_stone_1"},{"x":11,"z":7,"type":"wall","texture":"wall_stone_picture","goTo":{"x":11,"z":5}},{"x":11,"z":43,"type":"wall","texture":"wall_stone_picture"},{"x":11,"z":44,"type":"wall","texture":"wall_stone_1"},{"x":11,"z":46,"type":"wall","texture":"wall_stone_1"},{"x":12,"z":5,"type":"wall","texture":"wall_stone_1"},{"x":12,"z":6,"type":"wall","texture":"wall_stone_1"},{"x":12,"z":7,"type":"wall","texture":"wall_stone_1"},{"x":12,"z":15,"type":"wall","texture":"wall_stone_1"},{"x":12,"z":22,"type":"wall","texture":"wall_stone_1"},{"x":12,"z":32,"type":"wall","texture":"wall_stone_1"},{"x":12,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":12,"z":44,"type":"wall","texture":"wall_stone_flag"},{"x":12,"z":46,"type":"wall","texture":"wall_stone_flag"},{"x":13,"z":7,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":15,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":16,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":17,"type":"wall","texture":"wall_stone_flag"},{"x":13,"z":18,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":19,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":20,"type":"wall","texture":"wall_stone_flag"},{"x":13,"z":21,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":22,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":32,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":33,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":34,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":35,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":36,"type":"wall","texture":"wall_stone_flag"},{"x":13,"z":37,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":38,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":47,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":48,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":49,"type":"wall","texture":"wall_stone_1"},{"x":13,"z":50,"type":"wall","texture":"wall_stone_1"},{"x":14,"z":7,"type":"wall","texture":"wall_stone_eagle"},{"x":14,"z":15,"type":"wall","texture":"wall_stone_eagle"},{"x":14,"z":22,"type":"wall","texture":"wall_stone_1"},{"x":14,"z":32,"type":"wall","texture":"wall_stone_1"},{"x":14,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":14,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":14,"z":47,"type":"wall","texture":"wall_stone_1","goTo":{"x":14,"z":49}},{"x":14,"z":50,"type":"wall","texture":"wall_stone_1"},{"x":15,"z":7,"type":"wall","texture":"wall_stone_1"},{"x":15,"z":15,"type":"wall","texture":"wall_stone_1"},{"x":15,"z":22,"type":"wall","texture":"wall_stone_1"},{"x":15,"z":32,"type":"wall","texture":"wall_stone_1"},{"x":15,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":15,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":15,"z":44,"type":"wall","texture":"wall_stone_1"},{"x":15,"z":45,"type":"wall","texture":"wall_stone_1"},{"x":15,"z":47,"type":"wall","texture":"wall_stone_1"},{"x":15,"z":50,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":7,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":8,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":9,"type":"wall","texture":"wall_stone_flag"},{"x":16,"z":10,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":12,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":13,"type":"wall","texture":"wall_stone_flag"},{"x":16,"z":14,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":22,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":23,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":24,"type":"wall","texture":"wall_stone_flag"},{"x":16,"z":25,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":26,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":27,"type":"wall","texture":"wall_stone_flag"},{"x":16,"z":28,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":29,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":30,"type":"wall","texture":"wall_stone_flag"},{"x":16,"z":31,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":32,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":47,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":48,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":49,"type":"wall","texture":"wall_stone_1"},{"x":16,"z":50,"type":"wall","texture":"wall_stone_1"},{"x":17,"z":9,"type":"wall","texture":"wall_stone_1"},{"x":17,"z":13,"type":"wall","texture":"wall_stone_1"},{"x":17,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":17,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":17,"z":47,"type":"wall","texture":"wall_stone_1"},{"x":18,"z":3,"type":"wall","texture":"wall_stone_1"},{"x":18,"z":4,"type":"wall","texture":"wall_stone_1"},{"x":18,"z":5,"type":"wall","texture":"wall_stone_1"},{"x":18,"z":6,"type":"wall","texture":"wall_stone_1"},{"x":18,"z":7,"type":"wall","texture":"wall_stone_1"},{"x":18,"z":8,"type":"wall","texture":"wall_stone_1"},{"x":18,"z":9,"type":"wall","texture":"wall_stone_1"},{"x":18,"z":13,"type":"wall","texture":"wall_stone_1"},{"x":18,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":18,"z":40,"type":"wall","texture":"wall_stone_1"},{"x":18,"z":42,"type":"wall","texture":"wall_stone_1"},{"x":18,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":18,"z":44,"type":"wall","texture":"wall_stone_1","goTo":{"x":16,"z":44}},{"x":18,"z":45,"type":"wall","texture":"wall_stone_1"},{"x":18,"z":46,"type":"wall","texture":"wall_stone_1"},{"x":18,"z":47,"type":"wall","texture":"wall_stone_1"},{"x":19,"z":3,"type":"wall","texture":"wall_stone_1"},{"x":19,"z":13,"type":"wall","texture":"wall_stone_1"},{"x":19,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":19,"z":43,"type":"wall","texture":"wall_stone_1","goTo":{"x":19,"z":45}},{"x":19,"z":46,"type":"wall","texture":"wall_stone_1"},{"x":20,"z":3,"type":"wall","texture":"wall_stone_1"},{"x":20,"z":13,"type":"wall","texture":"wall_stone_eagle"},{"x":20,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":20,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":20,"z":45,"type":"wall","texture":"wall_stone_1"},{"x":21,"z":3,"type":"wall","texture":"wall_stone_1"},{"x":21,"z":13,"type":"wall","texture":"wall_stone_1"},{"x":21,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":21,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":21,"z":44,"type":"wall","texture":"wall_stone_1"},{"x":22,"z":3,"type":"wall","texture":"wall_stone_1"},{"x":22,"z":7,"type":"wall","texture":"wall_stone_1"},{"x":22,"z":8,"type":"wall","texture":"wall_stone_1"},{"x":22,"z":9,"type":"wall","texture":"wall_stone_1"},{"x":22,"z":13,"type":"wall","texture":"wall_stone_1"},{"x":22,"z":39,"type":"wall","texture":"wall_stone_eagle"},{"x":22,"z":43,"type":"wall","texture":"wall_stone_eagle"},{"x":23,"z":3,"type":"wall","texture":"wall_stone_1"},{"x":23,"z":7,"type":"wall","texture":"wall_stone_1"},{"x":23,"z":9,"type":"wall","texture":"wall_stone_1"},{"x":23,"z":13,"type":"wall","texture":"wall_stone_1"},{"x":23,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":23,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":24,"z":3,"type":"wall","texture":"wall_stone_1"},{"x":24,"z":7,"type":"wall","texture":"wall_stone_1"},{"x":24,"z":9,"type":"wall","texture":"wall_stone_1"},{"x":24,"z":10,"type":"wall","texture":"wall_stone_1"},{"x":24,"z":11,"type":"wall","texture":"wall_stone_1"},{"x":24,"z":12,"type":"wall","texture":"wall_stone_1"},{"x":24,"z":13,"type":"wall","texture":"wall_stone_1"},{"x":24,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":24,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":25,"z":3,"type":"wall","texture":"wall_stone_flag"},{"x":25,"z":7,"type":"wall","texture":"wall_stone_flag"},{"x":25,"z":39,"type":"wall","texture":"wall_stone_1"},{"x":25,"z":40,"type":"wall","texture":"wall_stone_flag"},{"x":25,"z":42,"type":"wall","texture":"wall_stone_flag"},{"x":25,"z":43,"type":"wall","texture":"wall_stone_1"},{"x":26,"z":3,"type":"wall","texture":"wall_stone_1"},{"x":26,"z":7,"type":"wall","texture":"wall_stone_1"},{"x":26,"z":40,"type":"wall","texture":"wall_stone_1"},{"x":26,"z":42,"type":"wall","texture":"wall_stone_1"},{"x":27,"z":3,"type":"wall","texture":"wall_stone_1"},{"x":27,"z":7,"type":"wall","texture":"wall_stone_1"},{"x":27,"z":23,"type":"wall","texture":"wall_stone_1"},{"x":27,"z":24,"type":"wall","texture":"wall_stone_1"},{"x":27,"z":25,"type":"wall","texture":"wall_stone_eagle"},{"x":27,"z":26,"type":"wall","texture":"wall_stone_1"},{"x":27,"z":27,"type":"wall","texture":"wall_stone_1"},{"x":27,"z":28,"type":"wall","texture":"wall_stone_1"},{"x":27,"z":29,"type":"wall","texture":"wall_stone_eagle"},{"x":27,"z":30,"type":"wall","texture":"wall_stone_1"},{"x":27,"z":31,"type":"wall","texture":"wall_stone_1"},{"x":27,"z":40,"type":"wall","texture":"wall_stone_1"},{"x":27,"z":41,"type":"wall","texture":"wall_stone_1"},{"x":27,"z":42,"type":"wall","texture":"wall_stone_1"},{"x":28,"z":3,"type":"wall","texture":"wall_stone_1"},{"x":28,"z":7,"type":"wall","texture":"wall_stone_1"},{"x":28,"z":15,"type":"wall","texture":"wall_wood"},{"x":28,"z":16,"type":"wall","texture":"wall_wood"},{"x":28,"z":17,"type":"wall","texture":"wall_wood"},{"x":28,"z":18,"type":"wall","texture":"wall_wood"},{"x":28,"z":19,"type":"wall","texture":"wall_wood"},{"x":28,"z":20,"type":"wall","texture":"wall_wood"},{"x":28,"z":23,"type":"wall","texture":"wall_stone_1"},{"x":28,"z":31,"type":"wall","texture":"wall_stone_1"},{"x":28,"z":44,"type":"wall","texture":"wall_blueStone_1"},{"x":28,"z":45,"type":"wall","texture":"wall_blueStone_1"},{"x":28,"z":46,"type":"wall","texture":"wall_blueStone_1"},{"x":28,"z":47,"type":"wall","texture":"wall_blueStone_1"},{"x":28,"z":48,"type":"wall","texture":"wall_blueStone_1"},{"x":28,"z":49,"type":"wall","texture":"wall_blueStone_1"},{"x":28,"z":50,"type":"wall","texture":"wall_blueStone_1"},{"x":28,"z":51,"type":"wall","texture":"wall_blueStone_1"},{"x":28,"z":52,"type":"wall","texture":"wall_blueStone_1"},{"x":28,"z":53,"type":"wall","texture":"wall_blueStone_1"},{"x":28,"z":54,"type":"wall","texture":"wall_blueStone_1"},{"x":28,"z":55,"type":"wall","texture":"wall_blueStone_1"},{"x":28,"z":56,"type":"wall","texture":"wall_blueStone_1"},{"x":28,"z":57,"type":"wall","texture":"wall_blueStone_1"},{"x":29,"z":1,"type":"wall","texture":"wall_wood"},{"x":29,"z":2,"type":"wall","texture":"wall_wood"},{"x":29,"z":3,"type":"wall","texture":"wall_wood_eagle"},{"x":29,"z":4,"type":"wall","texture":"wall_wood"},{"x":29,"z":6,"type":"wall","texture":"wall_wood"},{"x":29,"z":7,"type":"wall","texture":"wall_wood_picture"},{"x":29,"z":8,"type":"wall","texture":"wall_wood"},{"x":29,"z":15,"type":"wall","texture":"wall_wood"},{"x":29,"z":20,"type":"wall","texture":"wall_wood"},{"x":29,"z":23,"type":"wall","texture":"wall_stone_1"},{"x":29,"z":31,"type":"wall","texture":"wall_stone_picture"},{"x":29,"z":44,"type":"wall","texture":"wall_blueStone_1"},{"x":29,"z":49,"type":"wall","texture":"wall_blueStone_1"},{"x":29,"z":53,"type":"wall","texture":"wall_blueStone_1"},{"x":29,"z":57,"type":"wall","texture":"wall_blueStone_emptyPrison"},{"x":30,"z":1,"type":"wall","texture":"wall_wood"},{"x":30,"z":9,"type":"wall","texture":"wall_wood"},{"x":30,"z":15,"type":"wall","texture":"wall_wood"},{"x":30,"z":20,"type":"wall","texture":"wall_wood"},{"x":30,"z":23,"type":"wall","texture":"wall_stone_1"},{"x":30,"z":31,"type":"wall","texture":"wall_stone_1"},{"x":30,"z":44,"type":"wall","texture":"wall_blueStone_1"},{"x":30,"z":49,"type":"wall","texture":"wall_blueStone_1"},{"x":30,"z":53,"type":"wall","texture":"wall_blueStone_1"},{"x":30,"z":57,"type":"wall","texture":"wall_blueStone_1"},{"x":31,"z":1,"type":"wall","texture":"wall_wood"},{"x":31,"z":9,"type":"wall","texture":"wall_wood"},{"x":31,"z":15,"type":"wall","texture":"wall_wood"},{"x":31,"z":16,"type":"wall","texture":"wall_wood_eagle","goTo":{"x":29,"z":16}},{"x":31,"z":17,"type":"wall","texture":"wall_wood"},{"x":31,"z":18,"type":"wall","texture":"wall_wood"},{"x":31,"z":19,"type":"wall","texture":"wall_wood"},{"x":31,"z":20,"type":"wall","texture":"wall_wood"},{"x":31,"z":23,"type":"wall","texture":"wall_stone_flag"},{"x":31,"z":31,"type":"wall","texture":"wall_stone_1"},{"x":31,"z":44,"type":"wall","texture":"wall_blueStone_1"},{"x":31,"z":49,"type":"wall","texture":"wall_blueStone_1"},{"x":31,"z":53,"type":"wall","texture":"wall_blueStone_1"},{"x":31,"z":57,"type":"wall","texture":"wall_blueStone_1"},{"x":32,"z":1,"type":"wall","texture":"wall_wood_eagle"},{"x":32,"z":9,"type":"wall","texture":"wall_wood_eagle"},{"x":32,"z":15,"type":"wall","texture":"wall_wood"},{"x":32,"z":17,"type":"wall","texture":"wall_wood"},{"x":32,"z":18,"type":"wall","texture":"wall_wood"},{"x":32,"z":19,"type":"wall","texture":"wall_wood"},{"x":32,"z":20,"type":"wall","texture":"wall_wood"},{"x":32,"z":23,"type":"wall","texture":"wall_stone_1"},{"x":32,"z":31,"type":"wall","texture":"wall_stone_1"},{"x":32,"z":32,"type":"wall","texture":"wall_stone_1"},{"x":32,"z":44,"type":"wall","texture":"wall_blueStone_1"},{"x":32,"z":49,"type":"wall","texture":"wall_blueStone_1"},{"x":32,"z":53,"type":"wall","texture":"wall_blueStone_1"},{"x":32,"z":57,"type":"wall","texture":"wall_blueStone_emptyPrison"},{"x":33,"z":1,"type":"wall","texture":"wall_wood"},{"x":33,"z":9,"type":"wall","texture":"wall_wood"},{"x":33,"z":10,"type":"wall","texture":"wall_wood"},{"x":33,"z":11,"type":"wall","texture":"wall_wood"},{"x":33,"z":12,"type":"wall","texture":"wall_wood_picture"},{"x":33,"z":13,"type":"wall","texture":"wall_wood"},{"x":33,"z":14,"type":"wall","texture":"wall_wood"},{"x":33,"z":15,"type":"wall","texture":"wall_wood"},{"x":33,"z":17,"type":"wall","texture":"wall_wood"},{"x":33,"z":18,"type":"wall","texture":"wall_wood"},{"x":33,"z":19,"type":"wall","texture":"wall_wood"},{"x":33,"z":20,"type":"wall","texture":"wall_wood_eagle"},{"x":33,"z":21,"type":"wall","texture":"wall_wood"},{"x":33,"z":22,"type":"wall","texture":"wall_wood"},{"x":33,"z":32,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":33,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":34,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":35,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":36,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":37,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":38,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":39,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":40,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":41,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":42,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":43,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":44,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":45,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":47,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":48,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":49,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":50,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":52,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":53,"type":"wall","texture":"wall_blueStone_1"},{"x":33,"z":57,"type":"wall","texture":"wall_blueStone_1"},{"x":34,"z":1,"type":"wall","texture":"wall_wood"},{"x":34,"z":9,"type":"wall","texture":"wall_wood"},{"x":34,"z":22,"type":"wall","texture":"wall_wood_eagle"},{"x":34,"z":32,"type":"wall","texture":"wall_blueStone_1"},{"x":34,"z":44,"type":"wall","texture":"wall_blueStone_1"},{"x":34,"z":57,"type":"wall","texture":"wall_blueStone_1"},{"x":35,"z":1,"type":"wall","texture":"wall_wood"},{"x":35,"z":57,"type":"wall","texture":"wall_blueStone_skeletonPrison"},{"x":36,"z":1,"type":"wall","texture":"wall_wood"},{"x":36,"z":9,"type":"wall","texture":"wall_wood"},{"x":36,"z":22,"type":"wall","texture":"wall_wood_eagle"},{"x":36,"z":32,"type":"wall","texture":"wall_blueStone_1"},{"x":36,"z":44,"type":"wall","texture":"wall_blueStone_1"},{"x":36,"z":57,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":1,"type":"wall","texture":"wall_wood"},{"x":37,"z":9,"type":"wall","texture":"wall_wood"},{"x":37,"z":10,"type":"wall","texture":"wall_wood"},{"x":37,"z":11,"type":"wall","texture":"wall_wood"},{"x":37,"z":12,"type":"wall","texture":"wall_wood_picture"},{"x":37,"z":13,"type":"wall","texture":"wall_wood"},{"x":37,"z":14,"type":"wall","texture":"wall_wood"},{"x":37,"z":15,"type":"wall","texture":"wall_wood"},{"x":37,"z":17,"type":"wall","texture":"wall_wood"},{"x":37,"z":18,"type":"wall","texture":"wall_wood"},{"x":37,"z":19,"type":"wall","texture":"wall_wood"},{"x":37,"z":20,"type":"wall","texture":"wall_wood_eagle"},{"x":37,"z":21,"type":"wall","texture":"wall_wood"},{"x":37,"z":22,"type":"wall","texture":"wall_wood"},{"x":37,"z":32,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":33,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":34,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":35,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":36,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":37,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":38,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":39,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":40,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":41,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":42,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":43,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":44,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":45,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":47,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":48,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":49,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":50,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":52,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":53,"type":"wall","texture":"wall_blueStone_1"},{"x":37,"z":57,"type":"wall","texture":"wall_blueStone_1"},{"x":38,"z":1,"type":"wall","texture":"wall_wood_eagle"},{"x":38,"z":9,"type":"wall","texture":"wall_wood_eagle"},{"x":38,"z":15,"type":"wall","texture":"wall_wood"},{"x":38,"z":17,"type":"wall","texture":"wall_wood"},{"x":38,"z":23,"type":"wall","texture":"wall_stone_1"},{"x":38,"z":31,"type":"wall","texture":"wall_stone_1"},{"x":38,"z":44,"type":"wall","texture":"wall_blueStone_1"},{"x":38,"z":49,"type":"wall","texture":"wall_blueStone_1"},{"x":38,"z":53,"type":"wall","texture":"wall_blueStone_1"},{"x":38,"z":57,"type":"wall","texture":"wall_blueStone_emptyPrison"},{"x":39,"z":1,"type":"wall","texture":"wall_wood"},{"x":39,"z":9,"type":"wall","texture":"wall_wood"},{"x":39,"z":15,"type":"wall","texture":"wall_wood"},{"x":39,"z":16,"type":"wall","texture":"wall_wood"},{"x":39,"z":17,"type":"wall","texture":"wall_wood"},{"x":39,"z":23,"type":"wall","texture":"wall_stone_flag"},{"x":39,"z":31,"type":"wall","texture":"wall_stone_1"},{"x":39,"z":44,"type":"wall","texture":"wall_blueStone_1"},{"x":39,"z":49,"type":"wall","texture":"wall_blueStone_1"},{"x":39,"z":53,"type":"wall","texture":"wall_blueStone_1"},{"x":39,"z":57,"type":"wall","texture":"wall_blueStone_1"},{"x":40,"z":1,"type":"wall","texture":"wall_wood"},{"x":40,"z":9,"type":"wall","texture":"wall_wood"},{"x":40,"z":23,"type":"wall","texture":"wall_stone_1"},{"x":40,"z":31,"type":"wall","texture":"wall_stone_picture"},{"x":40,"z":44,"type":"wall","texture":"wall_blueStone_1"},{"x":40,"z":49,"type":"wall","texture":"wall_blueStone_1"},{"x":40,"z":53,"type":"wall","texture":"wall_blueStone_1"},{"x":40,"z":57,"type":"wall","texture":"wall_blueStone_1"},{"x":41,"z":1,"type":"wall","texture":"wall_wood"},{"x":41,"z":2,"type":"wall","texture":"wall_wood"},{"x":41,"z":3,"type":"wall","texture":"wall_wood_eagle"},{"x":41,"z":4,"type":"wall","texture":"wall_wood"},{"x":41,"z":6,"type":"wall","texture":"wall_wood"},{"x":41,"z":7,"type":"wall","texture":"wall_wood_picture"},{"x":41,"z":8,"type":"wall","texture":"wall_wood"},{"x":41,"z":9,"type":"wall","texture":"wall_wood"},{"x":41,"z":23,"type":"wall","texture":"wall_stone_1"},{"x":41,"z":31,"type":"wall","texture":"wall_stone_1"},{"x":41,"z":44,"type":"wall","texture":"wall_blueStone_1"},{"x":41,"z":49,"type":"wall","texture":"wall_blueStone_1"},{"x":41,"z":53,"type":"wall","texture":"wall_blueStone_1"},{"x":41,"z":57,"type":"wall","texture":"wall_blueStone_emptyPrison"},{"x":42,"z":3,"type":"wall","texture":"wall_wood"},{"x":42,"z":7,"type":"wall","texture":"wall_wood"},{"x":42,"z":23,"type":"wall","texture":"wall_stone_1"},{"x":42,"z":31,"type":"wall","texture":"wall_stone_1"},{"x":42,"z":44,"type":"wall","texture":"wall_blueStone_1"},{"x":42,"z":45,"type":"wall","texture":"wall_blueStone_1"},{"x":42,"z":46,"type":"wall","texture":"wall_blueStone_1"},{"x":42,"z":47,"type":"wall","texture":"wall_blueStone_1"},{"x":42,"z":48,"type":"wall","texture":"wall_blueStone_1"},{"x":42,"z":49,"type":"wall","texture":"wall_blueStone_1"},{"x":42,"z":50,"type":"wall","texture":"wall_blueStone_1"},{"x":42,"z":51,"type":"wall","texture":"wall_blueStone_1"},{"x":42,"z":52,"type":"wall","texture":"wall_blueStone_1"},{"x":42,"z":53,"type":"wall","texture":"wall_blueStone_1"},{"x":42,"z":54,"type":"wall","texture":"wall_blueStone_1"},{"x":42,"z":55,"type":"wall","texture":"wall_blueStone_1"},{"x":42,"z":56,"type":"wall","texture":"wall_blueStone_1"},{"x":42,"z":57,"type":"wall","texture":"wall_blueStone_1"},{"x":43,"z":3,"type":"wall","texture":"wall_wood"},{"x":43,"z":7,"type":"wall","texture":"wall_wood"},{"x":43,"z":23,"type":"wall","texture":"wall_stone_1"},{"x":43,"z":24,"type":"wall","texture":"wall_stone_1"},{"x":43,"z":25,"type":"wall","texture":"wall_stone_eagle"},{"x":43,"z":29,"type":"wall","texture":"wall_stone_eagle"},{"x":43,"z":30,"type":"wall","texture":"wall_stone_1"},{"x":43,"z":31,"type":"wall","texture":"wall_stone_1"},{"x":44,"z":3,"type":"wall","texture":"wall_wood"},{"x":44,"z":7,"type":"wall","texture":"wall_wood"},{"x":44,"z":23,"type":"wall","texture":"wall_stone_1"},{"x":44,"z":24,"type":"wall","texture":"wall_stone_1"},{"x":44,"z":25,"type":"wall","texture":"wall_blueStone_1"},{"x":44,"z":26,"type":"wall","texture":"wall_blueStone_1"},{"x":44,"z":28,"type":"wall","texture":"wall_blueStone_1"},{"x":44,"z":29,"type":"wall","texture":"wall_blueStone_1"},{"x":44,"z":30,"type":"wall","texture":"wall_stone_1"},{"x":45,"z":3,"type":"wall","texture":"wall_wood"},{"x":45,"z":4,"type":"wall","texture":"wall_wood"},{"x":45,"z":5,"type":"wall","texture":"wall_wood_eagle"},{"x":45,"z":6,"type":"wall","texture":"wall_wood"},{"x":45,"z":7,"type":"wall","texture":"wall_wood"},{"x":45,"z":25,"type":"wall","texture":"wall_blueStone_1"},{"x":45,"z":29,"type":"wall","texture":"wall_blueStone_1"},{"x":45,"z":30,"type":"wall","texture":"wall_stone_1"},{"x":46,"z":25,"type":"wall","texture":"wall_blueStone_1"},{"x":46,"z":29,"type":"wall","texture":"wall_blueStone_1"},{"x":46,"z":30,"type":"wall","texture":"wall_blueStone_1"},{"x":47,"z":25,"type":"wall","texture":"wall_blueStone_1"},{"x":47,"z":30,"type":"wall","texture":"wall_blueStone_1"},{"x":47,"z":31,"type":"wall","texture":"wall_blueStone_1"},{"x":47,"z":32,"type":"wall","texture":"wall_blueStone_1"},{"x":47,"z":33,"type":"wall","texture":"wall_blueStone_1"},{"x":47,"z":34,"type":"wall","texture":"wall_blueStone_1"},{"x":47,"z":35,"type":"wall","texture":"wall_blueStone_1"},{"x":47,"z":36,"type":"wall","texture":"wall_blueStone_1"},{"x":47,"z":37,"type":"wall","texture":"wall_blueStone_1"},{"x":47,"z":38,"type":"wall","texture":"wall_blueStone_1"},{"x":47,"z":39,"type":"wall","texture":"wall_blueStone_1"},{"x":47,"z":40,"type":"wall","texture":"wall_blueStone_1"},{"x":48,"z":25,"type":"wall","texture":"wall_blueStone_1"},{"x":48,"z":40,"type":"wall","texture":"wall_blueStone_1"},{"x":49,"z":25,"type":"wall","texture":"wall_blueStone_1"},{"x":49,"z":40,"type":"wall","texture":"wall_blueStone_1"},{"x":50,"z":25,"type":"wall","texture":"wall_blueStone_1"},{"x":50,"z":30,"type":"wall","texture":"wall_blueStone_1"},{"x":50,"z":31,"type":"wall","texture":"wall_blueStone_1"},{"x":50,"z":32,"type":"wall","texture":"wall_blueStone_1"},{"x":50,"z":33,"type":"wall","texture":"wall_blueStone_1"},{"x":50,"z":34,"type":"wall","texture":"wall_blueStone_1"},{"x":50,"z":35,"type":"wall","texture":"wall_blueStone_1"},{"x":50,"z":36,"type":"wall","texture":"wall_blueStone_1"},{"x":50,"z":40,"type":"wall","texture":"wall_blueStone_1"},{"x":51,"z":25,"type":"wall","texture":"wall_blueStone_1"},{"x":51,"z":29,"type":"wall","texture":"wall_blueStone_1"},{"x":51,"z":36,"type":"wall","texture":"wall_blueStone_1"},{"x":51,"z":37,"type":"wall","texture":"wall_blueStone_1"},{"x":51,"z":39,"type":"wall","texture":"wall_blueStone_1"},{"x":51,"z":40,"type":"wall","texture":"wall_blueStone_1"},{"x":52,"z":25,"type":"wall","texture":"wall_blueStone_1"},{"x":52,"z":29,"type":"wall","texture":"wall_blueStone_1"},{"x":52,"z":35,"type":"wall","texture":"wall_blueStone_1"},{"x":52,"z":36,"type":"wall","texture":"wall_blueStone_1"},{"x":52,"z":40,"type":"wall","texture":"wall_blueStone_1"},{"x":52,"z":41,"type":"wall","texture":"wall_blueStone_1"},{"x":53,"z":25,"type":"wall","texture":"wall_blueStone_1"},{"x":53,"z":29,"type":"wall","texture":"wall_blueStone_1"},{"x":53,"z":35,"type":"wall","texture":"wall_blueStone_1"},{"x":53,"z":41,"type":"wall","texture":"wall_blueStone_1"},{"x":54,"z":22,"type":"wall","texture":"wall_blueStone_1"},{"x":54,"z":23,"type":"wall","texture":"wall_blueStone_1"},{"x":54,"z":24,"type":"wall","texture":"wall_blueStone_1"},{"x":54,"z":25,"type":"wall","texture":"wall_blueStone_1"},{"x":54,"z":26,"type":"wall","texture":"wall_blueStone_1"},{"x":54,"z":28,"type":"wall","texture":"wall_blueStone_1"},{"x":54,"z":29,"type":"wall","texture":"wall_blueStone_1"},{"x":54,"z":30,"type":"wall","texture":"wall_blueStone_1"},{"x":54,"z":31,"type":"wall","texture":"wall_blueStone_1"},{"x":54,"z":32,"type":"wall","texture":"wall_blueStone_1"},{"x":54,"z":35,"type":"wall","texture":"wall_blueStone_1"},{"x":54,"z":36,"type":"wall","texture":"wall_blueStone_1"},{"x":54,"z":40,"type":"wall","texture":"wall_blueStone_1"},{"x":54,"z":41,"type":"wall","texture":"wall_blueStone_1"},{"x":55,"z":22,"type":"wall","texture":"wall_blueStone_1"},{"x":55,"z":32,"type":"wall","texture":"wall_blueStone_1"},{"x":55,"z":35,"type":"wall","texture":"wall_blueStone_1"},{"x":55,"z":41,"type":"wall","texture":"wall_blueStone_1"},{"x":56,"z":22,"type":"wall","texture":"wall_blueStone_1"},{"x":56,"z":32,"type":"wall","texture":"wall_blueStone_1"},{"x":56,"z":33,"type":"wall","texture":"wall_blueStone_1"},{"x":56,"z":35,"type":"wall","texture":"wall_blueStone_1"},{"x":56,"z":36,"type":"wall","texture":"wall_blueStone_1"},{"x":56,"z":40,"type":"wall","texture":"wall_blueStone_1"},{"x":56,"z":41,"type":"wall","texture":"wall_blueStone_1"},{"x":57,"z":22,"type":"wall","texture":"wall_blueStone_1"},{"x":57,"z":33,"type":"wall","texture":"wall_blueStone_1"},{"x":57,"z":35,"type":"wall","texture":"wall_blueStone_1"},{"x":57,"z":41,"type":"wall","texture":"wall_blueStone_1"},{"x":58,"z":22,"type":"wall","texture":"wall_blueStone_1"},{"x":58,"z":32,"type":"wall","texture":"wall_blueStone_1"},{"x":58,"z":33,"type":"wall","texture":"wall_blueStone_1"},{"x":58,"z":35,"type":"wall","texture":"wall_blueStone_1"},{"x":58,"z":36,"type":"wall","texture":"wall_blueStone_1"},{"x":58,"z":40,"type":"wall","texture":"wall_blueStone_1"},{"x":58,"z":41,"type":"wall","texture":"wall_blueStone_1"},{"x":59,"z":22,"type":"wall","texture":"wall_blueStone_1"},{"x":59,"z":32,"type":"wall","texture":"wall_blueStone_1"},{"x":59,"z":33,"type":"wall","texture":"wall_blueStone_1"},{"x":59,"z":35,"type":"wall","texture":"wall_blueStone_1"},{"x":59,"z":41,"type":"wall","texture":"wall_blueStone_1"},{"x":60,"z":22,"type":"wall","texture":"wall_blueStone_1"},{"x":60,"z":33,"type":"wall","texture":"wall_blueStone_1"},{"x":60,"z":35,"type":"wall","texture":"wall_blueStone_1"},{"x":60,"z":36,"type":"wall","texture":"wall_blueStone_1"},{"x":60,"z":40,"type":"wall","texture":"wall_blueStone_1"},{"x":60,"z":41,"type":"wall","texture":"wall_blueStone_1"},{"x":61,"z":22,"type":"wall","texture":"wall_blueStone_1"},{"x":61,"z":32,"type":"wall","texture":"wall_blueStone_1"},{"x":61,"z":33,"type":"wall","texture":"wall_blueStone_1"},{"x":61,"z":36,"type":"wall","texture":"wall_blueStone_1"},{"x":61,"z":37,"type":"wall","texture":"wall_blueStone_1"},{"x":61,"z":38,"type":"wall","texture":"wall_blueStone_emptyPrison"},{"x":61,"z":39,"type":"wall","texture":"wall_blueStone_1"},{"x":61,"z":40,"type":"wall","texture":"wall_blueStone_1"},{"x":62,"z":22,"type":"wall","texture":"wall_blueStone_1"},{"x":62,"z":32,"type":"wall","texture":"wall_blueStone_1"},{"x":63,"z":22,"type":"wall","texture":"wall_blueStone_1"},{"x":63,"z":23,"type":"wall","texture":"wall_blueStone_1"},{"x":63,"z":24,"type":"wall","texture":"wall_blueStone_1"},{"x":63,"z":25,"type":"wall","texture":"wall_blueStone_1"},{"x":63,"z":26,"type":"wall","texture":"wall_blueStone_1"},{"x":63,"z":27,"type":"wall","texture":"wall_blueStone_skeletonPrison"},{"x":63,"z":28,"type":"wall","texture":"wall_blueStone_1"},{"x":63,"z":29,"type":"wall","texture":"wall_blueStone_1"},{"x":63,"z":30,"type":"wall","texture":"wall_blueStone_1"},{"x":63,"z":31,"type":"wall","texture":"wall_blueStone_1"},{"x":63,"z":32,"type":"wall","texture":"wall_blueStone_1"},{"x":3,"z":17,"type":"door","texture":"door_front_1"},{"x":6,"z":27,"type":"door","texture":"door_front_1"},{"x":11,"z":15,"type":"door","texture":"door_front_1"},{"x":11,"z":22,"type":"door","texture":"door_front_1"},{"x":11,"z":32,"type":"door","texture":"door_front_1"},{"x":12,"z":45,"type":"door","texture":"door_steel"},{"x":16,"z":11,"type":"door","texture":"door_front_1"},{"x":18,"z":41,"type":"door","texture":"door_front_1"},{"x":25,"z":41,"type":"door","texture":"door_steel"},{"x":29,"z":5,"type":"door","texture":"door_front_1"},{"x":33,"z":46,"type":"door","texture":"door_front_1"},{"x":33,"z":51,"type":"door","texture":"door_front_1"},{"x":35,"z":9,"type":"door","texture":"door_front_1"},{"x":35,"z":22,"type":"door","texture":"door_front_1"},{"x":35,"z":32,"type":"door","texture":"door_front_1"},{"x":35,"z":44,"type":"door","texture":"door_front_1"},{"x":37,"z":46,"type":"door","texture":"door_front_1"},{"x":37,"z":51,"type":"door","texture":"door_front_1"},{"x":41,"z":5,"type":"door","texture":"door_front_1"},{"x":44,"z":27,"type":"door","texture":"door_front_1"},{"x":51,"z":38,"type":"door","texture":"door_front_1"},{"x":54,"z":27,"type":"door","texture":"door_front_1"},{"x":3,"z":14,"type":"pickable","texture":"pickable_first_aid_kit","name":"FIRST_AID_KIT"},{"x":3,"z":15,"type":"furniture","texture":"furniture_hangingLamp"},{"x":3,"z":19,"type":"furniture","texture":"furniture_hangingLamp"},{"x":3,"z":23,"type":"furniture","texture":"furniture_hangingLamp"},{"x":3,"z":32,"type":"furniture","texture":"furniture_hangingLamp"},{"x":3,"z":38,"type":"furniture","texture":"furniture_hangingLamp"},{"x":3,"z":39,"type":"enemy","texture":"enemy_stand_1","look":"UP","difficulty":4},{"x":4,"z":14,"type":"furniture","texture":"furniture_barrel"},{"x":6,"z":35,"type":"enemy","texture":"enemy_stand_1","look":"DOWN","difficulty":4},{"x":6,"z":37,"type":"pickable","texture":"pickable_chicken_meal","name":"CHICKEN_MEAL"},{"x":7,"z":3,"type":"pickable","texture":"pickable_clip","name":"CLIP"},{"x":7,"z":4,"type":"pickable","texture":"pickable_clip","name":"CLIP"},{"x":7,"z":5,"type":"pickable","texture":"pickable_clip","name":"CLIP"},{"x":7,"z":6,"type":"pickable","texture":"pickable_clip","name":"CLIP"},{"x":7,"z":11,"type":"furniture","texture":"furniture_flag"},{"x":7,"z":13,"type":"pickable","texture":"pickable_chest","name":"CHEST"},{"x":7,"z":14,"type":"pickable","texture":"pickable_chest","name":"CHEST"},{"x":7,"z":20,"type":"furniture","texture":"furniture_hangingLamp"},{"x":7,"z":23,"type":"enemy","texture":"enemy_stand_1","look":"RIGHT","difficulty":4},{"x":7,"z":36,"type":"furniture","texture":"furniture_hangingLamp"},{"x":7,"z":41,"type":"furniture","texture":"furniture_hangingLamp"},{"x":8,"z":3,"type":"pickable","texture":"pickable_clip","name":"CLIP"},{"x":8,"z":4,"type":"pickable","texture":"pickable_clip","name":"CLIP"},{"x":8,"z":5,"type":"pickable","texture":"pickable_clip","name":"CLIP"},{"x":8,"z":6,"type":"pickable","texture":"pickable_clip","name":"CLIP"},{"x":8,"z":8,"type":"pickable","texture":"pickable_cross","name":"CROSS"},{"x":8,"z":9,"type":"furniture","texture":"furniture_greenStandingLamp"},{"x":8,"z":13,"type":"furniture","texture":"furniture_greenStandingLamp"},{"x":8,"z":14,"type":"pickable","texture":"pickable_chest","name":"CHEST"},{"x":8,"z":19,"type":"pickable","texture":"pickable_chicken_meal","name":"CHICKEN_MEAL"},{"x":8,"z":20,"type":"enemy","texture":"enemy_stand_1","look":"LEFT"},{"x":8,"z":21,"type":"pickable","texture":"pickable_chalice","name":"CHALICE"},{"x":8,"z":24,"type":"furniture","texture":"furniture_witheredPotTree"},{"x":8,"z":30,"type":"furniture","texture":"furniture_witheredPotTree"},{"x":8,"z":35,"type":"furniture","texture":"furniture_greenBarrel"},{"x":9,"z":3,"type":"pickable","texture":"pickable_cross","name":"CROSS"},{"x":9,"z":4,"type":"pickable","texture":"pickable_chest","name":"CHEST"},{"x":9,"z":5,"type":"pickable","texture":"pickable_chest","name":"CHEST"},{"x":9,"z":6,"type":"pickable","texture":"pickable_chest","name":"CHEST"},{"x":9,"z":8,"type":"pickable","texture":"pickable_chalice","name":"CHALICE"},{"x":9,"z":10,"type":"enemy","texture":"enemy_stand_1","look":"RIGHT"},{"x":9,"z":13,"type":"enemy","texture":"enemy_stand_1","look":"RIGHT","difficulty":4},{"x":9,"z":25,"type":"furniture","texture":"furniture_hangingLamp"},{"x":9,"z":29,"type":"furniture","texture":"furniture_hangingLamp"},{"x":10,"z":3,"type":"pickable","texture":"pickable_cross","name":"CROSS"},{"x":10,"z":4,"type":"pickable","texture":"pickable_cross","name":"CROSS"},{"x":10,"z":5,"type":"pickable","texture":"pickable_chest","name":"CHEST"},{"x":10,"z":8,"type":"furniture","texture":"furniture_potTree"},{"x":11,"z":11,"type":"furniture","texture":"furniture_chairsTable"},{"x":11,"z":17,"type":"furniture","texture":"furniture_hangingLamp"},{"x":11,"z":20,"type":"furniture","texture":"furniture_hangingLamp"},{"x":11,"z":21,"type":"enemy","texture":"enemy_stand_1","look":"UP","difficulty":4},{"x":11,"z":27,"type":"enemy","texture":"enemy_stand_1","look":"DOWN","goTo":{"x":3,"z":41}},{"x":11,"z":36,"type":"furniture","texture":"furniture_hangingLamp"},{"x":11,"z":41,"type":"enemy","texture":"enemy_stand_1","look":"DOWN","goTo":{"x":3,"z":27},"difficulty":3},{"x":11,"z":45,"type":"end","texture":"end_game"},{"x":12,"z":8,"type":"furniture","texture":"furniture_potTree"},{"x":12,"z":9,"type":"pickable","texture":"pickable_cross","name":"CROSS"},{"x":13,"z":8,"type":"pickable","texture":"pickable_chalice","name":"CHALICE"},{"x":13,"z":11,"type":"enemy","texture":"enemy_stand_1","look":"DOWN","difficulty":3},{"x":13,"z":25,"type":"furniture","texture":"furniture_hangingLamp"},{"x":13,"z":29,"type":"furniture","texture":"furniture_hangingLamp"},{"x":14,"z":9,"type":"furniture","texture":"furniture_greenStandingLamp"},{"x":14,"z":13,"type":"furniture","texture":"furniture_greenStandingLamp"},{"x":14,"z":24,"type":"furniture","texture":"furniture_witheredPotTree"},{"x":14,"z":30,"type":"furniture","texture":"furniture_witheredPotTree"},{"x":14,"z":31,"type":"enemy","texture":"enemy_stand_1","look":"UP","difficulty":4},{"x":15,"z":9,"type":"enemy","texture":"enemy_stand_1","look":"DOWN","difficulty":4},{"x":15,"z":14,"type":"enemy","texture":"enemy_stand_1","look":"UP","difficulty":4},{"x":15,"z":41,"type":"furniture","texture":"furniture_hangingLamp"},{"x":15,"z":49,"type":"pickable","texture":"pickable_extra_life","name":"EXTRA_LIFE"},{"x":20,"z":5,"type":"furniture","texture":"furniture_hangingLamp"},{"x":20,"z":10,"type":"enemy","texture":"enemy_stand_1","look":"UP"},{"x":20,"z":11,"type":"furniture","texture":"furniture_hangingLamp"},{"x":30,"z":51,"type":"player","texture":"player_1","look":"RIGHT"},{"x":20,"z":44,"type":"pickable","texture":"pickable_first_aid_kit","name":"FIRST_AID_KIT"},{"x":22,"z":12,"type":"enemy","texture":"enemy_stand_1","look":"UP","difficulty":3},{"x":22,"z":41,"type":"enemy","texture":"enemy_stand_1","look":"LEFT"},{"x":24,"z":40,"type":"enemy","texture":"enemy_stand_1","look":"LEFT","difficulty":4},{"x":24,"z":42,"type":"enemy","texture":"enemy_stand_1","look":"LEFT","difficulty":3},{"x":25,"z":5,"type":"furniture","texture":"furniture_hangingLamp"},{"x":26,"z":41,"type":"end","texture":"end_game"},{"x":28,"z":24,"type":"furniture","texture":"furniture_witheredPotTree"},{"x":28,"z":27,"type":"enemy","texture":"enemy_stand_1","look":"DOWN","goTo":{"x":62,"z":27}},{"x":28,"z":30,"type":"furniture","texture":"furniture_witheredPotTree"},{"x":29,"z":17,"type":"pickable","texture":"pickable_clip","name":"CLIP"},{"x":29,"z":18,"type":"pickable","texture":"pickable_clip","name":"CLIP"},{"x":29,"z":19,"type":"pickable","texture":"pickable_machinegun","name":"MACHINEGUN"},{"x":29,"z":45,"type":"furniture","texture":"furniture_skullsPile"},{"x":29,"z":56,"type":"enemy","texture":"enemy_stand_1","look":"RIGHT","difficulty":4},{"x":30,"z":2,"type":"furniture","texture":"furniture_urn"},{"x":30,"z":18,"type":"pickable","texture":"pickable_first_aid_kit","name":"FIRST_AID_KIT"},{"x":30,"z":19,"type":"pickable","texture":"pickable_first_aid_kit","name":"FIRST_AID_KIT"},{"x":30,"z":24,"type":"enemy","texture":"enemy_stand_1","look":"DOWN","difficulty":4},{"x":30,"z":27,"type":"furniture","texture":"furniture_hangingCandlestick"},{"x":30,"z":45,"type":"pickable","texture":"pickable_chicken_meal","name":"CHICKEN_MEAL"},{"x":31,"z":55,"type":"furniture","texture":"furniture_hangingLamp"},{"x":32,"z":3,"type":"furniture","texture":"furniture_chairsTable"},{"x":32,"z":16,"type":"enemy","texture":"enemy_stand_1","look":"RIGHT"},{"x":32,"z":51,"type":"enemy","texture":"enemy_stand_1","look":"DOWN","alive":false},{"x":33,"z":23,"type":"furniture","texture":"furniture_witheredPotTree"},{"x":34,"z":3,"type":"enemy","texture":"enemy_stand_1","look":"DOWN"},{"x":35,"z":3,"type":"furniture","texture":"furniture_chairsTable"},{"x":35,"z":5,"type":"furniture","texture":"furniture_hangingCandlestick"},{"x":35,"z":11,"type":"enemy","texture":"enemy_stand_1","look":"DOWN","difficulty":3},{"x":35,"z":12,"type":"furniture","texture":"furniture_hangingLamp"},{"x":35,"z":16,"type":"furniture","texture":"furniture_hangingLamp"},{"x":35,"z":20,"type":"furniture","texture":"furniture_hangingLamp"},{"x":35,"z":27,"type":"furniture","texture":"furniture_hangingCandlestick"},{"x":35,"z":34,"type":"furniture","texture":"furniture_hangingLamp"},{"x":35,"z":38,"type":"furniture","texture":"furniture_hangingLamp"},{"x":35,"z":39,"type":"enemy","texture":"enemy_stand_1","look":"DOWN","difficulty":4},{"x":35,"z":42,"type":"furniture","texture":"furniture_hangingLamp"},{"x":35,"z":46,"type":"furniture","texture":"furniture_hangingLamp"},{"x":35,"z":51,"type":"furniture","texture":"furniture_hangingLamp"},{"x":35,"z":55,"type":"furniture","texture":"furniture_hangingLamp"},{"x":35,"z":56,"type":"pickable","texture":"pickable_chicken_meal","name":"CHICKEN_MEAL"},{"x":37,"z":23,"type":"furniture","texture":"furniture_witheredPotTree"},{"x":38,"z":3,"type":"furniture","texture":"furniture_chairsTable"},{"x":38,"z":16,"type":"furniture","texture":"furniture_guardArmor"},{"x":38,"z":51,"type":"pickable","texture":"pickable_chicken_meal","name":"CHICKEN_MEAL"},{"x":39,"z":46,"type":"furniture","texture":"furniture_lyingSkeleton"},{"x":39,"z":55,"type":"furniture","texture":"furniture_hangingLamp"},{"x":40,"z":2,"type":"furniture","texture":"furniture_urn"},{"x":40,"z":5,"type":"enemy","texture":"enemy_stand_1","look":"DOWN","difficulty":3},{"x":40,"z":27,"type":"furniture","texture":"furniture_hangingCandlestick"},{"x":40,"z":55,"type":"enemy","texture":"enemy_stand_1","look":"LEFT","difficulty":3},{"x":41,"z":51,"type":"furniture","texture":"furniture_skullsPile"},{"x":41,"z":55,"type":"pickable","texture":"pickable_clip","name":"CLIP"},{"x":42,"z":4,"type":"pickable","texture":"pickable_cross","name":"CROSS"},{"x":42,"z":6,"type":"pickable","texture":"pickable_chalice","name":"CHALICE"},{"x":42,"z":24,"type":"furniture","texture":"furniture_witheredPotTree"},{"x":42,"z":30,"type":"furniture","texture":"furniture_witheredPotTree"},{"x":43,"z":4,"type":"pickable","texture":"pickable_cross","name":"CROSS"},{"x":43,"z":5,"type":"enemy","texture":"enemy_stand_1","look":"LEFT","difficulty":4},{"x":43,"z":6,"type":"pickable","texture":"pickable_chalice","name":"CHALICE"},{"x":44,"z":4,"type":"pickable","texture":"pickable_chalice","name":"CHALICE"},{"x":44,"z":5,"type":"pickable","texture":"pickable_cross","name":"CROSS"},{"x":44,"z":6,"type":"pickable","texture":"pickable_chalice","name":"CHALICE"},{"x":45,"z":28,"type":"enemy","name":"DOG","texture":"enemy_stand_1","look":"DOWN","goTo":{"x":53,"z":28},"difficulty":4},{"x":49,"z":35,"type":"enemy","texture":"enemy_stand_1","look":"UP","difficulty":4},{"x":49,"z":39,"type":"enemy","texture":"enemy_stand_1","look":"UP","difficulty":1},{"x":55,"z":23,"type":"pickable","texture":"pickable_chicken_meal","name":"CHICKEN_MEAL"},{"x":55,"z":31,"type":"enemy","name":"DOG","texture":"enemy_stand_1","look":"DOWN","goTo":{"x":55,"z":24},"difficulty":3},{"x":55,"z":39,"type":"enemy","name":"DOG","texture":"enemy_stand_1","look":"DOWN","goTo":{"x":53,"z":37},"difficulty":4},{"x":57,"z":29,"type":"furniture","texture":"furniture_table"},{"x":57,"z":32,"type":"furniture","texture":"furniture_fullWell"},{"x":57,"z":37,"type":"enemy","name":"DOG","texture":"enemy_stand_1","look":"DOWN","goTo":{"x":52,"z":37},"difficulty":3},{"x":58,"z":29,"type":"pickable","texture":"pickable_chicken_meal","name":"CHICKEN_MEAL"},{"x":59,"z":23,"type":"furniture","texture":"furniture_stain"},{"x":59,"z":36,"type":"pickable","texture":"pickable_dog_food","name":"DOG_FOOD"},{"x":60,"z":23,"type":"furniture","texture":"furniture_barrel"},{"x":60,"z":25,"type":"enemy","texture":"enemy_stand_1","look":"LEFT"},{"x":60,"z":29,"type":"furniture","texture":"furniture_table"},{"x":60,"z":32,"type":"furniture","texture":"furniture_emptyWell"},{"x":60,"z":38,"type":"enemy","name":"DOG","texture":"enemy_stand_1","look":"DOWN","goTo":{"x":52,"z":38}},{"x":60,"z":39,"type":"furniture","texture":"furniture_pot"},{"x":61,"z":23,"type":"furniture","texture":"furniture_barrel"},{"x":61,"z":31,"type":"pickable","texture":"pickable_chicken_meal","name":"CHICKEN_MEAL"},{"x":62,"z":23,"type":"furniture","texture":"furniture_barrel"},{"x":62,"z":24,"type":"furniture","texture":"furniture_barrel"},{"x":62,"z":29,"type":"enemy","texture":"enemy_stand_1","look":"LEFT","difficulty":4}]}');

                /***/
}),

/***/ "./src/texture2DData.json":
/*!********************************!*\
  !*** ./src/texture2DData.json ***!
  \********************************/
/***/ ((module) => {

                "use strict";
                module.exports = JSON.parse('{"HUD":{"sizeX":320,"sizeY":261,"pos":{"0":{"x":208,"y":40,"w":8,"h":16},"1":{"x":216,"y":40,"w":8,"h":16},"2":{"x":224,"y":40,"w":8,"h":16},"3":{"x":232,"y":40,"w":8,"h":16},"4":{"x":240,"y":40,"w":8,"h":16},"5":{"x":248,"y":40,"w":8,"h":16},"6":{"x":256,"y":40,"w":8,"h":16},"7":{"x":264,"y":40,"w":8,"h":16},"8":{"x":272,"y":40,"w":8,"h":16},"9":{"x":280,"y":40,"w":8,"h":16},"hudBar":{"x":0,"y":0,"w":320,"h":40},"weapon_knife":{"x":0,"y":40,"w":48,"h":24},"weapon_pistol":{"x":48,"y":40,"w":48,"h":24},"weapon_machingeun":{"x":96,"y":40,"w":48,"h":24},"weapon_chaingun":{"x":144,"y":40,"w":48,"h":24},"key_gold":{"x":192,"y":40,"w":8,"h":16},"key_silver":{"x":200,"y":40,"w":8,"h":16},"loader":{"x":0,"y":64,"w":224,"h":48},"pause":{"x":224,"y":64,"w":64,"h":32},"face_1_1":{"x":0,"y":112,"w":24,"h":31},"face_2_1":{"x":24,"y":112,"w":24,"h":31},"face_3_1":{"x":48,"y":112,"w":24,"h":31},"face_1_2":{"x":0,"y":143,"w":24,"h":31},"face_2_2":{"x":24,"y":143,"w":24,"h":31},"face_3_2":{"x":48,"y":143,"w":24,"h":31},"face_1_3":{"x":72,"y":112,"w":24,"h":31},"face_2_3":{"x":96,"y":112,"w":24,"h":31},"face_3_3":{"x":120,"y":112,"w":24,"h":31},"face_1_4":{"x":72,"y":143,"w":24,"h":31},"face_2_4":{"x":96,"y":143,"w":24,"h":31},"face_3_4":{"x":120,"y":143,"w":24,"h":31},"face_1_5":{"x":144,"y":112,"w":24,"h":31},"face_2_5":{"x":168,"y":112,"w":24,"h":31},"face_3_5":{"x":192,"y":112,"w":24,"h":31},"face_1_6":{"x":144,"y":143,"w":24,"h":31},"face_2_6":{"x":168,"y":143,"w":24,"h":31},"face_3_6":{"x":192,"y":143,"w":24,"h":31},"face_1_7":{"x":216,"y":112,"w":24,"h":31},"face_2_7":{"x":240,"y":112,"w":24,"h":31},"face_3_7":{"x":264,"y":112,"w":24,"h":31},"face_1_8":{"x":216,"y":143,"w":24,"h":31},"face_2_8":{"x":240,"y":143,"w":24,"h":31},"face_3_8":{"x":264,"y":143,"w":24,"h":31},"end_player_1":{"x":0,"y":174,"w":81,"h":87},"end_player_2":{"x":81,"y":174,"w":81,"h":87}}},"MENU":{"sizeX":320,"sizeY":604,"pos":{"blueScreenInfo":{"x":0,"y":0,"w":88,"h":64},"gameTitleScreen":{"x":0,"y":64,"w":320,"h":200},"creditsScreen":{"x":0,"y":264,"w":320,"h":200},"episode_picture_1":{"x":88,"y":0,"w":48,"h":24},"episode_picture_2":{"x":136,"y":0,"w":48,"h":24},"episode_picture_3":{"x":184,"y":0,"w":48,"h":24},"episode_picture_4":{"x":88,"y":24,"w":48,"h":24},"episode_picture_5":{"x":136,"y":24,"w":48,"h":24},"episode_picture_6":{"x":184,"y":24,"w":48,"h":24},"menu_pistol_1":{"x":88,"y":48,"w":23,"h":16},"menu_pistol_2":{"x":111,"y":48,"w":23,"h":16},"options_down_banner":{"x":134,"y":48,"w":102,"h":8},"option_active":{"x":134,"y":56,"w":20,"h":8},"option_disactive":{"x":154,"y":56,"w":20,"h":8},"difficulty_face_1":{"x":236,"y":0,"w":24,"h":32},"difficulty_face_2":{"x":260,"y":0,"w":24,"h":32},"difficulty_face_3":{"x":236,"y":32,"w":24,"h":32},"difficulty_face_4":{"x":260,"y":32,"w":24,"h":32},"title_options":{"x":0,"y":464,"w":145,"h":42},"title_loading":{"x":0,"y":506,"w":224,"h":48},"title_highScore":{"x":0,"y":554,"w":215,"h":50},"highScore_code":{"x":145,"y":464,"w":24,"h":8},"highScore_code2":{"x":169,"y":464,"w":24,"h":8},"highScore_level":{"x":193,"y":464,"w":32,"h":8},"highScore_name":{"x":225,"y":464,"w":32,"h":8},"highScore_score":{"x":257,"y":464,"w":32,"h":8}}},"MENUFONT":{"sizeX":518,"sizeY":78,"pos":{"1":{"x":0,"y":52,"w":12,"h":26},"2":{"x":12,"y":52,"w":20,"h":26},"3":{"x":32,"y":52,"w":20,"h":26},"4":{"x":52,"y":52,"w":20,"h":26},"5":{"x":72,"y":52,"w":20,"h":26},"6":{"x":92,"y":52,"w":20,"h":26},"A":{"x":0,"y":0,"w":20,"h":26},"B":{"x":20,"y":0,"w":20,"h":26},"C":{"x":40,"y":0,"w":20,"h":26},"D":{"x":60,"y":0,"w":20,"h":26},"E":{"x":80,"y":0,"w":20,"h":26},"F":{"x":100,"y":0,"w":20,"h":26},"G":{"x":120,"y":0,"w":20,"h":26},"H":{"x":140,"y":0,"w":20,"h":26},"I":{"x":160,"y":0,"w":8,"h":26},"J":{"x":168,"y":0,"w":20,"h":26},"K":{"x":188,"y":0,"w":22,"h":26},"L":{"x":210,"y":0,"w":20,"h":26},"M":{"x":230,"y":0,"w":24,"h":26},"N":{"x":254,"y":0,"w":20,"h":26},"O":{"x":274,"y":0,"w":20,"h":26},"P":{"x":294,"y":0,"w":20,"h":26},"Q":{"x":314,"y":0,"w":20,"h":26},"R":{"x":334,"y":0,"w":20,"h":26},"S":{"x":354,"y":0,"w":20,"h":26},"T":{"x":374,"y":0,"w":20,"h":26},"U":{"x":394,"y":0,"w":20,"h":26},"V":{"x":414,"y":0,"w":20,"h":26},"W":{"x":434,"y":0,"w":24,"h":26},"X":{"x":458,"y":0,"w":20,"h":26},"Y":{"x":478,"y":0,"w":20,"h":26},"Z":{"x":498,"y":0,"w":20,"h":26},"a":{"x":0,"y":26,"w":20,"h":26},"b":{"x":20,"y":26,"w":20,"h":26},"c":{"x":40,"y":26,"w":20,"h":26},"d":{"x":60,"y":26,"w":20,"h":26},"e":{"x":80,"y":26,"w":20,"h":26},"f":{"x":100,"y":26,"w":16,"h":26},"g":{"x":116,"y":26,"w":20,"h":26},"h":{"x":136,"y":26,"w":20,"h":26},"i":{"x":156,"y":26,"w":8,"h":26},"j":{"x":164,"y":26,"w":12,"h":26},"k":{"x":176,"y":26,"w":20,"h":26},"l":{"x":196,"y":26,"w":8,"h":26},"m":{"x":204,"y":26,"w":24,"h":26},"n":{"x":228,"y":26,"w":20,"h":26},"o":{"x":248,"y":26,"w":20,"h":26},"p":{"x":268,"y":26,"w":20,"h":26},"q":{"x":288,"y":26,"w":20,"h":26},"r":{"x":308,"y":26,"w":20,"h":26},"s":{"x":328,"y":26,"w":20,"h":26},"t":{"x":348,"y":26,"w":20,"h":26},"u":{"x":368,"y":26,"w":20,"h":26},"v":{"x":388,"y":26,"w":20,"h":26},"w":{"x":408,"y":26,"w":24,"h":26},"x":{"x":432,"y":26,"w":20,"h":26},"y":{"x":452,"y":26,"w":20,"h":26},"z":{"x":472,"y":26,"w":20,"h":26},"!":{"x":112,"y":52,"w":8,"h":26},"\'":{"x":120,"y":52,"w":8,"h":26},",":{"x":128,"y":52,"w":8,"h":26},"-":{"x":136,"y":52,"w":16,"h":26},".":{"x":152,"y":52,"w":8,"h":26},":":{"x":160,"y":52,"w":8,"h":26},"?":{"x":168,"y":52,"w":20,"h":26}}},"ENDFONT":{"sizeX":160,"sizeY":64,"pos":{"0":{"x":0,"y":0,"w":16,"h":16},"1":{"x":16,"y":0,"w":16,"h":16},"2":{"x":32,"y":0,"w":16,"h":16},"3":{"x":48,"y":0,"w":16,"h":16},"4":{"x":64,"y":0,"w":16,"h":16},"5":{"x":80,"y":0,"w":16,"h":16},"6":{"x":96,"y":0,"w":16,"h":16},"7":{"x":112,"y":0,"w":16,"h":16},"8":{"x":128,"y":0,"w":16,"h":16},"9":{"x":144,"y":0,"w":16,"h":16},"A":{"x":0,"y":16,"w":16,"h":16},"B":{"x":16,"y":16,"w":16,"h":16},"C":{"x":32,"y":16,"w":16,"h":16},"D":{"x":48,"y":16,"w":16,"h":16},"E":{"x":64,"y":16,"w":16,"h":16},"F":{"x":80,"y":16,"w":16,"h":16},"G":{"x":96,"y":16,"w":16,"h":16},"H":{"x":112,"y":16,"w":16,"h":16},"I":{"x":128,"y":16,"w":16,"h":16},"J":{"x":144,"y":16,"w":16,"h":16},"K":{"x":0,"y":32,"w":16,"h":16},"L":{"x":16,"y":32,"w":16,"h":16},"M":{"x":32,"y":32,"w":16,"h":16},"N":{"x":48,"y":32,"w":16,"h":16},"O":{"x":64,"y":32,"w":16,"h":16},"P":{"x":80,"y":32,"w":16,"h":16},"Q":{"x":96,"y":32,"w":16,"h":16},"R":{"x":112,"y":32,"w":16,"h":16},"S":{"x":128,"y":32,"w":16,"h":16},"T":{"x":144,"y":32,"w":16,"h":16},"U":{"x":0,"y":48,"w":16,"h":16},"V":{"x":16,"y":48,"w":16,"h":16},"W":{"x":32,"y":48,"w":16,"h":16},"X":{"x":48,"y":48,"w":16,"h":16},"Y":{"x":64,"y":48,"w":16,"h":16},"Z":{"x":80,"y":48,"w":16,"h":16},":":{"x":96,"y":48,"w":8,"h":16},"%":{"x":104,"y":48,"w":16,"h":16},"!":{"x":120,"y":48,"w":8,"h":16},"\'":{"x":128,"y":48,"w":8,"h":16}}}}');

                /***/
}),

/***/ "./src/textureData.json":
/*!******************************!*\
  !*** ./src/textureData.json ***!
  \******************************/
/***/ ((module) => {

                "use strict";
                module.exports = JSON.parse('{"WALL":{"sizeX":8,"sizeY":16,"pos":{"wall_stone_1":{"x":0,"y":0},"wall_stone_2":{"x":2,"y":0},"wall_stone_flag":{"x":4,"y":0},"wall_stone_picture":{"x":0,"y":1},"wall_blueStone_emptyPrison":{"x":2,"y":1},"wall_stone_eagle":{"x":4,"y":1},"wall_blueStone_skeletonPrison":{"x":0,"y":2},"wall_blueStone_1":{"x":2,"y":2},"wall_blueStone_2":{"x":4,"y":2},"wall_wood_eagle":{"x":0,"y":3},"wall_wood_picture":{"x":2,"y":3},"wall_wood":{"x":4,"y":3},"wall_wood_ornament":{"x":0,"y":4},"wall_blueSteel_info":{"x":2,"y":4},"wall_blueSteel":{"x":4,"y":4},"wall_outside":{"x":0,"y":5},"wall_redBrick":{"x":2,"y":5},"wall_redBrick_ornament":{"x":4,"y":5},"wall_redBrick_flag":{"x":0,"y":6},"wall_plagueStone":{"x":2,"y":6},"wall_plagueStone_blood":{"x":4,"y":6},"wall_elevatorClear_on":{"x":0,"y":7},"door_steel":{"x":2,"y":7},"wall_elevatorClear_off":{"x":4,"y":7},"wall_mossyStone_1":{"x":0,"y":8},"wall_mossyStone_2":{"x":2,"y":8},"wall_stone_3":{"x":4,"y":8},"wall_stone_info":{"x":0,"y":9},"wall_sand":{"x":2,"y":9},"wall_sand_blood_1":{"x":4,"y":9},"wall_sand_blood_2":{"x":0,"y":10},"wall_sand_blood_3":{"x":2,"y":10},"wall_white_picture":{"x":4,"y":10},"wall_blueStone_skull":{"x":0,"y":11},"wall_whiteBrick":{"x":2,"y":11},"wall_blueStone_ornament":{"x":4,"y":11},"wall_whiteBrick_miss":{"x":0,"y":12},"wall_multiBrick":{"x":2,"y":12},"wall_whiteBrick_crack":{"x":4,"y":12},"wall_blueStone_blank":{"x":0,"y":13},"wall_blueStone_info":{"x":2,"y":13},"wall_tiles_1":{"x":4,"y":13},"wall_whiteBrick_map":{"x":6,"y":0},"wall_tiles_2":{"x":6,"y":1},"wall_whiteBrick_picture":{"x":6,"y":2},"door_steel_button":{"x":6,"y":3},"wall_elevatorPins_on":{"x":6,"y":4},"wall_orangeStone_1":{"x":6,"y":5},"wall_tiles_ornament":{"x":6,"y":6},"door_front_1":{"x":6,"y":7},"door_front_2":{"x":6,"y":8},"wall_orangeStone_2":{"x":6,"y":9},"wall_orangeStone_blank":{"x":6,"y":10},"wall_door":{"x":6,"y":11},"wall_elevatorPins_off":{"x":6,"y":12},"door_side_1":{"x":6,"y":13},"door_side_2":{"x":0,"y":14},"wall_elevatorClear_side":{"x":2,"y":14},"wall_elevatorPins_side":{"x":4,"y":14}}},"ENEMY":{"sizeX":8,"sizeY":8,"pos":{"enemy_stand_1":{"x":0,"y":0},"enemy_run_1_1":{"x":0,"y":1},"enemy_run_2_1":{"x":0,"y":2},"enemy_run_3_1":{"x":0,"y":3},"enemy_run_4_1":{"x":0,"y":4},"enemy_stand_2":{"x":1,"y":0},"enemy_run_1_2":{"x":1,"y":1},"enemy_run_2_2":{"x":1,"y":2},"enemy_run_3_2":{"x":1,"y":3},"enemy_run_4_2":{"x":1,"y":4},"enemy_stand_3":{"x":2,"y":0},"enemy_run_1_3":{"x":2,"y":1},"enemy_run_2_3":{"x":2,"y":2},"enemy_run_3_3":{"x":2,"y":3},"enemy_run_4_3":{"x":2,"y":4},"enemy_stand_4":{"x":3,"y":0},"enemy_run_1_4":{"x":3,"y":1},"enemy_run_2_4":{"x":3,"y":2},"enemy_run_3_4":{"x":3,"y":3},"enemy_run_4_4":{"x":3,"y":4},"enemy_stand_5":{"x":4,"y":0},"enemy_run_1_5":{"x":4,"y":1},"enemy_run_2_5":{"x":4,"y":2},"enemy_run_3_5":{"x":4,"y":3},"enemy_run_4_5":{"x":4,"y":4},"enemy_stand_6":{"x":5,"y":0},"enemy_run_1_6":{"x":5,"y":1},"enemy_run_2_6":{"x":5,"y":2},"enemy_run_3_6":{"x":5,"y":3},"enemy_run_4_6":{"x":5,"y":4},"enemy_stand_7":{"x":6,"y":0},"enemy_run_1_7":{"x":6,"y":1},"enemy_run_2_7":{"x":6,"y":2},"enemy_run_3_7":{"x":6,"y":3},"enemy_run_4_7":{"x":6,"y":4},"enemy_stand_8":{"x":7,"y":0},"enemy_run_1_8":{"x":7,"y":1},"enemy_run_2_8":{"x":7,"y":2},"enemy_run_3_8":{"x":7,"y":3},"enemy_run_4_8":{"x":7,"y":4},"enemy_hit":{"x":7,"y":5},"enemy_pickup_weapon":{"x":0,"y":6},"enemy_shoot_1":{"x":1,"y":6},"enemy_shoot_2":{"x":2,"y":6},"enemy_dead_1":{"x":0,"y":5},"enemy_dead_2":{"x":1,"y":5},"enemy_dead_3":{"x":2,"y":5},"enemy_dead_4":{"x":3,"y":5},"enemy_dead_5":{"x":4,"y":5}}},"DOG":{"sizeX":8,"sizeY":8,"pos":{"enemy_stand_1":{"x":0,"y":2},"enemy_run_1_1":{"x":0,"y":0},"enemy_run_2_1":{"x":0,"y":1},"enemy_run_3_1":{"x":0,"y":2},"enemy_run_4_1":{"x":0,"y":3},"enemy_stand_2":{"x":1,"y":2},"enemy_run_1_2":{"x":1,"y":0},"enemy_run_2_2":{"x":1,"y":1},"enemy_run_3_2":{"x":1,"y":2},"enemy_run_4_2":{"x":1,"y":3},"enemy_stand_3":{"x":2,"y":2},"enemy_run_1_3":{"x":2,"y":0},"enemy_run_2_3":{"x":2,"y":1},"enemy_run_3_3":{"x":2,"y":2},"enemy_run_4_3":{"x":2,"y":3},"enemy_stand_4":{"x":3,"y":2},"enemy_run_1_4":{"x":3,"y":0},"enemy_run_2_4":{"x":3,"y":1},"enemy_run_3_4":{"x":3,"y":2},"enemy_run_4_4":{"x":3,"y":3},"enemy_stand_5":{"x":4,"y":2},"enemy_run_1_5":{"x":4,"y":0},"enemy_run_2_5":{"x":4,"y":1},"enemy_run_3_5":{"x":4,"y":2},"enemy_run_4_5":{"x":4,"y":3},"enemy_stand_6":{"x":5,"y":2},"enemy_run_1_6":{"x":5,"y":0},"enemy_run_2_6":{"x":5,"y":1},"enemy_run_3_6":{"x":5,"y":2},"enemy_run_4_6":{"x":5,"y":3},"enemy_stand_7":{"x":6,"y":2},"enemy_run_1_7":{"x":6,"y":0},"enemy_run_2_7":{"x":6,"y":1},"enemy_run_3_7":{"x":6,"y":2},"enemy_run_4_7":{"x":6,"y":3},"enemy_stand_8":{"x":7,"y":2},"enemy_run_1_8":{"x":7,"y":0},"enemy_run_2_8":{"x":7,"y":1},"enemy_run_3_8":{"x":7,"y":2},"enemy_run_4_8":{"x":7,"y":3},"enemy_hit":{"x":7,"y":4},"enemy_pickup_weapon":{"x":0,"y":5},"enemy_shoot_1":{"x":1,"y":5},"enemy_shoot_2":{"x":2,"y":5},"enemy_dead_1":{"x":0,"y":4},"enemy_dead_2":{"x":1,"y":4},"enemy_dead_3":{"x":2,"y":4},"enemy_dead_4":{"x":3,"y":4},"enemy_dead_5":{"x":3,"y":4}}},"WEAPON":{"sizeX":8,"sizeY":4,"pos":{"weapon_default_1":{"x":0,"y":0},"weapon_pick_1":{"x":1,"y":0},"weapon_shoot_1_1":{"x":2,"y":0},"weapon_shoot_2_1":{"x":3,"y":0},"weapon_hide_1":{"x":4,"y":0},"weapon_default_2":{"x":0,"y":1},"weapon_pick_2":{"x":1,"y":1},"weapon_shoot_1_2":{"x":2,"y":1},"weapon_shoot_2_2":{"x":3,"y":1},"weapon_hide_2":{"x":4,"y":1},"weapon_default_3":{"x":0,"y":2},"weapon_pick_3":{"x":1,"y":2},"weapon_shoot_1_3":{"x":2,"y":2},"weapon_shoot_2_3":{"x":3,"y":2},"weapon_hide_3":{"x":4,"y":2},"weapon_default_4":{"x":0,"y":3},"weapon_pick_4":{"x":1,"y":3},"weapon_shoot_1_4":{"x":2,"y":3},"weapon_shoot_2_4":{"x":3,"y":3},"weapon_hide_4":{"x":4,"y":3}}},"OBJECT":{"sizeX":8,"sizeY":8,"pos":{"pickable_clip":{"x":3,"y":5},"pickable_dog_food":{"x":3,"y":1},"pickable_blood":{"x":5,"y":0},"pickable_cross":{"x":1,"y":6},"pickable_chalice":{"x":2,"y":6},"pickable_chest":{"x":3,"y":6},"pickable_crown":{"x":4,"y":6},"pickable_chicken_meal":{"x":1,"y":5},"pickable_extra_life":{"x":0,"y":7},"pickable_bloody_skeleton":{"x":1,"y":7},"pickable_key_silver":{"x":3,"y":4},"pickable_key_gold":{"x":2,"y":4},"pickable_first_aid_kit":{"x":2,"y":5},"pickable_machinegun":{"x":4,"y":5},"pickable_chaingun":{"x":0,"y":6},"furniture_stain":{"x":2,"y":0},"furniture_greenBarrel":{"x":3,"y":0},"furniture_chairsTable":{"x":4,"y":0},"furniture_flag":{"x":6,"y":0},"furniture_greenStandingLamp":{"x":0,"y":1},"furniture_hangingCandlestick":{"x":1,"y":1},"furniture_hangingSkeleton":{"x":2,"y":1},"furniture_pillar":{"x":4,"y":1},"furniture_boneRemains1":{"x":5,"y":1},"furniture_kitchenUtensilsBig":{"x":6,"y":1},"furniture_oven":{"x":7,"y":1},"furniture_potTree":{"x":0,"y":2},"furniture_lyingSkeleton":{"x":1,"y":2},"furniture_washbasin":{"x":2,"y":2},"furniture_witheredPotTree":{"x":3,"y":2},"furniture_urn":{"x":4,"y":2},"furniture_boneRemains2":{"x":5,"y":2},"furniture_boneRemains3":{"x":6,"y":2},"furniture_creepers":{"x":7,"y":2},"furniture_table":{"x":0,"y":3},"furniture_hangingLamp":{"x":1,"y":3},"furniture_kitchenUtensilsSmall":{"x":2,"y":3},"furniture_guardArmor":{"x":3,"y":3},"furniture_emptyCage":{"x":4,"y":3},"furniture_spears":{"x":5,"y":3},"furniture_skeletonCage":{"x":0,"y":4},"furniture_skullsPile":{"x":1,"y":4},"furniture_bed":{"x":4,"y":4},"furniture_pot":{"x":0,"y":5},"furniture_barrel":{"x":2,"y":7},"furniture_fullWell":{"x":3,"y":7},"furniture_emptyWell":{"x":4,"y":7}}},"PLAYER":{"sizeX":4,"sizeY":2,"pos":{"player_1":{"x":0,"y":0}}},"MAPCREATOR":{"sizeX":2,"sizeY":2,"pos":{"enemy_target":{"x":0,"y":0},"wall_target":{"x":1,"y":0},"end_game":{"x":0,"y":1}}}}');

                /***/
})

        /******/
});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
            /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
            /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
        /******/
}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
            /******/
};
        /******/
})();
/******/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/
}
                /******/
}
            /******/
};
        /******/
})();
/******/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function () {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
                /******/
} catch (e) {
/******/ 				if (typeof window === 'object') return window;
                /******/
}
            /******/
})();
        /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
            /******/
};
        /******/
})();
/******/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if (scripts.length) scriptUrl = scripts[scripts.length - 1].src
                /******/
}
            /******/
}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
        /******/
})();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    (() => {
        "use strict";
        /*!**********************!*\
          !*** ./src/index.ts ***!
          \**********************/
        __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_favicon_ico__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/favicon.ico */ "./src/assets/favicon.ico");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Main */ "./src/components/Main.ts");



        new _components_Main__WEBPACK_IMPORTED_MODULE_2__["default"](document.getElementById("root"));

    })();

    /******/
})()
    ;
//# sourceMappingURL=bundle.js.map