const path = require('path');
const merge = require('webpack-merge');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.base');
const appName = require('../package.json').name;

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    publicPath: `http://localhost:9002/${appName}/`,
    port: 9002,
    hot: true,
    watchContentBase: true,
    index: 'index.html',
    historyApiFallback: {
      index: `/${appName}/index.html`,
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      name: 'common',
    },
  },
  
  // plugins: [
  //   new BundleAnalyzerPlugin({
  //     analyzerMode: 'server',
  //     generateStatsFile: true,
  //     statsOptions: { source: false },
  //   }),
  // ],
});
