/**
 *
 * @author Bichi Kim [bichi@pjfactory.com]
 * @copyright (c) PJ Factory Co.
 * @license Private
 */
const WebpackBaseConfig = require('./webpack.base.conf')
const webpackMerge = require('webpack-merge')
module.exports = webpackMerge(WebpackBaseConfig, {
  devtool: 'inline-source-map',
})
