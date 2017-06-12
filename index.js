'use strict'

const colon = require('colon-template')
const extend = require('extend-shallow')

exports.name = 'colon-template'
exports.inputFormats = ['colon', 'colon-template']
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  const template = colon(str)
  return function (locals) {
    const finalLocals = extend({}, options, locals)
    return template(finalLocals)
  }
}
