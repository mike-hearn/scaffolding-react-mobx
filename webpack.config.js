const webpack = require('webpack');
const path = require('path');
const cssnext = require('postcss-cssnext');
const precss = require('precss');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        exclude: ['node_modules'],
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      },
      // Exclude global SASS files (in src/shared/styles) from CSS modules processing
      {
        test: /\.scss$/,
        exclude: [__dirname + '/src/shared/styles'],
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss?parser=postcss-scss!sass?sourceMap'
      },
      // Globally scoped SASS files (including bootstrap) should not be processed through CSS Modules
      {
        test: /\.scss$/,
        include: [__dirname + '/src/shared/styles'],
        loader: 'style!css!postcss?parser=postcss-scss!sass?sourceMap'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ],
  },
  postcss: function postcss() {
    return [cssnext, precss];
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.Tether': 'tether',
    }),
  ]
};

