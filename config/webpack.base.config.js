// const HtmlWebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = process.cwd();
var webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        'index': './src/entry/index.js'
    },
    output: {
		path: path.resolve(ROOT_PATH, 'bin_dev'),
		filename: 'entry/[name].js',
		chunkFilename: "modules/[id].js",
		publicPath: '/'
	},
	    // 提取公共代码
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {   // 抽离第三方插件
					test: /node_modules/,   // 指定是node_modules下的第三方包
					chunks: 'initial',
					name: 'vendor',  // 打包后的文件名，任意命名    
					// 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
					priority: 10    
				},
				utils: { // 抽离自己写的公共代码，utils这个名字可以随意起
					chunks: 'initial',
					name: 'utils',  // 任意命名
					minSize: 0    // 只要超出0字节就生成一个新包
				}
			}
		}
	},
    module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/,
				// options: {
                //     // vue-loader options go here
                //     postcss: [require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })]
                // }
                // options: {
				// 	// vue-loader options go here
				// 	postcss: [require('autoprefixer')()]
				// }
			},
			{
				test: /\.css$/,
                use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader:"postcss-loader",
						options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
							plugins: (loader) => [
								require('autoprefixer')(), //CSS浏览器兼容
							]
						}
					  }
                ]
			},
			{
                test: /\.less$/,
                use: [
					MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
				// loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=1&name=images/[name][hash:8].[ext]'
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader?limit=1&name=images/[name][hash:8].[ext]'
			  }
		]
    },
    resolve: {
		extensions: ['.css', '.js', '.vue', '.less'],
		alias: {
			"pages": path.resolve(ROOT_PATH, 'src/view/page'),
			"asssets": path.resolve(ROOT_PATH, 'src/assets')
		}
	},
	plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
		}),
		// new webpack.LoaderOptionsPlugin({
		// 	// test: /\.xxx$/, // may apply this only for some modules
		// 	options: {
		// 		postcss: [require('autoprefixer')()]
		// 	}
		// })
    ]
};