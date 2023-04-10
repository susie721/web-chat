(() => {
var exports = {};
exports.id = 180;
exports.ids = [180];
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

/***/ 1513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4529);

const useLoginModal = (0,zustand__WEBPACK_IMPORTED_MODULE_0__/* .create */ .Ue)((set)=>({
        isOpen: false,
        onOpen: ()=>set({
                isOpen: true
            }),
        onClose: ()=>set({
                isOpen: false
            })
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLoginModal);


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

/***/ 1137:
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
// EXTERNAL MODULE: ./node_modules/react-markdown/lib/react-markdown.js + 81 modules
var react_markdown = __webpack_require__(7491);
// EXTERNAL MODULE: ./node_modules/remark-gfm/index.js + 28 modules
var remark_gfm = __webpack_require__(2490);
;// CONCATENATED MODULE: external "react-syntax-highlighter"
const external_react_syntax_highlighter_namespaceObject = require("react-syntax-highlighter");
// EXTERNAL MODULE: ./node_modules/rehype-katex/index.js + 15 modules
var rehype_katex = __webpack_require__(1261);
;// CONCATENATED MODULE: ./src/components/Markdown.tsx






// type StyleProps = {
//     style: { [key: string]: React.CSSProperties }
// }
function Markdown({ content  }) {
    const [oneStyle, setStyle] = (0,external_react_.useState)({});
    (0,external_react_.useEffect)(()=>{
        Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 515, 23)).then((mod)=>setStyle(mod.default));
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(react_markdown/* ReactMarkdown */.D, {
        children: content,
        components: {
            code ({ node , inline , className , style , children , ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_syntax_highlighter_namespaceObject.Prism, {
                    children: String(children).replace(/\n$/, ""),
                    style: oneStyle,
                    language: match ? match[1] : "",
                    PreTag: "div",
                    ...props
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("code", {
                    className: "font-semibold italic",
                    ...props,
                    children: [
                        children,
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "123"
                        })
                    ]
                });
            }
        },
        remarkPlugins: [
            remark_gfm/* default */.Z
        ],
        rehypePlugins: [
            rehype_katex/* default */.Z
        ]
    });
}
/* harmony default export */ const components_Markdown = (Markdown);

;// CONCATENATED MODULE: external "react-infinite-scroller"
const external_react_infinite_scroller_namespaceObject = require("react-infinite-scroller");
var external_react_infinite_scroller_default = /*#__PURE__*/__webpack_require__.n(external_react_infinite_scroller_namespaceObject);
// EXTERNAL MODULE: ./node_modules/iron-session/next/dist/index.mjs + 2 modules
var dist = __webpack_require__(3940);
// EXTERNAL MODULE: ./src/lib/session.ts
var session = __webpack_require__(9783);
;// CONCATENATED MODULE: ./src/hooks/useScrollToView.tsx
// scrolls the element's ancestor containers is visible to the user.
const useScrollToView = (ref)=>{
    const scrollToView = ()=>{
        ref.current && ref.current.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    };
    return scrollToView;
};

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/icons-material/Send"
const Send_namespaceObject = require("@mui/icons-material/Send");
var Send_default = /*#__PURE__*/__webpack_require__.n(Send_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/colors"
var colors_ = __webpack_require__(5574);
;// CONCATENATED MODULE: external "@microsoft/fetch-event-source"
const fetch_event_source_namespaceObject = require("@microsoft/fetch-event-source");
// EXTERNAL MODULE: ./src/pages/chat/index.module.scss
var index_module = __webpack_require__(4154);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
// EXTERNAL MODULE: ./src/hooks/useLoginModal.tsx
var useLoginModal = __webpack_require__(1513);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var react_hot_toast_dist = __webpack_require__(6501);
;// CONCATENATED MODULE: ./src/pages/chat/index.tsx
















function Index({ user  }) {
    const myRef = (0,external_react_.useRef)(null);
    const t = (0,external_next_intl_.useTranslations)("Index");
    const scrollIntoView = useScrollToView(myRef);
    const loginModal = (0,useLoginModal/* default */.Z)();
    const [inputValue, setInputValue] = (0,external_react_.useState)("");
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    const [fluctuating, setFluctuating] = (0,external_react_.useState)(false);
    const [messages, setMessages] = (0,external_react_.useState)([
        {
            "role": "system",
            "content": "You are a helpful assistant."
        }
    ]);
    (0,external_react_.useEffect)(()=>{
        scrollIntoView();
        (0,react_hot_toast_dist/* default */.ZP)("Hello World");
    }, [
        scrollIntoView
    ]);
    const handleChange = (event)=>{
        setInputValue(event.target.value);
    };
    const chatKeyDown = (e)=>{
        if (e.shiftKey === false && e.keyCode === 13 && isLoading === false) {
            setInputValue("");
            e.preventDefault();
            handler(e);
        }
    };
    // 发送消息
    const handler = async (e)=>{
        if (!user) {
            return loginModal.onOpen();
        }
        e.preventDefault();
        if (isLoading || !inputValue) {
            return;
        }
        let messagesList = messages;
        messagesList.push({
            "role": "user",
            "content": inputValue
        }, {
            "role": "ai",
            "content": ""
        });
        setMessages(messagesList);
        setIsLoading(true);
        scrollIntoView();
        const controller = new AbortController();
        let counter = 0;
        let messageParam = messages.filter((v)=>v.role !== "ai").slice(-5);
        let currentResponse = [];
        setFluctuating(true);
        await (0,fetch_event_source_namespaceObject.fetchEventSource)("https://api.helloadmin.cn/api/web/chat/completions", {
            method: "POST",
            body: JSON.stringify({
                prompt: inputValue,
                messages: messageParam,
                token: user.token
            }),
            headers: {
                "Content-Type": "application/json"
            },
            onmessage (event) {
                if (event.data === "[DONE]") {
                    setFluctuating(false);
                }
                const data = event.data;
                try {
                    const json = JSON.parse(data);
                    const text = json.choices[0].delta?.content || "";
                    currentResponse = [
                        ...currentResponse,
                        text
                    ];
                    setMessages((prev)=>[
                            ...prev.slice(0, -1),
                            {
                                content: currentResponse.join(""),
                                role: "ai"
                            }
                        ]);
                    setIsLoading(false);
                    scrollIntoView();
                    if (counter < 2 && (text.match(/\n/) || []).length) {
                        // this is a prefix character (i.e., "\n\n"), do nothing
                        return;
                    }
                    counter++;
                } catch (e) {
                // maybe parse error
                // controller.error(e);
                }
            // console.debug(event);
            // const text = data.choices[0].delta?.content || ''
            },
            onclose () {
                console.log("Connection closed by the server");
            }
        });
    };
    const loadMore = ()=>{};
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(system_.Box, {
        className: (index_module_default()).chat_content,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).chat_list,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_infinite_scroller_default()), {
                    pageStart: 0,
                    loadMore: loadMore,
                    hasMore: false,
                    useWindow: false,
                    className: (index_module_default()).scroll_bottom,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            container: true,
                            direction: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            children: messages.map((v, i)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: v.role === "user" ? (index_module_default()).user_info : (index_module_default()).chat_ai,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                            item: true,
                                            xs: 12,
                                            md: 10,
                                            lg: 8,
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
                                                        bgcolor: v.role === "user" ? colors_.pink[500] : colors_.green[500],
                                                        height: "30px",
                                                        width: "30px",
                                                        padding: "2px"
                                                    },
                                                    variant: "rounded",
                                                    src: v.role === "user" ? "" : "/images/1.png"
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
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `${fluctuating && i + 1 === messages.length && "animate-pulse result-streaming"}`,
                                                        children: fluctuating && i + 1 === messages.length && !v.content ? /*#__PURE__*/ jsx_runtime_.jsx("p", {}) : /*#__PURE__*/ jsx_runtime_.jsx(components_Markdown, {
                                                            content: v.content
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }, i);
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(system_.Box, {
                            sx: {
                                height: "135px"
                            },
                            ref: myRef
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(system_.Box, {
                sx: {
                    position: "absolute",
                    bottom: "2px",
                    background: "#fff",
                    p: {
                        xs: "0x",
                        sm: "40px 0px"
                    },
                    width: "100%"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    container: true,
                    direction: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 12,
                        md: 10,
                        lg: 8,
                        sx: {
                            px: {
                                xs: 2
                            }
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                            component: "form",
                            sx: {
                                widht: "100%",
                                p: {
                                    xs: "6px 4px",
                                    sm: "10px 4px"
                                },
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.InputBase, {
                                    multiline: true,
                                    sx: {
                                        ml: 1,
                                        flex: 1
                                    },
                                    placeholder: "请输入内容",
                                    inputProps: {
                                        "aria-label": "search google maps"
                                    },
                                    value: inputValue,
                                    onKeyDown: chatKeyDown,
                                    onChange: handleChange
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    onClick: (e)=>handler(e),
                                    endIcon: /*#__PURE__*/ jsx_runtime_.jsx((Send_default()), {
                                        sx: {
                                            color: "rgba(142,142,160, 0.4)"
                                        }
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}
const getServerSideProps = (0,dist/* withIronSessionSsr */.c)(async function({ req , res , locale  }) {
    const user = req.session.user || null;
    const messages = (await __webpack_require__(1204)(`./${locale}/index.json`)).default;
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

/***/ 950:
/***/ ((module) => {

"use strict";
module.exports = require("extend");

/***/ }),

/***/ 9270:
/***/ ((module) => {

"use strict";
module.exports = require("inline-style-parser");

/***/ }),

/***/ 3715:
/***/ ((module) => {

"use strict";
module.exports = require("is-buffer");

/***/ }),

/***/ 503:
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

/***/ }),

/***/ 4317:
/***/ ((module) => {

"use strict";
module.exports = require("parse5/lib/parser/index.js");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1469:
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ 515:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter/dist/esm/styles/prism/one-dark");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5224:
/***/ ((module) => {

"use strict";
module.exports = require("use-sync-external-store/shim/with-selector.js");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7282:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,853,567], () => (__webpack_exec__(1137)));
module.exports = __webpack_exports__;

})();