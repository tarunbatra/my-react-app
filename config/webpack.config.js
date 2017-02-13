var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // Starting point of app
  entry: {
    main: path.resolve(__dirname, '../src/index.jsx')
  },

  // Defines the output path of the bundled file
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../app/build/'),
    publicPath: '/'
  },

  // Plugins for webpack
  plugins: [
    new HtmlWebpackPlugin({         // Plugin for building final HTML
      inject: true,
      template: 'src/index.html'
    })
  ],

  module: {

    // Define the loaders for file types
    loaders: [

      // Ask Babel to load JS/JSX
      {
        test: /\.js[x]$/,
        include: path.join(__dirname, '../src'),
        loaders: ['babel-loader']
      },

      // Load CSS via css-loader and then add it to style tags in bundled file
      {
        test: /\.css$/,
        loaders: 'style-loader!css-loader?sourceMap'
      },
      // Convert SASS to CSS and then add it to style tags in bundled file
      {
        test: /\.scss$/,
        loaders: 'style-loader!css-loader?sourceMap!resolve-url-loader!sass-loader?sourceMap'
      }
    ]
  },
  resolve: {
    // Import files without giving relative path
    modules: [
      path.join(__dirname, '../src'),
      'node_modules'
    ]
  },

  // Maps source for development
  devtool: 'eval-source-map',

  // Configures webpack-dev-server
  devServer: {
    inline: true,
    contentBase: 'app',
    port: 3000,            // Port of server
    historyApiFallback: {
      index: 'build/index.html'  // Always serve index.html to avoid SSR
    }
  }
};
