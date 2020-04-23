const path = require('path');

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'guebbit.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
	    extensions: ['.ts', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				include: path.resolve(__dirname, 'src'),
				use: [
					{
						loader: 'ts-loader'
					}
				]
			},
		]
	},
};
