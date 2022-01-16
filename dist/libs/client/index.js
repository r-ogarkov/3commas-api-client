import { request } from "libs/request";
import { routes } from "libs/client/routes";
import WebSocket from "ws";
import { signature } from "libs/signature";
const channels = {
    "SmartTradesChannel": "/smart_trades",
    "DealsChannel": "/deals"
};
export class ThreeCommasApiClient {
    key;
    secret;
    forcedMode;
    websocket = null;
    constructor(options) {
        this.key = options?.key ?? "";
        this.secret = options?.secret ?? "";
        this.forcedMode = options?.forcedMode ?? "";
    }
    fetch = (key, method, options, req) => {
        return request(routes[key], method, options, {
            headers: {
                ...(req?.headers || {}),
                apikey: this.key,
                ...(this.forcedMode && { "forced-mode": this.forcedMode }),
            },
            secret: this?.secret || ""
        });
    };
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
            if (callback) {
                this.websocket?.on("message", (data, isBinary) => {
                    callback(isBinary ? data : data.toString());
                });
            }
            this.websocket?.on("close", (code) => {
                if (code === 1006) {
                    websocket(payload);
                }
            });
        };
        const websocket = (payload) => {
            this.websocket = new WebSocket("wss://ws.3commas.io/websocket");
            this.websocket.onopen = () => this.websocket?.send(payload);
            listener(callback);
        };
        if (!this.websocket) {
            return websocket(payload);
        }
        this.websocket.send(payload);
    }
    unsubscribe() {
        this.websocket?.close();
    }
}
const client = new ThreeCommasApiClient();
(async () => {
    await client.fetch("account.rename", "post", { params: { account_id: 1 } });
})();
