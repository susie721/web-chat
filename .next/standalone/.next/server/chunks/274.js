"use strict";
exports.id = 274;
exports.ids = [274];
exports.modules = {

/***/ 175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    CHAT: "/api/web/chat/completions",
    LOGIN: "/api/web/login",
    USERINFO: "/api/v1/auth/members"
});


/***/ }),

/***/ 6652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ request)
/* harmony export */ });
/* unused harmony export withAuthServerSideProps */
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4511);
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);

const baseURL = "http://dev.api.helloadmin.cn";
async function request(url, options = {}, req) {
    // const session = req?.session;
    console.log(options.token);
    const response = await fetch(new URL(url, baseURL).toString(), {
        method: options.method || "POST",
        headers: {
            "Accept": options.accept || "application/json",
            "Content-Type": options.contentType || "application/json",
            Authorization: options.token ? `Bearer ${options.token}` : "",
            ...options.headers
        },
        body: JSON.stringify(options.body)
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    if (response.status === 401) {
        throw new Error("Unauthorized");
    }
    const data = await response.json();
    return data;
}
// export default withIronSessionApiRoute(async (req, res) => {
//   const ironReq = req as NextIronRequest & { session: Session };
//   try {
//     const data = await request(req.url as string, {
//       method: req.method as RequestOptions['method'],
//       headers: req.headers as RequestOptions['headers'],
//       body: req.body as RequestOptions['body'],
//       contentType: req.headers['content-type'] as RequestOptions['contentType'],
//     }, ironReq);
//     res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }, {
//   password: '2gyZ3GDw3LHZQKDhPmPDL3sjREVRXPrd',
//   cookieName: 'jsc_cookie',
//   cookieOptions: {
//     secure: process.env.NODE_ENV === 'production',
//   },
// });
const withAuthServerSideProps = (getServerSidePropsFunc)=>withIronSession(async (ctx)=>{
        const session = JSON.parse(ctx.req.cookies.session);
        if (!session || !session.token) {
            return {
                redirect: {
                    destination: "/login",
                    permanent: false
                }
            };
        }
        return getServerSidePropsFunc(ctx);
    }, {
        password: process.env.SECRET_COOKIE_PASSWORD,
        cookieName: "session",
        cookieOptions: {
            secure: "production" === "production"
        }
    });


/***/ })

};
;