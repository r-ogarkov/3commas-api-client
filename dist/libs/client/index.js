import { request } from "../request";
import { routes } from "./routes";
import WebSocket from "ws";
import { signature } from "../signature";
const channels = {
    "SmartTradesChannel": "/smart_trades",
    "DealsChannel": "/deals"
};
export class ThreeCommasApiClient {
    constructor({ key, secret, forcedMode }) {
        this.websocket = null;
        this.fetch = (key, method, options, req) => {
            return request(routes[key], method, options, {
                headers: Object.assign(Object.assign({}, ((req === null || req === void 0 ? void 0 : req.headers) || {})), { apikey: this.key, "forced-mode": this.forcedMode }),
                secret: this.secret
            });
        };
        if (!key || !secret) {
            throw new Error("[key] and [secret] required parameters");
        }
        this.key = key;
        this.secret = secret;
        this.forcedMode = forcedMode !== null && forcedMode !== void 0 ? forcedMode : "real";
    }
    subscribe(channel, callback) {
        const payload = JSON.stringify({
            identifier: JSON.stringify({
                channel,
                users: [
                    {
                        api_key: this.key,
                        signature: signature(this.secret, channels[channel]),
                    },
                ],
            }),
            command: "subscribe",
        });
        const listener = (callback) => {
            var _a, _b;
            if (callback) {
                (_a = this.websocket) === null || _a === void 0 ? void 0 : _a.on("message", (data, isBinary) => {
                    callback(isBinary ? data : data.toString());
                });
            }
            (_b = this.websocket) === null || _b === void 0 ? void 0 : _b.on("close", (code) => {
                if (code === 1006) {
                    websocket(payload);
                }
            });
        };
        const websocket = (payload) => {
            this.websocket = new WebSocket("wss://ws.3commas.io/websocket");
            this.websocket.onopen = () => { var _a; return (_a = this.websocket) === null || _a === void 0 ? void 0 : _a.send(payload); };
            listener(callback);
        };
        if (!this.websocket) {
            return websocket(payload);
        }
        this.websocket.send(payload);
    }
    unsubscribe() {
        var _a;
        (_a = this.websocket) === null || _a === void 0 ? void 0 : _a.close();
    }
}
