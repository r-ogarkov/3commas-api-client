var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const handler = (response, options) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const { status, url } = response;
        try {
            const text = yield response.text();
            try {
                return resolve({ data: JSON.parse(text), status });
            }
            catch (parseError) {
                return reject(Object.assign({ status, message: text, url }, options));
            }
        }
        catch (responseError) {
            return reject(Object.assign({ status,
                url }, options));
        }
    }));
});
