"use strict";
(() => {
var exports = {};
exports.id = 231;
exports.ids = [231];
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

/***/ 159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3499);
/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9217);
// import type { User } from '../../user'


async function chatRoute(req, res) {
    const { messages , prompt , contentType  } = await req.body;
    console.log(Array.isArray(messages));
    const val = res;
    const session = req.session;
    console.log(session);
    // console.log(id)
    // const headers = { Authorization: 'Bearer ' + user.token, 'Content-Type': 'application/json', 'Accept': 'text/event-stream' };
    // const eventSourceInit = {
    //   headers,
    //   withCredentials: true,
    // } as EventSourceInit;
    // const chatParams = {
    //   prompt: inputValue,
    //   messages: JSON.stringify(messages)
    // }
    // const queryString = new URLSearchParams(chatParams).toString();
    // const eventSource = new EventSource(`http://dev.api.helloadmin.cn/api/web/chat/completions?${queryString}`, eventSourceInit);
    // // eventSource.onopen = (event) => {
    // //   console.log('SSE connection opened:', event);
    // // };
    // eventSource.onmessage = (event) => {
    //   debugger
    //   const data = JSON.parse(event.data);
    //   console.log('SSE message received:', data);
    // };
    // eventSource.onerror = (event) => {
    //   console.error('SSE connection error:', event);
    // };
    // return () => {
    //   eventSource.close();
    // }
    try {
        // eventSource.onerror = (event) => {
        //   console.error('SSE connection error:', event);
        // };
        // return () => {
        //   eventSource.close();
        // };
        await fetch("https://api.helloadmin.cn/api/web/chat/completions", {
            method: "POST",
            body: JSON.stringify({
                prompt: prompt,
                messages: messages
            }),
            headers: {
                "Accept": "text/event-stream",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + session.token
            }
        }).then((response)=>{
            // res.json(response)
            const res = response;
            const reader = res.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let buffer = "";
            reader.read().then(function processResult(result) {
                if (result.done) {
                    console.log("Server closed connection");
                    return;
                }
                buffer += decoder.decode(result.value, {
                    stream: true
                });
                const messages = buffer.split("\n");
                buffer = messages.pop();
                messages.forEach((data)=>{
                    // 在这里处理每个数据包
                    console.log(data);
                });
                reader.read().then(processResult);
            });
        // if (response.ok) {
        //   console.log('成功了')
        //   const eventSource = new EventSource(response.url);
        //   eventSource.addEventListener('message', event => {
        //     console.log('Received message:', event.data);
        //     // Handle the message data here
        //   });
        // } else {
        //   console.log('11111')
        // }
        });
    // const headers = { Authorization: 'Bearer ' + session.user.token, 'Content-Type': 'text/event-stream', 'Accept': 'application/json' };
    // const eventSourceInit = {
    //   headers,
    //   withCredentials: true,
    // } as EventSourceInit;
    // if (typeof EventSource !== 'undefined') {
    //   const eventSource = new EventSource('http://dev.api.helloadmin.cn/api/web/chat/completions', eventSourceInit);
    //   // // eventSource.onopen = (event) => {
    //   // //   console.log('SSE connection opened:', event);
    //   // // };
    //   eventSource.onmessage = (event) => {
    //     const data:any = JSON.parse(event.data);
    //     console.log(data)
    //     res.json(data.data)
    //     console.log('SSE message received:', data);
    //   };
    // }
    // const data: {code: number, data: object } = await request(API.CHAT, { method: 'POST', body: {messages: messages, prompt: prompt}, accept: 'text/event-stream', contentType: 'application/json', token: session.user.token});
    // console.log(data)
    // if (data.code === 200) {
    // res.json(data.data)
    // }
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionApiRoute */ .n)(chatRoute, _lib_session__WEBPACK_IMPORTED_MODULE_1__/* .sessionOptions */ .d));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [499], () => (__webpack_exec__(159)));
module.exports = __webpack_exports__;

})();