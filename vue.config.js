
const serverDomain = `http://localhost:${process.env.SERVER_PORT}`

module.exports = {
    devServer: {
        port: process.env.CLIENT_PORT,
        proxy: {
            '/socket.io': {
                target: serverDomain,
                ws: true
            },
            '/api': {
                target: serverDomain,
            },
        },
    },
}