(() => {
var exports = {};
exports.id = 726;
exports.ids = [726];
exports.modules = {

/***/ 1204:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/index.json": [
		6363,
		363
	],
	"./zh/index.json": [
		6577,
		577
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 1204;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 4154:
/***/ ((module) => {

// Exports
module.exports = {
	"chat_content": "chat_chat_content__gEs0W",
	"chat_list": "chat_chat_list__t2zHh",
	"scroll_bottom": "chat_scroll_bottom__RjGpe",
	"chat_ai": "chat_chat_ai__EzcwK",
	"user_info": "chat_user_info__g8VMe"
};


/***/ }),

/***/ 9783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ sessionOptions)
/* harmony export */ });
const sessionOptions = {
    password: "2gyZ3GDw3LHZQKDhPmPDL3sjREVRXPrd",
    cookieName: "jsc_cookie"
};


/***/ }),

/***/ 5856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-intl"
var external_next_intl_ = __webpack_require__(503);
;// CONCATENATED MODULE: external "react-scroll-to-bottom"
const external_react_scroll_to_bottom_namespaceObject = require("react-scroll-to-bottom");
var external_react_scroll_to_bottom_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_to_bottom_namespaceObject);
;// CONCATENATED MODULE: ./src/components/ScrollBottom.tsx
"use client";



const ScrollToBottomCompontent = ({ mode ="bottom" , checkInterval =150 , className ="" , children =null , initialScrollBehavior ="smooth" , scroller =()=>Infinity , id ="scroll-to-bottom"  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_scroll_to_bottom_default()), {
        className: "chat-container",
        mode: mode,
        initialScrollBehavior: initialScrollBehavior,
        checkInterval: checkInterval,
        scroller: scroller,
        children: children
    });
};
/* harmony default export */ const ScrollBottom = (ScrollToBottomCompontent);

// EXTERNAL MODULE: ./node_modules/iron-session/next/dist/index.mjs + 2 modules
var dist = __webpack_require__(3940);
// EXTERNAL MODULE: ./src/lib/session.ts
var session = __webpack_require__(9783);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/colors"
var colors_ = __webpack_require__(5574);
// EXTERNAL MODULE: ./src/pages/chat/index.module.scss
var index_module = __webpack_require__(4154);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
;// CONCATENATED MODULE: ./src/pages/chat/record/index.tsx



// import LocaleSwitcher from '@/components/LocaleSwitcher';
// import ScrollToBottom from 'react-scroll-to-bottom';







function Index({ user  }) {
    const t = (0,external_next_intl_.useTranslations)("Index");
    const [inputValue, setInputValue] = (0,external_react_.useState)("");
    const [messages, setMessages] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        async function init() {
            const data = await fetch("http://dev.api.helloadmin.cn/api/v1/chat/histories?page=1", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + user.token
                }
            });
            const v = await data.json();
            if (v.code === 200) {
                const datas = messages.concat(v.data.items);
                setMessages(datas);
            }
        }
        init();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(system_.Box, {
        className: (index_module_default()).chat_content,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ScrollBottom, {
            className: (index_module_default()).scroll_bottom,
            children: [
                messages.map((v)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        container: true,
                        direction: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (index_module_default()).user_info,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                        item: true,
                                        xs: 12,
                                        md: 8,
                                        lg: 6,
                                        sx: {
                                            display: "flex",
                                            py: {
                                                xs: 2,
                                                sm: 4
                                            },
                                            px: {
                                                xs: 2
                                            },
                                            lineHeight: "30px"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                sx: {
                                                    bgcolor: colors_.green[500],
                                                    height: "30px",
                                                    width: "30px",
                                                    padding: "2px"
                                                },
                                                variant: "rounded",
                                                src: "/images/1.png"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(system_.Box, {
                                                sx: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    width: "calc(100% - 120px)",
                                                    paddingLeft: "20px",
                                                    minHeight: "20px",
                                                    lineHeight: "30px"
                                                },
                                                children: v.human
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (index_module_default()).chat_ai,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                        item: true,
                                        xs: 12,
                                        md: 8,
                                        lg: 6,
                                        sx: {
                                            display: "flex",
                                            py: {
                                                xs: 2,
                                                sm: 4
                                            },
                                            px: {
                                                xs: 2
                                            },
                                            lineHeight: "30px"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                sx: {
                                                    bgcolor: colors_.pink[500],
                                                    height: "30px",
                                                    width: "30px",
                                                    padding: "2px"
                                                },
                                                variant: "rounded"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(system_.Box, {
                                                sx: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    width: "calc(100% - 120px)",
                                                    paddingLeft: "20px",
                                                    minHeight: "20px",
                                                    lineHeight: "30px"
                                                },
                                                children: v.ai
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    });
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(system_.Box, {
                    sx: {
                        height: "100px"
                    }
                })
            ]
        })
    });
}
const getServerSideProps = (0,dist/* withIronSessionSsr */.c)(async function({ req , res , locale  }) {
    const user = req.session.user || null;
    const messages = (await __webpack_require__(1204)(`./${locale}/index.json`)).default;
    if (user === null) {
        res.setHeader("location", "/login");
        res.statusCode = 302;
        res.end();
        return {
            props: {
                user: {
                    isLoggedIn: false,
                    token: "",
                    open_id: ""
                }
            }
        };
    }
    return {
        props: {
            user: user,
            messages: messages
        }
    };
}, session/* sessionOptions */.d);


/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 5574:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ 7986:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ 3527:
/***/ ((module) => {

"use strict";
module.exports = require("@peculiar/webcrypto");

/***/ }),

/***/ 3625:
/***/ ((module) => {

"use strict";
module.exports = require("buffer/index.js");

/***/ }),

/***/ 503:
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940], () => (__webpack_exec__(5856)));
module.exports = __webpack_exports__;

})();