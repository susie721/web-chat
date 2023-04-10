"use strict";
(() => {
var exports = {};
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 3527:
/***/ ((module) => {

module.exports = require("@peculiar/webcrypto");

/***/ }),

/***/ 3625:
/***/ ((module) => {

module.exports = require("buffer/index.js");

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

/***/ 3348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3499);
/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9217);


async function userRoute(req, res) {
    if (req.session.user) {
        // in a real world application you might read the user id from the session and then do a database request
        // to get more information on the user if needed
        res.json({
            ...req.session.user,
            isLoggedIn: true
        });
    } else {
        res.json({
            isLoggedIn: false,
            login: "",
            avatarUrl: "",
            token: "",
            open_id: ""
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionApiRoute */ .n)(userRoute, _lib_session__WEBPACK_IMPORTED_MODULE_1__/* .sessionOptions */ .d));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [499], () => (__webpack_exec__(3348)));
module.exports = __webpack_exports__;

})();