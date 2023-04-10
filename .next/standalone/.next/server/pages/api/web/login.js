"use strict";
(() => {
var exports = {};
exports.id = 641;
exports.ids = [641];
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

/***/ 6408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3499);
/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9217);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6652);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(175);




async function loginRoute(req, res) {
    const { id  } = await req.body;
    try {
        const data = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__/* .request */ .W)(_lib_api__WEBPACK_IMPORTED_MODULE_3__/* ["default"].LOGIN */ .Z.LOGIN, {
            method: "POST",
            body: {
                id: id
            }
        });
        if (data.code === 200) {
            const { access_token , open_id  } = data.data;
            req.session.destroy();
            const user = {
                token: access_token,
                open_id: open_id
            };
            req.session.user = user;
            await req.session.save();
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionApiRoute */ .n)(loginRoute, _lib_session__WEBPACK_IMPORTED_MODULE_1__/* .sessionOptions */ .d));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [499,274], () => (__webpack_exec__(6408)));
module.exports = __webpack_exports__;

})();