const webpack = require('webpack')
const webpackDevConfig = require('./webpack.config.js')
const WebpackDevServer = require('webpack-dev-server')

webpackDevConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:4041/', 'webpack/hot/dev-server')
webpackDevConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

const compile = webpack(webpackDevConfig)

const server = new WebpackDevServer(compile, {
  contentBase: '/dist',
  stats: { colors: true, modules: true, chunks: false },
  inline: true,
  hot: true,
  progress: true,
  watch: true,
  historyApiFallback: true
})

server.listen(4041, 'localhost', () => {})
