const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const webpackConfigure = {
  target: 'node',
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '/dist')
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: '/\.(js|jsx)$/',
        use: {
          loader: 'babel-loader'
        },
        exclude: [ path.join(__dirname, '/node_modules') ]
      }
    ]
  },
  resolve: {
    alias: {
      console: path.resolve('console'),
      process: path.resolve('process'),
      Buffer: path.resolve('Buffer'),
      path: path.resolve('path')
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  externals: [nodeExternals()],
  node: {
    global: true,
    __dirname: true,
    __filename: true
  }
}
module.exports = webpackConfigure