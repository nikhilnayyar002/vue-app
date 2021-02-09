import { CONFIG } from "../appConfig"

const addAPIBase = url => CONFIG.API_BASE + url
const getAPIEndPoint = process.env.NODE_ENV === "development" ? (
    url => addAPIBase(url) //proxy the requests from vue app to DEV_SERVER
) : (
        url => CONFIG.VUE_APP_PROD_SERVER + addAPIBase(url)
    )

export const APIS = {
    GET_USER_PROFILE : getAPIEndPoint("/user/profile")
}