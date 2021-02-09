const API_BASE = process.env.API_BASE ? process.env.API_BASE : ""

const VUE_APP_PROD_SERVER = process.env.VUE_APP_PROD_SERVER ? process.env.VUE_APP_PROD_SERVER : ""
// if (process.env.NODE_ENV === "production" && !VUE_APP_PROD_SERVER)
//     throw new Error("Please provide value for VUE_APP_PROD_SERVER in .env file.")

const DEFAULT_DEV_SERVER_PORT = 5000
const VUE_APP_DEV_SERVER = process.env.VUE_APP_DEV_SERVER
const VUE_APP_DEV_SERVER_PORT = process.env.VUE_APP_DEV_SERVER_PORT
const LOCALHOST_DEV_SERVER = `http://localhost:${VUE_APP_DEV_SERVER_PORT ? VUE_APP_DEV_SERVER_PORT : DEFAULT_DEV_SERVER_PORT}`
const DEV_SERVER = VUE_APP_DEV_SERVER ? VUE_APP_DEV_SERVER : LOCALHOST_DEV_SERVER

const CONFIG = {
    API_BASE,
    DEV_SERVER,
    VUE_APP_PROD_SERVER
};

exports.CONFIG = CONFIG