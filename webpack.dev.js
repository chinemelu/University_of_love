const path = require("path");

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devServer: {
        historyApiFallback: true,
        port: 8000,
        devMiddleware: {
            writeToDisk: true,
            publicPath: '/'
        },
        watchFiles: ['src/**/*'],
    }
});