var merge = require('webpack-merge');
let config = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

config = merge(config, {
  mode: 'development',
  devtool: 'source-map',
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
        chunks: ["utils", "vendor", 'index'],
    })
  ]
});


module.exports = config;