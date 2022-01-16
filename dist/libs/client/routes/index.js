var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { accounts } from "./accounts";
import { bots } from "./bots";
import { deals } from "./deals";
import { grid_bots } from "./grid_bots";
import { loose_accounts } from "./loose_accounts";
import { marketplaces } from "./marketplaces";
import { smart_trades } from "./smart_trades";
import { users } from "./users";
export var routes = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, accounts), bots), deals), grid_bots), loose_accounts), marketplaces), smart_trades), users), { "ping": "/ver1/ping", "time": "/ver1/time" });
