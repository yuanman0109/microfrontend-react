/* eslint-disable global-require */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const PostcssPluginPx2rem = require("postcss-plugin-px2rem");
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const appName = require('../package.json').name;
// require('@babel/polyfill');

module.exports = {
  entry: './src/index.js',
  // entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: `${appName}.js`,
    publicPath: `http://localhost:9002/${appName}/`,
    libraryTarget: 'umd',
    jsonpFunction: `jsonpFunction${appName}`,
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import', "@babel/plugin-transform-object-assign"],
        },
      }],
    }, {
      test: /\.(ttf|woff|eot|svg|woff2)$/,
      use: 'url-loader',
    }, {
      test: /\.(png|jpg|gif)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 512000,
        },
      }],
    }, {
      test: /\.(css|scss|sass)$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
      }, {
        loader: 'css-loader',
        options: {
          minimize: true,
        },
      }, {
        loader: 'sass-loader',
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: [
            // PostcssPluginPx2rem({ remUnit: 75 }),
            autoprefixer({
              overrideBrowserslist: [
                '>0%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 8',
              ],
            }),
          ],
        },
      }],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      name: 'index.html',
      minify: {
        minifyCSS: true,
        minifyJS: true,
      },
      favicon: './favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash:8].css",
    }),
    new webpack.DefinePlugin({
      'process.env.PACKAGE': JSON.stringify(process.env.PACKAGE),
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.react.js',
      '.json',
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],
  },
  externals: {
    'react': 'root React',
    'react-dom': 'root ReactDOM',
    'redux': 'root Redux',
    'react-redux': 'root ReactRedux',
    'react-router': 'root ReactRouter',
    'react-router-dom': 'root ReactRouterDOM',
  },
};