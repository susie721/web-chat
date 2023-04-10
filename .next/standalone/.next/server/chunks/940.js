"use strict";
exports.id = 940;
exports.ids = [940];
exports.modules = {

/***/ 1739:
/***/ ((__unused_webpack_module, exports) => {

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var __toString = Object.prototype.toString

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var dec = opt.decode || decode;

  var index = 0
  while (index < str.length) {
    var eqIdx = str.indexOf('=', index)

    // no more cookie pairs
    if (eqIdx === -1) {
      break
    }

    var endIdx = str.indexOf(';', index)

    if (endIdx === -1) {
      endIdx = str.length
    } else if (endIdx < eqIdx) {
      // backtrack on prior semicolon
      index = str.lastIndexOf(';', eqIdx - 1) + 1
      continue
    }

    var key = str.slice(index, eqIdx).trim()

    // only assign once
    if (undefined === obj[key]) {
      var val = str.slice(eqIdx + 1, endIdx).trim()

      // quoted values
      if (val.charCodeAt(0) === 0x22) {
        val = val.slice(1, -1)
      }

      obj[key] = tryDecode(val, dec);
    }

    index = endIdx + 1
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    var expires = opt.expires

    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + expires.toUTCString()
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.priority) {
    var priority = typeof opt.priority === 'string'
      ? opt.priority.toLowerCase()
      : opt.priority

    switch (priority) {
      case 'low':
        str += '; Priority=Low'
        break
      case 'medium':
        str += '; Priority=Medium'
        break
      case 'high':
        str += '; Priority=High'
        break
      default:
        throw new TypeError('option priority is invalid')
    }
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * URL-decode string value. Optimized to skip native call when no %.
 *
 * @param {string} str
 * @returns {string}
 */

function decode (str) {
  return str.indexOf('%') !== -1
    ? decodeURIComponent(str)
    : str
}

/**
 * URL-encode value.
 *
 * @param {string} str
 * @returns {string}
 */

function encode (val) {
  return encodeURIComponent(val)
}

/**
 * Determine if value is a Date.
 *
 * @param {*} val
 * @private
 */

function isDate (val) {
  return __toString.call(val) === '[object Date]' ||
    val instanceof Date
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

/***/ 3940:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ withIronSessionSsr)
});

// UNUSED EXPORTS: withIronSessionApiRoute

// EXTERNAL MODULE: external "buffer/index.js"
var index_js_ = __webpack_require__(3625);
;// CONCATENATED MODULE: ./node_modules/iron-webcrypto/dist/index.mjs



var x=t=>(index_js_.Buffer.isBuffer(t)?t:index_js_.Buffer.from(t)).toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),j={encryption:{saltBits:256,algorithm:"aes-256-cbc",iterations:1,minPasswordlength:32},integrity:{saltBits:256,algorithm:"sha256",iterations:1,minPasswordlength:32},ttl:0,timestampSkewSec:60,localtimeOffsetMsec:0},v=t=>({...t,encryption:{...t.encryption},integrity:{...t.integrity}}),u={"aes-128-ctr":{keyBits:128,ivBits:128,name:"AES-CTR"},"aes-256-cbc":{keyBits:256,ivBits:128,name:"AES-CBC"},sha256:{keyBits:256,name:"SHA-256"}},A="2",K=`Fe26.${A}`,M=(t,n)=>{let e=index_js_.Buffer.allocUnsafe(n);return t.getRandomValues(e),e},b=(t,n)=>{if(n<1)throw Error("Invalid random bits count");let e=Math.ceil(n/8);return M(t,e)},H=async(t,n,e,s,r,c)=>{let o=new TextEncoder,i=o.encode(n),a=await t.subtle.importKey("raw",i,"PBKDF2",!1,["deriveBits"]),f=o.encode(e),y={name:"PBKDF2",hash:c,salt:f,iterations:s},d=await t.subtle.deriveBits(y,a,r*8);return index_js_.Buffer.from(d)},E=async(t,n,e)=>{var a;if(n==null||!n.length)throw new Error("Empty password");if(e==null||typeof e!="object")throw new Error("Bad options");if(!(e.algorithm in u))throw new Error(`Unknown algorithm: ${e.algorithm}`);let s=u[e.algorithm],r={},c=(a=e.hmac)!=null?a:!1,o=c?{name:"HMAC",hash:s.name}:{name:s.name},i=c?["sign","verify"]:["encrypt","decrypt"];if(typeof n=="string"){if(n.length<e.minPasswordlength)throw new Error(`Password string too short (min ${e.minPasswordlength} characters required)`);let{salt:f=""}=e;if(!f){let{saltBits:m=0}=e;if(!m)throw new Error("Missing salt and saltBits options");f=b(t,m).toString("hex");}let y=await H(t,n,f,e.iterations,s.keyBits/8,"SHA-1"),d=await t.subtle.importKey("raw",y,o,!1,i);r.key=d,r.salt=f;}else {if(n.length<s.keyBits/8)throw new Error("Key buffer (password) too small");r.key=await t.subtle.importKey("raw",n,o,!1,i),r.salt="";}return e.iv?r.iv=e.iv:"ivBits"in s&&(r.iv=b(t,s.ivBits)),r},I=async(t,n,e,s)=>{let r=await E(t,n,e),o=new TextEncoder().encode(s),i=await t.subtle.encrypt({name:u[e.algorithm].name,iv:r.iv},r.key,o);return {encrypted:index_js_.Buffer.from(i),key:r}},R=async(t,n,e,s)=>{let r=await E(t,n,e),c=await t.subtle.decrypt({name:u[e.algorithm].name,iv:r.iv},r.key,index_js_.Buffer.isBuffer(s)?s:index_js_.Buffer.from(s));return new TextDecoder().decode(c)},k=async(t,n,e,s)=>{let r=await E(t,n,{...e,hmac:!0}),o=new TextEncoder().encode(s),i=await t.subtle.sign({name:"HMAC"},r.key,o);return {digest:x(index_js_.Buffer.from(i)),salt:r.salt}},$=t=>typeof t=="object"&&!index_js_.Buffer.isBuffer(t)?"secret"in t?{id:t.id,encryption:t.secret,integrity:t.secret}:{id:t.id,encryption:t.encryption,integrity:t.integrity}:{encryption:t,integrity:t},F=async(t,n,e,s)=>{if(!e)throw Error("Empty password");let r=v(s),c=Date.now()+(r.localtimeOffsetMsec||0),o=JSON.stringify(n),i=$(e),{id:a=""}=i;if(a&&!/^\w+$/.test(a))throw new Error("Invalid password id");let{encrypted:f,key:y}=await I(t,i.encryption,r.encryption,o),d=x(f),m=x(y.iv),w=r.ttl?c+r.ttl:"",g=`${K}*${a}*${y.salt}*${m}*${d}*${w}`,h=await k(t,i.integrity,r.integrity,g);return `${g}*${h.salt}*${h.digest}`},D=(t,n)=>{let e=t.length===n.length?0:1;e&&(n=t);for(let s=0;s<t.length;s+=1)e|=t.charCodeAt(s)^n.charCodeAt(s);return e===0},U=async(t,n,e,s)=>{if(!e)throw Error("Empty password");let r=v(s),c=Date.now()+(r.localtimeOffsetMsec||0),o=n.split("*");if(o.length!==8)throw new Error("Incorrect number of sealed components");let i=o[0],a=o[1],f=o[2],y=o[3],d=o[4],m=o[5],w=o[6],g=o[7],h=`${i}*${a}*${f}*${y}*${d}*${m}`;if(K!==i)throw new Error("Wrong mac prefix");if(m){if(!/^\d+$/.exec(m))throw new Error("Invalid expiration");if(parseInt(m,10)<=c-r.timestampSkewSec*1e3)throw new Error("Expired seal")}if(typeof e=="undefined"||typeof e=="string"&&e.length===0)throw new Error("Empty password");let p;if(typeof e=="object"&&!index_js_.Buffer.isBuffer(e)){if(!((a||"default")in e))throw new Error(`Cannot find password: ${a}`);p=e[a||"default"];}else p=e;p=$(p);let P=r.integrity;P.salt=w;let O=await k(t,p.integrity,P,h);if(!D(O.digest,g))throw new Error("Bad hmac value");let C=index_js_.Buffer.from(d,"base64"),B=r.encryption;B.salt=f,B.iv=index_js_.Buffer.from(y,"base64");let S=await R(t,p.encryption,B,C);return S?JSON.parse(S):null};



// EXTERNAL MODULE: ./node_modules/iron-session/node_modules/cookie/index.js
var cookie = __webpack_require__(1739);
// EXTERNAL MODULE: external "@peculiar/webcrypto"
var webcrypto_ = __webpack_require__(3527);
;// CONCATENATED MODULE: ./node_modules/iron-session/dist/index.mjs
// src/core.ts


var timestampSkewSec = 60;
var fourteenDaysInSeconds = 15 * 24 * 3600;
var currentMajorVersion = 2;
var versionDelimiter = "~";
var defaultOptions = {
  ttl: fourteenDaysInSeconds,
  cookieOptions: {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/"
  }
};
function createGetIronSession(_crypto2, unsealData2, sealData2) {
  return async (req, res, userSessionOptions) => {
    if (!req || !res || !userSessionOptions || !userSessionOptions.cookieName || !userSessionOptions.password) {
      throw new Error(
        `iron-session: Bad usage. Minimum usage is const session = await getIronSession(req, res, { cookieName: "...", password: "...". Check the usage here: https://github.com/vvo/iron-session`
      );
    }
    const passwordsAsMap = normalizeStringPasswordToMap(
      userSessionOptions.password
    );
    Object.values(
      normalizeStringPasswordToMap(userSessionOptions.password)
    ).forEach((password) => {
      if (password.length < 32) {
        throw new Error(
          `iron-session: Bad usage. Password must be at least 32 characters long.`
        );
      }
    });
    const options = {
      ...defaultOptions,
      ...userSessionOptions,
      cookieOptions: {
        ...defaultOptions.cookieOptions,
        ...userSessionOptions.cookieOptions || {}
      }
    };
    if (options.ttl === 0) {
      options.ttl = 2147483647;
    }
    if (userSessionOptions.cookieOptions && "maxAge" in userSessionOptions.cookieOptions) {
      if (userSessionOptions.cookieOptions.maxAge === void 0) {
        options.ttl = 0;
      } else {
        options.cookieOptions.maxAge = computeCookieMaxAge(
          userSessionOptions.cookieOptions.maxAge
        );
      }
    } else {
      options.cookieOptions.maxAge = computeCookieMaxAge(options.ttl);
    }
    const sealFromCookies = cookie.parse(
      "credentials" in req ? req.headers.get("cookie") || "" : req.headers.cookie || ""
    )[options.cookieName];
    const session = sealFromCookies === void 0 ? {} : await unsealData2(sealFromCookies, {
      password: passwordsAsMap,
      ttl: options.ttl
    });
    Object.defineProperties(session, {
      save: {
        value: async function save() {
          if ("headersSent" in res && res.headersSent === true) {
            throw new Error(
              `iron-session: Cannot set session cookie: session.save() was called after headers were sent. Make sure to call it before any res.send() or res.end()`
            );
          }
          const seal2 = await sealData2(session, {
            password: passwordsAsMap,
            ttl: options.ttl
          });
          const cookieValue = cookie.serialize(
            options.cookieName,
            seal2,
            options.cookieOptions
          );
          if (cookieValue.length > 4096) {
            throw new Error(
              `iron-session: Cookie length is too big ${cookieValue.length}, browsers will refuse it. Try to remove some data.`
            );
          }
          addToCookies(cookieValue, res);
        }
      },
      destroy: {
        value: function destroy() {
          Object.keys(session).forEach((key) => {
            delete session[key];
          });
          const cookieValue = cookie.serialize(options.cookieName, "", {
            ...options.cookieOptions,
            maxAge: 0
          });
          addToCookies(cookieValue, res);
        }
      }
    });
    return session;
  };
}
function addToCookies(cookieValue, res) {
  var _a;
  if ("headers" in res) {
    res.headers.append("set-cookie", cookieValue);
    return;
  }
  let existingSetCookie = (_a = res.getHeader("set-cookie")) != null ? _a : [];
  if (typeof existingSetCookie === "string") {
    existingSetCookie = [existingSetCookie];
  }
  res.setHeader("set-cookie", [...existingSetCookie, cookieValue]);
}
function computeCookieMaxAge(ttl) {
  return ttl - timestampSkewSec;
}
function createUnsealData(_crypto2) {
  return async (seal2, {
    password,
    ttl = fourteenDaysInSeconds
  }) => {
    const passwordsAsMap = normalizeStringPasswordToMap(password);
    const { sealWithoutVersion, tokenVersion } = parseSeal(seal2);
    try {
      const data = await U(_crypto2, sealWithoutVersion, passwordsAsMap, {
        ...j,
        ttl: ttl * 1e3
      }) || {};
      if (tokenVersion === 2) {
        return data;
      }
      return {
        ...data.persistent
      };
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Expired seal" || error.message === "Bad hmac value" || error.message.startsWith("Cannot find password: ") || error.message === "Incorrect number of sealed components") {
          return {};
        }
      }
      throw error;
    }
  };
}
function parseSeal(seal2) {
  if (seal2[seal2.length - 2] === versionDelimiter) {
    const [sealWithoutVersion, tokenVersionAsString] = seal2.split(versionDelimiter);
    return {
      sealWithoutVersion,
      tokenVersion: parseInt(tokenVersionAsString, 10)
    };
  }
  return { sealWithoutVersion: seal2, tokenVersion: null };
}
function createSealData(_crypto2) {
  return async (data, {
    password,
    ttl = fourteenDaysInSeconds
  }) => {
    const passwordsAsMap = normalizeStringPasswordToMap(password);
    const mostRecentPasswordId = Math.max(
      ...Object.keys(passwordsAsMap).map((id) => parseInt(id, 10))
    );
    const passwordForSeal = {
      id: mostRecentPasswordId.toString(),
      secret: passwordsAsMap[mostRecentPasswordId]
    };
    const seal2 = await F(_crypto2, data, passwordForSeal, {
      ...j,
      ttl: ttl * 1e3
    });
    return `${seal2}${versionDelimiter}${currentMajorVersion}`;
  };
}
function normalizeStringPasswordToMap(password) {
  return typeof password === "string" ? { 1: password } : password;
}

// src/index.ts

var _crypto = new webcrypto_.Crypto();
var unsealData = createUnsealData(_crypto);
var sealData = createSealData(_crypto);
var dist_getIronSession = createGetIronSession(
  _crypto,
  unsealData,
  sealData
);

//# sourceMappingURL=index.mjs.map
;// CONCATENATED MODULE: ./node_modules/iron-session/next/dist/index.mjs
// next/index.ts


// src/getPropertyDescriptorForReqSession.ts
function getPropertyDescriptorForReqSession(session) {
  return {
    enumerable: true,
    get() {
      return session;
    },
    set(value) {
      const keys = Object.keys(value);
      const currentKeys = Object.keys(session);
      currentKeys.forEach((key) => {
        if (!keys.includes(key)) {
          delete session[key];
        }
      });
      keys.forEach((key) => {
        session[key] = value[key];
      });
    }
  };
}

// next/index.ts
function withIronSessionApiRoute(handler, options) {
  return async function nextApiHandlerWrappedWithIronSession(req, res) {
    let sessionOptions;
    if (options instanceof Function) {
      sessionOptions = await options(req, res);
    } else {
      sessionOptions = options;
    }
    const session = await getIronSession(req, res, sessionOptions);
    Object.defineProperty(
      req,
      "session",
      getPropertyDescriptorForReqSession(session)
    );
    return handler(req, res);
  };
}
function withIronSessionSsr(handler, options) {
  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(context) {
    let sessionOptions;
    if (options instanceof Function) {
      sessionOptions = await options(context.req, context.res);
    } else {
      sessionOptions = options;
    }
    const session = await dist_getIronSession(
      context.req,
      context.res,
      sessionOptions
    );
    Object.defineProperty(
      context.req,
      "session",
      getPropertyDescriptorForReqSession(session)
    );
    return handler(context);
  };
}

//# sourceMappingURL=index.mjs.map

/***/ })

};
;