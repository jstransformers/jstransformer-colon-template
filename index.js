'use strict'
var colon = require('colon-template')
var extend = require('extend-shallow')

exports.name = 'colon-template'
exports.inputFormats = ['colon', 'colon-template']
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  var template = colon(str)
  return function (locals) {
    var finalLocals = extend({}, options, locals)
    return template(finalLocals)
  }
}
