'use strict';

var regeneratorRuntime = require('regenerator-runtime');
var node_fs = require('node:fs');
require('node:path');
var node_worker_threads = require('node:worker_threads');
var index = require('./index-50df0a09.js');
require('util');
require('process');
require('buffer');
require('node:http');
require('node:https');
require('node:zlib');
require('node:stream');
require('node:util');
require('node:url');
require('net');
require('stream');
require('zlib');
require('tls');
require('crypto');
require('events');
require('https');
require('http');
require('url');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(regeneratorRuntime);

node_fs.promises.stat;
globalThis.DOMException || function() {
    var port = new node_worker_threads.MessageChannel().port1;
    var ab = new ArrayBuffer(0);
    try {
        port.postMessage(ab, [
            ab,
            ab
        ]);
    } catch (err) {
        return err.constructor;
    }
}();

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
var s = 0;
var S = {
    START_BOUNDARY: s++,
    HEADER_FIELD_START: s++,
    HEADER_FIELD: s++,
    HEADER_VALUE_START: s++,
    HEADER_VALUE: s++,
    HEADER_VALUE_ALMOST_DONE: s++,
    HEADERS_ALMOST_DONE: s++,
    PART_DATA_START: s++,
    PART_DATA: s++,
    END: s++
};
var f = 1;
var F = {
    PART_BOUNDARY: f,
    LAST_BOUNDARY: f *= 2
};
var LF = 10;
var CR = 13;
var SPACE = 32;
var HYPHEN = 45;
var COLON = 58;
var A = 97;
var Z = 122;
var lower = function(c) {
    return c | 32;
};
var noop = function() {};
var MultipartParser = /*#__PURE__*/ function() {
    function MultipartParser(boundary) {
        _classCallCheck(this, MultipartParser);
        this.index = 0;
        this.flags = 0;
        this.onHeaderEnd = noop;
        this.onHeaderField = noop;
        this.onHeadersEnd = noop;
        this.onHeaderValue = noop;
        this.onPartBegin = noop;
        this.onPartData = noop;
        this.onPartEnd = noop;
        this.boundaryChars = {};
        boundary = '\r\n--' + boundary;
        var ui8a = new Uint8Array(boundary.length);
        for(var i = 0; i < boundary.length; i++){
            ui8a[i] = boundary.charCodeAt(i);
            this.boundaryChars[ui8a[i]] = true;
        }
        this.boundary = ui8a;
        this.lookbehind = new Uint8Array(this.boundary.length + 8);
        this.state = S.START_BOUNDARY;
    }
    _createClass(MultipartParser, [
        {
            /**
	 * @param {Uint8Array} data
	 */ key: "write",
            value: function write(data) {
                var _this = this;
                var i = 0;
                var length_ = data.length;
                var previousIndex = this.index;
                var ref = this, lookbehind = ref.lookbehind, boundary = ref.boundary, boundaryChars = ref.boundaryChars, index = ref.index, state = ref.state, flags = ref.flags;
                var boundaryLength = this.boundary.length;
                var boundaryEnd = boundaryLength - 1;
                var bufferLength = data.length;
                var c;
                var cl;
                var mark = function(name) {
                    _this[name + 'Mark'] = i;
                };
                var clear1 = function(name) {
                    delete _this[name + 'Mark'];
                };
                var callback = function(callbackSymbol, start, end, ui8a) {
                    if (start === undefined || start !== end) {
                        _this[callbackSymbol](ui8a && ui8a.subarray(start, end));
                    }
                };
                var dataCallback = function(name, clear) {
                    var markSymbol = name + 'Mark';
                    if (!(markSymbol in _this)) {
                        return;
                    }
                    if (clear) {
                        callback(name, _this[markSymbol], i, data);
                        delete _this[markSymbol];
                    } else {
                        callback(name, _this[markSymbol], data.length, data);
                        _this[markSymbol] = 0;
                    }
                };
                for(i = 0; i < length_; i++){
                    c = data[i];
                    switch(state){
                        case S.START_BOUNDARY:
                            if (index === boundary.length - 2) {
                                if (c === HYPHEN) {
                                    flags |= F.LAST_BOUNDARY;
                                } else if (c !== CR) {
                                    return;
                                }
                                index++;
                                break;
                            } else if (index - 1 === boundary.length - 2) {
                                if (flags & F.LAST_BOUNDARY && c === HYPHEN) {
                                    state = S.END;
                                    flags = 0;
                                } else if (!(flags & F.LAST_BOUNDARY) && c === LF) {
                                    index = 0;
                                    callback('onPartBegin');
                                    state = S.HEADER_FIELD_START;
                                } else {
                                    return;
                                }
                                break;
                            }
                            if (c !== boundary[index + 2]) {
                                index = -2;
                            }
                            if (c === boundary[index + 2]) {
                                index++;
                            }
                            break;
                        case S.HEADER_FIELD_START:
                            state = S.HEADER_FIELD;
                            mark('onHeaderField');
                            index = 0;
                        // falls through
                        case S.HEADER_FIELD:
                            if (c === CR) {
                                clear1('onHeaderField');
                                state = S.HEADERS_ALMOST_DONE;
                                break;
                            }
                            index++;
                            if (c === HYPHEN) {
                                break;
                            }
                            if (c === COLON) {
                                if (index === 1) {
                                    // empty header field
                                    return;
                                }
                                dataCallback('onHeaderField', true);
                                state = S.HEADER_VALUE_START;
                                break;
                            }
                            cl = lower(c);
                            if (cl < A || cl > Z) {
                                return;
                            }
                            break;
                        case S.HEADER_VALUE_START:
                            if (c === SPACE) {
                                break;
                            }
                            mark('onHeaderValue');
                            state = S.HEADER_VALUE;
                        // falls through
                        case S.HEADER_VALUE:
                            if (c === CR) {
                                dataCallback('onHeaderValue', true);
                                callback('onHeaderEnd');
                                state = S.HEADER_VALUE_ALMOST_DONE;
                            }
                            break;
                        case S.HEADER_VALUE_ALMOST_DONE:
                            if (c !== LF) {
                                return;
                            }
                            state = S.HEADER_FIELD_START;
                            break;
                        case S.HEADERS_ALMOST_DONE:
                            if (c !== LF) {
                                return;
                            }
                            callback('onHeadersEnd');
                            state = S.PART_DATA_START;
                            break;
                        case S.PART_DATA_START:
                            state = S.PART_DATA;
                            mark('onPartData');
                        // falls through
                        case S.PART_DATA:
                            previousIndex = index;
                            if (index === 0) {
                                // boyer-moore derrived algorithm to safely skip non-boundary data
                                i += boundaryEnd;
                                while(i < bufferLength && !(data[i] in boundaryChars)){
                                    i += boundaryLength;
                                }
                                i -= boundaryEnd;
                                c = data[i];
                            }
                            if (index < boundary.length) {
                                if (boundary[index] === c) {
                                    if (index === 0) {
                                        dataCallback('onPartData', true);
                                    }
                                    index++;
                                } else {
                                    index = 0;
                                }
                            } else if (index === boundary.length) {
                                index++;
                                if (c === CR) {
                                    // CR = part boundary
                                    flags |= F.PART_BOUNDARY;
                                } else if (c === HYPHEN) {
                                    // HYPHEN = end boundary
                                    flags |= F.LAST_BOUNDARY;
                                } else {
                                    index = 0;
                                }
                            } else if (index - 1 === boundary.length) {
                                if (flags & F.PART_BOUNDARY) {
                                    index = 0;
                                    if (c === LF) {
                                        // unset the PART_BOUNDARY flag
                                        flags &= ~F.PART_BOUNDARY;
                                        callback('onPartEnd');
                                        callback('onPartBegin');
                                        state = S.HEADER_FIELD_START;
                                        break;
                                    }
                                } else if (flags & F.LAST_BOUNDARY) {
                                    if (c === HYPHEN) {
                                        callback('onPartEnd');
                                        state = S.END;
                                        flags = 0;
                                    } else {
                                        index = 0;
                                    }
                                } else {
                                    index = 0;
                                }
                            }
                            if (index > 0) {
                                // when matching a possible boundary, keep a lookbehind reference
                                // in case it turns out to be a false lead
                                lookbehind[index - 1] = c;
                            } else if (previousIndex > 0) {
                                // if our boundary turned out to be rubbish, the captured lookbehind
                                // belongs to partData
                                var _lookbehind = new Uint8Array(lookbehind.buffer, lookbehind.byteOffset, lookbehind.byteLength);
                                callback('onPartData', 0, previousIndex, _lookbehind);
                                previousIndex = 0;
                                mark('onPartData');
                                // reconsider the current character even so it interrupted the sequence
                                // it could be the beginning of a new sequence
                                i--;
                            }
                            break;
                        case S.END:
                            break;
                        default:
                            throw new Error("Unexpected state entered: ".concat(state));
                    }
                }
                dataCallback('onHeaderField');
                dataCallback('onHeaderValue');
                dataCallback('onPartData');
                // Update properties for the next call
                this.index = index;
                this.state = state;
                this.flags = flags;
            }
        },
        {
            key: "end",
            value: function end() {
                if (this.state === S.HEADER_FIELD_START && this.index === 0 || this.state === S.PART_DATA && this.index === this.boundary.length) {
                    this.onPartEnd();
                } else if (this.state !== S.END) {
                    throw new Error('MultipartParser.end(): stream ended unexpectedly');
                }
            }
        }
    ]);
    return MultipartParser;
}();
function _fileName(headerValue) {
    // matches either a quoted-string or a token (RFC 2616 section 19.5.1)
    var m = headerValue.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
    if (!m) {
        return;
    }
    var match = m[2] || m[3] || '';
    var filename = match.slice(match.lastIndexOf('\\') + 1);
    filename = filename.replace(/%22/g, '"');
    filename = filename.replace(/&#(\d{4});/g, function(m, code) {
        return String.fromCharCode(code);
    });
    return filename;
}
function toFormData(Body, ct) {
    return _toFormData.apply(this, arguments);
}
function _toFormData() {
    _toFormData = _asyncToGenerator(regeneratorRuntime__default["default"].mark(function _callee(Body, ct) {
        var m1, parser, headerField, headerValue, entryValue, entryName, contentType, filename, entryChunks, formData, onPartData, appendToFile, appendFileToFormData, appendEntryToFormData, decoder, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, chunk;
        return regeneratorRuntime__default["default"].wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    if (/multipart/i.test(ct)) {
                        _ctx.next = 2;
                        break;
                    }
                    throw new TypeError('Failed to fetch');
                case 2:
                    m1 = ct.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
                    if (m1) {
                        _ctx.next = 5;
                        break;
                    }
                    throw new TypeError('no or bad content-type header, no multipart boundary');
                case 5:
                    parser = new MultipartParser(m1[1] || m1[2]);
                    entryChunks = [];
                    formData = new index.FormData();
                    onPartData = function(ui8a) {
                        entryValue += decoder.decode(ui8a, {
                            stream: true
                        });
                    };
                    appendToFile = function(ui8a) {
                        entryChunks.push(ui8a);
                    };
                    appendFileToFormData = function() {
                        var file = new index.File(entryChunks, filename, {
                            type: contentType
                        });
                        formData.append(entryName, file);
                    };
                    appendEntryToFormData = function() {
                        formData.append(entryName, entryValue);
                    };
                    decoder = new TextDecoder('utf-8');
                    decoder.decode();
                    parser.onPartBegin = function() {
                        parser.onPartData = onPartData;
                        parser.onPartEnd = appendEntryToFormData;
                        headerField = '';
                        headerValue = '';
                        entryValue = '';
                        entryName = '';
                        contentType = '';
                        filename = null;
                        entryChunks.length = 0;
                    };
                    parser.onHeaderField = function(ui8a) {
                        headerField += decoder.decode(ui8a, {
                            stream: true
                        });
                    };
                    parser.onHeaderValue = function(ui8a) {
                        headerValue += decoder.decode(ui8a, {
                            stream: true
                        });
                    };
                    parser.onHeaderEnd = function() {
                        headerValue += decoder.decode();
                        headerField = headerField.toLowerCase();
                        if (headerField === 'content-disposition') {
                            // matches either a quoted-string or a token (RFC 2616 section 19.5.1)
                            var m = headerValue.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
                            if (m) {
                                entryName = m[2] || m[3] || '';
                            }
                            filename = _fileName(headerValue);
                            if (filename) {
                                parser.onPartData = appendToFile;
                                parser.onPartEnd = appendFileToFormData;
                            }
                        } else if (headerField === 'content-type') {
                            contentType = headerValue;
                        }
                        headerValue = '';
                        headerField = '';
                    };
                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                    _ctx.prev = 25;
                    _iterator = _asyncIterator(Body);
                case 27:
                    _ctx.next = 29;
                    return _iterator.next();
                case 29:
                    if (!(_iteratorAbruptCompletion = !(_step = _ctx.sent).done)) {
                        _ctx.next = 34;
                        break;
                    }
                    {
                        _value = _step.value;
                        chunk = _value;
                        parser.write(chunk);
                    }
                case 31:
                    _iteratorAbruptCompletion = false;
                    _ctx.next = 27;
                    break;
                case 34:
                    _ctx.next = 40;
                    break;
                case 36:
                    _ctx.prev = 36;
                    _ctx.t0 = _ctx["catch"](25);
                    _didIteratorError = true;
                    _iteratorError = _ctx.t0;
                case 40:
                    _ctx.prev = 40;
                    _ctx.prev = 41;
                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                        _ctx.next = 45;
                        break;
                    }
                    _ctx.next = 45;
                    return _iteratorError.return();
                case 45:
                    _ctx.prev = 45;
                    if (!_didIteratorError) {
                        _ctx.next = 48;
                        break;
                    }
                    throw _iteratorError;
                case 48:
                    return _ctx.finish(45);
                case 49:
                    return _ctx.finish(40);
                case 50:
                    parser.end();
                    return _ctx.abrupt("return", formData);
                case 52:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                25,
                36,
                40,
                50
            ],
            [
                41,
                ,
                45,
                49
            ]
        ]);
    }));
    return _toFormData.apply(this, arguments);
}

exports.toFormData = toFormData;
