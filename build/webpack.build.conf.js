/**
 *
 * @author Bichi Kim [bichi@pjfactory.com]
 * @copyright (c) PJ Factory Co.
 * @license Private
 */
const WebpackBaseConfig = require('./webpack.base.conf')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
WebpackBaseConfig.output.libraryTarget = 'commonjs2' // module mode
module.exports = webpackMerge(WebpackBaseConfig, {
  plugins: [
    new UglifyJsPlugin(),
  ],
})