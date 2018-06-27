// const HtmlWebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = process.cwd();
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
                // options: {
				// 	// vue-loader options go here
				// 	postcss: [require('autoprefixer')()]
				// }
			},
			{
				test: /\.css$/,
                use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
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
		})
    ]
};