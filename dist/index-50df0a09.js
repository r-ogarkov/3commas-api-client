'use strict';

var regeneratorRuntime = require('regenerator-runtime');
var require$$0 = require('util');
var process$1 = require('process');
var buffer = require('buffer');
var http$1 = require('node:http');
var https$1 = require('node:https');
var zlib$1 = require('node:zlib');
var Stream = require('node:stream');
var node_util = require('node:util');
var node_url = require('node:url');
var require$$3 = require('net');
var require$$0$1 = require('stream');
var require$$0$2 = require('zlib');
var require$$4 = require('tls');
var require$$5 = require('crypto');
var require$$0$3 = require('events');
var require$$1 = require('https');
var require$$2 = require('http');
var require$$7 = require('url');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(regeneratorRuntime);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var process__default = /*#__PURE__*/_interopDefaultLegacy(process$1);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http$1);
var https__default = /*#__PURE__*/_interopDefaultLegacy(https$1);
var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib$1);
var Stream__default = /*#__PURE__*/_interopDefaultLegacy(Stream);
var require$$3__default = /*#__PURE__*/_interopDefaultLegacy(require$$3);
var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
var require$$0__default$2 = /*#__PURE__*/_interopDefaultLegacy(require$$0$2);
var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
var require$$5__default = /*#__PURE__*/_interopDefaultLegacy(require$$5);
var require$$0__default$3 = /*#__PURE__*/_interopDefaultLegacy(require$$0$3);
var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
var require$$7__default = /*#__PURE__*/_interopDefaultLegacy(require$$7);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
function commonjsRequire(path) {
    throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var _typeof$e = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
/* eslint complexity: [2, 18], max-statements: [2, 33] */ var shams = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
        return false;
    }
    if (_typeof$e(Symbol.iterator) === 'symbol') {
        return true;
    }
    var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') {
        return false;
    }
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
        return false;
    }
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
        return false;
    }
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj){
        return false;
    } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
        return false;
    }
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
        return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
        }
    }
    return true;
};

var _typeof$d = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = shams;
var hasSymbols$1 = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') {
        return false;
    }
    if (typeof Symbol !== 'function') {
        return false;
    }
    if (_typeof$d(origSymbol('foo')) !== 'symbol') {
        return false;
    }
    if (_typeof$d(Symbol('bar')) !== 'symbol') {
        return false;
    }
    return hasSymbolSham();
};

function _instanceof$9(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr$1 = Object.prototype.toString;
var funcType = '[object Function]';
var implementation$1 = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr$1.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);
    var bound;
    var binder = function binder() {
        if (_instanceof$9(this, bound)) {
            var result = target.apply(this, args.concat(slice.call(arguments)));
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(that, args.concat(slice.call(arguments)));
        }
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++){
        boundArgs.push('$' + i);
    }
    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

var implementation = implementation$1;
var functionBind = Function.prototype.bind || implementation;

var bind$1 = functionBind;
var src = bind$1.call(Function.call, Object.prototype.hasOwnProperty);

var undefined$1;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError$1 = TypeError;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function getEvalledConstructor(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
    try {
        $gOPD({}, '');
    } catch (e) {
        $gOPD = null; // this is IE 8, which has a broken gOPD
    }
}
var throwTypeError = function throwTypeError() {
    throw new $TypeError$1();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = hasSymbols$1();
var getProto = Object.getPrototypeOf || function(x) {
    return x.__proto__;
}; // eslint-disable-line no-proto
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto(Uint8Array);
var INTRINSICS = {
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined$1,
    '%AsyncFromSyncIteratorPrototype%': undefined$1,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': Error,
    '%eval%': eval,
    '%EvalError%': EvalError,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
    '%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': Object,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
    '%RangeError%': RangeError,
    '%ReferenceError%': ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined$1,
    '%Symbol%': hasSymbols ? Symbol : undefined$1,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError$1,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
    '%URIError%': URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
};
var doEval = function doEval1(name) {
    var value;
    if (name === '%AsyncFunction%') {
        value = getEvalledConstructor('async function () {}');
    } else if (name === '%GeneratorFunction%') {
        value = getEvalledConstructor('function* () {}');
    } else if (name === '%AsyncGeneratorFunction%') {
        value = getEvalledConstructor('async function* () {}');
    } else if (name === '%AsyncGenerator%') {
        var fn = doEval1('%AsyncGeneratorFunction%');
        if (fn) {
            value = fn.prototype;
        }
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval1('%AsyncGenerator%');
        if (gen) {
            value = getProto(gen.prototype);
        }
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = functionBind;
var hasOwn$1 = src;
var $concat$1 = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace$1 = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    } else if (last === '%' && first !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    }
    var result = [];
    $replace$1(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace$1(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn$1(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn$1(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
            value = doEval(intrinsicName);
        }
        if (typeof value === 'undefined' && !allowMissing) {
            throw new $TypeError$1('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        }
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
var getIntrinsic = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
        throw new $TypeError$1('intrinsic name must be a non-empty string');
    }
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
        throw new $TypeError$1('"allowMissing" argument must be a boolean');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat$1([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
            throw new $SyntaxError('property names with quotes must have matching quotes');
        }
        if (part === 'constructor' || !isOwn) {
            skipFurtherCaching = true;
        }
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn$1(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) {
                    throw new $TypeError$1('base intrinsic for ' + name + ' exists, but the property is not available.');
                }
                return void undefined$1;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
                    value = desc.get;
                } else {
                    value = value[part];
                }
            } else {
                isOwn = hasOwn$1(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
            }
        }
    }
    return value;
};

var callBind$1 = {
    exports: {}
};

(function (module) {
var bind = functionBind;
var GetIntrinsic = getIntrinsic;
var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');
if ($defineProperty) {
    try {
        $defineProperty({}, 'a', {
            value: 1
        });
    } catch (e) {
        // IE 8 has a broken defineProperty
        $defineProperty = null;
    }
}
module.exports = function callBind(originalFunction) {
    var func = $reflectApply(bind, $call, arguments);
    if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, 'length');
        if (desc.configurable) {
            // original length, plus the receiver, minus any additional arguments (after the receiver)
            $defineProperty(func, 'length', {
                value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
            });
        }
    }
    return func;
};
var applyBind = function applyBind() {
    return $reflectApply(bind, $apply, arguments);
};
if ($defineProperty) {
    $defineProperty(module.exports, 'apply', {
        value: applyBind
    });
} else {
    module.exports.apply = applyBind;
}
}(callBind$1));

var GetIntrinsic$1 = getIntrinsic;
var callBind = callBind$1.exports;
var $indexOf = callBind(GetIntrinsic$1('String.prototype.indexOf'));
var callBound$1 = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic$1(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
        return callBind(intrinsic);
    }
    return intrinsic;
};

var util_inspect = require$$0__default["default"].inspect;

function _instanceof$8(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var _typeof$c = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && _typeof$c(Symbol.iterator) === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (_typeof$c(Symbol.toStringTag) === hasShammedSymbols ? 'object' : 'symbol') ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype // eslint-disable-line no-proto
 ? function(O) {
    return O.__proto__; // eslint-disable-line no-proto
} : null);
function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}
var inspectCustom = util_inspect.custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
var objectInspect = function inspect_(obj, options, depth, seen) {
    var inspect = function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has$3(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    };
    var opts = options || {};
    if (has$3(opts, 'quoteStyle') && opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double') {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (has$3(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number' ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has$3(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }
    if (has$3(opts, 'indent') && opts.indent !== null && opts.indent !== '\t' && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has$3(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }
    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if ((typeof obj === "undefined" ? "undefined" : _typeof$c(obj)) === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') {
        depth = 0;
    }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray$3(obj) ? '[Array]' : '[Object]';
    }
    var indent = getIndent(opts, depth);
    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }
    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for(var i = 0; i < attrs.length; i++){
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) {
            s += '...';
        }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray$3(obj)) {
        if (obj.length === 0) {
            return '[]';
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if ('cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) {
            return '[' + String(obj) + ']';
        }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp$1(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : _instanceof$8(obj, Object) || obj.constructor === Object;
        var protoTag = _instanceof$8(obj, Object) ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) {
            return tag + '{}';
        }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}
function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}
function isArray$3(obj) {
    return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
}
function isDate(obj) {
    return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
}
function isRegExp$1(obj) {
    return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
}
function isError(obj) {
    return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
}
function isString(obj) {
    return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
}
function isNumber(obj) {
    return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
}
function isBoolean(obj) {
    return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj));
}
// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && _instanceof$8(obj, Symbol);
    }
    if ((typeof obj === "undefined" ? "undefined" : _typeof$c(obj)) === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}
function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
};
function has$3(obj, key) {
    return hasOwn.call(obj, key);
}
function toStr(obj) {
    return objectToString.call(obj);
}
function nameOf(f) {
    if (f.name) {
        return f.name;
    }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) {
        return m[1];
    }
    return null;
}
function indexOf(xs, x) {
    if (xs.indexOf) {
        return xs.indexOf(x);
    }
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) {
            return i;
        }
    }
    return -1;
}
function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return _instanceof$8(x, Map); // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return _instanceof$8(x, WeakMap); // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}
function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return _instanceof$8(x, Set); // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return _instanceof$8(x, WeakSet); // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isElement(x) {
    if (!x || typeof x !== 'object') {
        return false;
    }
    if (typeof HTMLElement !== 'undefined' && _instanceof$8(x, HTMLElement)) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}
function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}
function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) {
        return '\\' + x;
    }
    return '\\x' + (n < 16 ? '0' : '') + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
    return 'Object(' + str + ')';
}
function weakCollectionOf(type) {
    return type + ' { ? }';
}
function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}
function singleLineValues(xs) {
    for(var i = 0; i < xs.length; i++){
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}
function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}
function indentedJoin(xs, indent) {
    if (xs.length === 0) {
        return '';
    }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}
function arrObjKeys(obj, inspect) {
    var isArr = isArray$3(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for(var i = 0; i < obj.length; i++){
            xs[i] = has$3(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for(var k = 0; k < syms.length; k++){
            symMap['$' + syms[k]] = syms[k];
        }
    }
    for(var key in obj){
        if (!has$3(obj, key)) {
            continue;
        } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) {
            continue;
        } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && _instanceof$8(symMap['$' + key], Symbol)) {
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for(var j = 0; j < syms.length; j++){
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}

var GetIntrinsic = getIntrinsic;
var callBound = callBound$1;
var inspect = objectInspect;
var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);
var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);
/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */ var listGetNode = function listGetNode(list, key) {
    for(var prev = list, curr; (curr = prev.next) !== null; prev = curr){
        if (curr.key === key) {
            prev.next = curr.next;
            curr.next = list.next;
            list.next = curr; // eslint-disable-line no-param-reassign
            return curr;
        }
    }
};
var listGet = function listGet(objects, key) {
    var node = listGetNode(objects, key);
    return node && node.value;
};
var listSet = function listSet(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) {
        node.value = value;
    } else {
        // Prepend the new node to the beginning of the list
        objects.next = {
            key: key,
            next: objects.next,
            value: value
        };
    }
};
var listHas = function listHas(objects, key) {
    return !!listGetNode(objects, key);
};
var sideChannel = function getSideChannel() {
    var $wm;
    var $m;
    var $o;
    var channel = {
        assert: function assert(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        get: function get(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapGet($wm, key);
                }
            } else if ($Map) {
                if ($m) {
                    return $mapGet($m, key);
                }
            } else {
                if ($o) {
                    return listGet($o, key);
                }
            }
        },
        has: function has(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapHas($wm, key);
                }
            } else if ($Map) {
                if ($m) {
                    return $mapHas($m, key);
                }
            } else {
                if ($o) {
                    return listHas($o, key);
                }
            }
            return false;
        },
        set: function set(key, value) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if (!$wm) {
                    $wm = new $WeakMap();
                }
                $weakMapSet($wm, key, value);
            } else if ($Map) {
                if (!$m) {
                    $m = new $Map();
                }
                $mapSet($m, key, value);
            } else {
                if (!$o) {
                    /*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */ $o = {
                        key: {},
                        next: null
                    };
                }
                listSet($o, key, value);
            }
        }
    };
    return channel;
};

var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};
var formats$3 = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function RFC1738(value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function RFC3986(value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};

var _typeof$b = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var formats$2 = formats$3;
var has$2 = Object.prototype.hasOwnProperty;
var isArray$2 = Array.isArray;
var hexTable = function() {
    var array = [];
    for(var i = 0; i < 256; ++i){
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }
    return array;
}();
var compactQueue = function compactQueue(queue) {
    while(queue.length > 1){
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray$2(obj)) {
            var compacted = [];
            for(var j = 0; j < obj.length; ++j){
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }
            item.obj[item.prop] = compacted;
        }
    }
};
var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for(var i = 0; i < source.length; ++i){
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }
    return obj;
};
var merge = function merge1(target, source, options) {
    /* eslint no-param-reassign: 0 */ if (!source) {
        return target;
    }
    if (typeof source !== 'object') {
        if (isArray$2(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if (options && (options.plainObjects || options.allowPrototypes) || !has$2.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [
                target,
                source
            ];
        }
        return target;
    }
    if (!target || typeof target !== 'object') {
        return [
            target
        ].concat(source);
    }
    var mergeTarget = target;
    if (isArray$2(target) && !isArray$2(source)) {
        mergeTarget = arrayToObject(target, options);
    }
    if (isArray$2(target) && isArray$2(source)) {
        source.forEach(function(item, i) {
            if (has$2.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge1(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has$2.call(acc, key)) {
            acc[key] = merge1(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};
var decode = function decode(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }
    var string = str;
    if ((typeof str === "undefined" ? "undefined" : _typeof$b(str)) === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }
    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }
    var out = '';
    for(var i = 0; i < string.length; ++i){
        var c = string.charCodeAt(i);
        if (c === 45 // -
         || c === 46 // .
         || c === 95 // _
         || c === 126 // ~
         || c >= 48 && c <= 57 // 0-9
         || c >= 65 && c <= 90 // a-z
         || c >= 97 && c <= 122 // A-Z
         || format === formats$2.RFC1738 && (c === 40 || c === 41) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }
        if (c < 128) {
            out = out + hexTable[c];
            continue;
        }
        if (c < 2048) {
            out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
            continue;
        }
        if (c < 55296 || c >= 57344) {
            out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
            continue;
        }
        i += 1;
        c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
        /* eslint operator-linebreak: [2, "before"] */ out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
    }
    return out;
};
var compact = function compact(value) {
    var queue = [
        {
            obj: {
                o: value
            },
            prop: 'o'
        }
    ];
    var refs = [];
    for(var i = 0; i < queue.length; ++i){
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for(var j = 0; j < keys.length; ++j){
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({
                    obj: obj,
                    prop: key
                });
                refs.push(val);
            }
        }
    }
    compactQueue(queue);
    return value;
};
var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};
var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b) {
    return [].concat(a, b);
};
var maybeMap = function maybeMap(val, fn) {
    if (isArray$2(val)) {
        var mapped = [];
        for(var i = 0; i < val.length; i += 1){
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};
var utils$2 = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

function _instanceof$7(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var _typeof$a = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var getSideChannel = sideChannel;
var utils$1 = utils$2;
var formats$1 = formats$3;
var has$1 = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};
var isArray$1 = Array.isArray;
var split = String.prototype.split;
var push$1 = Array.prototype.push;
var pushToArray = function pushToArray(arr, valueOrArray) {
    push$1.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [
        valueOrArray
    ]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats$1['default'];
var defaults$1 = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils$1.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats$1.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || (typeof v === "undefined" ? "undefined" : _typeof$a(v)) === 'symbol' || (typeof v === "undefined" ? "undefined" : _typeof$a(v)) === 'bigint';
};
var sentinel = {};
var stringify$1 = function stringify1(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
    var obj = object;
    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag){
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (_instanceof$7(obj, Date)) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
        obj = utils$1.maybeMap(obj, function(value) {
            if (_instanceof$7(value, Date)) {
                return serializeDate(value);
            }
            return value;
        });
    }
    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder, charset, 'key', format) : prefix;
        }
        obj = '';
    }
    if (isNonNullishPrimitive(obj) || utils$1.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for(var i = 0; i < valuesArray.length; ++i){
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults$1.encoder, charset, 'value', format));
                }
                return [
                    formatter(keyValue) + '=' + valuesJoined
                ];
            }
            return [
                formatter(keyValue) + '=' + formatter(encoder(obj, defaults$1.encoder, charset, 'value', format))
            ];
        }
        return [
            formatter(prefix) + '=' + formatter(String(obj))
        ];
    }
    var values = [];
    if (typeof obj === 'undefined') {
        return values;
    }
    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
        // we need to join elements in
        objKeys = [
            {
                value: obj.length > 0 ? obj.join(',') || null : void undefined
            }
        ];
    } else if (isArray$1(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }
    for(var j = 0; j < objKeys.length; ++j){
        var key = objKeys[j];
        var value1 = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];
        if (skipNulls && value1 === null) {
            continue;
        }
        var keyPrefix = isArray$1(obj) ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix : prefix + (allowDots ? '.' + key : '[' + key + ']');
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify1(value1, keyPrefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults$1;
    }
    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }
    var charset = opts.charset || defaults$1.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var format = formats$1['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has$1.call(formats$1.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats$1.formatters[format];
    var filter = defaults$1.filter;
    if (typeof opts.filter === 'function' || isArray$1(opts.filter)) {
        filter = opts.filter;
    }
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults$1.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults$1.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults$1.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults$1.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults$1.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults$1.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults$1.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults$1.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults$1.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults$1.strictNullHandling
    };
};
var stringify_1 = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray$1(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== 'object' || obj === null) {
        return '';
    }
    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }
    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (!objKeys) {
        objKeys = Object.keys(obj);
    }
    if (options.sort) {
        objKeys.sort(options.sort);
    }
    var sideChannel = getSideChannel();
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify$1(obj[key], key, generateArrayPrefix, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';
    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }
    return joined.length > 0 ? prefix + joined : '';
};

var utils = utils$2;
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};
var interpretNumericEntities = function interpretNumericEntities(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};
var parseArrayValue = function parseArrayValue(val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }
    return val;
};
// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')
var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
        for(i = 0; i < parts.length; ++i){
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }
    for(i = 0; i < parts.length; ++i){
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, 'value');
            });
        }
        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }
        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [
                val
            ] : val;
        }
        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }
    return obj;
};
var parseObject = function parseObject(chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);
    for(var i = chain.length - 1; i >= 0; --i){
        var obj;
        var root = chain[i];
        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = {
                    0: leaf
                };
            } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }
        leaf = obj;
    }
    return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }
    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;
    // The regex chunks
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    // Get the parent
    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    // Stash the parent if it exists
    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(parent);
    }
    // Loop through children appending to the array until we hit depth
    var i = 0;
    while(options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth){
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }
    // If there's a remainder, just add whatever is left
    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }
    return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }
    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;
    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === 'number' || opts.depth === false ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
var parse$3 = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }
    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};
    // Iterate over the keys and setup the new object
    var keys = Object.keys(tempObj);
    for(var i = 0; i < keys.length; ++i){
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) {
        return obj;
    }
    return utils.compact(obj);
};

var stringify = stringify_1;
var parse$2 = parse$3;
var formats = formats$3;
var lib = {
    formats: formats,
    parse: parse$2,
    stringify: stringify
};

/**
 * Returns a `Buffer` instance from the given data URI `uri`.
 *
 * @param {String} uri Data URI to turn into a Buffer instance
 * @returns {Buffer} Buffer instance from Data URI
 * @api public
 */ function dataUriToBuffer(uri) {
    if (!/^data:/i.test(uri)) {
        throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
    }
    // strip newlines
    uri = uri.replace(/\r?\n/g, '');
    // split the URI up into the "metadata" and the "data" portions
    var firstComma = uri.indexOf(',');
    if (firstComma === -1 || firstComma <= 4) {
        throw new TypeError('malformed data: URI');
    }
    // remove the "data:" scheme and parse the metadata
    var meta = uri.substring(5, firstComma).split(';');
    var charset = '';
    var base64 = false;
    var type = meta[0] || 'text/plain';
    var typeFull = type;
    for(var i = 1; i < meta.length; i++){
        if (meta[i] === 'base64') {
            base64 = true;
        } else {
            typeFull += ";".concat(meta[i]);
            if (meta[i].indexOf('charset=') === 0) {
                charset = meta[i].substring(8);
            }
        }
    }
    // defaults to US-ASCII only if type is not provided
    if (!meta[0] && !charset.length) {
        typeFull += ';charset=US-ASCII';
        charset = 'US-ASCII';
    }
    // get the encoded data portion and decode URI-encoded chars
    var encoding = base64 ? 'base64' : 'ascii';
    var data = unescape(uri.substring(firstComma + 1));
    var buffer$1 = buffer.Buffer.from(data, encoding);
    // set `.type` and `.typeFull` properties to MIME type
    buffer$1.type = type;
    buffer$1.typeFull = typeFull;
    // set the `.charset` property
    buffer$1.charset = charset;
    return buffer$1;
}

function asyncGeneratorStep$5(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator$5(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep$5(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep$5(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
/* c8 ignore start */ // 64 KiB (same size chrome slice theirs blob into Uint8array's)
var POOL_SIZE$1 = 65536;
if (!globalThis.ReadableStream) {
    // `node:stream/web` got introduced in v16.5.0 as experimental
    // and it's preferred over the polyfilled version. So we also
    // suppress the warning that gets emitted by NodeJS for using it.
    try {
        var process = require('node:process');
        var emitWarning = process.emitWarning;
        try {
            process.emitWarning = function() {};
            Object.assign(globalThis, require('node:stream/web'));
            process.emitWarning = emitWarning;
        } catch (error) {
            process.emitWarning = emitWarning;
            throw error;
        }
    } catch (error) {
        // fallback to polyfill implementation
        Object.assign(globalThis, require('web-streams-polyfill/dist/ponyfill.es2018.js'));
    }
}
try {
    // Don't use node: prefix for this, require+node: is not supported until node v14.14
    // Only `import()` can use prefix in 12.20 and later
    var Blob$1 = require('buffer').Blob;
    if (Blob$1 && !Blob$1.prototype.stream) {
        Blob$1.prototype.stream = function name(params) {
            var position = 0;
            var blob = this;
            return new ReadableStream({
                type: 'bytes',
                pull: function pull(ctrl) {
                    return _asyncToGenerator$5(regeneratorRuntime__default["default"].mark(function _callee() {
                        var chunk, buffer;
                        return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE$1));
                                    _ctx.next = 3;
                                    return chunk.arrayBuffer();
                                case 3:
                                    buffer = _ctx.sent;
                                    position += buffer.byteLength;
                                    ctrl.enqueue(new Uint8Array(buffer));
                                    if (position === blob.size) {
                                        ctrl.close();
                                    }
                                case 7:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee);
                    }))();
                }
            });
        };
    }
} catch (error) {} /* c8 ignore end */

function AsyncGenerator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) {
                back = back.next = request;
            } else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg) {
        try {
            var result = gen[key](arg);
            var value = result.value;
            var wrappedAwait = value instanceof _AwaitValue;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) {
            resume(front.key, front.arg);
        } else {
            back = null;
        }
    }
    this._invoke = send;
    if (typeof gen.return !== "function") {
        this.return = undefined;
    }
}
if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
        return this;
    };
}
AsyncGenerator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
AsyncGenerator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
AsyncGenerator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};
function _asyncIterator$1(iterable) {
    var method;
    if (typeof Symbol === "function") {
        if (Symbol.asyncIterator) {
            method = iterable[Symbol.asyncIterator];
            if (method != null) return method.call(iterable);
        }
        if (Symbol.iterator) {
            method = iterable[Symbol.iterator];
            if (method != null) return method.call(iterable);
        }
    }
    throw new TypeError("Object is not async iterable");
}
function asyncGeneratorStep$4(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator$4(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep$4(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep$4(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _awaitAsyncGenerator(value) {
    return new _AwaitValue(value);
}
function _AwaitValue(value) {
    this.wrapped = value;
}
function _classCallCheck$g(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _classPrivateFieldGet$2(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver).value;
}
function _classPrivateFieldSet$2(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    var descriptor = privateMap.get(receiver);
    if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
    return value;
}
function _defineProperties$e(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$e(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$e(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$e(Constructor, staticProps);
    return Constructor;
}
function _instanceof$6(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _wrapAsyncGenerator(fn) {
    return function() {
        return new AsyncGenerator(fn.apply(this, arguments));
    };
}
/** @typedef {import('buffer').Blob} NodeBlob} */ // 64 KiB (same size chrome slice theirs blob into Uint8array's)
var POOL_SIZE = 65536;
function toIterator(parts) {
    return _toIterator.apply(this, arguments);
}
function _toIterator() {
    _toIterator = /** @param {(Blob | NodeBlob | Uint8Array)[]} parts */ _wrapAsyncGenerator(regeneratorRuntime__default["default"].mark(function _callee(parts) {
        var clone, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, part, position, end, size, chunk, position1, chunk1, buffer, _args = arguments;
        return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    clone = _args.length > 1 && _args[1] !== void 0 ? _args[1] : true;
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _ctx.prev = 2;
                    _iterator = parts[Symbol.iterator]();
                case 4:
                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        _ctx.next = 42;
                        break;
                    }
                    part = _step.value;
                    if (!('stream' in part)) {
                        _ctx.next = 10;
                        break;
                    }
                    return _ctx.delegateYield(part.stream(), "t0", 8);
                case 8:
                    _ctx.next = 39;
                    break;
                case 10:
                    if (!ArrayBuffer.isView(part)) {
                        _ctx.next = 28;
                        break;
                    }
                    if (!clone) {
                        _ctx.next = 24;
                        break;
                    }
                    position = part.byteOffset;
                    end = part.byteOffset + part.byteLength;
                case 14:
                    if (!(position !== end)) {
                        _ctx.next = 22;
                        break;
                    }
                    size = Math.min(end - position, POOL_SIZE);
                    chunk = part.buffer.slice(position, position + size);
                    position += chunk.byteLength;
                    _ctx.next = 20;
                    return new Uint8Array(chunk);
                case 20:
                    _ctx.next = 14;
                    break;
                case 22:
                    _ctx.next = 26;
                    break;
                case 24:
                    _ctx.next = 26;
                    return part;
                case 26:
                    _ctx.next = 39;
                    break;
                case 28:
                    position1 = 0;
                case 29:
                    if (!(position1 !== part.size)) {
                        _ctx.next = 39;
                        break;
                    }
                    chunk1 = part.slice(position1, Math.min(part.size, position1 + POOL_SIZE));
                    _ctx.next = 33;
                    return _awaitAsyncGenerator(chunk1.arrayBuffer());
                case 33:
                    buffer = _ctx.sent;
                    position1 += buffer.byteLength;
                    _ctx.next = 37;
                    return new Uint8Array(buffer);
                case 37:
                    _ctx.next = 29;
                    break;
                case 39:
                    _iteratorNormalCompletion = true;
                    _ctx.next = 4;
                    break;
                case 42:
                    _ctx.next = 48;
                    break;
                case 44:
                    _ctx.prev = 44;
                    _ctx.t1 = _ctx["catch"](2);
                    _didIteratorError = true;
                    _iteratorError = _ctx.t1;
                case 48:
                    _ctx.prev = 48;
                    _ctx.prev = 49;
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                case 51:
                    _ctx.prev = 51;
                    if (!_didIteratorError) {
                        _ctx.next = 54;
                        break;
                    }
                    throw _iteratorError;
                case 54:
                    return _ctx.finish(51);
                case 55:
                    return _ctx.finish(48);
                case 56:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                2,
                44,
                48,
                56
            ],
            [
                49,
                ,
                51,
                55
            ]
        ]);
    }));
    return _toIterator.apply(this, arguments);
}
var _Blob = function() {
    var tmp = Symbol.toStringTag, tmp1 = Symbol.hasInstance;
    var Blob1 = /*#__PURE__*/ function() {
        function Blob1() {
            var blobParts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            _classCallCheck$g(this, Blob1);
            /** @type {Array.<(Blob|Uint8Array)>} */ _parts.set(this, {
                writable: true,
                value: []
            });
            _type.set(this, {
                writable: true,
                value: ''
            });
            _size.set(this, {
                writable: true,
                value: 0
            });
            if (typeof blobParts !== 'object' || blobParts === null) {
                throw new TypeError('Failed to construct \'Blob\': The provided value cannot be converted to a sequence.');
            }
            if (typeof blobParts[Symbol.iterator] !== 'function') {
                throw new TypeError('Failed to construct \'Blob\': The object must have a callable @@iterator property.');
            }
            if (typeof options !== 'object' && typeof options !== 'function') {
                throw new TypeError('Failed to construct \'Blob\': parameter 2 cannot convert to dictionary.');
            }
            if (options === null) options = {};
            var encoder = new TextEncoder();
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = blobParts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var element = _step.value;
                    var part = void 0;
                    if (ArrayBuffer.isView(element)) {
                        part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
                    } else if (_instanceof$6(element, ArrayBuffer)) {
                        part = new Uint8Array(element.slice(0));
                    } else if (_instanceof$6(element, Blob1)) {
                        part = element;
                    } else {
                        part = encoder.encode(element);
                    }
                    _classPrivateFieldSet$2(this, _size, _classPrivateFieldGet$2(this, _size) + (ArrayBuffer.isView(part) ? part.byteLength : part.size));
                    _classPrivateFieldGet$2(this, _parts).push(part);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            var type = options.type === undefined ? '' : String(options.type);
            _classPrivateFieldSet$2(this, _type, /^[\x20-\x7E]*$/.test(type) ? type : '');
        }
        _createClass$e(Blob1, [
            {
                key: "size",
                get: /**
   * The Blob interface's size property returns the
   * size of the Blob in bytes.
   */ function get() {
                    return _classPrivateFieldGet$2(this, _size);
                }
            },
            {
                key: "type",
                get: /**
   * The type property of a Blob object returns the MIME type of the file.
   */ function get() {
                    return _classPrivateFieldGet$2(this, _type);
                }
            },
            {
                key: "text",
                value: /**
   * The text() method in the Blob interface returns a Promise
   * that resolves with a string containing the contents of
   * the blob, interpreted as UTF-8.
   *
   * @return {Promise<string>}
   */ function text() {
                    return _asyncToGenerator$4(regeneratorRuntime__default["default"].mark(function _callee() {
                        var decoder, str, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, part;
                        return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    decoder = new TextDecoder();
                                    str = '';
                                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                                    _ctx.prev = 3;
                                    _iterator = _asyncIterator$1(toIterator(_classPrivateFieldGet$2(this, _parts), false));
                                case 5:
                                    _ctx.next = 7;
                                    return _iterator.next();
                                case 7:
                                    if (!(_iteratorAbruptCompletion = !(_step = _ctx.sent).done)) {
                                        _ctx.next = 12;
                                        break;
                                    }
                                    {
                                        _value = _step.value;
                                        part = _value;
                                        str += decoder.decode(part, {
                                            stream: true
                                        });
                                    }
                                case 9:
                                    _iteratorAbruptCompletion = false;
                                    _ctx.next = 5;
                                    break;
                                case 12:
                                    _ctx.next = 18;
                                    break;
                                case 14:
                                    _ctx.prev = 14;
                                    _ctx.t0 = _ctx["catch"](3);
                                    _didIteratorError = true;
                                    _iteratorError = _ctx.t0;
                                case 18:
                                    _ctx.prev = 18;
                                    _ctx.prev = 19;
                                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                                        _ctx.next = 23;
                                        break;
                                    }
                                    _ctx.next = 23;
                                    return _iteratorError.return();
                                case 23:
                                    _ctx.prev = 23;
                                    if (!_didIteratorError) {
                                        _ctx.next = 26;
                                        break;
                                    }
                                    throw _iteratorError;
                                case 26:
                                    return _ctx.finish(23);
                                case 27:
                                    return _ctx.finish(18);
                                case 28:
                                    // Remaining
                                    str += decoder.decode();
                                    return _ctx.abrupt("return", str);
                                case 30:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee, this, [
                            [
                                3,
                                14,
                                18,
                                28
                            ],
                            [
                                19,
                                ,
                                23,
                                27
                            ]
                        ]);
                    }).bind(this))();
                }
            },
            {
                key: "arrayBuffer",
                value: /**
   * The arrayBuffer() method in the Blob interface returns a
   * Promise that resolves with the contents of the blob as
   * binary data contained in an ArrayBuffer.
   *
   * @return {Promise<ArrayBuffer>}
   */ function arrayBuffer() {
                    return _asyncToGenerator$4(regeneratorRuntime__default["default"].mark(function _callee() {
                        var data, offset, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, chunk;
                        return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    data = new Uint8Array(this.size);
                                    offset = 0;
                                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                                    _ctx.prev = 3;
                                    _iterator = _asyncIterator$1(toIterator(_classPrivateFieldGet$2(this, _parts), false));
                                case 5:
                                    _ctx.next = 7;
                                    return _iterator.next();
                                case 7:
                                    if (!(_iteratorAbruptCompletion = !(_step = _ctx.sent).done)) {
                                        _ctx.next = 12;
                                        break;
                                    }
                                    {
                                        _value = _step.value;
                                        chunk = _value;
                                        data.set(chunk, offset);
                                        offset += chunk.length;
                                    }
                                case 9:
                                    _iteratorAbruptCompletion = false;
                                    _ctx.next = 5;
                                    break;
                                case 12:
                                    _ctx.next = 18;
                                    break;
                                case 14:
                                    _ctx.prev = 14;
                                    _ctx.t0 = _ctx["catch"](3);
                                    _didIteratorError = true;
                                    _iteratorError = _ctx.t0;
                                case 18:
                                    _ctx.prev = 18;
                                    _ctx.prev = 19;
                                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                                        _ctx.next = 23;
                                        break;
                                    }
                                    _ctx.next = 23;
                                    return _iteratorError.return();
                                case 23:
                                    _ctx.prev = 23;
                                    if (!_didIteratorError) {
                                        _ctx.next = 26;
                                        break;
                                    }
                                    throw _iteratorError;
                                case 26:
                                    return _ctx.finish(23);
                                case 27:
                                    return _ctx.finish(18);
                                case 28:
                                    return _ctx.abrupt("return", data.buffer);
                                case 29:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee, this, [
                            [
                                3,
                                14,
                                18,
                                28
                            ],
                            [
                                19,
                                ,
                                23,
                                27
                            ]
                        ]);
                    }).bind(this))();
                }
            },
            {
                key: "stream",
                value: function stream() {
                    var it = toIterator(_classPrivateFieldGet$2(this, _parts), true);
                    return new globalThis.ReadableStream({
                        type: 'bytes',
                        pull: function pull(ctrl) {
                            return _asyncToGenerator$4(regeneratorRuntime__default["default"].mark(function _callee() {
                                var chunk;
                                return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx) {
                                    while(1)switch(_ctx.prev = _ctx.next){
                                        case 0:
                                            _ctx.next = 2;
                                            return it.next();
                                        case 2:
                                            chunk = _ctx.sent;
                                            chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
                                        case 4:
                                        case "end":
                                            return _ctx.stop();
                                    }
                                }, _callee);
                            }))();
                        },
                        cancel: function cancel() {
                            return _asyncToGenerator$4(regeneratorRuntime__default["default"].mark(function _callee() {
                                return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx) {
                                    while(1)switch(_ctx.prev = _ctx.next){
                                        case 0:
                                            _ctx.next = 2;
                                            return it.return();
                                        case 2:
                                        case "end":
                                            return _ctx.stop();
                                    }
                                }, _callee);
                            }))();
                        }
                    });
                }
            },
            {
                /**
   * The Blob interface's slice() method creates and returns a
   * new Blob object which contains data from a subset of the
   * blob on which it's called.
   *
   * @param {number} [start]
   * @param {number} [end]
   * @param {string} [type]
   */ key: "slice",
                value: function slice() {
                    var start = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, end = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.size, type = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '';
                    var size = this.size;
                    var relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
                    var relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
                    var span = Math.max(relativeEnd - relativeStart, 0);
                    var parts = _classPrivateFieldGet$2(this, _parts);
                    var blobParts = [];
                    var added = 0;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var part = _step.value;
                            // don't add the overflow to new blobParts
                            if (added >= span) {
                                break;
                            }
                            var size1 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
                            if (relativeStart && size1 <= relativeStart) {
                                // Skip the beginning and change the relative
                                // start & end position as we skip the unwanted parts
                                relativeStart -= size1;
                                relativeEnd -= size1;
                            } else {
                                var chunk = void 0;
                                if (ArrayBuffer.isView(part)) {
                                    chunk = part.subarray(relativeStart, Math.min(size1, relativeEnd));
                                    added += chunk.byteLength;
                                } else {
                                    chunk = part.slice(relativeStart, Math.min(size1, relativeEnd));
                                    added += chunk.size;
                                }
                                relativeEnd -= size1;
                                blobParts.push(chunk);
                                relativeStart = 0 // All next sequential parts should start at 0
                                ;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    var blob = new Blob1([], {
                        type: String(type).toLowerCase()
                    });
                    _classPrivateFieldSet$2(blob, _size, span);
                    _classPrivateFieldSet$2(blob, _parts, blobParts);
                    return blob;
                }
            },
            {
                key: tmp,
                get: function get() {
                    return 'Blob';
                }
            }
        ], [
            {
                key: tmp1,
                value: function value(object) {
                    return object && typeof object === 'object' && typeof object.constructor === 'function' && (typeof object.stream === 'function' || typeof object.arrayBuffer === 'function') && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
                }
            }
        ]);
        return Blob1;
    }();
    var _parts = new WeakMap();
    var _type = new WeakMap();
    var _size = new WeakMap();
    return Blob1;
}();
Object.defineProperties(_Blob.prototype, {
    size: {
        enumerable: true
    },
    type: {
        enumerable: true
    },
    slice: {
        enumerable: true
    }
});
/** @type {typeof globalThis.Blob} */ var Blob = _Blob;

function _assertThisInitialized$9(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck$f(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _classPrivateFieldGet$1(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver).value;
}
function _classPrivateFieldSet$1(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    var descriptor = privateMap.get(receiver);
    if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
    return value;
}
function isNativeReflectConstruct$3() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct$3(Parent, args, Class) {
    if (isNativeReflectConstruct$3()) {
        _construct$3 = Reflect.construct;
    } else {
        _construct$3 = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf$9(instance, Class.prototype);
            return instance;
        };
    }
    return _construct$3.apply(null, arguments);
}
function _defineProperties$d(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$d(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$d(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$d(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf$9(o) {
    _getPrototypeOf$9 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$9(o);
}
function _inherits$9(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf$9(subClass, superClass);
}
function _isNativeFunction$3(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possibleConstructorReturn$9(self, call) {
    if (call && (_typeof$9(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized$9(self);
}
function _setPrototypeOf$9(o, p) {
    _setPrototypeOf$9 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf$9(o, p);
}
var _typeof$9 = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper$3(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper$3 = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction$3(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct$3(Class, arguments, _getPrototypeOf$9(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf$9(Wrapper, Class);
    };
    return _wrapNativeSuper$3(Class);
}
function _isNativeReflectConstruct$9() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper$9(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$9();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf$9(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf$9(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn$9(this, result);
    };
}
var _File = function() {
    var tmp = Symbol.toStringTag;
    var File1 = /*#__PURE__*/ function(Blob1) {
        _inherits$9(File1, Blob1);
        var _super = _createSuper$9(File1);
        function File1(fileBits, fileName) {
            var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            _classCallCheck$f(this, File1);
            var _this;
            if (arguments.length < 2) {
                throw new TypeError("Failed to construct 'File': 2 arguments required, but only ".concat(arguments.length, " present."));
            }
            _this = _super.call(this, fileBits, options);
            _lastModified.set(_assertThisInitialized$9(_this), {
                writable: true,
                value: 0
            });
            _name.set(_assertThisInitialized$9(_this), {
                writable: true,
                value: ''
            });
            if (options === null) options = {};
            // Simulate WebIDL type casting for NaN value in lastModified option.
            var lastModified = options.lastModified === undefined ? Date.now() : Number(options.lastModified);
            if (!Number.isNaN(lastModified)) {
                _classPrivateFieldSet$1(_assertThisInitialized$9(_this), _lastModified, lastModified);
            }
            _classPrivateFieldSet$1(_assertThisInitialized$9(_this), _name, String(fileName));
            return _this;
        }
        _createClass$d(File1, [
            {
                key: "name",
                get: function get() {
                    return _classPrivateFieldGet$1(this, _name);
                }
            },
            {
                key: "lastModified",
                get: function get() {
                    return _classPrivateFieldGet$1(this, _lastModified);
                }
            },
            {
                key: tmp,
                get: function get() {
                    return 'File';
                }
            }
        ]);
        return File1;
    }(_wrapNativeSuper$3(Blob));
    var _lastModified = new WeakMap();
    var _name = new WeakMap();
    return File1;
}();
/** @type {typeof globalThis.File} */ // @ts-ignore
var File = _File;

function _arrayLikeToArray$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i1 = 0, arr2 = new Array(len); i1 < len; i1++)arr2[i1] = arr[i1];
    return arr2;
}
function _arrayWithHoles$2(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles$1(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
}
function _classCallCheck$e(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver).value;
}
function _classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    var descriptor = privateMap.get(receiver);
    if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
    return value;
}
function _defineProperties$c(target, props) {
    for(var i1 = 0; i1 < props.length; i1++){
        var descriptor = props[i1];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$c(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$c(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$c(Constructor, staticProps);
    return Constructor;
}
function _iterableToArray$1(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit$2(arr, i1) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i1 && _arr.length === i1) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$2(arr, i1) {
    return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i1) || _unsupportedIterableToArray$2(arr, i1) || _nonIterableRest$2();
}
function _toConsumableArray$1(arr) {
    return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$1();
}
function _unsupportedIterableToArray$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}
var t = Symbol.toStringTag, i = Symbol.iterator, h = Symbol.hasInstance, r = Math.random, m = 'append,set,get,getAll,delete,keys,values,entries,forEach,constructor'.split(','), f = function(a, b, c) {
    return a += '', /^(Blob|File)$/.test(b && b[t]) ? [
        (c = c !== void 0 ? c + '' : b[t] == 'File' ? b.name : 'blob', a),
        b.name !== c || b[t] == 'blob' ? new File([
            b
        ], c, b) : b
    ] : [
        a,
        b + ''
    ];
}, e = function(c, f1) {
    return (f1 ? c : c.replace(/\r?\n|\r/g, '\r\n')).replace(/\n/g, '%0A').replace(/\r/g, '%0D').replace(/"/g, '%22');
}, x = function(n, a, e1) {
    if (a.length < e1) {
        throw new TypeError("Failed to execute '".concat(n, "' on 'FormData': ").concat(e1, " arguments required, but only ").concat(a.length, " present."));
    }
};
/** @type {typeof globalThis.FormData} */ var FormData = function() {
    var tmp = t, tmp1 = i, tmp2 = h;
    var FormData1 = /*#__PURE__*/ function() {
        function FormData1() {
            for(var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++){
                a[_key] = arguments[_key];
            }
            _classCallCheck$e(this, FormData1);
            _d.set(this, {
                writable: true,
                value: []
            });
            if (a.length) throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.");
        }
        _createClass$c(FormData1, [
            {
                key: tmp,
                get: function get() {
                    return 'FormData';
                }
            },
            {
                key: tmp1,
                value: function value() {
                    return this.entries();
                }
            },
            {
                key: "append",
                value: function append() {
                    for(var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++){
                        a[_key] = arguments[_key];
                    }
                    x('append', arguments, 2);
                    _classPrivateFieldGet(this, _d).push(f.apply(void 0, _toConsumableArray$1(a)));
                }
            },
            {
                key: "delete",
                value: function _delete(a) {
                    x('delete', arguments, 1);
                    a += '';
                    _classPrivateFieldSet(this, _d, _classPrivateFieldGet(this, _d).filter(function(param) {
                        var _param = _slicedToArray$2(param, 1), b = _param[0];
                        return b !== a;
                    }));
                }
            },
            {
                key: "get",
                value: function get(a) {
                    x('get', arguments, 1);
                    a += '';
                    for(var b = _classPrivateFieldGet(this, _d), l = b.length, c = 0; c < l; c++)if (b[c][0] === a) return b[c][1];
                    return null;
                }
            },
            {
                key: "getAll",
                value: function getAll(a, b) {
                    x('getAll', arguments, 1);
                    b = [];
                    a += '';
                    _classPrivateFieldGet(this, _d).forEach(function(c) {
                        return c[0] === a && b.push(c[1]);
                    });
                    return b;
                }
            },
            {
                key: "has",
                value: function has(a) {
                    x('has', arguments, 1);
                    a += '';
                    return _classPrivateFieldGet(this, _d).some(function(b) {
                        return b[0] === a;
                    });
                }
            },
            {
                key: "forEach",
                value: function forEach(a, b) {
                    x('forEach', arguments, 1);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _value = _slicedToArray$2(_step.value, 2), c = _value[0], d = _value[1];
                            a.call(b, d, c, this);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
            },
            {
                key: "set",
                value: function set() {
                    for(var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++){
                        a[_key] = arguments[_key];
                    }
                    x('set', arguments, 2);
                    var b = [], c = !0;
                    a = f.apply(void 0, _toConsumableArray$1(a));
                    _classPrivateFieldGet(this, _d).forEach(function(d) {
                        d[0] === a[0] ? c && (c = !b.push(a)) : b.push(d);
                    });
                    c && b.push(a);
                    _classPrivateFieldSet(this, _d, b);
                }
            },
            {
                key: "entries",
                value: regeneratorRuntime__default["default"].mark(function entries() {
                    return regeneratorRuntime__default["default"].wrap(function entries$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                return _ctx.delegateYield(_classPrivateFieldGet(this, _d), "t0", 1);
                            case 1:
                            case "end":
                                return _ctx.stop();
                        }
                    }, entries, this);
                })
            },
            {
                key: "keys",
                value: regeneratorRuntime__default["default"].mark(function keys() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, a;
                    return regeneratorRuntime__default["default"].wrap(function keys$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _ctx.prev = 1;
                                _iterator = this[Symbol.iterator]();
                            case 3:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                    _ctx.next = 10;
                                    break;
                                }
                                _value = _slicedToArray$2(_step.value, 1), a = _value[0];
                                _ctx.next = 7;
                                return a;
                            case 7:
                                _iteratorNormalCompletion = true;
                                _ctx.next = 3;
                                break;
                            case 10:
                                _ctx.next = 16;
                                break;
                            case 12:
                                _ctx.prev = 12;
                                _ctx.t0 = _ctx["catch"](1);
                                _didIteratorError = true;
                                _iteratorError = _ctx.t0;
                            case 16:
                                _ctx.prev = 16;
                                _ctx.prev = 17;
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            case 19:
                                _ctx.prev = 19;
                                if (!_didIteratorError) {
                                    _ctx.next = 22;
                                    break;
                                }
                                throw _iteratorError;
                            case 22:
                                return _ctx.finish(19);
                            case 23:
                                return _ctx.finish(16);
                            case 24:
                            case "end":
                                return _ctx.stop();
                        }
                    }, keys, this, [
                        [
                            1,
                            12,
                            16,
                            24
                        ],
                        [
                            17,
                            ,
                            19,
                            23
                        ]
                    ]);
                })
            },
            {
                key: "values",
                value: regeneratorRuntime__default["default"].mark(function values() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, a;
                    return regeneratorRuntime__default["default"].wrap(function values$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _ctx.prev = 1;
                                _iterator = this[Symbol.iterator]();
                            case 3:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                    _ctx.next = 10;
                                    break;
                                }
                                _value = _slicedToArray$2(_step.value, 2), a = _value[1];
                                _ctx.next = 7;
                                return a;
                            case 7:
                                _iteratorNormalCompletion = true;
                                _ctx.next = 3;
                                break;
                            case 10:
                                _ctx.next = 16;
                                break;
                            case 12:
                                _ctx.prev = 12;
                                _ctx.t0 = _ctx["catch"](1);
                                _didIteratorError = true;
                                _iteratorError = _ctx.t0;
                            case 16:
                                _ctx.prev = 16;
                                _ctx.prev = 17;
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            case 19:
                                _ctx.prev = 19;
                                if (!_didIteratorError) {
                                    _ctx.next = 22;
                                    break;
                                }
                                throw _iteratorError;
                            case 22:
                                return _ctx.finish(19);
                            case 23:
                                return _ctx.finish(16);
                            case 24:
                            case "end":
                                return _ctx.stop();
                        }
                    }, values, this, [
                        [
                            1,
                            12,
                            16,
                            24
                        ],
                        [
                            17,
                            ,
                            19,
                            23
                        ]
                    ]);
                })
            }
        ], [
            {
                key: tmp2,
                value: function value(o) {
                    return o && typeof o === 'object' && o[t] === 'FormData' && !m.some(function(m1) {
                        return typeof o[m1] != 'function';
                    });
                }
            }
        ]);
        return FormData1;
    }();
    var _d = new WeakMap();
    return FormData1;
}();
/** @param {FormData} F */ function formDataToBlob(F1) {
    var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Blob;
    var b = "".concat(r()).concat(r()).replace(/\./g, '').slice(-28).padStart(32, '-'), c = [], p = "--".concat(b, "\r\nContent-Disposition: form-data; name=\"");
    F1.forEach(function(v, n) {
        return typeof v == 'string' ? c.push(p + e(n) + "\"\r\n\r\n".concat(v.replace(/\r(?!\n)|(?<!\r)\n/g, '\r\n'), "\r\n")) : c.push(p + e(n) + "\"; filename=\"".concat(e(v.name, 1), "\"\r\nContent-Type: ").concat(v.type || "application/octet-stream", "\r\n\r\n"), v, '\r\n');
    });
    c.push("--".concat(b, "--"));
    return new B(c, {
        type: "multipart/form-data; boundary=" + b
    });
}

function _assertThisInitialized$8(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck$d(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct$2() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct$2(Parent, args, Class) {
    if (isNativeReflectConstruct$2()) {
        _construct$2 = Reflect.construct;
    } else {
        _construct$2 = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf$8(instance, Class.prototype);
            return instance;
        };
    }
    return _construct$2.apply(null, arguments);
}
function _defineProperties$b(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$b(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$b(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$b(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf$8(o) {
    _getPrototypeOf$8 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$8(o);
}
function _inherits$8(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf$8(subClass, superClass);
}
function _isNativeFunction$2(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possibleConstructorReturn$8(self, call) {
    if (call && (_typeof$8(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized$8(self);
}
function _setPrototypeOf$8(o, p) {
    _setPrototypeOf$8 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf$8(o, p);
}
var _typeof$8 = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper$2(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper$2 = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction$2(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct$2(Class, arguments, _getPrototypeOf$8(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf$8(Wrapper, Class);
    };
    return _wrapNativeSuper$2(Class);
}
function _isNativeReflectConstruct$8() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper$8(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$8();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf$8(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf$8(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn$8(this, result);
    };
}
var tmp$4 = Symbol.toStringTag;
var FetchBaseError = /*#__PURE__*/ function(Error1) {
    _inherits$8(FetchBaseError, Error1);
    var _super = _createSuper$8(FetchBaseError);
    function FetchBaseError(message, type) {
        _classCallCheck$d(this, FetchBaseError);
        var _this;
        _this = _super.call(this, message);
        // Hide custom error implementation details from end-users
        Error.captureStackTrace(_assertThisInitialized$8(_this), _this.constructor);
        _this.type = type;
        return _this;
    }
    _createClass$b(FetchBaseError, [
        {
            key: "name",
            get: function get() {
                return this.constructor.name;
            }
        },
        {
            key: tmp$4,
            get: function get() {
                return this.constructor.name;
            }
        }
    ]);
    return FetchBaseError;
}(_wrapNativeSuper$2(Error));

function _assertThisInitialized$7(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck$c(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf$7(o) {
    _getPrototypeOf$7 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$7(o);
}
function _inherits$7(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf$7(subClass, superClass);
}
function _possibleConstructorReturn$7(self, call) {
    if (call && (_typeof$7(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized$7(self);
}
function _setPrototypeOf$7(o, p) {
    _setPrototypeOf$7 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf$7(o, p);
}
var _typeof$7 = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct$7() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper$7(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$7();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf$7(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf$7(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn$7(this, result);
    };
}
/**
 * @typedef {{ address?: string, code: string, dest?: string, errno: number, info?: object, message: string, path?: string, port?: number, syscall: string}} SystemError
*/ /**
 * FetchError interface for operational errors
 */ var FetchError = /*#__PURE__*/ function(FetchBaseError1) {
    _inherits$7(FetchError, FetchBaseError1);
    var _super = _createSuper$7(FetchError);
    function FetchError(message, type, systemError) {
        _classCallCheck$c(this, FetchError);
        var _this;
        _this = _super.call(this, message, type);
        // When err.type is `system`, err.erroredSysCall contains system error and err.code contains system error code
        if (systemError) {
            // eslint-disable-next-line no-multi-assign
            _this.code = _this.errno = systemError.code;
            _this.erroredSysCall = systemError.syscall;
        }
        return _this;
    }
    return FetchError;
}(FetchBaseError);

/**
 * Is.js
 *
 * Object type checks.
 */ var NAME = Symbol.toStringTag;
/**
 * Check if `obj` is a URLSearchParams object
 * ref: https://github.com/node-fetch/node-fetch/issues/296#issuecomment-307598143
 * @param {*} object - Object to check for
 * @return {boolean}
 */ var isURLSearchParameters = function(object) {
    return typeof object === 'object' && typeof object.append === 'function' && typeof object.delete === 'function' && typeof object.get === 'function' && typeof object.getAll === 'function' && typeof object.has === 'function' && typeof object.set === 'function' && typeof object.sort === 'function' && object[NAME] === 'URLSearchParams';
};
/**
 * Check if `object` is a W3C `Blob` object (which `File` inherits from)
 * @param {*} object - Object to check for
 * @return {boolean}
 */ var isBlob = function(object) {
    return object && typeof object === 'object' && typeof object.arrayBuffer === 'function' && typeof object.type === 'string' && typeof object.stream === 'function' && typeof object.constructor === 'function' && /^(Blob|File)$/.test(object[NAME]);
};
/**
 * Check if `obj` is an instance of AbortSignal.
 * @param {*} object - Object to check for
 * @return {boolean}
 */ var isAbortSignal = function(object) {
    return typeof object === 'object' && (object[NAME] === 'AbortSignal' || object[NAME] === 'EventTarget');
};

function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr)) return arr;
}
function _asyncIterator(iterable) {
    var method;
    if (typeof Symbol === "function") {
        if (Symbol.asyncIterator) {
            method = iterable[Symbol.asyncIterator];
            if (method != null) return method.call(iterable);
        }
        if (Symbol.iterator) {
            method = iterable[Symbol.iterator];
            if (method != null) return method.call(iterable);
        }
    }
    throw new TypeError("Object is not async iterable");
}
function asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator$3(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _classCallCheck$b(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties$a(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$a(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$a(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$a(Constructor, staticProps);
    return Constructor;
}
function _instanceof$5(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArrayLimit$1(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$1(arr, i) {
    return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}
function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}
var INTERNALS$2 = Symbol('Body internals');
var Body = /*#__PURE__*/ function() {
    function Body(body) {
        var ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _size = ref.size, size = _size === void 0 ? 0 : _size;
        _classCallCheck$b(this, Body);
        var boundary = null;
        if (body === null) {
            // Body is undefined or null
            body = null;
        } else if (isURLSearchParameters(body)) {
            // Body is a URLSearchParams
            body = buffer.Buffer.from(body.toString());
        } else if (isBlob(body)) ; else if (buffer.Buffer.isBuffer(body)) ; else if (node_util.types.isAnyArrayBuffer(body)) {
            // Body is ArrayBuffer
            body = buffer.Buffer.from(body);
        } else if (ArrayBuffer.isView(body)) {
            // Body is ArrayBufferView
            body = buffer.Buffer.from(body.buffer, body.byteOffset, body.byteLength);
        } else if (_instanceof$5(body, Stream__default["default"])) ; else if (_instanceof$5(body, FormData)) {
            // Body is FormData
            body = formDataToBlob(body);
            boundary = body.type.split('=')[1];
        } else {
            // None of the above
            // coerce to string then buffer
            body = buffer.Buffer.from(String(body));
        }
        var stream = body;
        if (buffer.Buffer.isBuffer(body)) {
            stream = Stream__default["default"].Readable.from(body);
        } else if (isBlob(body)) {
            stream = Stream__default["default"].Readable.from(body.stream());
        }
        this[INTERNALS$2] = {
            body: body,
            stream: stream,
            boundary: boundary,
            disturbed: false,
            error: null
        };
        this.size = size;
        if (_instanceof$5(body, Stream__default["default"])) {
            var _this = this;
            body.on('error', function(error_) {
                var error = _instanceof$5(error_, FetchBaseError) ? error_ : new FetchError("Invalid response body while trying to fetch ".concat(_this.url, ": ").concat(error_.message), 'system', error_);
                _this[INTERNALS$2].error = error;
            });
        }
    }
    _createClass$a(Body, [
        {
            key: "body",
            get: function get() {
                return this[INTERNALS$2].stream;
            }
        },
        {
            key: "bodyUsed",
            get: function get() {
                return this[INTERNALS$2].disturbed;
            }
        },
        {
            key: "arrayBuffer",
            value: /**
	 * Decode response as ArrayBuffer
	 *
	 * @return  Promise
	 */ function arrayBuffer() {
                return _asyncToGenerator$3(regeneratorRuntime__default["default"].mark(function _callee() {
                    var ref, buffer, byteOffset, byteLength;
                    return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return consumeBody(this);
                            case 2:
                                ref = _ctx.sent;
                                buffer = ref.buffer;
                                byteOffset = ref.byteOffset;
                                byteLength = ref.byteLength;
                                return _ctx.abrupt("return", buffer.slice(byteOffset, byteOffset + byteLength));
                            case 7:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this);
                }).bind(this))();
            }
        },
        {
            key: "formData",
            value: function formData1() {
                return _asyncToGenerator$3(regeneratorRuntime__default["default"].mark(function _callee() {
                    var ct, formData, parameters, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, name, value, toFormData;
                    return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                ct = this.headers.get('content-type');
                                if (!ct.startsWith('application/x-www-form-urlencoded')) {
                                    _ctx.next = 26;
                                    break;
                                }
                                formData = new FormData();
                                _ctx.t0 = URLSearchParams;
                                _ctx.next = 6;
                                return this.text();
                            case 6:
                                _ctx.t1 = _ctx.sent;
                                parameters = new _ctx.t0(_ctx.t1);
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _ctx.prev = 9;
                                for(_iterator = parameters[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    _value = _slicedToArray$1(_step.value, 2), name = _value[0], value = _value[1];
                                    formData.append(name, value);
                                }
                                _ctx.next = 17;
                                break;
                            case 13:
                                _ctx.prev = 13;
                                _ctx.t2 = _ctx["catch"](9);
                                _didIteratorError = true;
                                _iteratorError = _ctx.t2;
                            case 17:
                                _ctx.prev = 17;
                                _ctx.prev = 18;
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            case 20:
                                _ctx.prev = 20;
                                if (!_didIteratorError) {
                                    _ctx.next = 23;
                                    break;
                                }
                                throw _iteratorError;
                            case 23:
                                return _ctx.finish(20);
                            case 24:
                                return _ctx.finish(17);
                            case 25:
                                return _ctx.abrupt("return", formData);
                            case 26:
                                _ctx.next = 28;
                                return Promise.resolve().then(function () { return require('./multipart-parser-45a28346.js'); });
                            case 28:
                                toFormData = _ctx.sent.toFormData;
                                return _ctx.abrupt("return", toFormData(this.body, ct));
                            case 30:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this, [
                        [
                            9,
                            13,
                            17,
                            25
                        ],
                        [
                            18,
                            ,
                            20,
                            24
                        ]
                    ]);
                }).bind(this))();
            }
        },
        {
            key: "blob",
            value: /**
	 * Return raw response as Blob
	 *
	 * @return Promise
	 */ function blob() {
                return _asyncToGenerator$3(regeneratorRuntime__default["default"].mark(function _callee() {
                    var ct, buf;
                    return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                ct = this.headers && this.headers.get('content-type') || this[INTERNALS$2].body && this[INTERNALS$2].body.type || '';
                                _ctx.next = 3;
                                return this.buffer();
                            case 3:
                                buf = _ctx.sent;
                                return _ctx.abrupt("return", new Blob([
                                    buf
                                ], {
                                    type: ct
                                }));
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this);
                }).bind(this))();
            }
        },
        {
            key: "json",
            value: /**
	 * Decode response as json
	 *
	 * @return  Promise
	 */ function json() {
                return _asyncToGenerator$3(regeneratorRuntime__default["default"].mark(function _callee() {
                    var buffer;
                    return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return consumeBody(this);
                            case 2:
                                buffer = _ctx.sent;
                                return _ctx.abrupt("return", JSON.parse(buffer.toString()));
                            case 4:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this);
                }).bind(this))();
            }
        },
        {
            key: "text",
            value: /**
	 * Decode response as text
	 *
	 * @return  Promise
	 */ function text() {
                return _asyncToGenerator$3(regeneratorRuntime__default["default"].mark(function _callee() {
                    var buffer;
                    return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return consumeBody(this);
                            case 2:
                                buffer = _ctx.sent;
                                return _ctx.abrupt("return", buffer.toString());
                            case 4:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this);
                }).bind(this))();
            }
        },
        {
            /**
	 * Decode response as buffer (non-spec api)
	 *
	 * @return  Promise
	 */ key: "buffer",
            value: function buffer() {
                return consumeBody(this);
            }
        }
    ]);
    return Body;
}();
Body.prototype.buffer = node_util.deprecate(Body.prototype.buffer, 'Please use \'response.arrayBuffer()\' instead of \'response.buffer()\'', 'node-fetch#buffer');
// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
    body: {
        enumerable: true
    },
    bodyUsed: {
        enumerable: true
    },
    arrayBuffer: {
        enumerable: true
    },
    blob: {
        enumerable: true
    },
    json: {
        enumerable: true
    },
    text: {
        enumerable: true
    }
});
function consumeBody(data) {
    return _consumeBody.apply(this, arguments);
}
function _consumeBody() {
    _consumeBody = /**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return Promise
 */ _asyncToGenerator$3(regeneratorRuntime__default["default"].mark(function _callee(data) {
        var body, accum, accumBytes, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, chunk, error, error_;
        return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    if (!data[INTERNALS$2].disturbed) {
                        _ctx.next = 2;
                        break;
                    }
                    throw new TypeError("body used already for: ".concat(data.url));
                case 2:
                    data[INTERNALS$2].disturbed = true;
                    if (!data[INTERNALS$2].error) {
                        _ctx.next = 5;
                        break;
                    }
                    throw data[INTERNALS$2].error;
                case 5:
                    body = data.body;
                    if (!(body === null)) {
                        _ctx.next = 8;
                        break;
                    }
                    return _ctx.abrupt("return", buffer.Buffer.alloc(0));
                case 8:
                    if (_instanceof$5(body, Stream__default["default"])) {
                        _ctx.next = 10;
                        break;
                    }
                    return _ctx.abrupt("return", buffer.Buffer.alloc(0));
                case 10:
                    accum = [];
                    accumBytes = 0;
                    _ctx.prev = 12;
                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                    _ctx.prev = 14;
                    _iterator = _asyncIterator(body);
                case 16:
                    _ctx.next = 18;
                    return _iterator.next();
                case 18:
                    if (!(_iteratorAbruptCompletion = !(_step = _ctx.sent).done)) {
                        _ctx.next = 30;
                        break;
                    }
                    _value = _step.value;
                    chunk = _value;
                    if (!(data.size > 0 && accumBytes + chunk.length > data.size)) {
                        _ctx.next = 25;
                        break;
                    }
                    error = new FetchError("content size at ".concat(data.url, " over limit: ").concat(data.size), 'max-size');
                    body.destroy(error);
                    throw error;
                case 25:
                    accumBytes += chunk.length;
                    accum.push(chunk);
                case 27:
                    _iteratorAbruptCompletion = false;
                    _ctx.next = 16;
                    break;
                case 30:
                    _ctx.next = 36;
                    break;
                case 32:
                    _ctx.prev = 32;
                    _ctx.t0 = _ctx["catch"](14);
                    _didIteratorError = true;
                    _iteratorError = _ctx.t0;
                case 36:
                    _ctx.prev = 36;
                    _ctx.prev = 37;
                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                        _ctx.next = 41;
                        break;
                    }
                    _ctx.next = 41;
                    return _iteratorError.return();
                case 41:
                    _ctx.prev = 41;
                    if (!_didIteratorError) {
                        _ctx.next = 44;
                        break;
                    }
                    throw _iteratorError;
                case 44:
                    return _ctx.finish(41);
                case 45:
                    return _ctx.finish(36);
                case 46:
                    _ctx.next = 52;
                    break;
                case 48:
                    _ctx.prev = 48;
                    _ctx.t1 = _ctx["catch"](12);
                    error_ = _instanceof$5(_ctx.t1, FetchBaseError) ? _ctx.t1 : new FetchError("Invalid response body while trying to fetch ".concat(data.url, ": ").concat(_ctx.t1.message), 'system', _ctx.t1);
                    throw error_;
                case 52:
                    if (!(body.readableEnded === true || body._readableState.ended === true)) {
                        _ctx.next = 64;
                        break;
                    }
                    _ctx.prev = 53;
                    if (!accum.every(function(c) {
                        return typeof c === 'string';
                    })) {
                        _ctx.next = 56;
                        break;
                    }
                    return _ctx.abrupt("return", buffer.Buffer.from(accum.join('')));
                case 56:
                    return _ctx.abrupt("return", buffer.Buffer.concat(accum, accumBytes));
                case 59:
                    _ctx.prev = 59;
                    _ctx.t2 = _ctx["catch"](53);
                    throw new FetchError("Could not create Buffer from response body for ".concat(data.url, ": ").concat(_ctx.t2.message), 'system', _ctx.t2);
                case 62:
                    _ctx.next = 65;
                    break;
                case 64:
                    throw new FetchError("Premature close of server response while trying to fetch ".concat(data.url));
                case 65:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                12,
                48
            ],
            [
                14,
                32,
                36,
                46
            ],
            [
                37,
                ,
                41,
                45
            ],
            [
                53,
                59
            ]
        ]);
    }));
    return _consumeBody.apply(this, arguments);
}
/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed   instance       Response or Request instance
 * @param   String  highWaterMark  highWaterMark for both PassThrough body streams
 * @return  Mixed
 */ var clone = function(instance, highWaterMark) {
    var p1;
    var p2;
    var body = instance[INTERNALS$2].body;
    // Don't allow cloning a used body
    if (instance.bodyUsed) {
        throw new Error('cannot clone body after it is used');
    }
    // Check that body is a stream and not form-data object
    // note: we can't clone the form-data object without having it as a dependency
    if (_instanceof$5(body, Stream__default["default"]) && typeof body.getBoundary !== 'function') {
        // Tee instance body
        p1 = new Stream.PassThrough({
            highWaterMark: highWaterMark
        });
        p2 = new Stream.PassThrough({
            highWaterMark: highWaterMark
        });
        body.pipe(p1);
        body.pipe(p2);
        // Set instance body to teed body and return the other teed body
        instance[INTERNALS$2].stream = p1;
        body = p2;
    }
    return body;
};
var getNonSpecFormDataBoundary = node_util.deprecate(function(body) {
    return body.getBoundary();
}, 'form-data doesn\'t follow the spec and requires special treatment. Use alternative package', 'https://github.com/node-fetch/node-fetch/issues/1167');
/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param {any} body Any options.body input
 * @returns {string | null}
 */ var extractContentType = function(body, request) {
    // Body is null or undefined
    if (body === null) {
        return null;
    }
    // Body is string
    if (typeof body === 'string') {
        return 'text/plain;charset=UTF-8';
    }
    // Body is a URLSearchParams
    if (isURLSearchParameters(body)) {
        return 'application/x-www-form-urlencoded;charset=UTF-8';
    }
    // Body is blob
    if (isBlob(body)) {
        return body.type || null;
    }
    // Body is a Buffer (Buffer, ArrayBuffer or ArrayBufferView)
    if (buffer.Buffer.isBuffer(body) || node_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
        return null;
    }
    if (_instanceof$5(body, FormData)) {
        return "multipart/form-data; boundary=".concat(request[INTERNALS$2].boundary);
    }
    // Detect form data input from form-data module
    if (body && typeof body.getBoundary === 'function') {
        return "multipart/form-data;boundary=".concat(getNonSpecFormDataBoundary(body));
    }
    // Body is stream - can't really do much about this
    if (_instanceof$5(body, Stream__default["default"])) {
        return null;
    }
    // Body constructor defaults other things to string
    return 'text/plain;charset=UTF-8';
};
/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param {any} obj.body Body object from the Body instance.
 * @returns {number | null}
 */ var getTotalBytes = function(request) {
    var body = request[INTERNALS$2].body;
    // Body is null or undefined
    if (body === null) {
        return 0;
    }
    // Body is Blob
    if (isBlob(body)) {
        return body.size;
    }
    // Body is Buffer
    if (buffer.Buffer.isBuffer(body)) {
        return body.length;
    }
    // Detect form data input from form-data module
    if (body && typeof body.getLengthSync === 'function') {
        return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
    }
    // Body is stream
    return null;
};
/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param {Stream.Writable} dest The stream to write to.
 * @param obj.body Body object from the Body instance.
 * @returns {void}
 */ var writeToStream = function(dest, param) {
    var body = param.body;
    if (body === null) {
        // Body is null
        dest.end();
    } else {
        // Body is stream
        body.pipe(dest);
    }
};

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _assertThisInitialized$6(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck$a(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct$1(Parent, args, Class) {
    if (isNativeReflectConstruct$1()) {
        _construct$1 = Reflect.construct;
    } else {
        _construct$1 = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf$6(instance, Class.prototype);
            return instance;
        };
    }
    return _construct$1.apply(null, arguments);
}
function _defineProperties$9(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$9(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$9(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$9(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf$6(o) {
    _getPrototypeOf$6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$6(o);
}
function _inherits$6(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf$6(subClass, superClass);
}
function _instanceof$4(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _isNativeFunction$1(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possibleConstructorReturn$6(self, call) {
    if (call && (_typeof$6(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized$6(self);
}
function _setPrototypeOf$6(o, p) {
    _setPrototypeOf$6 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf$6(o, p);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof$6 = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _wrapNativeSuper$1(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper$1 = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction$1(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct$1(Class, arguments, _getPrototypeOf$6(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf$6(Wrapper, Class);
    };
    return _wrapNativeSuper$1(Class);
}
function _isNativeReflectConstruct$6() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper$6(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$6();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf$6(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf$6(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn$6(this, result);
    };
}
var validateHeaderName = typeof http__default["default"].validateHeaderName === 'function' ? http__default["default"].validateHeaderName : function(name) {
    if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
        var error = new TypeError("Header name must be a valid HTTP token [".concat(name, "]"));
        Object.defineProperty(error, 'code', {
            value: 'ERR_INVALID_HTTP_TOKEN'
        });
        throw error;
    }
};
var validateHeaderValue = typeof http__default["default"].validateHeaderValue === 'function' ? http__default["default"].validateHeaderValue : function(name, value) {
    if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
        var error = new TypeError("Invalid character in header content [\"".concat(name, "\"]"));
        Object.defineProperty(error, 'code', {
            value: 'ERR_INVALID_CHAR'
        });
        throw error;
    }
};
var tmp$3 = Symbol.toStringTag, tmp1 = Symbol.iterator, tmp2 = Symbol.for('nodejs.util.inspect.custom');
var Headers = /*#__PURE__*/ function(URLSearchParams1) {
    _inherits$6(Headers, URLSearchParams1);
    var _super = _createSuper$6(Headers);
    function Headers(init) {
        _classCallCheck$a(this, Headers);
        var _this;
        // Validate and normalize init object in [name, value(s)][]
        /** @type {string[][]} */ var result = [];
        if (_instanceof$4(init, Headers)) {
            var raw = init.raw();
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                var _loop = function(_iterator, _step) {
                    var _value = _slicedToArray(_step.value, 2), name = _value[0], values = _value[1];
                    var _result;
                    (_result = result).push.apply(_result, _toConsumableArray(values.map(function(value) {
                        return [
                            name,
                            value
                        ];
                    })));
                };
                for(var _iterator = Object.entries(raw)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop(_iterator, _step);
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        } else if (init == null) ; else if (typeof init === 'object' && !node_util.types.isBoxedPrimitive(init)) {
            var method = init[Symbol.iterator];
            // eslint-disable-next-line no-eq-null, eqeqeq
            if (method == null) {
                var // Record<ByteString, ByteString>
                _result1;
                (_result1 = result).push.apply(_result1, _toConsumableArray(Object.entries(init)));
            } else {
                if (typeof method !== 'function') {
                    throw new TypeError('Header pairs must be iterable');
                }
                // Sequence<sequence<ByteString>>
                // Note: per spec we have to first exhaust the lists then process them
                result = _toConsumableArray(init).map(function(pair) {
                    if (typeof pair !== 'object' || node_util.types.isBoxedPrimitive(pair)) {
                        throw new TypeError('Each header pair must be an iterable object');
                    }
                    return _toConsumableArray(pair);
                }).map(function(pair) {
                    if (pair.length !== 2) {
                        throw new TypeError('Each header pair must be a name/value tuple');
                    }
                    return _toConsumableArray(pair);
                });
            }
        } else {
            throw new TypeError('Failed to construct \'Headers\': The provided value is not of type \'(sequence<sequence<ByteString>> or record<ByteString, ByteString>)');
        }
        // Validate and lowercase
        result = result.length > 0 ? result.map(function(param) {
            var _param = _slicedToArray(param, 2), name = _param[0], value = _param[1];
            validateHeaderName(name);
            validateHeaderValue(name, String(value));
            return [
                String(name).toLowerCase(),
                String(value)
            ];
        }) : undefined;
        _this = _super.call(this, result);
        // Returning a Proxy that will lowercase key names, validate parameters and sort keys
        // eslint-disable-next-line no-constructor-return
        return _possibleConstructorReturn$6(_this, new Proxy(_assertThisInitialized$6(_this), {
            get: function get(target, p, receiver) {
                switch(p){
                    case 'append':
                    case 'set':
                        return function(name, value) {
                            validateHeaderName(name);
                            validateHeaderValue(name, String(value));
                            return URLSearchParams.prototype[p].call(target, String(name).toLowerCase(), String(value));
                        };
                    case 'delete':
                    case 'has':
                    case 'getAll':
                        return function(name) {
                            validateHeaderName(name);
                            return URLSearchParams.prototype[p].call(target, String(name).toLowerCase());
                        };
                    case 'keys':
                        return function() {
                            target.sort();
                            return new Set(URLSearchParams.prototype.keys.call(target)).keys();
                        };
                    default:
                        return Reflect.get(target, p, receiver);
                }
            }
        }));
    }
    _createClass$9(Headers, [
        {
            key: tmp$3,
            get: function get() {
                return this.constructor.name;
            }
        },
        {
            key: "toString",
            value: function toString() {
                return Object.prototype.toString.call(this);
            }
        },
        {
            key: "get",
            value: function get(name) {
                var values = this.getAll(name);
                if (values.length === 0) {
                    return null;
                }
                var value = values.join(', ');
                if (/^content-encoding$/i.test(name)) {
                    value = value.toLowerCase();
                }
                return value;
            }
        },
        {
            key: "forEach",
            value: function forEach(callback) {
                var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : undefined;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var name = _step.value;
                        Reflect.apply(callback, thisArg, [
                            this.get(name),
                            name,
                            this
                        ]);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "values",
            value: regeneratorRuntime__default["default"].mark(function values() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, name;
                return regeneratorRuntime__default["default"].wrap(function values$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _ctx.prev = 1;
                            _iterator = this.keys()[Symbol.iterator]();
                        case 3:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _ctx.next = 10;
                                break;
                            }
                            name = _step.value;
                            _ctx.next = 7;
                            return this.get(name);
                        case 7:
                            _iteratorNormalCompletion = true;
                            _ctx.next = 3;
                            break;
                        case 10:
                            _ctx.next = 16;
                            break;
                        case 12:
                            _ctx.prev = 12;
                            _ctx.t0 = _ctx["catch"](1);
                            _didIteratorError = true;
                            _iteratorError = _ctx.t0;
                        case 16:
                            _ctx.prev = 16;
                            _ctx.prev = 17;
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        case 19:
                            _ctx.prev = 19;
                            if (!_didIteratorError) {
                                _ctx.next = 22;
                                break;
                            }
                            throw _iteratorError;
                        case 22:
                            return _ctx.finish(19);
                        case 23:
                            return _ctx.finish(16);
                        case 24:
                        case "end":
                            return _ctx.stop();
                    }
                }, values, this, [
                    [
                        1,
                        12,
                        16,
                        24
                    ],
                    [
                        17,
                        ,
                        19,
                        23
                    ]
                ]);
            })
        },
        {
            key: "entries",
            value: regeneratorRuntime__default["default"].mark(/**
	 * @type {() => IterableIterator<[string, string]>}
	 */ function entries() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, name;
                return regeneratorRuntime__default["default"].wrap(function entries$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _ctx.prev = 1;
                            _iterator = this.keys()[Symbol.iterator]();
                        case 3:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _ctx.next = 10;
                                break;
                            }
                            name = _step.value;
                            _ctx.next = 7;
                            return [
                                name,
                                this.get(name)
                            ];
                        case 7:
                            _iteratorNormalCompletion = true;
                            _ctx.next = 3;
                            break;
                        case 10:
                            _ctx.next = 16;
                            break;
                        case 12:
                            _ctx.prev = 12;
                            _ctx.t0 = _ctx["catch"](1);
                            _didIteratorError = true;
                            _iteratorError = _ctx.t0;
                        case 16:
                            _ctx.prev = 16;
                            _ctx.prev = 17;
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        case 19:
                            _ctx.prev = 19;
                            if (!_didIteratorError) {
                                _ctx.next = 22;
                                break;
                            }
                            throw _iteratorError;
                        case 22:
                            return _ctx.finish(19);
                        case 23:
                            return _ctx.finish(16);
                        case 24:
                        case "end":
                            return _ctx.stop();
                    }
                }, entries, this, [
                    [
                        1,
                        12,
                        16,
                        24
                    ],
                    [
                        17,
                        ,
                        19,
                        23
                    ]
                ]);
            })
        },
        {
            key: tmp1,
            value: function value() {
                return this.entries();
            }
        },
        {
            /**
	 * Node-fetch non-spec method
	 * returning all headers and their values as array
	 * @returns {Record<string, string[]>}
	 */ key: "raw",
            value: function raw() {
                var _this = this;
                return _toConsumableArray(this.keys()).reduce(function(result, key) {
                    result[key] = _this.getAll(key);
                    return result;
                }, {});
            }
        },
        {
            /**
	 * For better console.log(headers) and also to convert Headers into Node.js Request compatible format
	 */ key: tmp2,
            value: function value() {
                var _this = this;
                return _toConsumableArray(this.keys()).reduce(function(result, key) {
                    var values = _this.getAll(key);
                    // Http.request() only supports string as Host header.
                    // This hack makes specifying custom Host header possible.
                    if (key === 'host') {
                        result[key] = values[0];
                    } else {
                        result[key] = values.length > 1 ? values : values[0];
                    }
                    return result;
                }, {});
            }
        }
    ]);
    return Headers;
}(_wrapNativeSuper$1(URLSearchParams));
/**
 * Re-shaping object for Web IDL tests
 * Only need to do it for overridden methods
 */ Object.defineProperties(Headers.prototype, [
    'get',
    'entries',
    'forEach',
    'values'
].reduce(function(result, property) {
    result[property] = {
        enumerable: true
    };
    return result;
}, {}));
/**
 * Create a Headers object from an http.IncomingMessage.rawHeaders, ignoring those that do
 * not conform to HTTP grammar productions.
 * @param {import('http').IncomingMessage['rawHeaders']} headers
 */ function fromRawHeaders() {
    var headers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return new Headers(headers// Split into pairs
    .reduce(function(result, value, index, array) {
        if (index % 2 === 0) {
            result.push(array.slice(index, index + 2));
        }
        return result;
    }, []).filter(function(param) {
        var _param = _slicedToArray(param, 2), name = _param[0], value = _param[1];
        try {
            validateHeaderName(name);
            validateHeaderValue(name, String(value));
            return true;
        } catch (e) {
            return false;
        }
    }));
}

var redirectStatus = new Set([
    301,
    302,
    303,
    307,
    308
]);
/**
 * Redirect code matching
 *
 * @param {number} code - Status code
 * @return {boolean}
 */ var isRedirect = function(code) {
    return redirectStatus.has(code);
};

function _assertThisInitialized$5(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck$9(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties$8(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$8(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$8(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$8(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf$5(o) {
    _getPrototypeOf$5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$5(o);
}
function _inherits$5(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf$5(subClass, superClass);
}
function _possibleConstructorReturn$5(self, call) {
    if (call && (_typeof$5(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized$5(self);
}
function _setPrototypeOf$5(o, p) {
    _setPrototypeOf$5 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf$5(o, p);
}
var _typeof$5 = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct$5() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper$5(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$5();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf$5(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf$5(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn$5(this, result);
    };
}
var INTERNALS$1 = Symbol('Response internals');
var tmp$2 = Symbol.toStringTag;
var Response = /*#__PURE__*/ function(Body1) {
    _inherits$5(Response, Body1);
    var _super = _createSuper$5(Response);
    function Response() {
        var body = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck$9(this, Response);
        var _this;
        _this = _super.call(this, body, options);
        // eslint-disable-next-line no-eq-null, eqeqeq, no-negated-condition
        var status = options.status != null ? options.status : 200;
        var headers = new Headers(options.headers);
        if (body !== null && !headers.has('Content-Type')) {
            var contentType = extractContentType(body, _assertThisInitialized$5(_this));
            if (contentType) {
                headers.append('Content-Type', contentType);
            }
        }
        _this[INTERNALS$1] = {
            type: 'default',
            url: options.url,
            status: status,
            statusText: options.statusText || '',
            headers: headers,
            counter: options.counter,
            highWaterMark: options.highWaterMark
        };
        return _this;
    }
    _createClass$8(Response, [
        {
            key: "type",
            get: function get() {
                return this[INTERNALS$1].type;
            }
        },
        {
            key: "url",
            get: function get() {
                return this[INTERNALS$1].url || '';
            }
        },
        {
            key: "status",
            get: function get() {
                return this[INTERNALS$1].status;
            }
        },
        {
            key: "ok",
            get: /**
	 * Convenience property representing if the request ended normally
	 */ function get() {
                return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
            }
        },
        {
            key: "redirected",
            get: function get() {
                return this[INTERNALS$1].counter > 0;
            }
        },
        {
            key: "statusText",
            get: function get() {
                return this[INTERNALS$1].statusText;
            }
        },
        {
            key: "headers",
            get: function get() {
                return this[INTERNALS$1].headers;
            }
        },
        {
            key: "highWaterMark",
            get: function get() {
                return this[INTERNALS$1].highWaterMark;
            }
        },
        {
            /**
	 * Clone this response
	 *
	 * @return  Response
	 */ key: "clone",
            value: function clone1() {
                return new Response(clone(this, this.highWaterMark), {
                    type: this.type,
                    url: this.url,
                    status: this.status,
                    statusText: this.statusText,
                    headers: this.headers,
                    ok: this.ok,
                    redirected: this.redirected,
                    size: this.size,
                    highWaterMark: this.highWaterMark
                });
            }
        },
        {
            key: tmp$2,
            get: function get() {
                return 'Response';
            }
        }
    ], [
        {
            key: "redirect",
            value: /**
	 * @param {string} url    The URL that the new response is to originate from.
	 * @param {number} status An optional status code for the response (e.g., 302.)
	 * @returns {Response}    A Response object.
	 */ function redirect(url) {
                var status = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 302;
                if (!isRedirect(status)) {
                    throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
                }
                return new Response(null, {
                    headers: {
                        location: new URL(url).toString()
                    },
                    status: status
                });
            }
        },
        {
            key: "error",
            value: function error() {
                var response = new Response(null, {
                    status: 0,
                    statusText: ''
                });
                response[INTERNALS$1].type = 'error';
                return response;
            }
        }
    ]);
    return Response;
}(Body);
Object.defineProperties(Response.prototype, {
    type: {
        enumerable: true
    },
    url: {
        enumerable: true
    },
    status: {
        enumerable: true
    },
    ok: {
        enumerable: true
    },
    redirected: {
        enumerable: true
    },
    statusText: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    clone: {
        enumerable: true
    }
});

var getSearch = function(parsedURL) {
    if (parsedURL.search) {
        return parsedURL.search;
    }
    var lastOffset = parsedURL.href.length - 1;
    var hash = parsedURL.hash || (parsedURL.href[lastOffset] === '#' ? '#' : '');
    return parsedURL.href[lastOffset - hash.length] === '?' ? '?' : '';
};

/**
 * @external URL
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URL|URL}
 */ /**
 * @module utils/referrer
 * @private
 */ /**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#strip-url|Referrer Policy §8.4. Strip url for use as a referrer}
 * @param {string} URL
 * @param {boolean} [originOnly=false]
 */ function stripURLForUseAsAReferrer(url) {
    var originOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    // 1. If url is null, return no referrer.
    if (url == null) {
        return 'no-referrer';
    }
    url = new URL(url);
    // 2. If url's scheme is a local scheme, then return no referrer.
    if (/^(about|blob|data):$/.test(url.protocol)) {
        return 'no-referrer';
    }
    // 3. Set url's username to the empty string.
    url.username = '';
    // 4. Set url's password to null.
    // Note: `null` appears to be a mistake as this actually results in the password being `"null"`.
    url.password = '';
    // 5. Set url's fragment to null.
    // Note: `null` appears to be a mistake as this actually results in the fragment being `"#null"`.
    url.hash = '';
    // 6. If the origin-only flag is true, then:
    if (originOnly) {
        // 6.1. Set url's path to null.
        // Note: `null` appears to be a mistake as this actually results in the path being `"/null"`.
        url.pathname = '';
        // 6.2. Set url's query to null.
        // Note: `null` appears to be a mistake as this actually results in the query being `"?null"`.
        url.search = '';
    }
    // 7. Return url.
    return url;
}
/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#enumdef-referrerpolicy|enum ReferrerPolicy}
 */ var ReferrerPolicy = new Set([
    '',
    'no-referrer',
    'no-referrer-when-downgrade',
    'same-origin',
    'origin',
    'strict-origin',
    'origin-when-cross-origin',
    'strict-origin-when-cross-origin',
    'unsafe-url'
]);
/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#default-referrer-policy|default referrer policy}
 */ var DEFAULT_REFERRER_POLICY = 'strict-origin-when-cross-origin';
/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#referrer-policies|Referrer Policy §3. Referrer Policies}
 * @param {string} referrerPolicy
 * @returns {string} referrerPolicy
 */ function validateReferrerPolicy(referrerPolicy) {
    if (!ReferrerPolicy.has(referrerPolicy)) {
        throw new TypeError("Invalid referrerPolicy: ".concat(referrerPolicy));
    }
    return referrerPolicy;
}
/**
 * @see {@link https://w3c.github.io/webappsec-secure-contexts/#is-origin-trustworthy|Referrer Policy §3.2. Is origin potentially trustworthy?}
 * @param {external:URL} url
 * @returns `true`: "Potentially Trustworthy", `false`: "Not Trustworthy"
 */ function isOriginPotentiallyTrustworthy(url) {
    // 1. If origin is an opaque origin, return "Not Trustworthy".
    // Not applicable
    // 2. Assert: origin is a tuple origin.
    // Not for implementations
    // 3. If origin's scheme is either "https" or "wss", return "Potentially Trustworthy".
    if (/^(http|ws)s:$/.test(url.protocol)) {
        return true;
    }
    // 4. If origin's host component matches one of the CIDR notations 127.0.0.0/8 or ::1/128 [RFC4632], return "Potentially Trustworthy".
    var hostIp = url.host.replace(/(^\[)|(]$)/g, '');
    var hostIPVersion = require$$3.isIP(hostIp);
    if (hostIPVersion === 4 && /^127\./.test(hostIp)) {
        return true;
    }
    if (hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp)) {
        return true;
    }
    // 5. If origin's host component is "localhost" or falls within ".localhost", and the user agent conforms to the name resolution rules in [let-localhost-be-localhost], return "Potentially Trustworthy".
    // We are returning FALSE here because we cannot ensure conformance to
    // let-localhost-be-loalhost (https://tools.ietf.org/html/draft-west-let-localhost-be-localhost)
    if (/^(.+\.)*localhost$/.test(url.host)) {
        return false;
    }
    // 6. If origin's scheme component is file, return "Potentially Trustworthy".
    if (url.protocol === 'file:') {
        return true;
    }
    // 7. If origin's scheme component is one which the user agent considers to be authenticated, return "Potentially Trustworthy".
    // Not supported
    // 8. If origin has been configured as a trustworthy origin, return "Potentially Trustworthy".
    // Not supported
    // 9. Return "Not Trustworthy".
    return false;
}
/**
 * @see {@link https://w3c.github.io/webappsec-secure-contexts/#is-url-trustworthy|Referrer Policy §3.3. Is url potentially trustworthy?}
 * @param {external:URL} url
 * @returns `true`: "Potentially Trustworthy", `false`: "Not Trustworthy"
 */ function isUrlPotentiallyTrustworthy(url) {
    // 1. If url is "about:blank" or "about:srcdoc", return "Potentially Trustworthy".
    if (/^about:(blank|srcdoc)$/.test(url)) {
        return true;
    }
    // 2. If url's scheme is "data", return "Potentially Trustworthy".
    if (url.protocol === 'data:') {
        return true;
    }
    // Note: The origin of blob: and filesystem: URLs is the origin of the context in which they were
    // created. Therefore, blobs created in a trustworthy origin will themselves be potentially
    // trustworthy.
    if (/^(blob|filesystem):$/.test(url.protocol)) {
        return true;
    }
    // 3. Return the result of executing §3.2 Is origin potentially trustworthy? on url's origin.
    return isOriginPotentiallyTrustworthy(url);
}
/**
 * Modifies the referrerURL to enforce any extra security policy considerations.
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer|Referrer Policy §8.3. Determine request's Referrer}, step 7
 * @callback module:utils/referrer~referrerURLCallback
 * @param {external:URL} referrerURL
 * @returns {external:URL} modified referrerURL
 */ /**
 * Modifies the referrerOrigin to enforce any extra security policy considerations.
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer|Referrer Policy §8.3. Determine request's Referrer}, step 7
 * @callback module:utils/referrer~referrerOriginCallback
 * @param {external:URL} referrerOrigin
 * @returns {external:URL} modified referrerOrigin
 */ /**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer|Referrer Policy §8.3. Determine request's Referrer}
 * @param {Request} request
 * @param {object} o
 * @param {module:utils/referrer~referrerURLCallback} o.referrerURLCallback
 * @param {module:utils/referrer~referrerOriginCallback} o.referrerOriginCallback
 * @returns {external:URL} Request's referrer
 */ function determineRequestsReferrer(request) {
    var ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, referrerURLCallback = ref.referrerURLCallback, referrerOriginCallback = ref.referrerOriginCallback;
    // There are 2 notes in the specification about invalid pre-conditions.  We return null, here, for
    // these cases:
    // > Note: If request's referrer is "no-referrer", Fetch will not call into this algorithm.
    // > Note: If request's referrer policy is the empty string, Fetch will not call into this
    // > algorithm.
    if (request.referrer === 'no-referrer' || request.referrerPolicy === '') {
        return null;
    }
    // 1. Let policy be request's associated referrer policy.
    var policy = request.referrerPolicy;
    // 2. Let environment be request's client.
    // not applicable to node.js
    // 3. Switch on request's referrer:
    if (request.referrer === 'about:client') {
        return 'no-referrer';
    }
    // "a URL": Let referrerSource be request's referrer.
    var referrerSource = request.referrer;
    // 4. Let request's referrerURL be the result of stripping referrerSource for use as a referrer.
    var referrerURL = stripURLForUseAsAReferrer(referrerSource);
    // 5. Let referrerOrigin be the result of stripping referrerSource for use as a referrer, with the
    //    origin-only flag set to true.
    var referrerOrigin = stripURLForUseAsAReferrer(referrerSource, true);
    // 6. If the result of serializing referrerURL is a string whose length is greater than 4096, set
    //    referrerURL to referrerOrigin.
    if (referrerURL.toString().length > 4096) {
        referrerURL = referrerOrigin;
    }
    // 7. The user agent MAY alter referrerURL or referrerOrigin at this point to enforce arbitrary
    //    policy considerations in the interests of minimizing data leakage. For example, the user
    //    agent could strip the URL down to an origin, modify its host, replace it with an empty
    //    string, etc.
    if (referrerURLCallback) {
        referrerURL = referrerURLCallback(referrerURL);
    }
    if (referrerOriginCallback) {
        referrerOrigin = referrerOriginCallback(referrerOrigin);
    }
    // 8.Execute the statements corresponding to the value of policy:
    var currentURL = new URL(request.url);
    switch(policy){
        case 'no-referrer':
            return 'no-referrer';
        case 'origin':
            return referrerOrigin;
        case 'unsafe-url':
            return referrerURL;
        case 'strict-origin':
            // 1. If referrerURL is a potentially trustworthy URL and request's current URL is not a
            //    potentially trustworthy URL, then return no referrer.
            if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
                return 'no-referrer';
            }
            // 2. Return referrerOrigin.
            return referrerOrigin.toString();
        case 'strict-origin-when-cross-origin':
            // 1. If the origin of referrerURL and the origin of request's current URL are the same, then
            //    return referrerURL.
            if (referrerURL.origin === currentURL.origin) {
                return referrerURL;
            }
            // 2. If referrerURL is a potentially trustworthy URL and request's current URL is not a
            //    potentially trustworthy URL, then return no referrer.
            if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
                return 'no-referrer';
            }
            // 3. Return referrerOrigin.
            return referrerOrigin;
        case 'same-origin':
            // 1. If the origin of referrerURL and the origin of request's current URL are the same, then
            //    return referrerURL.
            if (referrerURL.origin === currentURL.origin) {
                return referrerURL;
            }
            // 2. Return no referrer.
            return 'no-referrer';
        case 'origin-when-cross-origin':
            // 1. If the origin of referrerURL and the origin of request's current URL are the same, then
            //    return referrerURL.
            if (referrerURL.origin === currentURL.origin) {
                return referrerURL;
            }
            // Return referrerOrigin.
            return referrerOrigin;
        case 'no-referrer-when-downgrade':
            // 1. If referrerURL is a potentially trustworthy URL and request's current URL is not a
            //    potentially trustworthy URL, then return no referrer.
            if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
                return 'no-referrer';
            }
            // 2. Return referrerURL.
            return referrerURL;
        default:
            throw new TypeError("Invalid referrerPolicy: ".concat(policy));
    }
}
/**
 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#parse-referrer-policy-from-header|Referrer Policy §8.1. Parse a referrer policy from a Referrer-Policy header}
 * @param {Headers} headers Response headers
 * @returns {string} policy
 */ function parseReferrerPolicyFromHeader(headers) {
    // 1. Let policy-tokens be the result of extracting header list values given `Referrer-Policy`
    //    and response’s header list.
    var policyTokens = (headers.get('referrer-policy') || '').split(/[,\s]+/);
    // 2. Let policy be the empty string.
    var policy = '';
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // 3. For each token in policy-tokens, if token is a referrer policy and token is not the empty
        //    string, then set policy to token.
        // Note: This algorithm loops over multiple policy values to allow deployment of new policy
        // values with fallbacks for older user agents, as described in § 11.1 Unknown Policy Values.
        for(var _iterator = policyTokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var token = _step.value;
            if (token && ReferrerPolicy.has(token)) {
                policy = token;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    // 4. Return policy.
    return policy;
}

function _assertThisInitialized$4(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck$8(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties$7(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$7(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$7(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$7(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf$4(o) {
    _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$4(o);
}
function _inherits$4(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf$4(subClass, superClass);
}
function _instanceof$3(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _possibleConstructorReturn$4(self, call) {
    if (call && (_typeof$4(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized$4(self);
}
function _setPrototypeOf$4(o, p) {
    _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf$4(o, p);
}
var _typeof$4 = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct$4() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper$4(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$4();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf$4(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf$4(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn$4(this, result);
    };
}
var INTERNALS = Symbol('Request internals');
/**
 * Check if `obj` is an instance of Request.
 *
 * @param  {*} obj
 * @return {boolean}
 */ var isRequest = function(object) {
    return typeof object === 'object' && typeof object[INTERNALS] === 'object';
};
var tmp$1 = Symbol.toStringTag;
var Request = /*#__PURE__*/ function(Body1) {
    _inherits$4(Request, Body1);
    var _super = _createSuper$4(Request);
    function Request(input) {
        var init = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck$8(this, Request);
        var _this;
        var parsedURL;
        // Normalize input and force URL to be encoded as UTF-8 (https://github.com/node-fetch/node-fetch/issues/245)
        if (isRequest(input)) {
            parsedURL = new URL(input.url);
        } else {
            parsedURL = new URL(input);
            input = {};
        }
        if (parsedURL.username !== '' || parsedURL.password !== '') {
            throw new TypeError("".concat(parsedURL, " is an url with embedded credentails."));
        }
        var method = init.method || input.method || 'GET';
        method = method.toUpperCase();
        // eslint-disable-next-line no-eq-null, eqeqeq
        if ((init.body != null || isRequest(input)) && input.body !== null && (method === 'GET' || method === 'HEAD')) {
            throw new TypeError('Request with GET/HEAD method cannot have body');
        }
        var inputBody = init.body ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
        _this = _super.call(this, inputBody, {
            size: init.size || input.size || 0
        });
        var headers = new Headers(init.headers || input.headers || {});
        if (inputBody !== null && !headers.has('Content-Type')) {
            var contentType = extractContentType(inputBody, _assertThisInitialized$4(_this));
            if (contentType) {
                headers.set('Content-Type', contentType);
            }
        }
        var signal = isRequest(input) ? input.signal : null;
        if ('signal' in init) {
            signal = init.signal;
        }
        // eslint-disable-next-line no-eq-null, eqeqeq
        if (signal != null && !isAbortSignal(signal)) {
            throw new TypeError('Expected signal to be an instanceof AbortSignal or EventTarget');
        }
        // §5.4, Request constructor steps, step 15.1
        // eslint-disable-next-line no-eq-null, eqeqeq
        var referrer = init.referrer == null ? input.referrer : init.referrer;
        if (referrer === '') {
            // §5.4, Request constructor steps, step 15.2
            referrer = 'no-referrer';
        } else if (referrer) {
            // §5.4, Request constructor steps, step 15.3.1, 15.3.2
            var parsedReferrer = new URL(referrer);
            // §5.4, Request constructor steps, step 15.3.3, 15.3.4
            referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? 'client' : parsedReferrer;
        } else {
            referrer = undefined;
        }
        _this[INTERNALS] = {
            method: method,
            redirect: init.redirect || input.redirect || 'follow',
            headers: headers,
            parsedURL: parsedURL,
            signal: signal,
            referrer: referrer
        };
        // Node-fetch-only options
        _this.follow = init.follow === undefined ? input.follow === undefined ? 20 : input.follow : init.follow;
        _this.compress = init.compress === undefined ? input.compress === undefined ? true : input.compress : init.compress;
        _this.counter = init.counter || input.counter || 0;
        _this.agent = init.agent || input.agent;
        _this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384;
        _this.insecureHTTPParser = init.insecureHTTPParser || input.insecureHTTPParser || false;
        // §5.4, Request constructor steps, step 16.
        // Default is empty string per https://fetch.spec.whatwg.org/#concept-request-referrer-policy
        _this.referrerPolicy = init.referrerPolicy || input.referrerPolicy || '';
        return _this;
    }
    _createClass$7(Request, [
        {
            key: "method",
            get: function get() {
                return this[INTERNALS].method;
            }
        },
        {
            key: "url",
            get: function get() {
                return node_url.format(this[INTERNALS].parsedURL);
            }
        },
        {
            key: "headers",
            get: function get() {
                return this[INTERNALS].headers;
            }
        },
        {
            key: "redirect",
            get: function get() {
                return this[INTERNALS].redirect;
            }
        },
        {
            key: "signal",
            get: function get() {
                return this[INTERNALS].signal;
            }
        },
        {
            key: "referrer",
            get: // https://fetch.spec.whatwg.org/#dom-request-referrer
            function get() {
                if (this[INTERNALS].referrer === 'no-referrer') {
                    return '';
                }
                if (this[INTERNALS].referrer === 'client') {
                    return 'about:client';
                }
                if (this[INTERNALS].referrer) {
                    return this[INTERNALS].referrer.toString();
                }
                return undefined;
            }
        },
        {
            key: "referrerPolicy",
            get: function get() {
                return this[INTERNALS].referrerPolicy;
            },
            set: function set(referrerPolicy) {
                this[INTERNALS].referrerPolicy = validateReferrerPolicy(referrerPolicy);
            }
        },
        {
            /**
	 * Clone this request
	 *
	 * @return  Request
	 */ key: "clone",
            value: function clone() {
                return new Request(this);
            }
        },
        {
            key: tmp$1,
            get: function get() {
                return 'Request';
            }
        }
    ]);
    return Request;
}(Body);
Object.defineProperties(Request.prototype, {
    method: {
        enumerable: true
    },
    url: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    redirect: {
        enumerable: true
    },
    clone: {
        enumerable: true
    },
    signal: {
        enumerable: true
    },
    referrer: {
        enumerable: true
    },
    referrerPolicy: {
        enumerable: true
    }
});
/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */ var getNodeRequestOptions = function(request) {
    var parsedURL = request[INTERNALS].parsedURL;
    var headers = new Headers(request[INTERNALS].headers);
    // Fetch step 1.3
    if (!headers.has('Accept')) {
        headers.set('Accept', '*/*');
    }
    // HTTP-network-or-cache fetch steps 2.4-2.7
    var contentLengthValue = null;
    if (request.body === null && /^(post|put)$/i.test(request.method)) {
        contentLengthValue = '0';
    }
    if (request.body !== null) {
        var totalBytes = getTotalBytes(request);
        // Set Content-Length if totalBytes is a number (that is not NaN)
        if (typeof totalBytes === 'number' && !Number.isNaN(totalBytes)) {
            contentLengthValue = String(totalBytes);
        }
    }
    if (contentLengthValue) {
        headers.set('Content-Length', contentLengthValue);
    }
    // 4.1. Main fetch, step 2.6
    // > If request's referrer policy is the empty string, then set request's referrer policy to the
    // > default referrer policy.
    if (request.referrerPolicy === '') {
        request.referrerPolicy = DEFAULT_REFERRER_POLICY;
    }
    // 4.1. Main fetch, step 2.7
    // > If request's referrer is not "no-referrer", set request's referrer to the result of invoking
    // > determine request's referrer.
    if (request.referrer && request.referrer !== 'no-referrer') {
        request[INTERNALS].referrer = determineRequestsReferrer(request);
    } else {
        request[INTERNALS].referrer = 'no-referrer';
    }
    // 4.5. HTTP-network-or-cache fetch, step 6.9
    // > If httpRequest's referrer is a URL, then append `Referer`/httpRequest's referrer, serialized
    // >  and isomorphic encoded, to httpRequest's header list.
    if (_instanceof$3(request[INTERNALS].referrer, URL)) {
        headers.set('Referer', request.referrer);
    }
    // HTTP-network-or-cache fetch step 2.11
    if (!headers.has('User-Agent')) {
        headers.set('User-Agent', 'node-fetch');
    }
    // HTTP-network-or-cache fetch step 2.15
    if (request.compress && !headers.has('Accept-Encoding')) {
        headers.set('Accept-Encoding', 'gzip,deflate,br');
    }
    var agent = request.agent;
    if (typeof agent === 'function') {
        agent = agent(parsedURL);
    }
    if (!headers.has('Connection') && !agent) {
        headers.set('Connection', 'close');
    }
    // HTTP-network fetch step 4.2
    // chunked encoding is handled by Node.js
    var search = getSearch(parsedURL);
    // Pass the full URL directly to request(), but overwrite the following
    // options:
    var options = {
        // Overwrite search to retain trailing ? (issue #776)
        path: parsedURL.pathname + search,
        // The following options are not expressed in the URL
        method: request.method,
        headers: headers[Symbol.for('nodejs.util.inspect.custom')](),
        insecureHTTPParser: request.insecureHTTPParser,
        agent: agent
    };
    return {
        parsedURL: parsedURL,
        options: options
    };
};

function _assertThisInitialized$3(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck$7(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf$3(o) {
    _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$3(o);
}
function _inherits$3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf$3(subClass, superClass);
}
function _possibleConstructorReturn$3(self, call) {
    if (call && (_typeof$3(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized$3(self);
}
function _setPrototypeOf$3(o, p) {
    _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf$3(o, p);
}
var _typeof$3 = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct$3() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper$3(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf$3(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf$3(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn$3(this, result);
    };
}
/**
 * AbortError interface for cancelled requests
 */ var AbortError = /*#__PURE__*/ function(FetchBaseError1) {
    _inherits$3(AbortError, FetchBaseError1);
    var _super = _createSuper$3(AbortError);
    function AbortError(message) {
        var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'aborted';
        _classCallCheck$7(this, AbortError);
        return _super.call(this, message, type);
    }
    return AbortError;
}(FetchBaseError);

function asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator$2(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _instanceof$2(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var supportedSchemas = new Set([
    'data:',
    'http:',
    'https:'
]);
/**
 * Fetch function
 *
 * @param   {string | URL | import('./request').default} url - Absolute url or Request instance
 * @param   {*} [options_] - Fetch options
 * @return  {Promise<import('./response').default>}
 */ function fetch(url, options_) {
    return _fetch.apply(this, arguments);
}function _fetch() {
    _fetch = _asyncToGenerator$2(regeneratorRuntime__default["default"].mark(function _callee(url, options_) {
        return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.abrupt("return", new Promise(function(resolve, reject) {
                        // Build request object
                        var request = new Request(url, options_);
                        var ref = getNodeRequestOptions(request), parsedURL = ref.parsedURL, options = ref.options;
                        if (!supportedSchemas.has(parsedURL.protocol)) {
                            throw new TypeError("node-fetch cannot load ".concat(url, ". URL scheme \"").concat(parsedURL.protocol.replace(/:$/, ''), "\" is not supported."));
                        }
                        if (parsedURL.protocol === 'data:') {
                            var data = dataUriToBuffer(request.url);
                            var response = new Response(data, {
                                headers: {
                                    'Content-Type': data.typeFull
                                }
                            });
                            resolve(response);
                            return;
                        }
                        // Wrap http.request into fetch
                        var send = (parsedURL.protocol === 'https:' ? https__default["default"] : http__default["default"]).request;
                        var signal = request.signal;
                        var response1 = null;
                        var abort = function() {
                            var error = new AbortError('The operation was aborted.');
                            reject(error);
                            if (request.body && _instanceof$2(request.body, Stream__default["default"].Readable)) {
                                request.body.destroy(error);
                            }
                            if (!response1 || !response1.body) {
                                return;
                            }
                            response1.body.emit('error', error);
                        };
                        if (signal && signal.aborted) {
                            abort();
                            return;
                        }
                        var abortAndFinalize = function() {
                            abort();
                            finalize();
                        };
                        // Send request
                        var request_ = send(parsedURL, options);
                        if (signal) {
                            signal.addEventListener('abort', abortAndFinalize);
                        }
                        var finalize = function() {
                            request_.abort();
                            if (signal) {
                                signal.removeEventListener('abort', abortAndFinalize);
                            }
                        };
                        request_.on('error', function(error) {
                            reject(new FetchError("request to ".concat(request.url, " failed, reason: ").concat(error.message), 'system', error));
                            finalize();
                        });
                        fixResponseChunkedTransferBadEnding(request_, function(error) {
                            response1.body.destroy(error);
                        });
                        /* c8 ignore next 18 */ if (process__default["default"].version < 'v14') {
                            // Before Node.js 14, pipeline() does not fully support async iterators and does not always
                            // properly handle when the socket close/end events are out of order.
                            request_.on('socket', function(s) {
                                var endedWithEventsCount;
                                s.prependListener('end', function() {
                                    endedWithEventsCount = s._eventsCount;
                                });
                                s.prependListener('close', function(hadError) {
                                    // if end happened before close but the socket didn't emit an error, do it now
                                    if (response1 && endedWithEventsCount < s._eventsCount && !hadError) {
                                        var error = new Error('Premature close');
                                        error.code = 'ERR_STREAM_PREMATURE_CLOSE';
                                        response1.body.emit('error', error);
                                    }
                                });
                            });
                        }
                        request_.on('response', function(response_) {
                            request_.setTimeout(0);
                            var headers = fromRawHeaders(response_.rawHeaders);
                            // HTTP fetch step 5
                            if (isRedirect(response_.statusCode)) {
                                // HTTP fetch step 5.2
                                var location = headers.get('Location');
                                // HTTP fetch step 5.3
                                var locationURL = location === null ? null : new URL(location, request.url);
                                // HTTP fetch step 5.5
                                switch(request.redirect){
                                    case 'error':
                                        reject(new FetchError("uri requested responds with a redirect, redirect mode is set to error: ".concat(request.url), 'no-redirect'));
                                        finalize();
                                        return;
                                    case 'manual':
                                        // Node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
                                        if (locationURL !== null) {
                                            headers.set('Location', locationURL);
                                        }
                                        break;
                                    case 'follow':
                                        {
                                            // HTTP-redirect fetch step 2
                                            if (locationURL === null) {
                                                break;
                                            }
                                            // HTTP-redirect fetch step 5
                                            if (request.counter >= request.follow) {
                                                reject(new FetchError("maximum redirect reached at: ".concat(request.url), 'max-redirect'));
                                                finalize();
                                                return;
                                            }
                                            // HTTP-redirect fetch step 6 (counter increment)
                                            // Create a new Request object.
                                            var requestOptions = {
                                                headers: new Headers(request.headers),
                                                follow: request.follow,
                                                counter: request.counter + 1,
                                                agent: request.agent,
                                                compress: request.compress,
                                                method: request.method,
                                                body: clone(request),
                                                signal: request.signal,
                                                size: request.size,
                                                referrer: request.referrer,
                                                referrerPolicy: request.referrerPolicy
                                            };
                                            // HTTP-redirect fetch step 9
                                            if (response_.statusCode !== 303 && request.body && _instanceof$2(options_.body, Stream__default["default"].Readable)) {
                                                reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
                                                finalize();
                                                return;
                                            }
                                            // HTTP-redirect fetch step 11
                                            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === 'POST') {
                                                requestOptions.method = 'GET';
                                                requestOptions.body = undefined;
                                                requestOptions.headers.delete('content-length');
                                            }
                                            // HTTP-redirect fetch step 14
                                            var responseReferrerPolicy = parseReferrerPolicyFromHeader(headers);
                                            if (responseReferrerPolicy) {
                                                requestOptions.referrerPolicy = responseReferrerPolicy;
                                            }
                                            // HTTP-redirect fetch step 15
                                            resolve(fetch(new Request(locationURL, requestOptions)));
                                            finalize();
                                            return;
                                        }
                                    default:
                                        return reject(new TypeError("Redirect option '".concat(request.redirect, "' is not a valid value of RequestRedirect")));
                                }
                            }
                            // Prepare response
                            if (signal) {
                                response_.once('end', function() {
                                    signal.removeEventListener('abort', abortAndFinalize);
                                });
                            }
                            var body = Stream.pipeline(response_, new Stream.PassThrough(), reject);
                            // see https://github.com/nodejs/node/pull/29376
                            if (process__default["default"].version < 'v12.10') {
                                response_.on('aborted', abortAndFinalize);
                            }
                            var responseOptions = {
                                url: request.url,
                                status: response_.statusCode,
                                statusText: response_.statusMessage,
                                headers: headers,
                                size: request.size,
                                counter: request.counter,
                                highWaterMark: request.highWaterMark
                            };
                            // HTTP-network fetch step 12.1.1.3
                            var codings = headers.get('Content-Encoding');
                            // HTTP-network fetch step 12.1.1.4: handle content codings
                            // in following scenarios we ignore compression support
                            // 1. compression support is disabled
                            // 2. HEAD request
                            // 3. no Content-Encoding header
                            // 4. no content response (204)
                            // 5. content not modified response (304)
                            if (!request.compress || request.method === 'HEAD' || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
                                response1 = new Response(body, responseOptions);
                                resolve(response1);
                                return;
                            }
                            // For Node v6+
                            // Be less strict when decoding compressed responses, since sometimes
                            // servers send slightly invalid responses that are still accepted
                            // by common browsers.
                            // Always using Z_SYNC_FLUSH is what cURL does.
                            var zlibOptions = {
                                flush: zlib__default["default"].Z_SYNC_FLUSH,
                                finishFlush: zlib__default["default"].Z_SYNC_FLUSH
                            };
                            // For gzip
                            if (codings === 'gzip' || codings === 'x-gzip') {
                                body = Stream.pipeline(body, zlib__default["default"].createGunzip(zlibOptions), reject);
                                response1 = new Response(body, responseOptions);
                                resolve(response1);
                                return;
                            }
                            // For deflate
                            if (codings === 'deflate' || codings === 'x-deflate') {
                                // Handle the infamous raw deflate response from old servers
                                // a hack for old IIS and Apache servers
                                var raw = Stream.pipeline(response_, new Stream.PassThrough(), reject);
                                raw.once('data', function(chunk) {
                                    // See http://stackoverflow.com/questions/37519828
                                    body = (chunk[0] & 15) === 8 ? Stream.pipeline(body, zlib__default["default"].createInflate(), reject) : Stream.pipeline(body, zlib__default["default"].createInflateRaw(), reject);
                                    response1 = new Response(body, responseOptions);
                                    resolve(response1);
                                });
                                return;
                            }
                            // For br
                            if (codings === 'br') {
                                body = Stream.pipeline(body, zlib__default["default"].createBrotliDecompress(), reject);
                                response1 = new Response(body, responseOptions);
                                resolve(response1);
                                return;
                            }
                            // Otherwise, use response as-is
                            response1 = new Response(body, responseOptions);
                            resolve(response1);
                        });
                        writeToStream(request_, request);
                    }));
                case 1:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return _fetch.apply(this, arguments);
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
    var LAST_CHUNK = buffer.Buffer.from('0\r\n\r\n');
    var isChunkedTransfer = false;
    var properLastChunkReceived = false;
    var previousChunk;
    request.on('response', function(response) {
        var headers = response.headers;
        isChunkedTransfer = headers['transfer-encoding'] === 'chunked' && !headers['content-length'];
    });
    request.on('socket', function(socket) {
        var onSocketClose = function() {
            if (isChunkedTransfer && !properLastChunkReceived) {
                var error = new Error('Premature close');
                error.code = 'ERR_STREAM_PREMATURE_CLOSE';
                errorCallback(error);
            }
        };
        socket.prependListener('close', onSocketClose);
        request.on('abort', function() {
            socket.removeListener('close', onSocketClose);
        });
        socket.on('data', function(buf) {
            properLastChunkReceived = buffer.Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0;
            // Sometimes final 0-length chunk and end of message code are in separate packets
            if (!properLastChunkReceived && previousChunk) {
                properLastChunkReceived = buffer.Buffer.compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 && buffer.Buffer.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0;
            }
            previousChunk = buf;
        });
    });
}

function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator$1(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _defineProperty$6(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$5(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$6(target, key, source[key]);
        });
    }
    return target;
}
var handler = function() {
    var _ref1 = _asyncToGenerator$1(regeneratorRuntime__default["default"].mark(function _callee1(response, options) {
        return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx1) {
            while(1)switch(_ctx1.prev = _ctx1.next){
                case 0:
                    return _ctx1.abrupt("return", new Promise(function() {
                        var _ref = _asyncToGenerator$1(regeneratorRuntime__default["default"].mark(function _callee(resolve, reject) {
                            var status, url, text;
                            return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx) {
                                while(1)switch(_ctx.prev = _ctx.next){
                                    case 0:
                                        status = response.status, url = response.url;
                                        _ctx.prev = 1;
                                        _ctx.next = 4;
                                        return response.text();
                                    case 4:
                                        text = _ctx.sent;
                                        _ctx.prev = 5;
                                        return _ctx.abrupt("return", resolve({
                                            data: JSON.parse(text),
                                            status: status
                                        }));
                                    case 9:
                                        _ctx.prev = 9;
                                        _ctx.t0 = _ctx["catch"](5);
                                        return _ctx.abrupt("return", reject(_objectSpread$5({
                                            status: status,
                                            message: text,
                                            url: url
                                        }, options)));
                                    case 12:
                                        _ctx.next = 17;
                                        break;
                                    case 14:
                                        _ctx.prev = 14;
                                        _ctx.t1 = _ctx["catch"](1);
                                        return _ctx.abrupt("return", reject(_objectSpread$5({
                                            status: status,
                                            url: url
                                        }, options)));
                                    case 17:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee, null, [
                                [
                                    1,
                                    14
                                ],
                                [
                                    5,
                                    9
                                ]
                            ]);
                        }));
                        return function(resolve, reject) {
                            return _ref.apply(this, arguments);
                        };
                    }()));
                case 1:
                case "end":
                    return _ctx1.stop();
            }
        }, _callee1);
    }));
    return function handler(response, options) {
        return _ref1.apply(this, arguments);
    };
}();

var routeFor = function(url, options) {
    return Object.keys(options || {}).reduce(function(route, value) {
        return route.includes(value) ? route.replace("{".concat(value, "}"), options === null || options === void 0 ? void 0 : options[value]) : route;
    }, url);
};

var hmacSha256 = {
    exports: {}
};

var core = {
    exports: {}
};

(function (module, exports) {
(function(root, factory) {
    {
        // CommonJS
        module.exports = factory();
    }
})(commonjsGlobal, function() {
    /*globals window, global, require*/ /**
	 * CryptoJS core components.
	 */ var CryptoJS = CryptoJS || function(Math, undefined$1) {
        var crypto;
        // Native crypto from window (Browser)
        if (typeof window !== 'undefined' && window.crypto) {
            crypto = window.crypto;
        }
        // Native crypto in web worker (Browser)
        if (typeof self !== 'undefined' && self.crypto) {
            crypto = self.crypto;
        }
        // Native crypto from worker
        if (typeof globalThis !== 'undefined' && globalThis.crypto) {
            crypto = globalThis.crypto;
        }
        // Native (experimental IE 11) crypto from window (Browser)
        if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
            crypto = window.msCrypto;
        }
        // Native crypto from global (NodeJS)
        if (!crypto && typeof commonjsGlobal !== 'undefined' && commonjsGlobal.crypto) {
            crypto = commonjsGlobal.crypto;
        }
        // Native crypto import via require (NodeJS)
        if (!crypto && typeof commonjsRequire === 'function') {
            try {
                crypto = require('crypto');
            } catch (err) {}
        }
        /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */ var cryptoSecureRandomInt = function cryptoSecureRandomInt() {
            if (crypto) {
                // Use getRandomValues method (Browser)
                if (typeof crypto.getRandomValues === 'function') {
                    try {
                        return crypto.getRandomValues(new Uint32Array(1))[0];
                    } catch (err) {}
                }
                // Use randomBytes method (NodeJS)
                if (typeof crypto.randomBytes === 'function') {
                    try {
                        return crypto.randomBytes(4).readInt32LE();
                    } catch (err) {}
                }
            }
            throw new Error('Native crypto module could not be used to get secure random number.');
        };
        /*
	     * Local polyfill of Object.create

	     */ var create = Object.create || function() {
            var F = function F() {};
            return function(obj) {
                var subtype;
                F.prototype = obj;
                subtype = new F();
                F.prototype = null;
                return subtype;
            };
        }();
        /**
	     * CryptoJS namespace.
	     */ var C = {};
        /**
	     * Library namespace.
	     */ var C_lib = C.lib = {};
        /**
	     * Base object for prototypal inheritance.
	     */ var Base = C_lib.Base = function() {
            return {
                /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */ extend: function extend(overrides) {
                    // Spawn
                    var subtype = create(this);
                    // Augment
                    if (overrides) {
                        subtype.mixIn(overrides);
                    }
                    // Create default initializer
                    if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
                        subtype.init = function() {
                            subtype.$super.init.apply(this, arguments);
                        };
                    }
                    // Initializer's prototype is the subtype object
                    subtype.init.prototype = subtype;
                    // Reference supertype
                    subtype.$super = this;
                    return subtype;
                },
                /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */ create: function create() {
                    var instance = this.extend();
                    instance.init.apply(instance, arguments);
                    return instance;
                },
                /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */ init: function init() {},
                /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */ mixIn: function mixIn(properties) {
                    for(var propertyName in properties){
                        if (properties.hasOwnProperty(propertyName)) {
                            this[propertyName] = properties[propertyName];
                        }
                    }
                    // IE won't copy toString using the loop above
                    if (properties.hasOwnProperty('toString')) {
                        this.toString = properties.toString;
                    }
                },
                /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */ clone: function clone() {
                    return this.init.prototype.extend(this);
                }
            };
        }();
        /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */ var WordArray = C_lib.WordArray = Base.extend({
            /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */ init: function init(words, sigBytes) {
                words = this.words = words || [];
                if (sigBytes != undefined$1) {
                    this.sigBytes = sigBytes;
                } else {
                    this.sigBytes = words.length * 4;
                }
            },
            /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */ toString: function toString(encoder) {
                return (encoder || Hex).stringify(this);
            },
            /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */ concat: function concat(wordArray) {
                // Shortcuts
                var thisWords = this.words;
                var thatWords = wordArray.words;
                var thisSigBytes = this.sigBytes;
                var thatSigBytes = wordArray.sigBytes;
                // Clamp excess bits
                this.clamp();
                // Concat
                if (thisSigBytes % 4) {
                    // Copy one byte at a time
                    for(var i = 0; i < thatSigBytes; i++){
                        var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
                    }
                } else {
                    // Copy one word at a time
                    for(var j = 0; j < thatSigBytes; j += 4){
                        thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
                    }
                }
                this.sigBytes += thatSigBytes;
                // Chainable
                return this;
            },
            /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */ clamp: function clamp() {
                // Shortcuts
                var words = this.words;
                var sigBytes = this.sigBytes;
                // Clamp
                words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
                words.length = Math.ceil(sigBytes / 4);
            },
            /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */ clone: function clone() {
                var clone1 = Base.clone.call(this);
                clone1.words = this.words.slice(0);
                return clone1;
            },
            /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */ random: function random(nBytes) {
                var words = [];
                for(var i = 0; i < nBytes; i += 4){
                    words.push(cryptoSecureRandomInt());
                }
                return new WordArray.init(words, nBytes);
            }
        });
        /**
	     * Encoder namespace.
	     */ var C_enc = C.enc = {};
        /**
	     * Hex encoding strategy.
	     */ var Hex = C_enc.Hex = {
            /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */ stringify: function stringify(wordArray) {
                // Shortcuts
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                // Convert
                var hexChars = [];
                for(var i = 0; i < sigBytes; i++){
                    var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    hexChars.push((bite >>> 4).toString(16));
                    hexChars.push((bite & 15).toString(16));
                }
                return hexChars.join('');
            },
            /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */ parse: function parse(hexStr) {
                // Shortcut
                var hexStrLength = hexStr.length;
                // Convert
                var words = [];
                for(var i = 0; i < hexStrLength; i += 2){
                    words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
                }
                return new WordArray.init(words, hexStrLength / 2);
            }
        };
        /**
	     * Latin1 encoding strategy.
	     */ var Latin1 = C_enc.Latin1 = {
            /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */ stringify: function stringify(wordArray) {
                // Shortcuts
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                // Convert
                var latin1Chars = [];
                for(var i = 0; i < sigBytes; i++){
                    var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    latin1Chars.push(String.fromCharCode(bite));
                }
                return latin1Chars.join('');
            },
            /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */ parse: function parse(latin1Str) {
                // Shortcut
                var latin1StrLength = latin1Str.length;
                // Convert
                var words = [];
                for(var i = 0; i < latin1StrLength; i++){
                    words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
                }
                return new WordArray.init(words, latin1StrLength);
            }
        };
        /**
	     * UTF-8 encoding strategy.
	     */ var Utf8 = C_enc.Utf8 = {
            /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */ stringify: function stringify(wordArray) {
                try {
                    return decodeURIComponent(escape(Latin1.stringify(wordArray)));
                } catch (e) {
                    throw new Error('Malformed UTF-8 data');
                }
            },
            /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */ parse: function parse(utf8Str) {
                return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
            }
        };
        /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */ var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
            /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */ reset: function reset() {
                // Initial values
                this._data = new WordArray.init();
                this._nDataBytes = 0;
            },
            /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */ _append: function _append(data) {
                // Convert string to WordArray, else assume WordArray already
                if (typeof data == 'string') {
                    data = Utf8.parse(data);
                }
                // Append
                this._data.concat(data);
                this._nDataBytes += data.sigBytes;
            },
            /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */ _process: function _process(doFlush) {
                var processedWords;
                // Shortcuts
                var data = this._data;
                var dataWords = data.words;
                var dataSigBytes = data.sigBytes;
                var blockSize = this.blockSize;
                var blockSizeBytes = blockSize * 4;
                // Count blocks ready
                var nBlocksReady = dataSigBytes / blockSizeBytes;
                if (doFlush) {
                    // Round up to include partial blocks
                    nBlocksReady = Math.ceil(nBlocksReady);
                } else {
                    // Round down to include only full blocks,
                    // less the number of blocks that must remain in the buffer
                    nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
                }
                // Count words ready
                var nWordsReady = nBlocksReady * blockSize;
                // Count bytes ready
                var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
                // Process blocks
                if (nWordsReady) {
                    for(var offset = 0; offset < nWordsReady; offset += blockSize){
                        // Perform concrete-algorithm logic
                        this._doProcessBlock(dataWords, offset);
                    }
                    // Remove processed words
                    processedWords = dataWords.splice(0, nWordsReady);
                    data.sigBytes -= nBytesReady;
                }
                // Return processed words
                return new WordArray.init(processedWords, nBytesReady);
            },
            /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */ clone: function clone() {
                var clone2 = Base.clone.call(this);
                clone2._data = this._data.clone();
                return clone2;
            },
            _minBufferSize: 0
        });
        /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */ C_lib.Hasher = BufferedBlockAlgorithm.extend({
            /**
	         * Configuration options.
	         */ cfg: Base.extend(),
            /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */ init: function init(cfg) {
                // Apply config defaults
                this.cfg = this.cfg.extend(cfg);
                // Set initial values
                this.reset();
            },
            /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */ reset: function reset() {
                // Reset data buffer
                BufferedBlockAlgorithm.reset.call(this);
                // Perform concrete-hasher logic
                this._doReset();
            },
            /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */ update: function update(messageUpdate) {
                // Append
                this._append(messageUpdate);
                // Update the hash
                this._process();
                // Chainable
                return this;
            },
            /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */ finalize: function finalize(messageUpdate) {
                // Final message update
                if (messageUpdate) {
                    this._append(messageUpdate);
                }
                // Perform concrete-hasher logic
                var hash = this._doFinalize();
                return hash;
            },
            blockSize: 512 / 32,
            /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */ _createHelper: function _createHelper(hasher) {
                return function(message, cfg) {
                    return new hasher.init(cfg).finalize(message);
                };
            },
            /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */ _createHmacHelper: function _createHmacHelper(hasher) {
                return function(message, key) {
                    return new C_algo.HMAC.init(hasher, key).finalize(message);
                };
            }
        });
        /**
	     * Algorithm namespace.
	     */ var C_algo = C.algo = {};
        return C;
    }(Math);
    return CryptoJS;
});
}(core));

var sha256 = {
    exports: {}
};

(function (module, exports) {
(function(root, factory) {
    {
        // CommonJS
        module.exports = factory(core.exports);
    }
})(commonjsGlobal, function(CryptoJS) {
    (function(Math) {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        // Initialization and round constants tables
        var H1 = [];
        var K = [];
        // Compute constants
        (function() {
            var isPrime = function isPrime(n) {
                var sqrtN = Math.sqrt(n);
                for(var factor = 2; factor <= sqrtN; factor++){
                    if (!(n % factor)) {
                        return false;
                    }
                }
                return true;
            };
            var getFractionalBits = function getFractionalBits(n) {
                return (n - (n | 0)) * 4294967296 | 0;
            };
            var n1 = 2;
            var nPrime = 0;
            while(nPrime < 64){
                if (isPrime(n1)) {
                    if (nPrime < 8) {
                        H1[nPrime] = getFractionalBits(Math.pow(n1, 1 / 2));
                    }
                    K[nPrime] = getFractionalBits(Math.pow(n1, 1 / 3));
                    nPrime++;
                }
                n1++;
            }
        })();
        // Reusable object
        var W = [];
        /**
	     * SHA-256 hash algorithm.
	     */ var SHA256 = C_algo.SHA256 = Hasher.extend({
            _doReset: function _doReset() {
                this._hash = new WordArray.init(H1.slice(0));
            },
            _doProcessBlock: function _doProcessBlock(M, offset) {
                // Shortcut
                var H = this._hash.words;
                // Working variables
                var a = H[0];
                var b = H[1];
                var c = H[2];
                var d = H[3];
                var e = H[4];
                var f = H[5];
                var g = H[6];
                var h = H[7];
                // Computation
                for(var i = 0; i < 64; i++){
                    if (i < 16) {
                        W[i] = M[offset + i] | 0;
                    } else {
                        var gamma0x = W[i - 15];
                        var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                        var gamma1x = W[i - 2];
                        var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
                    }
                    var ch = e & f ^ ~e & g;
                    var maj = a & b ^ a & c ^ b & c;
                    var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
                    var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
                    var t1 = h + sigma1 + ch + K[i] + W[i];
                    var t2 = sigma0 + maj;
                    h = g;
                    g = f;
                    f = e;
                    e = d + t1 | 0;
                    d = c;
                    c = b;
                    b = a;
                    a = t1 + t2 | 0;
                }
                // Intermediate hash value
                H[0] = H[0] + a | 0;
                H[1] = H[1] + b | 0;
                H[2] = H[2] + c | 0;
                H[3] = H[3] + d | 0;
                H[4] = H[4] + e | 0;
                H[5] = H[5] + f | 0;
                H[6] = H[6] + g | 0;
                H[7] = H[7] + h | 0;
            },
            _doFinalize: function _doFinalize() {
                // Shortcuts
                var data = this._data;
                var dataWords = data.words;
                var nBitsTotal = this._nDataBytes * 8;
                var nBitsLeft = data.sigBytes * 8;
                // Add padding
                dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
                dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
                dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
                data.sigBytes = dataWords.length * 4;
                // Hash final blocks
                this._process();
                // Return final computed hash
                return this._hash;
            },
            clone: function clone() {
                var clone1 = Hasher.clone.call(this);
                clone1._hash = this._hash.clone();
                return clone1;
            }
        });
        /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */ C.SHA256 = Hasher._createHelper(SHA256);
        /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */ C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
    })(Math);
    return CryptoJS.SHA256;
});
}(sha256));

var hmac = {
    exports: {}
};

(function (module, exports) {
(function(root, factory) {
    {
        // CommonJS
        module.exports = factory(core.exports);
    }
})(commonjsGlobal, function(CryptoJS) {
    (function() {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var C_algo = C.algo;
        /**
	     * HMAC algorithm.
	     */ C_algo.HMAC = Base.extend({
            /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */ init: function init(hasher, key) {
                // Init hasher
                hasher = this._hasher = new hasher.init();
                // Convert string to WordArray, else assume WordArray already
                if (typeof key == 'string') {
                    key = Utf8.parse(key);
                }
                // Shortcuts
                var hasherBlockSize = hasher.blockSize;
                var hasherBlockSizeBytes = hasherBlockSize * 4;
                // Allow arbitrary length keys
                if (key.sigBytes > hasherBlockSizeBytes) {
                    key = hasher.finalize(key);
                }
                // Clamp excess bits
                key.clamp();
                // Clone key for inner and outer pads
                var oKey = this._oKey = key.clone();
                var iKey = this._iKey = key.clone();
                // Shortcuts
                var oKeyWords = oKey.words;
                var iKeyWords = iKey.words;
                // XOR keys with pad constants
                for(var i = 0; i < hasherBlockSize; i++){
                    oKeyWords[i] ^= 1549556828;
                    iKeyWords[i] ^= 909522486;
                }
                oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
                // Set initial values
                this.reset();
            },
            /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */ reset: function reset() {
                // Shortcut
                var hasher = this._hasher;
                // Reset
                hasher.reset();
                hasher.update(this._iKey);
            },
            /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */ update: function update(messageUpdate) {
                this._hasher.update(messageUpdate);
                // Chainable
                return this;
            },
            /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */ finalize: function finalize(messageUpdate) {
                // Shortcut
                var hasher = this._hasher;
                // Compute HMAC
                var innerHash = hasher.finalize(messageUpdate);
                hasher.reset();
                var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
                return hmac;
            }
        });
    })();
});
}(hmac));

(function (module, exports) {
(function(root, factory, undef) {
    {
        // CommonJS
        module.exports = factory(core.exports, sha256.exports, hmac.exports);
    }
})(commonjsGlobal, function(CryptoJS) {
    return CryptoJS.HmacSHA256;
});
}(hmacSha256));

var HmacSHA256 = hmacSha256.exports;

var encHex = {
    exports: {}
};

(function (module, exports) {
(function(root, factory) {
    {
        // CommonJS
        module.exports = factory(core.exports);
    }
})(commonjsGlobal, function(CryptoJS) {
    return CryptoJS.enc.Hex;
});
}(encHex));

var Hex = encHex.exports;

var signature = function(secret, url) {
    return HmacSHA256(url, secret).toString(Hex);
};

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _defineProperty$5(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$4(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$5(target, key, source[key]);
        });
    }
    return target;
}
var request = function() {
    var _ref = _asyncToGenerator(regeneratorRuntime__default["default"].mark(function _callee(url, method, // @ts-ignore
    params, // @ts-ignore
    data, req) {
        var ref, headers, secret, isGET, isServer, route, ref1, params1, body, ref2, href, pathname, search, response;
        return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    ref = req || {}, headers = ref.headers, secret = ref.secret;
                    isGET = method === "get";
                    isServer = typeof window === "undefined";
                    route = routeFor(url, params || {});
                    if (!/\/{.+}/.test(route)) {
                        _ctx.next = 8;
                        break;
                    }
                    params1 = (ref1 = route.match(/{[A-z]+}/g)) === null || ref1 === void 0 ? void 0 : ref1.map(function(value) {
                        return value.replace(/{([A-z]+)}/g, "$1");
                    }).join(", ");
                    throw new Error("You didn't pass parameters ".concat(params1, " "));
                case 8:
                    body = isGET ? lib.stringify(data || {}, {
                        arrayFormat: "brackets"
                    }) : JSON.stringify(data || {});
                    ref2 = new URL("/public/api" + route + (isGET && body ? "?".concat(body) : ""), "https://api.3commas.io"), href = ref2.href, pathname = ref2.pathname, search = ref2.search;
                    _ctx.next = 12;
                    return fetch(href, _objectSpread$4({
                        method: method,
                        headers: _objectSpread$4({
                            "content-type": "application/json"
                        }, !isServer ? {
                            "x-requested-with": "XMLHttpRequest"
                        } : {}, (headers === null || headers === void 0 ? void 0 : headers["user-agent"]) ? {
                            "user-agent": headers === null || headers === void 0 ? void 0 : headers["user-agent"]
                        } : {}, (headers === null || headers === void 0 ? void 0 : headers["x-forwarded-for"]) ? {
                            "x-forwarded-for": headers === null || headers === void 0 ? void 0 : headers["x-forwarded-for"]
                        } : {}, (headers === null || headers === void 0 ? void 0 : headers.cookie) ? {
                            cookie: headers === null || headers === void 0 ? void 0 : headers.cookie
                        } : {}, secret ? {
                            "signature": signature(secret, pathname + search)
                        } : {}, headers || {})
                    }, !isGET && body ? {
                        body: body
                    } : {}));
                case 12:
                    response = _ctx.sent;
                    _ctx.next = 15;
                    return handler(response, {
                        method: method,
                        body: !isGET && body
                    });
                case 15:
                    return _ctx.abrupt("return", _ctx.sent);
                case 16:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function request(url, method, params, data, req) {
        return _ref.apply(this, arguments);
    };
}();

var accounts = {
    "accounts.transfer": "/ver1/accounts/transfer",
    "accounts.transfer_history": "/ver1/accounts/transfer_history",
    "accounts.transfer_data": "/ver1/accounts/transfer_data",
    "accounts.new": "/ver1/accounts/new",
    "accounts.update": "/ver1/accounts/update",
    "accounts": "/ver1/accounts",
    "accounts.market.list": "/ver1/accounts/market_list",
    "accounts.market.pairs": "/ver1/accounts/market_pairs",
    "accounts.currency_rates.leverage_data": "/ver1/accounts/currency_rates_with_leverage_data",
    "accounts.currency_rates": "/ver1/accounts/currency_rates",
    "account.deposit_data": "/ver1/accounts/{account_id}/deposit_data",
    "account.networks_info": "/ver1/accounts/{account_id}/networks_info",
    "account.convert_dust_to_bnb": "/ver1/accounts/{account_id}/convert_dust_to_bnb",
    "account.active_trading_entities": "/ver1/accounts/{account_id}/active_trading_entities",
    "account.sell_all_to_usd": "/ver1/accounts/{account_id}/sell_all_to_usd",
    "account.sell_all_to_btc": "/ver1/accounts/{account_id}/sell_all_to_btc",
    "account.balance_chart_data": "/ver1/accounts/{account_id}/balance_chart_data",
    "account.load_balances": "/ver1/accounts/{account_id}/load_balances",
    "account.rename": "/ver1/accounts/{account_id}/rename",
    "account.pie_chart_data": "/ver1/accounts/{account_id}/pie_chart_data",
    "account.account_table_data": "/ver1/accounts/{account_id}/account_table_data",
    "account.remove": "/ver1/accounts/{account_id}/remove",
    "account.leverage_data": "/ver1/accounts/{account_id}/leverage_data",
    "account": "/ver1/accounts/{account_id}"
};

var bots = {
    "bots.account_trade_info.smart_sell": "/ver1/bots/account_trade_info_smart_sell",
    "bots.account_trade_info": "/ver1/bots/account_trade_info",
    "bots.strategy_list": "/ver1/bots/strategy_list",
    "bots.pairs_black_list": "/ver1/bots/pairs_black_list",
    "bots.update_pairs_black_list": "/ver1/bots/update_pairs_black_list",
    "bots.create_bot": "/ver1/bots/create_bot",
    "bots": "/ver1/bots",
    "bots.stats": "/ver1/bots/stats",
    "bot.copy_and_create": "/ver1/bots/{bot_id}/copy_and_create",
    "bot.update": "/ver1/bots/{bot_id}/update",
    "bot.disable": "/ver1/bots/{bot_id}/disable",
    "bot.enable": "/ver1/bots/{bot_id}/enable",
    "bot.start_new_deal": "/ver1/bots/{bot_id}/start_new_deal",
    "bot.delete": "/ver1/bots/{bot_id}/delete",
    "bot.panic_sell_all_deals": "/ver1/bots/{bot_id}/panic_sell_all_deals",
    "bot.cancel_all_deals": "/ver1/bots/{bot_id}/cancel_all_deals",
    "bot.deals_stats": "/ver1/bots/{bot_id}/deals_stats",
    "bot.show": "/ver1/bots/{bot_id}/show"
};

var deals = {
    "deals": "/ver1/deals",
    "deal.convert_to_smart_trade": "/ver1/deals/{deal_id}/convert_to_smart_trade",
    "deal.update_max_safety_orders": "/ver1/deals/{deal_id}/update_max_safety_orders",
    "deal.panic_sell": "/ver1/deals/{deal_id}/panic_sell",
    "deal.cancel": "/ver1/deals/{deal_id}/cancel",
    "deal.update_deal": "/ver1/deals/{deal_id}/update_deal",
    "deal.update_tp": "/ver1/deals/{deal_id}/update_tp",
    "deal.show": "/ver1/deals/{deal_id}/show",
    "deal.cancel_order": "/ver1/deals/{deal_id}/cancel_order",
    "deal.market_orders": "/ver1/deals/{deal_id}/market_orders",
    "deal.add_funds": "/ver1/deals/{deal_id}/add_funds",
    "deal.data_for_adding_funds": "/ver1/deals/{deal_id}/data_for_adding_funds"
};

var grid_bots = {
    "grid_bots.ai": "/ver1/grid_bots/ai",
    "grid_bots.manual": "/ver1/grid_bots/manual",
    "grid_bots.ai_settings": "/ver1/grid_bots/ai_settings",
    "grid_bots": "/ver1/grid_bots",
    "grid_bot.market_orders": "/ver1/grid_bots/{id}/market_orders",
    "grid_bot.profits": "/ver1/grid_bots/{id}/profits",
    "grid_bot.ai": "/ver1/grid_bots/{id}/ai",
    "grid_bot.manual": "/ver1/grid_bots/{id}/manual",
    "grid_bot": "/ver1/grid_bots/{id}",
    "grid_bot.disable": "/ver1/grid_bots/{id}/disable",
    "grid_bot.enable": "/ver1/grid_bots/{id}/enable",
    "grid_bot.required_balances": "/ver1/grid_bots/{id}/required_balances"
};

var loose_accounts = {
    "loose_accounts": "/ver1/loose_accounts",
    "loose_accounts.available_currencies": "/ver1/loose_accounts/available_currencies",
    "loose_account": "/ver1/loose_accounts/{account_id}"
};

var marketplaces = {
    "marketplaces.presets": "/ver1/marketplace/presets",
    "marketplaces.items": "/ver1/marketplace/items",
    "marketplace.signals": "/ver1/marketplace/{item_id}/signals"
};

var smart_trades = {
    "smart_trades": "/v2/smart_trades",
    "smart_trade": "/v2/smart_trades/{id}",
    "smart_trade.reduce_funds": "/v2/smart_trades/{id}/reduce_funds",
    "smart_trade.add_funds": "/v2/smart_trades/{id}/add_funds",
    "smart_trade.close_by_market": "/v2/smart_trades/{id}/close_by_market",
    "smart_trade.force_start": "/v2/smart_trades/{id}/force_start",
    "smart_trade.force_process": "/v2/smart_trades/{id}/force_process",
    "smart_trade.set_note": "/v2/smart_trades/{id}/set_note",
    "smart_trade.trades": "/v2/smart_trades/{smart_trade_id}/trades",
    "smart_trade.trade.close_by_market": "/v2/smart_trades/{smart_trade_id}/trades/{id}/close_by_market",
    "smart_trade.trade": "/v2/smart_trades/{smart_trade_id}/trades/{id}"
};

var users = {
    "users.current_mode": "/ver1/users/current_mode",
    "users.change_mode": "/ver1/users/change_mode"
};

function _defineProperty$4(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$3(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$4(target, key, source[key]);
        });
    }
    return target;
}
var routes = _objectSpread$3({}, accounts, bots, deals, grid_bots, loose_accounts, marketplaces, smart_trades, users, {
    "ping": "/ver1/ping",
    "time": "/ver1/time"
});

require$$0__default$1["default"].Duplex;

var bufferUtil$2 = {
    exports: {}
};

var constants = {
    BINARY_TYPES: [
        'nodebuffer',
        'arraybuffer',
        'fragments'
    ],
    EMPTY_BUFFER: buffer.Buffer.alloc(0),
    GUID: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
    kForOnEventAttribute: Symbol('kIsForOnEventAttribute'),
    kListener: Symbol('kListener'),
    kStatusCode: Symbol('status-code'),
    kWebSocket: Symbol('websocket'),
    NOOP: function() {}
};

function _instanceof$1(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var EMPTY_BUFFER$3 = constants.EMPTY_BUFFER;
/**
 * Merges an array of buffers into a new buffer.
 *
 * @param {Buffer[]} list The array of buffers to concat
 * @param {Number} totalLength The total length of buffers in the list
 * @return {Buffer} The resulting buffer
 * @public
 */ function concat$1(list, totalLength) {
    if (list.length === 0) return EMPTY_BUFFER$3;
    if (list.length === 1) return list[0];
    var target = buffer.Buffer.allocUnsafe(totalLength);
    var offset = 0;
    for(var i = 0; i < list.length; i++){
        var buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
    }
    if (offset < totalLength) return target.slice(0, offset);
    return target;
}
/**
 * Masks a buffer using the given mask.
 *
 * @param {Buffer} source The buffer to mask
 * @param {Buffer} mask The mask to use
 * @param {Buffer} output The buffer where to store the result
 * @param {Number} offset The offset at which to start writing
 * @param {Number} length The number of bytes to mask.
 * @public
 */ function _mask(source, mask, output, offset, length) {
    for(var i = 0; i < length; i++){
        output[offset + i] = source[i] ^ mask[i & 3];
    }
}
/**
 * Unmasks a buffer using the given mask.
 *
 * @param {Buffer} buffer The buffer to unmask
 * @param {Buffer} mask The mask to use
 * @public
 */ function _unmask(buffer, mask) {
    for(var i = 0; i < buffer.length; i++){
        buffer[i] ^= mask[i & 3];
    }
}
/**
 * Converts a buffer to an `ArrayBuffer`.
 *
 * @param {Buffer} buf The buffer to convert
 * @return {ArrayBuffer} Converted buffer
 * @public
 */ function toArrayBuffer$1(buf) {
    if (buf.byteLength === buf.buffer.byteLength) {
        return buf.buffer;
    }
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
}
/**
 * Converts `data` to a `Buffer`.
 *
 * @param {*} data The data to convert
 * @return {Buffer} The buffer
 * @throws {TypeError}
 * @public
 */ function toBuffer$2(data) {
    toBuffer$2.readOnly = true;
    if (buffer.Buffer.isBuffer(data)) return data;
    var buf;
    if (_instanceof$1(data, ArrayBuffer)) {
        buf = buffer.Buffer.from(data);
    } else if (ArrayBuffer.isView(data)) {
        buf = buffer.Buffer.from(data.buffer, data.byteOffset, data.byteLength);
    } else {
        buf = buffer.Buffer.from(data);
        toBuffer$2.readOnly = false;
    }
    return buf;
}
try {
    var bufferUtil$1 = require('bufferutil');
    bufferUtil$2.exports = {
        concat: concat$1,
        mask: function mask1(source, mask, output, offset, length) {
            if (length < 48) _mask(source, mask, output, offset, length);
            else bufferUtil$1.mask(source, mask, output, offset, length);
        },
        toArrayBuffer: toArrayBuffer$1,
        toBuffer: toBuffer$2,
        unmask: function unmask(buffer, mask) {
            if (buffer.length < 32) _unmask(buffer, mask);
            else bufferUtil$1.unmask(buffer, mask);
        }
    };
} catch (e) /* istanbul ignore next */ {
    bufferUtil$2.exports = {
        concat: concat$1,
        mask: _mask,
        toArrayBuffer: toArrayBuffer$1,
        toBuffer: toBuffer$2,
        unmask: _unmask
    };
}

function _classCallCheck$6(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties$6(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$6(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$6(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$6(Constructor, staticProps);
    return Constructor;
}
var kDone = Symbol('kDone');
var kRun = Symbol('kRun');
var tmp = kRun;
var Limiter$1 = /**
 * A very simple job queue with adjustable concurrency. Adapted from
 * https://github.com/STRML/async-limiter
 */ /*#__PURE__*/ function() {
    function Limiter(concurrency) {
        var _this = this;
        _classCallCheck$6(this, Limiter);
        this[kDone] = function() {
            _this.pending--;
            _this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
    }
    _createClass$6(Limiter, [
        {
            /**
   * Adds a job to the queue.
   *
   * @param {Function} job The job to run
   * @public
   */ key: "add",
            value: function add(job) {
                this.jobs.push(job);
                this[kRun]();
            }
        },
        {
            /**
   * Removes a job from the queue and runs it if possible.
   *
   * @private
   */ key: tmp,
            value: function value() {
                if (this.pending === this.concurrency) return;
                if (this.jobs.length) {
                    var job = this.jobs.shift();
                    this.pending++;
                    job(this[kDone]);
                }
            }
        }
    ]);
    return Limiter;
}();
var limiter = Limiter$1;

function _classCallCheck$5(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties$5(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$5(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$5(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$5(Constructor, staticProps);
    return Constructor;
}
function _defineProperty$3(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$3(target, key, source[key]);
        });
    }
    return target;
}
var zlib = require$$0__default$2["default"];
var bufferUtil = bufferUtil$2.exports;
var Limiter = limiter;
var kStatusCode$2 = constants.kStatusCode;
var TRAILER = buffer.Buffer.from([
    0,
    0,
    255,
    255
]);
var kPerMessageDeflate = Symbol('permessage-deflate');
var kTotalLength = Symbol('total-length');
var kCallback = Symbol('callback');
var kBuffers = Symbol('buffers');
var kError$1 = Symbol('error');
//
// We limit zlib concurrency, which prevents severe memory fragmentation
// as documented in https://github.com/nodejs/node/issues/8871#issuecomment-250915913
// and https://github.com/websockets/ws/issues/1202
//
// Intentionally global; it's the global thread pool that's an issue.
//
var zlibLimiter;
var PerMessageDeflate$3 = /**
 * permessage-deflate implementation.
 */ /*#__PURE__*/ function() {
    function PerMessageDeflate(options, isServer, maxPayload) {
        _classCallCheck$5(this, PerMessageDeflate);
        this._maxPayload = maxPayload | 0;
        this._options = options || {};
        this._threshold = this._options.threshold !== undefined ? this._options.threshold : 1024;
        this._isServer = !!isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
            var concurrency = this._options.concurrencyLimit !== undefined ? this._options.concurrencyLimit : 10;
            zlibLimiter = new Limiter(concurrency);
        }
    }
    _createClass$5(PerMessageDeflate, [
        {
            /**
   * Create an extension negotiation offer.
   *
   * @return {Object} Extension parameters
   * @public
   */ key: "offer",
            value: function offer() {
                var params = {};
                if (this._options.serverNoContextTakeover) {
                    params.server_no_context_takeover = true;
                }
                if (this._options.clientNoContextTakeover) {
                    params.client_no_context_takeover = true;
                }
                if (this._options.serverMaxWindowBits) {
                    params.server_max_window_bits = this._options.serverMaxWindowBits;
                }
                if (this._options.clientMaxWindowBits) {
                    params.client_max_window_bits = this._options.clientMaxWindowBits;
                } else if (this._options.clientMaxWindowBits == null) {
                    params.client_max_window_bits = true;
                }
                return params;
            }
        },
        {
            /**
   * Accept an extension negotiation offer/response.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Object} Accepted configuration
   * @public
   */ key: "accept",
            value: function accept(configurations) {
                configurations = this.normalizeParams(configurations);
                this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
                return this.params;
            }
        },
        {
            /**
   * Releases all resources used by the extension.
   *
   * @public
   */ key: "cleanup",
            value: function cleanup() {
                if (this._inflate) {
                    this._inflate.close();
                    this._inflate = null;
                }
                if (this._deflate) {
                    var callback = this._deflate[kCallback];
                    this._deflate.close();
                    this._deflate = null;
                    if (callback) {
                        callback(new Error('The deflate stream was closed while data was being processed'));
                    }
                }
            }
        },
        {
            /**
   *  Accept an extension negotiation offer.
   *
   * @param {Array} offers The extension negotiation offers
   * @return {Object} Accepted configuration
   * @private
   */ key: "acceptAsServer",
            value: function acceptAsServer(offers) {
                var opts = this._options;
                var accepted = offers.find(function(params) {
                    if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === 'number' && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === 'number' && !params.client_max_window_bits) {
                        return false;
                    }
                    return true;
                });
                if (!accepted) {
                    throw new Error('None of the extension offers can be accepted');
                }
                if (opts.serverNoContextTakeover) {
                    accepted.server_no_context_takeover = true;
                }
                if (opts.clientNoContextTakeover) {
                    accepted.client_no_context_takeover = true;
                }
                if (typeof opts.serverMaxWindowBits === 'number') {
                    accepted.server_max_window_bits = opts.serverMaxWindowBits;
                }
                if (typeof opts.clientMaxWindowBits === 'number') {
                    accepted.client_max_window_bits = opts.clientMaxWindowBits;
                } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
                    delete accepted.client_max_window_bits;
                }
                return accepted;
            }
        },
        {
            /**
   * Accept the extension negotiation response.
   *
   * @param {Array} response The extension negotiation response
   * @return {Object} Accepted configuration
   * @private
   */ key: "acceptAsClient",
            value: function acceptAsClient(response) {
                var params = response[0];
                if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
                    throw new Error('Unexpected parameter "client_no_context_takeover"');
                }
                if (!params.client_max_window_bits) {
                    if (typeof this._options.clientMaxWindowBits === 'number') {
                        params.client_max_window_bits = this._options.clientMaxWindowBits;
                    }
                } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === 'number' && params.client_max_window_bits > this._options.clientMaxWindowBits) {
                    throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
                }
                return params;
            }
        },
        {
            /**
   * Normalize parameters.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Array} The offers/response with normalized parameters
   * @private
   */ key: "normalizeParams",
            value: function normalizeParams(configurations) {
                var _this = this;
                configurations.forEach(function(params) {
                    var _this1 = _this;
                    Object.keys(params).forEach(function(key) {
                        var value = params[key];
                        if (value.length > 1) {
                            throw new Error("Parameter \"".concat(key, "\" must have only a single value"));
                        }
                        value = value[0];
                        if (key === 'client_max_window_bits') {
                            if (value !== true) {
                                var num = +value;
                                if (!Number.isInteger(num) || num < 8 || num > 15) {
                                    throw new TypeError("Invalid value for parameter \"".concat(key, "\": ").concat(value));
                                }
                                value = num;
                            } else if (!_this1._isServer) {
                                throw new TypeError("Invalid value for parameter \"".concat(key, "\": ").concat(value));
                            }
                        } else if (key === 'server_max_window_bits') {
                            var num1 = +value;
                            if (!Number.isInteger(num1) || num1 < 8 || num1 > 15) {
                                throw new TypeError("Invalid value for parameter \"".concat(key, "\": ").concat(value));
                            }
                            value = num1;
                        } else if (key === 'client_no_context_takeover' || key === 'server_no_context_takeover') {
                            if (value !== true) {
                                throw new TypeError("Invalid value for parameter \"".concat(key, "\": ").concat(value));
                            }
                        } else {
                            throw new Error("Unknown parameter \"".concat(key, "\""));
                        }
                        params[key] = value;
                    });
                });
                return configurations;
            }
        },
        {
            /**
   * Decompress data. Concurrency limited.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */ key: "decompress",
            value: function decompress(data, fin, callback) {
                var _this = this;
                zlibLimiter.add(function(done) {
                    _this._decompress(data, fin, function(err, result) {
                        done();
                        callback(err, result);
                    });
                });
            }
        },
        {
            /**
   * Compress data. Concurrency limited.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */ key: "compress",
            value: function compress(data, fin, callback) {
                var _this = this;
                zlibLimiter.add(function(done) {
                    _this._compress(data, fin, function(err, result) {
                        done();
                        callback(err, result);
                    });
                });
            }
        },
        {
            /**
   * Decompress data.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */ key: "_decompress",
            value: function _decompress(data1, fin, callback) {
                var _this = this;
                var endpoint = this._isServer ? 'client' : 'server';
                if (!this._inflate) {
                    var key = "".concat(endpoint, "_max_window_bits");
                    var windowBits = typeof this.params[key] !== 'number' ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
                    this._inflate = zlib.createInflateRaw(_objectSpread$2({}, this._options.zlibInflateOptions, {
                        windowBits: windowBits
                    }));
                    this._inflate[kPerMessageDeflate] = this;
                    this._inflate[kTotalLength] = 0;
                    this._inflate[kBuffers] = [];
                    this._inflate.on('error', inflateOnError);
                    this._inflate.on('data', inflateOnData);
                }
                this._inflate[kCallback] = callback;
                this._inflate.write(data1);
                if (fin) this._inflate.write(TRAILER);
                this._inflate.flush(function() {
                    var err = _this._inflate[kError$1];
                    if (err) {
                        _this._inflate.close();
                        _this._inflate = null;
                        callback(err);
                        return;
                    }
                    var data = bufferUtil.concat(_this._inflate[kBuffers], _this._inflate[kTotalLength]);
                    if (_this._inflate._readableState.endEmitted) {
                        _this._inflate.close();
                        _this._inflate = null;
                    } else {
                        _this._inflate[kTotalLength] = 0;
                        _this._inflate[kBuffers] = [];
                        if (fin && _this.params["".concat(endpoint, "_no_context_takeover")]) {
                            _this._inflate.reset();
                        }
                    }
                    callback(null, data);
                });
            }
        },
        {
            /**
   * Compress data.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */ key: "_compress",
            value: function _compress(data2, fin, callback) {
                var _this = this;
                var endpoint = this._isServer ? 'server' : 'client';
                if (!this._deflate) {
                    var key = "".concat(endpoint, "_max_window_bits");
                    var windowBits = typeof this.params[key] !== 'number' ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
                    this._deflate = zlib.createDeflateRaw(_objectSpread$2({}, this._options.zlibDeflateOptions, {
                        windowBits: windowBits
                    }));
                    this._deflate[kTotalLength] = 0;
                    this._deflate[kBuffers] = [];
                    this._deflate.on('data', deflateOnData);
                }
                this._deflate[kCallback] = callback;
                this._deflate.write(data2);
                this._deflate.flush(zlib.Z_SYNC_FLUSH, function() {
                    if (!_this._deflate) {
                        //
                        // The deflate stream was closed while data was being processed.
                        //
                        return;
                    }
                    var data = bufferUtil.concat(_this._deflate[kBuffers], _this._deflate[kTotalLength]);
                    if (fin) data = data.slice(0, data.length - 4);
                    //
                    // Ensure that the callback will not be called again in
                    // `PerMessageDeflate#cleanup()`.
                    //
                    _this._deflate[kCallback] = null;
                    _this._deflate[kTotalLength] = 0;
                    _this._deflate[kBuffers] = [];
                    if (fin && _this.params["".concat(endpoint, "_no_context_takeover")]) {
                        _this._deflate.reset();
                    }
                    callback(null, data);
                });
            }
        }
    ], [
        {
            key: "extensionName",
            get: /**
   * @type {String}
   */ function get() {
                return 'permessage-deflate';
            }
        }
    ]);
    return PerMessageDeflate;
}();
var permessageDeflate = PerMessageDeflate$3;
/**
 * The listener of the `zlib.DeflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */ function deflateOnData(chunk) {
    this[kBuffers].push(chunk);
    this[kTotalLength] += chunk.length;
}
/**
 * The listener of the `zlib.InflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */ function inflateOnData(chunk) {
    this[kTotalLength] += chunk.length;
    if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
    }
    this[kError$1] = new RangeError('Max payload size exceeded');
    this[kError$1].code = 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH';
    this[kError$1][kStatusCode$2] = 1009;
    this.removeListener('data', inflateOnData);
    this.reset();
}
/**
 * The listener of the `zlib.InflateRaw` stream `'error'` event.
 *
 * @param {Error} err The emitted error
 * @private
 */ function inflateOnError(err) {
    //
    // There is no need to call `Zlib#close()` as the handle is automatically
    // closed when an error is emitted.
    //
    this[kPerMessageDeflate]._inflate = null;
    err[kStatusCode$2] = 1007;
    this[kCallback](err);
}

var validation = {
    exports: {}
};

//
// Allowed token characters:
//
// '!', '#', '$', '%', '&', ''', '*', '+', '-',
// '.', 0-9, A-Z, '^', '_', '`', a-z, '|', '~'
//
// tokenChars[32] === 0 // ' '
// tokenChars[33] === 1 // '!'
// tokenChars[34] === 0 // '"'
// ...
//
// prettier-ignore
var tokenChars$1 = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0 // 112 - 127
];
/**
 * Checks if a status code is allowed in a close frame.
 *
 * @param {Number} code The status code
 * @return {Boolean} `true` if the status code is valid, else `false`
 * @public
 */ function isValidStatusCode$2(code) {
    return code >= 1000 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3000 && code <= 4999;
}
/**
 * Checks if a given buffer contains only correct UTF-8.
 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
 * Markus Kuhn.
 *
 * @param {Buffer} buf The buffer to check
 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
 * @public
 */ function _isValidUTF8(buf) {
    var len = buf.length;
    var i = 0;
    while(i < len){
        if ((buf[i] & 128) === 0) {
            // 0xxxxxxx
            i++;
        } else if ((buf[i] & 224) === 192) {
            // 110xxxxx 10xxxxxx
            if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192 // Overlong
            ) {
                return false;
            }
            i += 2;
        } else if ((buf[i] & 240) === 224) {
            // 1110xxxx 10xxxxxx 10xxxxxx
            if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || buf[i] === 237 && (buf[i + 1] & 224) === 160 // Surrogate (U+D800 - U+DFFF)
            ) {
                return false;
            }
            i += 3;
        } else if ((buf[i] & 248) === 240) {
            // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
            if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244 // > U+10FFFF
            ) {
                return false;
            }
            i += 4;
        } else {
            return false;
        }
    }
    return true;
}
try {
    var isValidUTF8$1 = require('utf-8-validate');
    validation.exports = {
        isValidStatusCode: isValidStatusCode$2,
        isValidUTF8: function isValidUTF81(buf) {
            return buf.length < 150 ? _isValidUTF8(buf) : isValidUTF8$1(buf);
        },
        tokenChars: tokenChars$1
    };
} catch (e) /* istanbul ignore next */ {
    validation.exports = {
        isValidStatusCode: isValidStatusCode$2,
        isValidUTF8: _isValidUTF8,
        tokenChars: tokenChars$1
    };
}

function _assertThisInitialized$2(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck$4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties$4(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$4(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$4(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$4(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf$2(o) {
    _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$2(o);
}
function _inherits$2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf$2(subClass, superClass);
}
function _possibleConstructorReturn$2(self, call) {
    if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized$2(self);
}
function _setPrototypeOf$2(o, p) {
    _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf$2(o, p);
}
var _typeof$2 = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct$2() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper$2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf$2(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf$2(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn$2(this, result);
    };
}
var Writable = require$$0__default$1["default"].Writable;
var PerMessageDeflate$2 = permessageDeflate;
var ref$3 = constants, BINARY_TYPES$1 = ref$3.BINARY_TYPES, EMPTY_BUFFER$2 = ref$3.EMPTY_BUFFER, kStatusCode$1 = ref$3.kStatusCode, kWebSocket$1 = ref$3.kWebSocket;
var ref1$1 = bufferUtil$2.exports, concat = ref1$1.concat, toArrayBuffer = ref1$1.toArrayBuffer, unmask = ref1$1.unmask;
var ref2$1 = validation.exports, isValidStatusCode$1 = ref2$1.isValidStatusCode, isValidUTF8 = ref2$1.isValidUTF8;
var GET_INFO = 0;
var GET_PAYLOAD_LENGTH_16 = 1;
var GET_PAYLOAD_LENGTH_64 = 2;
var GET_MASK = 3;
var GET_DATA = 4;
var INFLATING = 5;
var Receiver$1 = /**
 * HyBi Receiver implementation.
 *
 * @extends Writable
 */ /*#__PURE__*/ function(Writable1) {
    _inherits$2(Receiver, Writable1);
    var _super = _createSuper$2(Receiver);
    function Receiver() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _classCallCheck$4(this, Receiver);
        var _this;
        _this = _super.call(this);
        _this._binaryType = options.binaryType || BINARY_TYPES$1[0];
        _this._extensions = options.extensions || {};
        _this._isServer = !!options.isServer;
        _this._maxPayload = options.maxPayload | 0;
        _this._skipUTF8Validation = !!options.skipUTF8Validation;
        _this[kWebSocket$1] = undefined;
        _this._bufferedBytes = 0;
        _this._buffers = [];
        _this._compressed = false;
        _this._payloadLength = 0;
        _this._mask = undefined;
        _this._fragmented = 0;
        _this._masked = false;
        _this._fin = false;
        _this._opcode = 0;
        _this._totalPayloadLength = 0;
        _this._messageLength = 0;
        _this._fragments = [];
        _this._state = GET_INFO;
        _this._loop = false;
        return _this;
    }
    _createClass$4(Receiver, [
        {
            /**
   * Implements `Writable.prototype._write()`.
   *
   * @param {Buffer} chunk The chunk of data to write
   * @param {String} encoding The character encoding of `chunk`
   * @param {Function} cb Callback
   * @private
   */ key: "_write",
            value: function _write(chunk, encoding, cb) {
                if (this._opcode === 8 && this._state == GET_INFO) return cb();
                this._bufferedBytes += chunk.length;
                this._buffers.push(chunk);
                this.startLoop(cb);
            }
        },
        {
            /**
   * Consumes `n` bytes from the buffered data.
   *
   * @param {Number} n The number of bytes to consume
   * @return {Buffer} The consumed bytes
   * @private
   */ key: "consume",
            value: function consume(n) {
                this._bufferedBytes -= n;
                if (n === this._buffers[0].length) return this._buffers.shift();
                if (n < this._buffers[0].length) {
                    var buf = this._buffers[0];
                    this._buffers[0] = buf.slice(n);
                    return buf.slice(0, n);
                }
                var dst = buffer.Buffer.allocUnsafe(n);
                do {
                    var buf1 = this._buffers[0];
                    var offset = dst.length - n;
                    if (n >= buf1.length) {
                        dst.set(this._buffers.shift(), offset);
                    } else {
                        dst.set(new Uint8Array(buf1.buffer, buf1.byteOffset, n), offset);
                        this._buffers[0] = buf1.slice(n);
                    }
                    n -= buf1.length;
                }while (n > 0)
                return dst;
            }
        },
        {
            /**
   * Starts the parsing loop.
   *
   * @param {Function} cb Callback
   * @private
   */ key: "startLoop",
            value: function startLoop(cb) {
                var err;
                this._loop = true;
                do {
                    switch(this._state){
                        case GET_INFO:
                            err = this.getInfo();
                            break;
                        case GET_PAYLOAD_LENGTH_16:
                            err = this.getPayloadLength16();
                            break;
                        case GET_PAYLOAD_LENGTH_64:
                            err = this.getPayloadLength64();
                            break;
                        case GET_MASK:
                            this.getMask();
                            break;
                        case GET_DATA:
                            err = this.getData(cb);
                            break;
                        default:
                            // `INFLATING`
                            this._loop = false;
                            return;
                    }
                }while (this._loop)
                cb(err);
            }
        },
        {
            /**
   * Reads the first two bytes of a frame.
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */ key: "getInfo",
            value: function getInfo() {
                if (this._bufferedBytes < 2) {
                    this._loop = false;
                    return;
                }
                var buf = this.consume(2);
                if ((buf[0] & 48) !== 0) {
                    this._loop = false;
                    return error(RangeError, 'RSV2 and RSV3 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_2_3');
                }
                var compressed = (buf[0] & 64) === 64;
                if (compressed && !this._extensions[PerMessageDeflate$2.extensionName]) {
                    this._loop = false;
                    return error(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
                }
                this._fin = (buf[0] & 128) === 128;
                this._opcode = buf[0] & 15;
                this._payloadLength = buf[1] & 127;
                if (this._opcode === 0) {
                    if (compressed) {
                        this._loop = false;
                        return error(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
                    }
                    if (!this._fragmented) {
                        this._loop = false;
                        return error(RangeError, 'invalid opcode 0', true, 1002, 'WS_ERR_INVALID_OPCODE');
                    }
                    this._opcode = this._fragmented;
                } else if (this._opcode === 1 || this._opcode === 2) {
                    if (this._fragmented) {
                        this._loop = false;
                        return error(RangeError, "invalid opcode ".concat(this._opcode), true, 1002, 'WS_ERR_INVALID_OPCODE');
                    }
                    this._compressed = compressed;
                } else if (this._opcode > 7 && this._opcode < 11) {
                    if (!this._fin) {
                        this._loop = false;
                        return error(RangeError, 'FIN must be set', true, 1002, 'WS_ERR_EXPECTED_FIN');
                    }
                    if (compressed) {
                        this._loop = false;
                        return error(RangeError, 'RSV1 must be clear', true, 1002, 'WS_ERR_UNEXPECTED_RSV_1');
                    }
                    if (this._payloadLength > 125) {
                        this._loop = false;
                        return error(RangeError, "invalid payload length ".concat(this._payloadLength), true, 1002, 'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH');
                    }
                } else {
                    this._loop = false;
                    return error(RangeError, "invalid opcode ".concat(this._opcode), true, 1002, 'WS_ERR_INVALID_OPCODE');
                }
                if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
                this._masked = (buf[1] & 128) === 128;
                if (this._isServer) {
                    if (!this._masked) {
                        this._loop = false;
                        return error(RangeError, 'MASK must be set', true, 1002, 'WS_ERR_EXPECTED_MASK');
                    }
                } else if (this._masked) {
                    this._loop = false;
                    return error(RangeError, 'MASK must be clear', true, 1002, 'WS_ERR_UNEXPECTED_MASK');
                }
                if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
                else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
                else return this.haveLength();
            }
        },
        {
            /**
   * Gets extended payload length (7+16).
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */ key: "getPayloadLength16",
            value: function getPayloadLength16() {
                if (this._bufferedBytes < 2) {
                    this._loop = false;
                    return;
                }
                this._payloadLength = this.consume(2).readUInt16BE(0);
                return this.haveLength();
            }
        },
        {
            /**
   * Gets extended payload length (7+64).
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */ key: "getPayloadLength64",
            value: function getPayloadLength64() {
                if (this._bufferedBytes < 8) {
                    this._loop = false;
                    return;
                }
                var buf = this.consume(8);
                var num = buf.readUInt32BE(0);
                //
                // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
                // if payload length is greater than this number.
                //
                if (num > Math.pow(2, 53 - 32) - 1) {
                    this._loop = false;
                    return error(RangeError, 'Unsupported WebSocket frame: payload length > 2^53 - 1', false, 1009, 'WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH');
                }
                this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
                return this.haveLength();
            }
        },
        {
            /**
   * Payload length has been read.
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */ key: "haveLength",
            value: function haveLength() {
                if (this._payloadLength && this._opcode < 8) {
                    this._totalPayloadLength += this._payloadLength;
                    if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
                        this._loop = false;
                        return error(RangeError, 'Max payload size exceeded', false, 1009, 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH');
                    }
                }
                if (this._masked) this._state = GET_MASK;
                else this._state = GET_DATA;
            }
        },
        {
            /**
   * Reads mask bytes.
   *
   * @private
   */ key: "getMask",
            value: function getMask() {
                if (this._bufferedBytes < 4) {
                    this._loop = false;
                    return;
                }
                this._mask = this.consume(4);
                this._state = GET_DATA;
            }
        },
        {
            /**
   * Reads data bytes.
   *
   * @param {Function} cb Callback
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */ key: "getData",
            value: function getData(cb) {
                var data = EMPTY_BUFFER$2;
                if (this._payloadLength) {
                    if (this._bufferedBytes < this._payloadLength) {
                        this._loop = false;
                        return;
                    }
                    data = this.consume(this._payloadLength);
                    if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
                        unmask(data, this._mask);
                    }
                }
                if (this._opcode > 7) return this.controlMessage(data);
                if (this._compressed) {
                    this._state = INFLATING;
                    this.decompress(data, cb);
                    return;
                }
                if (data.length) {
                    //
                    // This message is not compressed so its length is the sum of the payload
                    // length of all fragments.
                    //
                    this._messageLength = this._totalPayloadLength;
                    this._fragments.push(data);
                }
                return this.dataMessage();
            }
        },
        {
            /**
   * Decompresses data.
   *
   * @param {Buffer} data Compressed data
   * @param {Function} cb Callback
   * @private
   */ key: "decompress",
            value: function decompress(data, cb) {
                var _this = this;
                var perMessageDeflate = this._extensions[PerMessageDeflate$2.extensionName];
                perMessageDeflate.decompress(data, this._fin, function(err, buf) {
                    if (err) return cb(err);
                    if (buf.length) {
                        _this._messageLength += buf.length;
                        if (_this._messageLength > _this._maxPayload && _this._maxPayload > 0) {
                            return cb(error(RangeError, 'Max payload size exceeded', false, 1009, 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'));
                        }
                        _this._fragments.push(buf);
                    }
                    var er = _this.dataMessage();
                    if (er) return cb(er);
                    _this.startLoop(cb);
                });
            }
        },
        {
            /**
   * Handles a data message.
   *
   * @return {(Error|undefined)} A possible error
   * @private
   */ key: "dataMessage",
            value: function dataMessage() {
                if (this._fin) {
                    var messageLength = this._messageLength;
                    var fragments = this._fragments;
                    this._totalPayloadLength = 0;
                    this._messageLength = 0;
                    this._fragmented = 0;
                    this._fragments = [];
                    if (this._opcode === 2) {
                        var data;
                        if (this._binaryType === 'nodebuffer') {
                            data = concat(fragments, messageLength);
                        } else if (this._binaryType === 'arraybuffer') {
                            data = toArrayBuffer(concat(fragments, messageLength));
                        } else {
                            data = fragments;
                        }
                        this.emit('message', data, true);
                    } else {
                        var buf = concat(fragments, messageLength);
                        if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
                            this._loop = false;
                            return error(Error, 'invalid UTF-8 sequence', true, 1007, 'WS_ERR_INVALID_UTF8');
                        }
                        this.emit('message', buf, false);
                    }
                }
                this._state = GET_INFO;
            }
        },
        {
            /**
   * Handles a control message.
   *
   * @param {Buffer} data Data to handle
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */ key: "controlMessage",
            value: function controlMessage(data) {
                if (this._opcode === 8) {
                    this._loop = false;
                    if (data.length === 0) {
                        this.emit('conclude', 1005, EMPTY_BUFFER$2);
                        this.end();
                    } else if (data.length === 1) {
                        return error(RangeError, 'invalid payload length 1', true, 1002, 'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH');
                    } else {
                        var code = data.readUInt16BE(0);
                        if (!isValidStatusCode$1(code)) {
                            return error(RangeError, "invalid status code ".concat(code), true, 1002, 'WS_ERR_INVALID_CLOSE_CODE');
                        }
                        var buf = data.slice(2);
                        if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
                            return error(Error, 'invalid UTF-8 sequence', true, 1007, 'WS_ERR_INVALID_UTF8');
                        }
                        this.emit('conclude', code, buf);
                        this.end();
                    }
                } else if (this._opcode === 9) {
                    this.emit('ping', data);
                } else {
                    this.emit('pong', data);
                }
                this._state = GET_INFO;
            }
        }
    ]);
    return Receiver;
}(Writable);
var receiver = Receiver$1;
/**
 * Builds an error object.
 *
 * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
 * @param {String} message The error message
 * @param {Boolean} prefix Specifies whether or not to add a default prefix to
 *     `message`
 * @param {Number} statusCode The status code
 * @param {String} errorCode The exposed error code
 * @return {(Error|RangeError)} The error
 * @private
 */ function error(ErrorCtor, message, prefix, statusCode, errorCode) {
    var err = new ErrorCtor(prefix ? "Invalid WebSocket frame: ".concat(message) : message);
    Error.captureStackTrace(err, error);
    err.code = errorCode;
    err[kStatusCode$1] = statusCode;
    return err;
}

function _classCallCheck$3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties$3(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$3(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$3(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$3(Constructor, staticProps);
    return Constructor;
}
function _defineProperty$2(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var randomFillSync = require$$5__default["default"].randomFillSync;
var PerMessageDeflate$1 = permessageDeflate;
var EMPTY_BUFFER$1 = constants.EMPTY_BUFFER;
var isValidStatusCode = validation.exports.isValidStatusCode;
var ref$2 = bufferUtil$2.exports, applyMask = ref$2.mask, toBuffer$1 = ref$2.toBuffer;
var kByteLength = Symbol('kByteLength');
var maskBuffer = buffer.Buffer.alloc(4);
var Sender$1 = /**
 * HyBi Sender implementation.
 */ /*#__PURE__*/ function() {
    function Sender(socket, extensions, generateMask) {
        _classCallCheck$3(this, Sender);
        this._extensions = extensions || {};
        if (generateMask) {
            this._generateMask = generateMask;
            this._maskBuffer = buffer.Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._deflating = false;
        this._queue = [];
    }
    _createClass$3(Sender, [
        {
            /**
   * Sends a close message to the other peer.
   *
   * @param {Number} [code] The status code component of the body
   * @param {(String|Buffer)} [data] The message component of the body
   * @param {Boolean} [mask=false] Specifies whether or not to mask the message
   * @param {Function} [cb] Callback
   * @public
   */ key: "close",
            value: function close(code, data, mask, cb) {
                var buf;
                if (code === undefined) {
                    buf = EMPTY_BUFFER$1;
                } else if (typeof code !== 'number' || !isValidStatusCode(code)) {
                    throw new TypeError('First argument must be a valid error code number');
                } else if (data === undefined || !data.length) {
                    buf = buffer.Buffer.allocUnsafe(2);
                    buf.writeUInt16BE(code, 0);
                } else {
                    var length = buffer.Buffer.byteLength(data);
                    if (length > 123) {
                        throw new RangeError('The message must not be greater than 123 bytes');
                    }
                    buf = buffer.Buffer.allocUnsafe(2 + length);
                    buf.writeUInt16BE(code, 0);
                    if (typeof data === 'string') {
                        buf.write(data, 2);
                    } else {
                        buf.set(data, 2);
                    }
                }
                var _obj;
                var options = (_obj = {}, _defineProperty$2(_obj, kByteLength, buf.length), _defineProperty$2(_obj, "fin", true), _defineProperty$2(_obj, "generateMask", this._generateMask), _defineProperty$2(_obj, "mask", mask), _defineProperty$2(_obj, "maskBuffer", this._maskBuffer), _defineProperty$2(_obj, "opcode", 8), _defineProperty$2(_obj, "readOnly", false), _defineProperty$2(_obj, "rsv1", false), _obj);
                if (this._deflating) {
                    this.enqueue([
                        this.dispatch,
                        buf,
                        false,
                        options,
                        cb
                    ]);
                } else {
                    this.sendFrame(Sender.frame(buf, options), cb);
                }
            }
        },
        {
            /**
   * Sends a ping message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */ key: "ping",
            value: function ping(data, mask, cb) {
                var byteLength;
                var readOnly;
                if (typeof data === 'string') {
                    byteLength = buffer.Buffer.byteLength(data);
                    readOnly = false;
                } else {
                    data = toBuffer$1(data);
                    byteLength = data.length;
                    readOnly = toBuffer$1.readOnly;
                }
                if (byteLength > 125) {
                    throw new RangeError('The data size must not be greater than 125 bytes');
                }
                var _obj;
                var options = (_obj = {}, _defineProperty$2(_obj, kByteLength, byteLength), _defineProperty$2(_obj, "fin", true), _defineProperty$2(_obj, "generateMask", this._generateMask), _defineProperty$2(_obj, "mask", mask), _defineProperty$2(_obj, "maskBuffer", this._maskBuffer), _defineProperty$2(_obj, "opcode", 9), _defineProperty$2(_obj, "readOnly", readOnly), _defineProperty$2(_obj, "rsv1", false), _obj);
                if (this._deflating) {
                    this.enqueue([
                        this.dispatch,
                        data,
                        false,
                        options,
                        cb
                    ]);
                } else {
                    this.sendFrame(Sender.frame(data, options), cb);
                }
            }
        },
        {
            /**
   * Sends a pong message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */ key: "pong",
            value: function pong(data, mask, cb) {
                var byteLength;
                var readOnly;
                if (typeof data === 'string') {
                    byteLength = buffer.Buffer.byteLength(data);
                    readOnly = false;
                } else {
                    data = toBuffer$1(data);
                    byteLength = data.length;
                    readOnly = toBuffer$1.readOnly;
                }
                if (byteLength > 125) {
                    throw new RangeError('The data size must not be greater than 125 bytes');
                }
                var _obj;
                var options = (_obj = {}, _defineProperty$2(_obj, kByteLength, byteLength), _defineProperty$2(_obj, "fin", true), _defineProperty$2(_obj, "generateMask", this._generateMask), _defineProperty$2(_obj, "mask", mask), _defineProperty$2(_obj, "maskBuffer", this._maskBuffer), _defineProperty$2(_obj, "opcode", 10), _defineProperty$2(_obj, "readOnly", readOnly), _defineProperty$2(_obj, "rsv1", false), _obj);
                if (this._deflating) {
                    this.enqueue([
                        this.dispatch,
                        data,
                        false,
                        options,
                        cb
                    ]);
                } else {
                    this.sendFrame(Sender.frame(data, options), cb);
                }
            }
        },
        {
            /**
   * Sends a data message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Object} options Options object
   * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
   *     or text
   * @param {Boolean} [options.compress=false] Specifies whether or not to
   *     compress `data`
   * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Function} [cb] Callback
   * @public
   */ key: "send",
            value: function send(data, options, cb) {
                var perMessageDeflate = this._extensions[PerMessageDeflate$1.extensionName];
                var opcode = options.binary ? 2 : 1;
                var rsv1 = options.compress;
                var byteLength;
                var readOnly;
                if (typeof data === 'string') {
                    byteLength = buffer.Buffer.byteLength(data);
                    readOnly = false;
                } else {
                    data = toBuffer$1(data);
                    byteLength = data.length;
                    readOnly = toBuffer$1.readOnly;
                }
                if (this._firstFragment) {
                    this._firstFragment = false;
                    if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? 'server_no_context_takeover' : 'client_no_context_takeover']) {
                        rsv1 = byteLength >= perMessageDeflate._threshold;
                    }
                    this._compress = rsv1;
                } else {
                    rsv1 = false;
                    opcode = 0;
                }
                if (options.fin) this._firstFragment = true;
                if (perMessageDeflate) {
                    var _obj;
                    var opts = (_obj = {}, _defineProperty$2(_obj, kByteLength, byteLength), _defineProperty$2(_obj, "fin", options.fin), _defineProperty$2(_obj, "generateMask", this._generateMask), _defineProperty$2(_obj, "mask", options.mask), _defineProperty$2(_obj, "maskBuffer", this._maskBuffer), _defineProperty$2(_obj, "opcode", opcode), _defineProperty$2(_obj, "readOnly", readOnly), _defineProperty$2(_obj, "rsv1", rsv1), _obj);
                    if (this._deflating) {
                        this.enqueue([
                            this.dispatch,
                            data,
                            this._compress,
                            opts,
                            cb
                        ]);
                    } else {
                        this.dispatch(data, this._compress, opts, cb);
                    }
                } else {
                    var _obj1;
                    this.sendFrame(Sender.frame(data, (_obj1 = {}, _defineProperty$2(_obj1, kByteLength, byteLength), _defineProperty$2(_obj1, "fin", options.fin), _defineProperty$2(_obj1, "generateMask", this._generateMask), _defineProperty$2(_obj1, "mask", options.mask), _defineProperty$2(_obj1, "maskBuffer", this._maskBuffer), _defineProperty$2(_obj1, "opcode", opcode), _defineProperty$2(_obj1, "readOnly", readOnly), _defineProperty$2(_obj1, "rsv1", false), _obj1)), cb);
                }
            }
        },
        {
            /**
   * Dispatches a message.
   *
   * @param {(Buffer|String)} data The message to send
   * @param {Boolean} [compress=false] Specifies whether or not to compress
   *     `data`
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @param {Function} [cb] Callback
   * @private
   */ key: "dispatch",
            value: function dispatch(data, compress, options, cb) {
                var _this = this;
                if (!compress) {
                    this.sendFrame(Sender.frame(data, options), cb);
                    return;
                }
                var perMessageDeflate = this._extensions[PerMessageDeflate$1.extensionName];
                this._bufferedBytes += options[kByteLength];
                this._deflating = true;
                perMessageDeflate.compress(data, options.fin, function(_, buf) {
                    if (_this._socket.destroyed) {
                        var err = new Error('The socket was closed while data was being compressed');
                        if (typeof cb === 'function') cb(err);
                        for(var i = 0; i < _this._queue.length; i++){
                            var params = _this._queue[i];
                            var callback = params[params.length - 1];
                            if (typeof callback === 'function') callback(err);
                        }
                        return;
                    }
                    _this._bufferedBytes -= options[kByteLength];
                    _this._deflating = false;
                    options.readOnly = false;
                    _this.sendFrame(Sender.frame(buf, options), cb);
                    _this.dequeue();
                });
            }
        },
        {
            /**
   * Executes queued send operations.
   *
   * @private
   */ key: "dequeue",
            value: function dequeue() {
                while(!this._deflating && this._queue.length){
                    var params = this._queue.shift();
                    this._bufferedBytes -= params[3][kByteLength];
                    Reflect.apply(params[0], this, params.slice(1));
                }
            }
        },
        {
            /**
   * Enqueues a send operation.
   *
   * @param {Array} params Send operation parameters.
   * @private
   */ key: "enqueue",
            value: function enqueue(params) {
                this._bufferedBytes += params[3][kByteLength];
                this._queue.push(params);
            }
        },
        {
            /**
   * Sends a frame.
   *
   * @param {Buffer[]} list The frame to send
   * @param {Function} [cb] Callback
   * @private
   */ key: "sendFrame",
            value: function sendFrame(list, cb) {
                if (list.length === 2) {
                    this._socket.cork();
                    this._socket.write(list[0]);
                    this._socket.write(list[1], cb);
                    this._socket.uncork();
                } else {
                    this._socket.write(list[0], cb);
                }
            }
        }
    ], [
        {
            key: "frame",
            value: /**
   * Frames a piece of data according to the HyBi WebSocket protocol.
   *
   * @param {(Buffer|String)} data The data to frame
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @return {(Buffer|String)[]} The framed data
   * @public
   */ function frame(data, options) {
                var mask;
                var merge = false;
                var offset = 2;
                var skipMasking = false;
                if (options.mask) {
                    mask = options.maskBuffer || maskBuffer;
                    if (options.generateMask) {
                        options.generateMask(mask);
                    } else {
                        randomFillSync(mask, 0, 4);
                    }
                    skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
                    offset = 6;
                }
                var dataLength;
                if (typeof data === 'string') {
                    if ((!options.mask || skipMasking) && options[kByteLength] !== undefined) {
                        dataLength = options[kByteLength];
                    } else {
                        data = buffer.Buffer.from(data);
                        dataLength = data.length;
                    }
                } else {
                    dataLength = data.length;
                    merge = options.mask && options.readOnly && !skipMasking;
                }
                var payloadLength = dataLength;
                if (dataLength >= 65536) {
                    offset += 8;
                    payloadLength = 127;
                } else if (dataLength > 125) {
                    offset += 2;
                    payloadLength = 126;
                }
                var target = buffer.Buffer.allocUnsafe(merge ? dataLength + offset : offset);
                target[0] = options.fin ? options.opcode | 128 : options.opcode;
                if (options.rsv1) target[0] |= 64;
                target[1] = payloadLength;
                if (payloadLength === 126) {
                    target.writeUInt16BE(dataLength, 2);
                } else if (payloadLength === 127) {
                    target[2] = target[3] = 0;
                    target.writeUIntBE(dataLength, 4, 6);
                }
                if (!options.mask) return [
                    target,
                    data
                ];
                target[1] |= 128;
                target[offset - 4] = mask[0];
                target[offset - 3] = mask[1];
                target[offset - 2] = mask[2];
                target[offset - 1] = mask[3];
                if (skipMasking) return [
                    target,
                    data
                ];
                if (merge) {
                    applyMask(data, mask, target, offset, dataLength);
                    return [
                        target
                    ];
                }
                applyMask(data, mask, data, 0, dataLength);
                return [
                    target,
                    data
                ];
            }
        }
    ]);
    return Sender;
}();
var sender = Sender$1;

function _assertThisInitialized$1(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck$2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf$1(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties$2(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$2(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$2(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf$1(o) {
    _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf$1(o);
}
function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf$1(subClass, superClass);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possibleConstructorReturn$1(self, call) {
    if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized$1(self);
}
function _setPrototypeOf$1(o, p) {
    _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf$1(o, p);
}
var _typeof$1 = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf$1(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf$1(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _isNativeReflectConstruct$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper$1(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf$1(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf$1(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn$1(this, result);
    };
}
var ref$1 = constants, kForOnEventAttribute$1 = ref$1.kForOnEventAttribute, kListener$1 = ref$1.kListener;
var kCode = Symbol('kCode');
var kData = Symbol('kData');
var kError = Symbol('kError');
var kMessage = Symbol('kMessage');
var kReason = Symbol('kReason');
var kTarget = Symbol('kTarget');
var kType = Symbol('kType');
var kWasClean = Symbol('kWasClean');
var Event = /**
 * Class representing an event.
 */ /*#__PURE__*/ function() {
    function Event(type) {
        _classCallCheck$2(this, Event);
        this[kTarget] = null;
        this[kType] = type;
    }
    _createClass$2(Event, [
        {
            key: "target",
            get: /**
   * @type {*}
   */ function get() {
                return this[kTarget];
            }
        },
        {
            key: "type",
            get: /**
   * @type {String}
   */ function get() {
                return this[kType];
            }
        }
    ]);
    return Event;
}();
Object.defineProperty(Event.prototype, 'target', {
    enumerable: true
});
Object.defineProperty(Event.prototype, 'type', {
    enumerable: true
});
var CloseEvent = /**
 * Class representing a close event.
 *
 * @extends Event
 */ /*#__PURE__*/ function(Event) {
    _inherits$1(CloseEvent, Event);
    var _super = _createSuper$1(CloseEvent);
    function CloseEvent(type) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck$2(this, CloseEvent);
        var _this;
        _this = _super.call(this, type);
        _this[kCode] = options.code === undefined ? 0 : options.code;
        _this[kReason] = options.reason === undefined ? '' : options.reason;
        _this[kWasClean] = options.wasClean === undefined ? false : options.wasClean;
        return _this;
    }
    _createClass$2(CloseEvent, [
        {
            key: "code",
            get: /**
   * @type {Number}
   */ function get() {
                return this[kCode];
            }
        },
        {
            key: "reason",
            get: /**
   * @type {String}
   */ function get() {
                return this[kReason];
            }
        },
        {
            key: "wasClean",
            get: /**
   * @type {Boolean}
   */ function get() {
                return this[kWasClean];
            }
        }
    ]);
    return CloseEvent;
}(_wrapNativeSuper(Event));
Object.defineProperty(CloseEvent.prototype, 'code', {
    enumerable: true
});
Object.defineProperty(CloseEvent.prototype, 'reason', {
    enumerable: true
});
Object.defineProperty(CloseEvent.prototype, 'wasClean', {
    enumerable: true
});
var ErrorEvent = /**
 * Class representing an error event.
 *
 * @extends Event
 */ /*#__PURE__*/ function(Event) {
    _inherits$1(ErrorEvent, Event);
    var _super = _createSuper$1(ErrorEvent);
    function ErrorEvent(type) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck$2(this, ErrorEvent);
        var _this;
        _this = _super.call(this, type);
        _this[kError] = options.error === undefined ? null : options.error;
        _this[kMessage] = options.message === undefined ? '' : options.message;
        return _this;
    }
    _createClass$2(ErrorEvent, [
        {
            key: "error",
            get: /**
   * @type {*}
   */ function get() {
                return this[kError];
            }
        },
        {
            key: "message",
            get: /**
   * @type {String}
   */ function get() {
                return this[kMessage];
            }
        }
    ]);
    return ErrorEvent;
}(_wrapNativeSuper(Event));
Object.defineProperty(ErrorEvent.prototype, 'error', {
    enumerable: true
});
Object.defineProperty(ErrorEvent.prototype, 'message', {
    enumerable: true
});
var MessageEvent = /**
 * Class representing a message event.
 *
 * @extends Event
 */ /*#__PURE__*/ function(Event) {
    _inherits$1(MessageEvent, Event);
    var _super = _createSuper$1(MessageEvent);
    function MessageEvent(type) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck$2(this, MessageEvent);
        var _this;
        _this = _super.call(this, type);
        _this[kData] = options.data === undefined ? null : options.data;
        return _this;
    }
    _createClass$2(MessageEvent, [
        {
            key: "data",
            get: /**
   * @type {*}
   */ function get() {
                return this[kData];
            }
        }
    ]);
    return MessageEvent;
}(_wrapNativeSuper(Event));
Object.defineProperty(MessageEvent.prototype, 'data', {
    enumerable: true
});
/**
 * This provides methods for emulating the `EventTarget` interface. It's not
 * meant to be used directly.
 *
 * @mixin
 */ var EventTarget = {
    /**
   * Register an event listener.
   *
   * @param {String} type A string representing the event type to listen for
   * @param {Function} listener The listener to add
   * @param {Object} [options] An options object specifies characteristics about
   *     the event listener
   * @param {Boolean} [options.once=false] A `Boolean` indicating that the
   *     listener should be invoked at most once after being added. If `true`,
   *     the listener would be automatically removed when invoked.
   * @public
   */ addEventListener: function addEventListener(type, listener) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var wrapper;
        if (type === 'message') {
            wrapper = function onMessage(data, isBinary) {
                var event = new MessageEvent('message', {
                    data: isBinary ? data : data.toString()
                });
                event[kTarget] = this;
                listener.call(this, event);
            };
        } else if (type === 'close') {
            wrapper = function onClose(code, message) {
                var event = new CloseEvent('close', {
                    code: code,
                    reason: message.toString(),
                    wasClean: this._closeFrameReceived && this._closeFrameSent
                });
                event[kTarget] = this;
                listener.call(this, event);
            };
        } else if (type === 'error') {
            wrapper = function onError(error) {
                var event = new ErrorEvent('error', {
                    error: error,
                    message: error.message
                });
                event[kTarget] = this;
                listener.call(this, event);
            };
        } else if (type === 'open') {
            wrapper = function onOpen() {
                var event = new Event('open');
                event[kTarget] = this;
                listener.call(this, event);
            };
        } else {
            return;
        }
        wrapper[kForOnEventAttribute$1] = !!options[kForOnEventAttribute$1];
        wrapper[kListener$1] = listener;
        if (options.once) {
            this.once(type, wrapper);
        } else {
            this.on(type, wrapper);
        }
    },
    /**
   * Remove an event listener.
   *
   * @param {String} type A string representing the event type to remove
   * @param {Function} handler The listener to remove
   * @public
   */ removeEventListener: function removeEventListener(type, handler) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = this.listeners(type)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var listener = _step.value;
                if (listener[kListener$1] === handler && !listener[kForOnEventAttribute$1]) {
                    this.removeListener(type, listener);
                    break;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
};
var eventTarget = {
    CloseEvent: CloseEvent,
    ErrorEvent: ErrorEvent,
    Event: Event,
    EventTarget: EventTarget,
    MessageEvent: MessageEvent
};

var tokenChars = validation.exports.tokenChars;
/**
 * Adds an offer to the map of extension offers or a parameter to the map of
 * parameters.
 *
 * @param {Object} dest The map of extension offers or parameters
 * @param {String} name The extension or parameter name
 * @param {(Object|Boolean|String)} elem The extension parameters or the
 *     parameter value
 * @private
 */ function push(dest, name, elem) {
    if (dest[name] === undefined) dest[name] = [
        elem
    ];
    else dest[name].push(elem);
}
/**
 * Parses the `Sec-WebSocket-Extensions` header into an object.
 *
 * @param {String} header The field value of the header
 * @return {Object} The parsed object
 * @public
 */ function parse$1(header) {
    var offers = Object.create(null);
    var params = Object.create(null);
    var mustUnescape = false;
    var isEscaping = false;
    var inQuotes = false;
    var extensionName;
    var paramName;
    var start = -1;
    var code = -1;
    var end = -1;
    var i = 0;
    for(; i < header.length; i++){
        code = header.charCodeAt(i);
        if (extensionName === undefined) {
            if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (i !== 0 && (code === 32 /* ' ' */  || code === 9)) {
                if (end === -1 && start !== -1) end = i;
            } else if (code === 59 /* ';' */  || code === 44 /* ',' */ ) {
                if (start === -1) {
                    throw new SyntaxError("Unexpected character at index ".concat(i));
                }
                if (end === -1) end = i;
                var name = header.slice(start, end);
                if (code === 44) {
                    push(offers, name, params);
                    params = Object.create(null);
                } else {
                    extensionName = name;
                }
                start = end = -1;
            } else {
                throw new SyntaxError("Unexpected character at index ".concat(i));
            }
        } else if (paramName === undefined) {
            if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (code === 32 || code === 9) {
                if (end === -1 && start !== -1) end = i;
            } else if (code === 59 || code === 44) {
                if (start === -1) {
                    throw new SyntaxError("Unexpected character at index ".concat(i));
                }
                if (end === -1) end = i;
                push(params, header.slice(start, end), true);
                if (code === 44) {
                    push(offers, extensionName, params);
                    params = Object.create(null);
                    extensionName = undefined;
                }
                start = end = -1;
            } else if (code === 61 /* '=' */  && start !== -1 && end === -1) {
                paramName = header.slice(start, i);
                start = end = -1;
            } else {
                throw new SyntaxError("Unexpected character at index ".concat(i));
            }
        } else {
            //
            // The value of a quoted-string after unescaping must conform to the
            // token ABNF, so only token characters are valid.
            // Ref: https://tools.ietf.org/html/rfc6455#section-9.1
            //
            if (isEscaping) {
                if (tokenChars[code] !== 1) {
                    throw new SyntaxError("Unexpected character at index ".concat(i));
                }
                if (start === -1) start = i;
                else if (!mustUnescape) mustUnescape = true;
                isEscaping = false;
            } else if (inQuotes) {
                if (tokenChars[code] === 1) {
                    if (start === -1) start = i;
                } else if (code === 34 /* '"' */  && start !== -1) {
                    inQuotes = false;
                    end = i;
                } else if (code === 92 /* '\' */ ) {
                    isEscaping = true;
                } else {
                    throw new SyntaxError("Unexpected character at index ".concat(i));
                }
            } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
                inQuotes = true;
            } else if (end === -1 && tokenChars[code] === 1) {
                if (start === -1) start = i;
            } else if (start !== -1 && (code === 32 || code === 9)) {
                if (end === -1) end = i;
            } else if (code === 59 || code === 44) {
                if (start === -1) {
                    throw new SyntaxError("Unexpected character at index ".concat(i));
                }
                if (end === -1) end = i;
                var value = header.slice(start, end);
                if (mustUnescape) {
                    value = value.replace(/\\/g, '');
                    mustUnescape = false;
                }
                push(params, paramName, value);
                if (code === 44) {
                    push(offers, extensionName, params);
                    params = Object.create(null);
                    extensionName = undefined;
                }
                paramName = undefined;
                start = end = -1;
            } else {
                throw new SyntaxError("Unexpected character at index ".concat(i));
            }
        }
    }
    if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError('Unexpected end of input');
    }
    if (end === -1) end = i;
    var token = header.slice(start, end);
    if (extensionName === undefined) {
        push(offers, token, params);
    } else {
        if (paramName === undefined) {
            push(params, token, true);
        } else if (mustUnescape) {
            push(params, paramName, token.replace(/\\/g, ''));
        } else {
            push(params, paramName, token);
        }
        push(offers, extensionName, params);
    }
    return offers;
}
/**
 * Builds the `Sec-WebSocket-Extensions` header field value.
 *
 * @param {Object} extensions The map of extensions and parameters to format
 * @return {String} A string representing the given object
 * @public
 */ function format$1(extensions) {
    return Object.keys(extensions).map(function(extension) {
        var configurations = extensions[extension];
        if (!Array.isArray(configurations)) configurations = [
            configurations
        ];
        return configurations.map(function(params) {
            return [
                extension
            ].concat(Object.keys(params).map(function(k) {
                var values = params[k];
                if (!Array.isArray(values)) values = [
                    values
                ];
                return values.map(function(v) {
                    return v === true ? k : "".concat(k, "=").concat(v);
                }).join('; ');
            })).join('; ');
        }).join(', ');
    }).join(', ');
}
var extension = {
    format: format$1,
    parse: parse$1
};

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties$1(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
}
function _defineProperty$1(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _objectSpread$1(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$1(target, key, source[key]);
        });
    }
    return target;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var EventEmitter = require$$0__default$3["default"];
var https = require$$1__default["default"];
var http = require$$2__default["default"];
var net = require$$3__default["default"];
var tls = require$$4__default["default"];
var ref = require$$5__default["default"], randomBytes = ref.randomBytes, createHash = ref.createHash;
require$$0__default$1["default"].Readable;
var URL$1 = require$$7__default["default"].URL;
var PerMessageDeflate = permessageDeflate;
var Receiver = receiver;
var Sender = sender;
var ref1 = constants, BINARY_TYPES = ref1.BINARY_TYPES, EMPTY_BUFFER = ref1.EMPTY_BUFFER, GUID = ref1.GUID, kForOnEventAttribute = ref1.kForOnEventAttribute, kListener = ref1.kListener, kStatusCode = ref1.kStatusCode, kWebSocket = ref1.kWebSocket, NOOP = ref1.NOOP;
var ref2 = eventTarget, _EventTarget = ref2.EventTarget, addEventListener = _EventTarget.addEventListener, removeEventListener = _EventTarget.removeEventListener;
var ref3 = extension, format = ref3.format, parse = ref3.parse;
var toBuffer = bufferUtil$2.exports.toBuffer;
var readyStates = [
    'CONNECTING',
    'OPEN',
    'CLOSING',
    'CLOSED'
];
var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
var protocolVersions = [
    8,
    13
];
var closeTimeout = 30 * 1000;
var WebSocket = /**
 * Class representing a WebSocket.
 *
 * @extends EventEmitter
 */ /*#__PURE__*/ function(EventEmitter1) {
    _inherits(WebSocket, EventEmitter1);
    var _super = _createSuper(WebSocket);
    function WebSocket(address, protocols, options) {
        _classCallCheck$1(this, WebSocket);
        var _this;
        _this = _super.call(this);
        _this._binaryType = BINARY_TYPES[0];
        _this._closeCode = 1006;
        _this._closeFrameReceived = false;
        _this._closeFrameSent = false;
        _this._closeMessage = EMPTY_BUFFER;
        _this._closeTimer = null;
        _this._extensions = {};
        _this._paused = false;
        _this._protocol = '';
        _this._readyState = WebSocket.CONNECTING;
        _this._receiver = null;
        _this._sender = null;
        _this._socket = null;
        if (address !== null) {
            _this._bufferedAmount = 0;
            _this._isServer = false;
            _this._redirects = 0;
            if (protocols === undefined) {
                protocols = [];
            } else if (!Array.isArray(protocols)) {
                if (typeof protocols === 'object' && protocols !== null) {
                    options = protocols;
                    protocols = [];
                } else {
                    protocols = [
                        protocols
                    ];
                }
            }
            initAsClient(_assertThisInitialized(_this), address, protocols, options);
        } else {
            _this._isServer = true;
        }
        return _this;
    }
    _createClass$1(WebSocket, [
        {
            key: "binaryType",
            get: /**
   * This deviates from the WHATWG interface since ws doesn't support the
   * required default "blob" type (instead we define a custom "nodebuffer"
   * type).
   *
   * @type {String}
   */ function get() {
                return this._binaryType;
            },
            set: function set(type) {
                if (!BINARY_TYPES.includes(type)) return;
                this._binaryType = type;
                //
                // Allow to change `binaryType` on the fly.
                //
                if (this._receiver) this._receiver._binaryType = type;
            }
        },
        {
            key: "bufferedAmount",
            get: /**
   * @type {Number}
   */ function get() {
                if (!this._socket) return this._bufferedAmount;
                return this._socket._writableState.length + this._sender._bufferedBytes;
            }
        },
        {
            key: "extensions",
            get: /**
   * @type {String}
   */ function get() {
                return Object.keys(this._extensions).join();
            }
        },
        {
            key: "isPaused",
            get: /**
   * @type {Boolean}
   */ function get() {
                return this._paused;
            }
        },
        {
            key: "onclose",
            get: /**
   * @type {Function}
   */ /* istanbul ignore next */ function get() {
                return null;
            }
        },
        {
            key: "onerror",
            get: /**
   * @type {Function}
   */ /* istanbul ignore next */ function get() {
                return null;
            }
        },
        {
            key: "onopen",
            get: /**
   * @type {Function}
   */ /* istanbul ignore next */ function get() {
                return null;
            }
        },
        {
            key: "onmessage",
            get: /**
   * @type {Function}
   */ /* istanbul ignore next */ function get() {
                return null;
            }
        },
        {
            key: "protocol",
            get: /**
   * @type {String}
   */ function get() {
                return this._protocol;
            }
        },
        {
            key: "readyState",
            get: /**
   * @type {Number}
   */ function get() {
                return this._readyState;
            }
        },
        {
            key: "url",
            get: /**
   * @type {String}
   */ function get() {
                return this._url;
            }
        },
        {
            /**
   * Set up the socket and the internal resources.
   *
   * @param {(net.Socket|tls.Socket)} socket The network socket between the
   *     server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Object} options Options object
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Number} [options.maxPayload=0] The maximum allowed message size
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   * @private
   */ key: "setSocket",
            value: function setSocket(socket, head, options) {
                var receiver = new Receiver({
                    binaryType: this.binaryType,
                    extensions: this._extensions,
                    isServer: this._isServer,
                    maxPayload: options.maxPayload,
                    skipUTF8Validation: options.skipUTF8Validation
                });
                this._sender = new Sender(socket, this._extensions, options.generateMask);
                this._receiver = receiver;
                this._socket = socket;
                receiver[kWebSocket] = this;
                socket[kWebSocket] = this;
                receiver.on('conclude', receiverOnConclude);
                receiver.on('drain', receiverOnDrain);
                receiver.on('error', receiverOnError);
                receiver.on('message', receiverOnMessage);
                receiver.on('ping', receiverOnPing);
                receiver.on('pong', receiverOnPong);
                socket.setTimeout(0);
                socket.setNoDelay();
                if (head.length > 0) socket.unshift(head);
                socket.on('close', socketOnClose);
                socket.on('data', socketOnData);
                socket.on('end', socketOnEnd);
                socket.on('error', socketOnError);
                this._readyState = WebSocket.OPEN;
                this.emit('open');
            }
        },
        {
            /**
   * Emit the `'close'` event.
   *
   * @private
   */ key: "emitClose",
            value: function emitClose() {
                if (!this._socket) {
                    this._readyState = WebSocket.CLOSED;
                    this.emit('close', this._closeCode, this._closeMessage);
                    return;
                }
                if (this._extensions[PerMessageDeflate.extensionName]) {
                    this._extensions[PerMessageDeflate.extensionName].cleanup();
                }
                this._receiver.removeAllListeners();
                this._readyState = WebSocket.CLOSED;
                this.emit('close', this._closeCode, this._closeMessage);
            }
        },
        {
            /**
   * Start a closing handshake.
   *
   *          +----------+   +-----------+   +----------+
   *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
   *    |     +----------+   +-----------+   +----------+     |
   *          +----------+   +-----------+         |
   * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
   *          +----------+   +-----------+   |
   *    |           |                        |   +---+        |
   *                +------------------------+-->|fin| - - - -
   *    |         +---+                      |   +---+
   *     - - - - -|fin|<---------------------+
   *              +---+
   *
   * @param {Number} [code] Status code explaining why the connection is closing
   * @param {(String|Buffer)} [data] The reason why the connection is
   *     closing
   * @public
   */ key: "close",
            value: function close(code, data) {
                var _this = this;
                if (this.readyState === WebSocket.CLOSED) return;
                if (this.readyState === WebSocket.CONNECTING) {
                    var msg = 'WebSocket was closed before the connection was established';
                    return abortHandshake(this, this._req, msg);
                }
                if (this.readyState === WebSocket.CLOSING) {
                    if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
                        this._socket.end();
                    }
                    return;
                }
                this._readyState = WebSocket.CLOSING;
                this._sender.close(code, data, !this._isServer, function(err) {
                    //
                    // This error is handled by the `'error'` listener on the socket. We only
                    // want to know if the close frame has been sent here.
                    //
                    if (err) return;
                    _this._closeFrameSent = true;
                    if (_this._closeFrameReceived || _this._receiver._writableState.errorEmitted) {
                        _this._socket.end();
                    }
                });
                //
                // Specify a timeout for the closing handshake to complete.
                //
                this._closeTimer = setTimeout(this._socket.destroy.bind(this._socket), closeTimeout);
            }
        },
        {
            /**
   * Pause the socket.
   *
   * @public
   */ key: "pause",
            value: function pause() {
                if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
                    return;
                }
                this._paused = true;
                this._socket.pause();
            }
        },
        {
            /**
   * Send a ping.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the ping is sent
   * @public
   */ key: "ping",
            value: function ping(data, mask, cb) {
                if (this.readyState === WebSocket.CONNECTING) {
                    throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
                }
                if (typeof data === 'function') {
                    cb = data;
                    data = mask = undefined;
                } else if (typeof mask === 'function') {
                    cb = mask;
                    mask = undefined;
                }
                if (typeof data === 'number') data = data.toString();
                if (this.readyState !== WebSocket.OPEN) {
                    sendAfterClose(this, data, cb);
                    return;
                }
                if (mask === undefined) mask = !this._isServer;
                this._sender.ping(data || EMPTY_BUFFER, mask, cb);
            }
        },
        {
            /**
   * Send a pong.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the pong is sent
   * @public
   */ key: "pong",
            value: function pong(data, mask, cb) {
                if (this.readyState === WebSocket.CONNECTING) {
                    throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
                }
                if (typeof data === 'function') {
                    cb = data;
                    data = mask = undefined;
                } else if (typeof mask === 'function') {
                    cb = mask;
                    mask = undefined;
                }
                if (typeof data === 'number') data = data.toString();
                if (this.readyState !== WebSocket.OPEN) {
                    sendAfterClose(this, data, cb);
                    return;
                }
                if (mask === undefined) mask = !this._isServer;
                this._sender.pong(data || EMPTY_BUFFER, mask, cb);
            }
        },
        {
            /**
   * Resume the socket.
   *
   * @public
   */ key: "resume",
            value: function resume() {
                if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
                    return;
                }
                this._paused = false;
                if (!this._receiver._writableState.needDrain) this._socket.resume();
            }
        },
        {
            /**
   * Send a data message.
   *
   * @param {*} data The message to send
   * @param {Object} [options] Options object
   * @param {Boolean} [options.binary] Specifies whether `data` is binary or
   *     text
   * @param {Boolean} [options.compress] Specifies whether or not to compress
   *     `data`
   * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when data is written out
   * @public
   */ key: "send",
            value: function send(data, options, cb) {
                if (this.readyState === WebSocket.CONNECTING) {
                    throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
                }
                if (typeof options === 'function') {
                    cb = options;
                    options = {};
                }
                if (typeof data === 'number') data = data.toString();
                if (this.readyState !== WebSocket.OPEN) {
                    sendAfterClose(this, data, cb);
                    return;
                }
                var opts = _objectSpread$1({
                    binary: typeof data !== 'string',
                    mask: !this._isServer,
                    compress: true,
                    fin: true
                }, options);
                if (!this._extensions[PerMessageDeflate.extensionName]) {
                    opts.compress = false;
                }
                this._sender.send(data || EMPTY_BUFFER, opts, cb);
            }
        },
        {
            /**
   * Forcibly close the connection.
   *
   * @public
   */ key: "terminate",
            value: function terminate() {
                if (this.readyState === WebSocket.CLOSED) return;
                if (this.readyState === WebSocket.CONNECTING) {
                    var msg = 'WebSocket was closed before the connection was established';
                    return abortHandshake(this, this._req, msg);
                }
                if (this._socket) {
                    this._readyState = WebSocket.CLOSING;
                    this._socket.destroy();
                }
            }
        }
    ]);
    return WebSocket;
}(EventEmitter);
/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'CONNECTING', {
    enumerable: true,
    value: readyStates.indexOf('CONNECTING')
});
/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'CONNECTING', {
    enumerable: true,
    value: readyStates.indexOf('CONNECTING')
});
/**
 * @constant {Number} OPEN
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'OPEN', {
    enumerable: true,
    value: readyStates.indexOf('OPEN')
});
/**
 * @constant {Number} OPEN
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'OPEN', {
    enumerable: true,
    value: readyStates.indexOf('OPEN')
});
/**
 * @constant {Number} CLOSING
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'CLOSING', {
    enumerable: true,
    value: readyStates.indexOf('CLOSING')
});
/**
 * @constant {Number} CLOSING
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'CLOSING', {
    enumerable: true,
    value: readyStates.indexOf('CLOSING')
});
/**
 * @constant {Number} CLOSED
 * @memberof WebSocket
 */ Object.defineProperty(WebSocket, 'CLOSED', {
    enumerable: true,
    value: readyStates.indexOf('CLOSED')
});
/**
 * @constant {Number} CLOSED
 * @memberof WebSocket.prototype
 */ Object.defineProperty(WebSocket.prototype, 'CLOSED', {
    enumerable: true,
    value: readyStates.indexOf('CLOSED')
});
[
    'binaryType',
    'bufferedAmount',
    'extensions',
    'isPaused',
    'protocol',
    'readyState',
    'url'
].forEach(function(property) {
    Object.defineProperty(WebSocket.prototype, property, {
        enumerable: true
    });
});
//
// Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
// See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
//
[
    'open',
    'error',
    'close',
    'message'
].forEach(function(method) {
    Object.defineProperty(WebSocket.prototype, "on".concat(method), {
        enumerable: true,
        get: function get() {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = this.listeners(method)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var listener = _step.value;
                    if (listener[kForOnEventAttribute]) return listener[kListener];
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return null;
        },
        set: function set(handler) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = this.listeners(method)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var listener = _step.value;
                    if (listener[kForOnEventAttribute]) {
                        this.removeListener(method, listener);
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            if (typeof handler !== 'function') return;
            this.addEventListener(method, handler, _defineProperty$1({}, kForOnEventAttribute, true));
        }
    });
});
WebSocket.prototype.addEventListener = addEventListener;
WebSocket.prototype.removeEventListener = removeEventListener;
var websocket = WebSocket;
/**
 * Initialize a WebSocket client.
 *
 * @param {WebSocket} websocket The client to initialize
 * @param {(String|URL)} address The URL to which to connect
 * @param {Array} protocols The subprotocols
 * @param {Object} [options] Connection options
 * @param {Boolean} [options.followRedirects=false] Whether or not to follow
 *     redirects
 * @param {Function} [options.generateMask] The function used to generate the
 *     masking key
 * @param {Number} [options.handshakeTimeout] Timeout in milliseconds for the
 *     handshake request
 * @param {Number} [options.maxPayload=104857600] The maximum allowed message
 *     size
 * @param {Number} [options.maxRedirects=10] The maximum number of redirects
 *     allowed
 * @param {String} [options.origin] Value of the `Origin` or
 *     `Sec-WebSocket-Origin` header
 * @param {(Boolean|Object)} [options.perMessageDeflate=true] Enable/disable
 *     permessage-deflate
 * @param {Number} [options.protocolVersion=13] Value of the
 *     `Sec-WebSocket-Version` header
 * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
 *     not to skip UTF-8 validation for text and close messages
 * @private
 */ function initAsClient(websocket, address, protocols, options) {
    var opts = _objectSpread$1({
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10
    }, options, {
        createConnection: undefined,
        socketPath: undefined,
        hostname: undefined,
        protocol: undefined,
        timeout: undefined,
        method: undefined,
        host: undefined,
        path: undefined,
        port: undefined
    });
    if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError("Unsupported protocol version: ".concat(opts.protocolVersion, " ") + "(supported versions: ".concat(protocolVersions.join(', '), ")"));
    }
    var parsedUrl;
    if (_instanceof(address, URL$1)) {
        parsedUrl = address;
        websocket._url = address.href;
    } else {
        try {
            parsedUrl = new URL$1(address);
        } catch (e) {
            throw new SyntaxError("Invalid URL: ".concat(address));
        }
        websocket._url = address;
    }
    var isSecure = parsedUrl.protocol === 'wss:';
    var isUnixSocket = parsedUrl.protocol === 'ws+unix:';
    var invalidURLMessage;
    if (parsedUrl.protocol !== 'ws:' && !isSecure && !isUnixSocket) {
        invalidURLMessage = 'The URL\'s protocol must be one of "ws:", "wss:", or "ws+unix:"';
    } else if (isUnixSocket && !parsedUrl.pathname) {
        invalidURLMessage = "The URL's pathname is empty";
    } else if (parsedUrl.hash) {
        invalidURLMessage = 'The URL contains a fragment identifier';
    }
    if (invalidURLMessage) {
        var err = new SyntaxError(invalidURLMessage);
        if (websocket._redirects === 0) {
            throw err;
        } else {
            emitErrorAndClose(websocket, err);
            return;
        }
    }
    var defaultPort = isSecure ? 443 : 80;
    var key = randomBytes(16).toString('base64');
    var get = isSecure ? https.get : http.get;
    var protocolSet = new Set();
    var perMessageDeflate;
    opts.createConnection = isSecure ? tlsConnect : netConnect;
    opts.defaultPort = opts.defaultPort || defaultPort;
    opts.port = parsedUrl.port || defaultPort;
    opts.host = parsedUrl.hostname.startsWith('[') ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
    opts.headers = _objectSpread$1({
        'Sec-WebSocket-Version': opts.protocolVersion,
        'Sec-WebSocket-Key': key,
        Connection: 'Upgrade',
        Upgrade: 'websocket'
    }, opts.headers);
    opts.path = parsedUrl.pathname + parsedUrl.search;
    opts.timeout = opts.handshakeTimeout;
    if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate(opts.perMessageDeflate !== true ? opts.perMessageDeflate : {}, false, opts.maxPayload);
        opts.headers['Sec-WebSocket-Extensions'] = format(_defineProperty$1({}, PerMessageDeflate.extensionName, perMessageDeflate.offer()));
    }
    if (protocols.length) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = protocols[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var protocol = _step.value;
                if (typeof protocol !== 'string' || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
                    throw new SyntaxError('An invalid or duplicated subprotocol was specified');
                }
                protocolSet.add(protocol);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        opts.headers['Sec-WebSocket-Protocol'] = protocols.join(',');
    }
    if (opts.origin) {
        if (opts.protocolVersion < 13) {
            opts.headers['Sec-WebSocket-Origin'] = opts.origin;
        } else {
            opts.headers.Origin = opts.origin;
        }
    }
    if (parsedUrl.username || parsedUrl.password) {
        opts.auth = "".concat(parsedUrl.username, ":").concat(parsedUrl.password);
    }
    if (isUnixSocket) {
        var parts = opts.path.split(':');
        opts.socketPath = parts[0];
        opts.path = parts[1];
    }
    var req = websocket._req = get(opts);
    if (opts.timeout) {
        req.on('timeout', function() {
            abortHandshake(websocket, req, 'Opening handshake has timed out');
        });
    }
    req.on('error', function(err) {
        if (req === null || req.aborted) return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
    });
    req.on('response', function(res) {
        var location = res.headers.location;
        var statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
            if (++websocket._redirects > opts.maxRedirects) {
                abortHandshake(websocket, req, 'Maximum redirects exceeded');
                return;
            }
            req.abort();
            var addr;
            try {
                addr = new URL$1(location, address);
            } catch (e) {
                var err = new SyntaxError("Invalid URL: ".concat(location));
                emitErrorAndClose(websocket, err);
                return;
            }
            initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit('unexpected-response', req, res)) {
            abortHandshake(websocket, req, "Unexpected server response: ".concat(res.statusCode));
        }
    });
    req.on('upgrade', function(res, socket, head) {
        websocket.emit('upgrade', res);
        //
        // The user may have closed the connection from a listener of the `upgrade`
        // event.
        //
        if (websocket.readyState !== WebSocket.CONNECTING) return;
        req = websocket._req = null;
        var digest = createHash('sha1').update(key + GUID).digest('base64');
        if (res.headers['sec-websocket-accept'] !== digest) {
            abortHandshake(websocket, socket, 'Invalid Sec-WebSocket-Accept header');
            return;
        }
        var serverProt = res.headers['sec-websocket-protocol'];
        var protError;
        if (serverProt !== undefined) {
            if (!protocolSet.size) {
                protError = 'Server sent a subprotocol but none was requested';
            } else if (!protocolSet.has(serverProt)) {
                protError = 'Server sent an invalid subprotocol';
            }
        } else if (protocolSet.size) {
            protError = 'Server sent no subprotocol';
        }
        if (protError) {
            abortHandshake(websocket, socket, protError);
            return;
        }
        if (serverProt) websocket._protocol = serverProt;
        var secWebSocketExtensions = res.headers['sec-websocket-extensions'];
        if (secWebSocketExtensions !== undefined) {
            if (!perMessageDeflate) {
                var message = 'Server sent a Sec-WebSocket-Extensions header but no extension ' + 'was requested';
                abortHandshake(websocket, socket, message);
                return;
            }
            var extensions;
            try {
                extensions = parse(secWebSocketExtensions);
            } catch (err) {
                var message1 = 'Invalid Sec-WebSocket-Extensions header';
                abortHandshake(websocket, socket, message1);
                return;
            }
            var extensionNames = Object.keys(extensions);
            if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
                var message2 = 'Server indicated an extension that was not requested';
                abortHandshake(websocket, socket, message2);
                return;
            }
            try {
                perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
            } catch (err1) {
                var message3 = 'Invalid Sec-WebSocket-Extensions header';
                abortHandshake(websocket, socket, message3);
                return;
            }
            websocket._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
            generateMask: opts.generateMask,
            maxPayload: opts.maxPayload,
            skipUTF8Validation: opts.skipUTF8Validation
        });
    });
}
/**
 * Emit the `'error'` and `'close'` event.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {Error} The error to emit
 * @private
 */ function emitErrorAndClose(websocket, err) {
    websocket._readyState = WebSocket.CLOSING;
    websocket.emit('error', err);
    websocket.emitClose();
}
/**
 * Create a `net.Socket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {net.Socket} The newly created socket used to start the connection
 * @private
 */ function netConnect(options) {
    options.path = options.socketPath;
    return net.connect(options);
}
/**
 * Create a `tls.TLSSocket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {tls.TLSSocket} The newly created socket used to start the connection
 * @private
 */ function tlsConnect(options) {
    options.path = undefined;
    if (!options.servername && options.servername !== '') {
        options.servername = net.isIP(options.host) ? '' : options.host;
    }
    return tls.connect(options);
}
/**
 * Abort the handshake and emit an error.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {(http.ClientRequest|net.Socket|tls.Socket)} stream The request to
 *     abort or the socket to destroy
 * @param {String} message The error message
 * @private
 */ function abortHandshake(websocket, stream, message) {
    websocket._readyState = WebSocket.CLOSING;
    var err = new Error(message);
    Error.captureStackTrace(err, abortHandshake);
    if (stream.setHeader) {
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
            //
            // On Node.js >= 14.3.0 `request.abort()` does not destroy the socket if
            // called after the request completed. See
            // https://github.com/websockets/ws/issues/1869.
            //
            stream.socket.destroy();
        }
        stream.once('abort', websocket.emitClose.bind(websocket));
        websocket.emit('error', err);
    } else {
        stream.destroy(err);
        stream.once('error', websocket.emit.bind(websocket, 'error'));
        stream.once('close', websocket.emitClose.bind(websocket));
    }
}
/**
 * Handle cases where the `ping()`, `pong()`, or `send()` methods are called
 * when the `readyState` attribute is `CLOSING` or `CLOSED`.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {*} [data] The data to send
 * @param {Function} [cb] Callback
 * @private
 */ function sendAfterClose(websocket, data, cb) {
    if (data) {
        var length = toBuffer(data).length;
        //
        // The `_bufferedAmount` property is used only when the peer is a client and
        // the opening handshake fails. Under these circumstances, in fact, the
        // `setSocket()` method is not called, so the `_socket` and `_sender`
        // properties are set to `null`.
        //
        if (websocket._socket) websocket._sender._bufferedBytes += length;
        else websocket._bufferedAmount += length;
    }
    if (cb) {
        var err = new Error("WebSocket is not open: readyState ".concat(websocket.readyState, " ") + "(".concat(readyStates[websocket.readyState], ")"));
        cb(err);
    }
}
/**
 * The listener of the `Receiver` `'conclude'` event.
 *
 * @param {Number} code The status code
 * @param {Buffer} reason The reason for closing
 * @private
 */ function receiverOnConclude(code, reason) {
    var websocket = this[kWebSocket];
    websocket._closeFrameReceived = true;
    websocket._closeMessage = reason;
    websocket._closeCode = code;
    if (websocket._socket[kWebSocket] === undefined) return;
    websocket._socket.removeListener('data', socketOnData);
    process__default["default"].nextTick(resume, websocket._socket);
    if (code === 1005) websocket.close();
    else websocket.close(code, reason);
}
/**
 * The listener of the `Receiver` `'drain'` event.
 *
 * @private
 */ function receiverOnDrain() {
    var websocket = this[kWebSocket];
    if (!websocket.isPaused) websocket._socket.resume();
}
/**
 * The listener of the `Receiver` `'error'` event.
 *
 * @param {(RangeError|Error)} err The emitted error
 * @private
 */ function receiverOnError(err) {
    var websocket = this[kWebSocket];
    if (websocket._socket[kWebSocket] !== undefined) {
        websocket._socket.removeListener('data', socketOnData);
        //
        // On Node.js < 14.0.0 the `'error'` event is emitted synchronously. See
        // https://github.com/websockets/ws/issues/1940.
        //
        process__default["default"].nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
    }
    websocket.emit('error', err);
}
/**
 * The listener of the `Receiver` `'finish'` event.
 *
 * @private
 */ function receiverOnFinish() {
    this[kWebSocket].emitClose();
}
/**
 * The listener of the `Receiver` `'message'` event.
 *
 * @param {Buffer|ArrayBuffer|Buffer[])} data The message
 * @param {Boolean} isBinary Specifies whether the message is binary or not
 * @private
 */ function receiverOnMessage(data, isBinary) {
    this[kWebSocket].emit('message', data, isBinary);
}
/**
 * The listener of the `Receiver` `'ping'` event.
 *
 * @param {Buffer} data The data included in the ping frame
 * @private
 */ function receiverOnPing(data) {
    var websocket = this[kWebSocket];
    websocket.pong(data, !websocket._isServer, NOOP);
    websocket.emit('ping', data);
}
/**
 * The listener of the `Receiver` `'pong'` event.
 *
 * @param {Buffer} data The data included in the pong frame
 * @private
 */ function receiverOnPong(data) {
    this[kWebSocket].emit('pong', data);
}
/**
 * Resume a readable stream
 *
 * @param {Readable} stream The readable stream
 * @private
 */ function resume(stream) {
    stream.resume();
}
/**
 * The listener of the `net.Socket` `'close'` event.
 *
 * @private
 */ function socketOnClose() {
    var websocket = this[kWebSocket];
    this.removeListener('close', socketOnClose);
    this.removeListener('data', socketOnData);
    this.removeListener('end', socketOnEnd);
    websocket._readyState = WebSocket.CLOSING;
    var chunk;
    //
    // The close frame might not have been received or the `'end'` event emitted,
    // for example, if the socket was destroyed due to an error. Ensure that the
    // `receiver` stream is closed after writing any remaining buffered data to
    // it. If the readable side of the socket is in flowing mode then there is no
    // buffered data as everything has been already written and `readable.read()`
    // will return `null`. If instead, the socket is paused, any possible buffered
    // data will be read as a single chunk.
    //
    if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && (chunk = websocket._socket.read()) !== null) {
        websocket._receiver.write(chunk);
    }
    websocket._receiver.end();
    this[kWebSocket] = undefined;
    clearTimeout(websocket._closeTimer);
    if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
    } else {
        websocket._receiver.on('error', receiverOnFinish);
        websocket._receiver.on('finish', receiverOnFinish);
    }
}
/**
 * The listener of the `net.Socket` `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */ function socketOnData(chunk) {
    if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
    }
}
/**
 * The listener of the `net.Socket` `'end'` event.
 *
 * @private
 */ function socketOnEnd() {
    var websocket = this[kWebSocket];
    websocket._readyState = WebSocket.CLOSING;
    websocket._receiver.end();
    this.end();
}
/**
 * The listener of the `net.Socket` `'error'` event.
 *
 * @private
 */ function socketOnError() {
    var websocket = this[kWebSocket];
    this.removeListener('error', socketOnError);
    this.on('error', NOOP);
    if (websocket) {
        websocket._readyState = WebSocket.CLOSING;
        this.destroy();
    }
}

validation.exports.tokenChars;

require$$5__default["default"].createHash;

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var channels = {
    "SmartTradesChannel": "/smart_trades",
    "DealsChannel": "/deals"
};
var ThreeCommasApiClient = /*#__PURE__*/ function() {
    function ThreeCommasApiClient(param) {
        var key1 = param.key, secret = param.secret, forcedMode = param.forcedMode;
        var _this = this;
        _classCallCheck(this, ThreeCommasApiClient);
        this.websocket = null;
        this.fetch = function(key, method, // @ts-ignore
        params, // @ts-ignore
        data, req) {
            return request(routes[key], method, params, data, {
                headers: _objectSpread({}, (req === null || req === void 0 ? void 0 : req.headers) || {}, {
                    apikey: _this.key,
                    "forced-mode": _this.forcedMode
                }),
                secret: _this.secret
            });
        };
        if (!key1 || !secret) {
            throw new Error("[key] and [secret] required parameters");
        }
        this.key = key1;
        this.secret = secret;
        this.forcedMode = forcedMode !== null && forcedMode !== void 0 ? forcedMode : "real";
    }
    _createClass(ThreeCommasApiClient, [
        {
            key: "subscribe",
            value: function subscribe(channel, callback1) {
                var _this = this;
                var payload1 = JSON.stringify({
                    identifier: JSON.stringify({
                        channel: channel,
                        users: [
                            {
                                api_key: this.key,
                                signature: signature(this.secret, channels[channel])
                            }, 
                        ]
                    }),
                    command: "subscribe"
                });
                var listener = function(callback) {
                    var ref;
                    if (callback) {
                        var ref1;
                        (ref1 = _this.websocket) === null || ref1 === void 0 ? void 0 : ref1.on("message", function(data, isBinary) {
                            callback(isBinary ? data : data.toString());
                        });
                    }
                    (ref = _this.websocket) === null || ref === void 0 ? void 0 : ref.on("close", function(code) {
                        if (code === 1006) {
                            websocket$1(payload1);
                        }
                    });
                };
                var websocket$1 = function(payload) {
                    var _this1 = _this;
                    _this.websocket = new websocket("wss://ws.3commas.io/websocket");
                    _this.websocket.onopen = function() {
                        var ref;
                        return (ref = _this1.websocket) === null || ref === void 0 ? void 0 : ref.send(payload);
                    };
                    listener(callback1);
                };
                if (!this.websocket) {
                    return websocket$1(payload1);
                }
                this.websocket.send(payload1);
            }
        },
        {
            key: "unsubscribe",
            value: function unsubscribe() {
                var ref;
                (ref = this.websocket) === null || ref === void 0 ? void 0 : ref.close();
            }
        }
    ]);
    return ThreeCommasApiClient;
}();

exports.File = File;
exports.FormData = FormData;
exports.ThreeCommasApiClient = ThreeCommasApiClient;
