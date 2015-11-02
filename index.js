'use strict'

var buildXml = require('./lib/buildXml')
var sendRequest = require('./lib/sendRequest')

function SvarUt (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }

  if (!options.mottaker) {
    return callback(new Error('Missing required input: options.mottaker'), null)
  }

  if (!options.tittel) {
    return callback(new Error('Missing required input: options.tittel'), null)
  }

  if (!options.dokumenter) {
    return callback(new Error('Missing required input: options.dokumenter'), null)
  }

  if (!Array.isArray(options.dokumenter)) {
    return callback(new Error('Wrong input type: options.dokumenter must be an array'), null)
  }

  if (!options.config) {
    return callback(new Error('Missing required input: options.config'), null)
  }

  var svarutRequest = buildXml(options)
  sendRequest(options, svarutRequest, function (err, id) {
    if (err) {
      return callback(err, null)
    }
    return callback(null, id)
  })
}

module.exports = SvarUt
