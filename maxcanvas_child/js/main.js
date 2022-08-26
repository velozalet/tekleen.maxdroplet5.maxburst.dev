!(function (modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = (installedModules[moduleId] = { i: moduleId, l: !1, exports: {} });
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), (module.l = !0), module.exports;
    }
    (__webpack_require__.m = modules),
        (__webpack_require__.c = installedModules),
        (__webpack_require__.d = function (exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, { enumerable: !0, get: getter });
        }),
        (__webpack_require__.r = function (exports) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(exports, "__esModule", { value: !0 });
        }),
        (__webpack_require__.t = function (value, mode) {
            if ((1 & mode && (value = __webpack_require__(value)), 8 & mode)) return value;
            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
            var ns = Object.create(null);
            if ((__webpack_require__.r(ns), Object.defineProperty(ns, "default", { enumerable: !0, value: value }), 2 & mode && "string" != typeof value))
                for (var key in value)
                    __webpack_require__.d(
                        ns,
                        key,
                        function (key) {
                            return value[key];
                        }.bind(null, key)
                    );
            return ns;
        }),
        (__webpack_require__.n = function (module) {
            var getter =
                module && module.__esModule
                    ? function () {
                          return module.default;
                      }
                    : function () {
                          return module;
                      };
            return __webpack_require__.d(getter, "a", getter), getter;
        }),
        (__webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }),
        (__webpack_require__.p = "./assets/js/"),
        __webpack_require__((__webpack_require__.s = 2));
})([
    function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        !(function (global, factory) {
            "use strict";
            "object" == typeof module.exports
                ? (module.exports = global.document
                      ? factory(global, !0)
                      : function (w) {
                            if (!w.document) throw new Error("jQuery requires a window with a document");
                            return factory(w);
                        })
                : factory(global);
        })("undefined" != typeof window ? window : this, function (window, noGlobal) {
            "use strict";
            var arr = [],
                getProto = Object.getPrototypeOf,
                slice = arr.slice,
                flat = arr.flat
                    ? function (array) {
                          return arr.flat.call(array);
                      }
                    : function (array) {
                          return arr.concat.apply([], array);
                      },
                push = arr.push,
                indexOf = arr.indexOf,
                class2type = {},
                toString = class2type.toString,
                hasOwn = class2type.hasOwnProperty,
                fnToString = hasOwn.toString,
                ObjectFunctionString = fnToString.call(Object),
                support = {},
                isFunction = function (obj) {
                    return "function" == typeof obj && "number" != typeof obj.nodeType && "function" != typeof obj.item;
                },
                isWindow = function (obj) {
                    return null != obj && obj === obj.window;
                },
                document = window.document,
                preservedScriptAttributes = { type: !0, src: !0, nonce: !0, noModule: !0 };
            function DOMEval(code, node, doc) {
                var i,
                    val,
                    script = (doc = doc || document).createElement("script");
                if (((script.text = code), node)) for (i in preservedScriptAttributes) (val = node[i] || (node.getAttribute && node.getAttribute(i))) && script.setAttribute(i, val);
                doc.head.appendChild(script).parentNode.removeChild(script);
            }
            function toType(obj) {
                return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj;
            }
            var jQuery = function (selector, context) {
                return new jQuery.fn.init(selector, context);
            };
            function isArrayLike(obj) {
                var length = !!obj && "length" in obj && obj.length,
                    type = toType(obj);
                return !isFunction(obj) && !isWindow(obj) && ("array" === type || 0 === length || ("number" == typeof length && length > 0 && length - 1 in obj));
            }
            (jQuery.fn = jQuery.prototype = {
                jquery: "3.6.0",
                constructor: jQuery,
                length: 0,
                toArray: function () {
                    return slice.call(this);
                },
                get: function (num) {
                    return null == num ? slice.call(this) : num < 0 ? this[num + this.length] : this[num];
                },
                pushStack: function (elems) {
                    var ret = jQuery.merge(this.constructor(), elems);
                    return (ret.prevObject = this), ret;
                },
                each: function (callback) {
                    return jQuery.each(this, callback);
                },
                map: function (callback) {
                    return this.pushStack(
                        jQuery.map(this, function (elem, i) {
                            return callback.call(elem, i, elem);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(slice.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                even: function () {
                    return this.pushStack(
                        jQuery.grep(this, function (_elem, i) {
                            return (i + 1) % 2;
                        })
                    );
                },
                odd: function () {
                    return this.pushStack(
                        jQuery.grep(this, function (_elem, i) {
                            return i % 2;
                        })
                    );
                },
                eq: function (i) {
                    var len = this.length,
                        j = +i + (i < 0 ? len : 0);
                    return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor();
                },
                push: push,
                sort: arr.sort,
                splice: arr.splice,
            }),
                (jQuery.extend = jQuery.fn.extend = function () {
                    var options,
                        name,
                        src,
                        copy,
                        copyIsArray,
                        clone,
                        target = arguments[0] || {},
                        i = 1,
                        length = arguments.length,
                        deep = !1;
                    for ("boolean" == typeof target && ((deep = target), (target = arguments[i] || {}), i++), "object" == typeof target || isFunction(target) || (target = {}), i === length && ((target = this), i--); i < length; i++)
                        if (null != (options = arguments[i]))
                            for (name in options)
                                (copy = options[name]),
                                    "__proto__" !== name &&
                                        target !== copy &&
                                        (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))
                                            ? ((src = target[name]),
                                              (clone = copyIsArray && !Array.isArray(src) ? [] : copyIsArray || jQuery.isPlainObject(src) ? src : {}),
                                              (copyIsArray = !1),
                                              (target[name] = jQuery.extend(deep, clone, copy)))
                                            : void 0 !== copy && (target[name] = copy));
                    return target;
                }),
                jQuery.extend({
                    expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (msg) {
                        throw new Error(msg);
                    },
                    noop: function () {},
                    isPlainObject: function (obj) {
                        var proto, Ctor;
                        return (
                            !(!obj || "[object Object]" !== toString.call(obj)) &&
                            (!(proto = getProto(obj)) || ("function" == typeof (Ctor = hasOwn.call(proto, "constructor") && proto.constructor) && fnToString.call(Ctor) === ObjectFunctionString))
                        );
                    },
                    isEmptyObject: function (obj) {
                        var name;
                        for (name in obj) return !1;
                        return !0;
                    },
                    globalEval: function (code, options, doc) {
                        DOMEval(code, { nonce: options && options.nonce }, doc);
                    },
                    each: function (obj, callback) {
                        var length,
                            i = 0;
                        if (isArrayLike(obj)) for (length = obj.length; i < length && !1 !== callback.call(obj[i], i, obj[i]); i++);
                        else for (i in obj) if (!1 === callback.call(obj[i], i, obj[i])) break;
                        return obj;
                    },
                    makeArray: function (arr, results) {
                        var ret = results || [];
                        return null != arr && (isArrayLike(Object(arr)) ? jQuery.merge(ret, "string" == typeof arr ? [arr] : arr) : push.call(ret, arr)), ret;
                    },
                    inArray: function (elem, arr, i) {
                        return null == arr ? -1 : indexOf.call(arr, elem, i);
                    },
                    merge: function (first, second) {
                        for (var len = +second.length, j = 0, i = first.length; j < len; j++) first[i++] = second[j];
                        return (first.length = i), first;
                    },
                    grep: function (elems, callback, invert) {
                        for (var matches = [], i = 0, length = elems.length, callbackExpect = !invert; i < length; i++) !callback(elems[i], i) !== callbackExpect && matches.push(elems[i]);
                        return matches;
                    },
                    map: function (elems, callback, arg) {
                        var length,
                            value,
                            i = 0,
                            ret = [];
                        if (isArrayLike(elems)) for (length = elems.length; i < length; i++) null != (value = callback(elems[i], i, arg)) && ret.push(value);
                        else for (i in elems) null != (value = callback(elems[i], i, arg)) && ret.push(value);
                        return flat(ret);
                    },
                    guid: 1,
                    support: support,
                }),
                "function" == typeof Symbol && (jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]),
                jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
                    class2type["[object " + name + "]"] = name.toLowerCase();
                });
            var Sizzle = (function (window) {
                var i,
                    support,
                    Expr,
                    getText,
                    isXML,
                    tokenize,
                    compile,
                    select,
                    outermostContext,
                    sortInput,
                    hasDuplicate,
                    setDocument,
                    document,
                    docElem,
                    documentIsHTML,
                    rbuggyQSA,
                    rbuggyMatches,
                    matches,
                    contains,
                    expando = "sizzle" + 1 * new Date(),
                    preferredDoc = window.document,
                    dirruns = 0,
                    done = 0,
                    classCache = createCache(),
                    tokenCache = createCache(),
                    compilerCache = createCache(),
                    nonnativeSelectorCache = createCache(),
                    sortOrder = function (a, b) {
                        return a === b && (hasDuplicate = !0), 0;
                    },
                    hasOwn = {}.hasOwnProperty,
                    arr = [],
                    pop = arr.pop,
                    pushNative = arr.push,
                    push = arr.push,
                    slice = arr.slice,
                    indexOf = function (list, elem) {
                        for (var i = 0, len = list.length; i < len; i++) if (list[i] === elem) return i;
                        return -1;
                    },
                    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    whitespace = "[\\x20\\t\\r\\n\\f]",
                    identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
                    pseudos = ":(" + identifier + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)",
                    rwhitespace = new RegExp(whitespace + "+", "g"),
                    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
                    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                    rdescend = new RegExp(whitespace + "|>"),
                    rpseudo = new RegExp(pseudos),
                    ridentifier = new RegExp("^" + identifier + "$"),
                    matchExpr = {
                        ID: new RegExp("^#(" + identifier + ")"),
                        CLASS: new RegExp("^\\.(" + identifier + ")"),
                        TAG: new RegExp("^(" + identifier + "|[*])"),
                        ATTR: new RegExp("^" + attributes),
                        PSEUDO: new RegExp("^" + pseudos),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + booleans + ")$", "i"),
                        needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i"),
                    },
                    rhtml = /HTML$/i,
                    rinputs = /^(?:input|select|textarea|button)$/i,
                    rheader = /^h\d$/i,
                    rnative = /^[^{]+\{\s*\[native \w/,
                    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    rsibling = /[+~]/,
                    runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"),
                    funescape = function (escape, nonHex) {
                        var high = "0x" + escape.slice(1) - 65536;
                        return nonHex || (high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode((high >> 10) | 55296, (1023 & high) | 56320));
                    },
                    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    fcssescape = function (ch, asCodePoint) {
                        return asCodePoint ? ("\0" === ch ? "�" : ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ") : "\\" + ch;
                    },
                    unloadHandler = function () {
                        setDocument();
                    },
                    inDisabledFieldset = addCombinator(
                        function (elem) {
                            return !0 === elem.disabled && "fieldset" === elem.nodeName.toLowerCase();
                        },
                        { dir: "parentNode", next: "legend" }
                    );
                try {
                    push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes), arr[preferredDoc.childNodes.length].nodeType;
                } catch (e) {
                    push = {
                        apply: arr.length
                            ? function (target, els) {
                                  pushNative.apply(target, slice.call(els));
                              }
                            : function (target, els) {
                                  for (var j = target.length, i = 0; (target[j++] = els[i++]); );
                                  target.length = j - 1;
                              },
                    };
                }
                function Sizzle(selector, context, results, seed) {
                    var m,
                        i,
                        elem,
                        nid,
                        match,
                        groups,
                        newSelector,
                        newContext = context && context.ownerDocument,
                        nodeType = context ? context.nodeType : 9;
                    if (((results = results || []), "string" != typeof selector || !selector || (1 !== nodeType && 9 !== nodeType && 11 !== nodeType))) return results;
                    if (!seed && (setDocument(context), (context = context || document), documentIsHTML)) {
                        if (11 !== nodeType && (match = rquickExpr.exec(selector)))
                            if ((m = match[1])) {
                                if (9 === nodeType) {
                                    if (!(elem = context.getElementById(m))) return results;
                                    if (elem.id === m) return results.push(elem), results;
                                } else if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) return results.push(elem), results;
                            } else {
                                if (match[2]) return push.apply(results, context.getElementsByTagName(selector)), results;
                                if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) return push.apply(results, context.getElementsByClassName(m)), results;
                            }
                        if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (1 !== nodeType || "object" !== context.nodeName.toLowerCase())) {
                            if (((newSelector = selector), (newContext = context), 1 === nodeType && (rdescend.test(selector) || rcombinators.test(selector)))) {
                                for (
                                    ((newContext = (rsibling.test(selector) && testContext(context.parentNode)) || context) === context && support.scope) ||
                                        ((nid = context.getAttribute("id")) ? (nid = nid.replace(rcssescape, fcssescape)) : context.setAttribute("id", (nid = expando))),
                                        i = (groups = tokenize(selector)).length;
                                    i--;

                                )
                                    groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                                newSelector = groups.join(",");
                            }
                            try {
                                return push.apply(results, newContext.querySelectorAll(newSelector)), results;
                            } catch (qsaError) {
                                nonnativeSelectorCache(selector, !0);
                            } finally {
                                nid === expando && context.removeAttribute("id");
                            }
                        }
                    }
                    return select(selector.replace(rtrim, "$1"), context, results, seed);
                }
                function createCache() {
                    var keys = [];
                    return function cache(key, value) {
                        return keys.push(key + " ") > Expr.cacheLength && delete cache[keys.shift()], (cache[key + " "] = value);
                    };
                }
                function markFunction(fn) {
                    return (fn[expando] = !0), fn;
                }
                function assert(fn) {
                    var el = document.createElement("fieldset");
                    try {
                        return !!fn(el);
                    } catch (e) {
                        return !1;
                    } finally {
                        el.parentNode && el.parentNode.removeChild(el), (el = null);
                    }
                }
                function addHandle(attrs, handler) {
                    for (var arr = attrs.split("|"), i = arr.length; i--; ) Expr.attrHandle[arr[i]] = handler;
                }
                function siblingCheck(a, b) {
                    var cur = b && a,
                        diff = cur && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
                    if (diff) return diff;
                    if (cur) for (; (cur = cur.nextSibling); ) if (cur === b) return -1;
                    return a ? 1 : -1;
                }
                function createInputPseudo(type) {
                    return function (elem) {
                        return "input" === elem.nodeName.toLowerCase() && elem.type === type;
                    };
                }
                function createButtonPseudo(type) {
                    return function (elem) {
                        var name = elem.nodeName.toLowerCase();
                        return ("input" === name || "button" === name) && elem.type === type;
                    };
                }
                function createDisabledPseudo(disabled) {
                    return function (elem) {
                        return "form" in elem
                            ? elem.parentNode && !1 === elem.disabled
                                ? "label" in elem
                                    ? "label" in elem.parentNode
                                        ? elem.parentNode.disabled === disabled
                                        : elem.disabled === disabled
                                    : elem.isDisabled === disabled || (elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled)
                                : elem.disabled === disabled
                            : "label" in elem && elem.disabled === disabled;
                    };
                }
                function createPositionalPseudo(fn) {
                    return markFunction(function (argument) {
                        return (
                            (argument = +argument),
                            markFunction(function (seed, matches) {
                                for (var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length; i--; ) seed[(j = matchIndexes[i])] && (seed[j] = !(matches[j] = seed[j]));
                            })
                        );
                    });
                }
                function testContext(context) {
                    return context && void 0 !== context.getElementsByTagName && context;
                }
                for (i in ((support = Sizzle.support = {}),
                (isXML = Sizzle.isXML = function (elem) {
                    var namespace = elem && elem.namespaceURI,
                        docElem = elem && (elem.ownerDocument || elem).documentElement;
                    return !rhtml.test(namespace || (docElem && docElem.nodeName) || "HTML");
                }),
                (setDocument = Sizzle.setDocument = function (node) {
                    var hasCompare,
                        subWindow,
                        doc = node ? node.ownerDocument || node : preferredDoc;
                    return doc != document && 9 === doc.nodeType && doc.documentElement
                        ? ((docElem = (document = doc).documentElement),
                          (documentIsHTML = !isXML(document)),
                          preferredDoc != document &&
                              (subWindow = document.defaultView) &&
                              subWindow.top !== subWindow &&
                              (subWindow.addEventListener ? subWindow.addEventListener("unload", unloadHandler, !1) : subWindow.attachEvent && subWindow.attachEvent("onunload", unloadHandler)),
                          (support.scope = assert(function (el) {
                              return docElem.appendChild(el).appendChild(document.createElement("div")), void 0 !== el.querySelectorAll && !el.querySelectorAll(":scope fieldset div").length;
                          })),
                          (support.attributes = assert(function (el) {
                              return (el.className = "i"), !el.getAttribute("className");
                          })),
                          (support.getElementsByTagName = assert(function (el) {
                              return el.appendChild(document.createComment("")), !el.getElementsByTagName("*").length;
                          })),
                          (support.getElementsByClassName = rnative.test(document.getElementsByClassName)),
                          (support.getById = assert(function (el) {
                              return (docElem.appendChild(el).id = expando), !document.getElementsByName || !document.getElementsByName(expando).length;
                          })),
                          support.getById
                              ? ((Expr.filter.ID = function (id) {
                                    var attrId = id.replace(runescape, funescape);
                                    return function (elem) {
                                        return elem.getAttribute("id") === attrId;
                                    };
                                }),
                                (Expr.find.ID = function (id, context) {
                                    if (void 0 !== context.getElementById && documentIsHTML) {
                                        var elem = context.getElementById(id);
                                        return elem ? [elem] : [];
                                    }
                                }))
                              : ((Expr.filter.ID = function (id) {
                                    var attrId = id.replace(runescape, funescape);
                                    return function (elem) {
                                        var node = void 0 !== elem.getAttributeNode && elem.getAttributeNode("id");
                                        return node && node.value === attrId;
                                    };
                                }),
                                (Expr.find.ID = function (id, context) {
                                    if (void 0 !== context.getElementById && documentIsHTML) {
                                        var node,
                                            i,
                                            elems,
                                            elem = context.getElementById(id);
                                        if (elem) {
                                            if ((node = elem.getAttributeNode("id")) && node.value === id) return [elem];
                                            for (elems = context.getElementsByName(id), i = 0; (elem = elems[i++]); ) if ((node = elem.getAttributeNode("id")) && node.value === id) return [elem];
                                        }
                                        return [];
                                    }
                                })),
                          (Expr.find.TAG = support.getElementsByTagName
                              ? function (tag, context) {
                                    return void 0 !== context.getElementsByTagName ? context.getElementsByTagName(tag) : support.qsa ? context.querySelectorAll(tag) : void 0;
                                }
                              : function (tag, context) {
                                    var elem,
                                        tmp = [],
                                        i = 0,
                                        results = context.getElementsByTagName(tag);
                                    if ("*" === tag) {
                                        for (; (elem = results[i++]); ) 1 === elem.nodeType && tmp.push(elem);
                                        return tmp;
                                    }
                                    return results;
                                }),
                          (Expr.find.CLASS =
                              support.getElementsByClassName &&
                              function (className, context) {
                                  if (void 0 !== context.getElementsByClassName && documentIsHTML) return context.getElementsByClassName(className);
                              }),
                          (rbuggyMatches = []),
                          (rbuggyQSA = []),
                          (support.qsa = rnative.test(document.querySelectorAll)) &&
                              (assert(function (el) {
                                  var input;
                                  (docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                      el.querySelectorAll("[msallowcapture^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"),
                                      el.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"),
                                      el.querySelectorAll("[id~=" + expando + "-]").length || rbuggyQSA.push("~="),
                                      (input = document.createElement("input")).setAttribute("name", ""),
                                      el.appendChild(input),
                                      el.querySelectorAll("[name='']").length || rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")"),
                                      el.querySelectorAll(":checked").length || rbuggyQSA.push(":checked"),
                                      el.querySelectorAll("a#" + expando + "+*").length || rbuggyQSA.push(".#.+[+~]"),
                                      el.querySelectorAll("\\\f"),
                                      rbuggyQSA.push("[\\r\\n\\f]");
                              }),
                              assert(function (el) {
                                  el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                  var input = document.createElement("input");
                                  input.setAttribute("type", "hidden"),
                                      el.appendChild(input).setAttribute("name", "D"),
                                      el.querySelectorAll("[name=d]").length && rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="),
                                      2 !== el.querySelectorAll(":enabled").length && rbuggyQSA.push(":enabled", ":disabled"),
                                      (docElem.appendChild(el).disabled = !0),
                                      2 !== el.querySelectorAll(":disabled").length && rbuggyQSA.push(":enabled", ":disabled"),
                                      el.querySelectorAll("*,:x"),
                                      rbuggyQSA.push(",.*:");
                              })),
                          (support.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector))) &&
                              assert(function (el) {
                                  (support.disconnectedMatch = matches.call(el, "*")), matches.call(el, "[s!='']:x"), rbuggyMatches.push("!=", pseudos);
                              }),
                          (rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"))),
                          (rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"))),
                          (hasCompare = rnative.test(docElem.compareDocumentPosition)),
                          (contains =
                              hasCompare || rnative.test(docElem.contains)
                                  ? function (a, b) {
                                        var adown = 9 === a.nodeType ? a.documentElement : a,
                                            bup = b && b.parentNode;
                                        return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)));
                                    }
                                  : function (a, b) {
                                        if (b) for (; (b = b.parentNode); ) if (b === a) return !0;
                                        return !1;
                                    }),
                          (sortOrder = hasCompare
                              ? function (a, b) {
                                    if (a === b) return (hasDuplicate = !0), 0;
                                    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                    return (
                                        compare ||
                                        (1 & (compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || (!support.sortDetached && b.compareDocumentPosition(a) === compare)
                                            ? a == document || (a.ownerDocument == preferredDoc && contains(preferredDoc, a))
                                                ? -1
                                                : b == document || (b.ownerDocument == preferredDoc && contains(preferredDoc, b))
                                                ? 1
                                                : sortInput
                                                ? indexOf(sortInput, a) - indexOf(sortInput, b)
                                                : 0
                                            : 4 & compare
                                            ? -1
                                            : 1)
                                    );
                                }
                              : function (a, b) {
                                    if (a === b) return (hasDuplicate = !0), 0;
                                    var cur,
                                        i = 0,
                                        aup = a.parentNode,
                                        bup = b.parentNode,
                                        ap = [a],
                                        bp = [b];
                                    if (!aup || !bup) return a == document ? -1 : b == document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                                    if (aup === bup) return siblingCheck(a, b);
                                    for (cur = a; (cur = cur.parentNode); ) ap.unshift(cur);
                                    for (cur = b; (cur = cur.parentNode); ) bp.unshift(cur);
                                    for (; ap[i] === bp[i]; ) i++;
                                    return i ? siblingCheck(ap[i], bp[i]) : ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 : 0;
                                }),
                          document)
                        : document;
                }),
                (Sizzle.matches = function (expr, elements) {
                    return Sizzle(expr, null, null, elements);
                }),
                (Sizzle.matchesSelector = function (elem, expr) {
                    if ((setDocument(elem), support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))))
                        try {
                            var ret = matches.call(elem, expr);
                            if (ret || support.disconnectedMatch || (elem.document && 11 !== elem.document.nodeType)) return ret;
                        } catch (e) {
                            nonnativeSelectorCache(expr, !0);
                        }
                    return Sizzle(expr, document, null, [elem]).length > 0;
                }),
                (Sizzle.contains = function (context, elem) {
                    return (context.ownerDocument || context) != document && setDocument(context), contains(context, elem);
                }),
                (Sizzle.attr = function (elem, name) {
                    (elem.ownerDocument || elem) != document && setDocument(elem);
                    var fn = Expr.attrHandle[name.toLowerCase()],
                        val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
                    return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                }),
                (Sizzle.escape = function (sel) {
                    return (sel + "").replace(rcssescape, fcssescape);
                }),
                (Sizzle.error = function (msg) {
                    throw new Error("Syntax error, unrecognized expression: " + msg);
                }),
                (Sizzle.uniqueSort = function (results) {
                    var elem,
                        duplicates = [],
                        j = 0,
                        i = 0;
                    if (((hasDuplicate = !support.detectDuplicates), (sortInput = !support.sortStable && results.slice(0)), results.sort(sortOrder), hasDuplicate)) {
                        for (; (elem = results[i++]); ) elem === results[i] && (j = duplicates.push(i));
                        for (; j--; ) results.splice(duplicates[j], 1);
                    }
                    return (sortInput = null), results;
                }),
                (getText = Sizzle.getText = function (elem) {
                    var node,
                        ret = "",
                        i = 0,
                        nodeType = elem.nodeType;
                    if (nodeType) {
                        if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
                            if ("string" == typeof elem.textContent) return elem.textContent;
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem);
                        } else if (3 === nodeType || 4 === nodeType) return elem.nodeValue;
                    } else for (; (node = elem[i++]); ) ret += getText(node);
                    return ret;
                }),
                ((Expr = Sizzle.selectors = {
                    cacheLength: 50,
                    createPseudo: markFunction,
                    match: matchExpr,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: {
                        ATTR: function (match) {
                            return (
                                (match[1] = match[1].replace(runescape, funescape)),
                                (match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape)),
                                "~=" === match[2] && (match[3] = " " + match[3] + " "),
                                match.slice(0, 4)
                            );
                        },
                        CHILD: function (match) {
                            return (
                                (match[1] = match[1].toLowerCase()),
                                "nth" === match[1].slice(0, 3)
                                    ? (match[3] || Sizzle.error(match[0]), (match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3]))), (match[5] = +(match[7] + match[8] || "odd" === match[3])))
                                    : match[3] && Sizzle.error(match[0]),
                                match
                            );
                        },
                        PSEUDO: function (match) {
                            var excess,
                                unquoted = !match[6] && match[2];
                            return matchExpr.CHILD.test(match[0])
                                ? null
                                : (match[3]
                                      ? (match[2] = match[4] || match[5] || "")
                                      : unquoted &&
                                        rpseudo.test(unquoted) &&
                                        (excess = tokenize(unquoted, !0)) &&
                                        (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) &&
                                        ((match[0] = match[0].slice(0, excess)), (match[2] = unquoted.slice(0, excess))),
                                  match.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (nodeNameSelector) {
                            var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                            return "*" === nodeNameSelector
                                ? function () {
                                      return !0;
                                  }
                                : function (elem) {
                                      return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                                  };
                        },
                        CLASS: function (className) {
                            var pattern = classCache[className + " "];
                            return (
                                pattern ||
                                ((pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) &&
                                    classCache(className, function (elem) {
                                        return pattern.test(("string" == typeof elem.className && elem.className) || (void 0 !== elem.getAttribute && elem.getAttribute("class")) || "");
                                    }))
                            );
                        },
                        ATTR: function (name, operator, check) {
                            return function (elem) {
                                var result = Sizzle.attr(elem, name);
                                return null == result
                                    ? "!=" === operator
                                    : !operator ||
                                          ((result += ""),
                                          "=" === operator
                                              ? result === check
                                              : "!=" === operator
                                              ? result !== check
                                              : "^=" === operator
                                              ? check && 0 === result.indexOf(check)
                                              : "*=" === operator
                                              ? check && result.indexOf(check) > -1
                                              : "$=" === operator
                                              ? check && result.slice(-check.length) === check
                                              : "~=" === operator
                                              ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1
                                              : "|=" === operator && (result === check || result.slice(0, check.length + 1) === check + "-"));
                            };
                        },
                        CHILD: function (type, what, _argument, first, last) {
                            var simple = "nth" !== type.slice(0, 3),
                                forward = "last" !== type.slice(-4),
                                ofType = "of-type" === what;
                            return 1 === first && 0 === last
                                ? function (elem) {
                                      return !!elem.parentNode;
                                  }
                                : function (elem, _context, xml) {
                                      var cache,
                                          uniqueCache,
                                          outerCache,
                                          node,
                                          nodeIndex,
                                          start,
                                          dir = simple !== forward ? "nextSibling" : "previousSibling",
                                          parent = elem.parentNode,
                                          name = ofType && elem.nodeName.toLowerCase(),
                                          useCache = !xml && !ofType,
                                          diff = !1;
                                      if (parent) {
                                          if (simple) {
                                              for (; dir; ) {
                                                  for (node = elem; (node = node[dir]); ) if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return !1;
                                                  start = dir = "only" === type && !start && "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (((start = [forward ? parent.firstChild : parent.lastChild]), forward && useCache)) {
                                              for (
                                                  diff =
                                                      (nodeIndex =
                                                          (cache = (uniqueCache = (outerCache = (node = parent)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === dirruns &&
                                                          cache[1]) && cache[2],
                                                      node = nodeIndex && parent.childNodes[nodeIndex];
                                                  (node = (++nodeIndex && node && node[dir]) || (diff = nodeIndex = 0) || start.pop());

                                              )
                                                  if (1 === node.nodeType && ++diff && node === elem) {
                                                      uniqueCache[type] = [dirruns, nodeIndex, diff];
                                                      break;
                                                  }
                                          } else if (
                                              (useCache &&
                                                  (diff = nodeIndex =
                                                      (cache = (uniqueCache = (outerCache = (node = elem)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === dirruns && cache[1]),
                                              !1 === diff)
                                          )
                                              for (
                                                  ;
                                                  (node = (++nodeIndex && node && node[dir]) || (diff = nodeIndex = 0) || start.pop()) &&
                                                  ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) ||
                                                      !++diff ||
                                                      (useCache && ((uniqueCache = (outerCache = node[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] = [dirruns, diff]), node !== elem));

                                              );
                                          return (diff -= last) === first || (diff % first == 0 && diff / first >= 0);
                                      }
                                  };
                        },
                        PSEUDO: function (pseudo, argument) {
                            var args,
                                fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                            return fn[expando]
                                ? fn(argument)
                                : fn.length > 1
                                ? ((args = [pseudo, pseudo, "", argument]),
                                  Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())
                                      ? markFunction(function (seed, matches) {
                                            for (var idx, matched = fn(seed, argument), i = matched.length; i--; ) seed[(idx = indexOf(seed, matched[i]))] = !(matches[idx] = matched[i]);
                                        })
                                      : function (elem) {
                                            return fn(elem, 0, args);
                                        })
                                : fn;
                        },
                    },
                    pseudos: {
                        not: markFunction(function (selector) {
                            var input = [],
                                results = [],
                                matcher = compile(selector.replace(rtrim, "$1"));
                            return matcher[expando]
                                ? markFunction(function (seed, matches, _context, xml) {
                                      for (var elem, unmatched = matcher(seed, null, xml, []), i = seed.length; i--; ) (elem = unmatched[i]) && (seed[i] = !(matches[i] = elem));
                                  })
                                : function (elem, _context, xml) {
                                      return (input[0] = elem), matcher(input, null, xml, results), (input[0] = null), !results.pop();
                                  };
                        }),
                        has: markFunction(function (selector) {
                            return function (elem) {
                                return Sizzle(selector, elem).length > 0;
                            };
                        }),
                        contains: markFunction(function (text) {
                            return (
                                (text = text.replace(runescape, funescape)),
                                function (elem) {
                                    return (elem.textContent || getText(elem)).indexOf(text) > -1;
                                }
                            );
                        }),
                        lang: markFunction(function (lang) {
                            return (
                                ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang),
                                (lang = lang.replace(runescape, funescape).toLowerCase()),
                                function (elem) {
                                    var elemLang;
                                    do {
                                        if ((elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) return (elemLang = elemLang.toLowerCase()) === lang || 0 === elemLang.indexOf(lang + "-");
                                    } while ((elem = elem.parentNode) && 1 === elem.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function (elem) {
                            var hash = window.location && window.location.hash;
                            return hash && hash.slice(1) === elem.id;
                        },
                        root: function (elem) {
                            return elem === docElem;
                        },
                        focus: function (elem) {
                            return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                        },
                        enabled: createDisabledPseudo(!1),
                        disabled: createDisabledPseudo(!0),
                        checked: function (elem) {
                            var nodeName = elem.nodeName.toLowerCase();
                            return ("input" === nodeName && !!elem.checked) || ("option" === nodeName && !!elem.selected);
                        },
                        selected: function (elem) {
                            return elem.parentNode && elem.parentNode.selectedIndex, !0 === elem.selected;
                        },
                        empty: function (elem) {
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling) if (elem.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (elem) {
                            return !Expr.pseudos.empty(elem);
                        },
                        header: function (elem) {
                            return rheader.test(elem.nodeName);
                        },
                        input: function (elem) {
                            return rinputs.test(elem.nodeName);
                        },
                        button: function (elem) {
                            var name = elem.nodeName.toLowerCase();
                            return ("input" === name && "button" === elem.type) || "button" === name;
                        },
                        text: function (elem) {
                            var attr;
                            return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (attr = elem.getAttribute("type")) || "text" === attr.toLowerCase());
                        },
                        first: createPositionalPseudo(function () {
                            return [0];
                        }),
                        last: createPositionalPseudo(function (_matchIndexes, length) {
                            return [length - 1];
                        }),
                        eq: createPositionalPseudo(function (_matchIndexes, length, argument) {
                            return [argument < 0 ? argument + length : argument];
                        }),
                        even: createPositionalPseudo(function (matchIndexes, length) {
                            for (var i = 0; i < length; i += 2) matchIndexes.push(i);
                            return matchIndexes;
                        }),
                        odd: createPositionalPseudo(function (matchIndexes, length) {
                            for (var i = 1; i < length; i += 2) matchIndexes.push(i);
                            return matchIndexes;
                        }),
                        lt: createPositionalPseudo(function (matchIndexes, length, argument) {
                            for (var i = argument < 0 ? argument + length : argument > length ? length : argument; --i >= 0; ) matchIndexes.push(i);
                            return matchIndexes;
                        }),
                        gt: createPositionalPseudo(function (matchIndexes, length, argument) {
                            for (var i = argument < 0 ? argument + length : argument; ++i < length; ) matchIndexes.push(i);
                            return matchIndexes;
                        }),
                    },
                }).pseudos.nth = Expr.pseudos.eq),
                { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                    Expr.pseudos[i] = createInputPseudo(i);
                for (i in { submit: !0, reset: !0 }) Expr.pseudos[i] = createButtonPseudo(i);
                function setFilters() {}
                function toSelector(tokens) {
                    for (var i = 0, len = tokens.length, selector = ""; i < len; i++) selector += tokens[i].value;
                    return selector;
                }
                function addCombinator(matcher, combinator, base) {
                    var dir = combinator.dir,
                        skip = combinator.next,
                        key = skip || dir,
                        checkNonElements = base && "parentNode" === key,
                        doneName = done++;
                    return combinator.first
                        ? function (elem, context, xml) {
                              for (; (elem = elem[dir]); ) if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml);
                              return !1;
                          }
                        : function (elem, context, xml) {
                              var oldCache,
                                  uniqueCache,
                                  outerCache,
                                  newCache = [dirruns, doneName];
                              if (xml) {
                                  for (; (elem = elem[dir]); ) if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) return !0;
                              } else
                                  for (; (elem = elem[dir]); )
                                      if (1 === elem.nodeType || checkNonElements)
                                          if (((uniqueCache = (outerCache = elem[expando] || (elem[expando] = {}))[elem.uniqueID] || (outerCache[elem.uniqueID] = {})), skip && skip === elem.nodeName.toLowerCase())) elem = elem[dir] || elem;
                                          else {
                                              if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) return (newCache[2] = oldCache[2]);
                                              if (((uniqueCache[key] = newCache), (newCache[2] = matcher(elem, context, xml)))) return !0;
                                          }
                              return !1;
                          };
                }
                function elementMatcher(matchers) {
                    return matchers.length > 1
                        ? function (elem, context, xml) {
                              for (var i = matchers.length; i--; ) if (!matchers[i](elem, context, xml)) return !1;
                              return !0;
                          }
                        : matchers[0];
                }
                function condense(unmatched, map, filter, context, xml) {
                    for (var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map; i < len; i++) (elem = unmatched[i]) && ((filter && !filter(elem, context, xml)) || (newUnmatched.push(elem), mapped && map.push(i)));
                    return newUnmatched;
                }
                function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                    return (
                        postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)),
                        postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)),
                        markFunction(function (seed, results, context, xml) {
                            var temp,
                                i,
                                elem,
                                preMap = [],
                                postMap = [],
                                preexisting = results.length,
                                elems =
                                    seed ||
                                    (function (selector, contexts, results) {
                                        for (var i = 0, len = contexts.length; i < len; i++) Sizzle(selector, contexts[i], results);
                                        return results;
                                    })(selector || "*", context.nodeType ? [context] : context, []),
                                matcherIn = !preFilter || (!seed && selector) ? elems : condense(elems, preMap, preFilter, context, xml),
                                matcherOut = matcher ? (postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results) : matcherIn;
                            if ((matcher && matcher(matcherIn, matcherOut, context, xml), postFilter))
                                for (temp = condense(matcherOut, postMap), postFilter(temp, [], context, xml), i = temp.length; i--; ) (elem = temp[i]) && (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
                            if (seed) {
                                if (postFinder || preFilter) {
                                    if (postFinder) {
                                        for (temp = [], i = matcherOut.length; i--; ) (elem = matcherOut[i]) && temp.push((matcherIn[i] = elem));
                                        postFinder(null, (matcherOut = []), temp, xml);
                                    }
                                    for (i = matcherOut.length; i--; ) (elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1 && (seed[temp] = !(results[temp] = elem));
                                }
                            } else (matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut)), postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut);
                        })
                    );
                }
                function matcherFromTokens(tokens) {
                    for (
                        var checkContext,
                            matcher,
                            j,
                            len = tokens.length,
                            leadingRelative = Expr.relative[tokens[0].type],
                            implicitRelative = leadingRelative || Expr.relative[" "],
                            i = leadingRelative ? 1 : 0,
                            matchContext = addCombinator(
                                function (elem) {
                                    return elem === checkContext;
                                },
                                implicitRelative,
                                !0
                            ),
                            matchAnyContext = addCombinator(
                                function (elem) {
                                    return indexOf(checkContext, elem) > -1;
                                },
                                implicitRelative,
                                !0
                            ),
                            matchers = [
                                function (elem, context, xml) {
                                    var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                                    return (checkContext = null), ret;
                                },
                            ];
                        i < len;
                        i++
                    )
                        if ((matcher = Expr.relative[tokens[i].type])) matchers = [addCombinator(elementMatcher(matchers), matcher)];
                        else {
                            if ((matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches))[expando]) {
                                for (j = ++i; j < len && !Expr.relative[tokens[j].type]; j++);
                                return setMatcher(
                                    i > 1 && elementMatcher(matchers),
                                    i > 1 && toSelector(tokens.slice(0, i - 1).concat({ value: " " === tokens[i - 2].type ? "*" : "" })).replace(rtrim, "$1"),
                                    matcher,
                                    i < j && matcherFromTokens(tokens.slice(i, j)),
                                    j < len && matcherFromTokens((tokens = tokens.slice(j))),
                                    j < len && toSelector(tokens)
                                );
                            }
                            matchers.push(matcher);
                        }
                    return elementMatcher(matchers);
                }
                return (
                    (setFilters.prototype = Expr.filters = Expr.pseudos),
                    (Expr.setFilters = new setFilters()),
                    (tokenize = Sizzle.tokenize = function (selector, parseOnly) {
                        var matched,
                            match,
                            tokens,
                            type,
                            soFar,
                            groups,
                            preFilters,
                            cached = tokenCache[selector + " "];
                        if (cached) return parseOnly ? 0 : cached.slice(0);
                        for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar; ) {
                            for (type in ((matched && !(match = rcomma.exec(soFar))) || (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push((tokens = []))),
                            (matched = !1),
                            (match = rcombinators.exec(soFar)) && ((matched = match.shift()), tokens.push({ value: matched, type: match[0].replace(rtrim, " ") }), (soFar = soFar.slice(matched.length))),
                            Expr.filter))
                                !(match = matchExpr[type].exec(soFar)) ||
                                    (preFilters[type] && !(match = preFilters[type](match))) ||
                                    ((matched = match.shift()), tokens.push({ value: matched, type: type, matches: match }), (soFar = soFar.slice(matched.length)));
                            if (!matched) break;
                        }
                        return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
                    }),
                    (compile = Sizzle.compile = function (selector, match) {
                        var i,
                            setMatchers = [],
                            elementMatchers = [],
                            cached = compilerCache[selector + " "];
                        if (!cached) {
                            for (match || (match = tokenize(selector)), i = match.length; i--; ) (cached = matcherFromTokens(match[i]))[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
                            (cached = compilerCache(
                                selector,
                                (function (elementMatchers, setMatchers) {
                                    var bySet = setMatchers.length > 0,
                                        byElement = elementMatchers.length > 0,
                                        superMatcher = function (seed, context, xml, results, outermost) {
                                            var elem,
                                                j,
                                                matcher,
                                                matchedCount = 0,
                                                i = "0",
                                                unmatched = seed && [],
                                                setMatched = [],
                                                contextBackup = outermostContext,
                                                elems = seed || (byElement && Expr.find.TAG("*", outermost)),
                                                dirrunsUnique = (dirruns += null == contextBackup ? 1 : Math.random() || 0.1),
                                                len = elems.length;
                                            for (outermost && (outermostContext = context == document || context || outermost); i !== len && null != (elem = elems[i]); i++) {
                                                if (byElement && elem) {
                                                    for (j = 0, context || elem.ownerDocument == document || (setDocument(elem), (xml = !documentIsHTML)); (matcher = elementMatchers[j++]); )
                                                        if (matcher(elem, context || document, xml)) {
                                                            results.push(elem);
                                                            break;
                                                        }
                                                    outermost && (dirruns = dirrunsUnique);
                                                }
                                                bySet && ((elem = !matcher && elem) && matchedCount--, seed && unmatched.push(elem));
                                            }
                                            if (((matchedCount += i), bySet && i !== matchedCount)) {
                                                for (j = 0; (matcher = setMatchers[j++]); ) matcher(unmatched, setMatched, context, xml);
                                                if (seed) {
                                                    if (matchedCount > 0) for (; i--; ) unmatched[i] || setMatched[i] || (setMatched[i] = pop.call(results));
                                                    setMatched = condense(setMatched);
                                                }
                                                push.apply(results, setMatched), outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1 && Sizzle.uniqueSort(results);
                                            }
                                            return outermost && ((dirruns = dirrunsUnique), (outermostContext = contextBackup)), unmatched;
                                        };
                                    return bySet ? markFunction(superMatcher) : superMatcher;
                                })(elementMatchers, setMatchers)
                            )).selector = selector;
                        }
                        return cached;
                    }),
                    (select = Sizzle.select = function (selector, context, results, seed) {
                        var i,
                            tokens,
                            token,
                            type,
                            find,
                            compiled = "function" == typeof selector && selector,
                            match = !seed && tokenize((selector = compiled.selector || selector));
                        if (((results = results || []), 1 === match.length)) {
                            if ((tokens = match[0] = match[0].slice(0)).length > 2 && "ID" === (token = tokens[0]).type && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
                                if (!(context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0])) return results;
                                compiled && (context = context.parentNode), (selector = selector.slice(tokens.shift().value.length));
                            }
                            for (i = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i-- && ((token = tokens[i]), !Expr.relative[(type = token.type)]); )
                                if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), (rsibling.test(tokens[0].type) && testContext(context.parentNode)) || context))) {
                                    if ((tokens.splice(i, 1), !(selector = seed.length && toSelector(tokens)))) return push.apply(results, seed), results;
                                    break;
                                }
                        }
                        return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || (rsibling.test(selector) && testContext(context.parentNode)) || context), results;
                    }),
                    (support.sortStable = expando.split("").sort(sortOrder).join("") === expando),
                    (support.detectDuplicates = !!hasDuplicate),
                    setDocument(),
                    (support.sortDetached = assert(function (el) {
                        return 1 & el.compareDocumentPosition(document.createElement("fieldset"));
                    })),
                    assert(function (el) {
                        return (el.innerHTML = "<a href='#'></a>"), "#" === el.firstChild.getAttribute("href");
                    }) ||
                        addHandle("type|href|height|width", function (elem, name, isXML) {
                            if (!isXML) return elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2);
                        }),
                    (support.attributes &&
                        assert(function (el) {
                            return (el.innerHTML = "<input/>"), el.firstChild.setAttribute("value", ""), "" === el.firstChild.getAttribute("value");
                        })) ||
                        addHandle("value", function (elem, _name, isXML) {
                            if (!isXML && "input" === elem.nodeName.toLowerCase()) return elem.defaultValue;
                        }),
                    assert(function (el) {
                        return null == el.getAttribute("disabled");
                    }) ||
                        addHandle(booleans, function (elem, name, isXML) {
                            var val;
                            if (!isXML) return !0 === elem[name] ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                        }),
                    Sizzle
                );
            })(window);
            (jQuery.find = Sizzle),
                (jQuery.expr = Sizzle.selectors),
                (jQuery.expr[":"] = jQuery.expr.pseudos),
                (jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort),
                (jQuery.text = Sizzle.getText),
                (jQuery.isXMLDoc = Sizzle.isXML),
                (jQuery.contains = Sizzle.contains),
                (jQuery.escapeSelector = Sizzle.escape);
            var dir = function (elem, dir, until) {
                    for (var matched = [], truncate = void 0 !== until; (elem = elem[dir]) && 9 !== elem.nodeType; )
                        if (1 === elem.nodeType) {
                            if (truncate && jQuery(elem).is(until)) break;
                            matched.push(elem);
                        }
                    return matched;
                },
                siblings = function (n, elem) {
                    for (var matched = []; n; n = n.nextSibling) 1 === n.nodeType && n !== elem && matched.push(n);
                    return matched;
                },
                rneedsContext = jQuery.expr.match.needsContext;
            function nodeName(elem, name) {
                return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
            }
            var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function winnow(elements, qualifier, not) {
                return isFunction(qualifier)
                    ? jQuery.grep(elements, function (elem, i) {
                          return !!qualifier.call(elem, i, elem) !== not;
                      })
                    : qualifier.nodeType
                    ? jQuery.grep(elements, function (elem) {
                          return (elem === qualifier) !== not;
                      })
                    : "string" != typeof qualifier
                    ? jQuery.grep(elements, function (elem) {
                          return indexOf.call(qualifier, elem) > -1 !== not;
                      })
                    : jQuery.filter(qualifier, elements, not);
            }
            (jQuery.filter = function (expr, elems, not) {
                var elem = elems[0];
                return (
                    not && (expr = ":not(" + expr + ")"),
                    1 === elems.length && 1 === elem.nodeType
                        ? jQuery.find.matchesSelector(elem, expr)
                            ? [elem]
                            : []
                        : jQuery.find.matches(
                              expr,
                              jQuery.grep(elems, function (elem) {
                                  return 1 === elem.nodeType;
                              })
                          )
                );
            }),
                jQuery.fn.extend({
                    find: function (selector) {
                        var i,
                            ret,
                            len = this.length,
                            self = this;
                        if ("string" != typeof selector)
                            return this.pushStack(
                                jQuery(selector).filter(function () {
                                    for (i = 0; i < len; i++) if (jQuery.contains(self[i], this)) return !0;
                                })
                            );
                        for (ret = this.pushStack([]), i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
                        return len > 1 ? jQuery.uniqueSort(ret) : ret;
                    },
                    filter: function (selector) {
                        return this.pushStack(winnow(this, selector || [], !1));
                    },
                    not: function (selector) {
                        return this.pushStack(winnow(this, selector || [], !0));
                    },
                    is: function (selector) {
                        return !!winnow(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length;
                    },
                });
            var rootjQuery,
                rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((jQuery.fn.init = function (selector, context, root) {
                var match, elem;
                if (!selector) return this;
                if (((root = root || rootjQuery), "string" == typeof selector)) {
                    if (!(match = "<" === selector[0] && ">" === selector[selector.length - 1] && selector.length >= 3 ? [null, selector, null] : rquickExpr.exec(selector)) || (!match[1] && context))
                        return !context || context.jquery ? (context || root).find(selector) : this.constructor(context).find(selector);
                    if (match[1]) {
                        if (
                            ((context = context instanceof jQuery ? context[0] : context),
                            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0)),
                            rsingleTag.test(match[1]) && jQuery.isPlainObject(context))
                        )
                            for (match in context) isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
                        return this;
                    }
                    return (elem = document.getElementById(match[2])) && ((this[0] = elem), (this.length = 1)), this;
                }
                return selector.nodeType ? ((this[0] = selector), (this.length = 1), this) : isFunction(selector) ? (void 0 !== root.ready ? root.ready(selector) : selector(jQuery)) : jQuery.makeArray(selector, this);
            }).prototype = jQuery.fn),
                (rootjQuery = jQuery(document));
            var rparentsprev = /^(?:parents|prev(?:Until|All))/,
                guaranteedUnique = { children: !0, contents: !0, next: !0, prev: !0 };
            function sibling(cur, dir) {
                for (; (cur = cur[dir]) && 1 !== cur.nodeType; );
                return cur;
            }
            jQuery.fn.extend({
                has: function (target) {
                    var targets = jQuery(target, this),
                        l = targets.length;
                    return this.filter(function () {
                        for (var i = 0; i < l; i++) if (jQuery.contains(this, targets[i])) return !0;
                    });
                },
                closest: function (selectors, context) {
                    var cur,
                        i = 0,
                        l = this.length,
                        matched = [],
                        targets = "string" != typeof selectors && jQuery(selectors);
                    if (!rneedsContext.test(selectors))
                        for (; i < l; i++)
                            for (cur = this[i]; cur && cur !== context; cur = cur.parentNode)
                                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
                                    matched.push(cur);
                                    break;
                                }
                    return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
                },
                index: function (elem) {
                    return elem ? ("string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function (selector, context) {
                    return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
                },
                addBack: function (selector) {
                    return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
                },
            }),
                jQuery.each(
                    {
                        parent: function (elem) {
                            var parent = elem.parentNode;
                            return parent && 11 !== parent.nodeType ? parent : null;
                        },
                        parents: function (elem) {
                            return dir(elem, "parentNode");
                        },
                        parentsUntil: function (elem, _i, until) {
                            return dir(elem, "parentNode", until);
                        },
                        next: function (elem) {
                            return sibling(elem, "nextSibling");
                        },
                        prev: function (elem) {
                            return sibling(elem, "previousSibling");
                        },
                        nextAll: function (elem) {
                            return dir(elem, "nextSibling");
                        },
                        prevAll: function (elem) {
                            return dir(elem, "previousSibling");
                        },
                        nextUntil: function (elem, _i, until) {
                            return dir(elem, "nextSibling", until);
                        },
                        prevUntil: function (elem, _i, until) {
                            return dir(elem, "previousSibling", until);
                        },
                        siblings: function (elem) {
                            return siblings((elem.parentNode || {}).firstChild, elem);
                        },
                        children: function (elem) {
                            return siblings(elem.firstChild);
                        },
                        contents: function (elem) {
                            return null != elem.contentDocument && getProto(elem.contentDocument) ? elem.contentDocument : (nodeName(elem, "template") && (elem = elem.content || elem), jQuery.merge([], elem.childNodes));
                        },
                    },
                    function (name, fn) {
                        jQuery.fn[name] = function (until, selector) {
                            var matched = jQuery.map(this, fn, until);
                            return (
                                "Until" !== name.slice(-5) && (selector = until),
                                selector && "string" == typeof selector && (matched = jQuery.filter(selector, matched)),
                                this.length > 1 && (guaranteedUnique[name] || jQuery.uniqueSort(matched), rparentsprev.test(name) && matched.reverse()),
                                this.pushStack(matched)
                            );
                        };
                    }
                );
            var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
            function Identity(v) {
                return v;
            }
            function Thrower(ex) {
                throw ex;
            }
            function adoptValue(value, resolve, reject, noValue) {
                var method;
                try {
                    value && isFunction((method = value.promise))
                        ? method.call(value).done(resolve).fail(reject)
                        : value && isFunction((method = value.then))
                        ? method.call(value, resolve, reject)
                        : resolve.apply(void 0, [value].slice(noValue));
                } catch (value) {
                    reject.apply(void 0, [value]);
                }
            }
            (jQuery.Callbacks = function (options) {
                options =
                    "string" == typeof options
                        ? (function (options) {
                              var object = {};
                              return (
                                  jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
                                      object[flag] = !0;
                                  }),
                                  object
                              );
                          })(options)
                        : jQuery.extend({}, options);
                var firing,
                    memory,
                    fired,
                    locked,
                    list = [],
                    queue = [],
                    firingIndex = -1,
                    fire = function () {
                        for (locked = locked || options.once, fired = firing = !0; queue.length; firingIndex = -1)
                            for (memory = queue.shift(); ++firingIndex < list.length; ) !1 === list[firingIndex].apply(memory[0], memory[1]) && options.stopOnFalse && ((firingIndex = list.length), (memory = !1));
                        options.memory || (memory = !1), (firing = !1), locked && (list = memory ? [] : "");
                    },
                    self = {
                        add: function () {
                            return (
                                list &&
                                    (memory && !firing && ((firingIndex = list.length - 1), queue.push(memory)),
                                    (function add(args) {
                                        jQuery.each(args, function (_, arg) {
                                            isFunction(arg) ? (options.unique && self.has(arg)) || list.push(arg) : arg && arg.length && "string" !== toType(arg) && add(arg);
                                        });
                                    })(arguments),
                                    memory && !firing && fire()),
                                this
                            );
                        },
                        remove: function () {
                            return (
                                jQuery.each(arguments, function (_, arg) {
                                    for (var index; (index = jQuery.inArray(arg, list, index)) > -1; ) list.splice(index, 1), index <= firingIndex && firingIndex--;
                                }),
                                this
                            );
                        },
                        has: function (fn) {
                            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                        },
                        empty: function () {
                            return list && (list = []), this;
                        },
                        disable: function () {
                            return (locked = queue = []), (list = memory = ""), this;
                        },
                        disabled: function () {
                            return !list;
                        },
                        lock: function () {
                            return (locked = queue = []), memory || firing || (list = memory = ""), this;
                        },
                        locked: function () {
                            return !!locked;
                        },
                        fireWith: function (context, args) {
                            return locked || ((args = [context, (args = args || []).slice ? args.slice() : args]), queue.push(args), firing || fire()), this;
                        },
                        fire: function () {
                            return self.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!fired;
                        },
                    };
                return self;
            }),
                jQuery.extend({
                    Deferred: function (func) {
                        var tuples = [
                                ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2],
                                ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"],
                            ],
                            state = "pending",
                            promise = {
                                state: function () {
                                    return state;
                                },
                                always: function () {
                                    return deferred.done(arguments).fail(arguments), this;
                                },
                                catch: function (fn) {
                                    return promise.then(null, fn);
                                },
                                pipe: function () {
                                    var fns = arguments;
                                    return jQuery
                                        .Deferred(function (newDefer) {
                                            jQuery.each(tuples, function (_i, tuple) {
                                                var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                                deferred[tuple[1]](function () {
                                                    var returned = fn && fn.apply(this, arguments);
                                                    returned && isFunction(returned.promise)
                                                        ? returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject)
                                                        : newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                                                });
                                            }),
                                                (fns = null);
                                        })
                                        .promise();
                                },
                                then: function (onFulfilled, onRejected, onProgress) {
                                    var maxDepth = 0;
                                    function resolve(depth, deferred, handler, special) {
                                        return function () {
                                            var that = this,
                                                args = arguments,
                                                mightThrow = function () {
                                                    var returned, then;
                                                    if (!(depth < maxDepth)) {
                                                        if ((returned = handler.apply(that, args)) === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                                        (then = returned && ("object" == typeof returned || "function" == typeof returned) && returned.then),
                                                            isFunction(then)
                                                                ? special
                                                                    ? then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special))
                                                                    : (maxDepth++,
                                                                      then.call(
                                                                          returned,
                                                                          resolve(maxDepth, deferred, Identity, special),
                                                                          resolve(maxDepth, deferred, Thrower, special),
                                                                          resolve(maxDepth, deferred, Identity, deferred.notifyWith)
                                                                      ))
                                                                : (handler !== Identity && ((that = void 0), (args = [returned])), (special || deferred.resolveWith)(that, args));
                                                    }
                                                },
                                                process = special
                                                    ? mightThrow
                                                    : function () {
                                                          try {
                                                              mightThrow();
                                                          } catch (e) {
                                                              jQuery.Deferred.exceptionHook && jQuery.Deferred.exceptionHook(e, process.stackTrace),
                                                                  depth + 1 >= maxDepth && (handler !== Thrower && ((that = void 0), (args = [e])), deferred.rejectWith(that, args));
                                                          }
                                                      };
                                            depth ? process() : (jQuery.Deferred.getStackHook && (process.stackTrace = jQuery.Deferred.getStackHook()), window.setTimeout(process));
                                        };
                                    }
                                    return jQuery
                                        .Deferred(function (newDefer) {
                                            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)),
                                                tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)),
                                                tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                                        })
                                        .promise();
                                },
                                promise: function (obj) {
                                    return null != obj ? jQuery.extend(obj, promise) : promise;
                                },
                            },
                            deferred = {};
                        return (
                            jQuery.each(tuples, function (i, tuple) {
                                var list = tuple[2],
                                    stateString = tuple[5];
                                (promise[tuple[1]] = list.add),
                                    stateString &&
                                        list.add(
                                            function () {
                                                state = stateString;
                                            },
                                            tuples[3 - i][2].disable,
                                            tuples[3 - i][3].disable,
                                            tuples[0][2].lock,
                                            tuples[0][3].lock
                                        ),
                                    list.add(tuple[3].fire),
                                    (deferred[tuple[0]] = function () {
                                        return deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments), this;
                                    }),
                                    (deferred[tuple[0] + "With"] = list.fireWith);
                            }),
                            promise.promise(deferred),
                            func && func.call(deferred, deferred),
                            deferred
                        );
                    },
                    when: function (singleValue) {
                        var remaining = arguments.length,
                            i = remaining,
                            resolveContexts = Array(i),
                            resolveValues = slice.call(arguments),
                            primary = jQuery.Deferred(),
                            updateFunc = function (i) {
                                return function (value) {
                                    (resolveContexts[i] = this), (resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value), --remaining || primary.resolveWith(resolveContexts, resolveValues);
                                };
                            };
                        if (remaining <= 1 && (adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining), "pending" === primary.state() || isFunction(resolveValues[i] && resolveValues[i].then)))
                            return primary.then();
                        for (; i--; ) adoptValue(resolveValues[i], updateFunc(i), primary.reject);
                        return primary.promise();
                    },
                });
            var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (jQuery.Deferred.exceptionHook = function (error, stack) {
                window.console && window.console.warn && error && rerrorNames.test(error.name) && window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
            }),
                (jQuery.readyException = function (error) {
                    window.setTimeout(function () {
                        throw error;
                    });
                });
            var readyList = jQuery.Deferred();
            function completed() {
                document.removeEventListener("DOMContentLoaded", completed), window.removeEventListener("load", completed), jQuery.ready();
            }
            (jQuery.fn.ready = function (fn) {
                return (
                    readyList.then(fn).catch(function (error) {
                        jQuery.readyException(error);
                    }),
                    this
                );
            }),
                jQuery.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function (wait) {
                        (!0 === wait ? --jQuery.readyWait : jQuery.isReady) || ((jQuery.isReady = !0), (!0 !== wait && --jQuery.readyWait > 0) || readyList.resolveWith(document, [jQuery]));
                    },
                }),
                (jQuery.ready.then = readyList.then),
                "complete" === document.readyState || ("loading" !== document.readyState && !document.documentElement.doScroll)
                    ? window.setTimeout(jQuery.ready)
                    : (document.addEventListener("DOMContentLoaded", completed), window.addEventListener("load", completed));
            var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
                    var i = 0,
                        len = elems.length,
                        bulk = null == key;
                    if ("object" === toType(key)) for (i in ((chainable = !0), key)) access(elems, fn, i, key[i], !0, emptyGet, raw);
                    else if (
                        void 0 !== value &&
                        ((chainable = !0),
                        isFunction(value) || (raw = !0),
                        bulk &&
                            (raw
                                ? (fn.call(elems, value), (fn = null))
                                : ((bulk = fn),
                                  (fn = function (elem, _key, value) {
                                      return bulk.call(jQuery(elem), value);
                                  }))),
                        fn)
                    )
                        for (; i < len; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                    return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
                },
                rmsPrefix = /^-ms-/,
                rdashAlpha = /-([a-z])/g;
            function fcamelCase(_all, letter) {
                return letter.toUpperCase();
            }
            function camelCase(string) {
                return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
            }
            var acceptData = function (owner) {
                return 1 === owner.nodeType || 9 === owner.nodeType || !+owner.nodeType;
            };
            function Data() {
                this.expando = jQuery.expando + Data.uid++;
            }
            (Data.uid = 1),
                (Data.prototype = {
                    cache: function (owner) {
                        var value = owner[this.expando];
                        return value || ((value = {}), acceptData(owner) && (owner.nodeType ? (owner[this.expando] = value) : Object.defineProperty(owner, this.expando, { value: value, configurable: !0 }))), value;
                    },
                    set: function (owner, data, value) {
                        var prop,
                            cache = this.cache(owner);
                        if ("string" == typeof data) cache[camelCase(data)] = value;
                        else for (prop in data) cache[camelCase(prop)] = data[prop];
                        return cache;
                    },
                    get: function (owner, key) {
                        return void 0 === key ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
                    },
                    access: function (owner, key, value) {
                        return void 0 === key || (key && "string" == typeof key && void 0 === value) ? this.get(owner, key) : (this.set(owner, key, value), void 0 !== value ? value : key);
                    },
                    remove: function (owner, key) {
                        var i,
                            cache = owner[this.expando];
                        if (void 0 !== cache) {
                            if (void 0 !== key) {
                                i = (key = Array.isArray(key) ? key.map(camelCase) : (key = camelCase(key)) in cache ? [key] : key.match(rnothtmlwhite) || []).length;
                                for (; i--; ) delete cache[key[i]];
                            }
                            (void 0 === key || jQuery.isEmptyObject(cache)) && (owner.nodeType ? (owner[this.expando] = void 0) : delete owner[this.expando]);
                        }
                    },
                    hasData: function (owner) {
                        var cache = owner[this.expando];
                        return void 0 !== cache && !jQuery.isEmptyObject(cache);
                    },
                });
            var dataPriv = new Data(),
                dataUser = new Data(),
                rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                rmultiDash = /[A-Z]/g;
            function dataAttr(elem, key, data) {
                var name;
                if (void 0 === data && 1 === elem.nodeType)
                    if (((name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase()), "string" == typeof (data = elem.getAttribute(name)))) {
                        try {
                            data = (function (data) {
                                return "true" === data || ("false" !== data && ("null" === data ? null : data === +data + "" ? +data : rbrace.test(data) ? JSON.parse(data) : data));
                            })(data);
                        } catch (e) {}
                        dataUser.set(elem, key, data);
                    } else data = void 0;
                return data;
            }
            jQuery.extend({
                hasData: function (elem) {
                    return dataUser.hasData(elem) || dataPriv.hasData(elem);
                },
                data: function (elem, name, data) {
                    return dataUser.access(elem, name, data);
                },
                removeData: function (elem, name) {
                    dataUser.remove(elem, name);
                },
                _data: function (elem, name, data) {
                    return dataPriv.access(elem, name, data);
                },
                _removeData: function (elem, name) {
                    dataPriv.remove(elem, name);
                },
            }),
                jQuery.fn.extend({
                    data: function (key, value) {
                        var i,
                            name,
                            data,
                            elem = this[0],
                            attrs = elem && elem.attributes;
                        if (void 0 === key) {
                            if (this.length && ((data = dataUser.get(elem)), 1 === elem.nodeType && !dataPriv.get(elem, "hasDataAttrs"))) {
                                for (i = attrs.length; i--; ) attrs[i] && 0 === (name = attrs[i].name).indexOf("data-") && ((name = camelCase(name.slice(5))), dataAttr(elem, name, data[name]));
                                dataPriv.set(elem, "hasDataAttrs", !0);
                            }
                            return data;
                        }
                        return "object" == typeof key
                            ? this.each(function () {
                                  dataUser.set(this, key);
                              })
                            : access(
                                  this,
                                  function (value) {
                                      var data;
                                      if (elem && void 0 === value) return void 0 !== (data = dataUser.get(elem, key)) || void 0 !== (data = dataAttr(elem, key)) ? data : void 0;
                                      this.each(function () {
                                          dataUser.set(this, key, value);
                                      });
                                  },
                                  null,
                                  value,
                                  arguments.length > 1,
                                  null,
                                  !0
                              );
                    },
                    removeData: function (key) {
                        return this.each(function () {
                            dataUser.remove(this, key);
                        });
                    },
                }),
                jQuery.extend({
                    queue: function (elem, type, data) {
                        var queue;
                        if (elem)
                            return (
                                (type = (type || "fx") + "queue"), (queue = dataPriv.get(elem, type)), data && (!queue || Array.isArray(data) ? (queue = dataPriv.access(elem, type, jQuery.makeArray(data))) : queue.push(data)), queue || []
                            );
                    },
                    dequeue: function (elem, type) {
                        type = type || "fx";
                        var queue = jQuery.queue(elem, type),
                            startLength = queue.length,
                            fn = queue.shift(),
                            hooks = jQuery._queueHooks(elem, type);
                        "inprogress" === fn && ((fn = queue.shift()), startLength--),
                            fn &&
                                ("fx" === type && queue.unshift("inprogress"),
                                delete hooks.stop,
                                fn.call(
                                    elem,
                                    function () {
                                        jQuery.dequeue(elem, type);
                                    },
                                    hooks
                                )),
                            !startLength && hooks && hooks.empty.fire();
                    },
                    _queueHooks: function (elem, type) {
                        var key = type + "queueHooks";
                        return (
                            dataPriv.get(elem, key) ||
                            dataPriv.access(elem, key, {
                                empty: jQuery.Callbacks("once memory").add(function () {
                                    dataPriv.remove(elem, [type + "queue", key]);
                                }),
                            })
                        );
                    },
                }),
                jQuery.fn.extend({
                    queue: function (type, data) {
                        var setter = 2;
                        return (
                            "string" != typeof type && ((data = type), (type = "fx"), setter--),
                            arguments.length < setter
                                ? jQuery.queue(this[0], type)
                                : void 0 === data
                                ? this
                                : this.each(function () {
                                      var queue = jQuery.queue(this, type, data);
                                      jQuery._queueHooks(this, type), "fx" === type && "inprogress" !== queue[0] && jQuery.dequeue(this, type);
                                  })
                        );
                    },
                    dequeue: function (type) {
                        return this.each(function () {
                            jQuery.dequeue(this, type);
                        });
                    },
                    clearQueue: function (type) {
                        return this.queue(type || "fx", []);
                    },
                    promise: function (type, obj) {
                        var tmp,
                            count = 1,
                            defer = jQuery.Deferred(),
                            elements = this,
                            i = this.length,
                            resolve = function () {
                                --count || defer.resolveWith(elements, [elements]);
                            };
                        for ("string" != typeof type && ((obj = type), (type = void 0)), type = type || "fx"; i--; ) (tmp = dataPriv.get(elements[i], type + "queueHooks")) && tmp.empty && (count++, tmp.empty.add(resolve));
                        return resolve(), defer.promise(obj);
                    },
                });
            var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
                cssExpand = ["Top", "Right", "Bottom", "Left"],
                documentElement = document.documentElement,
                isAttached = function (elem) {
                    return jQuery.contains(elem.ownerDocument, elem);
                },
                composed = { composed: !0 };
            documentElement.getRootNode &&
                (isAttached = function (elem) {
                    return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
                });
            var isHiddenWithinTree = function (elem, el) {
                return "none" === (elem = el || elem).style.display || ("" === elem.style.display && isAttached(elem) && "none" === jQuery.css(elem, "display"));
            };
            function adjustCSS(elem, prop, valueParts, tween) {
                var adjusted,
                    scale,
                    maxIterations = 20,
                    currentValue = tween
                        ? function () {
                              return tween.cur();
                          }
                        : function () {
                              return jQuery.css(elem, prop, "");
                          },
                    initial = currentValue(),
                    unit = (valueParts && valueParts[3]) || (jQuery.cssNumber[prop] ? "" : "px"),
                    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || ("px" !== unit && +initial)) && rcssNum.exec(jQuery.css(elem, prop));
                if (initialInUnit && initialInUnit[3] !== unit) {
                    for (initial /= 2, unit = unit || initialInUnit[3], initialInUnit = +initial || 1; maxIterations--; )
                        jQuery.style(elem, prop, initialInUnit + unit), (1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0 && (maxIterations = 0), (initialInUnit /= scale);
                    (initialInUnit *= 2), jQuery.style(elem, prop, initialInUnit + unit), (valueParts = valueParts || []);
                }
                return (
                    valueParts &&
                        ((initialInUnit = +initialInUnit || +initial || 0),
                        (adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2]),
                        tween && ((tween.unit = unit), (tween.start = initialInUnit), (tween.end = adjusted))),
                    adjusted
                );
            }
            var defaultDisplayMap = {};
            function getDefaultDisplay(elem) {
                var temp,
                    doc = elem.ownerDocument,
                    nodeName = elem.nodeName,
                    display = defaultDisplayMap[nodeName];
                return (
                    display ||
                    ((temp = doc.body.appendChild(doc.createElement(nodeName))),
                    (display = jQuery.css(temp, "display")),
                    temp.parentNode.removeChild(temp),
                    "none" === display && (display = "block"),
                    (defaultDisplayMap[nodeName] = display),
                    display)
                );
            }
            function showHide(elements, show) {
                for (var display, elem, values = [], index = 0, length = elements.length; index < length; index++)
                    (elem = elements[index]).style &&
                        ((display = elem.style.display),
                        show
                            ? ("none" === display && ((values[index] = dataPriv.get(elem, "display") || null), values[index] || (elem.style.display = "")),
                              "" === elem.style.display && isHiddenWithinTree(elem) && (values[index] = getDefaultDisplay(elem)))
                            : "none" !== display && ((values[index] = "none"), dataPriv.set(elem, "display", display)));
                for (index = 0; index < length; index++) null != values[index] && (elements[index].style.display = values[index]);
                return elements;
            }
            jQuery.fn.extend({
                show: function () {
                    return showHide(this, !0);
                },
                hide: function () {
                    return showHide(this);
                },
                toggle: function (state) {
                    return "boolean" == typeof state
                        ? state
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              isHiddenWithinTree(this) ? jQuery(this).show() : jQuery(this).hide();
                          });
                },
            });
            var div,
                input,
                rcheckableType = /^(?:checkbox|radio)$/i,
                rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
            (div = document.createDocumentFragment().appendChild(document.createElement("div"))),
                (input = document.createElement("input")).setAttribute("type", "radio"),
                input.setAttribute("checked", "checked"),
                input.setAttribute("name", "t"),
                div.appendChild(input),
                (support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (div.innerHTML = "<textarea>x</textarea>"),
                (support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue),
                (div.innerHTML = "<option></option>"),
                (support.option = !!div.lastChild);
            var wrapMap = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""],
            };
            function getAll(context, tag) {
                var ret;
                return (
                    (ret = void 0 !== context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : void 0 !== context.querySelectorAll ? context.querySelectorAll(tag || "*") : []),
                    void 0 === tag || (tag && nodeName(context, tag)) ? jQuery.merge([context], ret) : ret
                );
            }
            function setGlobalEval(elems, refElements) {
                for (var i = 0, l = elems.length; i < l; i++) dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
            }
            (wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead), (wrapMap.th = wrapMap.td), support.option || (wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"]);
            var rhtml = /<|&#?\w+;/;
            function buildFragment(elems, context, scripts, selection, ignored) {
                for (var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length; i < l; i++)
                    if ((elem = elems[i]) || 0 === elem)
                        if ("object" === toType(elem)) jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
                        else if (rhtml.test(elem)) {
                            for (
                                tmp = tmp || fragment.appendChild(context.createElement("div")),
                                    tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(),
                                    wrap = wrapMap[tag] || wrapMap._default,
                                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2],
                                    j = wrap[0];
                                j--;

                            )
                                tmp = tmp.lastChild;
                            jQuery.merge(nodes, tmp.childNodes), ((tmp = fragment.firstChild).textContent = "");
                        } else nodes.push(context.createTextNode(elem));
                for (fragment.textContent = "", i = 0; (elem = nodes[i++]); )
                    if (selection && jQuery.inArray(elem, selection) > -1) ignored && ignored.push(elem);
                    else if (((attached = isAttached(elem)), (tmp = getAll(fragment.appendChild(elem), "script")), attached && setGlobalEval(tmp), scripts))
                        for (j = 0; (elem = tmp[j++]); ) rscriptType.test(elem.type || "") && scripts.push(elem);
                return fragment;
            }
            var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
            function returnTrue() {
                return !0;
            }
            function returnFalse() {
                return !1;
            }
            function expectSync(elem, type) {
                return (
                    (elem ===
                        (function () {
                            try {
                                return document.activeElement;
                            } catch (err) {}
                        })()) ==
                    ("focus" === type)
                );
            }
            function on(elem, types, selector, data, fn, one) {
                var origFn, type;
                if ("object" == typeof types) {
                    for (type in ("string" != typeof selector && ((data = data || selector), (selector = void 0)), types)) on(elem, type, selector, data, types[type], one);
                    return elem;
                }
                if (
                    (null == data && null == fn ? ((fn = selector), (data = selector = void 0)) : null == fn && ("string" == typeof selector ? ((fn = data), (data = void 0)) : ((fn = data), (data = selector), (selector = void 0))),
                    !1 === fn)
                )
                    fn = returnFalse;
                else if (!fn) return elem;
                return (
                    1 === one &&
                        ((origFn = fn),
                        ((fn = function (event) {
                            return jQuery().off(event), origFn.apply(this, arguments);
                        }).guid = origFn.guid || (origFn.guid = jQuery.guid++))),
                    elem.each(function () {
                        jQuery.event.add(this, types, fn, data, selector);
                    })
                );
            }
            function leverageNative(el, type, expectSync) {
                expectSync
                    ? (dataPriv.set(el, type, !1),
                      jQuery.event.add(el, type, {
                          namespace: !1,
                          handler: function (event) {
                              var notAsync,
                                  result,
                                  saved = dataPriv.get(this, type);
                              if (1 & event.isTrigger && this[type]) {
                                  if (saved.length) (jQuery.event.special[type] || {}).delegateType && event.stopPropagation();
                                  else if (
                                      ((saved = slice.call(arguments)),
                                      dataPriv.set(this, type, saved),
                                      (notAsync = expectSync(this, type)),
                                      this[type](),
                                      saved !== (result = dataPriv.get(this, type)) || notAsync ? dataPriv.set(this, type, !1) : (result = {}),
                                      saved !== result)
                                  )
                                      return event.stopImmediatePropagation(), event.preventDefault(), result && result.value;
                              } else saved.length && (dataPriv.set(this, type, { value: jQuery.event.trigger(jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this) }), event.stopImmediatePropagation());
                          },
                      }))
                    : void 0 === dataPriv.get(el, type) && jQuery.event.add(el, type, returnTrue);
            }
            (jQuery.event = {
                global: {},
                add: function (elem, types, handler, data, selector) {
                    var handleObjIn,
                        eventHandle,
                        tmp,
                        events,
                        t,
                        handleObj,
                        special,
                        handlers,
                        type,
                        namespaces,
                        origType,
                        elemData = dataPriv.get(elem);
                    if (acceptData(elem))
                        for (
                            handler.handler && ((handler = (handleObjIn = handler).handler), (selector = handleObjIn.selector)),
                                selector && jQuery.find.matchesSelector(documentElement, selector),
                                handler.guid || (handler.guid = jQuery.guid++),
                                (events = elemData.events) || (events = elemData.events = Object.create(null)),
                                (eventHandle = elemData.handle) ||
                                    (eventHandle = elemData.handle = function (e) {
                                        return void 0 !== jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
                                    }),
                                t = (types = (types || "").match(rnothtmlwhite) || [""]).length;
                            t--;

                        )
                            (type = origType = (tmp = rtypenamespace.exec(types[t]) || [])[1]),
                                (namespaces = (tmp[2] || "").split(".").sort()),
                                type &&
                                    ((special = jQuery.event.special[type] || {}),
                                    (type = (selector ? special.delegateType : special.bindType) || type),
                                    (special = jQuery.event.special[type] || {}),
                                    (handleObj = jQuery.extend(
                                        {
                                            type: type,
                                            origType: origType,
                                            data: data,
                                            handler: handler,
                                            guid: handler.guid,
                                            selector: selector,
                                            needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                                            namespace: namespaces.join("."),
                                        },
                                        handleObjIn
                                    )),
                                    (handlers = events[type]) ||
                                        (((handlers = events[type] = []).delegateCount = 0),
                                        (special.setup && !1 !== special.setup.call(elem, data, namespaces, eventHandle)) || (elem.addEventListener && elem.addEventListener(type, eventHandle))),
                                    special.add && (special.add.call(elem, handleObj), handleObj.handler.guid || (handleObj.handler.guid = handler.guid)),
                                    selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj),
                                    (jQuery.event.global[type] = !0));
                },
                remove: function (elem, types, handler, selector, mappedTypes) {
                    var j,
                        origCount,
                        tmp,
                        events,
                        t,
                        handleObj,
                        special,
                        handlers,
                        type,
                        namespaces,
                        origType,
                        elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                    if (elemData && (events = elemData.events)) {
                        for (t = (types = (types || "").match(rnothtmlwhite) || [""]).length; t--; )
                            if (((type = origType = (tmp = rtypenamespace.exec(types[t]) || [])[1]), (namespaces = (tmp[2] || "").split(".").sort()), type)) {
                                for (
                                    special = jQuery.event.special[type] || {},
                                        handlers = events[(type = (selector ? special.delegateType : special.bindType) || type)] || [],
                                        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                        origCount = j = handlers.length;
                                    j--;

                                )
                                    (handleObj = handlers[j]),
                                        (!mappedTypes && origType !== handleObj.origType) ||
                                            (handler && handler.guid !== handleObj.guid) ||
                                            (tmp && !tmp.test(handleObj.namespace)) ||
                                            (selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector)) ||
                                            (handlers.splice(j, 1), handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
                                origCount && !handlers.length && ((special.teardown && !1 !== special.teardown.call(elem, namespaces, elemData.handle)) || jQuery.removeEvent(elem, type, elemData.handle), delete events[type]);
                            } else for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, !0);
                        jQuery.isEmptyObject(events) && dataPriv.remove(elem, "handle events");
                    }
                },
                dispatch: function (nativeEvent) {
                    var i,
                        j,
                        ret,
                        matched,
                        handleObj,
                        handlerQueue,
                        args = new Array(arguments.length),
                        event = jQuery.event.fix(nativeEvent),
                        handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [],
                        special = jQuery.event.special[event.type] || {};
                    for (args[0] = event, i = 1; i < arguments.length; i++) args[i] = arguments[i];
                    if (((event.delegateTarget = this), !special.preDispatch || !1 !== special.preDispatch.call(this, event))) {
                        for (handlerQueue = jQuery.event.handlers.call(this, event, handlers), i = 0; (matched = handlerQueue[i++]) && !event.isPropagationStopped(); )
                            for (event.currentTarget = matched.elem, j = 0; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped(); )
                                (event.rnamespace && !1 !== handleObj.namespace && !event.rnamespace.test(handleObj.namespace)) ||
                                    ((event.handleObj = handleObj),
                                    (event.data = handleObj.data),
                                    void 0 !== (ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args)) &&
                                        !1 === (event.result = ret) &&
                                        (event.preventDefault(), event.stopPropagation()));
                        return special.postDispatch && special.postDispatch.call(this, event), event.result;
                    }
                },
                handlers: function (event, handlers) {
                    var i,
                        handleObj,
                        sel,
                        matchedHandlers,
                        matchedSelectors,
                        handlerQueue = [],
                        delegateCount = handlers.delegateCount,
                        cur = event.target;
                    if (delegateCount && cur.nodeType && !("click" === event.type && event.button >= 1))
                        for (; cur !== this; cur = cur.parentNode || this)
                            if (1 === cur.nodeType && ("click" !== event.type || !0 !== cur.disabled)) {
                                for (matchedHandlers = [], matchedSelectors = {}, i = 0; i < delegateCount; i++)
                                    void 0 === matchedSelectors[(sel = (handleObj = handlers[i]).selector + " ")] &&
                                        (matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length),
                                        matchedSelectors[sel] && matchedHandlers.push(handleObj);
                                matchedHandlers.length && handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                            }
                    return (cur = this), delegateCount < handlers.length && handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) }), handlerQueue;
                },
                addProp: function (name, hook) {
                    Object.defineProperty(jQuery.Event.prototype, name, {
                        enumerable: !0,
                        configurable: !0,
                        get: isFunction(hook)
                            ? function () {
                                  if (this.originalEvent) return hook(this.originalEvent);
                              }
                            : function () {
                                  if (this.originalEvent) return this.originalEvent[name];
                              },
                        set: function (value) {
                            Object.defineProperty(this, name, { enumerable: !0, configurable: !0, writable: !0, value: value });
                        },
                    });
                },
                fix: function (originalEvent) {
                    return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
                },
                special: {
                    load: { noBubble: !0 },
                    click: {
                        setup: function (data) {
                            var el = this || data;
                            return rcheckableType.test(el.type) && el.click && nodeName(el, "input") && leverageNative(el, "click", returnTrue), !1;
                        },
                        trigger: function (data) {
                            var el = this || data;
                            return rcheckableType.test(el.type) && el.click && nodeName(el, "input") && leverageNative(el, "click"), !0;
                        },
                        _default: function (event) {
                            var target = event.target;
                            return (rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click")) || nodeName(target, "a");
                        },
                    },
                    beforeunload: {
                        postDispatch: function (event) {
                            void 0 !== event.result && event.originalEvent && (event.originalEvent.returnValue = event.result);
                        },
                    },
                },
            }),
                (jQuery.removeEvent = function (elem, type, handle) {
                    elem.removeEventListener && elem.removeEventListener(type, handle);
                }),
                (jQuery.Event = function (src, props) {
                    if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
                    src && src.type
                        ? ((this.originalEvent = src),
                          (this.type = src.type),
                          (this.isDefaultPrevented = src.defaultPrevented || (void 0 === src.defaultPrevented && !1 === src.returnValue) ? returnTrue : returnFalse),
                          (this.target = src.target && 3 === src.target.nodeType ? src.target.parentNode : src.target),
                          (this.currentTarget = src.currentTarget),
                          (this.relatedTarget = src.relatedTarget))
                        : (this.type = src),
                        props && jQuery.extend(this, props),
                        (this.timeStamp = (src && src.timeStamp) || Date.now()),
                        (this[jQuery.expando] = !0);
                }),
                (jQuery.Event.prototype = {
                    constructor: jQuery.Event,
                    isDefaultPrevented: returnFalse,
                    isPropagationStopped: returnFalse,
                    isImmediatePropagationStopped: returnFalse,
                    isSimulated: !1,
                    preventDefault: function () {
                        var e = this.originalEvent;
                        (this.isDefaultPrevented = returnTrue), e && !this.isSimulated && e.preventDefault();
                    },
                    stopPropagation: function () {
                        var e = this.originalEvent;
                        (this.isPropagationStopped = returnTrue), e && !this.isSimulated && e.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var e = this.originalEvent;
                        (this.isImmediatePropagationStopped = returnTrue), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                    },
                }),
                jQuery.each(
                    {
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: !0,
                    },
                    jQuery.event.addProp
                ),
                jQuery.each({ focus: "focusin", blur: "focusout" }, function (type, delegateType) {
                    jQuery.event.special[type] = {
                        setup: function () {
                            return leverageNative(this, type, expectSync), !1;
                        },
                        trigger: function () {
                            return leverageNative(this, type), !0;
                        },
                        _default: function () {
                            return !0;
                        },
                        delegateType: delegateType,
                    };
                }),
                jQuery.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (orig, fix) {
                    jQuery.event.special[orig] = {
                        delegateType: fix,
                        bindType: fix,
                        handle: function (event) {
                            var ret,
                                target = this,
                                related = event.relatedTarget,
                                handleObj = event.handleObj;
                            return (related && (related === target || jQuery.contains(target, related))) || ((event.type = handleObj.origType), (ret = handleObj.handler.apply(this, arguments)), (event.type = fix)), ret;
                        },
                    };
                }),
                jQuery.fn.extend({
                    on: function (types, selector, data, fn) {
                        return on(this, types, selector, data, fn);
                    },
                    one: function (types, selector, data, fn) {
                        return on(this, types, selector, data, fn, 1);
                    },
                    off: function (types, selector, fn) {
                        var handleObj, type;
                        if (types && types.preventDefault && types.handleObj)
                            return (handleObj = types.handleObj), jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
                        if ("object" == typeof types) {
                            for (type in types) this.off(type, selector, types[type]);
                            return this;
                        }
                        return (
                            (!1 !== selector && "function" != typeof selector) || ((fn = selector), (selector = void 0)),
                            !1 === fn && (fn = returnFalse),
                            this.each(function () {
                                jQuery.event.remove(this, types, fn, selector);
                            })
                        );
                    },
                });
            var rnoInnerhtml = /<script|<style|<link/i,
                rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
                rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function manipulationTarget(elem, content) {
                return (nodeName(elem, "table") && nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") && jQuery(elem).children("tbody")[0]) || elem;
            }
            function disableScript(elem) {
                return (elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type), elem;
            }
            function restoreScript(elem) {
                return "true/" === (elem.type || "").slice(0, 5) ? (elem.type = elem.type.slice(5)) : elem.removeAttribute("type"), elem;
            }
            function cloneCopyEvent(src, dest) {
                var i, l, type, udataOld, udataCur, events;
                if (1 === dest.nodeType) {
                    if (dataPriv.hasData(src) && (events = dataPriv.get(src).events))
                        for (type in (dataPriv.remove(dest, "handle events"), events)) for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i]);
                    dataUser.hasData(src) && ((udataOld = dataUser.access(src)), (udataCur = jQuery.extend({}, udataOld)), dataUser.set(dest, udataCur));
                }
            }
            function fixInput(src, dest) {
                var nodeName = dest.nodeName.toLowerCase();
                "input" === nodeName && rcheckableType.test(src.type) ? (dest.checked = src.checked) : ("input" !== nodeName && "textarea" !== nodeName) || (dest.defaultValue = src.defaultValue);
            }
            function domManip(collection, args, callback, ignored) {
                args = flat(args);
                var fragment,
                    first,
                    scripts,
                    hasScripts,
                    node,
                    doc,
                    i = 0,
                    l = collection.length,
                    iNoClone = l - 1,
                    value = args[0],
                    valueIsFunction = isFunction(value);
                if (valueIsFunction || (l > 1 && "string" == typeof value && !support.checkClone && rchecked.test(value)))
                    return collection.each(function (index) {
                        var self = collection.eq(index);
                        valueIsFunction && (args[0] = value.call(this, index, self.html())), domManip(self, args, callback, ignored);
                    });
                if (l && ((first = (fragment = buildFragment(args, collection[0].ownerDocument, !1, collection, ignored)).firstChild), 1 === fragment.childNodes.length && (fragment = first), first || ignored)) {
                    for (hasScripts = (scripts = jQuery.map(getAll(fragment, "script"), disableScript)).length; i < l; i++)
                        (node = fragment), i !== iNoClone && ((node = jQuery.clone(node, !0, !0)), hasScripts && jQuery.merge(scripts, getAll(node, "script"))), callback.call(collection[i], node, i);
                    if (hasScripts)
                        for (doc = scripts[scripts.length - 1].ownerDocument, jQuery.map(scripts, restoreScript), i = 0; i < hasScripts; i++)
                            (node = scripts[i]),
                                rscriptType.test(node.type || "") &&
                                    !dataPriv.access(node, "globalEval") &&
                                    jQuery.contains(doc, node) &&
                                    (node.src && "module" !== (node.type || "").toLowerCase()
                                        ? jQuery._evalUrl && !node.noModule && jQuery._evalUrl(node.src, { nonce: node.nonce || node.getAttribute("nonce") }, doc)
                                        : DOMEval(node.textContent.replace(rcleanScript, ""), node, doc));
                }
                return collection;
            }
            function remove(elem, selector, keepData) {
                for (var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0; null != (node = nodes[i]); i++)
                    keepData || 1 !== node.nodeType || jQuery.cleanData(getAll(node)), node.parentNode && (keepData && isAttached(node) && setGlobalEval(getAll(node, "script")), node.parentNode.removeChild(node));
                return elem;
            }
            jQuery.extend({
                htmlPrefilter: function (html) {
                    return html;
                },
                clone: function (elem, dataAndEvents, deepDataAndEvents) {
                    var i,
                        l,
                        srcElements,
                        destElements,
                        clone = elem.cloneNode(!0),
                        inPage = isAttached(elem);
                    if (!(support.noCloneChecked || (1 !== elem.nodeType && 11 !== elem.nodeType) || jQuery.isXMLDoc(elem)))
                        for (destElements = getAll(clone), i = 0, l = (srcElements = getAll(elem)).length; i < l; i++) fixInput(srcElements[i], destElements[i]);
                    if (dataAndEvents)
                        if (deepDataAndEvents) for (srcElements = srcElements || getAll(elem), destElements = destElements || getAll(clone), i = 0, l = srcElements.length; i < l; i++) cloneCopyEvent(srcElements[i], destElements[i]);
                        else cloneCopyEvent(elem, clone);
                    return (destElements = getAll(clone, "script")).length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone;
                },
                cleanData: function (elems) {
                    for (var data, elem, type, special = jQuery.event.special, i = 0; void 0 !== (elem = elems[i]); i++)
                        if (acceptData(elem)) {
                            if ((data = elem[dataPriv.expando])) {
                                if (data.events) for (type in data.events) special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
                                elem[dataPriv.expando] = void 0;
                            }
                            elem[dataUser.expando] && (elem[dataUser.expando] = void 0);
                        }
                },
            }),
                jQuery.fn.extend({
                    detach: function (selector) {
                        return remove(this, selector, !0);
                    },
                    remove: function (selector) {
                        return remove(this, selector);
                    },
                    text: function (value) {
                        return access(
                            this,
                            function (value) {
                                return void 0 === value
                                    ? jQuery.text(this)
                                    : this.empty().each(function () {
                                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = value);
                                      });
                            },
                            null,
                            value,
                            arguments.length
                        );
                    },
                    append: function () {
                        return domManip(this, arguments, function (elem) {
                            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || manipulationTarget(this, elem).appendChild(elem);
                        });
                    },
                    prepend: function () {
                        return domManip(this, arguments, function (elem) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var target = manipulationTarget(this, elem);
                                target.insertBefore(elem, target.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return domManip(this, arguments, function (elem) {
                            this.parentNode && this.parentNode.insertBefore(elem, this);
                        });
                    },
                    after: function () {
                        return domManip(this, arguments, function (elem) {
                            this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling);
                        });
                    },
                    empty: function () {
                        for (var elem, i = 0; null != (elem = this[i]); i++) 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), (elem.textContent = ""));
                        return this;
                    },
                    clone: function (dataAndEvents, deepDataAndEvents) {
                        return (
                            (dataAndEvents = null != dataAndEvents && dataAndEvents),
                            (deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents),
                            this.map(function () {
                                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                            })
                        );
                    },
                    html: function (value) {
                        return access(
                            this,
                            function (value) {
                                var elem = this[0] || {},
                                    i = 0,
                                    l = this.length;
                                if (void 0 === value && 1 === elem.nodeType) return elem.innerHTML;
                                if ("string" == typeof value && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                                    value = jQuery.htmlPrefilter(value);
                                    try {
                                        for (; i < l; i++) 1 === (elem = this[i] || {}).nodeType && (jQuery.cleanData(getAll(elem, !1)), (elem.innerHTML = value));
                                        elem = 0;
                                    } catch (e) {}
                                }
                                elem && this.empty().append(value);
                            },
                            null,
                            value,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var ignored = [];
                        return domManip(
                            this,
                            arguments,
                            function (elem) {
                                var parent = this.parentNode;
                                jQuery.inArray(this, ignored) < 0 && (jQuery.cleanData(getAll(this)), parent && parent.replaceChild(elem, this));
                            },
                            ignored
                        );
                    },
                }),
                jQuery.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (name, original) {
                    jQuery.fn[name] = function (selector) {
                        for (var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0; i <= last; i++) (elems = i === last ? this : this.clone(!0)), jQuery(insert[i])[original](elems), push.apply(ret, elems.get());
                        return this.pushStack(ret);
                    };
                });
            var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
                getStyles = function (elem) {
                    var view = elem.ownerDocument.defaultView;
                    return (view && view.opener) || (view = window), view.getComputedStyle(elem);
                },
                swap = function (elem, options, callback) {
                    var ret,
                        name,
                        old = {};
                    for (name in options) (old[name] = elem.style[name]), (elem.style[name] = options[name]);
                    for (name in ((ret = callback.call(elem)), options)) elem.style[name] = old[name];
                    return ret;
                },
                rboxStyle = new RegExp(cssExpand.join("|"), "i");
            function curCSS(elem, name, computed) {
                var width,
                    minWidth,
                    maxWidth,
                    ret,
                    style = elem.style;
                return (
                    (computed = computed || getStyles(elem)) &&
                        ("" !== (ret = computed.getPropertyValue(name) || computed[name]) || isAttached(elem) || (ret = jQuery.style(elem, name)),
                        !support.pixelBoxStyles() &&
                            rnumnonpx.test(ret) &&
                            rboxStyle.test(name) &&
                            ((width = style.width),
                            (minWidth = style.minWidth),
                            (maxWidth = style.maxWidth),
                            (style.minWidth = style.maxWidth = style.width = ret),
                            (ret = computed.width),
                            (style.width = width),
                            (style.minWidth = minWidth),
                            (style.maxWidth = maxWidth))),
                    void 0 !== ret ? ret + "" : ret
                );
            }
            function addGetHookIf(conditionFn, hookFn) {
                return {
                    get: function () {
                        if (!conditionFn()) return (this.get = hookFn).apply(this, arguments);
                        delete this.get;
                    },
                };
            }
            !(function () {
                function computeStyleTests() {
                    if (div) {
                        (container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                            (div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                            documentElement.appendChild(container).appendChild(div);
                        var divStyle = window.getComputedStyle(div);
                        (pixelPositionVal = "1%" !== divStyle.top),
                            (reliableMarginLeftVal = 12 === roundPixelMeasures(divStyle.marginLeft)),
                            (div.style.right = "60%"),
                            (pixelBoxStylesVal = 36 === roundPixelMeasures(divStyle.right)),
                            (boxSizingReliableVal = 36 === roundPixelMeasures(divStyle.width)),
                            (div.style.position = "absolute"),
                            (scrollboxSizeVal = 12 === roundPixelMeasures(div.offsetWidth / 3)),
                            documentElement.removeChild(container),
                            (div = null);
                    }
                }
                function roundPixelMeasures(measure) {
                    return Math.round(parseFloat(measure));
                }
                var pixelPositionVal,
                    boxSizingReliableVal,
                    scrollboxSizeVal,
                    pixelBoxStylesVal,
                    reliableTrDimensionsVal,
                    reliableMarginLeftVal,
                    container = document.createElement("div"),
                    div = document.createElement("div");
                div.style &&
                    ((div.style.backgroundClip = "content-box"),
                    (div.cloneNode(!0).style.backgroundClip = ""),
                    (support.clearCloneStyle = "content-box" === div.style.backgroundClip),
                    jQuery.extend(support, {
                        boxSizingReliable: function () {
                            return computeStyleTests(), boxSizingReliableVal;
                        },
                        pixelBoxStyles: function () {
                            return computeStyleTests(), pixelBoxStylesVal;
                        },
                        pixelPosition: function () {
                            return computeStyleTests(), pixelPositionVal;
                        },
                        reliableMarginLeft: function () {
                            return computeStyleTests(), reliableMarginLeftVal;
                        },
                        scrollboxSize: function () {
                            return computeStyleTests(), scrollboxSizeVal;
                        },
                        reliableTrDimensions: function () {
                            var table, tr, trChild, trStyle;
                            return (
                                null == reliableTrDimensionsVal &&
                                    ((table = document.createElement("table")),
                                    (tr = document.createElement("tr")),
                                    (trChild = document.createElement("div")),
                                    (table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                                    (tr.style.cssText = "border:1px solid"),
                                    (tr.style.height = "1px"),
                                    (trChild.style.height = "9px"),
                                    (trChild.style.display = "block"),
                                    documentElement.appendChild(table).appendChild(tr).appendChild(trChild),
                                    (trStyle = window.getComputedStyle(tr)),
                                    (reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight),
                                    documentElement.removeChild(table)),
                                reliableTrDimensionsVal
                            );
                        },
                    }));
            })();
            var cssPrefixes = ["Webkit", "Moz", "ms"],
                emptyStyle = document.createElement("div").style,
                vendorProps = {};
            function finalPropName(name) {
                var final = jQuery.cssProps[name] || vendorProps[name];
                return (
                    final ||
                    (name in emptyStyle
                        ? name
                        : (vendorProps[name] =
                              (function (name) {
                                  for (var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length; i--; ) if ((name = cssPrefixes[i] + capName) in emptyStyle) return name;
                              })(name) || name))
                );
            }
            var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
                rcustomProp = /^--/,
                cssShow = { position: "absolute", visibility: "hidden", display: "block" },
                cssNormalTransform = { letterSpacing: "0", fontWeight: "400" };
            function setPositiveNumber(_elem, value, subtract) {
                var matches = rcssNum.exec(value);
                return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
            }
            function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
                var i = "width" === dimension ? 1 : 0,
                    extra = 0,
                    delta = 0;
                if (box === (isBorderBox ? "border" : "content")) return 0;
                for (; i < 4; i += 2)
                    "margin" === box && (delta += jQuery.css(elem, box + cssExpand[i], !0, styles)),
                        isBorderBox
                            ? ("content" === box && (delta -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)), "margin" !== box && (delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)))
                            : ((delta += jQuery.css(elem, "padding" + cssExpand[i], !0, styles)),
                              "padding" !== box ? (delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)) : (extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)));
                return !isBorderBox && computedVal >= 0 && (delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0), delta;
            }
            function getWidthOrHeight(elem, dimension, extra) {
                var styles = getStyles(elem),
                    isBorderBox = (!support.boxSizingReliable() || extra) && "border-box" === jQuery.css(elem, "boxSizing", !1, styles),
                    valueIsBorderBox = isBorderBox,
                    val = curCSS(elem, dimension, styles),
                    offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
                if (rnumnonpx.test(val)) {
                    if (!extra) return val;
                    val = "auto";
                }
                return (
                    ((!support.boxSizingReliable() && isBorderBox) || (!support.reliableTrDimensions() && nodeName(elem, "tr")) || "auto" === val || (!parseFloat(val) && "inline" === jQuery.css(elem, "display", !1, styles))) &&
                        elem.getClientRects().length &&
                        ((isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", !1, styles)), (valueIsBorderBox = offsetProp in elem) && (val = elem[offsetProp])),
                    (val = parseFloat(val) || 0) + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px"
                );
            }
            function Tween(elem, options, prop, end, easing) {
                return new Tween.prototype.init(elem, options, prop, end, easing);
            }
            jQuery.extend({
                cssHooks: {
                    opacity: {
                        get: function (elem, computed) {
                            if (computed) {
                                var ret = curCSS(elem, "opacity");
                                return "" === ret ? "1" : ret;
                            }
                        },
                    },
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                },
                cssProps: {},
                style: function (elem, name, value, extra) {
                    if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
                        var ret,
                            type,
                            hooks,
                            origName = camelCase(name),
                            isCustomProp = rcustomProp.test(name),
                            style = elem.style;
                        if ((isCustomProp || (name = finalPropName(origName)), (hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]), void 0 === value))
                            return hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, !1, extra)) ? ret : style[name];
                        "string" === (type = typeof value) && (ret = rcssNum.exec(value)) && ret[1] && ((value = adjustCSS(elem, name, ret)), (type = "number")),
                            null != value &&
                                value == value &&
                                ("number" !== type || isCustomProp || (value += (ret && ret[3]) || (jQuery.cssNumber[origName] ? "" : "px")),
                                support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background") || (style[name] = "inherit"),
                                (hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra))) || (isCustomProp ? style.setProperty(name, value) : (style[name] = value)));
                    }
                },
                css: function (elem, name, extra, styles) {
                    var val,
                        num,
                        hooks,
                        origName = camelCase(name);
                    return (
                        rcustomProp.test(name) || (name = finalPropName(origName)),
                        (hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]) && "get" in hooks && (val = hooks.get(elem, !0, extra)),
                        void 0 === val && (val = curCSS(elem, name, styles)),
                        "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]),
                        "" === extra || extra ? ((num = parseFloat(val)), !0 === extra || isFinite(num) ? num || 0 : val) : val
                    );
                },
            }),
                jQuery.each(["height", "width"], function (_i, dimension) {
                    jQuery.cssHooks[dimension] = {
                        get: function (elem, computed, extra) {
                            if (computed)
                                return !rdisplayswap.test(jQuery.css(elem, "display")) || (elem.getClientRects().length && elem.getBoundingClientRect().width)
                                    ? getWidthOrHeight(elem, dimension, extra)
                                    : swap(elem, cssShow, function () {
                                          return getWidthOrHeight(elem, dimension, extra);
                                      });
                        },
                        set: function (elem, value, extra) {
                            var matches,
                                styles = getStyles(elem),
                                scrollboxSizeBuggy = !support.scrollboxSize() && "absolute" === styles.position,
                                isBorderBox = (scrollboxSizeBuggy || extra) && "border-box" === jQuery.css(elem, "boxSizing", !1, styles),
                                subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                            return (
                                isBorderBox &&
                                    scrollboxSizeBuggy &&
                                    (subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", !1, styles) - 0.5)),
                                subtract && (matches = rcssNum.exec(value)) && "px" !== (matches[3] || "px") && ((elem.style[dimension] = value), (value = jQuery.css(elem, dimension))),
                                setPositiveNumber(0, value, subtract)
                            );
                        },
                    };
                }),
                (jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
                    if (computed)
                        return (
                            (parseFloat(curCSS(elem, "marginLeft")) ||
                                elem.getBoundingClientRect().left -
                                    swap(elem, { marginLeft: 0 }, function () {
                                        return elem.getBoundingClientRect().left;
                                    })) + "px"
                        );
                })),
                jQuery.each({ margin: "", padding: "", border: "Width" }, function (prefix, suffix) {
                    (jQuery.cssHooks[prefix + suffix] = {
                        expand: function (value) {
                            for (var i = 0, expanded = {}, parts = "string" == typeof value ? value.split(" ") : [value]; i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                            return expanded;
                        },
                    }),
                        "margin" !== prefix && (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber);
                }),
                jQuery.fn.extend({
                    css: function (name, value) {
                        return access(
                            this,
                            function (elem, name, value) {
                                var styles,
                                    len,
                                    map = {},
                                    i = 0;
                                if (Array.isArray(name)) {
                                    for (styles = getStyles(elem), len = name.length; i < len; i++) map[name[i]] = jQuery.css(elem, name[i], !1, styles);
                                    return map;
                                }
                                return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                            },
                            name,
                            value,
                            arguments.length > 1
                        );
                    },
                }),
                (jQuery.Tween = Tween),
                (Tween.prototype = {
                    constructor: Tween,
                    init: function (elem, options, prop, end, easing, unit) {
                        (this.elem = elem),
                            (this.prop = prop),
                            (this.easing = easing || jQuery.easing._default),
                            (this.options = options),
                            (this.start = this.now = this.cur()),
                            (this.end = end),
                            (this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px"));
                    },
                    cur: function () {
                        var hooks = Tween.propHooks[this.prop];
                        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
                    },
                    run: function (percent) {
                        var eased,
                            hooks = Tween.propHooks[this.prop];
                        return (
                            this.options.duration ? (this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration)) : (this.pos = eased = percent),
                            (this.now = (this.end - this.start) * eased + this.start),
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this),
                            this
                        );
                    },
                }),
                (Tween.prototype.init.prototype = Tween.prototype),
                (Tween.propHooks = {
                    _default: {
                        get: function (tween) {
                            var result;
                            return 1 !== tween.elem.nodeType || (null != tween.elem[tween.prop] && null == tween.elem.style[tween.prop])
                                ? tween.elem[tween.prop]
                                : (result = jQuery.css(tween.elem, tween.prop, "")) && "auto" !== result
                                ? result
                                : 0;
                        },
                        set: function (tween) {
                            jQuery.fx.step[tween.prop]
                                ? jQuery.fx.step[tween.prop](tween)
                                : 1 !== tween.elem.nodeType || (!jQuery.cssHooks[tween.prop] && null == tween.elem.style[finalPropName(tween.prop)])
                                ? (tween.elem[tween.prop] = tween.now)
                                : jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                        },
                    },
                }),
                (Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                    set: function (tween) {
                        tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now);
                    },
                }),
                (jQuery.easing = {
                    linear: function (p) {
                        return p;
                    },
                    swing: function (p) {
                        return 0.5 - Math.cos(p * Math.PI) / 2;
                    },
                    _default: "swing",
                }),
                (jQuery.fx = Tween.prototype.init),
                (jQuery.fx.step = {});
            var fxNow,
                inProgress,
                rfxtypes = /^(?:toggle|show|hide)$/,
                rrun = /queueHooks$/;
            function schedule() {
                inProgress && (!1 === document.hidden && window.requestAnimationFrame ? window.requestAnimationFrame(schedule) : window.setTimeout(schedule, jQuery.fx.interval), jQuery.fx.tick());
            }
            function createFxNow() {
                return (
                    window.setTimeout(function () {
                        fxNow = void 0;
                    }),
                    (fxNow = Date.now())
                );
            }
            function genFx(type, includeWidth) {
                var which,
                    i = 0,
                    attrs = { height: type };
                for (includeWidth = includeWidth ? 1 : 0; i < 4; i += 2 - includeWidth) attrs["margin" + (which = cssExpand[i])] = attrs["padding" + which] = type;
                return includeWidth && (attrs.opacity = attrs.width = type), attrs;
            }
            function createTween(value, prop, animation) {
                for (var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length; index < length; index++)
                    if ((tween = collection[index].call(animation, prop, value))) return tween;
            }
            function Animation(elem, properties, options) {
                var result,
                    stopped,
                    index = 0,
                    length = Animation.prefilters.length,
                    deferred = jQuery.Deferred().always(function () {
                        delete tick.elem;
                    }),
                    tick = function () {
                        if (stopped) return !1;
                        for (
                            var currentTime = fxNow || createFxNow(),
                                remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
                                percent = 1 - (remaining / animation.duration || 0),
                                index = 0,
                                length = animation.tweens.length;
                            index < length;
                            index++
                        )
                            animation.tweens[index].run(percent);
                        return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length ? remaining : (length || deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation]), !1);
                    },
                    animation = deferred.promise({
                        elem: elem,
                        props: jQuery.extend({}, properties),
                        opts: jQuery.extend(!0, { specialEasing: {}, easing: jQuery.easing._default }, options),
                        originalProperties: properties,
                        originalOptions: options,
                        startTime: fxNow || createFxNow(),
                        duration: options.duration,
                        tweens: [],
                        createTween: function (prop, end) {
                            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                            return animation.tweens.push(tween), tween;
                        },
                        stop: function (gotoEnd) {
                            var index = 0,
                                length = gotoEnd ? animation.tweens.length : 0;
                            if (stopped) return this;
                            for (stopped = !0; index < length; index++) animation.tweens[index].run(1);
                            return gotoEnd ? (deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation, gotoEnd])) : deferred.rejectWith(elem, [animation, gotoEnd]), this;
                        },
                    }),
                    props = animation.props;
                for (
                    !(function (props, specialEasing) {
                        var index, name, easing, value, hooks;
                        for (index in props)
                            if (
                                ((easing = specialEasing[(name = camelCase(index))]),
                                (value = props[index]),
                                Array.isArray(value) && ((easing = value[1]), (value = props[index] = value[0])),
                                index !== name && ((props[name] = value), delete props[index]),
                                (hooks = jQuery.cssHooks[name]) && ("expand" in hooks))
                            )
                                for (index in ((value = hooks.expand(value)), delete props[name], value)) (index in props) || ((props[index] = value[index]), (specialEasing[index] = easing));
                            else specialEasing[name] = easing;
                    })(props, animation.opts.specialEasing);
                    index < length;
                    index++
                )
                    if ((result = Animation.prefilters[index].call(animation, elem, props, animation.opts)))
                        return isFunction(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result)), result;
                return (
                    jQuery.map(props, createTween, animation),
                    isFunction(animation.opts.start) && animation.opts.start.call(elem, animation),
                    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always),
                    jQuery.fx.timer(jQuery.extend(tick, { elem: elem, anim: animation, queue: animation.opts.queue })),
                    animation
                );
            }
            (jQuery.Animation = jQuery.extend(Animation, {
                tweeners: {
                    "*": [
                        function (prop, value) {
                            var tween = this.createTween(prop, value);
                            return adjustCSS(tween.elem, prop, rcssNum.exec(value), tween), tween;
                        },
                    ],
                },
                tweener: function (props, callback) {
                    isFunction(props) ? ((callback = props), (props = ["*"])) : (props = props.match(rnothtmlwhite));
                    for (var prop, index = 0, length = props.length; index < length; index++) (prop = props[index]), (Animation.tweeners[prop] = Animation.tweeners[prop] || []), Animation.tweeners[prop].unshift(callback);
                },
                prefilters: [
                    function (elem, props, opts) {
                        var prop,
                            value,
                            toggle,
                            hooks,
                            oldfire,
                            propTween,
                            restoreDisplay,
                            display,
                            isBox = "width" in props || "height" in props,
                            anim = this,
                            orig = {},
                            style = elem.style,
                            hidden = elem.nodeType && isHiddenWithinTree(elem),
                            dataShow = dataPriv.get(elem, "fxshow");
                        for (prop in (opts.queue ||
                            (null == (hooks = jQuery._queueHooks(elem, "fx")).unqueued &&
                                ((hooks.unqueued = 0),
                                (oldfire = hooks.empty.fire),
                                (hooks.empty.fire = function () {
                                    hooks.unqueued || oldfire();
                                })),
                            hooks.unqueued++,
                            anim.always(function () {
                                anim.always(function () {
                                    hooks.unqueued--, jQuery.queue(elem, "fx").length || hooks.empty.fire();
                                });
                            })),
                        props))
                            if (((value = props[prop]), rfxtypes.test(value))) {
                                if ((delete props[prop], (toggle = toggle || "toggle" === value), value === (hidden ? "hide" : "show"))) {
                                    if ("show" !== value || !dataShow || void 0 === dataShow[prop]) continue;
                                    hidden = !0;
                                }
                                orig[prop] = (dataShow && dataShow[prop]) || jQuery.style(elem, prop);
                            }
                        if ((propTween = !jQuery.isEmptyObject(props)) || !jQuery.isEmptyObject(orig))
                            for (prop in (isBox &&
                                1 === elem.nodeType &&
                                ((opts.overflow = [style.overflow, style.overflowX, style.overflowY]),
                                null == (restoreDisplay = dataShow && dataShow.display) && (restoreDisplay = dataPriv.get(elem, "display")),
                                "none" === (display = jQuery.css(elem, "display")) &&
                                    (restoreDisplay ? (display = restoreDisplay) : (showHide([elem], !0), (restoreDisplay = elem.style.display || restoreDisplay), (display = jQuery.css(elem, "display")), showHide([elem]))),
                                ("inline" === display || ("inline-block" === display && null != restoreDisplay)) &&
                                    "none" === jQuery.css(elem, "float") &&
                                    (propTween ||
                                        (anim.done(function () {
                                            style.display = restoreDisplay;
                                        }),
                                        null == restoreDisplay && ((display = style.display), (restoreDisplay = "none" === display ? "" : display))),
                                    (style.display = "inline-block"))),
                            opts.overflow &&
                                ((style.overflow = "hidden"),
                                anim.always(function () {
                                    (style.overflow = opts.overflow[0]), (style.overflowX = opts.overflow[1]), (style.overflowY = opts.overflow[2]);
                                })),
                            (propTween = !1),
                            orig))
                                propTween ||
                                    (dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : (dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay })),
                                    toggle && (dataShow.hidden = !hidden),
                                    hidden && showHide([elem], !0),
                                    anim.done(function () {
                                        for (prop in (hidden || showHide([elem]), dataPriv.remove(elem, "fxshow"), orig)) jQuery.style(elem, prop, orig[prop]);
                                    })),
                                    (propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim)),
                                    prop in dataShow || ((dataShow[prop] = propTween.start), hidden && ((propTween.end = propTween.start), (propTween.start = 0)));
                    },
                ],
                prefilter: function (callback, prepend) {
                    prepend ? Animation.prefilters.unshift(callback) : Animation.prefilters.push(callback);
                },
            })),
                (jQuery.speed = function (speed, easing, fn) {
                    var opt =
                        speed && "object" == typeof speed
                            ? jQuery.extend({}, speed)
                            : { complete: fn || (!fn && easing) || (isFunction(speed) && speed), duration: speed, easing: (fn && easing) || (easing && !isFunction(easing) && easing) };
                    return (
                        jQuery.fx.off ? (opt.duration = 0) : "number" != typeof opt.duration && (opt.duration in jQuery.fx.speeds ? (opt.duration = jQuery.fx.speeds[opt.duration]) : (opt.duration = jQuery.fx.speeds._default)),
                        (null != opt.queue && !0 !== opt.queue) || (opt.queue = "fx"),
                        (opt.old = opt.complete),
                        (opt.complete = function () {
                            isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue);
                        }),
                        opt
                    );
                }),
                jQuery.fn.extend({
                    fadeTo: function (speed, to, easing, callback) {
                        return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
                    },
                    animate: function (prop, speed, easing, callback) {
                        var empty = jQuery.isEmptyObject(prop),
                            optall = jQuery.speed(speed, easing, callback),
                            doAnimation = function () {
                                var anim = Animation(this, jQuery.extend({}, prop), optall);
                                (empty || dataPriv.get(this, "finish")) && anim.stop(!0);
                            };
                        return (doAnimation.finish = doAnimation), empty || !1 === optall.queue ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
                    },
                    stop: function (type, clearQueue, gotoEnd) {
                        var stopQueue = function (hooks) {
                            var stop = hooks.stop;
                            delete hooks.stop, stop(gotoEnd);
                        };
                        return (
                            "string" != typeof type && ((gotoEnd = clearQueue), (clearQueue = type), (type = void 0)),
                            clearQueue && this.queue(type || "fx", []),
                            this.each(function () {
                                var dequeue = !0,
                                    index = null != type && type + "queueHooks",
                                    timers = jQuery.timers,
                                    data = dataPriv.get(this);
                                if (index) data[index] && data[index].stop && stopQueue(data[index]);
                                else for (index in data) data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
                                for (index = timers.length; index--; ) timers[index].elem !== this || (null != type && timers[index].queue !== type) || (timers[index].anim.stop(gotoEnd), (dequeue = !1), timers.splice(index, 1));
                                (!dequeue && gotoEnd) || jQuery.dequeue(this, type);
                            })
                        );
                    },
                    finish: function (type) {
                        return (
                            !1 !== type && (type = type || "fx"),
                            this.each(function () {
                                var index,
                                    data = dataPriv.get(this),
                                    queue = data[type + "queue"],
                                    hooks = data[type + "queueHooks"],
                                    timers = jQuery.timers,
                                    length = queue ? queue.length : 0;
                                for (data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), index = timers.length; index--; )
                                    timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), timers.splice(index, 1));
                                for (index = 0; index < length; index++) queue[index] && queue[index].finish && queue[index].finish.call(this);
                                delete data.finish;
                            })
                        );
                    },
                }),
                jQuery.each(["toggle", "show", "hide"], function (_i, name) {
                    var cssFn = jQuery.fn[name];
                    jQuery.fn[name] = function (speed, easing, callback) {
                        return null == speed || "boolean" == typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback);
                    };
                }),
                jQuery.each({ slideDown: genFx("show"), slideUp: genFx("hide"), slideToggle: genFx("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (name, props) {
                    jQuery.fn[name] = function (speed, easing, callback) {
                        return this.animate(props, speed, easing, callback);
                    };
                }),
                (jQuery.timers = []),
                (jQuery.fx.tick = function () {
                    var timer,
                        i = 0,
                        timers = jQuery.timers;
                    for (fxNow = Date.now(); i < timers.length; i++) (timer = timers[i])() || timers[i] !== timer || timers.splice(i--, 1);
                    timers.length || jQuery.fx.stop(), (fxNow = void 0);
                }),
                (jQuery.fx.timer = function (timer) {
                    jQuery.timers.push(timer), jQuery.fx.start();
                }),
                (jQuery.fx.interval = 13),
                (jQuery.fx.start = function () {
                    inProgress || ((inProgress = !0), schedule());
                }),
                (jQuery.fx.stop = function () {
                    inProgress = null;
                }),
                (jQuery.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (jQuery.fn.delay = function (time, type) {
                    return (
                        (time = (jQuery.fx && jQuery.fx.speeds[time]) || time),
                        (type = type || "fx"),
                        this.queue(type, function (next, hooks) {
                            var timeout = window.setTimeout(next, time);
                            hooks.stop = function () {
                                window.clearTimeout(timeout);
                            };
                        })
                    );
                }),
                (function () {
                    var input = document.createElement("input"),
                        opt = document.createElement("select").appendChild(document.createElement("option"));
                    (input.type = "checkbox"),
                        (support.checkOn = "" !== input.value),
                        (support.optSelected = opt.selected),
                        ((input = document.createElement("input")).value = "t"),
                        (input.type = "radio"),
                        (support.radioValue = "t" === input.value);
                })();
            var boolHook,
                attrHandle = jQuery.expr.attrHandle;
            jQuery.fn.extend({
                attr: function (name, value) {
                    return access(this, jQuery.attr, name, value, arguments.length > 1);
                },
                removeAttr: function (name) {
                    return this.each(function () {
                        jQuery.removeAttr(this, name);
                    });
                },
            }),
                jQuery.extend({
                    attr: function (elem, name, value) {
                        var ret,
                            hooks,
                            nType = elem.nodeType;
                        if (3 !== nType && 8 !== nType && 2 !== nType)
                            return void 0 === elem.getAttribute
                                ? jQuery.prop(elem, name, value)
                                : ((1 === nType && jQuery.isXMLDoc(elem)) || (hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)),
                                  void 0 !== value
                                      ? null === value
                                          ? void jQuery.removeAttr(elem, name)
                                          : hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name))
                                          ? ret
                                          : (elem.setAttribute(name, value + ""), value)
                                      : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name))
                                      ? ret
                                      : null == (ret = jQuery.find.attr(elem, name))
                                      ? void 0
                                      : ret);
                    },
                    attrHooks: {
                        type: {
                            set: function (elem, value) {
                                if (!support.radioValue && "radio" === value && nodeName(elem, "input")) {
                                    var val = elem.value;
                                    return elem.setAttribute("type", value), val && (elem.value = val), value;
                                }
                            },
                        },
                    },
                    removeAttr: function (elem, value) {
                        var name,
                            i = 0,
                            attrNames = value && value.match(rnothtmlwhite);
                        if (attrNames && 1 === elem.nodeType) for (; (name = attrNames[i++]); ) elem.removeAttribute(name);
                    },
                }),
                (boolHook = {
                    set: function (elem, value, name) {
                        return !1 === value ? jQuery.removeAttr(elem, name) : elem.setAttribute(name, name), name;
                    },
                }),
                jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
                    var getter = attrHandle[name] || jQuery.find.attr;
                    attrHandle[name] = function (elem, name, isXML) {
                        var ret,
                            handle,
                            lowercaseName = name.toLowerCase();
                        return isXML || ((handle = attrHandle[lowercaseName]), (attrHandle[lowercaseName] = ret), (ret = null != getter(elem, name, isXML) ? lowercaseName : null), (attrHandle[lowercaseName] = handle)), ret;
                    };
                });
            var rfocusable = /^(?:input|select|textarea|button)$/i,
                rclickable = /^(?:a|area)$/i;
            function stripAndCollapse(value) {
                return (value.match(rnothtmlwhite) || []).join(" ");
            }
            function getClass(elem) {
                return (elem.getAttribute && elem.getAttribute("class")) || "";
            }
            function classesToArray(value) {
                return Array.isArray(value) ? value : ("string" == typeof value && value.match(rnothtmlwhite)) || [];
            }
            jQuery.fn.extend({
                prop: function (name, value) {
                    return access(this, jQuery.prop, name, value, arguments.length > 1);
                },
                removeProp: function (name) {
                    return this.each(function () {
                        delete this[jQuery.propFix[name] || name];
                    });
                },
            }),
                jQuery.extend({
                    prop: function (elem, name, value) {
                        var ret,
                            hooks,
                            nType = elem.nodeType;
                        if (3 !== nType && 8 !== nType && 2 !== nType)
                            return (
                                (1 === nType && jQuery.isXMLDoc(elem)) || ((name = jQuery.propFix[name] || name), (hooks = jQuery.propHooks[name])),
                                void 0 !== value
                                    ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name))
                                        ? ret
                                        : (elem[name] = value)
                                    : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name))
                                    ? ret
                                    : elem[name]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (elem) {
                                var tabindex = jQuery.find.attr(elem, "tabindex");
                                return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || (rclickable.test(elem.nodeName) && elem.href) ? 0 : -1;
                            },
                        },
                    },
                    propFix: { for: "htmlFor", class: "className" },
                }),
                support.optSelected ||
                    (jQuery.propHooks.selected = {
                        get: function (elem) {
                            var parent = elem.parentNode;
                            return parent && parent.parentNode && parent.parentNode.selectedIndex, null;
                        },
                        set: function (elem) {
                            var parent = elem.parentNode;
                            parent && (parent.selectedIndex, parent.parentNode && parent.parentNode.selectedIndex);
                        },
                    }),
                jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    jQuery.propFix[this.toLowerCase()] = this;
                }),
                jQuery.fn.extend({
                    addClass: function (value) {
                        var classes,
                            elem,
                            cur,
                            curValue,
                            clazz,
                            j,
                            finalValue,
                            i = 0;
                        if (isFunction(value))
                            return this.each(function (j) {
                                jQuery(this).addClass(value.call(this, j, getClass(this)));
                            });
                        if ((classes = classesToArray(value)).length)
                            for (; (elem = this[i++]); )
                                if (((curValue = getClass(elem)), (cur = 1 === elem.nodeType && " " + stripAndCollapse(curValue) + " "))) {
                                    for (j = 0; (clazz = classes[j++]); ) cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
                                    curValue !== (finalValue = stripAndCollapse(cur)) && elem.setAttribute("class", finalValue);
                                }
                        return this;
                    },
                    removeClass: function (value) {
                        var classes,
                            elem,
                            cur,
                            curValue,
                            clazz,
                            j,
                            finalValue,
                            i = 0;
                        if (isFunction(value))
                            return this.each(function (j) {
                                jQuery(this).removeClass(value.call(this, j, getClass(this)));
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if ((classes = classesToArray(value)).length)
                            for (; (elem = this[i++]); )
                                if (((curValue = getClass(elem)), (cur = 1 === elem.nodeType && " " + stripAndCollapse(curValue) + " "))) {
                                    for (j = 0; (clazz = classes[j++]); ) for (; cur.indexOf(" " + clazz + " ") > -1; ) cur = cur.replace(" " + clazz + " ", " ");
                                    curValue !== (finalValue = stripAndCollapse(cur)) && elem.setAttribute("class", finalValue);
                                }
                        return this;
                    },
                    toggleClass: function (value, stateVal) {
                        var type = typeof value,
                            isValidValue = "string" === type || Array.isArray(value);
                        return "boolean" == typeof stateVal && isValidValue
                            ? stateVal
                                ? this.addClass(value)
                                : this.removeClass(value)
                            : isFunction(value)
                            ? this.each(function (i) {
                                  jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                              })
                            : this.each(function () {
                                  var className, i, self, classNames;
                                  if (isValidValue) for (i = 0, self = jQuery(this), classNames = classesToArray(value); (className = classNames[i++]); ) self.hasClass(className) ? self.removeClass(className) : self.addClass(className);
                                  else
                                      (void 0 !== value && "boolean" !== type) ||
                                          ((className = getClass(this)) && dataPriv.set(this, "__className__", className),
                                          this.setAttribute && this.setAttribute("class", className || !1 === value ? "" : dataPriv.get(this, "__className__") || ""));
                              });
                    },
                    hasClass: function (selector) {
                        var className,
                            elem,
                            i = 0;
                        for (className = " " + selector + " "; (elem = this[i++]); ) if (1 === elem.nodeType && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return !0;
                        return !1;
                    },
                });
            var rreturn = /\r/g;
            jQuery.fn.extend({
                val: function (value) {
                    var hooks,
                        ret,
                        valueIsFunction,
                        elem = this[0];
                    return arguments.length
                        ? ((valueIsFunction = isFunction(value)),
                          this.each(function (i) {
                              var val;
                              1 === this.nodeType &&
                                  (null == (val = valueIsFunction ? value.call(this, i, jQuery(this).val()) : value)
                                      ? (val = "")
                                      : "number" == typeof val
                                      ? (val += "")
                                      : Array.isArray(val) &&
                                        (val = jQuery.map(val, function (value) {
                                            return null == value ? "" : value + "";
                                        })),
                                  ((hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) && "set" in hooks && void 0 !== hooks.set(this, val, "value")) || (this.value = val));
                          }))
                        : elem
                        ? (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()]) && "get" in hooks && void 0 !== (ret = hooks.get(elem, "value"))
                            ? ret
                            : "string" == typeof (ret = elem.value)
                            ? ret.replace(rreturn, "")
                            : null == ret
                            ? ""
                            : ret
                        : void 0;
                },
            }),
                jQuery.extend({
                    valHooks: {
                        option: {
                            get: function (elem) {
                                var val = jQuery.find.attr(elem, "value");
                                return null != val ? val : stripAndCollapse(jQuery.text(elem));
                            },
                        },
                        select: {
                            get: function (elem) {
                                var value,
                                    option,
                                    i,
                                    options = elem.options,
                                    index = elem.selectedIndex,
                                    one = "select-one" === elem.type,
                                    values = one ? null : [],
                                    max = one ? index + 1 : options.length;
                                for (i = index < 0 ? max : one ? index : 0; i < max; i++)
                                    if (((option = options[i]).selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                                        if (((value = jQuery(option).val()), one)) return value;
                                        values.push(value);
                                    }
                                return values;
                            },
                            set: function (elem, value) {
                                for (var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length; i--; )
                                    ((option = options[i]).selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) && (optionSet = !0);
                                return optionSet || (elem.selectedIndex = -1), values;
                            },
                        },
                    },
                }),
                jQuery.each(["radio", "checkbox"], function () {
                    (jQuery.valHooks[this] = {
                        set: function (elem, value) {
                            if (Array.isArray(value)) return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
                        },
                    }),
                        support.checkOn ||
                            (jQuery.valHooks[this].get = function (elem) {
                                return null === elem.getAttribute("value") ? "on" : elem.value;
                            });
                }),
                (support.focusin = "onfocusin" in window);
            var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
                stopPropagationCallback = function (e) {
                    e.stopPropagation();
                };
            jQuery.extend(jQuery.event, {
                trigger: function (event, data, elem, onlyHandlers) {
                    var i,
                        cur,
                        tmp,
                        bubbleType,
                        ontype,
                        handle,
                        special,
                        lastElement,
                        eventPath = [elem || document],
                        type = hasOwn.call(event, "type") ? event.type : event,
                        namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                    if (
                        ((cur = lastElement = tmp = elem = elem || document),
                        3 !== elem.nodeType &&
                            8 !== elem.nodeType &&
                            !rfocusMorph.test(type + jQuery.event.triggered) &&
                            (type.indexOf(".") > -1 && ((namespaces = type.split(".")), (type = namespaces.shift()), namespaces.sort()),
                            (ontype = type.indexOf(":") < 0 && "on" + type),
                            ((event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event)).isTrigger = onlyHandlers ? 2 : 3),
                            (event.namespace = namespaces.join(".")),
                            (event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                            (event.result = void 0),
                            event.target || (event.target = elem),
                            (data = null == data ? [event] : jQuery.makeArray(data, [event])),
                            (special = jQuery.event.special[type] || {}),
                            onlyHandlers || !special.trigger || !1 !== special.trigger.apply(elem, data)))
                    ) {
                        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                            for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode) eventPath.push(cur), (tmp = cur);
                            tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                        }
                        for (i = 0; (cur = eventPath[i++]) && !event.isPropagationStopped(); )
                            (lastElement = cur),
                                (event.type = i > 1 ? bubbleType : special.bindType || type),
                                (handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle")) && handle.apply(cur, data),
                                (handle = ontype && cur[ontype]) && handle.apply && acceptData(cur) && ((event.result = handle.apply(cur, data)), !1 === event.result && event.preventDefault());
                        return (
                            (event.type = type),
                            onlyHandlers ||
                                event.isDefaultPrevented() ||
                                (special._default && !1 !== special._default.apply(eventPath.pop(), data)) ||
                                !acceptData(elem) ||
                                (ontype &&
                                    isFunction(elem[type]) &&
                                    !isWindow(elem) &&
                                    ((tmp = elem[ontype]) && (elem[ontype] = null),
                                    (jQuery.event.triggered = type),
                                    event.isPropagationStopped() && lastElement.addEventListener(type, stopPropagationCallback),
                                    elem[type](),
                                    event.isPropagationStopped() && lastElement.removeEventListener(type, stopPropagationCallback),
                                    (jQuery.event.triggered = void 0),
                                    tmp && (elem[ontype] = tmp))),
                            event.result
                        );
                    }
                },
                simulate: function (type, elem, event) {
                    var e = jQuery.extend(new jQuery.Event(), event, { type: type, isSimulated: !0 });
                    jQuery.event.trigger(e, null, elem);
                },
            }),
                jQuery.fn.extend({
                    trigger: function (type, data) {
                        return this.each(function () {
                            jQuery.event.trigger(type, data, this);
                        });
                    },
                    triggerHandler: function (type, data) {
                        var elem = this[0];
                        if (elem) return jQuery.event.trigger(type, data, elem, !0);
                    },
                }),
                support.focusin ||
                    jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {
                        var handler = function (event) {
                            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
                        };
                        jQuery.event.special[fix] = {
                            setup: function () {
                                var doc = this.ownerDocument || this.document || this,
                                    attaches = dataPriv.access(doc, fix);
                                attaches || doc.addEventListener(orig, handler, !0), dataPriv.access(doc, fix, (attaches || 0) + 1);
                            },
                            teardown: function () {
                                var doc = this.ownerDocument || this.document || this,
                                    attaches = dataPriv.access(doc, fix) - 1;
                                attaches ? dataPriv.access(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0), dataPriv.remove(doc, fix));
                            },
                        };
                    });
            var location = window.location,
                nonce = { guid: Date.now() },
                rquery = /\?/;
            jQuery.parseXML = function (data) {
                var xml, parserErrorElem;
                if (!data || "string" != typeof data) return null;
                try {
                    xml = new window.DOMParser().parseFromString(data, "text/xml");
                } catch (e) {}
                return (
                    (parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0]),
                    (xml && !parserErrorElem) ||
                        jQuery.error(
                            "Invalid XML: " +
                                (parserErrorElem
                                    ? jQuery
                                          .map(parserErrorElem.childNodes, function (el) {
                                              return el.textContent;
                                          })
                                          .join("\n")
                                    : data)
                        ),
                    xml
                );
            };
            var rbracket = /\[\]$/,
                rCRLF = /\r?\n/g,
                rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
                rsubmittable = /^(?:input|select|textarea|keygen)/i;
            function buildParams(prefix, obj, traditional, add) {
                var name;
                if (Array.isArray(obj))
                    jQuery.each(obj, function (i, v) {
                        traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + ("object" == typeof v && null != v ? i : "") + "]", v, traditional, add);
                    });
                else if (traditional || "object" !== toType(obj)) add(prefix, obj);
                else for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
            (jQuery.param = function (a, traditional) {
                var prefix,
                    s = [],
                    add = function (key, valueOrFunction) {
                        var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
                        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(null == value ? "" : value);
                    };
                if (null == a) return "";
                if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a)))
                    jQuery.each(a, function () {
                        add(this.name, this.value);
                    });
                else for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
                return s.join("&");
            }),
                jQuery.fn.extend({
                    serialize: function () {
                        return jQuery.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var elements = jQuery.prop(this, "elements");
                            return elements ? jQuery.makeArray(elements) : this;
                        })
                            .filter(function () {
                                var type = this.type;
                                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
                            })
                            .map(function (_i, elem) {
                                var val = jQuery(this).val();
                                return null == val
                                    ? null
                                    : Array.isArray(val)
                                    ? jQuery.map(val, function (val) {
                                          return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
                                      })
                                    : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
                            })
                            .get();
                    },
                });
            var r20 = /%20/g,
                rhash = /#.*$/,
                rantiCache = /([?&])_=[^&]*/,
                rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                rnoContent = /^(?:GET|HEAD)$/,
                rprotocol = /^\/\//,
                prefilters = {},
                transports = {},
                allTypes = "*/".concat("*"),
                originAnchor = document.createElement("a");
            function addToPrefiltersOrTransports(structure) {
                return function (dataTypeExpression, func) {
                    "string" != typeof dataTypeExpression && ((func = dataTypeExpression), (dataTypeExpression = "*"));
                    var dataType,
                        i = 0,
                        dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
                    if (isFunction(func))
                        for (; (dataType = dataTypes[i++]); )
                            "+" === dataType[0] ? ((dataType = dataType.slice(1) || "*"), (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func);
                };
            }
            function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
                var inspected = {},
                    seekingTransport = structure === transports;
                function inspect(dataType) {
                    var selected;
                    return (
                        (inspected[dataType] = !0),
                        jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
                            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                            return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport]
                                ? seekingTransport
                                    ? !(selected = dataTypeOrTransport)
                                    : void 0
                                : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), !1);
                        }),
                        selected
                    );
                }
                return inspect(options.dataTypes[0]) || (!inspected["*"] && inspect("*"));
            }
            function ajaxExtend(target, src) {
                var key,
                    deep,
                    flatOptions = jQuery.ajaxSettings.flatOptions || {};
                for (key in src) void 0 !== src[key] && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]);
                return deep && jQuery.extend(!0, target, deep), target;
            }
            (originAnchor.href = location.href),
                jQuery.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: location.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(location.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: { "*": allTypes, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": jQuery.parseXML },
                        flatOptions: { url: !0, context: !0 },
                    },
                    ajaxSetup: function (target, settings) {
                        return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
                    },
                    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                    ajaxTransport: addToPrefiltersOrTransports(transports),
                    ajax: function (url, options) {
                        "object" == typeof url && ((options = url), (url = void 0)), (options = options || {});
                        var transport,
                            cacheURL,
                            responseHeadersString,
                            responseHeaders,
                            timeoutTimer,
                            urlAnchor,
                            completed,
                            fireGlobals,
                            i,
                            uncached,
                            s = jQuery.ajaxSetup({}, options),
                            callbackContext = s.context || s,
                            globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
                            deferred = jQuery.Deferred(),
                            completeDeferred = jQuery.Callbacks("once memory"),
                            statusCode = s.statusCode || {},
                            requestHeaders = {},
                            requestHeadersNames = {},
                            strAbort = "canceled",
                            jqXHR = {
                                readyState: 0,
                                getResponseHeader: function (key) {
                                    var match;
                                    if (completed) {
                                        if (!responseHeaders)
                                            for (responseHeaders = {}; (match = rheaders.exec(responseHeadersString)); ) responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                                        match = responseHeaders[key.toLowerCase() + " "];
                                    }
                                    return null == match ? null : match.join(", ");
                                },
                                getAllResponseHeaders: function () {
                                    return completed ? responseHeadersString : null;
                                },
                                setRequestHeader: function (name, value) {
                                    return null == completed && ((name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name), (requestHeaders[name] = value)), this;
                                },
                                overrideMimeType: function (type) {
                                    return null == completed && (s.mimeType = type), this;
                                },
                                statusCode: function (map) {
                                    var code;
                                    if (map)
                                        if (completed) jqXHR.always(map[jqXHR.status]);
                                        else for (code in map) statusCode[code] = [statusCode[code], map[code]];
                                    return this;
                                },
                                abort: function (statusText) {
                                    var finalText = statusText || strAbort;
                                    return transport && transport.abort(finalText), done(0, finalText), this;
                                },
                            };
                        if (
                            (deferred.promise(jqXHR),
                            (s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//")),
                            (s.type = options.method || options.type || s.method || s.type),
                            (s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]),
                            null == s.crossDomain)
                        ) {
                            urlAnchor = document.createElement("a");
                            try {
                                (urlAnchor.href = s.url), (urlAnchor.href = urlAnchor.href), (s.crossDomain = originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host);
                            } catch (e) {
                                s.crossDomain = !0;
                            }
                        }
                        if ((s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), completed)) return jqXHR;
                        for (i in ((fireGlobals = jQuery.event && s.global) && 0 == jQuery.active++ && jQuery.event.trigger("ajaxStart"),
                        (s.type = s.type.toUpperCase()),
                        (s.hasContent = !rnoContent.test(s.type)),
                        (cacheURL = s.url.replace(rhash, "")),
                        s.hasContent
                            ? s.data && s.processData && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && (s.data = s.data.replace(r20, "+"))
                            : ((uncached = s.url.slice(cacheURL.length)),
                              s.data && (s.processData || "string" == typeof s.data) && ((cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data), delete s.data),
                              !1 === s.cache && ((cacheURL = cacheURL.replace(rantiCache, "$1")), (uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached)),
                              (s.url = cacheURL + uncached)),
                        s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])),
                        ((s.data && s.hasContent && !1 !== s.contentType) || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType),
                        jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]),
                        s.headers))
                            jqXHR.setRequestHeader(i, s.headers[i]);
                        if (s.beforeSend && (!1 === s.beforeSend.call(callbackContext, jqXHR, s) || completed)) return jqXHR.abort();
                        if (((strAbort = "abort"), completeDeferred.add(s.complete), jqXHR.done(s.success), jqXHR.fail(s.error), (transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)))) {
                            if (((jqXHR.readyState = 1), fireGlobals && globalEventContext.trigger("ajaxSend", [jqXHR, s]), completed)) return jqXHR;
                            s.async &&
                                s.timeout > 0 &&
                                (timeoutTimer = window.setTimeout(function () {
                                    jqXHR.abort("timeout");
                                }, s.timeout));
                            try {
                                (completed = !1), transport.send(requestHeaders, done);
                            } catch (e) {
                                if (completed) throw e;
                                done(-1, e);
                            }
                        } else done(-1, "No Transport");
                        function done(status, nativeStatusText, responses, headers) {
                            var isSuccess,
                                success,
                                error,
                                response,
                                modified,
                                statusText = nativeStatusText;
                            completed ||
                                ((completed = !0),
                                timeoutTimer && window.clearTimeout(timeoutTimer),
                                (transport = void 0),
                                (responseHeadersString = headers || ""),
                                (jqXHR.readyState = status > 0 ? 4 : 0),
                                (isSuccess = (status >= 200 && status < 300) || 304 === status),
                                responses &&
                                    (response = (function (s, jqXHR, responses) {
                                        for (var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes; "*" === dataTypes[0]; )
                                            dataTypes.shift(), void 0 === ct && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
                                        if (ct)
                                            for (type in contents)
                                                if (contents[type] && contents[type].test(ct)) {
                                                    dataTypes.unshift(type);
                                                    break;
                                                }
                                        if (dataTypes[0] in responses) finalDataType = dataTypes[0];
                                        else {
                                            for (type in responses) {
                                                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                                                    finalDataType = type;
                                                    break;
                                                }
                                                firstDataType || (firstDataType = type);
                                            }
                                            finalDataType = finalDataType || firstDataType;
                                        }
                                        if (finalDataType) return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType];
                                    })(s, jqXHR, responses)),
                                !isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0 && (s.converters["text script"] = function () {}),
                                (response = (function (s, response, jqXHR, isSuccess) {
                                    var conv2,
                                        current,
                                        conv,
                                        tmp,
                                        prev,
                                        converters = {},
                                        dataTypes = s.dataTypes.slice();
                                    if (dataTypes[1]) for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
                                    for (current = dataTypes.shift(); current; )
                                        if (
                                            (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response),
                                            !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)),
                                            (prev = current),
                                            (current = dataTypes.shift()))
                                        )
                                            if ("*" === current) current = prev;
                                            else if ("*" !== prev && prev !== current) {
                                                if (!(conv = converters[prev + " " + current] || converters["* " + current]))
                                                    for (conv2 in converters)
                                                        if ((tmp = conv2.split(" "))[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
                                                            !0 === conv ? (conv = converters[conv2]) : !0 !== converters[conv2] && ((current = tmp[0]), dataTypes.unshift(tmp[1]));
                                                            break;
                                                        }
                                                if (!0 !== conv)
                                                    if (conv && s.throws) response = conv(response);
                                                    else
                                                        try {
                                                            response = conv(response);
                                                        } catch (e) {
                                                            return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
                                                        }
                                            }
                                    return { state: "success", data: response };
                                })(s, response, jqXHR, isSuccess)),
                                isSuccess
                                    ? (s.ifModified &&
                                          ((modified = jqXHR.getResponseHeader("Last-Modified")) && (jQuery.lastModified[cacheURL] = modified), (modified = jqXHR.getResponseHeader("etag")) && (jQuery.etag[cacheURL] = modified)),
                                      204 === status || "HEAD" === s.type
                                          ? (statusText = "nocontent")
                                          : 304 === status
                                          ? (statusText = "notmodified")
                                          : ((statusText = response.state), (success = response.data), (isSuccess = !(error = response.error))))
                                    : ((error = statusText), (!status && statusText) || ((statusText = "error"), status < 0 && (status = 0))),
                                (jqXHR.status = status),
                                (jqXHR.statusText = (nativeStatusText || statusText) + ""),
                                isSuccess ? deferred.resolveWith(callbackContext, [success, statusText, jqXHR]) : deferred.rejectWith(callbackContext, [jqXHR, statusText, error]),
                                jqXHR.statusCode(statusCode),
                                (statusCode = void 0),
                                fireGlobals && globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]),
                                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]),
                                fireGlobals && (globalEventContext.trigger("ajaxComplete", [jqXHR, s]), --jQuery.active || jQuery.event.trigger("ajaxStop")));
                        }
                        return jqXHR;
                    },
                    getJSON: function (url, data, callback) {
                        return jQuery.get(url, data, callback, "json");
                    },
                    getScript: function (url, callback) {
                        return jQuery.get(url, void 0, callback, "script");
                    },
                }),
                jQuery.each(["get", "post"], function (_i, method) {
                    jQuery[method] = function (url, data, callback, type) {
                        return (
                            isFunction(data) && ((type = type || callback), (callback = data), (data = void 0)),
                            jQuery.ajax(jQuery.extend({ url: url, type: method, dataType: type, data: data, success: callback }, jQuery.isPlainObject(url) && url))
                        );
                    };
                }),
                jQuery.ajaxPrefilter(function (s) {
                    var i;
                    for (i in s.headers) "content-type" === i.toLowerCase() && (s.contentType = s.headers[i] || "");
                }),
                (jQuery._evalUrl = function (url, options, doc) {
                    return jQuery.ajax({
                        url: url,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: { "text script": function () {} },
                        dataFilter: function (response) {
                            jQuery.globalEval(response, options, doc);
                        },
                    });
                }),
                jQuery.fn.extend({
                    wrapAll: function (html) {
                        var wrap;
                        return (
                            this[0] &&
                                (isFunction(html) && (html = html.call(this[0])),
                                (wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0)),
                                this[0].parentNode && wrap.insertBefore(this[0]),
                                wrap
                                    .map(function () {
                                        for (var elem = this; elem.firstElementChild; ) elem = elem.firstElementChild;
                                        return elem;
                                    })
                                    .append(this)),
                            this
                        );
                    },
                    wrapInner: function (html) {
                        return isFunction(html)
                            ? this.each(function (i) {
                                  jQuery(this).wrapInner(html.call(this, i));
                              })
                            : this.each(function () {
                                  var self = jQuery(this),
                                      contents = self.contents();
                                  contents.length ? contents.wrapAll(html) : self.append(html);
                              });
                    },
                    wrap: function (html) {
                        var htmlIsFunction = isFunction(html);
                        return this.each(function (i) {
                            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
                        });
                    },
                    unwrap: function (selector) {
                        return (
                            this.parent(selector)
                                .not("body")
                                .each(function () {
                                    jQuery(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    },
                }),
                (jQuery.expr.pseudos.hidden = function (elem) {
                    return !jQuery.expr.pseudos.visible(elem);
                }),
                (jQuery.expr.pseudos.visible = function (elem) {
                    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
                }),
                (jQuery.ajaxSettings.xhr = function () {
                    try {
                        return new window.XMLHttpRequest();
                    } catch (e) {}
                });
            var xhrSuccessStatus = { 0: 200, 1223: 204 },
                xhrSupported = jQuery.ajaxSettings.xhr();
            (support.cors = !!xhrSupported && "withCredentials" in xhrSupported),
                (support.ajax = xhrSupported = !!xhrSupported),
                jQuery.ajaxTransport(function (options) {
                    var callback, errorCallback;
                    if (support.cors || (xhrSupported && !options.crossDomain))
                        return {
                            send: function (headers, complete) {
                                var i,
                                    xhr = options.xhr();
                                if ((xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields)) for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                                for (i in (options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest"), headers))
                                    xhr.setRequestHeader(i, headers[i]);
                                (callback = function (type) {
                                    return function () {
                                        callback &&
                                            ((callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null),
                                            "abort" === type
                                                ? xhr.abort()
                                                : "error" === type
                                                ? "number" != typeof xhr.status
                                                    ? complete(0, "error")
                                                    : complete(xhr.status, xhr.statusText)
                                                : complete(
                                                      xhrSuccessStatus[xhr.status] || xhr.status,
                                                      xhr.statusText,
                                                      "text" !== (xhr.responseType || "text") || "string" != typeof xhr.responseText ? { binary: xhr.response } : { text: xhr.responseText },
                                                      xhr.getAllResponseHeaders()
                                                  ));
                                    };
                                }),
                                    (xhr.onload = callback()),
                                    (errorCallback = xhr.onerror = xhr.ontimeout = callback("error")),
                                    void 0 !== xhr.onabort
                                        ? (xhr.onabort = errorCallback)
                                        : (xhr.onreadystatechange = function () {
                                              4 === xhr.readyState &&
                                                  window.setTimeout(function () {
                                                      callback && errorCallback();
                                                  });
                                          }),
                                    (callback = callback("abort"));
                                try {
                                    xhr.send((options.hasContent && options.data) || null);
                                } catch (e) {
                                    if (callback) throw e;
                                }
                            },
                            abort: function () {
                                callback && callback();
                            },
                        };
                }),
                jQuery.ajaxPrefilter(function (s) {
                    s.crossDomain && (s.contents.script = !1);
                }),
                jQuery.ajaxSetup({
                    accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                    contents: { script: /\b(?:java|ecma)script\b/ },
                    converters: {
                        "text script": function (text) {
                            return jQuery.globalEval(text), text;
                        },
                    },
                }),
                jQuery.ajaxPrefilter("script", function (s) {
                    void 0 === s.cache && (s.cache = !1), s.crossDomain && (s.type = "GET");
                }),
                jQuery.ajaxTransport("script", function (s) {
                    var script, callback;
                    if (s.crossDomain || s.scriptAttrs)
                        return {
                            send: function (_, complete) {
                                (script = jQuery("<script>")
                                    .attr(s.scriptAttrs || {})
                                    .prop({ charset: s.scriptCharset, src: s.url })
                                    .on(
                                        "load error",
                                        (callback = function (evt) {
                                            script.remove(), (callback = null), evt && complete("error" === evt.type ? 404 : 200, evt.type);
                                        })
                                    )),
                                    document.head.appendChild(script[0]);
                            },
                            abort: function () {
                                callback && callback();
                            },
                        };
                });
            var body,
                oldCallbacks = [],
                rjsonp = /(=)\?(?=&|$)|\?\?/;
            jQuery.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
                    return (this[callback] = !0), callback;
                },
            }),
                jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
                    var callbackName,
                        overwritten,
                        responseContainer,
                        jsonProp = !1 !== s.jsonp && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
                    if (jsonProp || "jsonp" === s.dataTypes[0])
                        return (
                            (callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback),
                            jsonProp ? (s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName)) : !1 !== s.jsonp && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName),
                            (s.converters["script json"] = function () {
                                return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0];
                            }),
                            (s.dataTypes[0] = "json"),
                            (overwritten = window[callbackName]),
                            (window[callbackName] = function () {
                                responseContainer = arguments;
                            }),
                            jqXHR.always(function () {
                                void 0 === overwritten ? jQuery(window).removeProp(callbackName) : (window[callbackName] = overwritten),
                                    s[callbackName] && ((s.jsonpCallback = originalSettings.jsonpCallback), oldCallbacks.push(callbackName)),
                                    responseContainer && isFunction(overwritten) && overwritten(responseContainer[0]),
                                    (responseContainer = overwritten = void 0);
                            }),
                            "script"
                        );
                }),
                (support.createHTMLDocument = (((body = document.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === body.childNodes.length)),
                (jQuery.parseHTML = function (data, context, keepScripts) {
                    return "string" != typeof data
                        ? []
                        : ("boolean" == typeof context && ((keepScripts = context), (context = !1)),
                          context ||
                              (support.createHTMLDocument ? (((base = (context = document.implementation.createHTMLDocument("")).createElement("base")).href = document.location.href), context.head.appendChild(base)) : (context = document)),
                          (scripts = !keepScripts && []),
                          (parsed = rsingleTag.exec(data))
                              ? [context.createElement(parsed[1])]
                              : ((parsed = buildFragment([data], context, scripts)), scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes)));
                    var base, parsed, scripts;
                }),
                (jQuery.fn.load = function (url, params, callback) {
                    var selector,
                        type,
                        response,
                        self = this,
                        off = url.indexOf(" ");
                    return (
                        off > -1 && ((selector = stripAndCollapse(url.slice(off))), (url = url.slice(0, off))),
                        isFunction(params) ? ((callback = params), (params = void 0)) : params && "object" == typeof params && (type = "POST"),
                        self.length > 0 &&
                            jQuery
                                .ajax({ url: url, type: type || "GET", dataType: "html", data: params })
                                .done(function (responseText) {
                                    (response = arguments), self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
                                })
                                .always(
                                    callback &&
                                        function (jqXHR, status) {
                                            self.each(function () {
                                                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
                                            });
                                        }
                                ),
                        this
                    );
                }),
                (jQuery.expr.pseudos.animated = function (elem) {
                    return jQuery.grep(jQuery.timers, function (fn) {
                        return elem === fn.elem;
                    }).length;
                }),
                (jQuery.offset = {
                    setOffset: function (elem, options, i) {
                        var curPosition,
                            curLeft,
                            curCSSTop,
                            curTop,
                            curOffset,
                            curCSSLeft,
                            position = jQuery.css(elem, "position"),
                            curElem = jQuery(elem),
                            props = {};
                        "static" === position && (elem.style.position = "relative"),
                            (curOffset = curElem.offset()),
                            (curCSSTop = jQuery.css(elem, "top")),
                            (curCSSLeft = jQuery.css(elem, "left")),
                            ("absolute" === position || "fixed" === position) && (curCSSTop + curCSSLeft).indexOf("auto") > -1
                                ? ((curTop = (curPosition = curElem.position()).top), (curLeft = curPosition.left))
                                : ((curTop = parseFloat(curCSSTop) || 0), (curLeft = parseFloat(curCSSLeft) || 0)),
                            isFunction(options) && (options = options.call(elem, i, jQuery.extend({}, curOffset))),
                            null != options.top && (props.top = options.top - curOffset.top + curTop),
                            null != options.left && (props.left = options.left - curOffset.left + curLeft),
                            "using" in options ? options.using.call(elem, props) : curElem.css(props);
                    },
                }),
                jQuery.fn.extend({
                    offset: function (options) {
                        if (arguments.length)
                            return void 0 === options
                                ? this
                                : this.each(function (i) {
                                      jQuery.offset.setOffset(this, options, i);
                                  });
                        var rect,
                            win,
                            elem = this[0];
                        return elem
                            ? elem.getClientRects().length
                                ? ((rect = elem.getBoundingClientRect()), (win = elem.ownerDocument.defaultView), { top: rect.top + win.pageYOffset, left: rect.left + win.pageXOffset })
                                : { top: 0, left: 0 }
                            : void 0;
                    },
                    position: function () {
                        if (this[0]) {
                            var offsetParent,
                                offset,
                                doc,
                                elem = this[0],
                                parentOffset = { top: 0, left: 0 };
                            if ("fixed" === jQuery.css(elem, "position")) offset = elem.getBoundingClientRect();
                            else {
                                for (
                                    offset = this.offset(), doc = elem.ownerDocument, offsetParent = elem.offsetParent || doc.documentElement;
                                    offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && "static" === jQuery.css(offsetParent, "position");

                                )
                                    offsetParent = offsetParent.parentNode;
                                offsetParent &&
                                    offsetParent !== elem &&
                                    1 === offsetParent.nodeType &&
                                    (((parentOffset = jQuery(offsetParent).offset()).top += jQuery.css(offsetParent, "borderTopWidth", !0)), (parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", !0)));
                            }
                            return { top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0), left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0) };
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var offsetParent = this.offsetParent; offsetParent && "static" === jQuery.css(offsetParent, "position"); ) offsetParent = offsetParent.offsetParent;
                            return offsetParent || documentElement;
                        });
                    },
                }),
                jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
                    var top = "pageYOffset" === prop;
                    jQuery.fn[method] = function (val) {
                        return access(
                            this,
                            function (elem, method, val) {
                                var win;
                                if ((isWindow(elem) ? (win = elem) : 9 === elem.nodeType && (win = elem.defaultView), void 0 === val)) return win ? win[prop] : elem[method];
                                win ? win.scrollTo(top ? win.pageXOffset : val, top ? val : win.pageYOffset) : (elem[method] = val);
                            },
                            method,
                            val,
                            arguments.length
                        );
                    };
                }),
                jQuery.each(["top", "left"], function (_i, prop) {
                    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
                        if (computed) return (computed = curCSS(elem, prop)), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                    });
                }),
                jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
                    jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
                        jQuery.fn[funcName] = function (margin, value) {
                            var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin),
                                extra = defaultExtra || (!0 === margin || !0 === value ? "margin" : "border");
                            return access(
                                this,
                                function (elem, type, value) {
                                    var doc;
                                    return isWindow(elem)
                                        ? 0 === funcName.indexOf("outer")
                                            ? elem["inner" + name]
                                            : elem.document.documentElement["client" + name]
                                        : 9 === elem.nodeType
                                        ? ((doc = elem.documentElement), Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]))
                                        : void 0 === value
                                        ? jQuery.css(elem, type, extra)
                                        : jQuery.style(elem, type, value, extra);
                                },
                                type,
                                chainable ? margin : void 0,
                                chainable
                            );
                        };
                    });
                }),
                jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (_i, type) {
                    jQuery.fn[type] = function (fn) {
                        return this.on(type, fn);
                    };
                }),
                jQuery.fn.extend({
                    bind: function (types, data, fn) {
                        return this.on(types, null, data, fn);
                    },
                    unbind: function (types, fn) {
                        return this.off(types, null, fn);
                    },
                    delegate: function (selector, types, data, fn) {
                        return this.on(types, selector, data, fn);
                    },
                    undelegate: function (selector, types, fn) {
                        return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn);
                    },
                    hover: function (fnOver, fnOut) {
                        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
                    },
                }),
                jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (
                    _i,
                    name
                ) {
                    jQuery.fn[name] = function (data, fn) {
                        return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
                    };
                });
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            (jQuery.proxy = function (fn, context) {
                var tmp, args, proxy;
                if (("string" == typeof context && ((tmp = fn[context]), (context = fn), (fn = tmp)), isFunction(fn)))
                    return (
                        (args = slice.call(arguments, 2)),
                        ((proxy = function () {
                            return fn.apply(context || this, args.concat(slice.call(arguments)));
                        }).guid = fn.guid = fn.guid || jQuery.guid++),
                        proxy
                    );
            }),
                (jQuery.holdReady = function (hold) {
                    hold ? jQuery.readyWait++ : jQuery.ready(!0);
                }),
                (jQuery.isArray = Array.isArray),
                (jQuery.parseJSON = JSON.parse),
                (jQuery.nodeName = nodeName),
                (jQuery.isFunction = isFunction),
                (jQuery.isWindow = isWindow),
                (jQuery.camelCase = camelCase),
                (jQuery.type = toType),
                (jQuery.now = Date.now),
                (jQuery.isNumeric = function (obj) {
                    var type = jQuery.type(obj);
                    return ("number" === type || "string" === type) && !isNaN(obj - parseFloat(obj));
                }),
                (jQuery.trim = function (text) {
                    return null == text ? "" : (text + "").replace(rtrim, "");
                }),
                void 0 ===
                    (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                        return jQuery;
                    }.apply(exports, [])) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
            var _jQuery = window.jQuery,
                _$ = window.$;
            return (
                (jQuery.noConflict = function (deep) {
                    return window.$ === jQuery && (window.$ = _$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery;
                }),
                void 0 === noGlobal && (window.jQuery = window.$ = jQuery),
                jQuery
            );
        });
    },
    function (module, exports, __webpack_require__) {
        (function ($) {
            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            (__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)]),
                void 0 ===
                    (__WEBPACK_AMD_DEFINE_RESULT__ =
                        "function" ==
                        typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function (jQuery) {
                            var S2 = (function () {
                                    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var S2 = jQuery.fn.select2.amd;
                                    return (
                                        (function () {
                                            var requirejs, require, define;
                                            (S2 && S2.requirejs) ||
                                                (S2 ? (require = S2) : (S2 = {}),
                                                (function (undef) {
                                                    var main,
                                                        req,
                                                        makeMap,
                                                        handlers,
                                                        defined = {},
                                                        waiting = {},
                                                        config = {},
                                                        defining = {},
                                                        hasOwn = Object.prototype.hasOwnProperty,
                                                        aps = [].slice,
                                                        jsSuffixRegExp = /\.js$/;
                                                    function hasProp(obj, prop) {
                                                        return hasOwn.call(obj, prop);
                                                    }
                                                    function normalize(name, baseName) {
                                                        var nameParts,
                                                            nameSegment,
                                                            mapValue,
                                                            foundMap,
                                                            lastIndex,
                                                            foundI,
                                                            foundStarMap,
                                                            starI,
                                                            i,
                                                            j,
                                                            part,
                                                            baseParts = baseName && baseName.split("/"),
                                                            map = config.map,
                                                            starMap = (map && map["*"]) || {};
                                                        if (name) {
                                                            for (
                                                                lastIndex = (name = name.split("/")).length - 1,
                                                                    config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex]) && (name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, "")),
                                                                    "." === name[0].charAt(0) && baseParts && (name = baseParts.slice(0, baseParts.length - 1).concat(name)),
                                                                    i = 0;
                                                                i < name.length;
                                                                i++
                                                            )
                                                                if ("." === (part = name[i])) name.splice(i, 1), (i -= 1);
                                                                else if (".." === part) {
                                                                    if (0 === i || (1 === i && ".." === name[2]) || ".." === name[i - 1]) continue;
                                                                    i > 0 && (name.splice(i - 1, 2), (i -= 2));
                                                                }
                                                            name = name.join("/");
                                                        }
                                                        if ((baseParts || starMap) && map) {
                                                            for (i = (nameParts = name.split("/")).length; i > 0; i -= 1) {
                                                                if (((nameSegment = nameParts.slice(0, i).join("/")), baseParts))
                                                                    for (j = baseParts.length; j > 0; j -= 1)
                                                                        if ((mapValue = map[baseParts.slice(0, j).join("/")]) && (mapValue = mapValue[nameSegment])) {
                                                                            (foundMap = mapValue), (foundI = i);
                                                                            break;
                                                                        }
                                                                if (foundMap) break;
                                                                !foundStarMap && starMap && starMap[nameSegment] && ((foundStarMap = starMap[nameSegment]), (starI = i));
                                                            }
                                                            !foundMap && foundStarMap && ((foundMap = foundStarMap), (foundI = starI)), foundMap && (nameParts.splice(0, foundI, foundMap), (name = nameParts.join("/")));
                                                        }
                                                        return name;
                                                    }
                                                    function makeRequire(relName, forceSync) {
                                                        return function () {
                                                            var args = aps.call(arguments, 0);
                                                            return "string" != typeof args[0] && 1 === args.length && args.push(null), req.apply(void 0, args.concat([relName, forceSync]));
                                                        };
                                                    }
                                                    function makeLoad(depName) {
                                                        return function (value) {
                                                            defined[depName] = value;
                                                        };
                                                    }
                                                    function callDep(name) {
                                                        if (hasProp(waiting, name)) {
                                                            var args = waiting[name];
                                                            delete waiting[name], (defining[name] = !0), main.apply(void 0, args);
                                                        }
                                                        if (!hasProp(defined, name) && !hasProp(defining, name)) throw new Error("No " + name);
                                                        return defined[name];
                                                    }
                                                    function splitPrefix(name) {
                                                        var prefix,
                                                            index = name ? name.indexOf("!") : -1;
                                                        return index > -1 && ((prefix = name.substring(0, index)), (name = name.substring(index + 1, name.length))), [prefix, name];
                                                    }
                                                    function makeRelParts(relName) {
                                                        return relName ? splitPrefix(relName) : [];
                                                    }
                                                    function makeConfig(name) {
                                                        return function () {
                                                            return (config && config.config && config.config[name]) || {};
                                                        };
                                                    }
                                                    (makeMap = function (name, relParts) {
                                                        var plugin,
                                                            relName,
                                                            parts = splitPrefix(name),
                                                            prefix = parts[0],
                                                            relResourceName = relParts[1];
                                                        return (
                                                            (name = parts[1]),
                                                            prefix && (plugin = callDep((prefix = normalize(prefix, relResourceName)))),
                                                            prefix
                                                                ? (name =
                                                                      plugin && plugin.normalize
                                                                          ? plugin.normalize(
                                                                                name,
                                                                                ((relName = relResourceName),
                                                                                function (name) {
                                                                                    return normalize(name, relName);
                                                                                })
                                                                            )
                                                                          : normalize(name, relResourceName))
                                                                : ((prefix = (parts = splitPrefix((name = normalize(name, relResourceName))))[0]), (name = parts[1]), prefix && (plugin = callDep(prefix))),
                                                            { f: prefix ? prefix + "!" + name : name, n: name, pr: prefix, p: plugin }
                                                        );
                                                    }),
                                                        (handlers = {
                                                            require: function (name) {
                                                                return makeRequire(name);
                                                            },
                                                            exports: function (name) {
                                                                var e = defined[name];
                                                                return void 0 !== e ? e : (defined[name] = {});
                                                            },
                                                            module: function (name) {
                                                                return { id: name, uri: "", exports: defined[name], config: makeConfig(name) };
                                                            },
                                                        }),
                                                        (main = function (name, deps, callback, relName) {
                                                            var cjsModule,
                                                                depName,
                                                                ret,
                                                                map,
                                                                i,
                                                                relParts,
                                                                usingExports,
                                                                args = [],
                                                                callbackType = typeof callback;
                                                            if (((relParts = makeRelParts((relName = relName || name))), "undefined" === callbackType || "function" === callbackType)) {
                                                                for (deps = !deps.length && callback.length ? ["require", "exports", "module"] : deps, i = 0; i < deps.length; i += 1)
                                                                    if ("require" === (depName = (map = makeMap(deps[i], relParts)).f)) args[i] = handlers.require(name);
                                                                    else if ("exports" === depName) (args[i] = handlers.exports(name)), (usingExports = !0);
                                                                    else if ("module" === depName) cjsModule = args[i] = handlers.module(name);
                                                                    else if (hasProp(defined, depName) || hasProp(waiting, depName) || hasProp(defining, depName)) args[i] = callDep(depName);
                                                                    else {
                                                                        if (!map.p) throw new Error(name + " missing " + depName);
                                                                        map.p.load(map.n, makeRequire(relName, !0), makeLoad(depName), {}), (args[i] = defined[depName]);
                                                                    }
                                                                (ret = callback ? callback.apply(defined[name], args) : void 0),
                                                                    name &&
                                                                        (cjsModule && void 0 !== cjsModule.exports && cjsModule.exports !== defined[name]
                                                                            ? (defined[name] = cjsModule.exports)
                                                                            : (void 0 === ret && usingExports) || (defined[name] = ret));
                                                            } else name && (defined[name] = callback);
                                                        }),
                                                        (requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
                                                            if ("string" == typeof deps) return handlers[deps] ? handlers[deps](callback) : callDep(makeMap(deps, makeRelParts(callback)).f);
                                                            if (!deps.splice) {
                                                                if (((config = deps).deps && req(config.deps, config.callback), !callback)) return;
                                                                callback.splice ? ((deps = callback), (callback = relName), (relName = null)) : (deps = void 0);
                                                            }
                                                            return (
                                                                (callback = callback || function () {}),
                                                                "function" == typeof relName && ((relName = forceSync), (forceSync = alt)),
                                                                forceSync
                                                                    ? main(void 0, deps, callback, relName)
                                                                    : setTimeout(function () {
                                                                          main(void 0, deps, callback, relName);
                                                                      }, 4),
                                                                req
                                                            );
                                                        }),
                                                        (req.config = function (cfg) {
                                                            return req(cfg);
                                                        }),
                                                        (requirejs._defined = defined),
                                                        ((define = function (name, deps, callback) {
                                                            if ("string" != typeof name) throw new Error("See almond README: incorrect module build, no module name");
                                                            deps.splice || ((callback = deps), (deps = [])), hasProp(defined, name) || hasProp(waiting, name) || (waiting[name] = [name, deps, callback]);
                                                        }).amd = { jQuery: !0 });
                                                })(),
                                                (S2.requirejs = requirejs),
                                                (S2.require = require),
                                                (S2.define = define));
                                        })(),
                                        S2.define("almond", function () {}),
                                        S2.define("jquery", [], function () {
                                            var _$ = jQuery || $;
                                            return null == _$ && console && console.error, _$;
                                        }),
                                        S2.define("select2/utils", ["jquery"], function ($) {
                                            var Utils = {};
                                            function getMethods(theClass) {
                                                var proto = theClass.prototype,
                                                    methods = [];
                                                for (var methodName in proto) "function" == typeof proto[methodName] && "constructor" !== methodName && methods.push(methodName);
                                                return methods;
                                            }
                                            (Utils.Extend = function (ChildClass, SuperClass) {
                                                var __hasProp = {}.hasOwnProperty;
                                                function BaseConstructor() {
                                                    this.constructor = ChildClass;
                                                }
                                                for (var key in SuperClass) __hasProp.call(SuperClass, key) && (ChildClass[key] = SuperClass[key]);
                                                return (BaseConstructor.prototype = SuperClass.prototype), (ChildClass.prototype = new BaseConstructor()), (ChildClass.__super__ = SuperClass.prototype), ChildClass;
                                            }),
                                                (Utils.Decorate = function (SuperClass, DecoratorClass) {
                                                    var decoratedMethods = getMethods(DecoratorClass),
                                                        superMethods = getMethods(SuperClass);
                                                    function DecoratedClass() {
                                                        var unshift = Array.prototype.unshift,
                                                            argCount = DecoratorClass.prototype.constructor.length,
                                                            calledConstructor = SuperClass.prototype.constructor;
                                                        argCount > 0 && (unshift.call(arguments, SuperClass.prototype.constructor), (calledConstructor = DecoratorClass.prototype.constructor)), calledConstructor.apply(this, arguments);
                                                    }
                                                    (DecoratorClass.displayName = SuperClass.displayName),
                                                        (DecoratedClass.prototype = new (function () {
                                                            this.constructor = DecoratedClass;
                                                        })());
                                                    for (var m = 0; m < superMethods.length; m++) {
                                                        var superMethod = superMethods[m];
                                                        DecoratedClass.prototype[superMethod] = SuperClass.prototype[superMethod];
                                                    }
                                                    for (
                                                        var calledMethod = function (methodName) {
                                                                var originalMethod = function () {};
                                                                (methodName in DecoratedClass.prototype) && (originalMethod = DecoratedClass.prototype[methodName]);
                                                                var decoratedMethod = DecoratorClass.prototype[methodName];
                                                                return function () {
                                                                    var unshift = Array.prototype.unshift;
                                                                    return unshift.call(arguments, originalMethod), decoratedMethod.apply(this, arguments);
                                                                };
                                                            },
                                                            d = 0;
                                                        d < decoratedMethods.length;
                                                        d++
                                                    ) {
                                                        var decoratedMethod = decoratedMethods[d];
                                                        DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
                                                    }
                                                    return DecoratedClass;
                                                });
                                            var Observable = function () {
                                                this.listeners = {};
                                            };
                                            (Observable.prototype.on = function (event, callback) {
                                                (this.listeners = this.listeners || {}), event in this.listeners ? this.listeners[event].push(callback) : (this.listeners[event] = [callback]);
                                            }),
                                                (Observable.prototype.trigger = function (event) {
                                                    var slice = Array.prototype.slice,
                                                        params = slice.call(arguments, 1);
                                                    (this.listeners = this.listeners || {}),
                                                        null == params && (params = []),
                                                        0 === params.length && params.push({}),
                                                        (params[0]._type = event),
                                                        event in this.listeners && this.invoke(this.listeners[event], slice.call(arguments, 1)),
                                                        "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
                                                }),
                                                (Observable.prototype.invoke = function (listeners, params) {
                                                    for (var i = 0, len = listeners.length; i < len; i++) listeners[i].apply(this, params);
                                                }),
                                                (Utils.Observable = Observable),
                                                (Utils.generateChars = function (length) {
                                                    for (var chars = "", i = 0; i < length; i++) chars += Math.floor(36 * Math.random()).toString(36);
                                                    return chars;
                                                }),
                                                (Utils.bind = function (func, context) {
                                                    return function () {
                                                        func.apply(context, arguments);
                                                    };
                                                }),
                                                (Utils._convertData = function (data) {
                                                    for (var originalKey in data) {
                                                        var keys = originalKey.split("-"),
                                                            dataLevel = data;
                                                        if (1 !== keys.length) {
                                                            for (var k = 0; k < keys.length; k++) {
                                                                var key = keys[k];
                                                                (key = key.substring(0, 1).toLowerCase() + key.substring(1)) in dataLevel || (dataLevel[key] = {}),
                                                                    k == keys.length - 1 && (dataLevel[key] = data[originalKey]),
                                                                    (dataLevel = dataLevel[key]);
                                                            }
                                                            delete data[originalKey];
                                                        }
                                                    }
                                                    return data;
                                                }),
                                                (Utils.hasScroll = function (index, el) {
                                                    var $el = $(el),
                                                        overflowX = el.style.overflowX,
                                                        overflowY = el.style.overflowY;
                                                    return (
                                                        (overflowX !== overflowY || ("hidden" !== overflowY && "visible" !== overflowY)) &&
                                                        ("scroll" === overflowX || "scroll" === overflowY || $el.innerHeight() < el.scrollHeight || $el.innerWidth() < el.scrollWidth)
                                                    );
                                                }),
                                                (Utils.escapeMarkup = function (markup) {
                                                    var replaceMap = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" };
                                                    return "string" != typeof markup
                                                        ? markup
                                                        : String(markup).replace(/[&<>"'\/\\]/g, function (match) {
                                                              return replaceMap[match];
                                                          });
                                                }),
                                                (Utils.__cache = {});
                                            var id = 0;
                                            return (
                                                (Utils.GetUniqueElementId = function (element) {
                                                    var select2Id = element.getAttribute("data-select2-id");
                                                    return (
                                                        null != select2Id ||
                                                            ((select2Id = element.id ? "select2-data-" + element.id : "select2-data-" + (++id).toString() + "-" + Utils.generateChars(4)), element.setAttribute("data-select2-id", select2Id)),
                                                        select2Id
                                                    );
                                                }),
                                                (Utils.StoreData = function (element, name, value) {
                                                    var id = Utils.GetUniqueElementId(element);
                                                    Utils.__cache[id] || (Utils.__cache[id] = {}), (Utils.__cache[id][name] = value);
                                                }),
                                                (Utils.GetData = function (element, name) {
                                                    var id = Utils.GetUniqueElementId(element);
                                                    return name ? (Utils.__cache[id] && null != Utils.__cache[id][name] ? Utils.__cache[id][name] : $(element).data(name)) : Utils.__cache[id];
                                                }),
                                                (Utils.RemoveData = function (element) {
                                                    var id = Utils.GetUniqueElementId(element);
                                                    null != Utils.__cache[id] && delete Utils.__cache[id], element.removeAttribute("data-select2-id");
                                                }),
                                                (Utils.copyNonInternalCssClasses = function (dest, src) {
                                                    var destinationClasses = dest.getAttribute("class").trim().split(/\s+/);
                                                    destinationClasses = destinationClasses.filter(function (clazz) {
                                                        return 0 === clazz.indexOf("select2-");
                                                    });
                                                    var sourceClasses = src.getAttribute("class").trim().split(/\s+/);
                                                    sourceClasses = sourceClasses.filter(function (clazz) {
                                                        return 0 !== clazz.indexOf("select2-");
                                                    });
                                                    var replacements = destinationClasses.concat(sourceClasses);
                                                    dest.setAttribute("class", replacements.join(" "));
                                                }),
                                                Utils
                                            );
                                        }),
                                        S2.define("select2/results", ["jquery", "./utils"], function ($, Utils) {
                                            function Results($element, options, dataAdapter) {
                                                (this.$element = $element), (this.data = dataAdapter), (this.options = options), Results.__super__.constructor.call(this);
                                            }
                                            return (
                                                Utils.Extend(Results, Utils.Observable),
                                                (Results.prototype.render = function () {
                                                    var $results = $('<ul class="select2-results__options" role="listbox"></ul>');
                                                    return this.options.get("multiple") && $results.attr("aria-multiselectable", "true"), (this.$results = $results), $results;
                                                }),
                                                (Results.prototype.clear = function () {
                                                    this.$results.empty();
                                                }),
                                                (Results.prototype.displayMessage = function (params) {
                                                    var escapeMarkup = this.options.get("escapeMarkup");
                                                    this.clear(), this.hideLoading();
                                                    var $message = $('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
                                                        message = this.options.get("translations").get(params.message);
                                                    $message.append(escapeMarkup(message(params.args))), ($message[0].className += " select2-results__message"), this.$results.append($message);
                                                }),
                                                (Results.prototype.hideMessages = function () {
                                                    this.$results.find(".select2-results__message").remove();
                                                }),
                                                (Results.prototype.append = function (data) {
                                                    this.hideLoading();
                                                    var $options = [];
                                                    if (null != data.results && 0 !== data.results.length) {
                                                        data.results = this.sort(data.results);
                                                        for (var d = 0; d < data.results.length; d++) {
                                                            var item = data.results[d],
                                                                $option = this.option(item);
                                                            $options.push($option);
                                                        }
                                                        this.$results.append($options);
                                                    } else 0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" });
                                                }),
                                                (Results.prototype.position = function ($results, $dropdown) {
                                                    $dropdown.find(".select2-results").append($results);
                                                }),
                                                (Results.prototype.sort = function (data) {
                                                    return this.options.get("sorter")(data);
                                                }),
                                                (Results.prototype.highlightFirstItem = function () {
                                                    var $options = this.$results.find(".select2-results__option--selectable"),
                                                        $selected = $options.filter(".select2-results__option--selected");
                                                    $selected.length > 0 ? $selected.first().trigger("mouseenter") : $options.first().trigger("mouseenter"), this.ensureHighlightVisible();
                                                }),
                                                (Results.prototype.setClasses = function () {
                                                    var self = this;
                                                    this.data.current(function (selected) {
                                                        var selectedIds = selected.map(function (s) {
                                                            return s.id.toString();
                                                        });
                                                        self.$results.find(".select2-results__option--selectable").each(function () {
                                                            var $option = $(this),
                                                                item = Utils.GetData(this, "data"),
                                                                id = "" + item.id;
                                                            (null != item.element && item.element.selected) || (null == item.element && selectedIds.indexOf(id) > -1)
                                                                ? (this.classList.add("select2-results__option--selected"), $option.attr("aria-selected", "true"))
                                                                : (this.classList.remove("select2-results__option--selected"), $option.attr("aria-selected", "false"));
                                                        });
                                                    });
                                                }),
                                                (Results.prototype.showLoading = function (params) {
                                                    this.hideLoading();
                                                    var loading = { disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(params) },
                                                        $loading = this.option(loading);
                                                    ($loading.className += " loading-results"), this.$results.prepend($loading);
                                                }),
                                                (Results.prototype.hideLoading = function () {
                                                    this.$results.find(".loading-results").remove();
                                                }),
                                                (Results.prototype.option = function (data) {
                                                    var option = document.createElement("li");
                                                    option.classList.add("select2-results__option"), option.classList.add("select2-results__option--selectable");
                                                    var attrs = { role: "option" },
                                                        matches = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                                                    for (var attr in (((null != data.element && matches.call(data.element, ":disabled")) || (null == data.element && data.disabled)) &&
                                                        ((attrs["aria-disabled"] = "true"), option.classList.remove("select2-results__option--selectable"), option.classList.add("select2-results__option--disabled")),
                                                    null == data.id && option.classList.remove("select2-results__option--selectable"),
                                                    null != data._resultId && (option.id = data._resultId),
                                                    data.title && (option.title = data.title),
                                                    data.children &&
                                                        ((attrs.role = "group"), (attrs["aria-label"] = data.text), option.classList.remove("select2-results__option--selectable"), option.classList.add("select2-results__option--group")),
                                                    attrs)) {
                                                        var val = attrs[attr];
                                                        option.setAttribute(attr, val);
                                                    }
                                                    if (data.children) {
                                                        var $option = $(option),
                                                            label = document.createElement("strong");
                                                        (label.className = "select2-results__group"), this.template(data, label);
                                                        for (var $children = [], c = 0; c < data.children.length; c++) {
                                                            var child = data.children[c],
                                                                $child = this.option(child);
                                                            $children.push($child);
                                                        }
                                                        var $childrenContainer = $("<ul></ul>", { class: "select2-results__options select2-results__options--nested", role: "none" });
                                                        $childrenContainer.append($children), $option.append(label), $option.append($childrenContainer);
                                                    } else this.template(data, option);
                                                    return Utils.StoreData(option, "data", data), option;
                                                }),
                                                (Results.prototype.bind = function (container, $container) {
                                                    var self = this,
                                                        id = container.id + "-results";
                                                    this.$results.attr("id", id),
                                                        container.on("results:all", function (params) {
                                                            self.clear(), self.append(params.data), container.isOpen() && (self.setClasses(), self.highlightFirstItem());
                                                        }),
                                                        container.on("results:append", function (params) {
                                                            self.append(params.data), container.isOpen() && self.setClasses();
                                                        }),
                                                        container.on("query", function (params) {
                                                            self.hideMessages(), self.showLoading(params);
                                                        }),
                                                        container.on("select", function () {
                                                            container.isOpen() && (self.setClasses(), self.options.get("scrollAfterSelect") && self.highlightFirstItem());
                                                        }),
                                                        container.on("unselect", function () {
                                                            container.isOpen() && (self.setClasses(), self.options.get("scrollAfterSelect") && self.highlightFirstItem());
                                                        }),
                                                        container.on("open", function () {
                                                            self.$results.attr("aria-expanded", "true"), self.$results.attr("aria-hidden", "false"), self.setClasses(), self.ensureHighlightVisible();
                                                        }),
                                                        container.on("close", function () {
                                                            self.$results.attr("aria-expanded", "false"), self.$results.attr("aria-hidden", "true"), self.$results.removeAttr("aria-activedescendant");
                                                        }),
                                                        container.on("results:toggle", function () {
                                                            var $highlighted = self.getHighlightedResults();
                                                            0 !== $highlighted.length && $highlighted.trigger("mouseup");
                                                        }),
                                                        container.on("results:select", function () {
                                                            var $highlighted = self.getHighlightedResults();
                                                            if (0 !== $highlighted.length) {
                                                                var data = Utils.GetData($highlighted[0], "data");
                                                                $highlighted.hasClass("select2-results__option--selected") ? self.trigger("close", {}) : self.trigger("select", { data: data });
                                                            }
                                                        }),
                                                        container.on("results:previous", function () {
                                                            var $highlighted = self.getHighlightedResults(),
                                                                $options = self.$results.find(".select2-results__option--selectable"),
                                                                currentIndex = $options.index($highlighted);
                                                            if (!(currentIndex <= 0)) {
                                                                var nextIndex = currentIndex - 1;
                                                                0 === $highlighted.length && (nextIndex = 0);
                                                                var $next = $options.eq(nextIndex);
                                                                $next.trigger("mouseenter");
                                                                var currentOffset = self.$results.offset().top,
                                                                    nextTop = $next.offset().top,
                                                                    nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);
                                                                0 === nextIndex ? self.$results.scrollTop(0) : nextTop - currentOffset < 0 && self.$results.scrollTop(nextOffset);
                                                            }
                                                        }),
                                                        container.on("results:next", function () {
                                                            var $highlighted = self.getHighlightedResults(),
                                                                $options = self.$results.find(".select2-results__option--selectable"),
                                                                nextIndex = $options.index($highlighted) + 1;
                                                            if (!(nextIndex >= $options.length)) {
                                                                var $next = $options.eq(nextIndex);
                                                                $next.trigger("mouseenter");
                                                                var currentOffset = self.$results.offset().top + self.$results.outerHeight(!1),
                                                                    nextBottom = $next.offset().top + $next.outerHeight(!1),
                                                                    nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;
                                                                0 === nextIndex ? self.$results.scrollTop(0) : nextBottom > currentOffset && self.$results.scrollTop(nextOffset);
                                                            }
                                                        }),
                                                        container.on("results:focus", function (params) {
                                                            params.element[0].classList.add("select2-results__option--highlighted"), params.element[0].setAttribute("aria-selected", "true");
                                                        }),
                                                        container.on("results:message", function (params) {
                                                            self.displayMessage(params);
                                                        }),
                                                        $.fn.mousewheel &&
                                                            this.$results.on("mousewheel", function (e) {
                                                                var top = self.$results.scrollTop(),
                                                                    bottom = self.$results.get(0).scrollHeight - top + e.deltaY,
                                                                    isAtTop = e.deltaY > 0 && top - e.deltaY <= 0,
                                                                    isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();
                                                                isAtTop
                                                                    ? (self.$results.scrollTop(0), e.preventDefault(), e.stopPropagation())
                                                                    : isAtBottom && (self.$results.scrollTop(self.$results.get(0).scrollHeight - self.$results.height()), e.preventDefault(), e.stopPropagation());
                                                            }),
                                                        this.$results.on("mouseup", ".select2-results__option--selectable", function (evt) {
                                                            var $this = $(this),
                                                                data = Utils.GetData(this, "data");
                                                            $this.hasClass("select2-results__option--selected")
                                                                ? self.options.get("multiple")
                                                                    ? self.trigger("unselect", { originalEvent: evt, data: data })
                                                                    : self.trigger("close", {})
                                                                : self.trigger("select", { originalEvent: evt, data: data });
                                                        }),
                                                        this.$results.on("mouseenter", ".select2-results__option--selectable", function (evt) {
                                                            var data = Utils.GetData(this, "data");
                                                            self.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false"), self.trigger("results:focus", { data: data, element: $(this) });
                                                        });
                                                }),
                                                (Results.prototype.getHighlightedResults = function () {
                                                    return this.$results.find(".select2-results__option--highlighted");
                                                }),
                                                (Results.prototype.destroy = function () {
                                                    this.$results.remove();
                                                }),
                                                (Results.prototype.ensureHighlightVisible = function () {
                                                    var $highlighted = this.getHighlightedResults();
                                                    if (0 !== $highlighted.length) {
                                                        var currentIndex = this.$results.find(".select2-results__option--selectable").index($highlighted),
                                                            currentOffset = this.$results.offset().top,
                                                            nextTop = $highlighted.offset().top,
                                                            nextOffset = this.$results.scrollTop() + (nextTop - currentOffset),
                                                            offsetDelta = nextTop - currentOffset;
                                                        (nextOffset -= 2 * $highlighted.outerHeight(!1)),
                                                            currentIndex <= 2 ? this.$results.scrollTop(0) : (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) && this.$results.scrollTop(nextOffset);
                                                    }
                                                }),
                                                (Results.prototype.template = function (result, container) {
                                                    var template = this.options.get("templateResult"),
                                                        escapeMarkup = this.options.get("escapeMarkup"),
                                                        content = template(result, container);
                                                    null == content ? (container.style.display = "none") : "string" == typeof content ? (container.innerHTML = escapeMarkup(content)) : $(container).append(content);
                                                }),
                                                Results
                                            );
                                        }),
                                        S2.define("select2/keys", [], function () {
                                            return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 };
                                        }),
                                        S2.define("select2/selection/base", ["jquery", "../utils", "../keys"], function ($, Utils, KEYS) {
                                            function BaseSelection($element, options) {
                                                (this.$element = $element), (this.options = options), BaseSelection.__super__.constructor.call(this);
                                            }
                                            return (
                                                Utils.Extend(BaseSelection, Utils.Observable),
                                                (BaseSelection.prototype.render = function () {
                                                    var $selection = $('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                                                    return (
                                                        (this._tabindex = 0),
                                                        null != Utils.GetData(this.$element[0], "old-tabindex")
                                                            ? (this._tabindex = Utils.GetData(this.$element[0], "old-tabindex"))
                                                            : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                                                        $selection.attr("title", this.$element.attr("title")),
                                                        $selection.attr("tabindex", this._tabindex),
                                                        $selection.attr("aria-disabled", "false"),
                                                        (this.$selection = $selection),
                                                        $selection
                                                    );
                                                }),
                                                (BaseSelection.prototype.bind = function (container, $container) {
                                                    var self = this,
                                                        resultsId = container.id + "-results";
                                                    (this.container = container),
                                                        this.$selection.on("focus", function (evt) {
                                                            self.trigger("focus", evt);
                                                        }),
                                                        this.$selection.on("blur", function (evt) {
                                                            self._handleBlur(evt);
                                                        }),
                                                        this.$selection.on("keydown", function (evt) {
                                                            self.trigger("keypress", evt), evt.which === KEYS.SPACE && evt.preventDefault();
                                                        }),
                                                        container.on("results:focus", function (params) {
                                                            self.$selection.attr("aria-activedescendant", params.data._resultId);
                                                        }),
                                                        container.on("selection:update", function (params) {
                                                            self.update(params.data);
                                                        }),
                                                        container.on("open", function () {
                                                            self.$selection.attr("aria-expanded", "true"), self.$selection.attr("aria-owns", resultsId), self._attachCloseHandler(container);
                                                        }),
                                                        container.on("close", function () {
                                                            self.$selection.attr("aria-expanded", "false"),
                                                                self.$selection.removeAttr("aria-activedescendant"),
                                                                self.$selection.removeAttr("aria-owns"),
                                                                self.$selection.trigger("focus"),
                                                                self._detachCloseHandler(container);
                                                        }),
                                                        container.on("enable", function () {
                                                            self.$selection.attr("tabindex", self._tabindex), self.$selection.attr("aria-disabled", "false");
                                                        }),
                                                        container.on("disable", function () {
                                                            self.$selection.attr("tabindex", "-1"), self.$selection.attr("aria-disabled", "true");
                                                        });
                                                }),
                                                (BaseSelection.prototype._handleBlur = function (evt) {
                                                    var self = this;
                                                    window.setTimeout(function () {
                                                        document.activeElement == self.$selection[0] || $.contains(self.$selection[0], document.activeElement) || self.trigger("blur", evt);
                                                    }, 1);
                                                }),
                                                (BaseSelection.prototype._attachCloseHandler = function (container) {
                                                    $(document.body).on("mousedown.select2." + container.id, function (e) {
                                                        var $select = $(e.target).closest(".select2");
                                                        $(".select2.select2-container--open").each(function () {
                                                            this != $select[0] && Utils.GetData(this, "element").select2("close");
                                                        });
                                                    });
                                                }),
                                                (BaseSelection.prototype._detachCloseHandler = function (container) {
                                                    $(document.body).off("mousedown.select2." + container.id);
                                                }),
                                                (BaseSelection.prototype.position = function ($selection, $container) {
                                                    $container.find(".selection").append($selection);
                                                }),
                                                (BaseSelection.prototype.destroy = function () {
                                                    this._detachCloseHandler(this.container);
                                                }),
                                                (BaseSelection.prototype.update = function (data) {
                                                    throw new Error("The `update` method must be defined in child classes.");
                                                }),
                                                (BaseSelection.prototype.isEnabled = function () {
                                                    return !this.isDisabled();
                                                }),
                                                (BaseSelection.prototype.isDisabled = function () {
                                                    return this.options.get("disabled");
                                                }),
                                                BaseSelection
                                            );
                                        }),
                                        S2.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function ($, BaseSelection, Utils, KEYS) {
                                            function SingleSelection() {
                                                SingleSelection.__super__.constructor.apply(this, arguments);
                                            }
                                            return (
                                                Utils.Extend(SingleSelection, BaseSelection),
                                                (SingleSelection.prototype.render = function () {
                                                    var $selection = SingleSelection.__super__.render.call(this);
                                                    return (
                                                        $selection[0].classList.add("select2-selection--single"),
                                                        $selection.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),
                                                        $selection
                                                    );
                                                }),
                                                (SingleSelection.prototype.bind = function (container, $container) {
                                                    var self = this;
                                                    SingleSelection.__super__.bind.apply(this, arguments);
                                                    var id = container.id + "-container";
                                                    this.$selection.find(".select2-selection__rendered").attr("id", id).attr("role", "textbox").attr("aria-readonly", "true"),
                                                        this.$selection.attr("aria-labelledby", id),
                                                        this.$selection.attr("aria-controls", id),
                                                        this.$selection.on("mousedown", function (evt) {
                                                            1 === evt.which && self.trigger("toggle", { originalEvent: evt });
                                                        }),
                                                        this.$selection.on("focus", function (evt) {}),
                                                        this.$selection.on("blur", function (evt) {}),
                                                        container.on("focus", function (evt) {
                                                            container.isOpen() || self.$selection.trigger("focus");
                                                        });
                                                }),
                                                (SingleSelection.prototype.clear = function () {
                                                    var $rendered = this.$selection.find(".select2-selection__rendered");
                                                    $rendered.empty(), $rendered.removeAttr("title");
                                                }),
                                                (SingleSelection.prototype.display = function (data, container) {
                                                    var template = this.options.get("templateSelection");
                                                    return this.options.get("escapeMarkup")(template(data, container));
                                                }),
                                                (SingleSelection.prototype.selectionContainer = function () {
                                                    return $("<span></span>");
                                                }),
                                                (SingleSelection.prototype.update = function (data) {
                                                    if (0 !== data.length) {
                                                        var selection = data[0],
                                                            $rendered = this.$selection.find(".select2-selection__rendered"),
                                                            formatted = this.display(selection, $rendered);
                                                        $rendered.empty().append(formatted);
                                                        var title = selection.title || selection.text;
                                                        title ? $rendered.attr("title", title) : $rendered.removeAttr("title");
                                                    } else this.clear();
                                                }),
                                                SingleSelection
                                            );
                                        }),
                                        S2.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function ($, BaseSelection, Utils) {
                                            function MultipleSelection($element, options) {
                                                MultipleSelection.__super__.constructor.apply(this, arguments);
                                            }
                                            return (
                                                Utils.Extend(MultipleSelection, BaseSelection),
                                                (MultipleSelection.prototype.render = function () {
                                                    var $selection = MultipleSelection.__super__.render.call(this);
                                                    return $selection[0].classList.add("select2-selection--multiple"), $selection.html('<ul class="select2-selection__rendered"></ul>'), $selection;
                                                }),
                                                (MultipleSelection.prototype.bind = function (container, $container) {
                                                    var self = this;
                                                    MultipleSelection.__super__.bind.apply(this, arguments);
                                                    var id = container.id + "-container";
                                                    this.$selection.find(".select2-selection__rendered").attr("id", id),
                                                        this.$selection.on("click", function (evt) {
                                                            self.trigger("toggle", { originalEvent: evt });
                                                        }),
                                                        this.$selection.on("click", ".select2-selection__choice__remove", function (evt) {
                                                            if (!self.isDisabled()) {
                                                                var $selection = $(this).parent(),
                                                                    data = Utils.GetData($selection[0], "data");
                                                                self.trigger("unselect", { originalEvent: evt, data: data });
                                                            }
                                                        }),
                                                        this.$selection.on("keydown", ".select2-selection__choice__remove", function (evt) {
                                                            self.isDisabled() || evt.stopPropagation();
                                                        });
                                                }),
                                                (MultipleSelection.prototype.clear = function () {
                                                    var $rendered = this.$selection.find(".select2-selection__rendered");
                                                    $rendered.empty(), $rendered.removeAttr("title");
                                                }),
                                                (MultipleSelection.prototype.display = function (data, container) {
                                                    var template = this.options.get("templateSelection");
                                                    return this.options.get("escapeMarkup")(template(data, container));
                                                }),
                                                (MultipleSelection.prototype.selectionContainer = function () {
                                                    return $(
                                                        '<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>'
                                                    );
                                                }),
                                                (MultipleSelection.prototype.update = function (data) {
                                                    if ((this.clear(), 0 !== data.length)) {
                                                        for (var $selections = [], selectionIdPrefix = this.$selection.find(".select2-selection__rendered").attr("id") + "-choice-", d = 0; d < data.length; d++) {
                                                            var selection = data[d],
                                                                $selection = this.selectionContainer(),
                                                                formatted = this.display(selection, $selection),
                                                                selectionId = selectionIdPrefix + Utils.generateChars(4) + "-";
                                                            selection.id ? (selectionId += selection.id) : (selectionId += Utils.generateChars(4)),
                                                                $selection.find(".select2-selection__choice__display").append(formatted).attr("id", selectionId);
                                                            var title = selection.title || selection.text;
                                                            title && $selection.attr("title", title);
                                                            var removeItem = this.options.get("translations").get("removeItem"),
                                                                $remove = $selection.find(".select2-selection__choice__remove");
                                                            $remove.attr("title", removeItem()),
                                                                $remove.attr("aria-label", removeItem()),
                                                                $remove.attr("aria-describedby", selectionId),
                                                                Utils.StoreData($selection[0], "data", selection),
                                                                $selections.push($selection);
                                                        }
                                                        this.$selection.find(".select2-selection__rendered").append($selections);
                                                    }
                                                }),
                                                MultipleSelection
                                            );
                                        }),
                                        S2.define("select2/selection/placeholder", [], function () {
                                            function Placeholder(decorated, $element, options) {
                                                (this.placeholder = this.normalizePlaceholder(options.get("placeholder"))), decorated.call(this, $element, options);
                                            }
                                            return (
                                                (Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
                                                    return "string" == typeof placeholder && (placeholder = { id: "", text: placeholder }), placeholder;
                                                }),
                                                (Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
                                                    var $placeholder = this.selectionContainer();
                                                    $placeholder.html(this.display(placeholder)), $placeholder[0].classList.add("select2-selection__placeholder"), $placeholder[0].classList.remove("select2-selection__choice");
                                                    var placeholderTitle = placeholder.title || placeholder.text || $placeholder.text();
                                                    return this.$selection.find(".select2-selection__rendered").attr("title", placeholderTitle), $placeholder;
                                                }),
                                                (Placeholder.prototype.update = function (decorated, data) {
                                                    var singlePlaceholder = 1 == data.length && data[0].id != this.placeholder.id;
                                                    if (data.length > 1 || singlePlaceholder) return decorated.call(this, data);
                                                    this.clear();
                                                    var $placeholder = this.createPlaceholder(this.placeholder);
                                                    this.$selection.find(".select2-selection__rendered").append($placeholder);
                                                }),
                                                Placeholder
                                            );
                                        }),
                                        S2.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function ($, KEYS, Utils) {
                                            function AllowClear() {}
                                            return (
                                                (AllowClear.prototype.bind = function (decorated, container, $container) {
                                                    var self = this;
                                                    decorated.call(this, container, $container),
                                                        null == this.placeholder && this.options.get("debug") && window.console && console.error,
                                                        this.$selection.on("mousedown", ".select2-selection__clear", function (evt) {
                                                            self._handleClear(evt);
                                                        }),
                                                        container.on("keypress", function (evt) {
                                                            self._handleKeyboardClear(evt, container);
                                                        });
                                                }),
                                                (AllowClear.prototype._handleClear = function (_, evt) {
                                                    if (!this.isDisabled()) {
                                                        var $clear = this.$selection.find(".select2-selection__clear");
                                                        if (0 !== $clear.length) {
                                                            evt.stopPropagation();
                                                            var data = Utils.GetData($clear[0], "data"),
                                                                previousVal = this.$element.val();
                                                            this.$element.val(this.placeholder.id);
                                                            var unselectData = { data: data };
                                                            if ((this.trigger("clear", unselectData), unselectData.prevented)) this.$element.val(previousVal);
                                                            else {
                                                                for (var d = 0; d < data.length; d++)
                                                                    if (((unselectData = { data: data[d] }), this.trigger("unselect", unselectData), unselectData.prevented)) return void this.$element.val(previousVal);
                                                                this.$element.trigger("input").trigger("change"), this.trigger("toggle", {});
                                                            }
                                                        }
                                                    }
                                                }),
                                                (AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
                                                    container.isOpen() || (evt.which != KEYS.DELETE && evt.which != KEYS.BACKSPACE) || this._handleClear(evt);
                                                }),
                                                (AllowClear.prototype.update = function (decorated, data) {
                                                    if (
                                                        (decorated.call(this, data),
                                                        this.$selection.find(".select2-selection__clear").remove(),
                                                        this.$selection[0].classList.remove("select2-selection--clearable"),
                                                        !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === data.length))
                                                    ) {
                                                        var selectionId = this.$selection.find(".select2-selection__rendered").attr("id"),
                                                            removeAll = this.options.get("translations").get("removeAllItems"),
                                                            $remove = $('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>');
                                                        $remove.attr("title", removeAll()),
                                                            $remove.attr("aria-label", removeAll()),
                                                            $remove.attr("aria-describedby", selectionId),
                                                            Utils.StoreData($remove[0], "data", data),
                                                            this.$selection.prepend($remove),
                                                            this.$selection[0].classList.add("select2-selection--clearable");
                                                    }
                                                }),
                                                AllowClear
                                            );
                                        }),
                                        S2.define("select2/selection/search", ["jquery", "../utils", "../keys"], function ($, Utils, KEYS) {
                                            function Search(decorated, $element, options) {
                                                decorated.call(this, $element, options);
                                            }
                                            return (
                                                (Search.prototype.render = function (decorated) {
                                                    var searchLabel = this.options.get("translations").get("search"),
                                                        $search = $(
                                                            '<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>'
                                                        );
                                                    (this.$searchContainer = $search),
                                                        (this.$search = $search.find("textarea")),
                                                        this.$search.prop("autocomplete", this.options.get("autocomplete")),
                                                        this.$search.attr("aria-label", searchLabel());
                                                    var $rendered = decorated.call(this);
                                                    return this._transferTabIndex(), $rendered.append(this.$searchContainer), $rendered;
                                                }),
                                                (Search.prototype.bind = function (decorated, container, $container) {
                                                    var self = this,
                                                        resultsId = container.id + "-results",
                                                        selectionId = container.id + "-container";
                                                    decorated.call(this, container, $container),
                                                        self.$search.attr("aria-describedby", selectionId),
                                                        container.on("open", function () {
                                                            self.$search.attr("aria-controls", resultsId), self.$search.trigger("focus");
                                                        }),
                                                        container.on("close", function () {
                                                            self.$search.val(""), self.resizeSearch(), self.$search.removeAttr("aria-controls"), self.$search.removeAttr("aria-activedescendant"), self.$search.trigger("focus");
                                                        }),
                                                        container.on("enable", function () {
                                                            self.$search.prop("disabled", !1), self._transferTabIndex();
                                                        }),
                                                        container.on("disable", function () {
                                                            self.$search.prop("disabled", !0);
                                                        }),
                                                        container.on("focus", function (evt) {
                                                            self.$search.trigger("focus");
                                                        }),
                                                        container.on("results:focus", function (params) {
                                                            params.data._resultId ? self.$search.attr("aria-activedescendant", params.data._resultId) : self.$search.removeAttr("aria-activedescendant");
                                                        }),
                                                        this.$selection.on("focusin", ".select2-search--inline", function (evt) {
                                                            self.trigger("focus", evt);
                                                        }),
                                                        this.$selection.on("focusout", ".select2-search--inline", function (evt) {
                                                            self._handleBlur(evt);
                                                        }),
                                                        this.$selection.on("keydown", ".select2-search--inline", function (evt) {
                                                            if ((evt.stopPropagation(), self.trigger("keypress", evt), (self._keyUpPrevented = evt.isDefaultPrevented()), evt.which === KEYS.BACKSPACE && "" === self.$search.val())) {
                                                                var $previousChoice = self.$selection.find(".select2-selection__choice").last();
                                                                if ($previousChoice.length > 0) {
                                                                    var item = Utils.GetData($previousChoice[0], "data");
                                                                    self.searchRemoveChoice(item), evt.preventDefault();
                                                                }
                                                            }
                                                        }),
                                                        this.$selection.on("click", ".select2-search--inline", function (evt) {
                                                            self.$search.val() && evt.stopPropagation();
                                                        });
                                                    var msie = document.documentMode,
                                                        disableInputEvents = msie && msie <= 11;
                                                    this.$selection.on("input.searchcheck", ".select2-search--inline", function (evt) {
                                                        disableInputEvents ? self.$selection.off("input.search input.searchcheck") : self.$selection.off("keyup.search");
                                                    }),
                                                        this.$selection.on("keyup.search input.search", ".select2-search--inline", function (evt) {
                                                            if (disableInputEvents && "input" === evt.type) self.$selection.off("input.search input.searchcheck");
                                                            else {
                                                                var key = evt.which;
                                                                key != KEYS.SHIFT && key != KEYS.CTRL && key != KEYS.ALT && key != KEYS.TAB && self.handleSearch(evt);
                                                            }
                                                        });
                                                }),
                                                (Search.prototype._transferTabIndex = function (decorated) {
                                                    this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
                                                }),
                                                (Search.prototype.createPlaceholder = function (decorated, placeholder) {
                                                    this.$search.attr("placeholder", placeholder.text);
                                                }),
                                                (Search.prototype.update = function (decorated, data) {
                                                    var searchHadFocus = this.$search[0] == document.activeElement;
                                                    this.$search.attr("placeholder", ""), decorated.call(this, data), this.resizeSearch(), searchHadFocus && this.$search.trigger("focus");
                                                }),
                                                (Search.prototype.handleSearch = function () {
                                                    if ((this.resizeSearch(), !this._keyUpPrevented)) {
                                                        var input = this.$search.val();
                                                        this.trigger("query", { term: input });
                                                    }
                                                    this._keyUpPrevented = !1;
                                                }),
                                                (Search.prototype.searchRemoveChoice = function (decorated, item) {
                                                    this.trigger("unselect", { data: item }), this.$search.val(item.text), this.handleSearch();
                                                }),
                                                (Search.prototype.resizeSearch = function () {
                                                    this.$search.css("width", "25px");
                                                    var width = "100%";
                                                    "" === this.$search.attr("placeholder") && (width = 0.75 * (this.$search.val().length + 1) + "em"), this.$search.css("width", width);
                                                }),
                                                Search
                                            );
                                        }),
                                        S2.define("select2/selection/selectionCss", ["../utils"], function (Utils) {
                                            function SelectionCSS() {}
                                            return (
                                                (SelectionCSS.prototype.render = function (decorated) {
                                                    var $selection = decorated.call(this),
                                                        selectionCssClass = this.options.get("selectionCssClass") || "";
                                                    return (
                                                        -1 !== selectionCssClass.indexOf(":all:") && ((selectionCssClass = selectionCssClass.replace(":all:", "")), Utils.copyNonInternalCssClasses($selection[0], this.$element[0])),
                                                        $selection.addClass(selectionCssClass),
                                                        $selection
                                                    );
                                                }),
                                                SelectionCSS
                                            );
                                        }),
                                        S2.define("select2/selection/eventRelay", ["jquery"], function ($) {
                                            function EventRelay() {}
                                            return (
                                                (EventRelay.prototype.bind = function (decorated, container, $container) {
                                                    var self = this,
                                                        relayEvents = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                                                        preventableEvents = ["opening", "closing", "selecting", "unselecting", "clearing"];
                                                    decorated.call(this, container, $container),
                                                        container.on("*", function (name, params) {
                                                            if (-1 !== relayEvents.indexOf(name)) {
                                                                params = params || {};
                                                                var evt = $.Event("select2:" + name, { params: params });
                                                                self.$element.trigger(evt), -1 !== preventableEvents.indexOf(name) && (params.prevented = evt.isDefaultPrevented());
                                                            }
                                                        });
                                                }),
                                                EventRelay
                                            );
                                        }),
                                        S2.define("select2/translation", ["jquery", "require"], function ($, require) {
                                            function Translation(dict) {
                                                this.dict = dict || {};
                                            }
                                            return (
                                                (Translation.prototype.all = function () {
                                                    return this.dict;
                                                }),
                                                (Translation.prototype.get = function (key) {
                                                    return this.dict[key];
                                                }),
                                                (Translation.prototype.extend = function (translation) {
                                                    this.dict = $.extend({}, translation.all(), this.dict);
                                                }),
                                                (Translation._cache = {}),
                                                (Translation.loadPath = function (path) {
                                                    if (!(path in Translation._cache)) {
                                                        var translations = require(path);
                                                        Translation._cache[path] = translations;
                                                    }
                                                    return new Translation(Translation._cache[path]);
                                                }),
                                                Translation
                                            );
                                        }),
                                        S2.define("select2/diacritics", [], function () {
                                            return {
                                                "Ⓐ": "A",
                                                Ａ: "A",
                                                À: "A",
                                                Á: "A",
                                                Â: "A",
                                                Ầ: "A",
                                                Ấ: "A",
                                                Ẫ: "A",
                                                Ẩ: "A",
                                                Ã: "A",
                                                Ā: "A",
                                                Ă: "A",
                                                Ằ: "A",
                                                Ắ: "A",
                                                Ẵ: "A",
                                                Ẳ: "A",
                                                Ȧ: "A",
                                                Ǡ: "A",
                                                Ä: "A",
                                                Ǟ: "A",
                                                Ả: "A",
                                                Å: "A",
                                                Ǻ: "A",
                                                Ǎ: "A",
                                                Ȁ: "A",
                                                Ȃ: "A",
                                                Ạ: "A",
                                                Ậ: "A",
                                                Ặ: "A",
                                                Ḁ: "A",
                                                Ą: "A",
                                                Ⱥ: "A",
                                                Ɐ: "A",
                                                Ꜳ: "AA",
                                                Æ: "AE",
                                                Ǽ: "AE",
                                                Ǣ: "AE",
                                                Ꜵ: "AO",
                                                Ꜷ: "AU",
                                                Ꜹ: "AV",
                                                Ꜻ: "AV",
                                                Ꜽ: "AY",
                                                "Ⓑ": "B",
                                                Ｂ: "B",
                                                Ḃ: "B",
                                                Ḅ: "B",
                                                Ḇ: "B",
                                                Ƀ: "B",
                                                Ƃ: "B",
                                                Ɓ: "B",
                                                "Ⓒ": "C",
                                                Ｃ: "C",
                                                Ć: "C",
                                                Ĉ: "C",
                                                Ċ: "C",
                                                Č: "C",
                                                Ç: "C",
                                                Ḉ: "C",
                                                Ƈ: "C",
                                                Ȼ: "C",
                                                Ꜿ: "C",
                                                "Ⓓ": "D",
                                                Ｄ: "D",
                                                Ḋ: "D",
                                                Ď: "D",
                                                Ḍ: "D",
                                                Ḑ: "D",
                                                Ḓ: "D",
                                                Ḏ: "D",
                                                Đ: "D",
                                                Ƌ: "D",
                                                Ɗ: "D",
                                                Ɖ: "D",
                                                Ꝺ: "D",
                                                Ǳ: "DZ",
                                                Ǆ: "DZ",
                                                ǲ: "Dz",
                                                ǅ: "Dz",
                                                "Ⓔ": "E",
                                                Ｅ: "E",
                                                È: "E",
                                                É: "E",
                                                Ê: "E",
                                                Ề: "E",
                                                Ế: "E",
                                                Ễ: "E",
                                                Ể: "E",
                                                Ẽ: "E",
                                                Ē: "E",
                                                Ḕ: "E",
                                                Ḗ: "E",
                                                Ĕ: "E",
                                                Ė: "E",
                                                Ë: "E",
                                                Ẻ: "E",
                                                Ě: "E",
                                                Ȅ: "E",
                                                Ȇ: "E",
                                                Ẹ: "E",
                                                Ệ: "E",
                                                Ȩ: "E",
                                                Ḝ: "E",
                                                Ę: "E",
                                                Ḙ: "E",
                                                Ḛ: "E",
                                                Ɛ: "E",
                                                Ǝ: "E",
                                                "Ⓕ": "F",
                                                Ｆ: "F",
                                                Ḟ: "F",
                                                Ƒ: "F",
                                                Ꝼ: "F",
                                                "Ⓖ": "G",
                                                Ｇ: "G",
                                                Ǵ: "G",
                                                Ĝ: "G",
                                                Ḡ: "G",
                                                Ğ: "G",
                                                Ġ: "G",
                                                Ǧ: "G",
                                                Ģ: "G",
                                                Ǥ: "G",
                                                Ɠ: "G",
                                                Ꞡ: "G",
                                                Ᵹ: "G",
                                                Ꝿ: "G",
                                                "Ⓗ": "H",
                                                Ｈ: "H",
                                                Ĥ: "H",
                                                Ḣ: "H",
                                                Ḧ: "H",
                                                Ȟ: "H",
                                                Ḥ: "H",
                                                Ḩ: "H",
                                                Ḫ: "H",
                                                Ħ: "H",
                                                Ⱨ: "H",
                                                Ⱶ: "H",
                                                Ɥ: "H",
                                                "Ⓘ": "I",
                                                Ｉ: "I",
                                                Ì: "I",
                                                Í: "I",
                                                Î: "I",
                                                Ĩ: "I",
                                                Ī: "I",
                                                Ĭ: "I",
                                                İ: "I",
                                                Ï: "I",
                                                Ḯ: "I",
                                                Ỉ: "I",
                                                Ǐ: "I",
                                                Ȉ: "I",
                                                Ȋ: "I",
                                                Ị: "I",
                                                Į: "I",
                                                Ḭ: "I",
                                                Ɨ: "I",
                                                "Ⓙ": "J",
                                                Ｊ: "J",
                                                Ĵ: "J",
                                                Ɉ: "J",
                                                "Ⓚ": "K",
                                                Ｋ: "K",
                                                Ḱ: "K",
                                                Ǩ: "K",
                                                Ḳ: "K",
                                                Ķ: "K",
                                                Ḵ: "K",
                                                Ƙ: "K",
                                                Ⱪ: "K",
                                                Ꝁ: "K",
                                                Ꝃ: "K",
                                                Ꝅ: "K",
                                                Ꞣ: "K",
                                                "Ⓛ": "L",
                                                Ｌ: "L",
                                                Ŀ: "L",
                                                Ĺ: "L",
                                                Ľ: "L",
                                                Ḷ: "L",
                                                Ḹ: "L",
                                                Ļ: "L",
                                                Ḽ: "L",
                                                Ḻ: "L",
                                                Ł: "L",
                                                Ƚ: "L",
                                                Ɫ: "L",
                                                Ⱡ: "L",
                                                Ꝉ: "L",
                                                Ꝇ: "L",
                                                Ꞁ: "L",
                                                Ǉ: "LJ",
                                                ǈ: "Lj",
                                                "Ⓜ": "M",
                                                Ｍ: "M",
                                                Ḿ: "M",
                                                Ṁ: "M",
                                                Ṃ: "M",
                                                Ɱ: "M",
                                                Ɯ: "M",
                                                "Ⓝ": "N",
                                                Ｎ: "N",
                                                Ǹ: "N",
                                                Ń: "N",
                                                Ñ: "N",
                                                Ṅ: "N",
                                                Ň: "N",
                                                Ṇ: "N",
                                                Ņ: "N",
                                                Ṋ: "N",
                                                Ṉ: "N",
                                                Ƞ: "N",
                                                Ɲ: "N",
                                                Ꞑ: "N",
                                                Ꞥ: "N",
                                                Ǌ: "NJ",
                                                ǋ: "Nj",
                                                "Ⓞ": "O",
                                                Ｏ: "O",
                                                Ò: "O",
                                                Ó: "O",
                                                Ô: "O",
                                                Ồ: "O",
                                                Ố: "O",
                                                Ỗ: "O",
                                                Ổ: "O",
                                                Õ: "O",
                                                Ṍ: "O",
                                                Ȭ: "O",
                                                Ṏ: "O",
                                                Ō: "O",
                                                Ṑ: "O",
                                                Ṓ: "O",
                                                Ŏ: "O",
                                                Ȯ: "O",
                                                Ȱ: "O",
                                                Ö: "O",
                                                Ȫ: "O",
                                                Ỏ: "O",
                                                Ő: "O",
                                                Ǒ: "O",
                                                Ȍ: "O",
                                                Ȏ: "O",
                                                Ơ: "O",
                                                Ờ: "O",
                                                Ớ: "O",
                                                Ỡ: "O",
                                                Ở: "O",
                                                Ợ: "O",
                                                Ọ: "O",
                                                Ộ: "O",
                                                Ǫ: "O",
                                                Ǭ: "O",
                                                Ø: "O",
                                                Ǿ: "O",
                                                Ɔ: "O",
                                                Ɵ: "O",
                                                Ꝋ: "O",
                                                Ꝍ: "O",
                                                Œ: "OE",
                                                Ƣ: "OI",
                                                Ꝏ: "OO",
                                                Ȣ: "OU",
                                                "Ⓟ": "P",
                                                Ｐ: "P",
                                                Ṕ: "P",
                                                Ṗ: "P",
                                                Ƥ: "P",
                                                Ᵽ: "P",
                                                Ꝑ: "P",
                                                Ꝓ: "P",
                                                Ꝕ: "P",
                                                "Ⓠ": "Q",
                                                Ｑ: "Q",
                                                Ꝗ: "Q",
                                                Ꝙ: "Q",
                                                Ɋ: "Q",
                                                "Ⓡ": "R",
                                                Ｒ: "R",
                                                Ŕ: "R",
                                                Ṙ: "R",
                                                Ř: "R",
                                                Ȑ: "R",
                                                Ȓ: "R",
                                                Ṛ: "R",
                                                Ṝ: "R",
                                                Ŗ: "R",
                                                Ṟ: "R",
                                                Ɍ: "R",
                                                Ɽ: "R",
                                                Ꝛ: "R",
                                                Ꞧ: "R",
                                                Ꞃ: "R",
                                                "Ⓢ": "S",
                                                Ｓ: "S",
                                                ẞ: "S",
                                                Ś: "S",
                                                Ṥ: "S",
                                                Ŝ: "S",
                                                Ṡ: "S",
                                                Š: "S",
                                                Ṧ: "S",
                                                Ṣ: "S",
                                                Ṩ: "S",
                                                Ș: "S",
                                                Ş: "S",
                                                Ȿ: "S",
                                                Ꞩ: "S",
                                                Ꞅ: "S",
                                                "Ⓣ": "T",
                                                Ｔ: "T",
                                                Ṫ: "T",
                                                Ť: "T",
                                                Ṭ: "T",
                                                Ț: "T",
                                                Ţ: "T",
                                                Ṱ: "T",
                                                Ṯ: "T",
                                                Ŧ: "T",
                                                Ƭ: "T",
                                                Ʈ: "T",
                                                Ⱦ: "T",
                                                Ꞇ: "T",
                                                Ꜩ: "TZ",
                                                "Ⓤ": "U",
                                                Ｕ: "U",
                                                Ù: "U",
                                                Ú: "U",
                                                Û: "U",
                                                Ũ: "U",
                                                Ṹ: "U",
                                                Ū: "U",
                                                Ṻ: "U",
                                                Ŭ: "U",
                                                Ü: "U",
                                                Ǜ: "U",
                                                Ǘ: "U",
                                                Ǖ: "U",
                                                Ǚ: "U",
                                                Ủ: "U",
                                                Ů: "U",
                                                Ű: "U",
                                                Ǔ: "U",
                                                Ȕ: "U",
                                                Ȗ: "U",
                                                Ư: "U",
                                                Ừ: "U",
                                                Ứ: "U",
                                                Ữ: "U",
                                                Ử: "U",
                                                Ự: "U",
                                                Ụ: "U",
                                                Ṳ: "U",
                                                Ų: "U",
                                                Ṷ: "U",
                                                Ṵ: "U",
                                                Ʉ: "U",
                                                "Ⓥ": "V",
                                                Ｖ: "V",
                                                Ṽ: "V",
                                                Ṿ: "V",
                                                Ʋ: "V",
                                                Ꝟ: "V",
                                                Ʌ: "V",
                                                Ꝡ: "VY",
                                                "Ⓦ": "W",
                                                Ｗ: "W",
                                                Ẁ: "W",
                                                Ẃ: "W",
                                                Ŵ: "W",
                                                Ẇ: "W",
                                                Ẅ: "W",
                                                Ẉ: "W",
                                                Ⱳ: "W",
                                                "Ⓧ": "X",
                                                Ｘ: "X",
                                                Ẋ: "X",
                                                Ẍ: "X",
                                                "Ⓨ": "Y",
                                                Ｙ: "Y",
                                                Ỳ: "Y",
                                                Ý: "Y",
                                                Ŷ: "Y",
                                                Ỹ: "Y",
                                                Ȳ: "Y",
                                                Ẏ: "Y",
                                                Ÿ: "Y",
                                                Ỷ: "Y",
                                                Ỵ: "Y",
                                                Ƴ: "Y",
                                                Ɏ: "Y",
                                                Ỿ: "Y",
                                                "Ⓩ": "Z",
                                                Ｚ: "Z",
                                                Ź: "Z",
                                                Ẑ: "Z",
                                                Ż: "Z",
                                                Ž: "Z",
                                                Ẓ: "Z",
                                                Ẕ: "Z",
                                                Ƶ: "Z",
                                                Ȥ: "Z",
                                                Ɀ: "Z",
                                                Ⱬ: "Z",
                                                Ꝣ: "Z",
                                                "ⓐ": "a",
                                                ａ: "a",
                                                ẚ: "a",
                                                à: "a",
                                                á: "a",
                                                â: "a",
                                                ầ: "a",
                                                ấ: "a",
                                                ẫ: "a",
                                                ẩ: "a",
                                                ã: "a",
                                                ā: "a",
                                                ă: "a",
                                                ằ: "a",
                                                ắ: "a",
                                                ẵ: "a",
                                                ẳ: "a",
                                                ȧ: "a",
                                                ǡ: "a",
                                                ä: "a",
                                                ǟ: "a",
                                                ả: "a",
                                                å: "a",
                                                ǻ: "a",
                                                ǎ: "a",
                                                ȁ: "a",
                                                ȃ: "a",
                                                ạ: "a",
                                                ậ: "a",
                                                ặ: "a",
                                                ḁ: "a",
                                                ą: "a",
                                                ⱥ: "a",
                                                ɐ: "a",
                                                ꜳ: "aa",
                                                æ: "ae",
                                                ǽ: "ae",
                                                ǣ: "ae",
                                                ꜵ: "ao",
                                                ꜷ: "au",
                                                ꜹ: "av",
                                                ꜻ: "av",
                                                ꜽ: "ay",
                                                "ⓑ": "b",
                                                ｂ: "b",
                                                ḃ: "b",
                                                ḅ: "b",
                                                ḇ: "b",
                                                ƀ: "b",
                                                ƃ: "b",
                                                ɓ: "b",
                                                "ⓒ": "c",
                                                ｃ: "c",
                                                ć: "c",
                                                ĉ: "c",
                                                ċ: "c",
                                                č: "c",
                                                ç: "c",
                                                ḉ: "c",
                                                ƈ: "c",
                                                ȼ: "c",
                                                ꜿ: "c",
                                                ↄ: "c",
                                                "ⓓ": "d",
                                                ｄ: "d",
                                                ḋ: "d",
                                                ď: "d",
                                                ḍ: "d",
                                                ḑ: "d",
                                                ḓ: "d",
                                                ḏ: "d",
                                                đ: "d",
                                                ƌ: "d",
                                                ɖ: "d",
                                                ɗ: "d",
                                                ꝺ: "d",
                                                ǳ: "dz",
                                                ǆ: "dz",
                                                "ⓔ": "e",
                                                ｅ: "e",
                                                è: "e",
                                                é: "e",
                                                ê: "e",
                                                ề: "e",
                                                ế: "e",
                                                ễ: "e",
                                                ể: "e",
                                                ẽ: "e",
                                                ē: "e",
                                                ḕ: "e",
                                                ḗ: "e",
                                                ĕ: "e",
                                                ė: "e",
                                                ë: "e",
                                                ẻ: "e",
                                                ě: "e",
                                                ȅ: "e",
                                                ȇ: "e",
                                                ẹ: "e",
                                                ệ: "e",
                                                ȩ: "e",
                                                ḝ: "e",
                                                ę: "e",
                                                ḙ: "e",
                                                ḛ: "e",
                                                ɇ: "e",
                                                ɛ: "e",
                                                ǝ: "e",
                                                "ⓕ": "f",
                                                ｆ: "f",
                                                ḟ: "f",
                                                ƒ: "f",
                                                ꝼ: "f",
                                                "ⓖ": "g",
                                                ｇ: "g",
                                                ǵ: "g",
                                                ĝ: "g",
                                                ḡ: "g",
                                                ğ: "g",
                                                ġ: "g",
                                                ǧ: "g",
                                                ģ: "g",
                                                ǥ: "g",
                                                ɠ: "g",
                                                ꞡ: "g",
                                                ᵹ: "g",
                                                ꝿ: "g",
                                                "ⓗ": "h",
                                                ｈ: "h",
                                                ĥ: "h",
                                                ḣ: "h",
                                                ḧ: "h",
                                                ȟ: "h",
                                                ḥ: "h",
                                                ḩ: "h",
                                                ḫ: "h",
                                                ẖ: "h",
                                                ħ: "h",
                                                ⱨ: "h",
                                                ⱶ: "h",
                                                ɥ: "h",
                                                ƕ: "hv",
                                                "ⓘ": "i",
                                                ｉ: "i",
                                                ì: "i",
                                                í: "i",
                                                î: "i",
                                                ĩ: "i",
                                                ī: "i",
                                                ĭ: "i",
                                                ï: "i",
                                                ḯ: "i",
                                                ỉ: "i",
                                                ǐ: "i",
                                                ȉ: "i",
                                                ȋ: "i",
                                                ị: "i",
                                                į: "i",
                                                ḭ: "i",
                                                ɨ: "i",
                                                ı: "i",
                                                "ⓙ": "j",
                                                ｊ: "j",
                                                ĵ: "j",
                                                ǰ: "j",
                                                ɉ: "j",
                                                "ⓚ": "k",
                                                ｋ: "k",
                                                ḱ: "k",
                                                ǩ: "k",
                                                ḳ: "k",
                                                ķ: "k",
                                                ḵ: "k",
                                                ƙ: "k",
                                                ⱪ: "k",
                                                ꝁ: "k",
                                                ꝃ: "k",
                                                ꝅ: "k",
                                                ꞣ: "k",
                                                "ⓛ": "l",
                                                ｌ: "l",
                                                ŀ: "l",
                                                ĺ: "l",
                                                ľ: "l",
                                                ḷ: "l",
                                                ḹ: "l",
                                                ļ: "l",
                                                ḽ: "l",
                                                ḻ: "l",
                                                ſ: "l",
                                                ł: "l",
                                                ƚ: "l",
                                                ɫ: "l",
                                                ⱡ: "l",
                                                ꝉ: "l",
                                                ꞁ: "l",
                                                ꝇ: "l",
                                                ǉ: "lj",
                                                "ⓜ": "m",
                                                ｍ: "m",
                                                ḿ: "m",
                                                ṁ: "m",
                                                ṃ: "m",
                                                ɱ: "m",
                                                ɯ: "m",
                                                "ⓝ": "n",
                                                ｎ: "n",
                                                ǹ: "n",
                                                ń: "n",
                                                ñ: "n",
                                                ṅ: "n",
                                                ň: "n",
                                                ṇ: "n",
                                                ņ: "n",
                                                ṋ: "n",
                                                ṉ: "n",
                                                ƞ: "n",
                                                ɲ: "n",
                                                ŉ: "n",
                                                ꞑ: "n",
                                                ꞥ: "n",
                                                ǌ: "nj",
                                                "ⓞ": "o",
                                                ｏ: "o",
                                                ò: "o",
                                                ó: "o",
                                                ô: "o",
                                                ồ: "o",
                                                ố: "o",
                                                ỗ: "o",
                                                ổ: "o",
                                                õ: "o",
                                                ṍ: "o",
                                                ȭ: "o",
                                                ṏ: "o",
                                                ō: "o",
                                                ṑ: "o",
                                                ṓ: "o",
                                                ŏ: "o",
                                                ȯ: "o",
                                                ȱ: "o",
                                                ö: "o",
                                                ȫ: "o",
                                                ỏ: "o",
                                                ő: "o",
                                                ǒ: "o",
                                                ȍ: "o",
                                                ȏ: "o",
                                                ơ: "o",
                                                ờ: "o",
                                                ớ: "o",
                                                ỡ: "o",
                                                ở: "o",
                                                ợ: "o",
                                                ọ: "o",
                                                ộ: "o",
                                                ǫ: "o",
                                                ǭ: "o",
                                                ø: "o",
                                                ǿ: "o",
                                                ɔ: "o",
                                                ꝋ: "o",
                                                ꝍ: "o",
                                                ɵ: "o",
                                                œ: "oe",
                                                ƣ: "oi",
                                                ȣ: "ou",
                                                ꝏ: "oo",
                                                "ⓟ": "p",
                                                ｐ: "p",
                                                ṕ: "p",
                                                ṗ: "p",
                                                ƥ: "p",
                                                ᵽ: "p",
                                                ꝑ: "p",
                                                ꝓ: "p",
                                                ꝕ: "p",
                                                "ⓠ": "q",
                                                ｑ: "q",
                                                ɋ: "q",
                                                ꝗ: "q",
                                                ꝙ: "q",
                                                "ⓡ": "r",
                                                ｒ: "r",
                                                ŕ: "r",
                                                ṙ: "r",
                                                ř: "r",
                                                ȑ: "r",
                                                ȓ: "r",
                                                ṛ: "r",
                                                ṝ: "r",
                                                ŗ: "r",
                                                ṟ: "r",
                                                ɍ: "r",
                                                ɽ: "r",
                                                ꝛ: "r",
                                                ꞧ: "r",
                                                ꞃ: "r",
                                                "ⓢ": "s",
                                                ｓ: "s",
                                                ß: "s",
                                                ś: "s",
                                                ṥ: "s",
                                                ŝ: "s",
                                                ṡ: "s",
                                                š: "s",
                                                ṧ: "s",
                                                ṣ: "s",
                                                ṩ: "s",
                                                ș: "s",
                                                ş: "s",
                                                ȿ: "s",
                                                ꞩ: "s",
                                                ꞅ: "s",
                                                ẛ: "s",
                                                "ⓣ": "t",
                                                ｔ: "t",
                                                ṫ: "t",
                                                ẗ: "t",
                                                ť: "t",
                                                ṭ: "t",
                                                ț: "t",
                                                ţ: "t",
                                                ṱ: "t",
                                                ṯ: "t",
                                                ŧ: "t",
                                                ƭ: "t",
                                                ʈ: "t",
                                                ⱦ: "t",
                                                ꞇ: "t",
                                                ꜩ: "tz",
                                                "ⓤ": "u",
                                                ｕ: "u",
                                                ù: "u",
                                                ú: "u",
                                                û: "u",
                                                ũ: "u",
                                                ṹ: "u",
                                                ū: "u",
                                                ṻ: "u",
                                                ŭ: "u",
                                                ü: "u",
                                                ǜ: "u",
                                                ǘ: "u",
                                                ǖ: "u",
                                                ǚ: "u",
                                                ủ: "u",
                                                ů: "u",
                                                ű: "u",
                                                ǔ: "u",
                                                ȕ: "u",
                                                ȗ: "u",
                                                ư: "u",
                                                ừ: "u",
                                                ứ: "u",
                                                ữ: "u",
                                                ử: "u",
                                                ự: "u",
                                                ụ: "u",
                                                ṳ: "u",
                                                ų: "u",
                                                ṷ: "u",
                                                ṵ: "u",
                                                ʉ: "u",
                                                "ⓥ": "v",
                                                ｖ: "v",
                                                ṽ: "v",
                                                ṿ: "v",
                                                ʋ: "v",
                                                ꝟ: "v",
                                                ʌ: "v",
                                                ꝡ: "vy",
                                                "ⓦ": "w",
                                                ｗ: "w",
                                                ẁ: "w",
                                                ẃ: "w",
                                                ŵ: "w",
                                                ẇ: "w",
                                                ẅ: "w",
                                                ẘ: "w",
                                                ẉ: "w",
                                                ⱳ: "w",
                                                "ⓧ": "x",
                                                ｘ: "x",
                                                ẋ: "x",
                                                ẍ: "x",
                                                "ⓨ": "y",
                                                ｙ: "y",
                                                ỳ: "y",
                                                ý: "y",
                                                ŷ: "y",
                                                ỹ: "y",
                                                ȳ: "y",
                                                ẏ: "y",
                                                ÿ: "y",
                                                ỷ: "y",
                                                ẙ: "y",
                                                ỵ: "y",
                                                ƴ: "y",
                                                ɏ: "y",
                                                ỿ: "y",
                                                "ⓩ": "z",
                                                ｚ: "z",
                                                ź: "z",
                                                ẑ: "z",
                                                ż: "z",
                                                ž: "z",
                                                ẓ: "z",
                                                ẕ: "z",
                                                ƶ: "z",
                                                ȥ: "z",
                                                ɀ: "z",
                                                ⱬ: "z",
                                                ꝣ: "z",
                                                Ά: "Α",
                                                Έ: "Ε",
                                                Ή: "Η",
                                                Ί: "Ι",
                                                Ϊ: "Ι",
                                                Ό: "Ο",
                                                Ύ: "Υ",
                                                Ϋ: "Υ",
                                                Ώ: "Ω",
                                                ά: "α",
                                                έ: "ε",
                                                ή: "η",
                                                ί: "ι",
                                                ϊ: "ι",
                                                ΐ: "ι",
                                                ό: "ο",
                                                ύ: "υ",
                                                ϋ: "υ",
                                                ΰ: "υ",
                                                ώ: "ω",
                                                ς: "σ",
                                                "’": "'",
                                            };
                                        }),
                                        S2.define("select2/data/base", ["../utils"], function (Utils) {
                                            function BaseAdapter($element, options) {
                                                BaseAdapter.__super__.constructor.call(this);
                                            }
                                            return (
                                                Utils.Extend(BaseAdapter, Utils.Observable),
                                                (BaseAdapter.prototype.current = function (callback) {
                                                    throw new Error("The `current` method must be defined in child classes.");
                                                }),
                                                (BaseAdapter.prototype.query = function (params, callback) {
                                                    throw new Error("The `query` method must be defined in child classes.");
                                                }),
                                                (BaseAdapter.prototype.bind = function (container, $container) {}),
                                                (BaseAdapter.prototype.destroy = function () {}),
                                                (BaseAdapter.prototype.generateResultId = function (container, data) {
                                                    var id = container.id + "-result-";
                                                    return (id += Utils.generateChars(4)), null != data.id ? (id += "-" + data.id.toString()) : (id += "-" + Utils.generateChars(4)), id;
                                                }),
                                                BaseAdapter
                                            );
                                        }),
                                        S2.define("select2/data/select", ["./base", "../utils", "jquery"], function (BaseAdapter, Utils, $) {
                                            function SelectAdapter($element, options) {
                                                (this.$element = $element), (this.options = options), SelectAdapter.__super__.constructor.call(this);
                                            }
                                            return (
                                                Utils.Extend(SelectAdapter, BaseAdapter),
                                                (SelectAdapter.prototype.current = function (callback) {
                                                    var self = this;
                                                    callback(
                                                        Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"), function (selectedElement) {
                                                            return self.item($(selectedElement));
                                                        })
                                                    );
                                                }),
                                                (SelectAdapter.prototype.select = function (data) {
                                                    var self = this;
                                                    if (((data.selected = !0), null != data.element && "option" === data.element.tagName.toLowerCase()))
                                                        return (data.element.selected = !0), void this.$element.trigger("input").trigger("change");
                                                    if (this.$element.prop("multiple"))
                                                        this.current(function (currentData) {
                                                            var val = [];
                                                            (data = [data]).push.apply(data, currentData);
                                                            for (var d = 0; d < data.length; d++) {
                                                                var id = data[d].id;
                                                                -1 === val.indexOf(id) && val.push(id);
                                                            }
                                                            self.$element.val(val), self.$element.trigger("input").trigger("change");
                                                        });
                                                    else {
                                                        var val = data.id;
                                                        this.$element.val(val), this.$element.trigger("input").trigger("change");
                                                    }
                                                }),
                                                (SelectAdapter.prototype.unselect = function (data) {
                                                    var self = this;
                                                    if (this.$element.prop("multiple")) {
                                                        if (((data.selected = !1), null != data.element && "option" === data.element.tagName.toLowerCase()))
                                                            return (data.element.selected = !1), void this.$element.trigger("input").trigger("change");
                                                        this.current(function (currentData) {
                                                            for (var val = [], d = 0; d < currentData.length; d++) {
                                                                var id = currentData[d].id;
                                                                id !== data.id && -1 === val.indexOf(id) && val.push(id);
                                                            }
                                                            self.$element.val(val), self.$element.trigger("input").trigger("change");
                                                        });
                                                    }
                                                }),
                                                (SelectAdapter.prototype.bind = function (container, $container) {
                                                    var self = this;
                                                    (this.container = container),
                                                        container.on("select", function (params) {
                                                            self.select(params.data);
                                                        }),
                                                        container.on("unselect", function (params) {
                                                            self.unselect(params.data);
                                                        });
                                                }),
                                                (SelectAdapter.prototype.destroy = function () {
                                                    this.$element.find("*").each(function () {
                                                        Utils.RemoveData(this);
                                                    });
                                                }),
                                                (SelectAdapter.prototype.query = function (params, callback) {
                                                    var data = [],
                                                        self = this;
                                                    this.$element.children().each(function () {
                                                        if ("option" === this.tagName.toLowerCase() || "optgroup" === this.tagName.toLowerCase()) {
                                                            var $option = $(this),
                                                                option = self.item($option),
                                                                matches = self.matches(params, option);
                                                            null !== matches && data.push(matches);
                                                        }
                                                    }),
                                                        callback({ results: data });
                                                }),
                                                (SelectAdapter.prototype.addOptions = function ($options) {
                                                    this.$element.append($options);
                                                }),
                                                (SelectAdapter.prototype.option = function (data) {
                                                    var option;
                                                    data.children
                                                        ? ((option = document.createElement("optgroup")).label = data.text)
                                                        : void 0 !== (option = document.createElement("option")).textContent
                                                        ? (option.textContent = data.text)
                                                        : (option.innerText = data.text),
                                                        void 0 !== data.id && (option.value = data.id),
                                                        data.disabled && (option.disabled = !0),
                                                        data.selected && (option.selected = !0),
                                                        data.title && (option.title = data.title);
                                                    var normalizedData = this._normalizeItem(data);
                                                    return (normalizedData.element = option), Utils.StoreData(option, "data", normalizedData), $(option);
                                                }),
                                                (SelectAdapter.prototype.item = function ($option) {
                                                    var data = {};
                                                    if (null != (data = Utils.GetData($option[0], "data"))) return data;
                                                    var option = $option[0];
                                                    if ("option" === option.tagName.toLowerCase())
                                                        data = { id: $option.val(), text: $option.text(), disabled: $option.prop("disabled"), selected: $option.prop("selected"), title: $option.prop("title") };
                                                    else if ("optgroup" === option.tagName.toLowerCase()) {
                                                        data = { text: $option.prop("label"), children: [], title: $option.prop("title") };
                                                        for (var $children = $option.children("option"), children = [], c = 0; c < $children.length; c++) {
                                                            var $child = $($children[c]),
                                                                child = this.item($child);
                                                            children.push(child);
                                                        }
                                                        data.children = children;
                                                    }
                                                    return ((data = this._normalizeItem(data)).element = $option[0]), Utils.StoreData($option[0], "data", data), data;
                                                }),
                                                (SelectAdapter.prototype._normalizeItem = function (item) {
                                                    return (
                                                        item !== Object(item) && (item = { id: item, text: item }),
                                                        null != (item = $.extend({}, { text: "" }, item)).id && (item.id = item.id.toString()),
                                                        null != item.text && (item.text = item.text.toString()),
                                                        null == item._resultId && item.id && null != this.container && (item._resultId = this.generateResultId(this.container, item)),
                                                        $.extend({}, { selected: !1, disabled: !1 }, item)
                                                    );
                                                }),
                                                (SelectAdapter.prototype.matches = function (params, data) {
                                                    return this.options.get("matcher")(params, data);
                                                }),
                                                SelectAdapter
                                            );
                                        }),
                                        S2.define("select2/data/array", ["./select", "../utils", "jquery"], function (SelectAdapter, Utils, $) {
                                            function ArrayAdapter($element, options) {
                                                (this._dataToConvert = options.get("data") || []), ArrayAdapter.__super__.constructor.call(this, $element, options);
                                            }
                                            return (
                                                Utils.Extend(ArrayAdapter, SelectAdapter),
                                                (ArrayAdapter.prototype.bind = function (container, $container) {
                                                    ArrayAdapter.__super__.bind.call(this, container, $container), this.addOptions(this.convertToOptions(this._dataToConvert));
                                                }),
                                                (ArrayAdapter.prototype.select = function (data) {
                                                    var $option = this.$element.find("option").filter(function (i, elm) {
                                                        return elm.value == data.id.toString();
                                                    });
                                                    0 === $option.length && (($option = this.option(data)), this.addOptions($option)), ArrayAdapter.__super__.select.call(this, data);
                                                }),
                                                (ArrayAdapter.prototype.convertToOptions = function (data) {
                                                    var self = this,
                                                        $existing = this.$element.find("option"),
                                                        existingIds = $existing
                                                            .map(function () {
                                                                return self.item($(this)).id;
                                                            })
                                                            .get(),
                                                        $options = [];
                                                    function onlyItem(item) {
                                                        return function () {
                                                            return $(this).val() == item.id;
                                                        };
                                                    }
                                                    for (var d = 0; d < data.length; d++) {
                                                        var item = this._normalizeItem(data[d]);
                                                        if (existingIds.indexOf(item.id) >= 0) {
                                                            var $existingOption = $existing.filter(onlyItem(item)),
                                                                existingData = this.item($existingOption),
                                                                newData = $.extend(!0, {}, item, existingData),
                                                                $newOption = this.option(newData);
                                                            $existingOption.replaceWith($newOption);
                                                        } else {
                                                            var $option = this.option(item);
                                                            if (item.children) {
                                                                var $children = this.convertToOptions(item.children);
                                                                $option.append($children);
                                                            }
                                                            $options.push($option);
                                                        }
                                                    }
                                                    return $options;
                                                }),
                                                ArrayAdapter
                                            );
                                        }),
                                        S2.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (ArrayAdapter, Utils, $) {
                                            function AjaxAdapter($element, options) {
                                                (this.ajaxOptions = this._applyDefaults(options.get("ajax"))),
                                                    null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
                                                    AjaxAdapter.__super__.constructor.call(this, $element, options);
                                            }
                                            return (
                                                Utils.Extend(AjaxAdapter, ArrayAdapter),
                                                (AjaxAdapter.prototype._applyDefaults = function (options) {
                                                    var defaults = {
                                                        data: function (params) {
                                                            return $.extend({}, params, { q: params.term });
                                                        },
                                                        transport: function (params, success, failure) {
                                                            var $request = $.ajax(params);
                                                            return $request.then(success), $request.fail(failure), $request;
                                                        },
                                                    };
                                                    return $.extend({}, defaults, options, !0);
                                                }),
                                                (AjaxAdapter.prototype.processResults = function (results) {
                                                    return results;
                                                }),
                                                (AjaxAdapter.prototype.query = function (params, callback) {
                                                    var self = this;
                                                    null != this._request && ("function" == typeof this._request.abort && this._request.abort(), (this._request = null));
                                                    var options = $.extend({ type: "GET" }, this.ajaxOptions);
                                                    function request() {
                                                        var $request = options.transport(
                                                            options,
                                                            function (data) {
                                                                var results = self.processResults(data, params);
                                                                self.options.get("debug") && window.console && console.error && (!results || !results.results || Array.isArray(results.results)), callback(results);
                                                            },
                                                            function () {
                                                                (!("status" in $request) || (0 !== $request.status && "0" !== $request.status)) && self.trigger("results:message", { message: "errorLoading" });
                                                            }
                                                        );
                                                        self._request = $request;
                                                    }
                                                    "function" == typeof options.url && (options.url = options.url.call(this.$element, params)),
                                                        "function" == typeof options.data && (options.data = options.data.call(this.$element, params)),
                                                        this.ajaxOptions.delay && null != params.term
                                                            ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), (this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay)))
                                                            : request();
                                                }),
                                                AjaxAdapter
                                            );
                                        }),
                                        S2.define("select2/data/tags", ["jquery"], function ($) {
                                            function Tags(decorated, $element, options) {
                                                var tags = options.get("tags"),
                                                    createTag = options.get("createTag");
                                                void 0 !== createTag && (this.createTag = createTag);
                                                var insertTag = options.get("insertTag");
                                                if ((void 0 !== insertTag && (this.insertTag = insertTag), decorated.call(this, $element, options), Array.isArray(tags)))
                                                    for (var t = 0; t < tags.length; t++) {
                                                        var tag = tags[t],
                                                            item = this._normalizeItem(tag),
                                                            $option = this.option(item);
                                                        this.$element.append($option);
                                                    }
                                            }
                                            return (
                                                (Tags.prototype.query = function (decorated, params, callback) {
                                                    var self = this;
                                                    this._removeOldTags(),
                                                        null != params.term && null == params.page
                                                            ? decorated.call(this, params, function wrapper(obj, child) {
                                                                  for (var data = obj.results, i = 0; i < data.length; i++) {
                                                                      var option = data[i],
                                                                          checkChildren = null != option.children && !wrapper({ results: option.children }, !0);
                                                                      if ((option.text || "").toUpperCase() === (params.term || "").toUpperCase() || checkChildren) return !child && ((obj.data = data), void callback(obj));
                                                                  }
                                                                  if (child) return !0;
                                                                  var tag = self.createTag(params);
                                                                  if (null != tag) {
                                                                      var $option = self.option(tag);
                                                                      $option.attr("data-select2-tag", "true"), self.addOptions([$option]), self.insertTag(data, tag);
                                                                  }
                                                                  (obj.results = data), callback(obj);
                                                              })
                                                            : decorated.call(this, params, callback);
                                                }),
                                                (Tags.prototype.createTag = function (decorated, params) {
                                                    if (null == params.term) return null;
                                                    var term = params.term.trim();
                                                    return "" === term ? null : { id: term, text: term };
                                                }),
                                                (Tags.prototype.insertTag = function (_, data, tag) {
                                                    data.unshift(tag);
                                                }),
                                                (Tags.prototype._removeOldTags = function (_) {
                                                    this.$element.find("option[data-select2-tag]").each(function () {
                                                        this.selected || $(this).remove();
                                                    });
                                                }),
                                                Tags
                                            );
                                        }),
                                        S2.define("select2/data/tokenizer", ["jquery"], function ($) {
                                            function Tokenizer(decorated, $element, options) {
                                                var tokenizer = options.get("tokenizer");
                                                void 0 !== tokenizer && (this.tokenizer = tokenizer), decorated.call(this, $element, options);
                                            }
                                            return (
                                                (Tokenizer.prototype.bind = function (decorated, container, $container) {
                                                    decorated.call(this, container, $container), (this.$search = container.dropdown.$search || container.selection.$search || $container.find(".select2-search__field"));
                                                }),
                                                (Tokenizer.prototype.query = function (decorated, params, callback) {
                                                    var self = this;
                                                    params.term = params.term || "";
                                                    var tokenData = this.tokenizer(params, this.options, function (data) {
                                                        var item = self._normalizeItem(data);
                                                        if (
                                                            !self.$element.find("option").filter(function () {
                                                                return $(this).val() === item.id;
                                                            }).length
                                                        ) {
                                                            var $option = self.option(item);
                                                            $option.attr("data-select2-tag", !0), self._removeOldTags(), self.addOptions([$option]);
                                                        }
                                                        !(function (data) {
                                                            self.trigger("select", { data: data });
                                                        })(item);
                                                    });
                                                    tokenData.term !== params.term && (this.$search.length && (this.$search.val(tokenData.term), this.$search.trigger("focus")), (params.term = tokenData.term)),
                                                        decorated.call(this, params, callback);
                                                }),
                                                (Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
                                                    for (
                                                        var separators = options.get("tokenSeparators") || [],
                                                            term = params.term,
                                                            i = 0,
                                                            createTag =
                                                                this.createTag ||
                                                                function (params) {
                                                                    return { id: params.term, text: params.term };
                                                                };
                                                        i < term.length;

                                                    ) {
                                                        var termChar = term[i];
                                                        if (-1 !== separators.indexOf(termChar)) {
                                                            var part = term.substr(0, i),
                                                                data = createTag($.extend({}, params, { term: part }));
                                                            null != data ? (callback(data), (term = term.substr(i + 1) || ""), (i = 0)) : i++;
                                                        } else i++;
                                                    }
                                                    return { term: term };
                                                }),
                                                Tokenizer
                                            );
                                        }),
                                        S2.define("select2/data/minimumInputLength", [], function () {
                                            function MinimumInputLength(decorated, $e, options) {
                                                (this.minimumInputLength = options.get("minimumInputLength")), decorated.call(this, $e, options);
                                            }
                                            return (
                                                (MinimumInputLength.prototype.query = function (decorated, params, callback) {
                                                    (params.term = params.term || ""),
                                                        params.term.length < this.minimumInputLength
                                                            ? this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: params.term, params: params } })
                                                            : decorated.call(this, params, callback);
                                                }),
                                                MinimumInputLength
                                            );
                                        }),
                                        S2.define("select2/data/maximumInputLength", [], function () {
                                            function MaximumInputLength(decorated, $e, options) {
                                                (this.maximumInputLength = options.get("maximumInputLength")), decorated.call(this, $e, options);
                                            }
                                            return (
                                                (MaximumInputLength.prototype.query = function (decorated, params, callback) {
                                                    (params.term = params.term || ""),
                                                        this.maximumInputLength > 0 && params.term.length > this.maximumInputLength
                                                            ? this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: params.term, params: params } })
                                                            : decorated.call(this, params, callback);
                                                }),
                                                MaximumInputLength
                                            );
                                        }),
                                        S2.define("select2/data/maximumSelectionLength", [], function () {
                                            function MaximumSelectionLength(decorated, $e, options) {
                                                (this.maximumSelectionLength = options.get("maximumSelectionLength")), decorated.call(this, $e, options);
                                            }
                                            return (
                                                (MaximumSelectionLength.prototype.bind = function (decorated, container, $container) {
                                                    var self = this;
                                                    decorated.call(this, container, $container),
                                                        container.on("select", function () {
                                                            self._checkIfMaximumSelected();
                                                        });
                                                }),
                                                (MaximumSelectionLength.prototype.query = function (decorated, params, callback) {
                                                    var self = this;
                                                    this._checkIfMaximumSelected(function () {
                                                        decorated.call(self, params, callback);
                                                    });
                                                }),
                                                (MaximumSelectionLength.prototype._checkIfMaximumSelected = function (_, successCallback) {
                                                    var self = this;
                                                    this.current(function (currentData) {
                                                        var count = null != currentData ? currentData.length : 0;
                                                        self.maximumSelectionLength > 0 && count >= self.maximumSelectionLength
                                                            ? self.trigger("results:message", { message: "maximumSelected", args: { maximum: self.maximumSelectionLength } })
                                                            : successCallback && successCallback();
                                                    });
                                                }),
                                                MaximumSelectionLength
                                            );
                                        }),
                                        S2.define("select2/dropdown", ["jquery", "./utils"], function ($, Utils) {
                                            function Dropdown($element, options) {
                                                (this.$element = $element), (this.options = options), Dropdown.__super__.constructor.call(this);
                                            }
                                            return (
                                                Utils.Extend(Dropdown, Utils.Observable),
                                                (Dropdown.prototype.render = function () {
                                                    var $dropdown = $('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                                                    return $dropdown.attr("dir", this.options.get("dir")), (this.$dropdown = $dropdown), $dropdown;
                                                }),
                                                (Dropdown.prototype.bind = function () {}),
                                                (Dropdown.prototype.position = function ($dropdown, $container) {}),
                                                (Dropdown.prototype.destroy = function () {
                                                    this.$dropdown.remove();
                                                }),
                                                Dropdown
                                            );
                                        }),
                                        S2.define("select2/dropdown/search", ["jquery"], function ($) {
                                            function Search() {}
                                            return (
                                                (Search.prototype.render = function (decorated) {
                                                    var $rendered = decorated.call(this),
                                                        searchLabel = this.options.get("translations").get("search"),
                                                        $search = $(
                                                            '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
                                                        );
                                                    return (
                                                        (this.$searchContainer = $search),
                                                        (this.$search = $search.find("input")),
                                                        this.$search.prop("autocomplete", this.options.get("autocomplete")),
                                                        this.$search.attr("aria-label", searchLabel()),
                                                        $rendered.prepend($search),
                                                        $rendered
                                                    );
                                                }),
                                                (Search.prototype.bind = function (decorated, container, $container) {
                                                    var self = this,
                                                        resultsId = container.id + "-results";
                                                    decorated.call(this, container, $container),
                                                        this.$search.on("keydown", function (evt) {
                                                            self.trigger("keypress", evt), (self._keyUpPrevented = evt.isDefaultPrevented());
                                                        }),
                                                        this.$search.on("input", function (evt) {
                                                            $(this).off("keyup");
                                                        }),
                                                        this.$search.on("keyup input", function (evt) {
                                                            self.handleSearch(evt);
                                                        }),
                                                        container.on("open", function () {
                                                            self.$search.attr("tabindex", 0),
                                                                self.$search.attr("aria-controls", resultsId),
                                                                self.$search.trigger("focus"),
                                                                window.setTimeout(function () {
                                                                    self.$search.trigger("focus");
                                                                }, 0);
                                                        }),
                                                        container.on("close", function () {
                                                            self.$search.attr("tabindex", -1), self.$search.removeAttr("aria-controls"), self.$search.removeAttr("aria-activedescendant"), self.$search.val(""), self.$search.trigger("blur");
                                                        }),
                                                        container.on("focus", function () {
                                                            container.isOpen() || self.$search.trigger("focus");
                                                        }),
                                                        container.on("results:all", function (params) {
                                                            (null != params.query.term && "" !== params.query.term) ||
                                                                (self.showSearch(params) ? self.$searchContainer[0].classList.remove("select2-search--hide") : self.$searchContainer[0].classList.add("select2-search--hide"));
                                                        }),
                                                        container.on("results:focus", function (params) {
                                                            params.data._resultId ? self.$search.attr("aria-activedescendant", params.data._resultId) : self.$search.removeAttr("aria-activedescendant");
                                                        });
                                                }),
                                                (Search.prototype.handleSearch = function (evt) {
                                                    if (!this._keyUpPrevented) {
                                                        var input = this.$search.val();
                                                        this.trigger("query", { term: input });
                                                    }
                                                    this._keyUpPrevented = !1;
                                                }),
                                                (Search.prototype.showSearch = function (_, params) {
                                                    return !0;
                                                }),
                                                Search
                                            );
                                        }),
                                        S2.define("select2/dropdown/hidePlaceholder", [], function () {
                                            function HidePlaceholder(decorated, $element, options, dataAdapter) {
                                                (this.placeholder = this.normalizePlaceholder(options.get("placeholder"))), decorated.call(this, $element, options, dataAdapter);
                                            }
                                            return (
                                                (HidePlaceholder.prototype.append = function (decorated, data) {
                                                    (data.results = this.removePlaceholder(data.results)), decorated.call(this, data);
                                                }),
                                                (HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
                                                    return "string" == typeof placeholder && (placeholder = { id: "", text: placeholder }), placeholder;
                                                }),
                                                (HidePlaceholder.prototype.removePlaceholder = function (_, data) {
                                                    for (var modifiedData = data.slice(0), d = data.length - 1; d >= 0; d--) {
                                                        var item = data[d];
                                                        this.placeholder.id === item.id && modifiedData.splice(d, 1);
                                                    }
                                                    return modifiedData;
                                                }),
                                                HidePlaceholder
                                            );
                                        }),
                                        S2.define("select2/dropdown/infiniteScroll", ["jquery"], function ($) {
                                            function InfiniteScroll(decorated, $element, options, dataAdapter) {
                                                (this.lastParams = {}), decorated.call(this, $element, options, dataAdapter), (this.$loadingMore = this.createLoadingMore()), (this.loading = !1);
                                            }
                                            return (
                                                (InfiniteScroll.prototype.append = function (decorated, data) {
                                                    this.$loadingMore.remove(), (this.loading = !1), decorated.call(this, data), this.showLoadingMore(data) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded());
                                                }),
                                                (InfiniteScroll.prototype.bind = function (decorated, container, $container) {
                                                    var self = this;
                                                    decorated.call(this, container, $container),
                                                        container.on("query", function (params) {
                                                            (self.lastParams = params), (self.loading = !0);
                                                        }),
                                                        container.on("query:append", function (params) {
                                                            (self.lastParams = params), (self.loading = !0);
                                                        }),
                                                        this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
                                                }),
                                                (InfiniteScroll.prototype.loadMoreIfNeeded = function () {
                                                    var isLoadMoreVisible = $.contains(document.documentElement, this.$loadingMore[0]);
                                                    !this.loading &&
                                                        isLoadMoreVisible &&
                                                        this.$results.offset().top + this.$results.outerHeight(!1) + 50 >= this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) &&
                                                        this.loadMore();
                                                }),
                                                (InfiniteScroll.prototype.loadMore = function () {
                                                    this.loading = !0;
                                                    var params = $.extend({}, { page: 1 }, this.lastParams);
                                                    params.page++, this.trigger("query:append", params);
                                                }),
                                                (InfiniteScroll.prototype.showLoadingMore = function (_, data) {
                                                    return data.pagination && data.pagination.more;
                                                }),
                                                (InfiniteScroll.prototype.createLoadingMore = function () {
                                                    var $option = $('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
                                                        message = this.options.get("translations").get("loadingMore");
                                                    return $option.html(message(this.lastParams)), $option;
                                                }),
                                                InfiniteScroll
                                            );
                                        }),
                                        S2.define("select2/dropdown/attachBody", ["jquery", "../utils"], function ($, Utils) {
                                            function AttachBody(decorated, $element, options) {
                                                (this.$dropdownParent = $(options.get("dropdownParent") || document.body)), decorated.call(this, $element, options);
                                            }
                                            return (
                                                (AttachBody.prototype.bind = function (decorated, container, $container) {
                                                    var self = this;
                                                    decorated.call(this, container, $container),
                                                        container.on("open", function () {
                                                            self._showDropdown(), self._attachPositioningHandler(container), self._bindContainerResultHandlers(container);
                                                        }),
                                                        container.on("close", function () {
                                                            self._hideDropdown(), self._detachPositioningHandler(container);
                                                        }),
                                                        this.$dropdownContainer.on("mousedown", function (evt) {
                                                            evt.stopPropagation();
                                                        });
                                                }),
                                                (AttachBody.prototype.destroy = function (decorated) {
                                                    decorated.call(this), this.$dropdownContainer.remove();
                                                }),
                                                (AttachBody.prototype.position = function (decorated, $dropdown, $container) {
                                                    $dropdown.attr("class", $container.attr("class")),
                                                        $dropdown[0].classList.remove("select2"),
                                                        $dropdown[0].classList.add("select2-container--open"),
                                                        $dropdown.css({ position: "absolute", top: -999999 }),
                                                        (this.$container = $container);
                                                }),
                                                (AttachBody.prototype.render = function (decorated) {
                                                    var $container = $("<span></span>"),
                                                        $dropdown = decorated.call(this);
                                                    return $container.append($dropdown), (this.$dropdownContainer = $container), $container;
                                                }),
                                                (AttachBody.prototype._hideDropdown = function (decorated) {
                                                    this.$dropdownContainer.detach();
                                                }),
                                                (AttachBody.prototype._bindContainerResultHandlers = function (decorated, container) {
                                                    if (!this._containerResultsHandlersBound) {
                                                        var self = this;
                                                        container.on("results:all", function () {
                                                            self._positionDropdown(), self._resizeDropdown();
                                                        }),
                                                            container.on("results:append", function () {
                                                                self._positionDropdown(), self._resizeDropdown();
                                                            }),
                                                            container.on("results:message", function () {
                                                                self._positionDropdown(), self._resizeDropdown();
                                                            }),
                                                            container.on("select", function () {
                                                                self._positionDropdown(), self._resizeDropdown();
                                                            }),
                                                            container.on("unselect", function () {
                                                                self._positionDropdown(), self._resizeDropdown();
                                                            }),
                                                            (this._containerResultsHandlersBound = !0);
                                                    }
                                                }),
                                                (AttachBody.prototype._attachPositioningHandler = function (decorated, container) {
                                                    var self = this,
                                                        scrollEvent = "scroll.select2." + container.id,
                                                        resizeEvent = "resize.select2." + container.id,
                                                        orientationEvent = "orientationchange.select2." + container.id,
                                                        $watchers = this.$container.parents().filter(Utils.hasScroll);
                                                    $watchers.each(function () {
                                                        Utils.StoreData(this, "select2-scroll-position", { x: $(this).scrollLeft(), y: $(this).scrollTop() });
                                                    }),
                                                        $watchers.on(scrollEvent, function (ev) {
                                                            var position = Utils.GetData(this, "select2-scroll-position");
                                                            $(this).scrollTop(position.y);
                                                        }),
                                                        $(window).on(scrollEvent + " " + resizeEvent + " " + orientationEvent, function (e) {
                                                            self._positionDropdown(), self._resizeDropdown();
                                                        });
                                                }),
                                                (AttachBody.prototype._detachPositioningHandler = function (decorated, container) {
                                                    var scrollEvent = "scroll.select2." + container.id,
                                                        resizeEvent = "resize.select2." + container.id,
                                                        orientationEvent = "orientationchange.select2." + container.id;
                                                    this.$container.parents().filter(Utils.hasScroll).off(scrollEvent), $(window).off(scrollEvent + " " + resizeEvent + " " + orientationEvent);
                                                }),
                                                (AttachBody.prototype._positionDropdown = function () {
                                                    var $window = $(window),
                                                        isCurrentlyAbove = this.$dropdown[0].classList.contains("select2-dropdown--above"),
                                                        isCurrentlyBelow = this.$dropdown[0].classList.contains("select2-dropdown--below"),
                                                        newDirection = null,
                                                        offset = this.$container.offset();
                                                    offset.bottom = offset.top + this.$container.outerHeight(!1);
                                                    var container = { height: this.$container.outerHeight(!1) };
                                                    (container.top = offset.top), (container.bottom = offset.top + container.height);
                                                    var dropdown_height = this.$dropdown.outerHeight(!1),
                                                        viewport_top = $window.scrollTop(),
                                                        viewport_bottom = $window.scrollTop() + $window.height(),
                                                        enoughRoomAbove = viewport_top < offset.top - dropdown_height,
                                                        enoughRoomBelow = viewport_bottom > offset.bottom + dropdown_height,
                                                        css = { left: offset.left, top: container.bottom },
                                                        $offsetParent = this.$dropdownParent;
                                                    "static" === $offsetParent.css("position") && ($offsetParent = $offsetParent.offsetParent());
                                                    var parentOffset = { top: 0, left: 0 };
                                                    ($.contains(document.body, $offsetParent[0]) || $offsetParent[0].isConnected) && (parentOffset = $offsetParent.offset()),
                                                        (css.top -= parentOffset.top),
                                                        (css.left -= parentOffset.left),
                                                        isCurrentlyAbove || isCurrentlyBelow || (newDirection = "below"),
                                                        enoughRoomBelow || !enoughRoomAbove || isCurrentlyAbove ? !enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove && (newDirection = "below") : (newDirection = "above"),
                                                        ("above" == newDirection || (isCurrentlyAbove && "below" !== newDirection)) && (css.top = container.top - parentOffset.top - dropdown_height),
                                                        null != newDirection &&
                                                            (this.$dropdown[0].classList.remove("select2-dropdown--below"),
                                                            this.$dropdown[0].classList.remove("select2-dropdown--above"),
                                                            this.$dropdown[0].classList.add("select2-dropdown--" + newDirection),
                                                            this.$container[0].classList.remove("select2-container--below"),
                                                            this.$container[0].classList.remove("select2-container--above"),
                                                            this.$container[0].classList.add("select2-container--" + newDirection)),
                                                        this.$dropdownContainer.css(css);
                                                }),
                                                (AttachBody.prototype._resizeDropdown = function () {
                                                    var css = { width: this.$container.outerWidth(!1) + "px" };
                                                    this.options.get("dropdownAutoWidth") && ((css.minWidth = css.width), (css.position = "relative"), (css.width = "auto")), this.$dropdown.css(css);
                                                }),
                                                (AttachBody.prototype._showDropdown = function (decorated) {
                                                    this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
                                                }),
                                                AttachBody
                                            );
                                        }),
                                        S2.define("select2/dropdown/minimumResultsForSearch", [], function () {
                                            function MinimumResultsForSearch(decorated, $element, options, dataAdapter) {
                                                (this.minimumResultsForSearch = options.get("minimumResultsForSearch")),
                                                    this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0),
                                                    decorated.call(this, $element, options, dataAdapter);
                                            }
                                            return (
                                                (MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
                                                    return (
                                                        !(
                                                            (function countResults(data) {
                                                                for (var count = 0, d = 0; d < data.length; d++) {
                                                                    var item = data[d];
                                                                    item.children ? (count += countResults(item.children)) : count++;
                                                                }
                                                                return count;
                                                            })(params.data.results) < this.minimumResultsForSearch
                                                        ) && decorated.call(this, params)
                                                    );
                                                }),
                                                MinimumResultsForSearch
                                            );
                                        }),
                                        S2.define("select2/dropdown/selectOnClose", ["../utils"], function (Utils) {
                                            function SelectOnClose() {}
                                            return (
                                                (SelectOnClose.prototype.bind = function (decorated, container, $container) {
                                                    var self = this;
                                                    decorated.call(this, container, $container),
                                                        container.on("close", function (params) {
                                                            self._handleSelectOnClose(params);
                                                        });
                                                }),
                                                (SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
                                                    if (params && null != params.originalSelect2Event) {
                                                        var event = params.originalSelect2Event;
                                                        if ("select" === event._type || "unselect" === event._type) return;
                                                    }
                                                    var $highlightedResults = this.getHighlightedResults();
                                                    if (!($highlightedResults.length < 1)) {
                                                        var data = Utils.GetData($highlightedResults[0], "data");
                                                        (null != data.element && data.element.selected) || (null == data.element && data.selected) || this.trigger("select", { data: data });
                                                    }
                                                }),
                                                SelectOnClose
                                            );
                                        }),
                                        S2.define("select2/dropdown/closeOnSelect", [], function () {
                                            function CloseOnSelect() {}
                                            return (
                                                (CloseOnSelect.prototype.bind = function (decorated, container, $container) {
                                                    var self = this;
                                                    decorated.call(this, container, $container),
                                                        container.on("select", function (evt) {
                                                            self._selectTriggered(evt);
                                                        }),
                                                        container.on("unselect", function (evt) {
                                                            self._selectTriggered(evt);
                                                        });
                                                }),
                                                (CloseOnSelect.prototype._selectTriggered = function (_, evt) {
                                                    var originalEvent = evt.originalEvent;
                                                    (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) || this.trigger("close", { originalEvent: originalEvent, originalSelect2Event: evt });
                                                }),
                                                CloseOnSelect
                                            );
                                        }),
                                        S2.define("select2/dropdown/dropdownCss", ["../utils"], function (Utils) {
                                            function DropdownCSS() {}
                                            return (
                                                (DropdownCSS.prototype.render = function (decorated) {
                                                    var $dropdown = decorated.call(this),
                                                        dropdownCssClass = this.options.get("dropdownCssClass") || "";
                                                    return (
                                                        -1 !== dropdownCssClass.indexOf(":all:") && ((dropdownCssClass = dropdownCssClass.replace(":all:", "")), Utils.copyNonInternalCssClasses($dropdown[0], this.$element[0])),
                                                        $dropdown.addClass(dropdownCssClass),
                                                        $dropdown
                                                    );
                                                }),
                                                DropdownCSS
                                            );
                                        }),
                                        S2.define("select2/dropdown/tagsSearchHighlight", ["../utils"], function (Utils) {
                                            function TagsSearchHighlight() {}
                                            return (
                                                (TagsSearchHighlight.prototype.highlightFirstItem = function (decorated) {
                                                    var $options = this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");
                                                    if ($options.length > 0) {
                                                        var $firstOption = $options.first(),
                                                            firstElement = Utils.GetData($firstOption[0], "data").element;
                                                        if (firstElement && firstElement.getAttribute && "true" === firstElement.getAttribute("data-select2-tag")) return void $firstOption.trigger("mouseenter");
                                                    }
                                                    decorated.call(this);
                                                }),
                                                TagsSearchHighlight
                                            );
                                        }),
                                        S2.define("select2/i18n/en", [], function () {
                                            return {
                                                errorLoading: function () {
                                                    return "The results could not be loaded.";
                                                },
                                                inputTooLong: function (args) {
                                                    var overChars = args.input.length - args.maximum,
                                                        message = "Please delete " + overChars + " character";
                                                    return 1 != overChars && (message += "s"), message;
                                                },
                                                inputTooShort: function (args) {
                                                    return "Please enter " + (args.minimum - args.input.length) + " or more characters";
                                                },
                                                loadingMore: function () {
                                                    return "Loading more results…";
                                                },
                                                maximumSelected: function (args) {
                                                    var message = "You can only select " + args.maximum + " item";
                                                    return 1 != args.maximum && (message += "s"), message;
                                                },
                                                noResults: function () {
                                                    return "No results found";
                                                },
                                                searching: function () {
                                                    return "Searching…";
                                                },
                                                removeAllItems: function () {
                                                    return "Remove all items";
                                                },
                                                removeItem: function () {
                                                    return "Remove item";
                                                },
                                                search: function () {
                                                    return "Search";
                                                },
                                            };
                                        }),
                                        S2.define(
                                            "select2/defaults",
                                            [
                                                "jquery",
                                                "./results",
                                                "./selection/single",
                                                "./selection/multiple",
                                                "./selection/placeholder",
                                                "./selection/allowClear",
                                                "./selection/search",
                                                "./selection/selectionCss",
                                                "./selection/eventRelay",
                                                "./utils",
                                                "./translation",
                                                "./diacritics",
                                                "./data/select",
                                                "./data/array",
                                                "./data/ajax",
                                                "./data/tags",
                                                "./data/tokenizer",
                                                "./data/minimumInputLength",
                                                "./data/maximumInputLength",
                                                "./data/maximumSelectionLength",
                                                "./dropdown",
                                                "./dropdown/search",
                                                "./dropdown/hidePlaceholder",
                                                "./dropdown/infiniteScroll",
                                                "./dropdown/attachBody",
                                                "./dropdown/minimumResultsForSearch",
                                                "./dropdown/selectOnClose",
                                                "./dropdown/closeOnSelect",
                                                "./dropdown/dropdownCss",
                                                "./dropdown/tagsSearchHighlight",
                                                "./i18n/en",
                                            ],
                                            function (
                                                $,
                                                ResultsList,
                                                SingleSelection,
                                                MultipleSelection,
                                                Placeholder,
                                                AllowClear,
                                                SelectionSearch,
                                                SelectionCSS,
                                                EventRelay,
                                                Utils,
                                                Translation,
                                                DIACRITICS,
                                                SelectData,
                                                ArrayData,
                                                AjaxData,
                                                Tags,
                                                Tokenizer,
                                                MinimumInputLength,
                                                MaximumInputLength,
                                                MaximumSelectionLength,
                                                Dropdown,
                                                DropdownSearch,
                                                HidePlaceholder,
                                                InfiniteScroll,
                                                AttachBody,
                                                MinimumResultsForSearch,
                                                SelectOnClose,
                                                CloseOnSelect,
                                                DropdownCSS,
                                                TagsSearchHighlight,
                                                EnglishTranslation
                                            ) {
                                                function Defaults() {
                                                    this.reset();
                                                }
                                                return (
                                                    (Defaults.prototype.apply = function (options) {
                                                        if (
                                                            (null == (options = $.extend(!0, {}, this.defaults, options)).dataAdapter &&
                                                                (null != options.ajax ? (options.dataAdapter = AjaxData) : null != options.data ? (options.dataAdapter = ArrayData) : (options.dataAdapter = SelectData),
                                                                options.minimumInputLength > 0 && (options.dataAdapter = Utils.Decorate(options.dataAdapter, MinimumInputLength)),
                                                                options.maximumInputLength > 0 && (options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumInputLength)),
                                                                options.maximumSelectionLength > 0 && (options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumSelectionLength)),
                                                                options.tags && (options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags)),
                                                                (null == options.tokenSeparators && null == options.tokenizer) || (options.dataAdapter = Utils.Decorate(options.dataAdapter, Tokenizer))),
                                                            null == options.resultsAdapter &&
                                                                ((options.resultsAdapter = ResultsList),
                                                                null != options.ajax && (options.resultsAdapter = Utils.Decorate(options.resultsAdapter, InfiniteScroll)),
                                                                null != options.placeholder && (options.resultsAdapter = Utils.Decorate(options.resultsAdapter, HidePlaceholder)),
                                                                options.selectOnClose && (options.resultsAdapter = Utils.Decorate(options.resultsAdapter, SelectOnClose)),
                                                                options.tags && (options.resultsAdapter = Utils.Decorate(options.resultsAdapter, TagsSearchHighlight))),
                                                            null == options.dropdownAdapter)
                                                        ) {
                                                            if (options.multiple) options.dropdownAdapter = Dropdown;
                                                            else {
                                                                var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);
                                                                options.dropdownAdapter = SearchableDropdown;
                                                            }
                                                            0 !== options.minimumResultsForSearch && (options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, MinimumResultsForSearch)),
                                                                options.closeOnSelect && (options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, CloseOnSelect)),
                                                                null != options.dropdownCssClass && (options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, DropdownCSS)),
                                                                (options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, AttachBody));
                                                        }
                                                        null == options.selectionAdapter &&
                                                            (options.multiple ? (options.selectionAdapter = MultipleSelection) : (options.selectionAdapter = SingleSelection),
                                                            null != options.placeholder && (options.selectionAdapter = Utils.Decorate(options.selectionAdapter, Placeholder)),
                                                            options.allowClear && (options.selectionAdapter = Utils.Decorate(options.selectionAdapter, AllowClear)),
                                                            options.multiple && (options.selectionAdapter = Utils.Decorate(options.selectionAdapter, SelectionSearch)),
                                                            null != options.selectionCssClass && (options.selectionAdapter = Utils.Decorate(options.selectionAdapter, SelectionCSS)),
                                                            (options.selectionAdapter = Utils.Decorate(options.selectionAdapter, EventRelay))),
                                                            (options.language = this._resolveLanguage(options.language)),
                                                            options.language.push("en");
                                                        for (var uniqueLanguages = [], l = 0; l < options.language.length; l++) {
                                                            var language = options.language[l];
                                                            -1 === uniqueLanguages.indexOf(language) && uniqueLanguages.push(language);
                                                        }
                                                        return (options.language = uniqueLanguages), (options.translations = this._processTranslations(options.language, options.debug)), options;
                                                    }),
                                                    (Defaults.prototype.reset = function () {
                                                        function stripDiacritics(text) {
                                                            return text.replace(/[^\u0000-\u007E]/g, function (a) {
                                                                return DIACRITICS[a] || a;
                                                            });
                                                        }
                                                        this.defaults = {
                                                            amdLanguageBase: "./i18n/",
                                                            autocomplete: "off",
                                                            closeOnSelect: !0,
                                                            debug: !1,
                                                            dropdownAutoWidth: !1,
                                                            escapeMarkup: Utils.escapeMarkup,
                                                            language: {},
                                                            matcher: function matcher(params, data) {
                                                                if (null == params.term || "" === params.term.trim()) return data;
                                                                if (data.children && data.children.length > 0) {
                                                                    for (var match = $.extend(!0, {}, data), c = data.children.length - 1; c >= 0; c--) null == matcher(params, data.children[c]) && match.children.splice(c, 1);
                                                                    return match.children.length > 0 ? match : matcher(params, match);
                                                                }
                                                                var original = stripDiacritics(data.text).toUpperCase(),
                                                                    term = stripDiacritics(params.term).toUpperCase();
                                                                return original.indexOf(term) > -1 ? data : null;
                                                            },
                                                            minimumInputLength: 0,
                                                            maximumInputLength: 0,
                                                            maximumSelectionLength: 0,
                                                            minimumResultsForSearch: 0,
                                                            selectOnClose: !1,
                                                            scrollAfterSelect: !1,
                                                            sorter: function (data) {
                                                                return data;
                                                            },
                                                            templateResult: function (result) {
                                                                return result.text;
                                                            },
                                                            templateSelection: function (selection) {
                                                                return selection.text;
                                                            },
                                                            theme: "default",
                                                            width: "resolve",
                                                        };
                                                    }),
                                                    (Defaults.prototype.applyFromElement = function (options, $element) {
                                                        var optionLanguage = options.language,
                                                            defaultLanguage = this.defaults.language,
                                                            elementLanguage = $element.prop("lang"),
                                                            parentLanguage = $element.closest("[lang]").prop("lang"),
                                                            languages = Array.prototype.concat.call(
                                                                this._resolveLanguage(elementLanguage),
                                                                this._resolveLanguage(optionLanguage),
                                                                this._resolveLanguage(defaultLanguage),
                                                                this._resolveLanguage(parentLanguage)
                                                            );
                                                        return (options.language = languages), options;
                                                    }),
                                                    (Defaults.prototype._resolveLanguage = function (language) {
                                                        if (!language) return [];
                                                        if ($.isEmptyObject(language)) return [];
                                                        if ($.isPlainObject(language)) return [language];
                                                        var languages;
                                                        languages = Array.isArray(language) ? language : [language];
                                                        for (var resolvedLanguages = [], l = 0; l < languages.length; l++)
                                                            if ((resolvedLanguages.push(languages[l]), "string" == typeof languages[l] && languages[l].indexOf("-") > 0)) {
                                                                var baseLanguage = languages[l].split("-")[0];
                                                                resolvedLanguages.push(baseLanguage);
                                                            }
                                                        return resolvedLanguages;
                                                    }),
                                                    (Defaults.prototype._processTranslations = function (languages, debug) {
                                                        for (var translations = new Translation(), l = 0; l < languages.length; l++) {
                                                            var languageData = new Translation(),
                                                                language = languages[l];
                                                            if ("string" == typeof language)
                                                                try {
                                                                    languageData = Translation.loadPath(language);
                                                                } catch (e) {
                                                                    try {
                                                                        (language = this.defaults.amdLanguageBase + language), (languageData = Translation.loadPath(language));
                                                                    } catch (ex) {
                                                                        debug && window.console && console.warn;
                                                                    }
                                                                }
                                                            else languageData = $.isPlainObject(language) ? new Translation(language) : language;
                                                            translations.extend(languageData);
                                                        }
                                                        return translations;
                                                    }),
                                                    (Defaults.prototype.set = function (key, value) {
                                                        var data = {};
                                                        data[$.camelCase(key)] = value;
                                                        var convertedData = Utils._convertData(data);
                                                        $.extend(!0, this.defaults, convertedData);
                                                    }),
                                                    new Defaults()
                                                );
                                            }
                                        ),
                                        S2.define("select2/options", ["jquery", "./defaults", "./utils"], function ($, Defaults, Utils) {
                                            function Options(options, $element) {
                                                (this.options = options),
                                                    null != $element && this.fromElement($element),
                                                    null != $element && (this.options = Defaults.applyFromElement(this.options, $element)),
                                                    (this.options = Defaults.apply(this.options));
                                            }
                                            return (
                                                (Options.prototype.fromElement = function ($e) {
                                                    var excludedData = ["select2"];
                                                    null == this.options.multiple && (this.options.multiple = $e.prop("multiple")),
                                                        null == this.options.disabled && (this.options.disabled = $e.prop("disabled")),
                                                        null == this.options.autocomplete && $e.prop("autocomplete") && (this.options.autocomplete = $e.prop("autocomplete")),
                                                        null == this.options.dir &&
                                                            ($e.prop("dir") ? (this.options.dir = $e.prop("dir")) : $e.closest("[dir]").prop("dir") ? (this.options.dir = $e.closest("[dir]").prop("dir")) : (this.options.dir = "ltr")),
                                                        $e.prop("disabled", this.options.disabled),
                                                        $e.prop("multiple", this.options.multiple),
                                                        Utils.GetData($e[0], "select2Tags") &&
                                                            (this.options.debug && window.console && console.warn, Utils.StoreData($e[0], "data", Utils.GetData($e[0], "select2Tags")), Utils.StoreData($e[0], "tags", !0)),
                                                        Utils.GetData($e[0], "ajaxUrl") &&
                                                            (this.options.debug && window.console && console.warn, $e.attr("ajax--url", Utils.GetData($e[0], "ajaxUrl")), Utils.StoreData($e[0], "ajax-Url", Utils.GetData($e[0], "ajaxUrl")));
                                                    var dataset = {};
                                                    function upperCaseLetter(_, letter) {
                                                        return letter.toUpperCase();
                                                    }
                                                    for (var attr = 0; attr < $e[0].attributes.length; attr++) {
                                                        var attributeName = $e[0].attributes[attr].name;
                                                        if ("data-" == attributeName.substr(0, "data-".length)) {
                                                            var dataName = attributeName.substring("data-".length),
                                                                dataValue = Utils.GetData($e[0], dataName);
                                                            dataset[dataName.replace(/-([a-z])/g, upperCaseLetter)] = dataValue;
                                                        }
                                                    }
                                                    $.fn.jquery && "1." == $.fn.jquery.substr(0, 2) && $e[0].dataset && (dataset = $.extend(!0, {}, $e[0].dataset, dataset));
                                                    var data = $.extend(!0, {}, Utils.GetData($e[0]), dataset);
                                                    for (var key in (data = Utils._convertData(data)))
                                                        excludedData.indexOf(key) > -1 || ($.isPlainObject(this.options[key]) ? $.extend(this.options[key], data[key]) : (this.options[key] = data[key]));
                                                    return this;
                                                }),
                                                (Options.prototype.get = function (key) {
                                                    return this.options[key];
                                                }),
                                                (Options.prototype.set = function (key, val) {
                                                    this.options[key] = val;
                                                }),
                                                Options
                                            );
                                        }),
                                        S2.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function ($, Options, Utils, KEYS) {
                                            var Select2 = function ($element, options) {
                                                null != Utils.GetData($element[0], "select2") && Utils.GetData($element[0], "select2").destroy(),
                                                    (this.$element = $element),
                                                    (this.id = this._generateId($element)),
                                                    (options = options || {}),
                                                    (this.options = new Options(options, $element)),
                                                    Select2.__super__.constructor.call(this);
                                                var tabindex = $element.attr("tabindex") || 0;
                                                Utils.StoreData($element[0], "old-tabindex", tabindex), $element.attr("tabindex", "-1");
                                                var DataAdapter = this.options.get("dataAdapter");
                                                this.dataAdapter = new DataAdapter($element, this.options);
                                                var $container = this.render();
                                                this._placeContainer($container);
                                                var SelectionAdapter = this.options.get("selectionAdapter");
                                                (this.selection = new SelectionAdapter($element, this.options)), (this.$selection = this.selection.render()), this.selection.position(this.$selection, $container);
                                                var DropdownAdapter = this.options.get("dropdownAdapter");
                                                (this.dropdown = new DropdownAdapter($element, this.options)), (this.$dropdown = this.dropdown.render()), this.dropdown.position(this.$dropdown, $container);
                                                var ResultsAdapter = this.options.get("resultsAdapter");
                                                (this.results = new ResultsAdapter($element, this.options, this.dataAdapter)), (this.$results = this.results.render()), this.results.position(this.$results, this.$dropdown);
                                                var self = this;
                                                this._bindAdapters(),
                                                    this._registerDomEvents(),
                                                    this._registerDataEvents(),
                                                    this._registerSelectionEvents(),
                                                    this._registerDropdownEvents(),
                                                    this._registerResultsEvents(),
                                                    this._registerEvents(),
                                                    this.dataAdapter.current(function (initialData) {
                                                        self.trigger("selection:update", { data: initialData });
                                                    }),
                                                    $element[0].classList.add("select2-hidden-accessible"),
                                                    $element.attr("aria-hidden", "true"),
                                                    this._syncAttributes(),
                                                    Utils.StoreData($element[0], "select2", this),
                                                    $element.data("select2", this);
                                            };
                                            return (
                                                Utils.Extend(Select2, Utils.Observable),
                                                (Select2.prototype._generateId = function ($element) {
                                                    return (
                                                        "select2-" +
                                                        (null != $element.attr("id") ? $element.attr("id") : null != $element.attr("name") ? $element.attr("name") + "-" + Utils.generateChars(2) : Utils.generateChars(4)).replace(
                                                            /(:|\.|\[|\]|,)/g,
                                                            ""
                                                        )
                                                    );
                                                }),
                                                (Select2.prototype._placeContainer = function ($container) {
                                                    $container.insertAfter(this.$element);
                                                    var width = this._resolveWidth(this.$element, this.options.get("width"));
                                                    null != width && $container.css("width", width);
                                                }),
                                                (Select2.prototype._resolveWidth = function ($element, method) {
                                                    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                                                    if ("resolve" == method) {
                                                        var styleWidth = this._resolveWidth($element, "style");
                                                        return null != styleWidth ? styleWidth : this._resolveWidth($element, "element");
                                                    }
                                                    if ("element" == method) {
                                                        var elementWidth = $element.outerWidth(!1);
                                                        return elementWidth <= 0 ? "auto" : elementWidth + "px";
                                                    }
                                                    if ("style" == method) {
                                                        var style = $element.attr("style");
                                                        if ("string" != typeof style) return null;
                                                        for (var attrs = style.split(";"), i = 0, l = attrs.length; i < l; i += 1) {
                                                            var matches = attrs[i].replace(/\s/g, "").match(WIDTH);
                                                            if (null !== matches && matches.length >= 1) return matches[1];
                                                        }
                                                        return null;
                                                    }
                                                    return "computedstyle" == method ? window.getComputedStyle($element[0]).width : method;
                                                }),
                                                (Select2.prototype._bindAdapters = function () {
                                                    this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
                                                }),
                                                (Select2.prototype._registerDomEvents = function () {
                                                    var self = this;
                                                    this.$element.on("change.select2", function () {
                                                        self.dataAdapter.current(function (data) {
                                                            self.trigger("selection:update", { data: data });
                                                        });
                                                    }),
                                                        this.$element.on("focus.select2", function (evt) {
                                                            self.trigger("focus", evt);
                                                        }),
                                                        (this._syncA = Utils.bind(this._syncAttributes, this)),
                                                        (this._syncS = Utils.bind(this._syncSubtree, this)),
                                                        (this._observer = new window.MutationObserver(function (mutations) {
                                                            self._syncA(), self._syncS(mutations);
                                                        })),
                                                        this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 });
                                                }),
                                                (Select2.prototype._registerDataEvents = function () {
                                                    var self = this;
                                                    this.dataAdapter.on("*", function (name, params) {
                                                        self.trigger(name, params);
                                                    });
                                                }),
                                                (Select2.prototype._registerSelectionEvents = function () {
                                                    var self = this,
                                                        nonRelayEvents = ["toggle", "focus"];
                                                    this.selection.on("toggle", function () {
                                                        self.toggleDropdown();
                                                    }),
                                                        this.selection.on("focus", function (params) {
                                                            self.focus(params);
                                                        }),
                                                        this.selection.on("*", function (name, params) {
                                                            -1 === nonRelayEvents.indexOf(name) && self.trigger(name, params);
                                                        });
                                                }),
                                                (Select2.prototype._registerDropdownEvents = function () {
                                                    var self = this;
                                                    this.dropdown.on("*", function (name, params) {
                                                        self.trigger(name, params);
                                                    });
                                                }),
                                                (Select2.prototype._registerResultsEvents = function () {
                                                    var self = this;
                                                    this.results.on("*", function (name, params) {
                                                        self.trigger(name, params);
                                                    });
                                                }),
                                                (Select2.prototype._registerEvents = function () {
                                                    var self = this;
                                                    this.on("open", function () {
                                                        self.$container[0].classList.add("select2-container--open");
                                                    }),
                                                        this.on("close", function () {
                                                            self.$container[0].classList.remove("select2-container--open");
                                                        }),
                                                        this.on("enable", function () {
                                                            self.$container[0].classList.remove("select2-container--disabled");
                                                        }),
                                                        this.on("disable", function () {
                                                            self.$container[0].classList.add("select2-container--disabled");
                                                        }),
                                                        this.on("blur", function () {
                                                            self.$container[0].classList.remove("select2-container--focus");
                                                        }),
                                                        this.on("query", function (params) {
                                                            self.isOpen() || self.trigger("open", {}),
                                                                this.dataAdapter.query(params, function (data) {
                                                                    self.trigger("results:all", { data: data, query: params });
                                                                });
                                                        }),
                                                        this.on("query:append", function (params) {
                                                            this.dataAdapter.query(params, function (data) {
                                                                self.trigger("results:append", { data: data, query: params });
                                                            });
                                                        }),
                                                        this.on("keypress", function (evt) {
                                                            var key = evt.which;
                                                            self.isOpen()
                                                                ? key === KEYS.ESC || (key === KEYS.UP && evt.altKey)
                                                                    ? (self.close(evt), evt.preventDefault())
                                                                    : key === KEYS.ENTER || key === KEYS.TAB
                                                                    ? (self.trigger("results:select", {}), evt.preventDefault())
                                                                    : key === KEYS.SPACE && evt.ctrlKey
                                                                    ? (self.trigger("results:toggle", {}), evt.preventDefault())
                                                                    : key === KEYS.UP
                                                                    ? (self.trigger("results:previous", {}), evt.preventDefault())
                                                                    : key === KEYS.DOWN && (self.trigger("results:next", {}), evt.preventDefault())
                                                                : (key === KEYS.ENTER || key === KEYS.SPACE || (key === KEYS.DOWN && evt.altKey)) && (self.open(), evt.preventDefault());
                                                        });
                                                }),
                                                (Select2.prototype._syncAttributes = function () {
                                                    this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
                                                }),
                                                (Select2.prototype._isChangeMutation = function (mutations) {
                                                    var self = this;
                                                    if (mutations.addedNodes && mutations.addedNodes.length > 0) {
                                                        for (var n = 0; n < mutations.addedNodes.length; n++) if (mutations.addedNodes[n].selected) return !0;
                                                    } else {
                                                        if (mutations.removedNodes && mutations.removedNodes.length > 0) return !0;
                                                        if (Array.isArray(mutations))
                                                            return mutations.some(function (mutation) {
                                                                return self._isChangeMutation(mutation);
                                                            });
                                                    }
                                                    return !1;
                                                }),
                                                (Select2.prototype._syncSubtree = function (mutations) {
                                                    var changed = this._isChangeMutation(mutations),
                                                        self = this;
                                                    changed &&
                                                        this.dataAdapter.current(function (currentData) {
                                                            self.trigger("selection:update", { data: currentData });
                                                        });
                                                }),
                                                (Select2.prototype.trigger = function (name, args) {
                                                    var actualTrigger = Select2.__super__.trigger,
                                                        preTriggerMap = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting", clear: "clearing" };
                                                    if ((void 0 === args && (args = {}), name in preTriggerMap)) {
                                                        var preTriggerName = preTriggerMap[name],
                                                            preTriggerArgs = { prevented: !1, name: name, args: args };
                                                        if ((actualTrigger.call(this, preTriggerName, preTriggerArgs), preTriggerArgs.prevented)) return void (args.prevented = !0);
                                                    }
                                                    actualTrigger.call(this, name, args);
                                                }),
                                                (Select2.prototype.toggleDropdown = function () {
                                                    this.isDisabled() || (this.isOpen() ? this.close() : this.open());
                                                }),
                                                (Select2.prototype.open = function () {
                                                    this.isOpen() || this.isDisabled() || this.trigger("query", {});
                                                }),
                                                (Select2.prototype.close = function (evt) {
                                                    this.isOpen() && this.trigger("close", { originalEvent: evt });
                                                }),
                                                (Select2.prototype.isEnabled = function () {
                                                    return !this.isDisabled();
                                                }),
                                                (Select2.prototype.isDisabled = function () {
                                                    return this.options.get("disabled");
                                                }),
                                                (Select2.prototype.isOpen = function () {
                                                    return this.$container[0].classList.contains("select2-container--open");
                                                }),
                                                (Select2.prototype.hasFocus = function () {
                                                    return this.$container[0].classList.contains("select2-container--focus");
                                                }),
                                                (Select2.prototype.focus = function (data) {
                                                    this.hasFocus() || (this.$container[0].classList.add("select2-container--focus"), this.trigger("focus", {}));
                                                }),
                                                (Select2.prototype.enable = function (args) {
                                                    this.options.get("debug") && window.console && console.warn, (null != args && 0 !== args.length) || (args = [!0]);
                                                    var disabled = !args[0];
                                                    this.$element.prop("disabled", disabled);
                                                }),
                                                (Select2.prototype.data = function () {
                                                    this.options.get("debug") && arguments.length > 0 && window.console && console.warn;
                                                    var data = [];
                                                    return (
                                                        this.dataAdapter.current(function (currentData) {
                                                            data = currentData;
                                                        }),
                                                        data
                                                    );
                                                }),
                                                (Select2.prototype.val = function (args) {
                                                    if ((this.options.get("debug") && window.console && console.warn, null == args || 0 === args.length)) return this.$element.val();
                                                    var newVal = args[0];
                                                    Array.isArray(newVal) &&
                                                        (newVal = newVal.map(function (obj) {
                                                            return obj.toString();
                                                        })),
                                                        this.$element.val(newVal).trigger("input").trigger("change");
                                                }),
                                                (Select2.prototype.destroy = function () {
                                                    Utils.RemoveData(this.$container[0]),
                                                        this.$container.remove(),
                                                        this._observer.disconnect(),
                                                        (this._observer = null),
                                                        (this._syncA = null),
                                                        (this._syncS = null),
                                                        this.$element.off(".select2"),
                                                        this.$element.attr("tabindex", Utils.GetData(this.$element[0], "old-tabindex")),
                                                        this.$element[0].classList.remove("select2-hidden-accessible"),
                                                        this.$element.attr("aria-hidden", "false"),
                                                        Utils.RemoveData(this.$element[0]),
                                                        this.$element.removeData("select2"),
                                                        this.dataAdapter.destroy(),
                                                        this.selection.destroy(),
                                                        this.dropdown.destroy(),
                                                        this.results.destroy(),
                                                        (this.dataAdapter = null),
                                                        (this.selection = null),
                                                        (this.dropdown = null),
                                                        (this.results = null);
                                                }),
                                                (Select2.prototype.render = function () {
                                                    var $container = $('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                                                    return (
                                                        $container.attr("dir", this.options.get("dir")),
                                                        (this.$container = $container),
                                                        this.$container[0].classList.add("select2-container--" + this.options.get("theme")),
                                                        Utils.StoreData($container[0], "element", this.$element),
                                                        $container
                                                    );
                                                }),
                                                Select2
                                            );
                                        }),
                                        S2.define("jquery-mousewheel", ["jquery"], function ($) {
                                            return $;
                                        }),
                                        S2.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function ($, _, Select2, Defaults, Utils) {
                                            if (null == $.fn.select2) {
                                                var thisMethods = ["open", "close", "destroy"];
                                                $.fn.select2 = function (options) {
                                                    if ("object" == typeof (options = options || {}))
                                                        return (
                                                            this.each(function () {
                                                                var instanceOptions = $.extend(!0, {}, options);
                                                                new Select2($(this), instanceOptions);
                                                            }),
                                                            this
                                                        );
                                                    if ("string" == typeof options) {
                                                        var ret,
                                                            args = Array.prototype.slice.call(arguments, 1);
                                                        return (
                                                            this.each(function () {
                                                                var instance = Utils.GetData(this, "select2");
                                                                null == instance && window.console && console.error, (ret = instance[options].apply(instance, args));
                                                            }),
                                                            thisMethods.indexOf(options) > -1 ? this : ret
                                                        );
                                                    }
                                                    throw new Error("Invalid arguments for Select2: " + options);
                                                };
                                            }
                                            return null == $.fn.select2.defaults && ($.fn.select2.defaults = Defaults), Select2;
                                        }),
                                        { define: S2.define, require: S2.require }
                                    );
                                })(),
                                select2 = S2.require("jquery.select2");
                            return (jQuery.fn.select2.amd = S2), select2;
                        })
                            ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)
                            : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
        }.call(this, __webpack_require__(0)));
    },
    function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var jquery = __webpack_require__(0),
            jquery_default = __webpack_require__.n(jquery);
        function isObject(obj) {
            return null !== obj && "object" == typeof obj && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            void 0 === target && (target = {}),
                void 0 === src && (src = {}),
                Object.keys(src).forEach(function (key) {
                    void 0 === target[key] ? (target[key] = src[key]) : isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0 && extend(target[key], src[key]);
                });
        }
        var doc = "undefined" != typeof document ? document : {},
            ssrDocument = {
                body: {},
                addEventListener: function () {},
                removeEventListener: function () {},
                activeElement: { blur: function () {}, nodeName: "" },
                querySelector: function () {
                    return null;
                },
                querySelectorAll: function () {
                    return [];
                },
                getElementById: function () {
                    return null;
                },
                createEvent: function () {
                    return { initEvent: function () {} };
                },
                createElement: function () {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function () {},
                        getElementsByTagName: function () {
                            return [];
                        },
                    };
                },
                createElementNS: function () {
                    return {};
                },
                importNode: function () {
                    return null;
                },
                location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
            };
        extend(doc, ssrDocument);
        var win = "undefined" != typeof window ? window : {};
        extend(win, {
            document: ssrDocument,
            navigator: { userAgent: "" },
            location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
            history: { replaceState: function () {}, pushState: function () {}, go: function () {}, back: function () {} },
            CustomEvent: function () {
                return this;
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
                return {
                    getPropertyValue: function () {
                        return "";
                    },
                };
            },
            Image: function () {},
            Date: function () {},
            screen: {},
            setTimeout: function () {},
            clearTimeout: function () {},
            matchMedia: function () {
                return {};
            },
        });
        class Dom7 {
            constructor(arr) {
                const self = this;
                for (let i = 0; i < arr.length; i += 1) self[i] = arr[i];
                return (self.length = arr.length), this;
            }
        }
        function $(selector, context) {
            const arr = [];
            let i = 0;
            if (selector && !context && selector instanceof Dom7) return selector;
            if (selector)
                if ("string" == typeof selector) {
                    let els, tempParent;
                    const html = selector.trim();
                    if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                        let toCreate = "div";
                        for (
                            0 === html.indexOf("<li") && (toCreate = "ul"),
                                0 === html.indexOf("<tr") && (toCreate = "tbody"),
                                (0 !== html.indexOf("<td") && 0 !== html.indexOf("<th")) || (toCreate = "tr"),
                                0 === html.indexOf("<tbody") && (toCreate = "table"),
                                0 === html.indexOf("<option") && (toCreate = "select"),
                                tempParent = doc.createElement(toCreate),
                                tempParent.innerHTML = html,
                                i = 0;
                            i < tempParent.childNodes.length;
                            i += 1
                        )
                            arr.push(tempParent.childNodes[i]);
                    } else
                        for (els = context || "#" !== selector[0] || selector.match(/[ .<>:~]/) ? (context || doc).querySelectorAll(selector.trim()) : [doc.getElementById(selector.trim().split("#")[1])], i = 0; i < els.length; i += 1)
                            els[i] && arr.push(els[i]);
                } else if (selector.nodeType || selector === win || selector === doc) arr.push(selector);
                else if (selector.length > 0 && selector[0].nodeType) for (i = 0; i < selector.length; i += 1) arr.push(selector[i]);
            return new Dom7(arr);
        }
        function unique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) -1 === uniqueArray.indexOf(arr[i]) && uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        ($.fn = Dom7.prototype), ($.Class = Dom7), ($.Dom7 = Dom7);
        "resize scroll".split(" ");
        var ssr_window_esm_doc =
                "undefined" == typeof document
                    ? {
                          body: {},
                          addEventListener: function () {},
                          removeEventListener: function () {},
                          activeElement: { blur: function () {}, nodeName: "" },
                          querySelector: function () {
                              return null;
                          },
                          querySelectorAll: function () {
                              return [];
                          },
                          getElementById: function () {
                              return null;
                          },
                          createEvent: function () {
                              return { initEvent: function () {} };
                          },
                          createElement: function () {
                              return {
                                  children: [],
                                  childNodes: [],
                                  style: {},
                                  setAttribute: function () {},
                                  getElementsByTagName: function () {
                                      return [];
                                  },
                              };
                          },
                          location: { hash: "" },
                      }
                    : document,
            ssr_window_esm_win =
                "undefined" == typeof window
                    ? {
                          document: ssr_window_esm_doc,
                          navigator: { userAgent: "" },
                          location: {},
                          history: {},
                          CustomEvent: function () {
                              return this;
                          },
                          addEventListener: function () {},
                          removeEventListener: function () {},
                          getComputedStyle: function () {
                              return {
                                  getPropertyValue: function () {
                                      return "";
                                  },
                              };
                          },
                          Image: function () {},
                          Date: function () {},
                          screen: {},
                          setTimeout: function () {},
                          clearTimeout: function () {},
                      }
                    : window;
        const Methods = {
            addClass: function (className) {
                if (void 0 === className) return this;
                const classes = className.split(" ");
                for (let i = 0; i < classes.length; i += 1) for (let j = 0; j < this.length; j += 1) void 0 !== this[j] && void 0 !== this[j].classList && this[j].classList.add(classes[i]);
                return this;
            },
            removeClass: function (className) {
                const classes = className.split(" ");
                for (let i = 0; i < classes.length; i += 1) for (let j = 0; j < this.length; j += 1) void 0 !== this[j] && void 0 !== this[j].classList && this[j].classList.remove(classes[i]);
                return this;
            },
            hasClass: function (className) {
                return !!this[0] && this[0].classList.contains(className);
            },
            toggleClass: function (className) {
                const classes = className.split(" ");
                for (let i = 0; i < classes.length; i += 1) for (let j = 0; j < this.length; j += 1) void 0 !== this[j] && void 0 !== this[j].classList && this[j].classList.toggle(classes[i]);
                return this;
            },
            attr: function (attrs, value) {
                if (1 === arguments.length && "string" == typeof attrs) return this[0] ? this[0].getAttribute(attrs) : void 0;
                for (let i = 0; i < this.length; i += 1)
                    if (2 === arguments.length) this[i].setAttribute(attrs, value);
                    else for (const attrName in attrs) (this[i][attrName] = attrs[attrName]), this[i].setAttribute(attrName, attrs[attrName]);
                return this;
            },
            removeAttr: function (attr) {
                for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
                return this;
            },
            data: function (key, value) {
                let el;
                if (void 0 !== value) {
                    for (let i = 0; i < this.length; i += 1) (el = this[i]), el.dom7ElementDataStorage || (el.dom7ElementDataStorage = {}), (el.dom7ElementDataStorage[key] = value);
                    return this;
                }
                if (((el = this[0]), el)) {
                    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) return el.dom7ElementDataStorage[key];
                    const dataKey = el.getAttribute("data-" + key);
                    return dataKey || void 0;
                }
            },
            transform: function (transform) {
                for (let i = 0; i < this.length; i += 1) {
                    const elStyle = this[i].style;
                    (elStyle.webkitTransform = transform), (elStyle.transform = transform);
                }
                return this;
            },
            transition: function (duration) {
                "string" != typeof duration && (duration += "ms");
                for (let i = 0; i < this.length; i += 1) {
                    const elStyle = this[i].style;
                    (elStyle.webkitTransitionDuration = duration), (elStyle.transitionDuration = duration);
                }
                return this;
            },
            on: function (...args) {
                let [eventType, targetSelector, listener, capture] = args;
                function handleLiveEvent(e) {
                    const target = e.target;
                    if (!target) return;
                    const eventData = e.target.dom7EventData || [];
                    if ((eventData.indexOf(e) < 0 && eventData.unshift(e), $(target).is(targetSelector))) listener.apply(target, eventData);
                    else {
                        const parents = $(target).parents();
                        for (let k = 0; k < parents.length; k += 1) $(parents[k]).is(targetSelector) && listener.apply(parents[k], eventData);
                    }
                }
                function handleEvent(e) {
                    const eventData = (e && e.target && e.target.dom7EventData) || [];
                    eventData.indexOf(e) < 0 && eventData.unshift(e), listener.apply(this, eventData);
                }
                "function" == typeof args[1] && (([eventType, listener, capture] = args), (targetSelector = void 0)), capture || (capture = !1);
                const events = eventType.split(" ");
                let j;
                for (let i = 0; i < this.length; i += 1) {
                    const el = this[i];
                    if (targetSelector)
                        for (j = 0; j < events.length; j += 1) {
                            const event = events[j];
                            el.dom7LiveListeners || (el.dom7LiveListeners = {}),
                                el.dom7LiveListeners[event] || (el.dom7LiveListeners[event] = []),
                                el.dom7LiveListeners[event].push({ listener: listener, proxyListener: handleLiveEvent }),
                                el.addEventListener(event, handleLiveEvent, capture);
                        }
                    else
                        for (j = 0; j < events.length; j += 1) {
                            const event = events[j];
                            el.dom7Listeners || (el.dom7Listeners = {}),
                                el.dom7Listeners[event] || (el.dom7Listeners[event] = []),
                                el.dom7Listeners[event].push({ listener: listener, proxyListener: handleEvent }),
                                el.addEventListener(event, handleEvent, capture);
                        }
                }
                return this;
            },
            off: function (...args) {
                let [eventType, targetSelector, listener, capture] = args;
                "function" == typeof args[1] && (([eventType, listener, capture] = args), (targetSelector = void 0)), capture || (capture = !1);
                const events = eventType.split(" ");
                for (let i = 0; i < events.length; i += 1) {
                    const event = events[i];
                    for (let j = 0; j < this.length; j += 1) {
                        const el = this[j];
                        let handlers;
                        if ((!targetSelector && el.dom7Listeners ? (handlers = el.dom7Listeners[event]) : targetSelector && el.dom7LiveListeners && (handlers = el.dom7LiveListeners[event]), handlers && handlers.length))
                            for (let k = handlers.length - 1; k >= 0; k -= 1) {
                                const handler = handlers[k];
                                (listener && handler.listener === listener) || (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener)
                                    ? (el.removeEventListener(event, handler.proxyListener, capture), handlers.splice(k, 1))
                                    : listener || (el.removeEventListener(event, handler.proxyListener, capture), handlers.splice(k, 1));
                            }
                    }
                }
                return this;
            },
            trigger: function (...args) {
                const events = args[0].split(" "),
                    eventData = args[1];
                for (let i = 0; i < events.length; i += 1) {
                    const event = events[i];
                    for (let j = 0; j < this.length; j += 1) {
                        const el = this[j];
                        let evt;
                        try {
                            evt = new win.CustomEvent(event, { detail: eventData, bubbles: !0, cancelable: !0 });
                        } catch (e) {
                            (evt = doc.createEvent("Event")), evt.initEvent(event, !0, !0), (evt.detail = eventData);
                        }
                        (el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0)), el.dispatchEvent(evt), (el.dom7EventData = []), delete el.dom7EventData;
                    }
                }
                return this;
            },
            transitionEnd: function (callback) {
                const events = ["webkitTransitionEnd", "transitionend"],
                    dom = this;
                let i;
                function fireCallBack(e) {
                    if (e.target === this) for (callback.call(this, e), i = 0; i < events.length; i += 1) dom.off(events[i], fireCallBack);
                }
                if (callback) for (i = 0; i < events.length; i += 1) dom.on(events[i], fireCallBack);
                return this;
            },
            outerWidth: function (includeMargins) {
                if (this.length > 0) {
                    if (includeMargins) {
                        const styles = this.styles();
                        return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                    }
                    return this[0].offsetWidth;
                }
                return null;
            },
            outerHeight: function (includeMargins) {
                if (this.length > 0) {
                    if (includeMargins) {
                        const styles = this.styles();
                        return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                    }
                    return this[0].offsetHeight;
                }
                return null;
            },
            offset: function () {
                if (this.length > 0) {
                    const el = this[0],
                        box = el.getBoundingClientRect(),
                        body = doc.body,
                        clientTop = el.clientTop || body.clientTop || 0,
                        clientLeft = el.clientLeft || body.clientLeft || 0,
                        scrollTop = el === win ? win.scrollY : el.scrollTop,
                        scrollLeft = el === win ? win.scrollX : el.scrollLeft;
                    return { top: box.top + scrollTop - clientTop, left: box.left + scrollLeft - clientLeft };
                }
                return null;
            },
            css: function (props, value) {
                let i;
                if (1 === arguments.length) {
                    if ("string" != typeof props) {
                        for (i = 0; i < this.length; i += 1) for (let prop in props) this[i].style[prop] = props[prop];
                        return this;
                    }
                    if (this[0]) return win.getComputedStyle(this[0], null).getPropertyValue(props);
                }
                if (2 === arguments.length && "string" == typeof props) {
                    for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                    return this;
                }
                return this;
            },
            each: function (callback) {
                if (!callback) return this;
                for (let i = 0; i < this.length; i += 1) if (!1 === callback.call(this[i], i, this[i])) return this;
                return this;
            },
            html: function (html) {
                if (void 0 === html) return this[0] ? this[0].innerHTML : void 0;
                for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
                return this;
            },
            text: function (text) {
                if (void 0 === text) return this[0] ? this[0].textContent.trim() : null;
                for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
                return this;
            },
            is: function (selector) {
                const el = this[0];
                let compareWith, i;
                if (!el || void 0 === selector) return !1;
                if ("string" == typeof selector) {
                    if (el.matches) return el.matches(selector);
                    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                    for (compareWith = $(selector), i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return !0;
                    return !1;
                }
                if (selector === doc) return el === doc;
                if (selector === win) return el === win;
                if (selector.nodeType || selector instanceof Dom7) {
                    for (compareWith = selector.nodeType ? [selector] : selector, i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return !0;
                    return !1;
                }
                return !1;
            },
            index: function () {
                let i,
                    child = this[0];
                if (child) {
                    for (i = 0; null !== (child = child.previousSibling); ) 1 === child.nodeType && (i += 1);
                    return i;
                }
            },
            eq: function (index) {
                if (void 0 === index) return this;
                const length = this.length;
                let returnIndex;
                return index > length - 1 ? new Dom7([]) : index < 0 ? ((returnIndex = length + index), new Dom7(returnIndex < 0 ? [] : [this[returnIndex]])) : new Dom7([this[index]]);
            },
            append: function (...args) {
                let newChild;
                for (let k = 0; k < args.length; k += 1) {
                    newChild = args[k];
                    for (let i = 0; i < this.length; i += 1)
                        if ("string" == typeof newChild) {
                            const tempDiv = doc.createElement("div");
                            for (tempDiv.innerHTML = newChild; tempDiv.firstChild; ) this[i].appendChild(tempDiv.firstChild);
                        } else if (newChild instanceof Dom7) for (let j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]);
                        else this[i].appendChild(newChild);
                }
                return this;
            },
            prepend: function (newChild) {
                let i, j;
                for (i = 0; i < this.length; i += 1)
                    if ("string" == typeof newChild) {
                        const tempDiv = doc.createElement("div");
                        for (tempDiv.innerHTML = newChild, j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                    } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                    else this[i].insertBefore(newChild, this[i].childNodes[0]);
                return this;
            },
            next: function (selector) {
                return this.length > 0
                    ? selector
                        ? this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)
                            ? new Dom7([this[0].nextElementSibling])
                            : new Dom7([])
                        : this[0].nextElementSibling
                        ? new Dom7([this[0].nextElementSibling])
                        : new Dom7([])
                    : new Dom7([]);
            },
            nextAll: function (selector) {
                const nextEls = [];
                let el = this[0];
                if (!el) return new Dom7([]);
                for (; el.nextElementSibling; ) {
                    const next = el.nextElementSibling;
                    selector ? $(next).is(selector) && nextEls.push(next) : nextEls.push(next), (el = next);
                }
                return new Dom7(nextEls);
            },
            prev: function (selector) {
                if (this.length > 0) {
                    const el = this[0];
                    return selector
                        ? el.previousElementSibling && $(el.previousElementSibling).is(selector)
                            ? new Dom7([el.previousElementSibling])
                            : new Dom7([])
                        : el.previousElementSibling
                        ? new Dom7([el.previousElementSibling])
                        : new Dom7([]);
                }
                return new Dom7([]);
            },
            prevAll: function (selector) {
                const prevEls = [];
                let el = this[0];
                if (!el) return new Dom7([]);
                for (; el.previousElementSibling; ) {
                    const prev = el.previousElementSibling;
                    selector ? $(prev).is(selector) && prevEls.push(prev) : prevEls.push(prev), (el = prev);
                }
                return new Dom7(prevEls);
            },
            parent: function (selector) {
                const parents = [];
                for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (selector ? $(this[i].parentNode).is(selector) && parents.push(this[i].parentNode) : parents.push(this[i].parentNode));
                return $(unique(parents));
            },
            parents: function (selector) {
                const parents = [];
                for (let i = 0; i < this.length; i += 1) {
                    let parent = this[i].parentNode;
                    for (; parent; ) selector ? $(parent).is(selector) && parents.push(parent) : parents.push(parent), (parent = parent.parentNode);
                }
                return $(unique(parents));
            },
            closest: function (selector) {
                let closest = this;
                return void 0 === selector ? new Dom7([]) : (closest.is(selector) || (closest = closest.parents(selector).eq(0)), closest);
            },
            find: function (selector) {
                const foundElements = [];
                for (let i = 0; i < this.length; i += 1) {
                    const found = this[i].querySelectorAll(selector);
                    for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
                }
                return new Dom7(foundElements);
            },
            children: function (selector) {
                const children = [];
                for (let i = 0; i < this.length; i += 1) {
                    const childNodes = this[i].childNodes;
                    for (let j = 0; j < childNodes.length; j += 1) selector ? 1 === childNodes[j].nodeType && $(childNodes[j]).is(selector) && children.push(childNodes[j]) : 1 === childNodes[j].nodeType && children.push(childNodes[j]);
                }
                return new Dom7(unique(children));
            },
            filter: function (callback) {
                const matchedItems = [],
                    dom = this;
                for (let i = 0; i < dom.length; i += 1) callback.call(dom[i], i, dom[i]) && matchedItems.push(dom[i]);
                return new Dom7(matchedItems);
            },
            remove: function () {
                for (let i = 0; i < this.length; i += 1) this[i].parentNode && this[i].parentNode.removeChild(this[i]);
                return this;
            },
            add: function (...args) {
                const dom = this;
                let i, j;
                for (i = 0; i < args.length; i += 1) {
                    const toAdd = $(args[i]);
                    for (j = 0; j < toAdd.length; j += 1) (dom[dom.length] = toAdd[j]), (dom.length += 1);
                }
                return dom;
            },
            styles: function () {
                return this[0] ? win.getComputedStyle(this[0], null) : {};
            },
        };
        Object.keys(Methods).forEach((methodName) => {
            $.fn[methodName] = $.fn[methodName] || Methods[methodName];
        });
        const Utils = {
                deleteProps(obj) {
                    const object = obj;
                    Object.keys(object).forEach((key) => {
                        try {
                            object[key] = null;
                        } catch (e) {}
                        try {
                            delete object[key];
                        } catch (e) {}
                    });
                },
                nextTick: (callback, delay = 0) => setTimeout(callback, delay),
                now: () => Date.now(),
                getTranslate(el, axis = "x") {
                    let matrix, curTransform, transformMatrix;
                    const curStyle = ssr_window_esm_win.getComputedStyle(el, null);
                    return (
                        ssr_window_esm_win.WebKitCSSMatrix
                            ? ((curTransform = curStyle.transform || curStyle.webkitTransform),
                              curTransform.split(",").length > 6 &&
                                  (curTransform = curTransform
                                      .split(", ")
                                      .map((a) => a.replace(",", "."))
                                      .join(", ")),
                              (transformMatrix = new ssr_window_esm_win.WebKitCSSMatrix("none" === curTransform ? "" : curTransform)))
                            : ((transformMatrix =
                                  curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")),
                              (matrix = transformMatrix.toString().split(","))),
                        "x" === axis && (curTransform = ssr_window_esm_win.WebKitCSSMatrix ? transformMatrix.m41 : 16 === matrix.length ? parseFloat(matrix[12]) : parseFloat(matrix[4])),
                        "y" === axis && (curTransform = ssr_window_esm_win.WebKitCSSMatrix ? transformMatrix.m42 : 16 === matrix.length ? parseFloat(matrix[13]) : parseFloat(matrix[5])),
                        curTransform || 0
                    );
                },
                parseUrlQuery(url) {
                    const query = {};
                    let i,
                        params,
                        param,
                        length,
                        urlToParse = url || ssr_window_esm_win.location.href;
                    if ("string" == typeof urlToParse && urlToParse.length)
                        for (urlToParse = urlToParse.indexOf("?") > -1 ? urlToParse.replace(/\S*\?/, "") : "", params = urlToParse.split("&").filter((paramsPart) => "" !== paramsPart), length = params.length, i = 0; i < length; i += 1)
                            (param = params[i].replace(/#\S+/g, "").split("=")), (query[decodeURIComponent(param[0])] = void 0 === param[1] ? void 0 : decodeURIComponent(param[1]) || "");
                    return query;
                },
                isObject: (o) => "object" == typeof o && null !== o && o.constructor && o.constructor === Object,
                extend(...args) {
                    const to = Object(args[0]);
                    for (let i = 1; i < args.length; i += 1) {
                        const nextSource = args[i];
                        if (null != nextSource) {
                            const keysArray = Object.keys(Object(nextSource));
                            for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                                const nextKey = keysArray[nextIndex],
                                    desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                                void 0 !== desc &&
                                    desc.enumerable &&
                                    (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])
                                        ? Utils.extend(to[nextKey], nextSource[nextKey])
                                        : !Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])
                                        ? ((to[nextKey] = {}), Utils.extend(to[nextKey], nextSource[nextKey]))
                                        : (to[nextKey] = nextSource[nextKey]));
                            }
                        }
                    }
                    return to;
                },
            },
            swiper_esm_bundle_Support = {
                touch:
                    (ssr_window_esm_win.Modernizr && !0 === ssr_window_esm_win.Modernizr.touch) ||
                    !!(ssr_window_esm_win.navigator.maxTouchPoints > 0 || "ontouchstart" in ssr_window_esm_win || (ssr_window_esm_win.DocumentTouch && ssr_window_esm_doc instanceof ssr_window_esm_win.DocumentTouch)),
                pointerEvents: !!ssr_window_esm_win.PointerEvent && "maxTouchPoints" in ssr_window_esm_win.navigator && ssr_window_esm_win.navigator.maxTouchPoints > 0,
                observer: "MutationObserver" in ssr_window_esm_win || "WebkitMutationObserver" in ssr_window_esm_win,
                passiveListener: (function () {
                    let supportsPassive = !1;
                    try {
                        const opts = Object.defineProperty({}, "passive", {
                            get() {
                                supportsPassive = !0;
                            },
                        });
                        ssr_window_esm_win.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                })(),
                gestures: "ongesturestart" in ssr_window_esm_win,
            };
        class SwiperClass {
            constructor(params = {}) {
                const self = this;
                (self.params = params),
                    (self.eventsListeners = {}),
                    self.params &&
                        self.params.on &&
                        Object.keys(self.params.on).forEach((eventName) => {
                            self.on(eventName, self.params.on[eventName]);
                        });
            }
            on(events, handler, priority) {
                const self = this;
                if ("function" != typeof handler) return self;
                const method = priority ? "unshift" : "push";
                return (
                    events.split(" ").forEach((event) => {
                        self.eventsListeners[event] || (self.eventsListeners[event] = []), self.eventsListeners[event][method](handler);
                    }),
                    self
                );
            }
            once(events, handler, priority) {
                const self = this;
                if ("function" != typeof handler) return self;
                function onceHandler(...args) {
                    self.off(events, onceHandler), onceHandler.f7proxy && delete onceHandler.f7proxy, handler.apply(self, args);
                }
                return (onceHandler.f7proxy = handler), self.on(events, onceHandler, priority);
            }
            off(events, handler) {
                const self = this;
                return self.eventsListeners
                    ? (events.split(" ").forEach((event) => {
                          void 0 === handler
                              ? (self.eventsListeners[event] = [])
                              : self.eventsListeners[event] &&
                                self.eventsListeners[event].length &&
                                self.eventsListeners[event].forEach((eventHandler, index) => {
                                    (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) && self.eventsListeners[event].splice(index, 1);
                                });
                      }),
                      self)
                    : self;
            }
            emit(...args) {
                const self = this;
                if (!self.eventsListeners) return self;
                let events, data, context;
                "string" == typeof args[0] || Array.isArray(args[0]) ? ((events = args[0]), (data = args.slice(1, args.length)), (context = self)) : ((events = args[0].events), (data = args[0].data), (context = args[0].context || self));
                return (
                    (Array.isArray(events) ? events : events.split(" ")).forEach((event) => {
                        if (self.eventsListeners && self.eventsListeners[event]) {
                            const handlers = [];
                            self.eventsListeners[event].forEach((eventHandler) => {
                                handlers.push(eventHandler);
                            }),
                                handlers.forEach((eventHandler) => {
                                    eventHandler.apply(context, data);
                                });
                        }
                    }),
                    self
                );
            }
            useModulesParams(instanceParams) {
                const instance = this;
                instance.modules &&
                    Object.keys(instance.modules).forEach((moduleName) => {
                        const module = instance.modules[moduleName];
                        module.params && Utils.extend(instanceParams, module.params);
                    });
            }
            useModules(modulesParams = {}) {
                const instance = this;
                instance.modules &&
                    Object.keys(instance.modules).forEach((moduleName) => {
                        const module = instance.modules[moduleName],
                            moduleParams = modulesParams[moduleName] || {};
                        module.instance &&
                            Object.keys(module.instance).forEach((modulePropName) => {
                                const moduleProp = module.instance[modulePropName];
                                instance[modulePropName] = "function" == typeof moduleProp ? moduleProp.bind(instance) : moduleProp;
                            }),
                            module.on &&
                                instance.on &&
                                Object.keys(module.on).forEach((moduleEventName) => {
                                    instance.on(moduleEventName, module.on[moduleEventName]);
                                }),
                            module.create && module.create.bind(instance)(moduleParams);
                    });
            }
            static set components(components) {
                this.use && this.use(components);
            }
            static installModule(module, ...params) {
                const Class = this;
                Class.prototype.modules || (Class.prototype.modules = {});
                const name = module.name || `${Object.keys(Class.prototype.modules).length}_${Utils.now()}`;
                return (
                    (Class.prototype.modules[name] = module),
                    module.proto &&
                        Object.keys(module.proto).forEach((key) => {
                            Class.prototype[key] = module.proto[key];
                        }),
                    module.static &&
                        Object.keys(module.static).forEach((key) => {
                            Class[key] = module.static[key];
                        }),
                    module.install && module.install.apply(Class, params),
                    Class
                );
            }
            static use(module, ...params) {
                const Class = this;
                return Array.isArray(module) ? (module.forEach((m) => Class.installModule(m)), Class) : Class.installModule(module, ...params);
            }
        }
        var update = {
            updateSize: function () {
                const swiper = this;
                let width, height;
                const $el = swiper.$el;
                (width = void 0 !== swiper.params.width ? swiper.params.width : $el[0].clientWidth),
                    (height = void 0 !== swiper.params.height ? swiper.params.height : $el[0].clientHeight),
                    (0 === width && swiper.isHorizontal()) ||
                        (0 === height && swiper.isVertical()) ||
                        ((width = width - parseInt($el.css("padding-left"), 10) - parseInt($el.css("padding-right"), 10)),
                        (height = height - parseInt($el.css("padding-top"), 10) - parseInt($el.css("padding-bottom"), 10)),
                        Utils.extend(swiper, { width: width, height: height, size: swiper.isHorizontal() ? width : height }));
            },
            updateSlides: function () {
                const swiper = this,
                    params = swiper.params,
                    { $wrapperEl: $wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL: wrongRTL } = swiper,
                    isVirtual = swiper.virtual && params.virtual.enabled,
                    previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length,
                    slides = $wrapperEl.children("." + swiper.params.slideClass),
                    slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
                let snapGrid = [];
                const slidesGrid = [],
                    slidesSizesGrid = [];
                function slidesForMargin(slideIndex) {
                    return !params.cssMode || slideIndex !== slides.length - 1;
                }
                let offsetBefore = params.slidesOffsetBefore;
                "function" == typeof offsetBefore && (offsetBefore = params.slidesOffsetBefore.call(swiper));
                let offsetAfter = params.slidesOffsetAfter;
                "function" == typeof offsetAfter && (offsetAfter = params.slidesOffsetAfter.call(swiper));
                const previousSnapGridLength = swiper.snapGrid.length,
                    previousSlidesGridLength = swiper.snapGrid.length;
                let slidesNumberEvenToRows,
                    slideSize,
                    spaceBetween = params.spaceBetween,
                    slidePosition = -offsetBefore,
                    prevSlideSize = 0,
                    index = 0;
                if (void 0 === swiperSize) return;
                "string" == typeof spaceBetween && spaceBetween.indexOf("%") >= 0 && (spaceBetween = (parseFloat(spaceBetween.replace("%", "")) / 100) * swiperSize),
                    (swiper.virtualSize = -spaceBetween),
                    rtl ? slides.css({ marginLeft: "", marginTop: "" }) : slides.css({ marginRight: "", marginBottom: "" }),
                    params.slidesPerColumn > 1 &&
                        ((slidesNumberEvenToRows =
                            Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn ? slidesLength : Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn),
                        "auto" !== params.slidesPerView && "row" === params.slidesPerColumnFill && (slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn)));
                const slidesPerColumn = params.slidesPerColumn,
                    slidesPerRow = slidesNumberEvenToRows / slidesPerColumn,
                    numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
                for (let i = 0; i < slidesLength; i += 1) {
                    slideSize = 0;
                    const slide = slides.eq(i);
                    if (params.slidesPerColumn > 1) {
                        let newSlideOrderIndex, column, row;
                        if ("row" === params.slidesPerColumnFill && params.slidesPerGroup > 1) {
                            const groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn)),
                                slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex,
                                columnsInGroup = 0 === groupIndex ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
                            (row = Math.floor(slideIndexInGroup / columnsInGroup)),
                                (column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup),
                                (newSlideOrderIndex = column + (row * slidesNumberEvenToRows) / slidesPerColumn),
                                slide.css({
                                    "-webkit-box-ordinal-group": newSlideOrderIndex,
                                    "-moz-box-ordinal-group": newSlideOrderIndex,
                                    "-ms-flex-order": newSlideOrderIndex,
                                    "-webkit-order": newSlideOrderIndex,
                                    order: newSlideOrderIndex,
                                });
                        } else
                            "column" === params.slidesPerColumnFill
                                ? ((column = Math.floor(i / slidesPerColumn)),
                                  (row = i - column * slidesPerColumn),
                                  (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) && ((row += 1), row >= slidesPerColumn && ((row = 0), (column += 1))))
                                : ((row = Math.floor(i / slidesPerRow)), (column = i - row * slidesPerRow));
                        slide.css("margin-" + (swiper.isHorizontal() ? "top" : "left"), 0 !== row && params.spaceBetween && params.spaceBetween + "px");
                    }
                    if ("none" !== slide.css("display")) {
                        if ("auto" === params.slidesPerView) {
                            const slideStyles = ssr_window_esm_win.getComputedStyle(slide[0], null),
                                currentTransform = slide[0].style.transform,
                                currentWebKitTransform = slide[0].style.webkitTransform;
                            if ((currentTransform && (slide[0].style.transform = "none"), currentWebKitTransform && (slide[0].style.webkitTransform = "none"), params.roundLengths))
                                slideSize = swiper.isHorizontal() ? slide.outerWidth(!0) : slide.outerHeight(!0);
                            else if (swiper.isHorizontal()) {
                                const width = parseFloat(slideStyles.getPropertyValue("width")),
                                    paddingLeft = parseFloat(slideStyles.getPropertyValue("padding-left")),
                                    paddingRight = parseFloat(slideStyles.getPropertyValue("padding-right")),
                                    marginLeft = parseFloat(slideStyles.getPropertyValue("margin-left")),
                                    marginRight = parseFloat(slideStyles.getPropertyValue("margin-right")),
                                    boxSizing = slideStyles.getPropertyValue("box-sizing");
                                slideSize = boxSizing && "border-box" === boxSizing ? width + marginLeft + marginRight : width + paddingLeft + paddingRight + marginLeft + marginRight;
                            } else {
                                const height = parseFloat(slideStyles.getPropertyValue("height")),
                                    paddingTop = parseFloat(slideStyles.getPropertyValue("padding-top")),
                                    paddingBottom = parseFloat(slideStyles.getPropertyValue("padding-bottom")),
                                    marginTop = parseFloat(slideStyles.getPropertyValue("margin-top")),
                                    marginBottom = parseFloat(slideStyles.getPropertyValue("margin-bottom")),
                                    boxSizing = slideStyles.getPropertyValue("box-sizing");
                                slideSize = boxSizing && "border-box" === boxSizing ? height + marginTop + marginBottom : height + paddingTop + paddingBottom + marginTop + marginBottom;
                            }
                            currentTransform && (slide[0].style.transform = currentTransform), currentWebKitTransform && (slide[0].style.webkitTransform = currentWebKitTransform), params.roundLengths && (slideSize = Math.floor(slideSize));
                        } else
                            (slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView),
                                params.roundLengths && (slideSize = Math.floor(slideSize)),
                                slides[i] && (swiper.isHorizontal() ? (slides[i].style.width = slideSize + "px") : (slides[i].style.height = slideSize + "px"));
                        slides[i] && (slides[i].swiperSlideSize = slideSize),
                            slidesSizesGrid.push(slideSize),
                            params.centeredSlides
                                ? ((slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween),
                                  0 === prevSlideSize && 0 !== i && (slidePosition = slidePosition - swiperSize / 2 - spaceBetween),
                                  0 === i && (slidePosition = slidePosition - swiperSize / 2 - spaceBetween),
                                  Math.abs(slidePosition) < 0.001 && (slidePosition = 0),
                                  params.roundLengths && (slidePosition = Math.floor(slidePosition)),
                                  index % params.slidesPerGroup == 0 && snapGrid.push(slidePosition),
                                  slidesGrid.push(slidePosition))
                                : (params.roundLengths && (slidePosition = Math.floor(slidePosition)),
                                  (index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup == 0 && snapGrid.push(slidePosition),
                                  slidesGrid.push(slidePosition),
                                  (slidePosition = slidePosition + slideSize + spaceBetween)),
                            (swiper.virtualSize += slideSize + spaceBetween),
                            (prevSlideSize = slideSize),
                            (index += 1);
                    }
                }
                let newSlidesGrid;
                if (
                    ((swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter),
                    rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect) && $wrapperEl.css({ width: swiper.virtualSize + params.spaceBetween + "px" }),
                    params.setWrapperSize && (swiper.isHorizontal() ? $wrapperEl.css({ width: swiper.virtualSize + params.spaceBetween + "px" }) : $wrapperEl.css({ height: swiper.virtualSize + params.spaceBetween + "px" })),
                    params.slidesPerColumn > 1 &&
                        ((swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows),
                        (swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween),
                        swiper.isHorizontal() ? $wrapperEl.css({ width: swiper.virtualSize + params.spaceBetween + "px" }) : $wrapperEl.css({ height: swiper.virtualSize + params.spaceBetween + "px" }),
                        params.centeredSlides))
                ) {
                    newSlidesGrid = [];
                    for (let i = 0; i < snapGrid.length; i += 1) {
                        let slidesGridItem = snapGrid[i];
                        params.roundLengths && (slidesGridItem = Math.floor(slidesGridItem)), snapGrid[i] < swiper.virtualSize + snapGrid[0] && newSlidesGrid.push(slidesGridItem);
                    }
                    snapGrid = newSlidesGrid;
                }
                if (!params.centeredSlides) {
                    newSlidesGrid = [];
                    for (let i = 0; i < snapGrid.length; i += 1) {
                        let slidesGridItem = snapGrid[i];
                        params.roundLengths && (slidesGridItem = Math.floor(slidesGridItem)), snapGrid[i] <= swiper.virtualSize - swiperSize && newSlidesGrid.push(slidesGridItem);
                    }
                    (snapGrid = newSlidesGrid), Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1 && snapGrid.push(swiper.virtualSize - swiperSize);
                }
                if (
                    (0 === snapGrid.length && (snapGrid = [0]),
                    0 !== params.spaceBetween &&
                        (swiper.isHorizontal()
                            ? rtl
                                ? slides.filter(slidesForMargin).css({ marginLeft: spaceBetween + "px" })
                                : slides.filter(slidesForMargin).css({ marginRight: spaceBetween + "px" })
                            : slides.filter(slidesForMargin).css({ marginBottom: spaceBetween + "px" })),
                    params.centeredSlides && params.centeredSlidesBounds)
                ) {
                    let allSlidesSize = 0;
                    slidesSizesGrid.forEach((slideSizeValue) => {
                        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                    }),
                        (allSlidesSize -= params.spaceBetween);
                    const maxSnap = allSlidesSize - swiperSize;
                    snapGrid = snapGrid.map((snap) => (snap < 0 ? -offsetBefore : snap > maxSnap ? maxSnap + offsetAfter : snap));
                }
                if (params.centerInsufficientSlides) {
                    let allSlidesSize = 0;
                    if (
                        (slidesSizesGrid.forEach((slideSizeValue) => {
                            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                        }),
                        (allSlidesSize -= params.spaceBetween),
                        allSlidesSize < swiperSize)
                    ) {
                        const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                        snapGrid.forEach((snap, snapIndex) => {
                            snapGrid[snapIndex] = snap - allSlidesOffset;
                        }),
                            slidesGrid.forEach((snap, snapIndex) => {
                                slidesGrid[snapIndex] = snap + allSlidesOffset;
                            });
                    }
                }
                Utils.extend(swiper, { slides: slides, snapGrid: snapGrid, slidesGrid: slidesGrid, slidesSizesGrid: slidesSizesGrid }),
                    slidesLength !== previousSlidesLength && swiper.emit("slidesLengthChange"),
                    snapGrid.length !== previousSnapGridLength && (swiper.params.watchOverflow && swiper.checkOverflow(), swiper.emit("snapGridLengthChange")),
                    slidesGrid.length !== previousSlidesGridLength && swiper.emit("slidesGridLengthChange"),
                    (params.watchSlidesProgress || params.watchSlidesVisibility) && swiper.updateSlidesOffset();
            },
            updateAutoHeight: function (speed) {
                const swiper = this,
                    activeSlides = [];
                let i,
                    newHeight = 0;
                if (("number" == typeof speed ? swiper.setTransition(speed) : !0 === speed && swiper.setTransition(swiper.params.speed), "auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1))
                    if (swiper.params.centeredSlides) activeSlides.push(...swiper.visibleSlides);
                    else
                        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                            const index = swiper.activeIndex + i;
                            if (index > swiper.slides.length) break;
                            activeSlides.push(swiper.slides.eq(index)[0]);
                        }
                else activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
                for (i = 0; i < activeSlides.length; i += 1)
                    if (void 0 !== activeSlides[i]) {
                        const height = activeSlides[i].offsetHeight;
                        newHeight = height > newHeight ? height : newHeight;
                    }
                newHeight && swiper.$wrapperEl.css("height", newHeight + "px");
            },
            updateSlidesOffset: function () {
                const swiper = this,
                    slides = swiper.slides;
                for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
            },
            updateSlidesProgress: function (translate = (this && this.translate) || 0) {
                const swiper = this,
                    params = swiper.params,
                    { slides: slides, rtlTranslate: rtl } = swiper;
                if (0 === slides.length) return;
                void 0 === slides[0].swiperSlideOffset && swiper.updateSlidesOffset();
                let offsetCenter = -translate;
                rtl && (offsetCenter = translate), slides.removeClass(params.slideVisibleClass), (swiper.visibleSlidesIndexes = []), (swiper.visibleSlides = []);
                for (let i = 0; i < slides.length; i += 1) {
                    const slide = slides[i],
                        slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                    if (params.watchSlidesVisibility || (params.centeredSlides && params.autoHeight)) {
                        const slideBefore = -(offsetCenter - slide.swiperSlideOffset),
                            slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                        ((slideBefore >= 0 && slideBefore < swiper.size - 1) || (slideAfter > 1 && slideAfter <= swiper.size) || (slideBefore <= 0 && slideAfter >= swiper.size)) &&
                            (swiper.visibleSlides.push(slide), swiper.visibleSlidesIndexes.push(i), slides.eq(i).addClass(params.slideVisibleClass));
                    }
                    slide.progress = rtl ? -slideProgress : slideProgress;
                }
                swiper.visibleSlides = $(swiper.visibleSlides);
            },
            updateProgress: function (translate) {
                const swiper = this;
                if (void 0 === translate) {
                    const multiplier = swiper.rtlTranslate ? -1 : 1;
                    translate = (swiper && swiper.translate && swiper.translate * multiplier) || 0;
                }
                const params = swiper.params,
                    translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
                let { progress: progress, isBeginning: isBeginning, isEnd: isEnd } = swiper;
                const wasBeginning = isBeginning,
                    wasEnd = isEnd;
                0 === translatesDiff ? ((progress = 0), (isBeginning = !0), (isEnd = !0)) : ((progress = (translate - swiper.minTranslate()) / translatesDiff), (isBeginning = progress <= 0), (isEnd = progress >= 1)),
                    Utils.extend(swiper, { progress: progress, isBeginning: isBeginning, isEnd: isEnd }),
                    (params.watchSlidesProgress || params.watchSlidesVisibility || (params.centeredSlides && params.autoHeight)) && swiper.updateSlidesProgress(translate),
                    isBeginning && !wasBeginning && swiper.emit("reachBeginning toEdge"),
                    isEnd && !wasEnd && swiper.emit("reachEnd toEdge"),
                    ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) && swiper.emit("fromEdge"),
                    swiper.emit("progress", progress);
            },
            updateSlidesClasses: function () {
                const swiper = this,
                    { slides: slides, params: params, $wrapperEl: $wrapperEl, activeIndex: activeIndex, realIndex: realIndex } = swiper,
                    isVirtual = swiper.virtual && params.virtual.enabled;
                let activeSlide;
                slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`),
                    (activeSlide = isVirtual ? swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`) : slides.eq(activeIndex)),
                    activeSlide.addClass(params.slideActiveClass),
                    params.loop &&
                        (activeSlide.hasClass(params.slideDuplicateClass)
                            ? $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass)
                            : $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass));
                let nextSlide = activeSlide
                    .nextAll("." + params.slideClass)
                    .eq(0)
                    .addClass(params.slideNextClass);
                params.loop && 0 === nextSlide.length && ((nextSlide = slides.eq(0)), nextSlide.addClass(params.slideNextClass));
                let prevSlide = activeSlide
                    .prevAll("." + params.slideClass)
                    .eq(0)
                    .addClass(params.slidePrevClass);
                params.loop && 0 === prevSlide.length && ((prevSlide = slides.eq(-1)), prevSlide.addClass(params.slidePrevClass)),
                    params.loop &&
                        (nextSlide.hasClass(params.slideDuplicateClass)
                            ? $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass)
                            : $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass),
                        prevSlide.hasClass(params.slideDuplicateClass)
                            ? $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass)
                            : $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass));
            },
            updateActiveIndex: function (newActiveIndex) {
                const swiper = this,
                    translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate,
                    { slidesGrid: slidesGrid, snapGrid: snapGrid, params: params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex } = swiper;
                let snapIndex,
                    activeIndex = newActiveIndex;
                if (void 0 === activeIndex) {
                    for (let i = 0; i < slidesGrid.length; i += 1)
                        void 0 !== slidesGrid[i + 1]
                            ? translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2
                                ? (activeIndex = i)
                                : translate >= slidesGrid[i] && translate < slidesGrid[i + 1] && (activeIndex = i + 1)
                            : translate >= slidesGrid[i] && (activeIndex = i);
                    params.normalizeSlideIndex && (activeIndex < 0 || void 0 === activeIndex) && (activeIndex = 0);
                }
                if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
                else {
                    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
                }
                if ((snapIndex >= snapGrid.length && (snapIndex = snapGrid.length - 1), activeIndex === previousIndex)) return void (snapIndex !== previousSnapIndex && ((swiper.snapIndex = snapIndex), swiper.emit("snapIndexChange")));
                const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
                Utils.extend(swiper, { snapIndex: snapIndex, realIndex: realIndex, previousIndex: previousIndex, activeIndex: activeIndex }),
                    swiper.emit("activeIndexChange"),
                    swiper.emit("snapIndexChange"),
                    previousRealIndex !== realIndex && swiper.emit("realIndexChange"),
                    (swiper.initialized || swiper.runCallbacksOnInit) && swiper.emit("slideChange");
            },
            updateClickedSlide: function (e) {
                const swiper = this,
                    params = swiper.params,
                    slide = $(e.target).closest("." + params.slideClass)[0];
                let slideFound = !1;
                if (slide) for (let i = 0; i < swiper.slides.length; i += 1) swiper.slides[i] === slide && (slideFound = !0);
                if (!slide || !slideFound) return (swiper.clickedSlide = void 0), void (swiper.clickedIndex = void 0);
                (swiper.clickedSlide = slide),
                    swiper.virtual && swiper.params.virtual.enabled ? (swiper.clickedIndex = parseInt($(slide).attr("data-swiper-slide-index"), 10)) : (swiper.clickedIndex = $(slide).index()),
                    params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex && swiper.slideToClickedSlide();
            },
        };
        var swiper_esm_bundle_translate = {
            getTranslate: function (axis = this.isHorizontal() ? "x" : "y") {
                const { params: params, rtlTranslate: rtl, translate: translate, $wrapperEl: $wrapperEl } = this;
                if (params.virtualTranslate) return rtl ? -translate : translate;
                if (params.cssMode) return translate;
                let currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
                return rtl && (currentTranslate = -currentTranslate), currentTranslate || 0;
            },
            setTranslate: function (translate, byController) {
                const swiper = this,
                    { rtlTranslate: rtl, params: params, $wrapperEl: $wrapperEl, wrapperEl: wrapperEl, progress: progress } = swiper;
                let newProgress,
                    x = 0,
                    y = 0;
                swiper.isHorizontal() ? (x = rtl ? -translate : translate) : (y = translate),
                    params.roundLengths && ((x = Math.floor(x)), (y = Math.floor(y))),
                    params.cssMode ? (wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y) : params.virtualTranslate || $wrapperEl.transform(`translate3d(${x}px, ${y}px, 0px)`),
                    (swiper.previousTranslate = swiper.translate),
                    (swiper.translate = swiper.isHorizontal() ? x : y);
                const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
                (newProgress = 0 === translatesDiff ? 0 : (translate - swiper.minTranslate()) / translatesDiff), newProgress !== progress && swiper.updateProgress(translate), swiper.emit("setTranslate", swiper.translate, byController);
            },
            minTranslate: function () {
                return -this.snapGrid[0];
            },
            maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (translate = 0, speed = this.params.speed, runCallbacks = !0, translateBounds = !0, internal) {
                const swiper = this,
                    { params: params, wrapperEl: wrapperEl } = swiper;
                if (swiper.animating && params.preventInteractionOnTransition) return !1;
                const minTranslate = swiper.minTranslate(),
                    maxTranslate = swiper.maxTranslate();
                let newTranslate;
                if (((newTranslate = translateBounds && translate > minTranslate ? minTranslate : translateBounds && translate < maxTranslate ? maxTranslate : translate), swiper.updateProgress(newTranslate), params.cssMode)) {
                    const isH = swiper.isHorizontal();
                    return (
                        0 === speed
                            ? (wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate)
                            : wrapperEl.scrollTo
                            ? wrapperEl.scrollTo({ [isH ? "left" : "top"]: -newTranslate, behavior: "smooth" })
                            : (wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate),
                        !0
                    );
                }
                return (
                    0 === speed
                        ? (swiper.setTransition(0), swiper.setTranslate(newTranslate), runCallbacks && (swiper.emit("beforeTransitionStart", speed, internal), swiper.emit("transitionEnd")))
                        : (swiper.setTransition(speed),
                          swiper.setTranslate(newTranslate),
                          runCallbacks && (swiper.emit("beforeTransitionStart", speed, internal), swiper.emit("transitionStart")),
                          swiper.animating ||
                              ((swiper.animating = !0),
                              swiper.onTranslateToWrapperTransitionEnd ||
                                  (swiper.onTranslateToWrapperTransitionEnd = function (e) {
                                      swiper &&
                                          !swiper.destroyed &&
                                          e.target === this &&
                                          (swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd),
                                          swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd),
                                          (swiper.onTranslateToWrapperTransitionEnd = null),
                                          delete swiper.onTranslateToWrapperTransitionEnd,
                                          runCallbacks && swiper.emit("transitionEnd"));
                                  }),
                              swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd),
                              swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd))),
                    !0
                );
            },
        };
        var swiper_esm_bundle_transition = {
            setTransition: function (duration, byController) {
                const swiper = this;
                swiper.params.cssMode || swiper.$wrapperEl.transition(duration), swiper.emit("setTransition", duration, byController);
            },
            transitionStart: function (runCallbacks = !0, direction) {
                const swiper = this,
                    { activeIndex: activeIndex, params: params, previousIndex: previousIndex } = swiper;
                if (params.cssMode) return;
                params.autoHeight && swiper.updateAutoHeight();
                let dir = direction;
                if ((dir || (dir = activeIndex > previousIndex ? "next" : activeIndex < previousIndex ? "prev" : "reset"), swiper.emit("transitionStart"), runCallbacks && activeIndex !== previousIndex)) {
                    if ("reset" === dir) return void swiper.emit("slideResetTransitionStart");
                    swiper.emit("slideChangeTransitionStart"), "next" === dir ? swiper.emit("slideNextTransitionStart") : swiper.emit("slidePrevTransitionStart");
                }
            },
            transitionEnd: function (runCallbacks = !0, direction) {
                const swiper = this,
                    { activeIndex: activeIndex, previousIndex: previousIndex, params: params } = swiper;
                if (((swiper.animating = !1), params.cssMode)) return;
                swiper.setTransition(0);
                let dir = direction;
                if ((dir || (dir = activeIndex > previousIndex ? "next" : activeIndex < previousIndex ? "prev" : "reset"), swiper.emit("transitionEnd"), runCallbacks && activeIndex !== previousIndex)) {
                    if ("reset" === dir) return void swiper.emit("slideResetTransitionEnd");
                    swiper.emit("slideChangeTransitionEnd"), "next" === dir ? swiper.emit("slideNextTransitionEnd") : swiper.emit("slidePrevTransitionEnd");
                }
            },
        };
        var swiper_esm_bundle_slide = {
            slideTo: function (index = 0, speed = this.params.speed, runCallbacks = !0, internal) {
                const swiper = this;
                let slideIndex = index;
                slideIndex < 0 && (slideIndex = 0);
                const { params: params, snapGrid: snapGrid, slidesGrid: slidesGrid, previousIndex: previousIndex, activeIndex: activeIndex, rtlTranslate: rtl, wrapperEl: wrapperEl } = swiper;
                if (swiper.animating && params.preventInteractionOnTransition) return !1;
                const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
                let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
                snapIndex >= snapGrid.length && (snapIndex = snapGrid.length - 1), (activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks && swiper.emit("beforeSlideChangeStart");
                const translate = -snapGrid[snapIndex];
                if ((swiper.updateProgress(translate), params.normalizeSlideIndex)) for (let i = 0; i < slidesGrid.length; i += 1) -Math.floor(100 * translate) >= Math.floor(100 * slidesGrid[i]) && (slideIndex = i);
                if (swiper.initialized && slideIndex !== activeIndex) {
                    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return !1;
                    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate() && (activeIndex || 0) !== slideIndex) return !1;
                }
                let direction;
                if (((direction = slideIndex > activeIndex ? "next" : slideIndex < activeIndex ? "prev" : "reset"), (rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)))
                    return (
                        swiper.updateActiveIndex(slideIndex),
                        params.autoHeight && swiper.updateAutoHeight(),
                        swiper.updateSlidesClasses(),
                        "slide" !== params.effect && swiper.setTranslate(translate),
                        "reset" !== direction && (swiper.transitionStart(runCallbacks, direction), swiper.transitionEnd(runCallbacks, direction)),
                        !1
                    );
                if (params.cssMode) {
                    const isH = swiper.isHorizontal();
                    return (
                        0 === speed
                            ? (wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -translate)
                            : wrapperEl.scrollTo
                            ? wrapperEl.scrollTo({ [isH ? "left" : "top"]: -translate, behavior: "smooth" })
                            : (wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -translate),
                        !0
                    );
                }
                return (
                    0 === speed
                        ? (swiper.setTransition(0),
                          swiper.setTranslate(translate),
                          swiper.updateActiveIndex(slideIndex),
                          swiper.updateSlidesClasses(),
                          swiper.emit("beforeTransitionStart", speed, internal),
                          swiper.transitionStart(runCallbacks, direction),
                          swiper.transitionEnd(runCallbacks, direction))
                        : (swiper.setTransition(speed),
                          swiper.setTranslate(translate),
                          swiper.updateActiveIndex(slideIndex),
                          swiper.updateSlidesClasses(),
                          swiper.emit("beforeTransitionStart", speed, internal),
                          swiper.transitionStart(runCallbacks, direction),
                          swiper.animating ||
                              ((swiper.animating = !0),
                              swiper.onSlideToWrapperTransitionEnd ||
                                  (swiper.onSlideToWrapperTransitionEnd = function (e) {
                                      swiper &&
                                          !swiper.destroyed &&
                                          e.target === this &&
                                          (swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd),
                                          swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd),
                                          (swiper.onSlideToWrapperTransitionEnd = null),
                                          delete swiper.onSlideToWrapperTransitionEnd,
                                          swiper.transitionEnd(runCallbacks, direction));
                                  }),
                              swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd),
                              swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd))),
                    !0
                );
            },
            slideToLoop: function (index = 0, speed = this.params.speed, runCallbacks = !0, internal) {
                const swiper = this;
                let newIndex = index;
                return swiper.params.loop && (newIndex += swiper.loopedSlides), swiper.slideTo(newIndex, speed, runCallbacks, internal);
            },
            slideNext: function (speed = this.params.speed, runCallbacks = !0, internal) {
                const swiper = this,
                    { params: params, animating: animating } = swiper,
                    increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;
                if (params.loop) {
                    if (animating) return !1;
                    swiper.loopFix(), (swiper._clientLeft = swiper.$wrapperEl[0].clientLeft);
                }
                return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
            },
            slidePrev: function (speed = this.params.speed, runCallbacks = !0, internal) {
                const swiper = this,
                    { params: params, animating: animating, snapGrid: snapGrid, slidesGrid: slidesGrid, rtlTranslate: rtlTranslate } = swiper;
                if (params.loop) {
                    if (animating) return !1;
                    swiper.loopFix(), (swiper._clientLeft = swiper.$wrapperEl[0].clientLeft);
                }
                function normalize(val) {
                    return val < 0 ? -Math.floor(Math.abs(val)) : Math.floor(val);
                }
                const normalizedTranslate = normalize(rtlTranslate ? swiper.translate : -swiper.translate),
                    normalizedSnapGrid = snapGrid.map((val) => normalize(val));
                slidesGrid.map((val) => normalize(val)), snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
                let prevIndex,
                    prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
                return (
                    void 0 === prevSnap &&
                        params.cssMode &&
                        snapGrid.forEach((snap) => {
                            !prevSnap && normalizedTranslate >= snap && (prevSnap = snap);
                        }),
                    void 0 !== prevSnap && ((prevIndex = slidesGrid.indexOf(prevSnap)), prevIndex < 0 && (prevIndex = swiper.activeIndex - 1)),
                    swiper.slideTo(prevIndex, speed, runCallbacks, internal)
                );
            },
            slideReset: function (speed = this.params.speed, runCallbacks = !0, internal) {
                return this.slideTo(this.activeIndex, speed, runCallbacks, internal);
            },
            slideToClosest: function (speed = this.params.speed, runCallbacks = !0, internal, threshold = 0.5) {
                const swiper = this;
                let index = swiper.activeIndex;
                const skip = Math.min(swiper.params.slidesPerGroupSkip, index),
                    snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup),
                    translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
                if (translate >= swiper.snapGrid[snapIndex]) {
                    const currentSnap = swiper.snapGrid[snapIndex];
                    translate - currentSnap > (swiper.snapGrid[snapIndex + 1] - currentSnap) * threshold && (index += swiper.params.slidesPerGroup);
                } else {
                    const prevSnap = swiper.snapGrid[snapIndex - 1];
                    translate - prevSnap <= (swiper.snapGrid[snapIndex] - prevSnap) * threshold && (index -= swiper.params.slidesPerGroup);
                }
                return (index = Math.max(index, 0)), (index = Math.min(index, swiper.slidesGrid.length - 1)), swiper.slideTo(index, speed, runCallbacks, internal);
            },
            slideToClickedSlide: function () {
                const swiper = this,
                    { params: params, $wrapperEl: $wrapperEl } = swiper,
                    slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
                let realIndex,
                    slideToIndex = swiper.clickedIndex;
                if (params.loop) {
                    if (swiper.animating) return;
                    (realIndex = parseInt($(swiper.clickedSlide).attr("data-swiper-slide-index"), 10)),
                        params.centeredSlides
                            ? slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2
                                ? (swiper.loopFix(),
                                  (slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index()),
                                  Utils.nextTick(() => {
                                      swiper.slideTo(slideToIndex);
                                  }))
                                : swiper.slideTo(slideToIndex)
                            : slideToIndex > swiper.slides.length - slidesPerView
                            ? (swiper.loopFix(),
                              (slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index()),
                              Utils.nextTick(() => {
                                  swiper.slideTo(slideToIndex);
                              }))
                            : swiper.slideTo(slideToIndex);
                } else swiper.slideTo(slideToIndex);
            },
        };
        var loop = {
            loopCreate: function () {
                const swiper = this,
                    { params: params, $wrapperEl: $wrapperEl } = swiper;
                $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
                let slides = $wrapperEl.children("." + params.slideClass);
                if (params.loopFillGroupWithBlank) {
                    const blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
                    if (blankSlidesNum !== params.slidesPerGroup) {
                        for (let i = 0; i < blankSlidesNum; i += 1) {
                            const blankNode = $(ssr_window_esm_doc.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                            $wrapperEl.append(blankNode);
                        }
                        slides = $wrapperEl.children("." + params.slideClass);
                    }
                }
                "auto" !== params.slidesPerView || params.loopedSlides || (params.loopedSlides = slides.length),
                    (swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10))),
                    (swiper.loopedSlides += params.loopAdditionalSlides),
                    swiper.loopedSlides > slides.length && (swiper.loopedSlides = slides.length);
                const prependSlides = [],
                    appendSlides = [];
                slides.each((index, el) => {
                    const slide = $(el);
                    index < swiper.loopedSlides && appendSlides.push(el), index < slides.length && index >= slides.length - swiper.loopedSlides && prependSlides.push(el), slide.attr("data-swiper-slide-index", index);
                });
                for (let i = 0; i < appendSlides.length; i += 1) $wrapperEl.append($(appendSlides[i].cloneNode(!0)).addClass(params.slideDuplicateClass));
                for (let i = prependSlides.length - 1; i >= 0; i -= 1) $wrapperEl.prepend($(prependSlides[i].cloneNode(!0)).addClass(params.slideDuplicateClass));
            },
            loopFix: function () {
                const swiper = this;
                swiper.emit("beforeLoopFix");
                const { activeIndex: activeIndex, slides: slides, loopedSlides: loopedSlides, allowSlidePrev: allowSlidePrev, allowSlideNext: allowSlideNext, snapGrid: snapGrid, rtlTranslate: rtl } = swiper;
                let newIndex;
                (swiper.allowSlidePrev = !0), (swiper.allowSlideNext = !0);
                const diff = -snapGrid[activeIndex] - swiper.getTranslate();
                if (activeIndex < loopedSlides) {
                    (newIndex = slides.length - 3 * loopedSlides + activeIndex), (newIndex += loopedSlides);
                    swiper.slideTo(newIndex, 0, !1, !0) && 0 !== diff && swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
                } else if (activeIndex >= slides.length - loopedSlides) {
                    (newIndex = -slides.length + activeIndex + loopedSlides), (newIndex += loopedSlides);
                    swiper.slideTo(newIndex, 0, !1, !0) && 0 !== diff && swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
                }
                (swiper.allowSlidePrev = allowSlidePrev), (swiper.allowSlideNext = allowSlideNext), swiper.emit("loopFix");
            },
            loopDestroy: function () {
                const { $wrapperEl: $wrapperEl, params: params, slides: slides } = this;
                $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove(), slides.removeAttr("data-swiper-slide-index");
            },
        };
        var grabCursor = {
            setGrabCursor: function (moving) {
                if (swiper_esm_bundle_Support.touch || !this.params.simulateTouch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode) return;
                const el = this.el;
                (el.style.cursor = "move"), (el.style.cursor = moving ? "-webkit-grabbing" : "-webkit-grab"), (el.style.cursor = moving ? "-moz-grabbin" : "-moz-grab"), (el.style.cursor = moving ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
                swiper_esm_bundle_Support.touch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode || (this.el.style.cursor = "");
            },
        };
        var manipulation = {
            appendSlide: function (slides) {
                const swiper = this,
                    { $wrapperEl: $wrapperEl, params: params } = swiper;
                if ((params.loop && swiper.loopDestroy(), "object" == typeof slides && "length" in slides)) for (let i = 0; i < slides.length; i += 1) slides[i] && $wrapperEl.append(slides[i]);
                else $wrapperEl.append(slides);
                params.loop && swiper.loopCreate(), (params.observer && swiper_esm_bundle_Support.observer) || swiper.update();
            },
            prependSlide: function (slides) {
                const swiper = this,
                    { params: params, $wrapperEl: $wrapperEl, activeIndex: activeIndex } = swiper;
                params.loop && swiper.loopDestroy();
                let newActiveIndex = activeIndex + 1;
                if ("object" == typeof slides && "length" in slides) {
                    for (let i = 0; i < slides.length; i += 1) slides[i] && $wrapperEl.prepend(slides[i]);
                    newActiveIndex = activeIndex + slides.length;
                } else $wrapperEl.prepend(slides);
                params.loop && swiper.loopCreate(), (params.observer && swiper_esm_bundle_Support.observer) || swiper.update(), swiper.slideTo(newActiveIndex, 0, !1);
            },
            addSlide: function (index, slides) {
                const swiper = this,
                    { $wrapperEl: $wrapperEl, params: params, activeIndex: activeIndex } = swiper;
                let activeIndexBuffer = activeIndex;
                params.loop && ((activeIndexBuffer -= swiper.loopedSlides), swiper.loopDestroy(), (swiper.slides = $wrapperEl.children("." + params.slideClass)));
                const baseLength = swiper.slides.length;
                if (index <= 0) return void swiper.prependSlide(slides);
                if (index >= baseLength) return void swiper.appendSlide(slides);
                let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
                const slidesBuffer = [];
                for (let i = baseLength - 1; i >= index; i -= 1) {
                    const currentSlide = swiper.slides.eq(i);
                    currentSlide.remove(), slidesBuffer.unshift(currentSlide);
                }
                if ("object" == typeof slides && "length" in slides) {
                    for (let i = 0; i < slides.length; i += 1) slides[i] && $wrapperEl.append(slides[i]);
                    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
                } else $wrapperEl.append(slides);
                for (let i = 0; i < slidesBuffer.length; i += 1) $wrapperEl.append(slidesBuffer[i]);
                params.loop && swiper.loopCreate(),
                    (params.observer && swiper_esm_bundle_Support.observer) || swiper.update(),
                    params.loop ? swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, !1) : swiper.slideTo(newActiveIndex, 0, !1);
            },
            removeSlide: function (slidesIndexes) {
                const swiper = this,
                    { params: params, $wrapperEl: $wrapperEl, activeIndex: activeIndex } = swiper;
                let activeIndexBuffer = activeIndex;
                params.loop && ((activeIndexBuffer -= swiper.loopedSlides), swiper.loopDestroy(), (swiper.slides = $wrapperEl.children("." + params.slideClass)));
                let indexToRemove,
                    newActiveIndex = activeIndexBuffer;
                if ("object" == typeof slidesIndexes && "length" in slidesIndexes) {
                    for (let i = 0; i < slidesIndexes.length; i += 1) (indexToRemove = slidesIndexes[i]), swiper.slides[indexToRemove] && swiper.slides.eq(indexToRemove).remove(), indexToRemove < newActiveIndex && (newActiveIndex -= 1);
                    newActiveIndex = Math.max(newActiveIndex, 0);
                } else (indexToRemove = slidesIndexes), swiper.slides[indexToRemove] && swiper.slides.eq(indexToRemove).remove(), indexToRemove < newActiveIndex && (newActiveIndex -= 1), (newActiveIndex = Math.max(newActiveIndex, 0));
                params.loop && swiper.loopCreate(),
                    (params.observer && swiper_esm_bundle_Support.observer) || swiper.update(),
                    params.loop ? swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, !1) : swiper.slideTo(newActiveIndex, 0, !1);
            },
            removeAllSlides: function () {
                const swiper = this,
                    slidesIndexes = [];
                for (let i = 0; i < swiper.slides.length; i += 1) slidesIndexes.push(i);
                swiper.removeSlide(slidesIndexes);
            },
        };
        const swiper_esm_bundle_Device = (function () {
            const platform = ssr_window_esm_win.navigator.platform,
                ua = ssr_window_esm_win.navigator.userAgent,
                device = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    edge: !1,
                    ie: !1,
                    firefox: !1,
                    macos: !1,
                    windows: !1,
                    cordova: !(!ssr_window_esm_win.cordova && !ssr_window_esm_win.phonegap),
                    phonegap: !(!ssr_window_esm_win.cordova && !ssr_window_esm_win.phonegap),
                    electron: !1,
                },
                screenWidth = ssr_window_esm_win.screen.width,
                screenHeight = ssr_window_esm_win.screen.height,
                android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
                iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                ie = ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0,
                edge = ua.indexOf("Edge/") >= 0,
                firefox = ua.indexOf("Gecko/") >= 0 && ua.indexOf("Firefox/") >= 0,
                windows = "Win32" === platform,
                electron = ua.toLowerCase().indexOf("electron") >= 0;
            let macos = "MacIntel" === platform;
            return (
                !ipad &&
                    macos &&
                    swiper_esm_bundle_Support.touch &&
                    ((1024 === screenWidth && 1366 === screenHeight) || (834 === screenWidth && 1194 === screenHeight) || (834 === screenWidth && 1112 === screenHeight) || (768 === screenWidth && 1024 === screenHeight)) &&
                    ((ipad = ua.match(/(Version)\/([\d.]+)/)), (macos = !1)),
                (device.ie = ie),
                (device.edge = edge),
                (device.firefox = firefox),
                android && !windows && ((device.os = "android"), (device.osVersion = android[2]), (device.android = !0), (device.androidChrome = ua.toLowerCase().indexOf("chrome") >= 0)),
                (ipad || iphone || ipod) && ((device.os = "ios"), (device.ios = !0)),
                iphone && !ipod && ((device.osVersion = iphone[2].replace(/_/g, ".")), (device.iphone = !0)),
                ipad && ((device.osVersion = ipad[2].replace(/_/g, ".")), (device.ipad = !0)),
                ipod && ((device.osVersion = ipod[3] ? ipod[3].replace(/_/g, ".") : null), (device.ipod = !0)),
                device.ios && device.osVersion && ua.indexOf("Version/") >= 0 && "10" === device.osVersion.split(".")[0] && (device.osVersion = ua.toLowerCase().split("version/")[1].split(" ")[0]),
                (device.webView =
                    !(!(iphone || ipad || ipod) || (!ua.match(/.*AppleWebKit(?!.*Safari)/i) && !ssr_window_esm_win.navigator.standalone)) ||
                    (ssr_window_esm_win.matchMedia && ssr_window_esm_win.matchMedia("(display-mode: standalone)").matches)),
                (device.webview = device.webView),
                (device.standalone = device.webView),
                (device.desktop = !(device.ios || device.android) || electron),
                device.desktop && ((device.electron = electron), (device.macos = macos), (device.windows = windows), device.macos && (device.os = "macos"), device.windows && (device.os = "windows")),
                (device.pixelRatio = ssr_window_esm_win.devicePixelRatio || 1),
                device
            );
        })();
        function onTouchStart(event) {
            const swiper = this,
                data = swiper.touchEventsData,
                { params: params, touches: touches } = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            let e = event;
            e.originalEvent && (e = e.originalEvent);
            const $targetEl = $(e.target);
            if ("wrapper" === params.touchEventsTarget && !$targetEl.closest(swiper.wrapperEl).length) return;
            if (((data.isTouchEvent = "touchstart" === e.type), !data.isTouchEvent && "which" in e && 3 === e.which)) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) return void (swiper.allowClick = !0);
            if (params.swipeHandler && !$targetEl.closest(params.swipeHandler)[0]) return;
            (touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX), (touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY);
            const startX = touches.currentX,
                startY = touches.currentY,
                edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection,
                edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (!edgeSwipeDetection || !(startX <= edgeSwipeThreshold || startX >= ssr_window_esm_win.screen.width - edgeSwipeThreshold)) {
                if (
                    (Utils.extend(data, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                    (touches.startX = startX),
                    (touches.startY = startY),
                    (data.touchStartTime = Utils.now()),
                    (swiper.allowClick = !0),
                    swiper.updateSize(),
                    (swiper.swipeDirection = void 0),
                    params.threshold > 0 && (data.allowThresholdMove = !1),
                    "touchstart" !== e.type)
                ) {
                    let preventDefault = !0;
                    $targetEl.is(data.formElements) && (preventDefault = !1),
                        ssr_window_esm_doc.activeElement && $(ssr_window_esm_doc.activeElement).is(data.formElements) && ssr_window_esm_doc.activeElement !== $targetEl[0] && ssr_window_esm_doc.activeElement.blur();
                    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                    (params.touchStartForcePreventDefault || shouldPreventDefault) && e.preventDefault();
                }
                swiper.emit("touchStart", e);
            }
        }
        function onTouchMove(event) {
            const swiper = this,
                data = swiper.touchEventsData,
                { params: params, touches: touches, rtlTranslate: rtl } = swiper;
            let e = event;
            if ((e.originalEvent && (e = e.originalEvent), !data.isTouched)) return void (data.startMoving && data.isScrolling && swiper.emit("touchMoveOpposite", e));
            if (data.isTouchEvent && "mousemove" === e.type) return;
            const targetTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]),
                pageX = "touchmove" === e.type ? targetTouch.pageX : e.pageX,
                pageY = "touchmove" === e.type ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) return (touches.startX = pageX), void (touches.startY = pageY);
            if (!swiper.allowTouchMove) return (swiper.allowClick = !1), void (data.isTouched && (Utils.extend(touches, { startX: pageX, startY: pageY, currentX: pageX, currentY: pageY }), (data.touchStartTime = Utils.now())));
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop)
                if (swiper.isVertical()) {
                    if ((pageY < touches.startY && swiper.translate <= swiper.maxTranslate()) || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())) return (data.isTouched = !1), void (data.isMoved = !1);
                } else if ((pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())) return;
            if (data.isTouchEvent && ssr_window_esm_doc.activeElement && e.target === ssr_window_esm_doc.activeElement && $(e.target).is(data.formElements)) return (data.isMoved = !0), void (swiper.allowClick = !1);
            if ((data.allowTouchCallbacks && swiper.emit("touchMove", e), e.targetTouches && e.targetTouches.length > 1)) return;
            (touches.currentX = pageX), (touches.currentY = pageY);
            const diffX = touches.currentX - touches.startX,
                diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (void 0 === data.isScrolling) {
                let touchAngle;
                (swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)
                    ? (data.isScrolling = !1)
                    : diffX * diffX + diffY * diffY >= 25 &&
                      ((touchAngle = (180 * Math.atan2(Math.abs(diffY), Math.abs(diffX))) / Math.PI), (data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle));
            }
            if ((data.isScrolling && swiper.emit("touchMoveOpposite", e), void 0 === data.startMoving && ((touches.currentX === touches.startX && touches.currentY === touches.startY) || (data.startMoving = !0)), data.isScrolling))
                return void (data.isTouched = !1);
            if (!data.startMoving) return;
            (swiper.allowClick = !1),
                params.cssMode || e.preventDefault(),
                params.touchMoveStopPropagation && !params.nested && e.stopPropagation(),
                data.isMoved ||
                    (params.loop && swiper.loopFix(),
                    (data.startTranslate = swiper.getTranslate()),
                    swiper.setTransition(0),
                    swiper.animating && swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                    (data.allowMomentumBounce = !1),
                    !params.grabCursor || (!0 !== swiper.allowSlideNext && !0 !== swiper.allowSlidePrev) || swiper.setGrabCursor(!0),
                    swiper.emit("sliderFirstMove", e)),
                swiper.emit("sliderMove", e),
                (data.isMoved = !0);
            let diff = swiper.isHorizontal() ? diffX : diffY;
            (touches.diff = diff), (diff *= params.touchRatio), rtl && (diff = -diff), (swiper.swipeDirection = diff > 0 ? "prev" : "next"), (data.currentTranslate = diff + data.startTranslate);
            let disableParentSwiper = !0,
                resistanceRatio = params.resistanceRatio;
            if (
                (params.touchReleaseOnEdges && (resistanceRatio = 0),
                diff > 0 && data.currentTranslate > swiper.minTranslate()
                    ? ((disableParentSwiper = !1), params.resistance && (data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio))
                    : diff < 0 &&
                      data.currentTranslate < swiper.maxTranslate() &&
                      ((disableParentSwiper = !1), params.resistance && (data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio)),
                disableParentSwiper && (e.preventedByNestedSwiper = !0),
                !swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate && (data.currentTranslate = data.startTranslate),
                !swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate && (data.currentTranslate = data.startTranslate),
                params.threshold > 0)
            ) {
                if (!(Math.abs(diff) > params.threshold || data.allowThresholdMove)) return void (data.currentTranslate = data.startTranslate);
                if (!data.allowThresholdMove)
                    return (
                        (data.allowThresholdMove = !0),
                        (touches.startX = touches.currentX),
                        (touches.startY = touches.currentY),
                        (data.currentTranslate = data.startTranslate),
                        void (touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY)
                    );
            }
            params.followFinger &&
                !params.cssMode &&
                ((params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) && (swiper.updateActiveIndex(), swiper.updateSlidesClasses()),
                params.freeMode &&
                    (0 === data.velocities.length && data.velocities.push({ position: touches[swiper.isHorizontal() ? "startX" : "startY"], time: data.touchStartTime }),
                    data.velocities.push({ position: touches[swiper.isHorizontal() ? "currentX" : "currentY"], time: Utils.now() })),
                swiper.updateProgress(data.currentTranslate),
                swiper.setTranslate(data.currentTranslate));
        }
        function onTouchEnd(event) {
            const swiper = this,
                data = swiper.touchEventsData,
                { params: params, touches: touches, rtlTranslate: rtl, $wrapperEl: $wrapperEl, slidesGrid: slidesGrid, snapGrid: snapGrid } = swiper;
            let e = event;
            if ((e.originalEvent && (e = e.originalEvent), data.allowTouchCallbacks && swiper.emit("touchEnd", e), (data.allowTouchCallbacks = !1), !data.isTouched))
                return data.isMoved && params.grabCursor && swiper.setGrabCursor(!1), (data.isMoved = !1), void (data.startMoving = !1);
            params.grabCursor && data.isMoved && data.isTouched && (!0 === swiper.allowSlideNext || !0 === swiper.allowSlidePrev) && swiper.setGrabCursor(!1);
            const touchEndTime = Utils.now(),
                timeDiff = touchEndTime - data.touchStartTime;
            if (
                (swiper.allowClick && (swiper.updateClickedSlide(e), swiper.emit("tap click", e), timeDiff < 300 && touchEndTime - data.lastClickTime < 300 && swiper.emit("doubleTap doubleClick", e)),
                (data.lastClickTime = Utils.now()),
                Utils.nextTick(() => {
                    swiper.destroyed || (swiper.allowClick = !0);
                }),
                !data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate)
            )
                return (data.isTouched = !1), (data.isMoved = !1), void (data.startMoving = !1);
            let currentPos;
            if (((data.isTouched = !1), (data.isMoved = !1), (data.startMoving = !1), (currentPos = params.followFinger ? (rtl ? swiper.translate : -swiper.translate) : -data.currentTranslate), params.cssMode)) return;
            if (params.freeMode) {
                if (currentPos < -swiper.minTranslate()) return void swiper.slideTo(swiper.activeIndex);
                if (currentPos > -swiper.maxTranslate()) return void (swiper.slides.length < snapGrid.length ? swiper.slideTo(snapGrid.length - 1) : swiper.slideTo(swiper.slides.length - 1));
                if (params.freeModeMomentum) {
                    if (data.velocities.length > 1) {
                        const lastMoveEvent = data.velocities.pop(),
                            velocityEvent = data.velocities.pop(),
                            distance = lastMoveEvent.position - velocityEvent.position,
                            time = lastMoveEvent.time - velocityEvent.time;
                        (swiper.velocity = distance / time),
                            (swiper.velocity /= 2),
                            Math.abs(swiper.velocity) < params.freeModeMinimumVelocity && (swiper.velocity = 0),
                            (time > 150 || Utils.now() - lastMoveEvent.time > 300) && (swiper.velocity = 0);
                    } else swiper.velocity = 0;
                    (swiper.velocity *= params.freeModeMomentumVelocityRatio), (data.velocities.length = 0);
                    let momentumDuration = 1e3 * params.freeModeMomentumRatio;
                    const momentumDistance = swiper.velocity * momentumDuration;
                    let newPosition = swiper.translate + momentumDistance;
                    rtl && (newPosition = -newPosition);
                    let afterBouncePosition,
                        doBounce = !1;
                    const bounceAmount = 20 * Math.abs(swiper.velocity) * params.freeModeMomentumBounceRatio;
                    let needsLoopFix;
                    if (newPosition < swiper.maxTranslate())
                        params.freeModeMomentumBounce
                            ? (newPosition + swiper.maxTranslate() < -bounceAmount && (newPosition = swiper.maxTranslate() - bounceAmount), (afterBouncePosition = swiper.maxTranslate()), (doBounce = !0), (data.allowMomentumBounce = !0))
                            : (newPosition = swiper.maxTranslate()),
                            params.loop && params.centeredSlides && (needsLoopFix = !0);
                    else if (newPosition > swiper.minTranslate())
                        params.freeModeMomentumBounce
                            ? (newPosition - swiper.minTranslate() > bounceAmount && (newPosition = swiper.minTranslate() + bounceAmount), (afterBouncePosition = swiper.minTranslate()), (doBounce = !0), (data.allowMomentumBounce = !0))
                            : (newPosition = swiper.minTranslate()),
                            params.loop && params.centeredSlides && (needsLoopFix = !0);
                    else if (params.freeModeSticky) {
                        let nextSlide;
                        for (let j = 0; j < snapGrid.length; j += 1)
                            if (snapGrid[j] > -newPosition) {
                                nextSlide = j;
                                break;
                            }
                        (newPosition = Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || "next" === swiper.swipeDirection ? snapGrid[nextSlide] : snapGrid[nextSlide - 1]),
                            (newPosition = -newPosition);
                    }
                    if (
                        (needsLoopFix &&
                            swiper.once("transitionEnd", () => {
                                swiper.loopFix();
                            }),
                        0 !== swiper.velocity)
                    ) {
                        if (((momentumDuration = rtl ? Math.abs((-newPosition - swiper.translate) / swiper.velocity) : Math.abs((newPosition - swiper.translate) / swiper.velocity)), params.freeModeSticky)) {
                            const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate),
                                currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                            momentumDuration = moveDistance < currentSlideSize ? params.speed : moveDistance < 2 * currentSlideSize ? 1.5 * params.speed : 2.5 * params.speed;
                        }
                    } else if (params.freeModeSticky) return void swiper.slideToClosest();
                    params.freeModeMomentumBounce && doBounce
                        ? (swiper.updateProgress(afterBouncePosition),
                          swiper.setTransition(momentumDuration),
                          swiper.setTranslate(newPosition),
                          swiper.transitionStart(!0, swiper.swipeDirection),
                          (swiper.animating = !0),
                          $wrapperEl.transitionEnd(() => {
                              swiper &&
                                  !swiper.destroyed &&
                                  data.allowMomentumBounce &&
                                  (swiper.emit("momentumBounce"),
                                  swiper.setTransition(params.speed),
                                  swiper.setTranslate(afterBouncePosition),
                                  $wrapperEl.transitionEnd(() => {
                                      swiper && !swiper.destroyed && swiper.transitionEnd();
                                  }));
                          }))
                        : swiper.velocity
                        ? (swiper.updateProgress(newPosition),
                          swiper.setTransition(momentumDuration),
                          swiper.setTranslate(newPosition),
                          swiper.transitionStart(!0, swiper.swipeDirection),
                          swiper.animating ||
                              ((swiper.animating = !0),
                              $wrapperEl.transitionEnd(() => {
                                  swiper && !swiper.destroyed && swiper.transitionEnd();
                              })))
                        : swiper.updateProgress(newPosition),
                        swiper.updateActiveIndex(),
                        swiper.updateSlidesClasses();
                } else if (params.freeModeSticky) return void swiper.slideToClosest();
                return void ((!params.freeModeMomentum || timeDiff >= params.longSwipesMs) && (swiper.updateProgress(), swiper.updateActiveIndex(), swiper.updateSlidesClasses()));
            }
            let stopIndex = 0,
                groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                void 0 !== slidesGrid[i + increment]
                    ? currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment] && ((stopIndex = i), (groupSize = slidesGrid[i + increment] - slidesGrid[i]))
                    : currentPos >= slidesGrid[i] && ((stopIndex = i), (groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2]));
            }
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize,
                increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) return void swiper.slideTo(swiper.activeIndex);
                "next" === swiper.swipeDirection && (ratio >= params.longSwipesRatio ? swiper.slideTo(stopIndex + increment) : swiper.slideTo(stopIndex)),
                    "prev" === swiper.swipeDirection && (ratio > 1 - params.longSwipesRatio ? swiper.slideTo(stopIndex + increment) : swiper.slideTo(stopIndex));
            } else {
                if (!params.shortSwipes) return void swiper.slideTo(swiper.activeIndex);
                swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl)
                    ? e.target === swiper.navigation.nextEl
                        ? swiper.slideTo(stopIndex + increment)
                        : swiper.slideTo(stopIndex)
                    : ("next" === swiper.swipeDirection && swiper.slideTo(stopIndex + increment), "prev" === swiper.swipeDirection && swiper.slideTo(stopIndex));
            }
        }
        function onResize() {
            const swiper = this,
                { params: params, el: el } = swiper;
            if (el && 0 === el.offsetWidth) return;
            params.breakpoints && swiper.setBreakpoint();
            const { allowSlideNext: allowSlideNext, allowSlidePrev: allowSlidePrev, snapGrid: snapGrid } = swiper;
            (swiper.allowSlideNext = !0),
                (swiper.allowSlidePrev = !0),
                swiper.updateSize(),
                swiper.updateSlides(),
                swiper.updateSlidesClasses(),
                ("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides ? swiper.slideTo(swiper.slides.length - 1, 0, !1, !0) : swiper.slideTo(swiper.activeIndex, 0, !1, !0),
                swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused && swiper.autoplay.run(),
                (swiper.allowSlidePrev = allowSlidePrev),
                (swiper.allowSlideNext = allowSlideNext),
                swiper.params.watchOverflow && snapGrid !== swiper.snapGrid && swiper.checkOverflow();
        }
        function swiper_esm_bundle_onClick(e) {
            const swiper = this;
            swiper.allowClick || (swiper.params.preventClicks && e.preventDefault(), swiper.params.preventClicksPropagation && swiper.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
        }
        function onScroll() {
            const swiper = this,
                { wrapperEl: wrapperEl } = swiper;
            let newProgress;
            (swiper.previousTranslate = swiper.translate),
                (swiper.translate = swiper.isHorizontal() ? -wrapperEl.scrollLeft : -wrapperEl.scrollTop),
                -0 === swiper.translate && (swiper.translate = 0),
                swiper.updateActiveIndex(),
                swiper.updateSlidesClasses();
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            (newProgress = 0 === translatesDiff ? 0 : (swiper.translate - swiper.minTranslate()) / translatesDiff),
                newProgress !== swiper.progress && swiper.updateProgress(swiper.translate),
                swiper.emit("setTranslate", swiper.translate, !1);
        }
        let dummyEventAttached = !1;
        function dummyEventListener() {}
        var defaults = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
        };
        const prototypes = {
                update: update,
                translate: swiper_esm_bundle_translate,
                transition: swiper_esm_bundle_transition,
                slide: swiper_esm_bundle_slide,
                loop: loop,
                grabCursor: grabCursor,
                manipulation: manipulation,
                events: {
                    attachEvents: function () {
                        const swiper = this,
                            { params: params, touchEvents: touchEvents, el: el, wrapperEl: wrapperEl } = swiper;
                        (swiper.onTouchStart = onTouchStart.bind(swiper)),
                            (swiper.onTouchMove = onTouchMove.bind(swiper)),
                            (swiper.onTouchEnd = onTouchEnd.bind(swiper)),
                            params.cssMode && (swiper.onScroll = onScroll.bind(swiper)),
                            (swiper.onClick = swiper_esm_bundle_onClick.bind(swiper));
                        const capture = !!params.nested;
                        if (!swiper_esm_bundle_Support.touch && swiper_esm_bundle_Support.pointerEvents)
                            el.addEventListener(touchEvents.start, swiper.onTouchStart, !1),
                                ssr_window_esm_doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture),
                                ssr_window_esm_doc.addEventListener(touchEvents.end, swiper.onTouchEnd, !1);
                        else {
                            if (swiper_esm_bundle_Support.touch) {
                                const passiveListener = !("touchstart" !== touchEvents.start || !swiper_esm_bundle_Support.passiveListener || !params.passiveListeners) && { passive: !0, capture: !1 };
                                el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener),
                                    el.addEventListener(touchEvents.move, swiper.onTouchMove, swiper_esm_bundle_Support.passiveListener ? { passive: !1, capture: capture } : capture),
                                    el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener),
                                    touchEvents.cancel && el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener),
                                    dummyEventAttached || (ssr_window_esm_doc.addEventListener("touchstart", dummyEventListener), (dummyEventAttached = !0));
                            }
                            ((params.simulateTouch && !swiper_esm_bundle_Device.ios && !swiper_esm_bundle_Device.android) || (params.simulateTouch && !swiper_esm_bundle_Support.touch && swiper_esm_bundle_Device.ios)) &&
                                (el.addEventListener("mousedown", swiper.onTouchStart, !1),
                                ssr_window_esm_doc.addEventListener("mousemove", swiper.onTouchMove, capture),
                                ssr_window_esm_doc.addEventListener("mouseup", swiper.onTouchEnd, !1));
                        }
                        (params.preventClicks || params.preventClicksPropagation) && el.addEventListener("click", swiper.onClick, !0),
                            params.cssMode && wrapperEl.addEventListener("scroll", swiper.onScroll),
                            params.updateOnWindowResize
                                ? swiper.on(swiper_esm_bundle_Device.ios || swiper_esm_bundle_Device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0)
                                : swiper.on("observerUpdate", onResize, !0);
                    },
                    detachEvents: function () {
                        const swiper = this,
                            { params: params, touchEvents: touchEvents, el: el, wrapperEl: wrapperEl } = swiper,
                            capture = !!params.nested;
                        if (!swiper_esm_bundle_Support.touch && swiper_esm_bundle_Support.pointerEvents)
                            el.removeEventListener(touchEvents.start, swiper.onTouchStart, !1),
                                ssr_window_esm_doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture),
                                ssr_window_esm_doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, !1);
                        else {
                            if (swiper_esm_bundle_Support.touch) {
                                const passiveListener = !("onTouchStart" !== touchEvents.start || !swiper_esm_bundle_Support.passiveListener || !params.passiveListeners) && { passive: !0, capture: !1 };
                                el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener),
                                    el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture),
                                    el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener),
                                    touchEvents.cancel && el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
                            }
                            ((params.simulateTouch && !swiper_esm_bundle_Device.ios && !swiper_esm_bundle_Device.android) || (params.simulateTouch && !swiper_esm_bundle_Support.touch && swiper_esm_bundle_Device.ios)) &&
                                (el.removeEventListener("mousedown", swiper.onTouchStart, !1),
                                ssr_window_esm_doc.removeEventListener("mousemove", swiper.onTouchMove, capture),
                                ssr_window_esm_doc.removeEventListener("mouseup", swiper.onTouchEnd, !1));
                        }
                        (params.preventClicks || params.preventClicksPropagation) && el.removeEventListener("click", swiper.onClick, !0),
                            params.cssMode && wrapperEl.removeEventListener("scroll", swiper.onScroll),
                            swiper.off(swiper_esm_bundle_Device.ios || swiper_esm_bundle_Device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize);
                    },
                },
                breakpoints: {
                    setBreakpoint: function () {
                        const swiper = this,
                            { activeIndex: activeIndex, initialized: initialized, loopedSlides: loopedSlides = 0, params: params, $el: $el } = swiper,
                            breakpoints = params.breakpoints;
                        if (!breakpoints || (breakpoints && 0 === Object.keys(breakpoints).length)) return;
                        const breakpoint = swiper.getBreakpoint(breakpoints);
                        if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
                            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
                            breakpointOnlyParams &&
                                ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((param) => {
                                    const paramValue = breakpointOnlyParams[param];
                                    void 0 !== paramValue &&
                                        (breakpointOnlyParams[param] =
                                            "slidesPerView" !== param || ("AUTO" !== paramValue && "auto" !== paramValue) ? ("slidesPerView" === param ? parseFloat(paramValue) : parseInt(paramValue, 10)) : "auto");
                                });
                            const breakpointParams = breakpointOnlyParams || swiper.originalParams,
                                wasMultiRow = params.slidesPerColumn > 1,
                                isMultiRow = breakpointParams.slidesPerColumn > 1;
                            wasMultiRow && !isMultiRow
                                ? $el.removeClass(`${params.containerModifierClass}multirow ${params.containerModifierClass}multirow-column`)
                                : !wasMultiRow &&
                                  isMultiRow &&
                                  ($el.addClass(params.containerModifierClass + "multirow"), "column" === breakpointParams.slidesPerColumnFill && $el.addClass(params.containerModifierClass + "multirow-column"));
                            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction,
                                needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
                            directionChanged && initialized && swiper.changeDirection(),
                                Utils.extend(swiper.params, breakpointParams),
                                Utils.extend(swiper, { allowTouchMove: swiper.params.allowTouchMove, allowSlideNext: swiper.params.allowSlideNext, allowSlidePrev: swiper.params.allowSlidePrev }),
                                (swiper.currentBreakpoint = breakpoint),
                                needsReLoop && initialized && (swiper.loopDestroy(), swiper.loopCreate(), swiper.updateSlides(), swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, !1)),
                                swiper.emit("breakpoint", breakpointParams);
                        }
                    },
                    getBreakpoint: function (breakpoints) {
                        if (!breakpoints) return;
                        let breakpoint = !1;
                        const points = Object.keys(breakpoints).map((point) => {
                            if ("string" == typeof point && 0 === point.indexOf("@")) {
                                const minRatio = parseFloat(point.substr(1));
                                return { value: ssr_window_esm_win.innerHeight * minRatio, point: point };
                            }
                            return { value: point, point: point };
                        });
                        points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
                        for (let i = 0; i < points.length; i += 1) {
                            const { point: point, value: value } = points[i];
                            value <= ssr_window_esm_win.innerWidth && (breakpoint = point);
                        }
                        return breakpoint || "max";
                    },
                },
                checkOverflow: {
                    checkOverflow: function () {
                        const swiper = this,
                            params = swiper.params,
                            wasLocked = swiper.isLocked,
                            lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;
                        params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition ? (swiper.isLocked = lastSlidePosition <= swiper.size) : (swiper.isLocked = 1 === swiper.snapGrid.length),
                            (swiper.allowSlideNext = !swiper.isLocked),
                            (swiper.allowSlidePrev = !swiper.isLocked),
                            wasLocked !== swiper.isLocked && swiper.emit(swiper.isLocked ? "lock" : "unlock"),
                            wasLocked && wasLocked !== swiper.isLocked && ((swiper.isEnd = !1), swiper.navigation.update());
                    },
                },
                classes: {
                    addClasses: function () {
                        const { classNames: classNames, params: params, rtl: rtl, $el: $el } = this,
                            suffixes = [];
                        suffixes.push("initialized"),
                            suffixes.push(params.direction),
                            params.freeMode && suffixes.push("free-mode"),
                            params.autoHeight && suffixes.push("autoheight"),
                            rtl && suffixes.push("rtl"),
                            params.slidesPerColumn > 1 && (suffixes.push("multirow"), "column" === params.slidesPerColumnFill && suffixes.push("multirow-column")),
                            swiper_esm_bundle_Device.android && suffixes.push("android"),
                            swiper_esm_bundle_Device.ios && suffixes.push("ios"),
                            params.cssMode && suffixes.push("css-mode"),
                            suffixes.forEach((suffix) => {
                                classNames.push(params.containerModifierClass + suffix);
                            }),
                            $el.addClass(classNames.join(" "));
                    },
                    removeClasses: function () {
                        const { $el: $el, classNames: classNames } = this;
                        $el.removeClass(classNames.join(" "));
                    },
                },
                images: {
                    loadImage: function (imageEl, src, srcset, sizes, checkForComplete, callback) {
                        let image;
                        function onReady() {
                            callback && callback();
                        }
                        imageEl.complete && checkForComplete
                            ? onReady()
                            : src
                            ? ((image = new ssr_window_esm_win.Image()), (image.onload = onReady), (image.onerror = onReady), sizes && (image.sizes = sizes), srcset && (image.srcset = srcset), src && (image.src = src))
                            : onReady();
                    },
                    preloadImages: function () {
                        const swiper = this;
                        function onReady() {
                            null != swiper &&
                                swiper &&
                                !swiper.destroyed &&
                                (void 0 !== swiper.imagesLoaded && (swiper.imagesLoaded += 1), swiper.imagesLoaded === swiper.imagesToLoad.length && (swiper.params.updateOnImagesReady && swiper.update(), swiper.emit("imagesReady")));
                        }
                        swiper.imagesToLoad = swiper.$el.find("img");
                        for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                            const imageEl = swiper.imagesToLoad[i];
                            swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), !0, onReady);
                        }
                    },
                },
            },
            extendedDefaults = {};
        class swiper_esm_bundle_Swiper extends SwiperClass {
            constructor(...args) {
                let el, params;
                1 === args.length && args[0].constructor && args[0].constructor === Object ? (params = args[0]) : ([el, params] = args),
                    params || (params = {}),
                    (params = Utils.extend({}, params)),
                    el && !params.el && (params.el = el),
                    super(params),
                    Object.keys(prototypes).forEach((prototypeGroup) => {
                        Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
                            swiper_esm_bundle_Swiper.prototype[protoMethod] || (swiper_esm_bundle_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod]);
                        });
                    });
                const swiper = this;
                void 0 === swiper.modules && (swiper.modules = {}),
                    Object.keys(swiper.modules).forEach((moduleName) => {
                        const module = swiper.modules[moduleName];
                        if (module.params) {
                            const moduleParamName = Object.keys(module.params)[0],
                                moduleParams = module.params[moduleParamName];
                            if ("object" != typeof moduleParams || null === moduleParams) return;
                            if (!(moduleParamName in params) || !("enabled" in moduleParams)) return;
                            !0 === params[moduleParamName] && (params[moduleParamName] = { enabled: !0 }),
                                "object" != typeof params[moduleParamName] || "enabled" in params[moduleParamName] || (params[moduleParamName].enabled = !0),
                                params[moduleParamName] || (params[moduleParamName] = { enabled: !1 });
                        }
                    });
                const swiperParams = Utils.extend({}, defaults);
                swiper.useModulesParams(swiperParams),
                    (swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params)),
                    (swiper.originalParams = Utils.extend({}, swiper.params)),
                    (swiper.passedParams = Utils.extend({}, params)),
                    (swiper.$ = $);
                const $el = $(swiper.params.el);
                if (((el = $el[0]), !el)) return;
                if ($el.length > 1) {
                    const swipers = [];
                    return (
                        $el.each((index, containerEl) => {
                            const newParams = Utils.extend({}, params, { el: containerEl });
                            swipers.push(new swiper_esm_bundle_Swiper(newParams));
                        }),
                        swipers
                    );
                }
                let $wrapperEl;
                return (
                    (el.swiper = swiper),
                    $el.data("swiper", swiper),
                    el && el.shadowRoot && el.shadowRoot.querySelector
                        ? (($wrapperEl = $(el.shadowRoot.querySelector("." + swiper.params.wrapperClass))), ($wrapperEl.children = (options) => $el.children(options)))
                        : ($wrapperEl = $el.children("." + swiper.params.wrapperClass)),
                    Utils.extend(swiper, {
                        $el: $el,
                        el: el,
                        $wrapperEl: $wrapperEl,
                        wrapperEl: $wrapperEl[0],
                        classNames: [],
                        slides: $(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === swiper.params.direction,
                        isVertical: () => "vertical" === swiper.params.direction,
                        rtl: "rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction"),
                        rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction")),
                        wrongRTL: "-webkit-box" === $wrapperEl.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: swiper.params.allowSlideNext,
                        allowSlidePrev: swiper.params.allowSlidePrev,
                        touchEvents: (function () {
                            const touch = ["touchstart", "touchmove", "touchend", "touchcancel"];
                            let desktop = ["mousedown", "mousemove", "mouseup"];
                            return (
                                swiper_esm_bundle_Support.pointerEvents && (desktop = ["pointerdown", "pointermove", "pointerup"]),
                                (swiper.touchEventsTouch = { start: touch[0], move: touch[1], end: touch[2], cancel: touch[3] }),
                                (swiper.touchEventsDesktop = { start: desktop[0], move: desktop[1], end: desktop[2] }),
                                swiper_esm_bundle_Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop
                            );
                        })(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video, label",
                            lastClickTime: Utils.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0,
                        },
                        allowClick: !0,
                        allowTouchMove: swiper.params.allowTouchMove,
                        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                        imagesToLoad: [],
                        imagesLoaded: 0,
                    }),
                    swiper.useModules(),
                    swiper.params.init && swiper.init(),
                    swiper
                );
            }
            slidesPerViewDynamic() {
                const { params: params, slides: slides, slidesGrid: slidesGrid, size: swiperSize, activeIndex: activeIndex } = this;
                let spv = 1;
                if (params.centeredSlides) {
                    let breakLoop,
                        slideSize = slides[activeIndex].swiperSlideSize;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) slides[i] && !breakLoop && ((slideSize += slides[i].swiperSlideSize), (spv += 1), slideSize > swiperSize && (breakLoop = !0));
                    for (let i = activeIndex - 1; i >= 0; i -= 1) slides[i] && !breakLoop && ((slideSize += slides[i].swiperSlideSize), (spv += 1), slideSize > swiperSize && (breakLoop = !0));
                } else for (let i = activeIndex + 1; i < slides.length; i += 1) slidesGrid[i] - slidesGrid[activeIndex] < swiperSize && (spv += 1);
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const { snapGrid: snapGrid, params: params } = swiper;
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate,
                        newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate), swiper.updateActiveIndex(), swiper.updateSlidesClasses();
                }
                let translated;
                params.breakpoints && swiper.setBreakpoint(),
                    swiper.updateSize(),
                    swiper.updateSlides(),
                    swiper.updateProgress(),
                    swiper.updateSlidesClasses(),
                    swiper.params.freeMode
                        ? (setTranslate(), swiper.params.autoHeight && swiper.updateAutoHeight())
                        : ((translated =
                              ("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides
                                  ? swiper.slideTo(swiper.slides.length - 1, 0, !1, !0)
                                  : swiper.slideTo(swiper.activeIndex, 0, !1, !0)),
                          translated || setTranslate()),
                    params.watchOverflow && snapGrid !== swiper.snapGrid && swiper.checkOverflow(),
                    swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate = !0) {
                const swiper = this,
                    currentDirection = swiper.params.direction;
                return (
                    newDirection || (newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal"),
                    newDirection === currentDirection ||
                        ("horizontal" !== newDirection && "vertical" !== newDirection) ||
                        (swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`),
                        (swiper.params.direction = newDirection),
                        swiper.slides.each((slideIndex, slideEl) => {
                            "vertical" === newDirection ? (slideEl.style.width = "") : (slideEl.style.height = "");
                        }),
                        swiper.emit("changeDirection"),
                        needUpdate && swiper.update()),
                    swiper
                );
            }
            init() {
                const swiper = this;
                swiper.initialized ||
                    (swiper.emit("beforeInit"),
                    swiper.params.breakpoints && swiper.setBreakpoint(),
                    swiper.addClasses(),
                    swiper.params.loop && swiper.loopCreate(),
                    swiper.updateSize(),
                    swiper.updateSlides(),
                    swiper.params.watchOverflow && swiper.checkOverflow(),
                    swiper.params.grabCursor && swiper.setGrabCursor(),
                    swiper.params.preloadImages && swiper.preloadImages(),
                    swiper.params.loop ? swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit) : swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit),
                    swiper.attachEvents(),
                    (swiper.initialized = !0),
                    swiper.emit("init"));
            }
            destroy(deleteInstance = !0, cleanStyles = !0) {
                const swiper = this,
                    { params: params, $el: $el, $wrapperEl: $wrapperEl, slides: slides } = swiper;
                return (
                    void 0 === swiper.params ||
                        swiper.destroyed ||
                        (swiper.emit("beforeDestroy"),
                        (swiper.initialized = !1),
                        swiper.detachEvents(),
                        params.loop && swiper.loopDestroy(),
                        cleanStyles &&
                            (swiper.removeClasses(),
                            $el.removeAttr("style"),
                            $wrapperEl.removeAttr("style"),
                            slides &&
                                slides.length &&
                                slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                        swiper.emit("destroy"),
                        Object.keys(swiper.eventsListeners).forEach((eventName) => {
                            swiper.off(eventName);
                        }),
                        !1 !== deleteInstance && ((swiper.$el[0].swiper = null), swiper.$el.data("swiper", null), Utils.deleteProps(swiper)),
                        (swiper.destroyed = !0)),
                    null
                );
            }
            static extendDefaults(newDefaults) {
                Utils.extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static get Class() {
                return SwiperClass;
            }
            static get $() {
                return $;
            }
        }
        var Device$1 = { name: "device", proto: { device: swiper_esm_bundle_Device }, static: { device: swiper_esm_bundle_Device } },
            Support$1 = { name: "support", proto: { support: swiper_esm_bundle_Support }, static: { support: swiper_esm_bundle_Support } };
        const swiper_esm_bundle_Browser = {
            isEdge: !!ssr_window_esm_win.navigator.userAgent.match(/Edge/g),
            isSafari: (function () {
                const ua = ssr_window_esm_win.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            })(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ssr_window_esm_win.navigator.userAgent),
        };
        var Browser$1 = { name: "browser", proto: { browser: swiper_esm_bundle_Browser }, static: { browser: swiper_esm_bundle_Browser } },
            Resize = {
                name: "resize",
                create() {
                    const swiper = this;
                    Utils.extend(swiper, {
                        resize: {
                            resizeHandler() {
                                swiper && !swiper.destroyed && swiper.initialized && (swiper.emit("beforeResize"), swiper.emit("resize"));
                            },
                            orientationChangeHandler() {
                                swiper && !swiper.destroyed && swiper.initialized && swiper.emit("orientationchange");
                            },
                        },
                    });
                },
                on: {
                    init() {
                        ssr_window_esm_win.addEventListener("resize", this.resize.resizeHandler), ssr_window_esm_win.addEventListener("orientationchange", this.resize.orientationChangeHandler);
                    },
                    destroy() {
                        ssr_window_esm_win.removeEventListener("resize", this.resize.resizeHandler), ssr_window_esm_win.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
                    },
                },
            };
        const Observer = {
            func: ssr_window_esm_win.MutationObserver || ssr_window_esm_win.WebkitMutationObserver,
            attach(target, options = {}) {
                const swiper = this,
                    observer = new (0, Observer.func)((mutations) => {
                        if (1 === mutations.length) return void swiper.emit("observerUpdate", mutations[0]);
                        const observerUpdate = function () {
                            swiper.emit("observerUpdate", mutations[0]);
                        };
                        ssr_window_esm_win.requestAnimationFrame ? ssr_window_esm_win.requestAnimationFrame(observerUpdate) : ssr_window_esm_win.setTimeout(observerUpdate, 0);
                    });
                observer.observe(target, {
                    attributes: void 0 === options.attributes || options.attributes,
                    childList: void 0 === options.childList || options.childList,
                    characterData: void 0 === options.characterData || options.characterData,
                }),
                    swiper.observer.observers.push(observer);
            },
            init() {
                const swiper = this;
                if (swiper_esm_bundle_Support.observer && swiper.params.observer) {
                    if (swiper.params.observeParents) {
                        const containerParents = swiper.$el.parents();
                        for (let i = 0; i < containerParents.length; i += 1) swiper.observer.attach(containerParents[i]);
                    }
                    swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren }), swiper.observer.attach(swiper.$wrapperEl[0], { attributes: !1 });
                }
            },
            destroy() {
                this.observer.observers.forEach((observer) => {
                    observer.disconnect();
                }),
                    (this.observer.observers = []);
            },
        };
        var Observer$1 = {
            name: "observer",
            params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
            create() {
                Utils.extend(this, { observer: { init: Observer.init.bind(this), attach: Observer.attach.bind(this), destroy: Observer.destroy.bind(this), observers: [] } });
            },
            on: {
                init() {
                    this.observer.init();
                },
                destroy() {
                    this.observer.destroy();
                },
            },
        };
        const Virtual = {
            update(force) {
                const swiper = this,
                    { slidesPerView: slidesPerView, slidesPerGroup: slidesPerGroup, centeredSlides: centeredSlides } = swiper.params,
                    { addSlidesBefore: addSlidesBefore, addSlidesAfter: addSlidesAfter } = swiper.params.virtual,
                    { from: previousFrom, to: previousTo, slides: slides, slidesGrid: previousSlidesGrid, renderSlide: renderSlide, offset: previousOffset } = swiper.virtual;
                swiper.updateActiveIndex();
                const activeIndex = swiper.activeIndex || 0;
                let offsetProp, slidesAfter, slidesBefore;
                (offsetProp = swiper.rtlTranslate ? "right" : swiper.isHorizontal() ? "left" : "top"),
                    centeredSlides
                        ? ((slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore), (slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter))
                        : ((slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore), (slidesBefore = slidesPerGroup + addSlidesAfter));
                const from = Math.max((activeIndex || 0) - slidesBefore, 0),
                    to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1),
                    offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
                function onRendered() {
                    swiper.updateSlides(), swiper.updateProgress(), swiper.updateSlidesClasses(), swiper.lazy && swiper.params.lazy.enabled && swiper.lazy.load();
                }
                if ((Utils.extend(swiper.virtual, { from: from, to: to, offset: offset, slidesGrid: swiper.slidesGrid }), previousFrom === from && previousTo === to && !force))
                    return swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset && swiper.slides.css(offsetProp, offset + "px"), void swiper.updateProgress();
                if (swiper.params.virtual.renderExternal)
                    return (
                        swiper.params.virtual.renderExternal.call(swiper, {
                            offset: offset,
                            from: from,
                            to: to,
                            slides: (function () {
                                const slidesToRender = [];
                                for (let i = from; i <= to; i += 1) slidesToRender.push(slides[i]);
                                return slidesToRender;
                            })(),
                        }),
                        void onRendered()
                    );
                const prependIndexes = [],
                    appendIndexes = [];
                if (force) swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
                else for (let i = previousFrom; i <= previousTo; i += 1) (i < from || i > to) && swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
                for (let i = 0; i < slides.length; i += 1) i >= from && i <= to && (void 0 === previousTo || force ? appendIndexes.push(i) : (i > previousTo && appendIndexes.push(i), i < previousFrom && prependIndexes.push(i)));
                appendIndexes.forEach((index) => {
                    swiper.$wrapperEl.append(renderSlide(slides[index], index));
                }),
                    prependIndexes
                        .sort((a, b) => b - a)
                        .forEach((index) => {
                            swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
                        }),
                    swiper.$wrapperEl.children(".swiper-slide").css(offsetProp, offset + "px"),
                    onRendered();
            },
            renderSlide(slide, index) {
                const swiper = this,
                    params = swiper.params.virtual;
                if (params.cache && swiper.virtual.cache[index]) return swiper.virtual.cache[index];
                const $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
                return $slideEl.attr("data-swiper-slide-index") || $slideEl.attr("data-swiper-slide-index", index), params.cache && (swiper.virtual.cache[index] = $slideEl), $slideEl;
            },
            appendSlide(slides) {
                const swiper = this;
                if ("object" == typeof slides && "length" in slides) for (let i = 0; i < slides.length; i += 1) slides[i] && swiper.virtual.slides.push(slides[i]);
                else swiper.virtual.slides.push(slides);
                swiper.virtual.update(!0);
            },
            prependSlide(slides) {
                const swiper = this,
                    activeIndex = swiper.activeIndex;
                let newActiveIndex = activeIndex + 1,
                    numberOfNewSlides = 1;
                if (Array.isArray(slides)) {
                    for (let i = 0; i < slides.length; i += 1) slides[i] && swiper.virtual.slides.unshift(slides[i]);
                    (newActiveIndex = activeIndex + slides.length), (numberOfNewSlides = slides.length);
                } else swiper.virtual.slides.unshift(slides);
                if (swiper.params.virtual.cache) {
                    const cache = swiper.virtual.cache,
                        newCache = {};
                    Object.keys(cache).forEach((cachedIndex) => {
                        const $cachedEl = cache[cachedIndex],
                            cachedElIndex = $cachedEl.attr("data-swiper-slide-index");
                        cachedElIndex && $cachedEl.attr("data-swiper-slide-index", parseInt(cachedElIndex, 10) + 1), (newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl);
                    }),
                        (swiper.virtual.cache = newCache);
                }
                swiper.virtual.update(!0), swiper.slideTo(newActiveIndex, 0);
            },
            removeSlide(slidesIndexes) {
                const swiper = this;
                if (null == slidesIndexes) return;
                let activeIndex = swiper.activeIndex;
                if (Array.isArray(slidesIndexes))
                    for (let i = slidesIndexes.length - 1; i >= 0; i -= 1)
                        swiper.virtual.slides.splice(slidesIndexes[i], 1),
                            swiper.params.virtual.cache && delete swiper.virtual.cache[slidesIndexes[i]],
                            slidesIndexes[i] < activeIndex && (activeIndex -= 1),
                            (activeIndex = Math.max(activeIndex, 0));
                else swiper.virtual.slides.splice(slidesIndexes, 1), swiper.params.virtual.cache && delete swiper.virtual.cache[slidesIndexes], slidesIndexes < activeIndex && (activeIndex -= 1), (activeIndex = Math.max(activeIndex, 0));
                swiper.virtual.update(!0), swiper.slideTo(activeIndex, 0);
            },
            removeAllSlides() {
                const swiper = this;
                (swiper.virtual.slides = []), swiper.params.virtual.cache && (swiper.virtual.cache = {}), swiper.virtual.update(!0), swiper.slideTo(0, 0);
            },
        };
        var Virtual$1 = {
            name: "virtual",
            params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } },
            create() {
                Utils.extend(this, {
                    virtual: {
                        update: Virtual.update.bind(this),
                        appendSlide: Virtual.appendSlide.bind(this),
                        prependSlide: Virtual.prependSlide.bind(this),
                        removeSlide: Virtual.removeSlide.bind(this),
                        removeAllSlides: Virtual.removeAllSlides.bind(this),
                        renderSlide: Virtual.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {},
                    },
                });
            },
            on: {
                beforeInit() {
                    const swiper = this;
                    if (!swiper.params.virtual.enabled) return;
                    swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
                    const overwriteParams = { watchSlidesProgress: !0 };
                    Utils.extend(swiper.params, overwriteParams), Utils.extend(swiper.originalParams, overwriteParams), swiper.params.initialSlide || swiper.virtual.update();
                },
                setTranslate() {
                    this.params.virtual.enabled && this.virtual.update();
                },
            },
        };
        const Keyboard = {
            handle(event) {
                const swiper = this,
                    { rtlTranslate: rtl } = swiper;
                let e = event;
                e.originalEvent && (e = e.originalEvent);
                const kc = e.keyCode || e.charCode;
                if (!swiper.allowSlideNext && ((swiper.isHorizontal() && 39 === kc) || (swiper.isVertical() && 40 === kc) || 34 === kc)) return !1;
                if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && 37 === kc) || (swiper.isVertical() && 38 === kc) || 33 === kc)) return !1;
                if (
                    !(
                        e.shiftKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.metaKey ||
                        (ssr_window_esm_doc.activeElement &&
                            ssr_window_esm_doc.activeElement.nodeName &&
                            ("input" === ssr_window_esm_doc.activeElement.nodeName.toLowerCase() || "textarea" === ssr_window_esm_doc.activeElement.nodeName.toLowerCase()))
                    )
                ) {
                    if (swiper.params.keyboard.onlyInViewport && (33 === kc || 34 === kc || 37 === kc || 39 === kc || 38 === kc || 40 === kc)) {
                        let inView = !1;
                        if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && 0 === swiper.$el.parents("." + swiper.params.slideActiveClass).length) return;
                        const windowWidth = ssr_window_esm_win.innerWidth,
                            windowHeight = ssr_window_esm_win.innerHeight,
                            swiperOffset = swiper.$el.offset();
                        rtl && (swiperOffset.left -= swiper.$el[0].scrollLeft);
                        const swiperCoord = [
                            [swiperOffset.left, swiperOffset.top],
                            [swiperOffset.left + swiper.width, swiperOffset.top],
                            [swiperOffset.left, swiperOffset.top + swiper.height],
                            [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height],
                        ];
                        for (let i = 0; i < swiperCoord.length; i += 1) {
                            const point = swiperCoord[i];
                            point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight && (inView = !0);
                        }
                        if (!inView) return;
                    }
                    swiper.isHorizontal()
                        ? ((33 !== kc && 34 !== kc && 37 !== kc && 39 !== kc) || (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
                          (((34 !== kc && 39 !== kc) || rtl) && ((33 !== kc && 37 !== kc) || !rtl)) || swiper.slideNext(),
                          (((33 !== kc && 37 !== kc) || rtl) && ((34 !== kc && 39 !== kc) || !rtl)) || swiper.slidePrev())
                        : ((33 !== kc && 34 !== kc && 38 !== kc && 40 !== kc) || (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
                          (34 !== kc && 40 !== kc) || swiper.slideNext(),
                          (33 !== kc && 38 !== kc) || swiper.slidePrev()),
                        swiper.emit("keyPress", kc);
                }
            },
            enable() {
                this.keyboard.enabled || ($(ssr_window_esm_doc).on("keydown", this.keyboard.handle), (this.keyboard.enabled = !0));
            },
            disable() {
                this.keyboard.enabled && ($(ssr_window_esm_doc).off("keydown", this.keyboard.handle), (this.keyboard.enabled = !1));
            },
        };
        var Keyboard$1 = {
            name: "keyboard",
            params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
            create() {
                Utils.extend(this, { keyboard: { enabled: !1, enable: Keyboard.enable.bind(this), disable: Keyboard.disable.bind(this), handle: Keyboard.handle.bind(this) } });
            },
            on: {
                init() {
                    const swiper = this;
                    swiper.params.keyboard.enabled && swiper.keyboard.enable();
                },
                destroy() {
                    const swiper = this;
                    swiper.keyboard.enabled && swiper.keyboard.disable();
                },
            },
        };
        const Mousewheel = {
            lastScrollTime: Utils.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: () =>
                ssr_window_esm_win.navigator.userAgent.indexOf("firefox") > -1
                    ? "DOMMouseScroll"
                    : (function () {
                          let isSupported = "onwheel" in ssr_window_esm_doc;
                          if (!isSupported) {
                              const element = ssr_window_esm_doc.createElement("div");
                              element.setAttribute("onwheel", "return;"), (isSupported = "function" == typeof element.onwheel);
                          }
                          return (
                              !isSupported &&
                                  ssr_window_esm_doc.implementation &&
                                  ssr_window_esm_doc.implementation.hasFeature &&
                                  !0 !== ssr_window_esm_doc.implementation.hasFeature("", "") &&
                                  (isSupported = ssr_window_esm_doc.implementation.hasFeature("Events.wheel", "3.0")),
                              isSupported
                          );
                      })()
                    ? "wheel"
                    : "mousewheel",
            normalize(e) {
                let sX = 0,
                    sY = 0,
                    pX = 0,
                    pY = 0;
                return (
                    "detail" in e && (sY = e.detail),
                    "wheelDelta" in e && (sY = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (sY = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (sX = -e.wheelDeltaX / 120),
                    "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((sX = sY), (sY = 0)),
                    (pX = 10 * sX),
                    (pY = 10 * sY),
                    "deltaY" in e && (pY = e.deltaY),
                    "deltaX" in e && (pX = e.deltaX),
                    e.shiftKey && !pX && ((pX = pY), (pY = 0)),
                    (pX || pY) && e.deltaMode && (1 === e.deltaMode ? ((pX *= 40), (pY *= 40)) : ((pX *= 800), (pY *= 800))),
                    pX && !sX && (sX = pX < 1 ? -1 : 1),
                    pY && !sY && (sY = pY < 1 ? -1 : 1),
                    { spinX: sX, spinY: sY, pixelX: pX, pixelY: pY }
                );
            },
            handleMouseEnter() {
                this.mouseEntered = !0;
            },
            handleMouseLeave() {
                this.mouseEntered = !1;
            },
            handle(event) {
                let e = event;
                const swiper = this,
                    params = swiper.params.mousewheel;
                swiper.params.cssMode && e.preventDefault();
                let target = swiper.$el;
                if (("container" !== swiper.params.mousewheel.eventsTarged && (target = $(swiper.params.mousewheel.eventsTarged)), !swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges)) return !0;
                e.originalEvent && (e = e.originalEvent);
                let delta = 0;
                const rtlFactor = swiper.rtlTranslate ? -1 : 1,
                    data = Mousewheel.normalize(e);
                if (params.forceToAxis)
                    if (swiper.isHorizontal()) {
                        if (!(Math.abs(data.pixelX) > Math.abs(data.pixelY))) return !0;
                        delta = data.pixelX * rtlFactor;
                    } else {
                        if (!(Math.abs(data.pixelY) > Math.abs(data.pixelX))) return !0;
                        delta = data.pixelY;
                    }
                else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
                if (0 === delta) return !0;
                if ((params.invert && (delta = -delta), swiper.params.freeMode)) {
                    const newEvent = { time: Utils.now(), delta: Math.abs(delta), direction: Math.sign(delta) },
                        { lastEventBeforeSnap: lastEventBeforeSnap } = swiper.mousewheel,
                        ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
                    if (!ignoreWheelEvents) {
                        (swiper.mousewheel.lastEventBeforeSnap = void 0), swiper.params.loop && swiper.loopFix();
                        let position = swiper.getTranslate() + delta * params.sensitivity;
                        const wasBeginning = swiper.isBeginning,
                            wasEnd = swiper.isEnd;
                        if (
                            (position >= swiper.minTranslate() && (position = swiper.minTranslate()),
                            position <= swiper.maxTranslate() && (position = swiper.maxTranslate()),
                            swiper.setTransition(0),
                            swiper.setTranslate(position),
                            swiper.updateProgress(),
                            swiper.updateActiveIndex(),
                            swiper.updateSlidesClasses(),
                            ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) && swiper.updateSlidesClasses(),
                            swiper.params.freeModeSticky)
                        ) {
                            clearTimeout(swiper.mousewheel.timeout), (swiper.mousewheel.timeout = void 0);
                            const recentWheelEvents = swiper.mousewheel.recentWheelEvents;
                            recentWheelEvents.length >= 15 && recentWheelEvents.shift();
                            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0,
                                firstEvent = recentWheelEvents[0];
                            if ((recentWheelEvents.push(newEvent), prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction))) recentWheelEvents.splice(0);
                            else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                                const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                                (swiper.mousewheel.lastEventBeforeSnap = newEvent),
                                    recentWheelEvents.splice(0),
                                    (swiper.mousewheel.timeout = Utils.nextTick(() => {
                                        swiper.slideToClosest(swiper.params.speed, !0, void 0, snapToThreshold);
                                    }, 0));
                            }
                            swiper.mousewheel.timeout ||
                                (swiper.mousewheel.timeout = Utils.nextTick(() => {
                                    (swiper.mousewheel.lastEventBeforeSnap = newEvent), recentWheelEvents.splice(0), swiper.slideToClosest(swiper.params.speed, !0, void 0, 0.5);
                                }, 500));
                        }
                        if (
                            (ignoreWheelEvents || swiper.emit("scroll", e),
                            swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction && swiper.autoplay.stop(),
                            position === swiper.minTranslate() || position === swiper.maxTranslate())
                        )
                            return !0;
                    }
                } else {
                    const newEvent = { time: Utils.now(), delta: Math.abs(delta), direction: Math.sign(delta), raw: event },
                        recentWheelEvents = swiper.mousewheel.recentWheelEvents;
                    recentWheelEvents.length >= 2 && recentWheelEvents.shift();
                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
                    if (
                        (recentWheelEvents.push(newEvent),
                        prevEvent ? (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta) && swiper.mousewheel.animateSlider(newEvent) : swiper.mousewheel.animateSlider(newEvent),
                        swiper.mousewheel.releaseScroll(newEvent))
                    )
                        return !0;
                }
                return e.preventDefault ? e.preventDefault() : (e.returnValue = !1), !1;
            },
            animateSlider(newEvent) {
                const swiper = this;
                return (
                    (newEvent.delta >= 6 && Utils.now() - swiper.mousewheel.lastScrollTime < 60) ||
                    (newEvent.direction < 0
                        ? (swiper.isEnd && !swiper.params.loop) || swiper.animating || (swiper.slideNext(), swiper.emit("scroll", newEvent.raw))
                        : (swiper.isBeginning && !swiper.params.loop) || swiper.animating || (swiper.slidePrev(), swiper.emit("scroll", newEvent.raw)),
                    (swiper.mousewheel.lastScrollTime = new ssr_window_esm_win.Date().getTime()),
                    !1)
                );
            },
            releaseScroll(newEvent) {
                const swiper = this,
                    params = swiper.params.mousewheel;
                if (newEvent.direction < 0) {
                    if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) return !0;
                } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) return !0;
                return !1;
            },
            enable() {
                const swiper = this,
                    event = Mousewheel.event();
                if (swiper.params.cssMode) return swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle), !0;
                if (!event) return !1;
                if (swiper.mousewheel.enabled) return !1;
                let target = swiper.$el;
                return (
                    "container" !== swiper.params.mousewheel.eventsTarged && (target = $(swiper.params.mousewheel.eventsTarged)),
                    target.on("mouseenter", swiper.mousewheel.handleMouseEnter),
                    target.on("mouseleave", swiper.mousewheel.handleMouseLeave),
                    target.on(event, swiper.mousewheel.handle),
                    (swiper.mousewheel.enabled = !0),
                    !0
                );
            },
            disable() {
                const swiper = this,
                    event = Mousewheel.event();
                if (swiper.params.cssMode) return swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle), !0;
                if (!event) return !1;
                if (!swiper.mousewheel.enabled) return !1;
                let target = swiper.$el;
                return "container" !== swiper.params.mousewheel.eventsTarged && (target = $(swiper.params.mousewheel.eventsTarged)), target.off(event, swiper.mousewheel.handle), (swiper.mousewheel.enabled = !1), !0;
            },
        };
        const Navigation = {
            update() {
                const swiper = this,
                    params = swiper.params.navigation;
                if (swiper.params.loop) return;
                const { $nextEl: $nextEl, $prevEl: $prevEl } = swiper.navigation;
                $prevEl &&
                    $prevEl.length > 0 &&
                    (swiper.isBeginning ? $prevEl.addClass(params.disabledClass) : $prevEl.removeClass(params.disabledClass), $prevEl[swiper.params.watchOverflow && swiper.isLocked ? "addClass" : "removeClass"](params.lockClass)),
                    $nextEl &&
                        $nextEl.length > 0 &&
                        (swiper.isEnd ? $nextEl.addClass(params.disabledClass) : $nextEl.removeClass(params.disabledClass), $nextEl[swiper.params.watchOverflow && swiper.isLocked ? "addClass" : "removeClass"](params.lockClass));
            },
            onPrevClick(e) {
                e.preventDefault(), (this.isBeginning && !this.params.loop) || this.slidePrev();
            },
            onNextClick(e) {
                e.preventDefault(), (this.isEnd && !this.params.loop) || this.slideNext();
            },
            init() {
                const swiper = this,
                    params = swiper.params.navigation;
                if (!params.nextEl && !params.prevEl) return;
                let $nextEl, $prevEl;
                params.nextEl &&
                    (($nextEl = $(params.nextEl)), swiper.params.uniqueNavElements && "string" == typeof params.nextEl && $nextEl.length > 1 && 1 === swiper.$el.find(params.nextEl).length && ($nextEl = swiper.$el.find(params.nextEl))),
                    params.prevEl &&
                        (($prevEl = $(params.prevEl)), swiper.params.uniqueNavElements && "string" == typeof params.prevEl && $prevEl.length > 1 && 1 === swiper.$el.find(params.prevEl).length && ($prevEl = swiper.$el.find(params.prevEl))),
                    $nextEl && $nextEl.length > 0 && $nextEl.on("click", swiper.navigation.onNextClick),
                    $prevEl && $prevEl.length > 0 && $prevEl.on("click", swiper.navigation.onPrevClick),
                    Utils.extend(swiper.navigation, { $nextEl: $nextEl, nextEl: $nextEl && $nextEl[0], $prevEl: $prevEl, prevEl: $prevEl && $prevEl[0] });
            },
            destroy() {
                const swiper = this,
                    { $nextEl: $nextEl, $prevEl: $prevEl } = swiper.navigation;
                $nextEl && $nextEl.length && ($nextEl.off("click", swiper.navigation.onNextClick), $nextEl.removeClass(swiper.params.navigation.disabledClass)),
                    $prevEl && $prevEl.length && ($prevEl.off("click", swiper.navigation.onPrevClick), $prevEl.removeClass(swiper.params.navigation.disabledClass));
            },
        };
        const Pagination = {
            update() {
                const swiper = this,
                    rtl = swiper.rtl,
                    params = swiper.params.pagination;
                if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || 0 === swiper.pagination.$el.length) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length,
                    $el = swiper.pagination.$el;
                let current;
                const total = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (
                    (swiper.params.loop
                        ? ((current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup)),
                          current > slidesLength - 1 - 2 * swiper.loopedSlides && (current -= slidesLength - 2 * swiper.loopedSlides),
                          current > total - 1 && (current -= total),
                          current < 0 && "bullets" !== swiper.params.paginationType && (current = total + current))
                        : (current = void 0 !== swiper.snapIndex ? swiper.snapIndex : swiper.activeIndex || 0),
                    "bullets" === params.type && swiper.pagination.bullets && swiper.pagination.bullets.length > 0)
                ) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex, lastIndex, midIndex;
                    if (
                        (params.dynamicBullets &&
                            ((swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                            $el.css(swiper.isHorizontal() ? "width" : "height", swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px"),
                            params.dynamicMainBullets > 1 &&
                                void 0 !== swiper.previousIndex &&
                                ((swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex),
                                swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1
                                    ? (swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1)
                                    : swiper.pagination.dynamicBulletIndex < 0 && (swiper.pagination.dynamicBulletIndex = 0)),
                            (firstIndex = current - swiper.pagination.dynamicBulletIndex),
                            (lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1)),
                            (midIndex = (lastIndex + firstIndex) / 2)),
                        bullets.removeClass(
                            `${params.bulletActiveClass} ${params.bulletActiveClass}-next ${params.bulletActiveClass}-next-next ${params.bulletActiveClass}-prev ${params.bulletActiveClass}-prev-prev ${params.bulletActiveClass}-main`
                        ),
                        $el.length > 1)
                    )
                        bullets.each((index, bullet) => {
                            const $bullet = $(bullet),
                                bulletIndex = $bullet.index();
                            bulletIndex === current && $bullet.addClass(params.bulletActiveClass),
                                params.dynamicBullets &&
                                    (bulletIndex >= firstIndex && bulletIndex <= lastIndex && $bullet.addClass(params.bulletActiveClass + "-main"),
                                    bulletIndex === firstIndex &&
                                        $bullet
                                            .prev()
                                            .addClass(params.bulletActiveClass + "-prev")
                                            .prev()
                                            .addClass(params.bulletActiveClass + "-prev-prev"),
                                    bulletIndex === lastIndex &&
                                        $bullet
                                            .next()
                                            .addClass(params.bulletActiveClass + "-next")
                                            .next()
                                            .addClass(params.bulletActiveClass + "-next-next"));
                        });
                    else {
                        const $bullet = bullets.eq(current),
                            bulletIndex = $bullet.index();
                        if (($bullet.addClass(params.bulletActiveClass), params.dynamicBullets)) {
                            const $firstDisplayedBullet = bullets.eq(firstIndex),
                                $lastDisplayedBullet = bullets.eq(lastIndex);
                            for (let i = firstIndex; i <= lastIndex; i += 1) bullets.eq(i).addClass(params.bulletActiveClass + "-main");
                            if (swiper.params.loop)
                                if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                                    for (let i = params.dynamicMainBullets; i >= 0; i -= 1) bullets.eq(bullets.length - i).addClass(params.bulletActiveClass + "-main");
                                    bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
                                } else
                                    $firstDisplayedBullet
                                        .prev()
                                        .addClass(params.bulletActiveClass + "-prev")
                                        .prev()
                                        .addClass(params.bulletActiveClass + "-prev-prev"),
                                        $lastDisplayedBullet
                                            .next()
                                            .addClass(params.bulletActiveClass + "-next")
                                            .next()
                                            .addClass(params.bulletActiveClass + "-next-next");
                            else
                                $firstDisplayedBullet
                                    .prev()
                                    .addClass(params.bulletActiveClass + "-prev")
                                    .prev()
                                    .addClass(params.bulletActiveClass + "-prev-prev"),
                                    $lastDisplayedBullet
                                        .next()
                                        .addClass(params.bulletActiveClass + "-next")
                                        .next()
                                        .addClass(params.bulletActiveClass + "-next-next");
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4),
                            bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize,
                            offsetProp = rtl ? "right" : "left";
                        bullets.css(swiper.isHorizontal() ? offsetProp : "top", bulletsOffset + "px");
                    }
                }
                if (
                    ("fraction" === params.type && ($el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1)), $el.find("." + params.totalClass).text(params.formatFractionTotal(total))),
                    "progressbar" === params.type)
                ) {
                    let progressbarDirection;
                    progressbarDirection = params.progressbarOpposite ? (swiper.isHorizontal() ? "vertical" : "horizontal") : swiper.isHorizontal() ? "horizontal" : "vertical";
                    const scale = (current + 1) / total;
                    let scaleX = 1,
                        scaleY = 1;
                    "horizontal" === progressbarDirection ? (scaleX = scale) : (scaleY = scale),
                        $el
                            .find("." + params.progressbarFillClass)
                            .transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`)
                            .transition(swiper.params.speed);
                }
                "custom" === params.type && params.renderCustom ? ($el.html(params.renderCustom(swiper, current + 1, total)), swiper.emit("paginationRender", swiper, $el[0])) : swiper.emit("paginationUpdate", swiper, $el[0]),
                    $el[swiper.params.watchOverflow && swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
            },
            render() {
                const swiper = this,
                    params = swiper.params.pagination;
                if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || 0 === swiper.pagination.$el.length) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length,
                    $el = swiper.pagination.$el;
                let paginationHTML = "";
                if ("bullets" === params.type) {
                    const numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    for (let i = 0; i < numberOfBullets; i += 1)
                        params.renderBullet ? (paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass)) : (paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`);
                    $el.html(paginationHTML), (swiper.pagination.bullets = $el.find("." + params.bulletClass));
                }
                "fraction" === params.type &&
                    ((paginationHTML = params.renderFraction ? params.renderFraction.call(swiper, params.currentClass, params.totalClass) : `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`),
                    $el.html(paginationHTML)),
                    "progressbar" === params.type &&
                        ((paginationHTML = params.renderProgressbar ? params.renderProgressbar.call(swiper, params.progressbarFillClass) : `<span class="${params.progressbarFillClass}"></span>`), $el.html(paginationHTML)),
                    "custom" !== params.type && swiper.emit("paginationRender", swiper.pagination.$el[0]);
            },
            init() {
                const swiper = this,
                    params = swiper.params.pagination;
                if (!params.el) return;
                let $el = $(params.el);
                0 !== $el.length &&
                    (swiper.params.uniqueNavElements && "string" == typeof params.el && $el.length > 1 && 1 === swiper.$el.find(params.el).length && ($el = swiper.$el.find(params.el)),
                    "bullets" === params.type && params.clickable && $el.addClass(params.clickableClass),
                    $el.addClass(params.modifierClass + params.type),
                    "bullets" === params.type &&
                        params.dynamicBullets &&
                        ($el.addClass(`${params.modifierClass}${params.type}-dynamic`), (swiper.pagination.dynamicBulletIndex = 0), params.dynamicMainBullets < 1 && (params.dynamicMainBullets = 1)),
                    "progressbar" === params.type && params.progressbarOpposite && $el.addClass(params.progressbarOppositeClass),
                    params.clickable &&
                        $el.on("click", "." + params.bulletClass, function (e) {
                            e.preventDefault();
                            let index = $(this).index() * swiper.params.slidesPerGroup;
                            swiper.params.loop && (index += swiper.loopedSlides), swiper.slideTo(index);
                        }),
                    Utils.extend(swiper.pagination, { $el: $el, el: $el[0] }));
            },
            destroy() {
                const params = this.params.pagination;
                if (!params.el || !this.pagination.el || !this.pagination.$el || 0 === this.pagination.$el.length) return;
                const $el = this.pagination.$el;
                $el.removeClass(params.hiddenClass),
                    $el.removeClass(params.modifierClass + params.type),
                    this.pagination.bullets && this.pagination.bullets.removeClass(params.bulletActiveClass),
                    params.clickable && $el.off("click", "." + params.bulletClass);
            },
        };
        const Scrollbar = {
            setTranslate() {
                const swiper = this;
                if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
                const { scrollbar: scrollbar, rtlTranslate: rtl, progress: progress } = swiper,
                    { dragSize: dragSize, trackSize: trackSize, $dragEl: $dragEl, $el: $el } = scrollbar,
                    params = swiper.params.scrollbar;
                let newSize = dragSize,
                    newPos = (trackSize - dragSize) * progress;
                rtl
                    ? ((newPos = -newPos), newPos > 0 ? ((newSize = dragSize - newPos), (newPos = 0)) : -newPos + dragSize > trackSize && (newSize = trackSize + newPos))
                    : newPos < 0
                    ? ((newSize = dragSize + newPos), (newPos = 0))
                    : newPos + dragSize > trackSize && (newSize = trackSize - newPos),
                    swiper.isHorizontal()
                        ? ($dragEl.transform(`translate3d(${newPos}px, 0, 0)`), ($dragEl[0].style.width = newSize + "px"))
                        : ($dragEl.transform(`translate3d(0px, ${newPos}px, 0)`), ($dragEl[0].style.height = newSize + "px")),
                    params.hide &&
                        (clearTimeout(swiper.scrollbar.timeout),
                        ($el[0].style.opacity = 1),
                        (swiper.scrollbar.timeout = setTimeout(() => {
                            ($el[0].style.opacity = 0), $el.transition(400);
                        }, 1e3)));
            },
            setTransition(duration) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(duration);
            },
            updateSize() {
                const swiper = this;
                if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
                const { scrollbar: scrollbar } = swiper,
                    { $dragEl: $dragEl, $el: $el } = scrollbar;
                ($dragEl[0].style.width = ""), ($dragEl[0].style.height = "");
                const trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight,
                    divider = swiper.size / swiper.virtualSize,
                    moveDivider = divider * (trackSize / swiper.size);
                let dragSize;
                (dragSize = "auto" === swiper.params.scrollbar.dragSize ? trackSize * divider : parseInt(swiper.params.scrollbar.dragSize, 10)),
                    swiper.isHorizontal() ? ($dragEl[0].style.width = dragSize + "px") : ($dragEl[0].style.height = dragSize + "px"),
                    ($el[0].style.display = divider >= 1 ? "none" : ""),
                    swiper.params.scrollbar.hide && ($el[0].style.opacity = 0),
                    Utils.extend(scrollbar, { trackSize: trackSize, divider: divider, moveDivider: moveDivider, dragSize: dragSize }),
                    scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? "addClass" : "removeClass"](swiper.params.scrollbar.lockClass);
            },
            getPointerPosition(e) {
                return this.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX) : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
            },
            setDragPosition(e) {
                const { scrollbar: scrollbar, rtlTranslate: rtl } = this,
                    { $el: $el, dragSize: dragSize, trackSize: trackSize, dragStartPos: dragStartPos } = scrollbar;
                let positionRatio;
                (positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[this.isHorizontal() ? "left" : "top"] - (null !== dragStartPos ? dragStartPos : dragSize / 2)) / (trackSize - dragSize)),
                    (positionRatio = Math.max(Math.min(positionRatio, 1), 0)),
                    rtl && (positionRatio = 1 - positionRatio);
                const position = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * positionRatio;
                this.updateProgress(position), this.setTranslate(position), this.updateActiveIndex(), this.updateSlidesClasses();
            },
            onDragStart(e) {
                const swiper = this,
                    params = swiper.params.scrollbar,
                    { scrollbar: scrollbar, $wrapperEl: $wrapperEl } = swiper,
                    { $el: $el, $dragEl: $dragEl } = scrollbar;
                (swiper.scrollbar.isTouched = !0),
                    (swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null),
                    e.preventDefault(),
                    e.stopPropagation(),
                    $wrapperEl.transition(100),
                    $dragEl.transition(100),
                    scrollbar.setDragPosition(e),
                    clearTimeout(swiper.scrollbar.dragTimeout),
                    $el.transition(0),
                    params.hide && $el.css("opacity", 1),
                    swiper.params.cssMode && swiper.$wrapperEl.css("scroll-snap-type", "none"),
                    swiper.emit("scrollbarDragStart", e);
            },
            onDragMove(e) {
                const { scrollbar: scrollbar, $wrapperEl: $wrapperEl } = this,
                    { $el: $el, $dragEl: $dragEl } = scrollbar;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), scrollbar.setDragPosition(e), $wrapperEl.transition(0), $el.transition(0), $dragEl.transition(0), this.emit("scrollbarDragMove", e));
            },
            onDragEnd(e) {
                const swiper = this,
                    params = swiper.params.scrollbar,
                    { scrollbar: scrollbar, $wrapperEl: $wrapperEl } = swiper,
                    { $el: $el } = scrollbar;
                swiper.scrollbar.isTouched &&
                    ((swiper.scrollbar.isTouched = !1),
                    swiper.params.cssMode && (swiper.$wrapperEl.css("scroll-snap-type", ""), $wrapperEl.transition("")),
                    params.hide &&
                        (clearTimeout(swiper.scrollbar.dragTimeout),
                        (swiper.scrollbar.dragTimeout = Utils.nextTick(() => {
                            $el.css("opacity", 0), $el.transition(400);
                        }, 1e3))),
                    swiper.emit("scrollbarDragEnd", e),
                    params.snapOnRelease && swiper.slideToClosest());
            },
            enableDraggable() {
                const swiper = this;
                if (!swiper.params.scrollbar.el) return;
                const { scrollbar: scrollbar, touchEventsTouch: touchEventsTouch, touchEventsDesktop: touchEventsDesktop, params: params } = swiper,
                    target = scrollbar.$el[0],
                    activeListener = !(!swiper_esm_bundle_Support.passiveListener || !params.passiveListeners) && { passive: !1, capture: !1 },
                    passiveListener = !(!swiper_esm_bundle_Support.passiveListener || !params.passiveListeners) && { passive: !0, capture: !1 };
                swiper_esm_bundle_Support.touch
                    ? (target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener),
                      target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener),
                      target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener))
                    : (target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener),
                      ssr_window_esm_doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener),
                      ssr_window_esm_doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener));
            },
            disableDraggable() {
                const swiper = this;
                if (!swiper.params.scrollbar.el) return;
                const { scrollbar: scrollbar, touchEventsTouch: touchEventsTouch, touchEventsDesktop: touchEventsDesktop, params: params } = swiper,
                    target = scrollbar.$el[0],
                    activeListener = !(!swiper_esm_bundle_Support.passiveListener || !params.passiveListeners) && { passive: !1, capture: !1 },
                    passiveListener = !(!swiper_esm_bundle_Support.passiveListener || !params.passiveListeners) && { passive: !0, capture: !1 };
                swiper_esm_bundle_Support.touch
                    ? (target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener),
                      target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener),
                      target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener))
                    : (target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener),
                      ssr_window_esm_doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener),
                      ssr_window_esm_doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener));
            },
            init() {
                const swiper = this;
                if (!swiper.params.scrollbar.el) return;
                const { scrollbar: scrollbar, $el: $swiperEl } = swiper,
                    params = swiper.params.scrollbar;
                let $el = $(params.el);
                swiper.params.uniqueNavElements && "string" == typeof params.el && $el.length > 1 && 1 === $swiperEl.find(params.el).length && ($el = $swiperEl.find(params.el));
                let $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);
                0 === $dragEl.length && (($dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`)), $el.append($dragEl)),
                    Utils.extend(scrollbar, { $el: $el, el: $el[0], $dragEl: $dragEl, dragEl: $dragEl[0] }),
                    params.draggable && scrollbar.enableDraggable();
            },
            destroy() {
                this.scrollbar.disableDraggable();
            },
        };
        const Parallax = {
            setTransform(el, progress) {
                const { rtl: rtl } = this,
                    $el = $(el),
                    rtlFactor = rtl ? -1 : 1,
                    p = $el.attr("data-swiper-parallax") || "0";
                let x = $el.attr("data-swiper-parallax-x"),
                    y = $el.attr("data-swiper-parallax-y");
                const scale = $el.attr("data-swiper-parallax-scale"),
                    opacity = $el.attr("data-swiper-parallax-opacity");
                if (
                    (x || y ? ((x = x || "0"), (y = y || "0")) : this.isHorizontal() ? ((x = p), (y = "0")) : ((y = p), (x = "0")),
                    (x = x.indexOf("%") >= 0 ? parseInt(x, 10) * progress * rtlFactor + "%" : x * progress * rtlFactor + "px"),
                    (y = y.indexOf("%") >= 0 ? parseInt(y, 10) * progress + "%" : y * progress + "px"),
                    null != opacity)
                ) {
                    const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
                    $el[0].style.opacity = currentOpacity;
                }
                if (null == scale) $el.transform(`translate3d(${x}, ${y}, 0px)`);
                else {
                    const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
                    $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
                }
            },
            setTranslate() {
                const swiper = this,
                    { $el: $el, slides: slides, progress: progress, snapGrid: snapGrid } = swiper;
                $el.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((index, el) => {
                    swiper.parallax.setTransform(el, progress);
                }),
                    slides.each((slideIndex, slideEl) => {
                        let slideProgress = slideEl.progress;
                        swiper.params.slidesPerGroup > 1 && "auto" !== swiper.params.slidesPerView && (slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1)),
                            (slideProgress = Math.min(Math.max(slideProgress, -1), 1)),
                            $(slideEl)
                                .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]")
                                .each((index, el) => {
                                    swiper.parallax.setTransform(el, slideProgress);
                                });
                    });
            },
            setTransition(duration = this.params.speed) {
                const { $el: $el } = this;
                $el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((index, parallaxEl) => {
                    const $parallaxEl = $(parallaxEl);
                    let parallaxDuration = parseInt($parallaxEl.attr("data-swiper-parallax-duration"), 10) || duration;
                    0 === duration && (parallaxDuration = 0), $parallaxEl.transition(parallaxDuration);
                });
            },
        };
        const Zoom = {
            getDistanceBetweenTouches(e) {
                if (e.targetTouches.length < 2) return 1;
                const x1 = e.targetTouches[0].pageX,
                    y1 = e.targetTouches[0].pageY,
                    x2 = e.targetTouches[1].pageX,
                    y2 = e.targetTouches[1].pageY;
                return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
            },
            onGestureStart(e) {
                const swiper = this,
                    params = swiper.params.zoom,
                    zoom = swiper.zoom,
                    { gesture: gesture } = zoom;
                if (((zoom.fakeGestureTouched = !1), (zoom.fakeGestureMoved = !1), !swiper_esm_bundle_Support.gestures)) {
                    if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
                    (zoom.fakeGestureTouched = !0), (gesture.scaleStart = Zoom.getDistanceBetweenTouches(e));
                }
                (gesture.$slideEl && gesture.$slideEl.length) ||
                ((gesture.$slideEl = $(e.target).closest("." + swiper.params.slideClass)),
                0 === gesture.$slideEl.length && (gesture.$slideEl = swiper.slides.eq(swiper.activeIndex)),
                (gesture.$imageEl = gesture.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                (gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass)),
                (gesture.maxRatio = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio),
                0 !== gesture.$imageWrapEl.length)
                    ? (gesture.$imageEl.transition(0), (swiper.zoom.isScaling = !0))
                    : (gesture.$imageEl = void 0);
            },
            onGestureChange(e) {
                const params = this.params.zoom,
                    zoom = this.zoom,
                    { gesture: gesture } = zoom;
                if (!swiper_esm_bundle_Support.gestures) {
                    if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                    (zoom.fakeGestureMoved = !0), (gesture.scaleMove = Zoom.getDistanceBetweenTouches(e));
                }
                gesture.$imageEl &&
                    0 !== gesture.$imageEl.length &&
                    ((zoom.scale = swiper_esm_bundle_Support.gestures ? e.scale * zoom.currentScale : (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale),
                    zoom.scale > gesture.maxRatio && (zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5),
                    zoom.scale < params.minRatio && (zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5),
                    gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`));
            },
            onGestureEnd(e) {
                const params = this.params.zoom,
                    zoom = this.zoom,
                    { gesture: gesture } = zoom;
                if (!swiper_esm_bundle_Support.gestures) {
                    if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) return;
                    if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !swiper_esm_bundle_Device.android)) return;
                    (zoom.fakeGestureTouched = !1), (zoom.fakeGestureMoved = !1);
                }
                gesture.$imageEl &&
                    0 !== gesture.$imageEl.length &&
                    ((zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio)),
                    gesture.$imageEl.transition(this.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`),
                    (zoom.currentScale = zoom.scale),
                    (zoom.isScaling = !1),
                    1 === zoom.scale && (gesture.$slideEl = void 0));
            },
            onTouchStart(e) {
                const zoom = this.zoom,
                    { gesture: gesture, image: image } = zoom;
                gesture.$imageEl &&
                    0 !== gesture.$imageEl.length &&
                    (image.isTouched ||
                        (swiper_esm_bundle_Device.android && e.preventDefault(),
                        (image.isTouched = !0),
                        (image.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                        (image.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
            },
            onTouchMove(e) {
                const swiper = this,
                    zoom = swiper.zoom,
                    { gesture: gesture, image: image, velocity: velocity } = zoom;
                if (!gesture.$imageEl || 0 === gesture.$imageEl.length) return;
                if (((swiper.allowClick = !1), !image.isTouched || !gesture.$slideEl)) return;
                image.isMoved ||
                    ((image.width = gesture.$imageEl[0].offsetWidth),
                    (image.height = gesture.$imageEl[0].offsetHeight),
                    (image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], "x") || 0),
                    (image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], "y") || 0),
                    (gesture.slideWidth = gesture.$slideEl[0].offsetWidth),
                    (gesture.slideHeight = gesture.$slideEl[0].offsetHeight),
                    gesture.$imageWrapEl.transition(0),
                    swiper.rtl && ((image.startX = -image.startX), (image.startY = -image.startY)));
                const scaledWidth = image.width * zoom.scale,
                    scaledHeight = image.height * zoom.scale;
                if (!(scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight)) {
                    if (
                        ((image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0)),
                        (image.maxX = -image.minX),
                        (image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0)),
                        (image.maxY = -image.minY),
                        (image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                        (image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                        !image.isMoved && !zoom.isScaling)
                    ) {
                        if (
                            swiper.isHorizontal() &&
                            ((Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x) || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x))
                        )
                            return void (image.isTouched = !1);
                        if (
                            !swiper.isHorizontal() &&
                            ((Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y) || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y))
                        )
                            return void (image.isTouched = !1);
                    }
                    e.preventDefault(),
                        e.stopPropagation(),
                        (image.isMoved = !0),
                        (image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX),
                        (image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY),
                        image.currentX < image.minX && (image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8),
                        image.currentX > image.maxX && (image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8),
                        image.currentY < image.minY && (image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8),
                        image.currentY > image.maxY && (image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8),
                        velocity.prevPositionX || (velocity.prevPositionX = image.touchesCurrent.x),
                        velocity.prevPositionY || (velocity.prevPositionY = image.touchesCurrent.y),
                        velocity.prevTime || (velocity.prevTime = Date.now()),
                        (velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2),
                        (velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2),
                        Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2 && (velocity.x = 0),
                        Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2 && (velocity.y = 0),
                        (velocity.prevPositionX = image.touchesCurrent.x),
                        (velocity.prevPositionY = image.touchesCurrent.y),
                        (velocity.prevTime = Date.now()),
                        gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
                }
            },
            onTouchEnd() {
                const zoom = this.zoom,
                    { gesture: gesture, image: image, velocity: velocity } = zoom;
                if (!gesture.$imageEl || 0 === gesture.$imageEl.length) return;
                if (!image.isTouched || !image.isMoved) return (image.isTouched = !1), void (image.isMoved = !1);
                (image.isTouched = !1), (image.isMoved = !1);
                let momentumDurationX = 300,
                    momentumDurationY = 300;
                const momentumDistanceX = velocity.x * momentumDurationX,
                    newPositionX = image.currentX + momentumDistanceX,
                    momentumDistanceY = velocity.y * momentumDurationY,
                    newPositionY = image.currentY + momentumDistanceY;
                0 !== velocity.x && (momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x)), 0 !== velocity.y && (momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y));
                const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
                (image.currentX = newPositionX), (image.currentY = newPositionY);
                const scaledWidth = image.width * zoom.scale,
                    scaledHeight = image.height * zoom.scale;
                (image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0)),
                    (image.maxX = -image.minX),
                    (image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0)),
                    (image.maxY = -image.minY),
                    (image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX)),
                    (image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY)),
                    gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
            },
            onTransitionEnd() {
                const zoom = this.zoom,
                    { gesture: gesture } = zoom;
                gesture.$slideEl &&
                    this.previousIndex !== this.activeIndex &&
                    (gesture.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                    gesture.$imageWrapEl.transform("translate3d(0,0,0)"),
                    (zoom.scale = 1),
                    (zoom.currentScale = 1),
                    (gesture.$slideEl = void 0),
                    (gesture.$imageEl = void 0),
                    (gesture.$imageWrapEl = void 0));
            },
            toggle(e) {
                const zoom = this.zoom;
                zoom.scale && 1 !== zoom.scale ? zoom.out() : zoom.in(e);
            },
            in(e) {
                const swiper = this,
                    zoom = swiper.zoom,
                    params = swiper.params.zoom,
                    { gesture: gesture, image: image } = zoom;
                if (
                    (gesture.$slideEl ||
                        ((gesture.$slideEl = swiper.slides.eq(swiper.activeIndex)),
                        (gesture.$imageEl = gesture.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                        (gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass))),
                    !gesture.$imageEl || 0 === gesture.$imageEl.length)
                )
                    return;
                let touchX, touchY, offsetX, offsetY, diffX, diffY, translateX, translateY, imageWidth, imageHeight, scaledWidth, scaledHeight, translateMinX, translateMinY, translateMaxX, translateMaxY, slideWidth, slideHeight;
                gesture.$slideEl.addClass("" + params.zoomedSlideClass),
                    void 0 === image.touchesStart.x && e
                        ? ((touchX = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX), (touchY = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
                        : ((touchX = image.touchesStart.x), (touchY = image.touchesStart.y)),
                    (zoom.scale = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio),
                    (zoom.currentScale = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio),
                    e
                        ? ((slideWidth = gesture.$slideEl[0].offsetWidth),
                          (slideHeight = gesture.$slideEl[0].offsetHeight),
                          (offsetX = gesture.$slideEl.offset().left),
                          (offsetY = gesture.$slideEl.offset().top),
                          (diffX = offsetX + slideWidth / 2 - touchX),
                          (diffY = offsetY + slideHeight / 2 - touchY),
                          (imageWidth = gesture.$imageEl[0].offsetWidth),
                          (imageHeight = gesture.$imageEl[0].offsetHeight),
                          (scaledWidth = imageWidth * zoom.scale),
                          (scaledHeight = imageHeight * zoom.scale),
                          (translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0)),
                          (translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0)),
                          (translateMaxX = -translateMinX),
                          (translateMaxY = -translateMinY),
                          (translateX = diffX * zoom.scale),
                          (translateY = diffY * zoom.scale),
                          translateX < translateMinX && (translateX = translateMinX),
                          translateX > translateMaxX && (translateX = translateMaxX),
                          translateY < translateMinY && (translateY = translateMinY),
                          translateY > translateMaxY && (translateY = translateMaxY))
                        : ((translateX = 0), (translateY = 0)),
                    gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`),
                    gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
            },
            out() {
                const swiper = this,
                    zoom = swiper.zoom,
                    params = swiper.params.zoom,
                    { gesture: gesture } = zoom;
                gesture.$slideEl ||
                    ((gesture.$slideEl = swiper.slides.eq(swiper.activeIndex)),
                    (gesture.$imageEl = gesture.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                    (gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass))),
                    gesture.$imageEl &&
                        0 !== gesture.$imageEl.length &&
                        ((zoom.scale = 1),
                        (zoom.currentScale = 1),
                        gesture.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                        gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                        gesture.$slideEl.removeClass("" + params.zoomedSlideClass),
                        (gesture.$slideEl = void 0));
            },
            enable() {
                const swiper = this,
                    zoom = swiper.zoom;
                if (zoom.enabled) return;
                zoom.enabled = !0;
                const passiveListener = !("touchstart" !== swiper.touchEvents.start || !swiper_esm_bundle_Support.passiveListener || !swiper.params.passiveListeners) && { passive: !0, capture: !1 },
                    activeListenerWithCapture = !swiper_esm_bundle_Support.passiveListener || { passive: !1, capture: !0 },
                    slideSelector = "." + swiper.params.slideClass;
                swiper_esm_bundle_Support.gestures
                    ? (swiper.$wrapperEl.on("gesturestart", slideSelector, zoom.onGestureStart, passiveListener),
                      swiper.$wrapperEl.on("gesturechange", slideSelector, zoom.onGestureChange, passiveListener),
                      swiper.$wrapperEl.on("gestureend", slideSelector, zoom.onGestureEnd, passiveListener))
                    : "touchstart" === swiper.touchEvents.start &&
                      (swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener),
                      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture),
                      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener),
                      swiper.touchEvents.cancel && swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener)),
                    swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
            },
            disable() {
                const swiper = this,
                    zoom = swiper.zoom;
                if (!zoom.enabled) return;
                swiper.zoom.enabled = !1;
                const passiveListener = !("touchstart" !== swiper.touchEvents.start || !swiper_esm_bundle_Support.passiveListener || !swiper.params.passiveListeners) && { passive: !0, capture: !1 },
                    activeListenerWithCapture = !swiper_esm_bundle_Support.passiveListener || { passive: !1, capture: !0 },
                    slideSelector = "." + swiper.params.slideClass;
                swiper_esm_bundle_Support.gestures
                    ? (swiper.$wrapperEl.off("gesturestart", slideSelector, zoom.onGestureStart, passiveListener),
                      swiper.$wrapperEl.off("gesturechange", slideSelector, zoom.onGestureChange, passiveListener),
                      swiper.$wrapperEl.off("gestureend", slideSelector, zoom.onGestureEnd, passiveListener))
                    : "touchstart" === swiper.touchEvents.start &&
                      (swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener),
                      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture),
                      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener),
                      swiper.touchEvents.cancel && swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener)),
                    swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
            },
        };
        const Lazy = {
            loadInSlide(index, loadInDuplicate = !0) {
                const swiper = this,
                    params = swiper.params.lazy;
                if (void 0 === index) return;
                if (0 === swiper.slides.length) return;
                const $slideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
                let $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
                !$slideEl.hasClass(params.elementClass) || $slideEl.hasClass(params.loadedClass) || $slideEl.hasClass(params.loadingClass) || ($images = $images.add($slideEl[0])),
                    0 !== $images.length &&
                        $images.each((imageIndex, imageEl) => {
                            const $imageEl = $(imageEl);
                            $imageEl.addClass(params.loadingClass);
                            const background = $imageEl.attr("data-background"),
                                src = $imageEl.attr("data-src"),
                                srcset = $imageEl.attr("data-srcset"),
                                sizes = $imageEl.attr("data-sizes");
                            swiper.loadImage($imageEl[0], src || background, srcset, sizes, !1, () => {
                                if (null != swiper && swiper && (!swiper || swiper.params) && !swiper.destroyed) {
                                    if (
                                        (background
                                            ? ($imageEl.css("background-image", `url("${background}")`), $imageEl.removeAttr("data-background"))
                                            : (srcset && ($imageEl.attr("srcset", srcset), $imageEl.removeAttr("data-srcset")),
                                              sizes && ($imageEl.attr("sizes", sizes), $imageEl.removeAttr("data-sizes")),
                                              src && ($imageEl.attr("src", src), $imageEl.removeAttr("data-src"))),
                                        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass),
                                        $slideEl.find("." + params.preloaderClass).remove(),
                                        swiper.params.loop && loadInDuplicate)
                                    ) {
                                        const slideOriginalIndex = $slideEl.attr("data-swiper-slide-index");
                                        if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                                            const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                                            swiper.lazy.loadInSlide(originalSlide.index(), !1);
                                        } else {
                                            const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                                            swiper.lazy.loadInSlide(duplicatedSlide.index(), !1);
                                        }
                                    }
                                    swiper.emit("lazyImageReady", $slideEl[0], $imageEl[0]), swiper.params.autoHeight && swiper.updateAutoHeight();
                                }
                            }),
                                swiper.emit("lazyImageLoad", $slideEl[0], $imageEl[0]);
                        });
            },
            load() {
                const swiper = this,
                    { $wrapperEl: $wrapperEl, params: swiperParams, slides: slides, activeIndex: activeIndex } = swiper,
                    isVirtual = swiper.virtual && swiperParams.virtual.enabled,
                    params = swiperParams.lazy;
                let slidesPerView = swiperParams.slidesPerView;
                function slideExist(index) {
                    if (isVirtual) {
                        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) return !0;
                    } else if (slides[index]) return !0;
                    return !1;
                }
                function slideIndex(slideEl) {
                    return isVirtual ? $(slideEl).attr("data-swiper-slide-index") : $(slideEl).index();
                }
                if (("auto" === slidesPerView && (slidesPerView = 0), swiper.lazy.initialImageLoaded || (swiper.lazy.initialImageLoaded = !0), swiper.params.watchSlidesVisibility))
                    $wrapperEl.children("." + swiperParams.slideVisibleClass).each((elIndex, slideEl) => {
                        const index = isVirtual ? $(slideEl).attr("data-swiper-slide-index") : $(slideEl).index();
                        swiper.lazy.loadInSlide(index);
                    });
                else if (slidesPerView > 1) for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) slideExist(i) && swiper.lazy.loadInSlide(i);
                else swiper.lazy.loadInSlide(activeIndex);
                if (params.loadPrevNext)
                    if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
                        const amount = params.loadPrevNextAmount,
                            spv = slidesPerView,
                            maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length),
                            minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
                        for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) slideExist(i) && swiper.lazy.loadInSlide(i);
                        for (let i = minIndex; i < activeIndex; i += 1) slideExist(i) && swiper.lazy.loadInSlide(i);
                    } else {
                        const nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
                        nextSlide.length > 0 && swiper.lazy.loadInSlide(slideIndex(nextSlide));
                        const prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
                        prevSlide.length > 0 && swiper.lazy.loadInSlide(slideIndex(prevSlide));
                    }
            },
        };
        const Controller = {
            LinearSpline: function (x, y) {
                const binarySearch = (function () {
                    let maxIndex, minIndex, guess;
                    return (array, val) => {
                        for (minIndex = -1, maxIndex = array.length; maxIndex - minIndex > 1; ) (guess = (maxIndex + minIndex) >> 1), array[guess] <= val ? (minIndex = guess) : (maxIndex = guess);
                        return maxIndex;
                    };
                })();
                let i1, i3;
                return (
                    (this.x = x),
                    (this.y = y),
                    (this.lastIndex = x.length - 1),
                    (this.interpolate = function (x2) {
                        return x2 ? ((i3 = binarySearch(this.x, x2)), (i1 = i3 - 1), ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1]) : 0;
                    }),
                    this
                );
            },
            getInterpolateFunction(c) {
                const swiper = this;
                swiper.controller.spline || (swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid));
            },
            setTranslate(setTranslate, byController) {
                const swiper = this,
                    controlled = swiper.controller.control;
                let multiplier, controlledTranslate;
                function setControlledTranslate(c) {
                    const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
                    "slide" === swiper.params.controller.by && (swiper.controller.getInterpolateFunction(c), (controlledTranslate = -swiper.controller.spline.interpolate(-translate))),
                        (controlledTranslate && "container" !== swiper.params.controller.by) ||
                            ((multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate())), (controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate())),
                        swiper.params.controller.inverse && (controlledTranslate = c.maxTranslate() - controlledTranslate),
                        c.updateProgress(controlledTranslate),
                        c.setTranslate(controlledTranslate, swiper),
                        c.updateActiveIndex(),
                        c.updateSlidesClasses();
                }
                if (Array.isArray(controlled)) for (let i = 0; i < controlled.length; i += 1) controlled[i] !== byController && controlled[i] instanceof swiper_esm_bundle_Swiper && setControlledTranslate(controlled[i]);
                else controlled instanceof swiper_esm_bundle_Swiper && byController !== controlled && setControlledTranslate(controlled);
            },
            setTransition(duration, byController) {
                const swiper = this,
                    controlled = swiper.controller.control;
                let i;
                function setControlledTransition(c) {
                    c.setTransition(duration, swiper),
                        0 !== duration &&
                            (c.transitionStart(),
                            c.params.autoHeight &&
                                Utils.nextTick(() => {
                                    c.updateAutoHeight();
                                }),
                            c.$wrapperEl.transitionEnd(() => {
                                controlled && (c.params.loop && "slide" === swiper.params.controller.by && c.loopFix(), c.transitionEnd());
                            }));
                }
                if (Array.isArray(controlled)) for (i = 0; i < controlled.length; i += 1) controlled[i] !== byController && controlled[i] instanceof swiper_esm_bundle_Swiper && setControlledTransition(controlled[i]);
                else controlled instanceof swiper_esm_bundle_Swiper && byController !== controlled && setControlledTransition(controlled);
            },
        };
        const a11y = {
            makeElFocusable: ($el) => ($el.attr("tabIndex", "0"), $el),
            addElRole: ($el, role) => ($el.attr("role", role), $el),
            addElLabel: ($el, label) => ($el.attr("aria-label", label), $el),
            disableEl: ($el) => ($el.attr("aria-disabled", !0), $el),
            enableEl: ($el) => ($el.attr("aria-disabled", !1), $el),
            onEnterKey(e) {
                const swiper = this,
                    params = swiper.params.a11y;
                if (13 !== e.keyCode) return;
                const $targetEl = $(e.target);
                swiper.navigation &&
                    swiper.navigation.$nextEl &&
                    $targetEl.is(swiper.navigation.$nextEl) &&
                    ((swiper.isEnd && !swiper.params.loop) || swiper.slideNext(), swiper.isEnd ? swiper.a11y.notify(params.lastSlideMessage) : swiper.a11y.notify(params.nextSlideMessage)),
                    swiper.navigation &&
                        swiper.navigation.$prevEl &&
                        $targetEl.is(swiper.navigation.$prevEl) &&
                        ((swiper.isBeginning && !swiper.params.loop) || swiper.slidePrev(), swiper.isBeginning ? swiper.a11y.notify(params.firstSlideMessage) : swiper.a11y.notify(params.prevSlideMessage)),
                    swiper.pagination && $targetEl.is("." + swiper.params.pagination.bulletClass) && $targetEl[0].click();
            },
            notify(message) {
                const notification = this.a11y.liveRegion;
                0 !== notification.length && (notification.html(""), notification.html(message));
            },
            updateNavigation() {
                const swiper = this;
                if (swiper.params.loop || !swiper.navigation) return;
                const { $nextEl: $nextEl, $prevEl: $prevEl } = swiper.navigation;
                $prevEl && $prevEl.length > 0 && (swiper.isBeginning ? swiper.a11y.disableEl($prevEl) : swiper.a11y.enableEl($prevEl)),
                    $nextEl && $nextEl.length > 0 && (swiper.isEnd ? swiper.a11y.disableEl($nextEl) : swiper.a11y.enableEl($nextEl));
            },
            updatePagination() {
                const swiper = this,
                    params = swiper.params.a11y;
                swiper.pagination &&
                    swiper.params.pagination.clickable &&
                    swiper.pagination.bullets &&
                    swiper.pagination.bullets.length &&
                    swiper.pagination.bullets.each((bulletIndex, bulletEl) => {
                        const $bulletEl = $(bulletEl);
                        swiper.a11y.makeElFocusable($bulletEl), swiper.a11y.addElRole($bulletEl, "button"), swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
                    });
            },
            init() {
                const swiper = this;
                swiper.$el.append(swiper.a11y.liveRegion);
                const params = swiper.params.a11y;
                let $nextEl, $prevEl;
                swiper.navigation && swiper.navigation.$nextEl && ($nextEl = swiper.navigation.$nextEl),
                    swiper.navigation && swiper.navigation.$prevEl && ($prevEl = swiper.navigation.$prevEl),
                    $nextEl && (swiper.a11y.makeElFocusable($nextEl), swiper.a11y.addElRole($nextEl, "button"), swiper.a11y.addElLabel($nextEl, params.nextSlideMessage), $nextEl.on("keydown", swiper.a11y.onEnterKey)),
                    $prevEl && (swiper.a11y.makeElFocusable($prevEl), swiper.a11y.addElRole($prevEl, "button"), swiper.a11y.addElLabel($prevEl, params.prevSlideMessage), $prevEl.on("keydown", swiper.a11y.onEnterKey)),
                    swiper.pagination &&
                        swiper.params.pagination.clickable &&
                        swiper.pagination.bullets &&
                        swiper.pagination.bullets.length &&
                        swiper.pagination.$el.on("keydown", "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
            },
            destroy() {
                const swiper = this;
                let $nextEl, $prevEl;
                swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0 && swiper.a11y.liveRegion.remove(),
                    swiper.navigation && swiper.navigation.$nextEl && ($nextEl = swiper.navigation.$nextEl),
                    swiper.navigation && swiper.navigation.$prevEl && ($prevEl = swiper.navigation.$prevEl),
                    $nextEl && $nextEl.off("keydown", swiper.a11y.onEnterKey),
                    $prevEl && $prevEl.off("keydown", swiper.a11y.onEnterKey),
                    swiper.pagination &&
                        swiper.params.pagination.clickable &&
                        swiper.pagination.bullets &&
                        swiper.pagination.bullets.length &&
                        swiper.pagination.$el.off("keydown", "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
            },
        };
        const History = {
            init() {
                const swiper = this;
                if (!swiper.params.history) return;
                if (!ssr_window_esm_win.history || !ssr_window_esm_win.history.pushState) return (swiper.params.history.enabled = !1), void (swiper.params.hashNavigation.enabled = !0);
                const history = swiper.history;
                (history.initialized = !0),
                    (history.paths = History.getPathValues()),
                    (history.paths.key || history.paths.value) &&
                        (history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit), swiper.params.history.replaceState || ssr_window_esm_win.addEventListener("popstate", swiper.history.setHistoryPopState));
            },
            destroy() {
                const swiper = this;
                swiper.params.history.replaceState || ssr_window_esm_win.removeEventListener("popstate", swiper.history.setHistoryPopState);
            },
            setHistoryPopState() {
                (this.history.paths = History.getPathValues()), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
            },
            getPathValues() {
                const pathArray = ssr_window_esm_win.location.pathname
                        .slice(1)
                        .split("/")
                        .filter((part) => "" !== part),
                    total = pathArray.length;
                return { key: pathArray[total - 2], value: pathArray[total - 1] };
            },
            setHistory(key, index) {
                if (!this.history.initialized || !this.params.history.enabled) return;
                const slide = this.slides.eq(index);
                let value = History.slugify(slide.attr("data-history"));
                ssr_window_esm_win.location.pathname.includes(key) || (value = `${key}/${value}`);
                const currentState = ssr_window_esm_win.history.state;
                (currentState && currentState.value === value) ||
                    (this.params.history.replaceState ? ssr_window_esm_win.history.replaceState({ value: value }, null, value) : ssr_window_esm_win.history.pushState({ value: value }, null, value));
            },
            slugify: (text) =>
                text
                    .toString()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]+/g, "")
                    .replace(/--+/g, "-")
                    .replace(/^-+/, "")
                    .replace(/-+$/, ""),
            scrollToSlide(speed, value, runCallbacks) {
                const swiper = this;
                if (value)
                    for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                        const slide = swiper.slides.eq(i);
                        if (History.slugify(slide.attr("data-history")) === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                            const index = slide.index();
                            swiper.slideTo(index, speed, runCallbacks);
                        }
                    }
                else swiper.slideTo(0, speed, runCallbacks);
            },
        };
        const HashNavigation = {
            onHashCange() {
                const swiper = this,
                    newHash = ssr_window_esm_doc.location.hash.replace("#", "");
                if (newHash !== swiper.slides.eq(swiper.activeIndex).attr("data-hash")) {
                    const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
                    if (void 0 === newIndex) return;
                    swiper.slideTo(newIndex);
                }
            },
            setHash() {
                const swiper = this;
                if (swiper.hashNavigation.initialized && swiper.params.hashNavigation.enabled)
                    if (swiper.params.hashNavigation.replaceState && ssr_window_esm_win.history && ssr_window_esm_win.history.replaceState)
                        ssr_window_esm_win.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr("data-hash") || "");
                    else {
                        const slide = swiper.slides.eq(swiper.activeIndex),
                            hash = slide.attr("data-hash") || slide.attr("data-history");
                        ssr_window_esm_doc.location.hash = hash || "";
                    }
            },
            init() {
                const swiper = this;
                if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) return;
                swiper.hashNavigation.initialized = !0;
                const hash = ssr_window_esm_doc.location.hash.replace("#", "");
                if (hash) {
                    const speed = 0;
                    for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                        const slide = swiper.slides.eq(i);
                        if ((slide.attr("data-hash") || slide.attr("data-history")) === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                            const index = slide.index();
                            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, !0);
                        }
                    }
                }
                swiper.params.hashNavigation.watchState && $(ssr_window_esm_win).on("hashchange", swiper.hashNavigation.onHashCange);
            },
            destroy() {
                const swiper = this;
                swiper.params.hashNavigation.watchState && $(ssr_window_esm_win).off("hashchange", swiper.hashNavigation.onHashCange);
            },
        };
        const Autoplay = {
            run() {
                const swiper = this,
                    $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
                let delay = swiper.params.autoplay.delay;
                $activeSlideEl.attr("data-swiper-autoplay") && (delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay),
                    clearTimeout(swiper.autoplay.timeout),
                    (swiper.autoplay.timeout = Utils.nextTick(() => {
                        swiper.params.autoplay.reverseDirection
                            ? swiper.params.loop
                                ? (swiper.loopFix(), swiper.slidePrev(swiper.params.speed, !0, !0), swiper.emit("autoplay"))
                                : swiper.isBeginning
                                ? swiper.params.autoplay.stopOnLastSlide
                                    ? swiper.autoplay.stop()
                                    : (swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, !0, !0), swiper.emit("autoplay"))
                                : (swiper.slidePrev(swiper.params.speed, !0, !0), swiper.emit("autoplay"))
                            : swiper.params.loop
                            ? (swiper.loopFix(), swiper.slideNext(swiper.params.speed, !0, !0), swiper.emit("autoplay"))
                            : swiper.isEnd
                            ? swiper.params.autoplay.stopOnLastSlide
                                ? swiper.autoplay.stop()
                                : (swiper.slideTo(0, swiper.params.speed, !0, !0), swiper.emit("autoplay"))
                            : (swiper.slideNext(swiper.params.speed, !0, !0), swiper.emit("autoplay")),
                            swiper.params.cssMode && swiper.autoplay.running && swiper.autoplay.run();
                    }, delay));
            },
            start() {
                return void 0 === this.autoplay.timeout && !this.autoplay.running && ((this.autoplay.running = !0), this.emit("autoplayStart"), this.autoplay.run(), !0);
            },
            stop() {
                const swiper = this;
                return (
                    !!swiper.autoplay.running &&
                    void 0 !== swiper.autoplay.timeout &&
                    (swiper.autoplay.timeout && (clearTimeout(swiper.autoplay.timeout), (swiper.autoplay.timeout = void 0)), (swiper.autoplay.running = !1), swiper.emit("autoplayStop"), !0)
                );
            },
            pause(speed) {
                const swiper = this;
                swiper.autoplay.running &&
                    (swiper.autoplay.paused ||
                        (swiper.autoplay.timeout && clearTimeout(swiper.autoplay.timeout),
                        (swiper.autoplay.paused = !0),
                        0 !== speed && swiper.params.autoplay.waitForTransition
                            ? (swiper.$wrapperEl[0].addEventListener("transitionend", swiper.autoplay.onTransitionEnd), swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.autoplay.onTransitionEnd))
                            : ((swiper.autoplay.paused = !1), swiper.autoplay.run())));
            },
        };
        const Fade = {
            setTranslate() {
                const swiper = this,
                    { slides: slides } = swiper;
                for (let i = 0; i < slides.length; i += 1) {
                    const $slideEl = swiper.slides.eq(i);
                    let tx = -$slideEl[0].swiperSlideOffset;
                    swiper.params.virtualTranslate || (tx -= swiper.translate);
                    let ty = 0;
                    swiper.isHorizontal() || ((ty = tx), (tx = 0));
                    const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                    $slideEl.css({ opacity: slideOpacity }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
                }
            },
            setTransition(duration) {
                const swiper = this,
                    { slides: slides, $wrapperEl: $wrapperEl } = swiper;
                if ((slides.transition(duration), swiper.params.virtualTranslate && 0 !== duration)) {
                    let eventTriggered = !1;
                    slides.transitionEnd(() => {
                        if (eventTriggered) return;
                        if (!swiper || swiper.destroyed) return;
                        (eventTriggered = !0), (swiper.animating = !1);
                        const triggerEvents = ["webkitTransitionEnd", "transitionend"];
                        for (let i = 0; i < triggerEvents.length; i += 1) $wrapperEl.trigger(triggerEvents[i]);
                    });
                }
            },
        };
        const Cube = {
            setTranslate() {
                const { $el: $el, $wrapperEl: $wrapperEl, slides: slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize } = this,
                    params = this.params.cubeEffect,
                    isHorizontal = this.isHorizontal(),
                    isVirtual = this.virtual && this.params.virtual.enabled;
                let $cubeShadowEl,
                    wrapperRotate = 0;
                params.shadow &&
                    (isHorizontal
                        ? (($cubeShadowEl = $wrapperEl.find(".swiper-cube-shadow")),
                          0 === $cubeShadowEl.length && (($cubeShadowEl = $('<div class="swiper-cube-shadow"></div>')), $wrapperEl.append($cubeShadowEl)),
                          $cubeShadowEl.css({ height: swiperWidth + "px" }))
                        : (($cubeShadowEl = $el.find(".swiper-cube-shadow")), 0 === $cubeShadowEl.length && (($cubeShadowEl = $('<div class="swiper-cube-shadow"></div>')), $el.append($cubeShadowEl))));
                for (let i = 0; i < slides.length; i += 1) {
                    const $slideEl = slides.eq(i);
                    let slideIndex = i;
                    isVirtual && (slideIndex = parseInt($slideEl.attr("data-swiper-slide-index"), 10));
                    let slideAngle = 90 * slideIndex,
                        round = Math.floor(slideAngle / 360);
                    rtl && ((slideAngle = -slideAngle), (round = Math.floor(-slideAngle / 360)));
                    const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                    let tx = 0,
                        ty = 0,
                        tz = 0;
                    slideIndex % 4 == 0
                        ? ((tx = 4 * -round * swiperSize), (tz = 0))
                        : (slideIndex - 1) % 4 == 0
                        ? ((tx = 0), (tz = 4 * -round * swiperSize))
                        : (slideIndex - 2) % 4 == 0
                        ? ((tx = swiperSize + 4 * round * swiperSize), (tz = swiperSize))
                        : (slideIndex - 3) % 4 == 0 && ((tx = -swiperSize), (tz = 3 * swiperSize + 4 * swiperSize * round)),
                        rtl && (tx = -tx),
                        isHorizontal || ((ty = tx), (tx = 0));
                    const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
                    if ((progress <= 1 && progress > -1 && ((wrapperRotate = 90 * slideIndex + 90 * progress), rtl && (wrapperRotate = 90 * -slideIndex - 90 * progress)), $slideEl.transform(transform), params.slideShadows)) {
                        let shadowBefore = isHorizontal ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top"),
                            shadowAfter = isHorizontal ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
                        0 === shadowBefore.length && ((shadowBefore = $(`<div class="swiper-slide-shadow-${isHorizontal ? "left" : "top"}"></div>`)), $slideEl.append(shadowBefore)),
                            0 === shadowAfter.length && ((shadowAfter = $(`<div class="swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}"></div>`)), $slideEl.append(shadowAfter)),
                            shadowBefore.length && (shadowBefore[0].style.opacity = Math.max(-progress, 0)),
                            shadowAfter.length && (shadowAfter[0].style.opacity = Math.max(progress, 0));
                    }
                }
                if (
                    ($wrapperEl.css({
                        "-webkit-transform-origin": `50% 50% -${swiperSize / 2}px`,
                        "-moz-transform-origin": `50% 50% -${swiperSize / 2}px`,
                        "-ms-transform-origin": `50% 50% -${swiperSize / 2}px`,
                        "transform-origin": `50% 50% -${swiperSize / 2}px`,
                    }),
                    params.shadow)
                )
                    if (isHorizontal) $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
                    else {
                        const shadowAngle = Math.abs(wrapperRotate) - 90 * Math.floor(Math.abs(wrapperRotate) / 90),
                            multiplier = 1.5 - (Math.sin((2 * shadowAngle * Math.PI) / 360) / 2 + Math.cos((2 * shadowAngle * Math.PI) / 360) / 2),
                            scale1 = params.shadowScale,
                            scale2 = params.shadowScale / multiplier,
                            offset = params.shadowOffset;
                        $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
                    }
                const zFactor = swiper_esm_bundle_Browser.isSafari || swiper_esm_bundle_Browser.isUiWebView ? -swiperSize / 2 : 0;
                $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${this.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${this.isHorizontal() ? -wrapperRotate : 0}deg)`);
            },
            setTransition(duration) {
                const { $el: $el, slides: slides } = this;
                slides.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration),
                    this.params.cubeEffect.shadow && !this.isHorizontal() && $el.find(".swiper-cube-shadow").transition(duration);
            },
        };
        const Flip = {
            setTranslate() {
                const swiper = this,
                    { slides: slides, rtlTranslate: rtl } = swiper;
                for (let i = 0; i < slides.length; i += 1) {
                    const $slideEl = slides.eq(i);
                    let progress = $slideEl[0].progress;
                    swiper.params.flipEffect.limitRotation && (progress = Math.max(Math.min($slideEl[0].progress, 1), -1));
                    let rotateY = -180 * progress,
                        rotateX = 0,
                        tx = -$slideEl[0].swiperSlideOffset,
                        ty = 0;
                    if (
                        (swiper.isHorizontal() ? rtl && (rotateY = -rotateY) : ((ty = tx), (tx = 0), (rotateX = -rotateY), (rotateY = 0)),
                        ($slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length),
                        swiper.params.flipEffect.slideShadows)
                    ) {
                        let shadowBefore = swiper.isHorizontal() ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top"),
                            shadowAfter = swiper.isHorizontal() ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
                        0 === shadowBefore.length && ((shadowBefore = $(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? "left" : "top"}"></div>`)), $slideEl.append(shadowBefore)),
                            0 === shadowAfter.length && ((shadowAfter = $(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? "right" : "bottom"}"></div>`)), $slideEl.append(shadowAfter)),
                            shadowBefore.length && (shadowBefore[0].style.opacity = Math.max(-progress, 0)),
                            shadowAfter.length && (shadowAfter[0].style.opacity = Math.max(progress, 0));
                    }
                    $slideEl.transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
                }
            },
            setTransition(duration) {
                const swiper = this,
                    { slides: slides, activeIndex: activeIndex, $wrapperEl: $wrapperEl } = swiper;
                if ((slides.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration), swiper.params.virtualTranslate && 0 !== duration)) {
                    let eventTriggered = !1;
                    slides.eq(activeIndex).transitionEnd(function () {
                        if (eventTriggered) return;
                        if (!swiper || swiper.destroyed) return;
                        (eventTriggered = !0), (swiper.animating = !1);
                        const triggerEvents = ["webkitTransitionEnd", "transitionend"];
                        for (let i = 0; i < triggerEvents.length; i += 1) $wrapperEl.trigger(triggerEvents[i]);
                    });
                }
            },
        };
        const Coverflow = {
            setTranslate() {
                const { width: swiperWidth, height: swiperHeight, slides: slides, $wrapperEl: $wrapperEl, slidesSizesGrid: slidesSizesGrid } = this,
                    params = this.params.coverflowEffect,
                    isHorizontal = this.isHorizontal(),
                    transform = this.translate,
                    center = isHorizontal ? swiperWidth / 2 - transform : swiperHeight / 2 - transform,
                    rotate = isHorizontal ? params.rotate : -params.rotate,
                    translate = params.depth;
                for (let i = 0, length = slides.length; i < length; i += 1) {
                    const $slideEl = slides.eq(i),
                        slideSize = slidesSizesGrid[i],
                        offsetMultiplier = ((center - $slideEl[0].swiperSlideOffset - slideSize / 2) / slideSize) * params.modifier;
                    let rotateY = isHorizontal ? rotate * offsetMultiplier : 0,
                        rotateX = isHorizontal ? 0 : rotate * offsetMultiplier,
                        translateZ = -translate * Math.abs(offsetMultiplier),
                        stretch = params.stretch;
                    "string" == typeof stretch && -1 !== stretch.indexOf("%") && (stretch = (parseFloat(params.stretch) / 100) * slideSize);
                    let translateY = isHorizontal ? 0 : stretch * offsetMultiplier,
                        translateX = isHorizontal ? stretch * offsetMultiplier : 0;
                    Math.abs(translateX) < 0.001 && (translateX = 0),
                        Math.abs(translateY) < 0.001 && (translateY = 0),
                        Math.abs(translateZ) < 0.001 && (translateZ = 0),
                        Math.abs(rotateY) < 0.001 && (rotateY = 0),
                        Math.abs(rotateX) < 0.001 && (rotateX = 0);
                    const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                    if (($slideEl.transform(slideTransform), ($slideEl[0].style.zIndex = 1 - Math.abs(Math.round(offsetMultiplier))), params.slideShadows)) {
                        let $shadowBeforeEl = isHorizontal ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top"),
                            $shadowAfterEl = isHorizontal ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
                        0 === $shadowBeforeEl.length && (($shadowBeforeEl = $(`<div class="swiper-slide-shadow-${isHorizontal ? "left" : "top"}"></div>`)), $slideEl.append($shadowBeforeEl)),
                            0 === $shadowAfterEl.length && (($shadowAfterEl = $(`<div class="swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}"></div>`)), $slideEl.append($shadowAfterEl)),
                            $shadowBeforeEl.length && ($shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0),
                            $shadowAfterEl.length && ($shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0);
                    }
                }
                if (swiper_esm_bundle_Support.pointerEvents || swiper_esm_bundle_Support.prefixedPointerEvents) {
                    $wrapperEl[0].style.perspectiveOrigin = center + "px 50%";
                }
            },
            setTransition(duration) {
                this.slides.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
            },
        };
        const Thumbs = {
            init() {
                const swiper = this,
                    { thumbs: thumbsParams } = swiper.params,
                    SwiperClass = swiper.constructor;
                thumbsParams.swiper instanceof SwiperClass
                    ? ((swiper.thumbs.swiper = thumbsParams.swiper),
                      Utils.extend(swiper.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
                      Utils.extend(swiper.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }))
                    : Utils.isObject(thumbsParams.swiper) &&
                      ((swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 }))), (swiper.thumbs.swiperCreated = !0)),
                    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass),
                    swiper.thumbs.swiper.on("tap", swiper.thumbs.onThumbClick);
            },
            onThumbClick() {
                const swiper = this,
                    thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                const clickedIndex = thumbsSwiper.clickedIndex,
                    clickedSlide = thumbsSwiper.clickedSlide;
                if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
                if (null == clickedIndex) return;
                let slideToIndex;
                if (((slideToIndex = thumbsSwiper.params.loop ? parseInt($(thumbsSwiper.clickedSlide).attr("data-swiper-slide-index"), 10) : clickedIndex), swiper.params.loop)) {
                    let currentIndex = swiper.activeIndex;
                    swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass) && (swiper.loopFix(), (swiper._clientLeft = swiper.$wrapperEl[0].clientLeft), (currentIndex = swiper.activeIndex));
                    const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index(),
                        nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
                    slideToIndex = void 0 === prevIndex ? nextIndex : void 0 === nextIndex ? prevIndex : nextIndex - currentIndex < currentIndex - prevIndex ? nextIndex : prevIndex;
                }
                swiper.slideTo(slideToIndex);
            },
            update(initial) {
                const swiper = this,
                    thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                const slidesPerView = "auto" === thumbsSwiper.params.slidesPerView ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
                if (swiper.realIndex !== thumbsSwiper.realIndex) {
                    let newThumbsIndex,
                        currentThumbsIndex = thumbsSwiper.activeIndex;
                    if (thumbsSwiper.params.loop) {
                        thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass) &&
                            (thumbsSwiper.loopFix(), (thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft), (currentThumbsIndex = thumbsSwiper.activeIndex));
                        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index(),
                            nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                        newThumbsIndex =
                            void 0 === prevThumbsIndex
                                ? nextThumbsIndex
                                : void 0 === nextThumbsIndex
                                ? prevThumbsIndex
                                : nextThumbsIndex - currentThumbsIndex == currentThumbsIndex - prevThumbsIndex
                                ? currentThumbsIndex
                                : nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex
                                ? nextThumbsIndex
                                : prevThumbsIndex;
                    } else newThumbsIndex = swiper.realIndex;
                    thumbsSwiper.visibleSlidesIndexes &&
                        thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0 &&
                        (thumbsSwiper.params.centeredSlides
                            ? (newThumbsIndex = newThumbsIndex > currentThumbsIndex ? newThumbsIndex - Math.floor(slidesPerView / 2) + 1 : newThumbsIndex + Math.floor(slidesPerView / 2) - 1)
                            : newThumbsIndex > currentThumbsIndex && (newThumbsIndex = newThumbsIndex - slidesPerView + 1),
                        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0));
                }
                let thumbsToActivate = 1;
                const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
                if (
                    (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides && (thumbsToActivate = swiper.params.slidesPerView),
                    swiper.params.thumbs.multipleActiveThumbs || (thumbsToActivate = 1),
                    (thumbsToActivate = Math.floor(thumbsToActivate)),
                    thumbsSwiper.slides.removeClass(thumbActiveClass),
                    thumbsSwiper.params.loop || (thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled))
                )
                    for (let i = 0; i < thumbsToActivate; i += 1) thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
                else for (let i = 0; i < thumbsToActivate; i += 1) thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
            },
        };
        const components = [
            Device$1,
            Support$1,
            Browser$1,
            Resize,
            Observer$1,
            Virtual$1,
            Keyboard$1,
            {
                name: "mousewheel",
                params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } },
                create() {
                    Utils.extend(this, {
                        mousewheel: {
                            enabled: !1,
                            enable: Mousewheel.enable.bind(this),
                            disable: Mousewheel.disable.bind(this),
                            handle: Mousewheel.handle.bind(this),
                            handleMouseEnter: Mousewheel.handleMouseEnter.bind(this),
                            handleMouseLeave: Mousewheel.handleMouseLeave.bind(this),
                            animateSlider: Mousewheel.animateSlider.bind(this),
                            releaseScroll: Mousewheel.releaseScroll.bind(this),
                            lastScrollTime: Utils.now(),
                            lastEventBeforeSnap: void 0,
                            recentWheelEvents: [],
                        },
                    });
                },
                on: {
                    init() {
                        const swiper = this;
                        !swiper.params.mousewheel.enabled && swiper.params.cssMode && swiper.mousewheel.disable(), swiper.params.mousewheel.enabled && swiper.mousewheel.enable();
                    },
                    destroy() {
                        const swiper = this;
                        swiper.params.cssMode && swiper.mousewheel.enable(), swiper.mousewheel.enabled && swiper.mousewheel.disable();
                    },
                },
            },
            {
                name: "navigation",
                params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                create() {
                    Utils.extend(this, {
                        navigation: {
                            init: Navigation.init.bind(this),
                            update: Navigation.update.bind(this),
                            destroy: Navigation.destroy.bind(this),
                            onNextClick: Navigation.onNextClick.bind(this),
                            onPrevClick: Navigation.onPrevClick.bind(this),
                        },
                    });
                },
                on: {
                    init() {
                        this.navigation.init(), this.navigation.update();
                    },
                    toEdge() {
                        this.navigation.update();
                    },
                    fromEdge() {
                        this.navigation.update();
                    },
                    destroy() {
                        this.navigation.destroy();
                    },
                    click(e) {
                        const swiper = this,
                            { $nextEl: $nextEl, $prevEl: $prevEl } = swiper.navigation;
                        if (swiper.params.navigation.hideOnClick && !$(e.target).is($prevEl) && !$(e.target).is($nextEl)) {
                            let isHidden;
                            $nextEl ? (isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass)) : $prevEl && (isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass)),
                                !0 === isHidden ? swiper.emit("navigationShow", swiper) : swiper.emit("navigationHide", swiper),
                                $nextEl && $nextEl.toggleClass(swiper.params.navigation.hiddenClass),
                                $prevEl && $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                        }
                    },
                },
            },
            {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: (number) => number,
                        formatFractionTotal: (number) => number,
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock",
                    },
                },
                create() {
                    Utils.extend(this, { pagination: { init: Pagination.init.bind(this), render: Pagination.render.bind(this), update: Pagination.update.bind(this), destroy: Pagination.destroy.bind(this), dynamicBulletIndex: 0 } });
                },
                on: {
                    init() {
                        this.pagination.init(), this.pagination.render(), this.pagination.update();
                    },
                    activeIndexChange() {
                        const swiper = this;
                        (swiper.params.loop || void 0 === swiper.snapIndex) && swiper.pagination.update();
                    },
                    snapIndexChange() {
                        const swiper = this;
                        swiper.params.loop || swiper.pagination.update();
                    },
                    slidesLengthChange() {
                        const swiper = this;
                        swiper.params.loop && (swiper.pagination.render(), swiper.pagination.update());
                    },
                    snapGridLengthChange() {
                        const swiper = this;
                        swiper.params.loop || (swiper.pagination.render(), swiper.pagination.update());
                    },
                    destroy() {
                        this.pagination.destroy();
                    },
                    click(e) {
                        const swiper = this;
                        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !$(e.target).hasClass(swiper.params.pagination.bulletClass)) {
                            !0 === swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass) ? swiper.emit("paginationShow", swiper) : swiper.emit("paginationHide", swiper),
                                swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
                        }
                    },
                },
            },
            {
                name: "scrollbar",
                params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
                create() {
                    Utils.extend(this, {
                        scrollbar: {
                            init: Scrollbar.init.bind(this),
                            destroy: Scrollbar.destroy.bind(this),
                            updateSize: Scrollbar.updateSize.bind(this),
                            setTranslate: Scrollbar.setTranslate.bind(this),
                            setTransition: Scrollbar.setTransition.bind(this),
                            enableDraggable: Scrollbar.enableDraggable.bind(this),
                            disableDraggable: Scrollbar.disableDraggable.bind(this),
                            setDragPosition: Scrollbar.setDragPosition.bind(this),
                            getPointerPosition: Scrollbar.getPointerPosition.bind(this),
                            onDragStart: Scrollbar.onDragStart.bind(this),
                            onDragMove: Scrollbar.onDragMove.bind(this),
                            onDragEnd: Scrollbar.onDragEnd.bind(this),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null,
                        },
                    });
                },
                on: {
                    init() {
                        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
                    },
                    update() {
                        this.scrollbar.updateSize();
                    },
                    resize() {
                        this.scrollbar.updateSize();
                    },
                    observerUpdate() {
                        this.scrollbar.updateSize();
                    },
                    setTranslate() {
                        this.scrollbar.setTranslate();
                    },
                    setTransition(duration) {
                        this.scrollbar.setTransition(duration);
                    },
                    destroy() {
                        this.scrollbar.destroy();
                    },
                },
            },
            {
                name: "parallax",
                params: { parallax: { enabled: !1 } },
                create() {
                    Utils.extend(this, { parallax: { setTransform: Parallax.setTransform.bind(this), setTranslate: Parallax.setTranslate.bind(this), setTransition: Parallax.setTransition.bind(this) } });
                },
                on: {
                    beforeInit() {
                        this.params.parallax.enabled && ((this.params.watchSlidesProgress = !0), (this.originalParams.watchSlidesProgress = !0));
                    },
                    init() {
                        this.params.parallax.enabled && this.parallax.setTranslate();
                    },
                    setTranslate() {
                        this.params.parallax.enabled && this.parallax.setTranslate();
                    },
                    setTransition(duration) {
                        this.params.parallax.enabled && this.parallax.setTransition(duration);
                    },
                },
            },
            {
                name: "zoom",
                params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
                create() {
                    const swiper = this,
                        zoom = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {},
                            },
                            velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((methodName) => {
                        zoom[methodName] = Zoom[methodName].bind(swiper);
                    }),
                        Utils.extend(swiper, { zoom: zoom });
                    let scale = 1;
                    Object.defineProperty(swiper.zoom, "scale", {
                        get: () => scale,
                        set(value) {
                            if (scale !== value) {
                                const imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : void 0,
                                    slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : void 0;
                                swiper.emit("zoomChange", value, imageEl, slideEl);
                            }
                            scale = value;
                        },
                    });
                },
                on: {
                    init() {
                        const swiper = this;
                        swiper.params.zoom.enabled && swiper.zoom.enable();
                    },
                    destroy() {
                        this.zoom.disable();
                    },
                    touchStart(e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e);
                    },
                    touchEnd(e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e);
                    },
                    doubleTap(e) {
                        const swiper = this;
                        swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle && swiper.zoom.toggle(e);
                    },
                    transitionEnd() {
                        const swiper = this;
                        swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.zoom.onTransitionEnd();
                    },
                    slideChange() {
                        const swiper = this;
                        swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode && swiper.zoom.onTransitionEnd();
                    },
                },
            },
            {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader",
                    },
                },
                create() {
                    Utils.extend(this, { lazy: { initialImageLoaded: !1, load: Lazy.load.bind(this), loadInSlide: Lazy.loadInSlide.bind(this) } });
                },
                on: {
                    beforeInit() {
                        const swiper = this;
                        swiper.params.lazy.enabled && swiper.params.preloadImages && (swiper.params.preloadImages = !1);
                    },
                    init() {
                        const swiper = this;
                        swiper.params.lazy.enabled && !swiper.params.loop && 0 === swiper.params.initialSlide && swiper.lazy.load();
                    },
                    scroll() {
                        const swiper = this;
                        swiper.params.freeMode && !swiper.params.freeModeSticky && swiper.lazy.load();
                    },
                    resize() {
                        const swiper = this;
                        swiper.params.lazy.enabled && swiper.lazy.load();
                    },
                    scrollbarDragMove() {
                        const swiper = this;
                        swiper.params.lazy.enabled && swiper.lazy.load();
                    },
                    transitionStart() {
                        const swiper = this;
                        swiper.params.lazy.enabled && (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) && swiper.lazy.load();
                    },
                    transitionEnd() {
                        const swiper = this;
                        swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart && swiper.lazy.load();
                    },
                    slideChange() {
                        const swiper = this;
                        swiper.params.lazy.enabled && swiper.params.cssMode && swiper.lazy.load();
                    },
                },
            },
            {
                name: "controller",
                params: { controller: { control: void 0, inverse: !1, by: "slide" } },
                create() {
                    Utils.extend(this, {
                        controller: {
                            control: this.params.controller.control,
                            getInterpolateFunction: Controller.getInterpolateFunction.bind(this),
                            setTranslate: Controller.setTranslate.bind(this),
                            setTransition: Controller.setTransition.bind(this),
                        },
                    });
                },
                on: {
                    update() {
                        const swiper = this;
                        swiper.controller.control && swiper.controller.spline && ((swiper.controller.spline = void 0), delete swiper.controller.spline);
                    },
                    resize() {
                        const swiper = this;
                        swiper.controller.control && swiper.controller.spline && ((swiper.controller.spline = void 0), delete swiper.controller.spline);
                    },
                    observerUpdate() {
                        const swiper = this;
                        swiper.controller.control && swiper.controller.spline && ((swiper.controller.spline = void 0), delete swiper.controller.spline);
                    },
                    setTranslate(translate, byController) {
                        this.controller.control && this.controller.setTranslate(translate, byController);
                    },
                    setTransition(duration, byController) {
                        this.controller.control && this.controller.setTransition(duration, byController);
                    },
                },
            },
            {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                    },
                },
                create() {
                    const swiper = this;
                    Utils.extend(swiper, { a11y: { liveRegion: $(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`) } }),
                        Object.keys(a11y).forEach((methodName) => {
                            swiper.a11y[methodName] = a11y[methodName].bind(swiper);
                        });
                },
                on: {
                    init() {
                        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
                    },
                    toEdge() {
                        this.params.a11y.enabled && this.a11y.updateNavigation();
                    },
                    fromEdge() {
                        this.params.a11y.enabled && this.a11y.updateNavigation();
                    },
                    paginationUpdate() {
                        this.params.a11y.enabled && this.a11y.updatePagination();
                    },
                    destroy() {
                        this.params.a11y.enabled && this.a11y.destroy();
                    },
                },
            },
            {
                name: "history",
                params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
                create() {
                    Utils.extend(this, {
                        history: {
                            init: History.init.bind(this),
                            setHistory: History.setHistory.bind(this),
                            setHistoryPopState: History.setHistoryPopState.bind(this),
                            scrollToSlide: History.scrollToSlide.bind(this),
                            destroy: History.destroy.bind(this),
                        },
                    });
                },
                on: {
                    init() {
                        const swiper = this;
                        swiper.params.history.enabled && swiper.history.init();
                    },
                    destroy() {
                        const swiper = this;
                        swiper.params.history.enabled && swiper.history.destroy();
                    },
                    transitionEnd() {
                        const swiper = this;
                        swiper.history.initialized && swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
                    },
                    slideChange() {
                        const swiper = this;
                        swiper.history.initialized && swiper.params.cssMode && swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
                    },
                },
            },
            {
                name: "hash-navigation",
                params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
                create() {
                    Utils.extend(this, {
                        hashNavigation: { initialized: !1, init: HashNavigation.init.bind(this), destroy: HashNavigation.destroy.bind(this), setHash: HashNavigation.setHash.bind(this), onHashCange: HashNavigation.onHashCange.bind(this) },
                    });
                },
                on: {
                    init() {
                        const swiper = this;
                        swiper.params.hashNavigation.enabled && swiper.hashNavigation.init();
                    },
                    destroy() {
                        const swiper = this;
                        swiper.params.hashNavigation.enabled && swiper.hashNavigation.destroy();
                    },
                    transitionEnd() {
                        const swiper = this;
                        swiper.hashNavigation.initialized && swiper.hashNavigation.setHash();
                    },
                    slideChange() {
                        const swiper = this;
                        swiper.hashNavigation.initialized && swiper.params.cssMode && swiper.hashNavigation.setHash();
                    },
                },
            },
            {
                name: "autoplay",
                params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
                create() {
                    const swiper = this;
                    Utils.extend(swiper, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: Autoplay.run.bind(swiper),
                            start: Autoplay.start.bind(swiper),
                            stop: Autoplay.stop.bind(swiper),
                            pause: Autoplay.pause.bind(swiper),
                            onVisibilityChange() {
                                "hidden" === document.visibilityState && swiper.autoplay.running && swiper.autoplay.pause(),
                                    "visible" === document.visibilityState && swiper.autoplay.paused && (swiper.autoplay.run(), (swiper.autoplay.paused = !1));
                            },
                            onTransitionEnd(e) {
                                swiper &&
                                    !swiper.destroyed &&
                                    swiper.$wrapperEl &&
                                    e.target === this &&
                                    (swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.autoplay.onTransitionEnd),
                                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.autoplay.onTransitionEnd),
                                    (swiper.autoplay.paused = !1),
                                    swiper.autoplay.running ? swiper.autoplay.run() : swiper.autoplay.stop());
                            },
                        },
                    });
                },
                on: {
                    init() {
                        const swiper = this;
                        swiper.params.autoplay.enabled && (swiper.autoplay.start(), document.addEventListener("visibilitychange", swiper.autoplay.onVisibilityChange));
                    },
                    beforeTransitionStart(speed, internal) {
                        const swiper = this;
                        swiper.autoplay.running && (internal || !swiper.params.autoplay.disableOnInteraction ? swiper.autoplay.pause(speed) : swiper.autoplay.stop());
                    },
                    sliderFirstMove() {
                        const swiper = this;
                        swiper.autoplay.running && (swiper.params.autoplay.disableOnInteraction ? swiper.autoplay.stop() : swiper.autoplay.pause());
                    },
                    touchEnd() {
                        const swiper = this;
                        swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction && swiper.autoplay.run();
                    },
                    destroy() {
                        const swiper = this;
                        swiper.autoplay.running && swiper.autoplay.stop(), document.removeEventListener("visibilitychange", swiper.autoplay.onVisibilityChange);
                    },
                },
            },
            {
                name: "effect-fade",
                params: { fadeEffect: { crossFade: !1 } },
                create() {
                    Utils.extend(this, { fadeEffect: { setTranslate: Fade.setTranslate.bind(this), setTransition: Fade.setTransition.bind(this) } });
                },
                on: {
                    beforeInit() {
                        if ("fade" !== this.params.effect) return;
                        this.classNames.push(this.params.containerModifierClass + "fade");
                        const overwriteParams = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                        Utils.extend(this.params, overwriteParams), Utils.extend(this.originalParams, overwriteParams);
                    },
                    setTranslate() {
                        "fade" === this.params.effect && this.fadeEffect.setTranslate();
                    },
                    setTransition(duration) {
                        "fade" === this.params.effect && this.fadeEffect.setTransition(duration);
                    },
                },
            },
            {
                name: "effect-cube",
                params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
                create() {
                    Utils.extend(this, { cubeEffect: { setTranslate: Cube.setTranslate.bind(this), setTransition: Cube.setTransition.bind(this) } });
                },
                on: {
                    beforeInit() {
                        if ("cube" !== this.params.effect) return;
                        this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                        const overwriteParams = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                        Utils.extend(this.params, overwriteParams), Utils.extend(this.originalParams, overwriteParams);
                    },
                    setTranslate() {
                        "cube" === this.params.effect && this.cubeEffect.setTranslate();
                    },
                    setTransition(duration) {
                        "cube" === this.params.effect && this.cubeEffect.setTransition(duration);
                    },
                },
            },
            {
                name: "effect-flip",
                params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                create() {
                    Utils.extend(this, { flipEffect: { setTranslate: Flip.setTranslate.bind(this), setTransition: Flip.setTransition.bind(this) } });
                },
                on: {
                    beforeInit() {
                        if ("flip" !== this.params.effect) return;
                        this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                        const overwriteParams = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                        Utils.extend(this.params, overwriteParams), Utils.extend(this.originalParams, overwriteParams);
                    },
                    setTranslate() {
                        "flip" === this.params.effect && this.flipEffect.setTranslate();
                    },
                    setTransition(duration) {
                        "flip" === this.params.effect && this.flipEffect.setTransition(duration);
                    },
                },
            },
            {
                name: "effect-coverflow",
                params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } },
                create() {
                    Utils.extend(this, { coverflowEffect: { setTranslate: Coverflow.setTranslate.bind(this), setTransition: Coverflow.setTransition.bind(this) } });
                },
                on: {
                    beforeInit() {
                        "coverflow" === this.params.effect &&
                            (this.classNames.push(this.params.containerModifierClass + "coverflow"),
                            this.classNames.push(this.params.containerModifierClass + "3d"),
                            (this.params.watchSlidesProgress = !0),
                            (this.originalParams.watchSlidesProgress = !0));
                    },
                    setTranslate() {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
                    },
                    setTransition(duration) {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(duration);
                    },
                },
            },
            {
                name: "thumbs",
                params: { thumbs: { multipleActiveThumbs: !0, swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
                create() {
                    Utils.extend(this, { thumbs: { swiper: null, init: Thumbs.init.bind(this), update: Thumbs.update.bind(this), onThumbClick: Thumbs.onThumbClick.bind(this) } });
                },
                on: {
                    beforeInit() {
                        const { thumbs: thumbs } = this.params;
                        thumbs && thumbs.swiper && (this.thumbs.init(), this.thumbs.update(!0));
                    },
                    slideChange() {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    update() {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    resize() {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    observerUpdate() {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    setTransition(duration) {
                        const thumbsSwiper = this.thumbs.swiper;
                        thumbsSwiper && thumbsSwiper.setTransition(duration);
                    },
                    beforeDestroy() {
                        const thumbsSwiper = this.thumbs.swiper;
                        thumbsSwiper && this.thumbs.swiperCreated && thumbsSwiper && thumbsSwiper.destroy();
                    },
                },
            },
        ];
        void 0 === swiper_esm_bundle_Swiper.use && ((swiper_esm_bundle_Swiper.use = swiper_esm_bundle_Swiper.Class.use), (swiper_esm_bundle_Swiper.installModule = swiper_esm_bundle_Swiper.Class.installModule)),
            swiper_esm_bundle_Swiper.use(components);
        var swiper_esm_bundle = swiper_esm_bundle_Swiper;
        __webpack_require__(1);
        jquery_default()(".js-select").select2({ width: "auto", minimumResultsForSearch: -1 }),
            jquery_default()(".header").each(function () {
                var menu = jquery_default()(this).find(".header__menu");
                jquery_default()(this)
                    .find(".header__mobile-btn")
                    .on("click", function () {
                        jquery_default()(".page").toggleClass("is-menu"), menu.toggleClass("is-active"), jquery_default()(this).toggleClass("is-active");
                    });
            }),
            jquery_default()(".menu__item.menu-item-has-children").each(function () {
                var item = jquery_default()(this);
                jquery_default()(window).width() < 992 && 
                    item.on("click", function () {
                        return jquery_default()(this).toggleClass("is-active").siblings().removeClass("is-active"), !1;
                    });
            }),
            jquery_default()(".gallery-swiper").each(function () {
                var section = jquery_default()(this),
                    swiper = section.find(".js-gallery-swiper"),
                    prev = section.find(".gallery-swiper__swiper-button.is-prev"),
                    next = section.find(".gallery-swiper__swiper-button.is-next");
                new swiper_esm_bundle(swiper, {
                    wrapperClass: "js-swiper-wrapper",
                    slideClass: "js-swiper-slide",
                    slidesPerView: "2",
                    spaceBetween: 24,
                    loop: !0,
                    navigation: { nextEl: next, prevEl: prev },
                    breakpoints: { 0: { slidesPerView: 1, spaceBetween: 20 }, 640: { slidesPerView: 2, spaceBetween: 24 } },
                });
            });
        new swiper_esm_bundle(jquery_default()(".js-speaker-swiper"), { loop: !0, wrapperClass: "js-swiper-wrapper", slideClass: "js-swiper-slide", slidesPerView: "1", spaceBetween: 40, navigation: { nextEl: jquery_default()(".js-speaker-next"),prevEl: jquery_default()(".js-speaker-prev") } });
    },
]);
