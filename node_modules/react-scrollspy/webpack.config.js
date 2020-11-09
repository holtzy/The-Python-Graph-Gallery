const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlguin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    'app.min': [
      './src/js/app.js',
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
    modules: [
      'node_modules',
      path.join(__dirname, 'src/js'),
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        include: [
          path.resolve(__dirname, 'src/scss'),
        ],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('postcss-flexbugs-fixes')(),
                require('autoprefixer')(),
                require('cssnano')(),
              ],
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        include: [
          path.resolve(__dirname, 'src/js'),
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: false,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        include: [
          path.resolve(__dirname, 'src/js'),
        ],
        use: [
          {
            loader: 'eslint-loader',
            options: {
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    publicPath: '/',
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlguin({
      filename: 'index.html',
      template: './src/templates/index.ejs',
    }),
  ],
}
