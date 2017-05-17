const path = require('path')

const examplesDir = path.resolve(__dirname, '../examples')

module.exports = {
  context: examplesDir,
  entry: createEntry(['basic']),
  output: {
    path: examplesDir,
    filename: '[name]/__build__.js'
  },
  resolve: {
    alias: {
      'vuex-modal/dist/vuex-modal.css': path.resolve(__dirname, '../dist/vuex-modal.css'),
      'vuex-modal': path.resolve(__dirname, '../')
    },
    modules: ['node_modules'],
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['es2015', { modules: false }]
          ],
          babelrc: false
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: examplesDir,
    inline: true,
    port: 8080,
    host: '0.0.0.0',
    hot: true
  }
}

function createEntry(names) {
  const res = {}
  names.forEach(name => {
    res[name] = `./${name}/main.js`
  })
  return res
}
