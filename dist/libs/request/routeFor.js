export var routeFor = function (url, options) {
    return Object.keys(options || {}).reduce(function (route, value) {
        return route.includes(value)
            ? route.replace("{".concat(value, "}"), options === null || options === void 0 ? void 0 : options[value])
            : route;
    }, url);
};
