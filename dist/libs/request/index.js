var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import qs from "qs";
import fetch from "node-fetch";
import { handler } from "./handler";
import { routeFor } from "./routeFor";
import { signature } from "../signature";
export const request = (url, method, options, req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { headers, secret } = req || {};
    const isGET = method === "get";
    const isServer = typeof window === "undefined";
    const route = routeFor(url, (options === null || options === void 0 ? void 0 : options.params) || {});
    if (/\/{.+}/.test(route)) {
        const params = (_a = route.match(/{[A-z]+}/g)) === null || _a === void 0 ? void 0 : _a.map((value) => value.replace(/{([A-z]+)}/g, "$1")).join(", ");
        throw new Error(`You didn't pass parameters ${params} `);
    }
    const body = isGET
        ? qs.stringify((options === null || options === void 0 ? void 0 : options.data) || {}, { arrayFormat: "brackets" })
        : JSON.stringify((options === null || options === void 0 ? void 0 : options.data) || {});
    const { href, pathname, search } = new URL("/public/api" + route + (isGET && body ? `?${body}` : ""), "https://api.3commas.io");
    const response = yield fetch(href, Object.assign({ method: method, headers: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ "content-type": "application/json" }, (!isServer ? { "x-requested-with": "XMLHttpRequest" } : {})), ((headers === null || headers === void 0 ? void 0 : headers["user-agent"])
            ? { "user-agent": headers === null || headers === void 0 ? void 0 : headers["user-agent"] }
            : {})), ((headers === null || headers === void 0 ? void 0 : headers["x-forwarded-for"])
            ? { "x-forwarded-for": headers === null || headers === void 0 ? void 0 : headers["x-forwarded-for"] }
            : {})), ((headers === null || headers === void 0 ? void 0 : headers.cookie)
            ? { cookie: headers === null || headers === void 0 ? void 0 : headers.cookie }
            : {})), (secret
            ? { "signature": signature(secret, pathname + search) }
            : {})), (headers || {})) }, (!isGET && body ? { body } : {})));
    // @ts-ignore
    return yield handler(response, { method, body: !isGET && body });
});
