"use strict";
(() => {
var exports = {};
exports.id = 130;
exports.ids = [130];
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

/***/ 9358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3499);
/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9217);
// pages/api/[...path].ts


// 中间件函数，用于检查 session 中是否有 token，并在请求头中设置 token
const setTokenMiddleware = (handler)=>async (req, res)=>{
        const session = req.session.user;
        if (session?.token) {
            req.headers.Authorization = `Bearer ${session.token}`;
        }
        return handler(req, res);
    };
// 高阶 API 路由处理程序，用于处理所有的 API 请求
const apiHandler = (req, res)=>{
    // 在这里编写你的 API 逻辑
    // ...
    console.log("123");
    res.status(200).json({
        message: "API 请求成功"
    });
};
// 将中间件函数应用到高阶处理程序中
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionApiRoute */ .n)(setTokenMiddleware(apiHandler), _lib_session__WEBPACK_IMPORTED_MODULE_1__/* .sessionOptions */ .d));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [499], () => (__webpack_exec__(9358)));
module.exports = __webpack_exports__;

})();