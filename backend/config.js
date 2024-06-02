require('dotenv').config()
const config = {
    PORT: process.env.BACKEND_PORT,
    HOST: process.env.NODE_ENV === "production" ? process.env.BACKEND_HOST_PROD : process.env.BACKEND_HOST_DEV,
    DATABASE_HOST: process.env.NODE_ENV === "production" ? process.env.DATABASE_HOST_PROD : process.env.DATABASE_HOST_DEV,
    DATABASE_PORT: process.env.DATABASE_PORT,
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_NAME: process.env.DATABASE_NAME,
    SECRET_KEY: process.env.SECRET_KEY,
    API_KEY: process.env.API_KEY,
}

module.exports = config;