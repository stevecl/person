var merge = require('webpack-merge');
let config = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
config = merge(config, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/entry/index.html',
        filename: 'test.html',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        },
        inject: 'body',
        chunks: ["vendors", 'index'],
    })
  ],
  devServer: {
    contentBase: false,
    // host: "192.168.2.36",
    clientLogLevel: false,
    port: 8082,
    compress: true,
    open: true,
    openPage: 'test.html'
  },
});


module.exports = config;