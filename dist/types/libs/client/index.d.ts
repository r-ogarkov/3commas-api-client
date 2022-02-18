import { routes } from "./routes";
import { paths } from "../../api-schema";
import type { Data } from "ws";
interface Options {
    key: string;
    secret: string;
    forcedMode?: "real" | "paper";
}
declare type Channel = "SmartTradesChannel" | "DealsChannel";
interface WebsocketCallback {
    (data: Data): void;
}
export declare class ThreeCommasApiClient {
    private readonly key;
    private readonly secret;
    private readonly forcedMode;
    private websocket;
    constructor({ key, secret, forcedMode }: Options);
    fetch: <K extends "smart_trade" | "ping" | "time" | "users.current_mode" | "users.change_mode" | "smart_trades" | "smart_trade.reduce_funds" | "smart_trade.add_funds" | "smart_trade.close_by_market" | "smart_trade.force_start" | "smart_trade.force_process" | "smart_trade.set_note" | "smart_trade.trades" | "smart_trade.trade.close_by_market" | "smart_trade.trade" | "marketplaces.presets" | "marketplaces.items" | "marketplace.signals" | "loose_accounts" | "loose_accounts.available_currencies" | "loose_account" | "grid_bots.ai" | "grid_bots.manual" | "grid_bots.ai_settings" | "grid_bots" | "grid_bot.market_orders" | "grid_bot.profits" | "grid_bot.ai" | "grid_bot.manual" | "grid_bot" | "grid_bot.disable" | "grid_bot.enable" | "grid_bot.required_balances" | "deals" | "deal.convert_to_smart_trade" | "deal.update_max_safety_orders" | "deal.panic_sell" | "deal.cancel" | "deal.update_deal" | "deal.update_tp" | "deal.show" | "deal.cancel_order" | "deal.market_orders" | "deal.add_funds" | "deal.data_for_adding_funds" | "bots.account_trade_info.smart_sell" | "bots.account_trade_info" | "bots.strategy_list" | "bots.pairs_black_list" | "bots.update_pairs_black_list" | "bots.create_bot" | "bots" | "bots.stats" | "bot.copy_and_create" | "bot.update" | "bot.disable" | "bot.enable" | "bot.start_new_deal" | "bot.delete" | "bot.panic_sell_all_deals" | "bot.cancel_all_deals" | "bot.deals_stats" | "bot.show" | "accounts.transfer" | "accounts.transfer_history" | "accounts.transfer_data" | "accounts.new" | "accounts.update" | "accounts" | "accounts.market.list" | "accounts.market.pairs" | "accounts.currency_rates.leverage_data" | "accounts.currency_rates" | "account.deposit_data" | "account.networks_info" | "account.convert_dust_to_bnb" | "account.active_trading_entities" | "account.sell_all_to_usd" | "account.sell_all_to_btc" | "account.balance_chart_data" | "account.load_balances" | "account.rename" | "account.pie_chart_data" | "account.account_table_data" | "account.remove" | "account.leverage_data" | "account", M extends keyof paths[{
        readonly ping: "/ver1/ping";
        readonly time: "/ver1/time";
        readonly "users.current_mode": "/ver1/users/current_mode";
        readonly "users.change_mode": "/ver1/users/change_mode";
        readonly smart_trades: "/v2/smart_trades";
        readonly smart_trade: "/v2/smart_trades/{id}";
        readonly "smart_trade.reduce_funds": "/v2/smart_trades/{id}/reduce_funds";
        readonly "smart_trade.add_funds": "/v2/smart_trades/{id}/add_funds";
        readonly "smart_trade.close_by_market": "/v2/smart_trades/{id}/close_by_market";
        readonly "smart_trade.force_start": "/v2/smart_trades/{id}/force_start";
        readonly "smart_trade.force_process": "/v2/smart_trades/{id}/force_process";
        readonly "smart_trade.set_note": "/v2/smart_trades/{id}/set_note";
        readonly "smart_trade.trades": "/v2/smart_trades/{smart_trade_id}/trades";
        readonly "smart_trade.trade.close_by_market": "/v2/smart_trades/{smart_trade_id}/trades/{id}/close_by_market";
        readonly "smart_trade.trade": "/v2/smart_trades/{smart_trade_id}/trades/{id}";
        readonly "marketplaces.presets": "/ver1/marketplace/presets";
        readonly "marketplaces.items": "/ver1/marketplace/items";
        readonly "marketplace.signals": "/ver1/marketplace/{item_id}/signals";
        readonly loose_accounts: "/ver1/loose_accounts";
        readonly "loose_accounts.available_currencies": "/ver1/loose_accounts/available_currencies";
        readonly loose_account: "/ver1/loose_accounts/{account_id}";
        readonly "grid_bots.ai": "/ver1/grid_bots/ai";
        readonly "grid_bots.manual": "/ver1/grid_bots/manual";
        readonly "grid_bots.ai_settings": "/ver1/grid_bots/ai_settings";
        readonly grid_bots: "/ver1/grid_bots";
        readonly "grid_bot.market_orders": "/ver1/grid_bots/{id}/market_orders";
        readonly "grid_bot.profits": "/ver1/grid_bots/{id}/profits";
        readonly "grid_bot.ai": "/ver1/grid_bots/{id}/ai";
        readonly "grid_bot.manual": "/ver1/grid_bots/{id}/manual";
        readonly grid_bot: "/ver1/grid_bots/{id}";
        readonly "grid_bot.disable": "/ver1/grid_bots/{id}/disable";
        readonly "grid_bot.enable": "/ver1/grid_bots/{id}/enable";
        readonly "grid_bot.required_balances": "/ver1/grid_bots/{id}/required_balances";
        readonly deals: "/ver1/deals";
        readonly "deal.convert_to_smart_trade": "/ver1/deals/{deal_id}/convert_to_smart_trade";
        readonly "deal.update_max_safety_orders": "/ver1/deals/{deal_id}/update_max_safety_orders";
        readonly "deal.panic_sell": "/ver1/deals/{deal_id}/panic_sell";
        readonly "deal.cancel": "/ver1/deals/{deal_id}/cancel";
        readonly "deal.update_deal": "/ver1/deals/{deal_id}/update_deal";
        readonly "deal.update_tp": "/ver1/deals/{deal_id}/update_tp";
        readonly "deal.show": "/ver1/deals/{deal_id}/show";
        readonly "deal.cancel_order": "/ver1/deals/{deal_id}/cancel_order";
        readonly "deal.market_orders": "/ver1/deals/{deal_id}/market_orders";
        readonly "deal.add_funds": "/ver1/deals/{deal_id}/add_funds";
        readonly "deal.data_for_adding_funds": "/ver1/deals/{deal_id}/data_for_adding_funds";
        readonly "bots.account_trade_info.smart_sell": "/ver1/bots/account_trade_info_smart_sell";
        readonly "bots.account_trade_info": "/ver1/bots/account_trade_info";
        readonly "bots.strategy_list": "/ver1/bots/strategy_list";
        readonly "bots.pairs_black_list": "/ver1/bots/pairs_black_list";
        readonly "bots.update_pairs_black_list": "/ver1/bots/update_pairs_black_list";
        readonly "bots.create_bot": "/ver1/bots/create_bot";
        readonly bots: "/ver1/bots";
        readonly "bots.stats": "/ver1/bots/stats";
        readonly "bot.copy_and_create": "/ver1/bots/{bot_id}/copy_and_create";
        readonly "bot.update": "/ver1/bots/{bot_id}/update";
        readonly "bot.disable": "/ver1/bots/{bot_id}/disable";
        readonly "bot.enable": "/ver1/bots/{bot_id}/enable";
        readonly "bot.start_new_deal": "/ver1/bots/{bot_id}/start_new_deal";
        readonly "bot.delete": "/ver1/bots/{bot_id}/delete";
        readonly "bot.panic_sell_all_deals": "/ver1/bots/{bot_id}/panic_sell_all_deals";
        readonly "bot.cancel_all_deals": "/ver1/bots/{bot_id}/cancel_all_deals";
        readonly "bot.deals_stats": "/ver1/bots/{bot_id}/deals_stats";
        readonly "bot.show": "/ver1/bots/{bot_id}/show";
        readonly "accounts.transfer": "/ver1/accounts/transfer";
        readonly "accounts.transfer_history": "/ver1/accounts/transfer_history";
        readonly "accounts.transfer_data": "/ver1/accounts/transfer_data";
        readonly "accounts.new": "/ver1/accounts/new";
        readonly "accounts.update": "/ver1/accounts/update";
        readonly accounts: "/ver1/accounts";
        readonly "accounts.market.list": "/ver1/accounts/market_list";
        readonly "accounts.market.pairs": "/ver1/accounts/market_pairs";
        readonly "accounts.currency_rates.leverage_data": "/ver1/accounts/currency_rates_with_leverage_data";
        readonly "accounts.currency_rates": "/ver1/accounts/currency_rates";
        readonly "account.deposit_data": "/ver1/accounts/{account_id}/deposit_data";
        readonly "account.networks_info": "/ver1/accounts/{account_id}/networks_info";
        readonly "account.convert_dust_to_bnb": "/ver1/accounts/{account_id}/convert_dust_to_bnb";
        readonly "account.active_trading_entities": "/ver1/accounts/{account_id}/active_trading_entities";
        readonly "account.sell_all_to_usd": "/ver1/accounts/{account_id}/sell_all_to_usd";
        readonly "account.sell_all_to_btc": "/ver1/accounts/{account_id}/sell_all_to_btc";
        readonly "account.balance_chart_data": "/ver1/accounts/{account_id}/balance_chart_data";
        readonly "account.load_balances": "/ver1/accounts/{account_id}/load_balances";
        readonly "account.rename": "/ver1/accounts/{account_id}/rename";
        readonly "account.pie_chart_data": "/ver1/accounts/{account_id}/pie_chart_data";
        readonly "account.account_table_data": "/ver1/accounts/{account_id}/account_table_data";
        readonly "account.remove": "/ver1/accounts/{account_id}/remove";
        readonly "account.leverage_data": "/ver1/accounts/{account_id}/leverage_data";
        readonly account: "/ver1/accounts/{account_id}";
    }[K]]>(key: K, method: M, params: paths[{
        readonly ping: "/ver1/ping";
        readonly time: "/ver1/time";
        readonly "users.current_mode": "/ver1/users/current_mode";
        readonly "users.change_mode": "/ver1/users/change_mode";
        readonly smart_trades: "/v2/smart_trades";
        readonly smart_trade: "/v2/smart_trades/{id}";
        readonly "smart_trade.reduce_funds": "/v2/smart_trades/{id}/reduce_funds";
        readonly "smart_trade.add_funds": "/v2/smart_trades/{id}/add_funds";
        readonly "smart_trade.close_by_market": "/v2/smart_trades/{id}/close_by_market";
        readonly "smart_trade.force_start": "/v2/smart_trades/{id}/force_start";
        readonly "smart_trade.force_process": "/v2/smart_trades/{id}/force_process";
        readonly "smart_trade.set_note": "/v2/smart_trades/{id}/set_note";
        readonly "smart_trade.trades": "/v2/smart_trades/{smart_trade_id}/trades";
        readonly "smart_trade.trade.close_by_market": "/v2/smart_trades/{smart_trade_id}/trades/{id}/close_by_market";
        readonly "smart_trade.trade": "/v2/smart_trades/{smart_trade_id}/trades/{id}";
        readonly "marketplaces.presets": "/ver1/marketplace/presets";
        readonly "marketplaces.items": "/ver1/marketplace/items";
        readonly "marketplace.signals": "/ver1/marketplace/{item_id}/signals";
        readonly loose_accounts: "/ver1/loose_accounts";
        readonly "loose_accounts.available_currencies": "/ver1/loose_accounts/available_currencies";
        readonly loose_account: "/ver1/loose_accounts/{account_id}";
        readonly "grid_bots.ai": "/ver1/grid_bots/ai";
        readonly "grid_bots.manual": "/ver1/grid_bots/manual";
        readonly "grid_bots.ai_settings": "/ver1/grid_bots/ai_settings";
        readonly grid_bots: "/ver1/grid_bots";
        readonly "grid_bot.market_orders": "/ver1/grid_bots/{id}/market_orders";
        readonly "grid_bot.profits": "/ver1/grid_bots/{id}/profits";
        readonly "grid_bot.ai": "/ver1/grid_bots/{id}/ai";
        readonly "grid_bot.manual": "/ver1/grid_bots/{id}/manual";
        readonly grid_bot: "/ver1/grid_bots/{id}";
        readonly "grid_bot.disable": "/ver1/grid_bots/{id}/disable";
        readonly "grid_bot.enable": "/ver1/grid_bots/{id}/enable";
        readonly "grid_bot.required_balances": "/ver1/grid_bots/{id}/required_balances";
        readonly deals: "/ver1/deals";
        readonly "deal.convert_to_smart_trade": "/ver1/deals/{deal_id}/convert_to_smart_trade";
        readonly "deal.update_max_safety_orders": "/ver1/deals/{deal_id}/update_max_safety_orders";
        readonly "deal.panic_sell": "/ver1/deals/{deal_id}/panic_sell";
        readonly "deal.cancel": "/ver1/deals/{deal_id}/cancel";
        readonly "deal.update_deal": "/ver1/deals/{deal_id}/update_deal";
        readonly "deal.update_tp": "/ver1/deals/{deal_id}/update_tp";
        readonly "deal.show": "/ver1/deals/{deal_id}/show";
        readonly "deal.cancel_order": "/ver1/deals/{deal_id}/cancel_order";
        readonly "deal.market_orders": "/ver1/deals/{deal_id}/market_orders";
        readonly "deal.add_funds": "/ver1/deals/{deal_id}/add_funds";
        readonly "deal.data_for_adding_funds": "/ver1/deals/{deal_id}/data_for_adding_funds";
        readonly "bots.account_trade_info.smart_sell": "/ver1/bots/account_trade_info_smart_sell";
        readonly "bots.account_trade_info": "/ver1/bots/account_trade_info";
        readonly "bots.strategy_list": "/ver1/bots/strategy_list";
        readonly "bots.pairs_black_list": "/ver1/bots/pairs_black_list";
        readonly "bots.update_pairs_black_list": "/ver1/bots/update_pairs_black_list";
        readonly "bots.create_bot": "/ver1/bots/create_bot";
        readonly bots: "/ver1/bots";
        readonly "bots.stats": "/ver1/bots/stats";
        readonly "bot.copy_and_create": "/ver1/bots/{bot_id}/copy_and_create";
        readonly "bot.update": "/ver1/bots/{bot_id}/update";
        readonly "bot.disable": "/ver1/bots/{bot_id}/disable";
        readonly "bot.enable": "/ver1/bots/{bot_id}/enable";
        readonly "bot.start_new_deal": "/ver1/bots/{bot_id}/start_new_deal";
        readonly "bot.delete": "/ver1/bots/{bot_id}/delete";
        readonly "bot.panic_sell_all_deals": "/ver1/bots/{bot_id}/panic_sell_all_deals";
        readonly "bot.cancel_all_deals": "/ver1/bots/{bot_id}/cancel_all_deals";
        readonly "bot.deals_stats": "/ver1/bots/{bot_id}/deals_stats";
        readonly "bot.show": "/ver1/bots/{bot_id}/show";
        readonly "accounts.transfer": "/ver1/accounts/transfer";
        readonly "accounts.transfer_history": "/ver1/accounts/transfer_history";
        readonly "accounts.transfer_data": "/ver1/accounts/transfer_data";
        readonly "accounts.new": "/ver1/accounts/new";
        readonly "accounts.update": "/ver1/accounts/update";
        readonly accounts: "/ver1/accounts";
        readonly "accounts.market.list": "/ver1/accounts/market_list";
        readonly "accounts.market.pairs": "/ver1/accounts/market_pairs";
        readonly "accounts.currency_rates.leverage_data": "/ver1/accounts/currency_rates_with_leverage_data";
        readonly "accounts.currency_rates": "/ver1/accounts/currency_rates";
        readonly "account.deposit_data": "/ver1/accounts/{account_id}/deposit_data";
        readonly "account.networks_info": "/ver1/accounts/{account_id}/networks_info";
        readonly "account.convert_dust_to_bnb": "/ver1/accounts/{account_id}/convert_dust_to_bnb";
        readonly "account.active_trading_entities": "/ver1/accounts/{account_id}/active_trading_entities";
        readonly "account.sell_all_to_usd": "/ver1/accounts/{account_id}/sell_all_to_usd";
        readonly "account.sell_all_to_btc": "/ver1/accounts/{account_id}/sell_all_to_btc";
        readonly "account.balance_chart_data": "/ver1/accounts/{account_id}/balance_chart_data";
        readonly "account.load_balances": "/ver1/accounts/{account_id}/load_balances";
        readonly "account.rename": "/ver1/accounts/{account_id}/rename";
        readonly "account.pie_chart_data": "/ver1/accounts/{account_id}/pie_chart_data";
        readonly "account.account_table_data": "/ver1/accounts/{account_id}/account_table_data";
        readonly "account.remove": "/ver1/accounts/{account_id}/remove";
        readonly "account.leverage_data": "/ver1/accounts/{account_id}/leverage_data";
        readonly account: "/ver1/accounts/{account_id}";
    }[K]][M]["parameters"]["path"], data: paths[{
        readonly ping: "/ver1/ping";
        readonly time: "/ver1/time";
        readonly "users.current_mode": "/ver1/users/current_mode";
        readonly "users.change_mode": "/ver1/users/change_mode";
        readonly smart_trades: "/v2/smart_trades";
        readonly smart_trade: "/v2/smart_trades/{id}";
        readonly "smart_trade.reduce_funds": "/v2/smart_trades/{id}/reduce_funds";
        readonly "smart_trade.add_funds": "/v2/smart_trades/{id}/add_funds";
        readonly "smart_trade.close_by_market": "/v2/smart_trades/{id}/close_by_market";
        readonly "smart_trade.force_start": "/v2/smart_trades/{id}/force_start";
        readonly "smart_trade.force_process": "/v2/smart_trades/{id}/force_process";
        readonly "smart_trade.set_note": "/v2/smart_trades/{id}/set_note";
        readonly "smart_trade.trades": "/v2/smart_trades/{smart_trade_id}/trades";
        readonly "smart_trade.trade.close_by_market": "/v2/smart_trades/{smart_trade_id}/trades/{id}/close_by_market";
        readonly "smart_trade.trade": "/v2/smart_trades/{smart_trade_id}/trades/{id}";
        readonly "marketplaces.presets": "/ver1/marketplace/presets";
        readonly "marketplaces.items": "/ver1/marketplace/items";
        readonly "marketplace.signals": "/ver1/marketplace/{item_id}/signals";
        readonly loose_accounts: "/ver1/loose_accounts";
        readonly "loose_accounts.available_currencies": "/ver1/loose_accounts/available_currencies";
        readonly loose_account: "/ver1/loose_accounts/{account_id}";
        readonly "grid_bots.ai": "/ver1/grid_bots/ai";
        readonly "grid_bots.manual": "/ver1/grid_bots/manual";
        readonly "grid_bots.ai_settings": "/ver1/grid_bots/ai_settings";
        readonly grid_bots: "/ver1/grid_bots";
        readonly "grid_bot.market_orders": "/ver1/grid_bots/{id}/market_orders";
        readonly "grid_bot.profits": "/ver1/grid_bots/{id}/profits";
        readonly "grid_bot.ai": "/ver1/grid_bots/{id}/ai";
        readonly "grid_bot.manual": "/ver1/grid_bots/{id}/manual";
        readonly grid_bot: "/ver1/grid_bots/{id}";
        readonly "grid_bot.disable": "/ver1/grid_bots/{id}/disable";
        readonly "grid_bot.enable": "/ver1/grid_bots/{id}/enable";
        readonly "grid_bot.required_balances": "/ver1/grid_bots/{id}/required_balances";
        readonly deals: "/ver1/deals";
        readonly "deal.convert_to_smart_trade": "/ver1/deals/{deal_id}/convert_to_smart_trade";
        readonly "deal.update_max_safety_orders": "/ver1/deals/{deal_id}/update_max_safety_orders";
        readonly "deal.panic_sell": "/ver1/deals/{deal_id}/panic_sell";
        readonly "deal.cancel": "/ver1/deals/{deal_id}/cancel";
        readonly "deal.update_deal": "/ver1/deals/{deal_id}/update_deal";
        readonly "deal.update_tp": "/ver1/deals/{deal_id}/update_tp";
        readonly "deal.show": "/ver1/deals/{deal_id}/show";
        readonly "deal.cancel_order": "/ver1/deals/{deal_id}/cancel_order";
        readonly "deal.market_orders": "/ver1/deals/{deal_id}/market_orders";
        readonly "deal.add_funds": "/ver1/deals/{deal_id}/add_funds";
        readonly "deal.data_for_adding_funds": "/ver1/deals/{deal_id}/data_for_adding_funds";
        readonly "bots.account_trade_info.smart_sell": "/ver1/bots/account_trade_info_smart_sell";
        readonly "bots.account_trade_info": "/ver1/bots/account_trade_info";
        readonly "bots.strategy_list": "/ver1/bots/strategy_list";
        readonly "bots.pairs_black_list": "/ver1/bots/pairs_black_list";
        readonly "bots.update_pairs_black_list": "/ver1/bots/update_pairs_black_list";
        readonly "bots.create_bot": "/ver1/bots/create_bot";
        readonly bots: "/ver1/bots";
        readonly "bots.stats": "/ver1/bots/stats";
        readonly "bot.copy_and_create": "/ver1/bots/{bot_id}/copy_and_create";
        readonly "bot.update": "/ver1/bots/{bot_id}/update";
        readonly "bot.disable": "/ver1/bots/{bot_id}/disable";
        readonly "bot.enable": "/ver1/bots/{bot_id}/enable";
        readonly "bot.start_new_deal": "/ver1/bots/{bot_id}/start_new_deal";
        readonly "bot.delete": "/ver1/bots/{bot_id}/delete";
        readonly "bot.panic_sell_all_deals": "/ver1/bots/{bot_id}/panic_sell_all_deals";
        readonly "bot.cancel_all_deals": "/ver1/bots/{bot_id}/cancel_all_deals";
        readonly "bot.deals_stats": "/ver1/bots/{bot_id}/deals_stats";
        readonly "bot.show": "/ver1/bots/{bot_id}/show";
        readonly "accounts.transfer": "/ver1/accounts/transfer";
        readonly "accounts.transfer_history": "/ver1/accounts/transfer_history";
        readonly "accounts.transfer_data": "/ver1/accounts/transfer_data";
        readonly "accounts.new": "/ver1/accounts/new";
        readonly "accounts.update": "/ver1/accounts/update";
        readonly accounts: "/ver1/accounts";
        readonly "accounts.market.list": "/ver1/accounts/market_list";
        readonly "accounts.market.pairs": "/ver1/accounts/market_pairs";
        readonly "accounts.currency_rates.leverage_data": "/ver1/accounts/currency_rates_with_leverage_data";
        readonly "accounts.currency_rates": "/ver1/accounts/currency_rates";
        readonly "account.deposit_data": "/ver1/accounts/{account_id}/deposit_data";
        readonly "account.networks_info": "/ver1/accounts/{account_id}/networks_info";
        readonly "account.convert_dust_to_bnb": "/ver1/accounts/{account_id}/convert_dust_to_bnb";
        readonly "account.active_trading_entities": "/ver1/accounts/{account_id}/active_trading_entities";
        readonly "account.sell_all_to_usd": "/ver1/accounts/{account_id}/sell_all_to_usd";
        readonly "account.sell_all_to_btc": "/ver1/accounts/{account_id}/sell_all_to_btc";
        readonly "account.balance_chart_data": "/ver1/accounts/{account_id}/balance_chart_data";
        readonly "account.load_balances": "/ver1/accounts/{account_id}/load_balances";
        readonly "account.rename": "/ver1/accounts/{account_id}/rename";
        readonly "account.pie_chart_data": "/ver1/accounts/{account_id}/pie_chart_data";
        readonly "account.account_table_data": "/ver1/accounts/{account_id}/account_table_data";
        readonly "account.remove": "/ver1/accounts/{account_id}/remove";
        readonly "account.leverage_data": "/ver1/accounts/{account_id}/leverage_data";
        readonly account: "/ver1/accounts/{account_id}";
    }[K]][M]["parameters"]["body" | "query"], req?: {
        headers?: Record<string, string> | undefined;
    } | undefined) => Promise<{
        data: paths[{
            readonly ping: "/ver1/ping";
            readonly time: "/ver1/time";
            readonly "users.current_mode": "/ver1/users/current_mode";
            readonly "users.change_mode": "/ver1/users/change_mode";
            readonly smart_trades: "/v2/smart_trades";
            readonly smart_trade: "/v2/smart_trades/{id}";
            readonly "smart_trade.reduce_funds": "/v2/smart_trades/{id}/reduce_funds";
            readonly "smart_trade.add_funds": "/v2/smart_trades/{id}/add_funds";
            readonly "smart_trade.close_by_market": "/v2/smart_trades/{id}/close_by_market";
            readonly "smart_trade.force_start": "/v2/smart_trades/{id}/force_start";
            readonly "smart_trade.force_process": "/v2/smart_trades/{id}/force_process";
            readonly "smart_trade.set_note": "/v2/smart_trades/{id}/set_note";
            readonly "smart_trade.trades": "/v2/smart_trades/{smart_trade_id}/trades";
            readonly "smart_trade.trade.close_by_market": "/v2/smart_trades/{smart_trade_id}/trades/{id}/close_by_market";
            readonly "smart_trade.trade": "/v2/smart_trades/{smart_trade_id}/trades/{id}";
            readonly "marketplaces.presets": "/ver1/marketplace/presets";
            readonly "marketplaces.items": "/ver1/marketplace/items";
            readonly "marketplace.signals": "/ver1/marketplace/{item_id}/signals";
            readonly loose_accounts: "/ver1/loose_accounts";
            readonly "loose_accounts.available_currencies": "/ver1/loose_accounts/available_currencies";
            readonly loose_account: "/ver1/loose_accounts/{account_id}";
            readonly "grid_bots.ai": "/ver1/grid_bots/ai";
            readonly "grid_bots.manual": "/ver1/grid_bots/manual";
            readonly "grid_bots.ai_settings": "/ver1/grid_bots/ai_settings";
            readonly grid_bots: "/ver1/grid_bots";
            readonly "grid_bot.market_orders": "/ver1/grid_bots/{id}/market_orders";
            readonly "grid_bot.profits": "/ver1/grid_bots/{id}/profits";
            readonly "grid_bot.ai": "/ver1/grid_bots/{id}/ai";
            readonly "grid_bot.manual": "/ver1/grid_bots/{id}/manual";
            readonly grid_bot: "/ver1/grid_bots/{id}";
            readonly "grid_bot.disable": "/ver1/grid_bots/{id}/disable";
            readonly "grid_bot.enable": "/ver1/grid_bots/{id}/enable";
            readonly "grid_bot.required_balances": "/ver1/grid_bots/{id}/required_balances";
            readonly deals: "/ver1/deals";
            readonly "deal.convert_to_smart_trade": "/ver1/deals/{deal_id}/convert_to_smart_trade";
            readonly "deal.update_max_safety_orders": "/ver1/deals/{deal_id}/update_max_safety_orders";
            readonly "deal.panic_sell": "/ver1/deals/{deal_id}/panic_sell";
            readonly "deal.cancel": "/ver1/deals/{deal_id}/cancel";
            readonly "deal.update_deal": "/ver1/deals/{deal_id}/update_deal";
            readonly "deal.update_tp": "/ver1/deals/{deal_id}/update_tp";
            readonly "deal.show": "/ver1/deals/{deal_id}/show";
            readonly "deal.cancel_order": "/ver1/deals/{deal_id}/cancel_order";
            readonly "deal.market_orders": "/ver1/deals/{deal_id}/market_orders";
            readonly "deal.add_funds": "/ver1/deals/{deal_id}/add_funds";
            readonly "deal.data_for_adding_funds": "/ver1/deals/{deal_id}/data_for_adding_funds";
            readonly "bots.account_trade_info.smart_sell": "/ver1/bots/account_trade_info_smart_sell";
            readonly "bots.account_trade_info": "/ver1/bots/account_trade_info";
            readonly "bots.strategy_list": "/ver1/bots/strategy_list";
            readonly "bots.pairs_black_list": "/ver1/bots/pairs_black_list";
            readonly "bots.update_pairs_black_list": "/ver1/bots/update_pairs_black_list";
            readonly "bots.create_bot": "/ver1/bots/create_bot";
            readonly bots: "/ver1/bots";
            readonly "bots.stats": "/ver1/bots/stats";
            readonly "bot.copy_and_create": "/ver1/bots/{bot_id}/copy_and_create";
            readonly "bot.update": "/ver1/bots/{bot_id}/update";
            readonly "bot.disable": "/ver1/bots/{bot_id}/disable";
            readonly "bot.enable": "/ver1/bots/{bot_id}/enable";
            readonly "bot.start_new_deal": "/ver1/bots/{bot_id}/start_new_deal";
            readonly "bot.delete": "/ver1/bots/{bot_id}/delete";
            readonly "bot.panic_sell_all_deals": "/ver1/bots/{bot_id}/panic_sell_all_deals";
            readonly "bot.cancel_all_deals": "/ver1/bots/{bot_id}/cancel_all_deals";
            readonly "bot.deals_stats": "/ver1/bots/{bot_id}/deals_stats";
            readonly "bot.show": "/ver1/bots/{bot_id}/show";
            readonly "accounts.transfer": "/ver1/accounts/transfer";
            readonly "accounts.transfer_history": "/ver1/accounts/transfer_history";
            readonly "accounts.transfer_data": "/ver1/accounts/transfer_data";
            readonly "accounts.new": "/ver1/accounts/new";
            readonly "accounts.update": "/ver1/accounts/update";
            readonly accounts: "/ver1/accounts";
            readonly "accounts.market.list": "/ver1/accounts/market_list";
            readonly "accounts.market.pairs": "/ver1/accounts/market_pairs";
            readonly "accounts.currency_rates.leverage_data": "/ver1/accounts/currency_rates_with_leverage_data";
            readonly "accounts.currency_rates": "/ver1/accounts/currency_rates";
            readonly "account.deposit_data": "/ver1/accounts/{account_id}/deposit_data";
            readonly "account.networks_info": "/ver1/accounts/{account_id}/networks_info";
            readonly "account.convert_dust_to_bnb": "/ver1/accounts/{account_id}/convert_dust_to_bnb";
            readonly "account.active_trading_entities": "/ver1/accounts/{account_id}/active_trading_entities";
            readonly "account.sell_all_to_usd": "/ver1/accounts/{account_id}/sell_all_to_usd";
            readonly "account.sell_all_to_btc": "/ver1/accounts/{account_id}/sell_all_to_btc";
            readonly "account.balance_chart_data": "/ver1/accounts/{account_id}/balance_chart_data";
            readonly "account.load_balances": "/ver1/accounts/{account_id}/load_balances";
            readonly "account.rename": "/ver1/accounts/{account_id}/rename";
            readonly "account.pie_chart_data": "/ver1/accounts/{account_id}/pie_chart_data";
            readonly "account.account_table_data": "/ver1/accounts/{account_id}/account_table_data";
            readonly "account.remove": "/ver1/accounts/{account_id}/remove";
            readonly "account.leverage_data": "/ver1/accounts/{account_id}/leverage_data";
            readonly account: "/ver1/accounts/{account_id}";
        }[K]][M]["responses"][200 | 201 | 202 | 203 | 204];
        status: number;
    }>;
    subscribe(channel: Channel, callback: WebsocketCallback): void;
    unsubscribe(): void;
}
export {};
