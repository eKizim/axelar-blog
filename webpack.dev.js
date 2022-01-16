const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    
    devServer: {
	port: 3000,
	historyApiFallback: true,
	static: './dist',
	hot: true
    },
    
    optimization: {
	minimizer: [new CssMinimizerPlugin()],
	minimize: true
    }
});
