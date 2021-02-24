const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  watch: true,
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist/')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"]
  },
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.(scss)$/, use: [{
        loader: 'style-loader', // inject CSS to page
      }, {
        loader: 'css-loader', // translates CSS into CommonJS modules
      }, {
        loader: 'postcss-loader', // Run post css actions
        options: {
          plugins: function () { // post css plugins, can be exported to postcss.config.js
            return [
              require('precss'),
              require('autoprefixer')
            ];
          }
        }
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }]},
      { test: /\.tsx?$/, loader: "babel-loader" },
      { test: /\.tsx?$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpe?g|gif|jp2|webp)$/, use: [
        {
          loader: 'url-loader',
          options: {
            esModule: false,
          },
        },
      ], }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  }
};