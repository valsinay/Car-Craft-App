module.exports = {
    development: {
        port: process.env.PORT || 9999,
        authCookieName: 'x-auth-token'
    },
    secret: "shhhhh",
    production: {}
};