/*
**  Imports
*/

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var CopyWebpackPlugin = require("copy-webpack-plugin");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var path = require('path');

/* Webpack config */
module.exports = {
  entry: [
    "./js/helpers.js",
    "./js/app.js",
    "./css/fonts.css",
    "./css/app.css",
    /* Append responsive CSS last */
    "./css/responsive/mobile.css"
  ],
  output: {
    path: path.resolve(__dirname, "../priv/static"),
    filename: "js/app.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ],
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  resolve: {
    modules: [ "node_modules", __dirname + "/static/js" ]
  },
  plugins: [
    new ExtractTextPlugin("css/app.css"),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new CopyWebpackPlugin([{from: __dirname + "/static"}])
  ]
};
