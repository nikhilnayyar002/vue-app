const { CONFIG } = require('./src/appConfig');

module.exports = {
    devServer: {
        proxy: {
            '/socket.io': {
                target: CONFIG.DEV_SERVER,
                ws: true
            },
            [CONFIG.API_BASE ? CONFIG.API_BASE : "/"]: {
                target: CONFIG.DEV_SERVER,
            },
        },
    },
}