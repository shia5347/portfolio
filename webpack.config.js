const path = require('path')

module.exports = {
	entry: './dist/index.js',
	devServer: {
		historyApiFallback: true,
	},
	output: {
		filename: 'webPackaged.js',
	},

	module: {
		rules: [{test: /\.css$/, use: ['style-loader','css-loader']}],
	},

	devtool : 'inline-source-map'
};
