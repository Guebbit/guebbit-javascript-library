const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'./src/index.ts',
	],
	output: {
		filename: 'guebbit.js',
		path: path.resolve(__dirname, 'dist'),
		library: "G",
		libraryTarget: "umd",
		umdNamedDefine: true,
	},
	plugins: [
		// Generates default index.html
		new HtmlWebpackPlugin({
			title: 'Guebbit Test',
			myPageHeader: 'Hello World',
			template: './index.html',
		}),
		/*
		// Also generate a test.html
		new HtmlWebpackPlugin({  // Also generate a test.html
			filename: 'test.html',
			template: 'src/assets/test.html'
		}),
		*/
	],
	resolve: {
	    extensions: ['.ts', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				exclude: /(node_modules)/,
				include: path.resolve(__dirname, 'src'),
				use: [
					{
						loader: 'ts-loader'
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
			}
		]
	},

	// webpack-dev-server configuration
	devServer: {
		// https://medium.com/code-oil/burning-questions-with-answers-to-why-webpack-dev-server-live-reload-does-not-work-6d6390277920
		// 'Live-reloading' happens when you make changes to code
		// dependency pointed to by 'entry' parameter explained earlier.
		// To make live-reloading happen even when changes are made
		// to the static html pages in 'contentBase', add
		// 'watchContentBase'
		watchContentBase: true,
		compress: true
	},
};
