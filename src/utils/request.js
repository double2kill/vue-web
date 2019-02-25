import URL from '../constants/url'
const defaultConfig = {
    host: URL.CMD,
    method: 'GET',
}
export default (config) => {
    config = {
        ...defaultConfig,
        ...config
    }
    const {
        host,
        uri,
        method,
        data
    } = config
    if (uri === undefined) {
        return Promise.reject(new Error('uri 不能为空'))
    }
    const url = `${host}/${uri}`
    return fetch(url, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method,
        body: JSON.stringify(data)
    }).then(res => res.json());
}