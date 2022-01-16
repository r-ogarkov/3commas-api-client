export const routeFor = (url, options) => {
    return Object.keys(options || {}).reduce((route, value) => route.includes(value)
        ? route.replace(`{${value}}`, options?.[value])
        : route, url);
};
