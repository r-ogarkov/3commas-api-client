import { accounts } from "libs/client/routes/accounts";
import { bots } from "libs/client/routes/bots";
import { deals } from "libs/client/routes/deals";
import { grid_bots } from "libs/client/routes/grid_bots";
import { loose_accounts } from "libs/client/routes/loose_accounts";
import { marketplaces } from "libs/client/routes/marketplaces";
import { smart_trades } from "libs/client/routes/smart_trades";
import { users } from "libs/client/routes/users";

export const routes = {
  ...accounts,
  ...bots,
  ...deals,
  ...grid_bots,
  ...loose_accounts,
  ...marketplaces,
  ...smart_trades,
  ...users,
  "ping": "/ver1/ping",
  "time": "/ver1/time",
} as const;
