/**
 *
 * @author Bichi Kim <bichi@pjfactory.com>
 * @copyright PJ Factory Co.
 * @license Private
 */
const webpack = require('./build/webpack.test.conf.js')
module.exports = function(config) {
  config.set({
    browsers: ['ChromeWithoutSecurity'],
    frameworks: ['mocha', 'chai'],
    reporters: ['spec'],
    files: [
      {pattern: './src/**/*.spec.ts', watched: false},
      {pattern: './src/**/*.spec.js', watched: false},
    ],
    exclude: [],
    preprocessors: {
      './src/**/*.ts': ['webpack', 'sourcemap'],
      './src/**/*.js': ['webpack', 'sourcemap'],
    },
    webpack,
    webpackMiddleware: {
      noInfo: true,
    },
    logLevel: config.LOG_INFO,
    colors: true,
    customLaunchers: {
      ChromeWithoutSecurity: {
        base: 'Chrome',
        flags: ['--disable-web-security'],
      },
    },
    mime: {
      'text/x-typescript': ['ts'],
    },
  })
}
