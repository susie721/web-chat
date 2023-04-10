"use strict";
(() => {
var exports = {};
exports.id = 170;
exports.ids = [170];
exports.modules = {

/***/ 4511:
/***/ ((module) => {

module.exports = require("next-iron-session");

/***/ }),

/***/ 6330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "userInfo": () => (/* binding */ userInfo)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6652);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(175);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


function login(param) {
    return (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__/* .request */ .W)(_lib_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].LOGIN */ .Z.LOGIN, {
        method: "POST",
        body: param
    });
}
function userInfo() {
    return (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__/* .request */ .W)(_lib_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].USERINFO */ .Z.USERINFO, {
        method: "GET"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [274], () => (__webpack_exec__(6330)));
module.exports = __webpack_exports__;

})();