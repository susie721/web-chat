"use strict";
(() => {
var exports = {};
exports.id = 174;
exports.ids = [174,170];
exports.modules = {

/***/ 3527:
/***/ ((module) => {

module.exports = require("@peculiar/webcrypto");

/***/ }),

/***/ 3625:
/***/ ((module) => {

module.exports = require("buffer/index.js");

/***/ }),

/***/ 4511:
/***/ ((module) => {

module.exports = require("next-iron-session");

/***/ }),

/***/ 9217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ sessionOptions)
/* harmony export */ });
const sessionOptions = {
    password: "2gyZ3GDw3LHZQKDhPmPDL3sjREVRXPrd",
    cookieName: "jsc_cookie"
};


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


/***/ }),

/***/ 598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3499);
/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9217);
/* harmony import */ var _pages_api_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6330);



async function eventsRoute(req, res) {
    const user = req.session.user;
    if (!user || user.isLoggedIn === false) {
        res.status(401).end();
        return;
    }
    try {
        const response = await (0,_pages_api_chat__WEBPACK_IMPORTED_MODULE_2__.userInfo)();
        res.json(response);
    } catch (error) {
        res.status(200).json([]);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionApiRoute */ .n)(eventsRoute, _lib_session__WEBPACK_IMPORTED_MODULE_1__/* .sessionOptions */ .d));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [499,274], () => (__webpack_exec__(598)));
module.exports = __webpack_exports__;

})();