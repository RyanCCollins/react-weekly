import webpack from 'webpack';
import path from 'path';
import HtmlwebpackPlugin from 'html-webpack-plugin';
import NpmInstallPlugin from 'npm-install-webpack-plugin';
import Visualizer from 'webpack-visualizer-plugin';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);

const env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';
const PORT = process.env.PORT || 1339;
const HOST = '0.0.0.0'; // Set to localhost if need be.

module.exports = {
  devtool: isProduction ? '' : 'source-map',
  entry: [
    path.resolve(ROOT_PATH,'app/src/index')
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: isProduction ? [] : ['eslint'],
        include: path.resolve(ROOT_PATH, './app')
      }
    ],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    },
    {
      test: /\.svg$/,
      loader: 'babel!svg-react'
    },
    {
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.module\.scss$/,
      loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass'
      ]
    },
    {
      test: /\.scss$/,
      exclude: /\.module\.scss$/,
      loaders: ["style", "css", "sass"]
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
      loader: "url-loader?mimetype=application/font-woff"
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
      loader: "file-loader?name=[name].[ext]"
    },
    {
      test: /\.(jpg|png)$/,
      loader: 'file?name=[path][name].[hash].[ext]'
    },
    {
      test: /\.md$/,
      loader: "html!markdown"
    },
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: path.resolve(ROOT_PATH, 'app/src/components'),
      containers: path.resolve(ROOT_PATH, 'app/src/containers'),
      pages: path.resolve(ROOT_PATH, 'app/src/pages'),
      utils: path.resolve(ROOT_PATH, 'app/utils')
    },
  },
  output: {
    path: isProduction ?
      path.resolve(ROOT_PATH, 'server/public')
    :
      path.resolve(ROOT_PATH, 'app/build'),
    publicPath: '/',
    filename: isProduction ? '[name].[chunkhash].js' : 'bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  stats: {
    chunks: isProduction,
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'app/build'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    // Constants defined above take care of logic
    // For setting host and port
    host: HOST,
    port: PORT
  },
  plugins: process.env.NODE_ENV === 'production' ?
    [
      new ExtractTextPlugin('[name].[contenthash].css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        children: true,
        minChunks: 2,
        async: true,
      }),
      new HtmlwebpackPlugin({
        template: 'config/templates/_index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
        inject: true,
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false
      }),
    ]
  :
    [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin(),
      new HtmlwebpackPlugin({
        title: 'React Weekly',
        template: 'index.html'
      }),
      new Visualizer()
    ]
};
