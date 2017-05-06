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
      'vuex-modal/dist/vuex-modal.css': path.resolve(__dirname, '../src/style.css'),
      'vuex-modal': path.resolve(__dirname, '../src/index.js')
    },
    modules: ['node_modules'],
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader', options: { esModule: true }},
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: examplesDir
  }
}

function createEntry(names) {
  const res = {}
  names.forEach(name => {
    res[name] = `./${name}/main.js`
  })
  return res
}
