const config = {
    apiUrl: process.env.REACT_APP_NODE_ENV === "production" ? process.env.REACT_APP_API_URL_PROD : process.env.REACT_APP_API_URL_DEV,
    apiKey: process.env.REACT_APP_API_KEY,
}
export default config;