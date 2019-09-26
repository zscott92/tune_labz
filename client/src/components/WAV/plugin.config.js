module.exports = {
  entry: __dirname + 'src/entry.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [ 'es2015', 'react' ]
        }
      }
    ]
  },
  plugins: [ htmlWebpackConfig ],
  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: {
      index: '/'
    }
  }