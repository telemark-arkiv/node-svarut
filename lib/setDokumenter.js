'use strict'

var path = require('path')

function setDokumenter (options) {
  if (!options) {
    throw new Error('Missing required input: options object')
  }

  if (!options.dokumenter) {
    throw new Error('Missing required input: options.dokumenter')
  }

  if (!Array.isArray(options.dokumenter)) {
    throw new Error('Wrong input type: options.dokumenter must be an array')
  }

  var dokumenter = []

  options.dokumenter.forEach(function (dokument) {
    if (!dokument.filsti) {
      throw new Error('Missing required input: options.dokumenter.filsti')
    }
    if (!dokument.mimetype) {
      throw new Error('Missing required input: options.dokumenter.mimetype')
    }

    dokumenter.push({
      data: '',
      filnavn: path.basename(dokument.filsti),
      mimetype: dokument.mimetype
    })
  })
  return dokumenter
}

module.exports = setDokumenter
