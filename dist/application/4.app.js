(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/lie/lib/index.js":
/*!***************************************!*\
  !*** ./node_modules/lie/lib/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\nvar immediate = __webpack_require__(/*! immediate */ \"./node_modules/immediate/lib/browser.js\");\n\n/* istanbul ignore next */\nfunction INTERNAL() {}\n\nvar handlers = {};\n\nvar REJECTED = ['REJECTED'];\nvar FULFILLED = ['FULFILLED'];\nvar PENDING = ['PENDING'];\n/* istanbul ignore else */\nif (!process.browser) {\n  // in which we actually take advantage of JS scoping\n  var UNHANDLED = ['UNHANDLED'];\n}\n\nmodule.exports = Promise;\n\nfunction Promise(resolver) {\n  if (typeof resolver !== 'function') {\n    throw new TypeError('resolver must be a function');\n  }\n  this.state = PENDING;\n  this.queue = [];\n  this.outcome = void 0;\n  /* istanbul ignore else */\n  if (!process.browser) {\n    this.handled = UNHANDLED;\n  }\n  if (resolver !== INTERNAL) {\n    safelyResolveThenable(this, resolver);\n  }\n}\n\nPromise.prototype.catch = function (onRejected) {\n  return this.then(null, onRejected);\n};\nPromise.prototype.then = function (onFulfilled, onRejected) {\n  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||\n    typeof onRejected !== 'function' && this.state === REJECTED) {\n    return this;\n  }\n  var promise = new this.constructor(INTERNAL);\n  /* istanbul ignore else */\n  if (!process.browser) {\n    if (this.handled === UNHANDLED) {\n      this.handled = null;\n    }\n  }\n  if (this.state !== PENDING) {\n    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;\n    unwrap(promise, resolver, this.outcome);\n  } else {\n    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));\n  }\n\n  return promise;\n};\nfunction QueueItem(promise, onFulfilled, onRejected) {\n  this.promise = promise;\n  if (typeof onFulfilled === 'function') {\n    this.onFulfilled = onFulfilled;\n    this.callFulfilled = this.otherCallFulfilled;\n  }\n  if (typeof onRejected === 'function') {\n    this.onRejected = onRejected;\n    this.callRejected = this.otherCallRejected;\n  }\n}\nQueueItem.prototype.callFulfilled = function (value) {\n  handlers.resolve(this.promise, value);\n};\nQueueItem.prototype.otherCallFulfilled = function (value) {\n  unwrap(this.promise, this.onFulfilled, value);\n};\nQueueItem.prototype.callRejected = function (value) {\n  handlers.reject(this.promise, value);\n};\nQueueItem.prototype.otherCallRejected = function (value) {\n  unwrap(this.promise, this.onRejected, value);\n};\n\nfunction unwrap(promise, func, value) {\n  immediate(function () {\n    var returnValue;\n    try {\n      returnValue = func(value);\n    } catch (e) {\n      return handlers.reject(promise, e);\n    }\n    if (returnValue === promise) {\n      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));\n    } else {\n      handlers.resolve(promise, returnValue);\n    }\n  });\n}\n\nhandlers.resolve = function (self, value) {\n  var result = tryCatch(getThen, value);\n  if (result.status === 'error') {\n    return handlers.reject(self, result.value);\n  }\n  var thenable = result.value;\n\n  if (thenable) {\n    safelyResolveThenable(self, thenable);\n  } else {\n    self.state = FULFILLED;\n    self.outcome = value;\n    var i = -1;\n    var len = self.queue.length;\n    while (++i < len) {\n      self.queue[i].callFulfilled(value);\n    }\n  }\n  return self;\n};\nhandlers.reject = function (self, error) {\n  self.state = REJECTED;\n  self.outcome = error;\n  /* istanbul ignore else */\n  if (!process.browser) {\n    if (self.handled === UNHANDLED) {\n      immediate(function () {\n        if (self.handled === UNHANDLED) {\n          process.emit('unhandledRejection', error, self);\n        }\n      });\n    }\n  }\n  var i = -1;\n  var len = self.queue.length;\n  while (++i < len) {\n    self.queue[i].callRejected(error);\n  }\n  return self;\n};\n\nfunction getThen(obj) {\n  // Make sure we only access the accessor once as required by the spec\n  var then = obj && obj.then;\n  if (obj && typeof obj === 'object' && typeof then === 'function') {\n    return function appyThen() {\n      then.apply(obj, arguments);\n    };\n  }\n}\n\nfunction safelyResolveThenable(self, thenable) {\n  // Either fulfill, reject or reject with error\n  var called = false;\n  function onError(value) {\n    if (called) {\n      return;\n    }\n    called = true;\n    handlers.reject(self, value);\n  }\n\n  function onSuccess(value) {\n    if (called) {\n      return;\n    }\n    called = true;\n    handlers.resolve(self, value);\n  }\n\n  function tryToUnwrap() {\n    thenable(onSuccess, onError);\n  }\n\n  var result = tryCatch(tryToUnwrap);\n  if (result.status === 'error') {\n    onError(result.value);\n  }\n}\n\nfunction tryCatch(func, value) {\n  var out = {};\n  try {\n    out.value = func(value);\n    out.status = 'success';\n  } catch (e) {\n    out.status = 'error';\n    out.value = e;\n  }\n  return out;\n}\n\nPromise.resolve = resolve;\nfunction resolve(value) {\n  if (value instanceof this) {\n    return value;\n  }\n  return handlers.resolve(new this(INTERNAL), value);\n}\n\nPromise.reject = reject;\nfunction reject(reason) {\n  var promise = new this(INTERNAL);\n  return handlers.reject(promise, reason);\n}\n\nPromise.all = all;\nfunction all(iterable) {\n  var self = this;\n  if (Object.prototype.toString.call(iterable) !== '[object Array]') {\n    return this.reject(new TypeError('must be an array'));\n  }\n\n  var len = iterable.length;\n  var called = false;\n  if (!len) {\n    return this.resolve([]);\n  }\n\n  var values = new Array(len);\n  var resolved = 0;\n  var i = -1;\n  var promise = new this(INTERNAL);\n\n  while (++i < len) {\n    allResolver(iterable[i], i);\n  }\n  return promise;\n  function allResolver(value, i) {\n    self.resolve(value).then(resolveFromAll, function (error) {\n      if (!called) {\n        called = true;\n        handlers.reject(promise, error);\n      }\n    });\n    function resolveFromAll(outValue) {\n      values[i] = outValue;\n      if (++resolved === len && !called) {\n        called = true;\n        handlers.resolve(promise, values);\n      }\n    }\n  }\n}\n\nPromise.race = race;\nfunction race(iterable) {\n  var self = this;\n  if (Object.prototype.toString.call(iterable) !== '[object Array]') {\n    return this.reject(new TypeError('must be an array'));\n  }\n\n  var len = iterable.length;\n  var called = false;\n  if (!len) {\n    return this.resolve([]);\n  }\n\n  var i = -1;\n  var promise = new this(INTERNAL);\n\n  while (++i < len) {\n    resolver(iterable[i]);\n  }\n  return promise;\n  function resolver(value) {\n    self.resolve(value).then(function (response) {\n      if (!called) {\n        called = true;\n        handlers.resolve(promise, response);\n      }\n    }, function (error) {\n      if (!called) {\n        called = true;\n        handlers.reject(promise, error);\n      }\n    });\n  }\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/lie/lib/index.js?");

/***/ }),

/***/ "./node_modules/pouchdb-extend/index.js":
/*!**********************************************!*\
  !*** ./node_modules/pouchdb-extend/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Extends method\n// (taken from http://code.jquery.com/jquery-1.9.0.js)\n// Populate the class2type map\nvar class2type = {};\n\nvar types = [\n  \"Boolean\", \"Number\", \"String\", \"Function\", \"Array\",\n  \"Date\", \"RegExp\", \"Object\", \"Error\"\n];\nfor (var i = 0; i < types.length; i++) {\n  var typename = types[i];\n  class2type[\"[object \" + typename + \"]\"] = typename.toLowerCase();\n}\n\nvar core_toString = class2type.toString;\nvar core_hasOwn = class2type.hasOwnProperty;\n\nfunction type(obj) {\n  if (obj === null) {\n    return String(obj);\n  }\n  return typeof obj === \"object\" || typeof obj === \"function\" ?\n    class2type[core_toString.call(obj)] || \"object\" :\n    typeof obj;\n}\n\nfunction isWindow(obj) {\n  return obj !== null && obj === obj.window;\n}\n\nfunction isPlainObject(obj) {\n  // Must be an Object.\n  // Because of IE, we also have to check the presence of\n  // the constructor property.\n  // Make sure that DOM nodes and window objects don't pass through, as well\n  if (!obj || type(obj) !== \"object\" || obj.nodeType || isWindow(obj)) {\n    return false;\n  }\n\n  try {\n    // Not own constructor property must be Object\n    if (obj.constructor &&\n      !core_hasOwn.call(obj, \"constructor\") &&\n      !core_hasOwn.call(obj.constructor.prototype, \"isPrototypeOf\")) {\n      return false;\n    }\n  } catch ( e ) {\n    // IE8,9 Will throw exceptions on certain host objects #9897\n    return false;\n  }\n\n  // Own properties are enumerated firstly, so to speed up,\n  // if last one is own, then all properties are own.\n  var key;\n  for (key in obj) {}\n\n  return key === undefined || core_hasOwn.call(obj, key);\n}\n\n\nfunction isFunction(obj) {\n  return type(obj) === \"function\";\n}\n\nvar isArray = Array.isArray || function (obj) {\n  return type(obj) === \"array\";\n};\n\nfunction extend() {\n  // originally extend() was recursive, but this ended up giving us\n  // \"call stack exceeded\", so it's been unrolled to use a literal stack\n  // (see https://github.com/pouchdb/pouchdb/issues/2543)\n  var stack = [];\n  var i = -1;\n  var len = arguments.length;\n  var args = new Array(len);\n  while (++i < len) {\n    args[i] = arguments[i];\n  }\n  var container = {};\n  stack.push({args: args, result: {container: container, key: 'key'}});\n  var next;\n  while ((next = stack.pop())) {\n    extendInner(stack, next.args, next.result);\n  }\n  return container.key;\n}\n\nfunction extendInner(stack, args, result) {\n  var options, name, src, copy, copyIsArray, clone,\n    target = args[0] || {},\n    i = 1,\n    length = args.length,\n    deep = false,\n    numericStringRegex = /\\d+/,\n    optionsIsArray;\n\n  // Handle a deep copy situation\n  if (typeof target === \"boolean\") {\n    deep = target;\n    target = args[1] || {};\n    // skip the boolean and the target\n    i = 2;\n  }\n\n  // Handle case when target is a string or something (possible in deep copy)\n  if (typeof target !== \"object\" && !isFunction(target)) {\n    target = {};\n  }\n\n  // extend jQuery itself if only one argument is passed\n  if (length === i) {\n    /* jshint validthis: true */\n    target = this;\n    --i;\n  }\n\n  for (; i < length; i++) {\n    // Only deal with non-null/undefined values\n    if ((options = args[i]) != null) {\n      optionsIsArray = isArray(options);\n      // Extend the base object\n      for (name in options) {\n        //if (options.hasOwnProperty(name)) {\n        if (!(name in Object.prototype)) {\n          if (optionsIsArray && !numericStringRegex.test(name)) {\n            continue;\n          }\n\n          src = target[name];\n          copy = options[name];\n\n          // Prevent never-ending loop\n          if (target === copy) {\n            continue;\n          }\n\n          // Recurse if we're merging plain objects or arrays\n          if (deep && copy && (isPlainObject(copy) ||\n              (copyIsArray = isArray(copy)))) {\n            if (copyIsArray) {\n              copyIsArray = false;\n              clone = src && isArray(src) ? src : [];\n\n            } else {\n              clone = src && isPlainObject(src) ? src : {};\n            }\n\n            // Never move original objects, clone them\n            stack.push({\n              args: [deep, clone, copy],\n              result: {\n                container: target,\n                key: name\n              }\n            });\n\n          // Don't bring in undefined values\n          } else if (copy !== undefined) {\n            if (!(isArray(options) && isFunction(copy))) {\n              target[name] = copy;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  // \"Return\" the modified object by setting the key\n  // on the given container\n  result.container[result.key] = target;\n}\n\n\nmodule.exports = extend;\n\n\n\n\n//# sourceURL=webpack:///./node_modules/pouchdb-extend/index.js?");

/***/ }),

/***/ "./node_modules/promise-nodify/index.js":
/*!**********************************************!*\
  !*** ./node_modules/promise-nodify/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\n  Copyright 2013-2014, Marten de Vries\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n  http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n*/\n\n\n\nmodule.exports = function nodify(promise, callback) {\n  if (typeof callback === \"function\") {\n    promise.then(function (resp) {\n      callback(null, resp);\n    }, function (err) {\n      callback(err, null);\n    });\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/promise-nodify/index.js?");

/***/ })

}]);