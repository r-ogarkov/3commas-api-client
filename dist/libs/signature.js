import HmacSHA256 from "crypto-js/hmac-sha256";
import Hex from "crypto-js/enc-hex";
export var signature = function (secret, url) {
    return HmacSHA256(url, secret).toString(Hex);
};
