import { request } from "../request";
import { routes } from "./routes"
import { paths } from "../../api-schema";
import type { Data } from "ws";
import WebSocket from "ws";
import { signature } from "../signature";

interface Options {
  key: string,
  secret: string,
  forcedMode?: "real" | "paper",
}

type Channel = "SmartTradesChannel" | "DealsChannel";

interface WebsocketCallback {
  (data: Data): void
}

const channels = {
  "SmartTradesChannel": "/smart_trades",
  "DealsChannel": "/deals"
} as const;

export class ThreeCommasApiClient {
  private readonly key: string;
  private readonly secret: string;
  private readonly forcedMode: string;
  private websocket: WebSocket | null = null;

  constructor({ key, secret, forcedMode }: Options) {
    if(!key || !secret) {
      throw new Error("[key] and [secret] required parameters")
    }
    this.key = key;
    this.secret = secret;
    this.forcedMode = forcedMode ?? "real";
  }

  public fetch = <K extends keyof typeof routes, M extends keyof paths[typeof routes[K]]>
  (key: K,
   method: M,
   options?: {
     // @ts-ignore
     data?: paths[typeof routes[K]][M]["parameters"]["body" | "query"],
     // @ts-ignore
     params?: paths[typeof routes[K]][M]["parameters"]["path"]
   },
   req?: {
     headers?: Record<string, string>;
   }) => {
    return request(routes[key], method, options, {
      headers: {
        ...(req?.headers || {}),
        apikey: this.key,
        "forced-mode": this.forcedMode,
      },
      secret: this.secret
    });
  }

  public subscribe(
    channel: Channel,
    callback: WebsocketCallback
  ) {
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
    const listener = (callback: WebsocketCallback) => {
      if (callback) {
        this.websocket?.on("message", (data: Data, isBinary: boolean) => {
          callback(isBinary ? data : data.toString());
        });
      }
      this.websocket?.on("close", (code) => {
        if (code === 1006) {
          websocket(payload);
        }
      });
    };
    const websocket = (payload: string) => {
      this.websocket = new WebSocket("wss://ws.3commas.io/websocket");
      this.websocket.onopen = () => this.websocket?.send(payload);
      listener(callback);
    };

    if (!this.websocket) {
      return websocket(payload);
    }
    this.websocket.send(payload);
  }

  public unsubscribe() {
    this.websocket?.close();
  }
}
