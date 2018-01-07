const fs = require('fs')
const rollup = require('rollup').rollup
const babel = require('rollup-plugin-babel')
const replace = require('rollup-plugin-replace')
const nodeResolve = require('rollup-plugin-node-resolve')
const uglify = require('rollup-plugin-uglify')
const meta = require('../package.json')

const banner = `/*!
 * ${meta.name} v${meta.version}
 * ${meta.homepage}
 *
 * Copyright (c) 2016-2017 ${meta.author}
 * Released under the MIT license
 * ${meta.homepage}/blob/master/LICENSE
 */`

const name = 'VuexModal'

const globals = {
  vue: 'Vue',
  vuex: 'Vuex'
}

const config = {
  input: 'src/index.js',
  plugins: [
    nodeResolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: ['vue', 'vuex']
}

mkdirIfNotExists('dist')

// Styles
fs.writeFileSync('dist/vuex-modal.css', fs.readFileSync('node_modules/vue-thin-modal/dist/vue-thin-modal.css'))

// Scripts
rollup(config)
  .then(bundle => {
    return write(bundle, `dist/${meta.name}.cjs.js`, {
      format: 'cjs',
      banner
    })
  })
  .then(() => rollup(config))
  .then(bundle => {
    return write(bundle, `dist/${meta.name}.esm.js`, {
      format: 'es',
      banner
    })
  })
  .then(() => rollup(addPlugins(config, [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ])))
  .then(bundle => write(bundle, `dist/${meta.name}.js`, {
    format: 'umd',
    banner,
    name,
    globals
  }))
  .then(() => rollup(addPlugins(config, [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    uglify({
      output: {
        comments(node, comment) {
          const text = comment.value
          const type = comment.type
          if (type === 'comment2') {
            return /^!/i.test(text)
          }
        }
      }
    })
  ])))
  .then(bundle => write(bundle, `dist/${meta.name}.min.js`, {
    format: 'umd',
    banner,
    name,
    globals
  }))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

function addPlugins(config, plugins) {
  return Object.assign({}, config, {
    plugins: config.plugins.concat(plugins)
  })
}

function mkdirIfNotExists(dirPath) {
  try {
    fs.statSync(dirPath)
  } catch (error) {
    fs.mkdirSync(dirPath)
  }
}

function write(bundle, dest, config) {
  return bundle.generate(config)
    .then(({ code }) => new Promise((resolve, reject) => {
      fs.writeFile(dest, code, error => {
        if (error) return reject(error)
        console.log(green(dest) + ' ' + size(code))
        resolve()
      })
    }))
}

function green(str) {
  return `\x1b[32m${str}\x1b[0m`
}

function size(str) {
  return (str.length / 1024).toFixed(2) + 'kb'
}
