const path = require('path');
const webpack = require('webpack');
let merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

let ROOT_PATH = process.cwd();

let config = require('./webpack.base.config');
const sourceMap = require('./webpack.entry');

const CleanWebpackPlugin = require('clean-webpack-plugin');


config = merge(config, {
    mode: 'production',
    output: {
        path: path.resolve(ROOT_PATH, 'bin'),
        filename: 'entry/[name].[hash].js',
        chunkFilename: "modules/[id].[hash].js",
        publicPath: '/'
    },
    plugins: sourceMap.plugin_html().concat([
        new CleanWebpackPlugin(['bin'], ROOT_PATH),
        new UglifyJSPlugin({
            sourceMap: true,
            uglifyOptions: {
                compress: {
                    warnings: false,
                    drop_debugger: true,
                    drop_console: true
                }
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: "entry/[name].[hash].js",
            minChunks: 2
        })
    ])
});


module.exports = config;