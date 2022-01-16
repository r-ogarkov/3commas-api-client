export const routeFor = (url, options) => {
    return Object.keys(options || {}).reduce((route, value) => route.includes(value)
        ? route.replace(`{${value}}`, options === null || options === void 0 ? void 0 : options[value])
        : route, url);
};
