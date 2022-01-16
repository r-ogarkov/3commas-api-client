export const handler = async (response, options) => new Promise(async (resolve, reject) => {
    const { status, url } = response;
    try {
        const text = await response.text();
        try {
            return resolve({ data: JSON.parse(text), status });
        }
        catch (parseError) {
            return reject({
                status,
                message: text,
                url,
                ...options,
            });
        }
    }
    catch (responseError) {
        return reject({
            status,
            url,
            ...options,
        });
    }
});
