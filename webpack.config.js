const path = require('path')

module.exports = {

	entry: './dist/index.js',
	output: {
		filename: 'webPackaged.js',
	},

	module: {
		rules: [{test: /\.css$/, use: ['style-loader','css-loader']}],
	},
};
