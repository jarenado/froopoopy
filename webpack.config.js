var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './assets/js/components/Index.jsx',
  output: {
    path: __dirname + '/assets/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'stage-0', 'react'],
	    plugins: ['transform-decorators-legacy']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: 'localhost:8080'
    })
  ]
};
