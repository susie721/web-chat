"use strict";
(() => {
var exports = {};
exports.id = 25;
exports.ids = [25];
exports.modules = {

/***/ 6351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./node_modules/eventsource-parser/dist/index.js
var dist = __webpack_require__(4235);
;// CONCATENATED MODULE: ./src/utils/openaiStream.ts

async function OpenAIStream(payload) {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    let counter = 0;
    const res = await fetch("http://dev.api.helloadmin.cn/api/web/chat/completions", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${payload.token ?? ""}`
        },
        method: "POST",
        body: JSON.stringify({
            prompt: payload.prompt,
            message: payload.message
        })
    });
    const stream = new ReadableStream({
        async start (controller) {
            // callback
            function onParse(event) {
                if (event.type === "event") {
                    const data = event.data;
                    // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
                    if (data === "[DONE]") {
                        controller.close();
                        return;
                    }
                    try {
                        const json = JSON.parse(data);
                        const text = json.choices[0].delta?.content || "";
                        if (counter < 2 && (text.match(/\n/) || []).length) {
                            // this is a prefix character (i.e., "\n\n"), do nothing
                            return;
                        }
                        const queue = encoder.encode(text);
                        controller.enqueue(queue);
                        counter++;
                    } catch (e) {
                        // maybe parse error
                        controller.error(e);
                    }
                }
            }
            // stream response (SSE) from OpenAI may be fragmented into multiple chunks
            // this ensures we properly read chunks and invoke an event for each SSE event stream
            const parser = (0,dist/* createParser */.j)(onParse);
            // https://web.dev/streams/#asynchronous-iteration
            for await (const chunk of res.body){
                parser.feed(decoder.decode(chunk));
            }
        }
    });
    return stream;
}

;// CONCATENATED MODULE: ./src/pages/api/responsess.ts

async function readRequestBody(body) {
    const reader = body.getReader();
    let result = "";
    while(true){
        const { done , value  } = await reader.read();
        if (done) break;
        result += new TextDecoder().decode(value);
    }
    return JSON.parse(result);
}
async function handler(request) {
    const body = request.body;
    const json = await readRequestBody(body);
    const { token , message , prompt  } = json;
    //   if (!message) {
    //     return new Response('No message in the request', { status: 400 })
    //   }
    const payload = {
        message: message,
        token: token,
        prompt: prompt
    };
    const stream = await OpenAIStream(payload);
    return new Response(stream);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [235], () => (__webpack_exec__(6351)));
module.exports = __webpack_exports__;

})();