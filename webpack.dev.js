const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development', //doesn't minify main.js(optional)
  devtool: 'none', // code is readable in main.js (optional you can delete this line if you don't want to see the code in main.js not minified)
  entry: { vendor: './src/vendor.js', main: './src/index.js' },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ],
  module: {
    rules: [
      {
        loader: 'babel-loader',
        include: [path.resolve(__dirname, './src')],
        test: /\.js$/,
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  }
};
