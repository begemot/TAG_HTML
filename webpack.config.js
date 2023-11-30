const path = require('path')

module.exports = {
	mode: 'none',
	devtool: 'source-map',
	entry: {
		app: './src/js/index.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		}]
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './app/assets/js/'),
		publicPath: 'app'
	},
	externals: {
		 jquery: 'jQuery',

	}
}