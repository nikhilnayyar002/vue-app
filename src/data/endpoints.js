import { CONFIG } from "../appConfig"

export const ENDPOINTS = {
    GET_USER_PROFILE: "/user/profile",
}

/** mutate ENDPOINTS according to development environments.
 *  This will work only if bundler loads this file before exporting ENDPOINTS object.
 */
const addAPIBase = url => CONFIG.API_BASE + url
const getAPIEndPoint = process.env.NODE_ENV === "development" ?
    url => addAPIBase(url) //proxy the requests from vue app to DEV_SERVER
    :
    url => CONFIG.VUE_APP_PROD_SERVER + addAPIBase(url)

for (let i in ENDPOINTS)
    ENDPOINTS[i] = getAPIEndPoint(ENDPOINTS[i])