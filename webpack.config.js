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
      },
      {
	test: /\.json$/, 
	loader: 'json-loader',
      },
      {
	test: /\.scss$/, 
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
        // exclude: /(node_modules|bower_components)/,
        // loaders : ['style-loader', 'sass-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: 'localhost:8080'
    })
  ]
};
