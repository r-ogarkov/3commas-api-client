import { ThreeCommasApiClient } from "libs/client";

const client = new ThreeCommasApiClient();
client.fetch("account.rename", "post", { params: { account_id: 1 }})
