'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var regeneratorRuntime = require('regenerator-runtime');
var qs = require('qs');
require('isomorphic-fetch');
var HmacSHA256 = require('crypto-js/hmac-sha256');
var Hex = require('crypto-js/enc-hex');
var WebSocket = require('isomorphic-ws');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(regeneratorRuntime);
var qs__default = /*#__PURE__*/_interopDefaultLegacy(qs);
var HmacSHA256__default = /*#__PURE__*/_interopDefaultLegacy(HmacSHA256);
var Hex__default = /*#__PURE__*/_interopDefaultLegacy(Hex);
var WebSocket__default = /*#__PURE__*/_interopDefaultLegacy(WebSocket);

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
            _defineProperty$3(target, key, source[key]);
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
                                        return _ctx.abrupt("return", reject(_objectSpread$3({
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
                                        return _ctx.abrupt("return", reject(_objectSpread$3({
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

var signature = function(secret, url, params) {
    return HmacSHA256__default["default"](params ? "".concat(url, "?").concat(params) : url, secret).toString(Hex__default["default"]);
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
            _defineProperty$2(target, key, source[key]);
        });
    }
    return target;
}
var request = function() {
    var _ref = _asyncToGenerator(regeneratorRuntime__default["default"].mark(function _callee(url, method, // @ts-ignore
    params, // @ts-ignore
    data, req) {
        var ref, headers, secret, isGET, isServer, route, ref1, params1, raw, body, ref2, href, pathname, response;
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
                    raw = _objectSpread$2({}, data || {}, {
                        api_key: headers === null || headers === void 0 ? void 0 : headers.apikey,
                        secret: secret
                    });
                    body = isGET ? qs__default["default"].stringify(raw, {
                        arrayFormat: "brackets"
                    }) : JSON.stringify(raw);
                    ref2 = new URL("/public/api" + route + (isGET && body ? "?".concat(body) : ""), "https://api.3commas.io"), href = ref2.href, pathname = ref2.pathname;
                    _ctx.next = 13;
                    return fetch(href, _objectSpread$2({
                        method: method,
                        headers: _objectSpread$2({
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
                            "signature": signature(secret, pathname, body)
                        } : {}, headers || {})
                    }, !isGET && body ? {
                        body: body
                    } : {}));
                case 13:
                    response = _ctx.sent;
                    _ctx.next = 16;
                    return handler(response, {
                        method: method,
                        body: !isGET && body
                    });
                case 16:
                    return _ctx.abrupt("return", _ctx.sent);
                case 17:
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
var routes = _objectSpread$1({}, accounts, bots, deals, grid_bots, loose_accounts, marketplaces, smart_trades, users, {
    "ping": "/ver1/ping",
    "time": "/ver1/time"
});

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
                    if (!_this.websocket) return;
                    if (callback) {
                        _this.websocket.onmessage = function(param, isBinary) {
                            var data = param.data;
                            var raw = !isBinary ? data : data.toString();
                            try {
                                callback(JSON.parse(raw));
                            } catch (error) {
                                callback(raw);
                            }
                        };
                    }
                    _this.websocket.onclose = function(param) {
                        var code = param.code;
                        if (code === 1006) {
                            websocket(payload1);
                        }
                    };
                };
                var websocket = function(payload) {
                    var _this1 = _this;
                    _this.websocket = new WebSocket__default["default"]("wss://ws.3commas.io/websocket");
                    _this.websocket.onopen = function() {
                        var ref;
                        return (ref = _this1.websocket) === null || ref === void 0 ? void 0 : ref.send(payload);
                    };
                    listener(callback1);
                };
                if (!this.websocket) {
                    return websocket(payload1);
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

exports.ThreeCommasApiClient = ThreeCommasApiClient;
