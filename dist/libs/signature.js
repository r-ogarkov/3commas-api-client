import HmacSHA256 from "crypto-js/hmac-sha256";
import Hex from "crypto-js/enc-hex";
export const signature = (secret, url) => HmacSHA256(url, secret).toString(Hex);
