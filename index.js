const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

module.exports = function generatePage (options) {
  if (typeof options !== 'object') throw new Error('options must be a object.')

  options = Object.assign({
    name: 'index',
    json: false,
    less: false,
    scss: false,
    css: false
  }, options)

  if (!options.root) throw new Error('You must specify a root directory.')

  const pageRoot = path.resolve(options.root, options.name)

  if (fs.existsSync(pageRoot)) return false

  mkdirp.sync(pageRoot)

  const results = []

  // js
  const jsTemplate = require('./templates/js')
  const jsPath = path.resolve(pageRoot, options.name + '.js')
  fs.writeFileSync(jsPath, jsTemplate(options))
  results.push(jsPath)
  // xml
  const xmlTemplate = require('./templates/xml')
  const xmlPath = path.resolve(pageRoot, options.name + '.xml')
  fs.writeFileSync(xmlPath, xmlTemplate(options))
  results.push(xmlPath)
  // less
  if (options.less) {
    const lessTemplate = require('./templates/less')
    const lessPath = path.resolve(pageRoot, options.name + '.less')
    fs.writeFileSync(lessPath, lessTemplate(options))
    results.push(lessPath)
  }
  // scss
  if (options.scss) {
    const scssTemplate = require('./templates/scss')
    const scssPath = path.resolve(pageRoot, options.name + '.scss')
    fs.writeFileSync(scssPath, scssTemplate(options))
    results.push(scssPath)
  }
  // css
  if (options.css) {
    const cssTemplate = require('./templates/css')
    const cssPath = path.resolve(pageRoot, options.name + '.css')
    fs.writeFileSync(cssPath, cssTemplate(options))
    results.push(cssPath)
  }
  // json
  if (options.json) {
    const jsonTemplate = require('./templates/json')
    const jsonPath = path.resolve(pageRoot, options.name + '.json')
    fs.writeFileSync(jsonPath, jsonTemplate(options))
    results.push(jsonPath)
  }

  return results
}
