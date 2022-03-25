const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js')
  },
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
      port: 3000,
      hot: true,
      open: true,
      compress: true,
      static: {
        directory: path.resolve(__dirname, 'dist')
      },
      liveReload: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader', 
                options: {
                    importLoaders: 1
                }
            },
            { 
                loader: 'postcss-loader', 
            }
          ],
        
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
}