'use strict'

var S = require('string')
var ws = require('ws.js')
var Http = ws.Http
var Mtom = ws.Mtom

function checkResponse (response, callback) {
  var id = S(response).between('<return>', '</return>').s
  if (!id) {
    callback('id not found in response' + response, null)
  }
  callback(null, id)
}

function addFiles (options, xmlRequest) {
  var i = 0
  options.dokumenter.forEach(function (dokument) {
    i++
    var xpath = '//data[' + i + ']'
    ws.addAttachment(xmlRequest, 'request', xpath, dokument.filsti, dokument.mimetype)
  })
}

function sendRequest (options, xmlRequest, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options object'))
  }

  if (!xmlRequest) {
    return callback(new Error('Missing required input: xmlRequest'))
  }

  var handlers = [
    new Mtom(),
    new Http()
  ]

  addFiles(options, xmlRequest)
  ws.send(handlers, xmlRequest, function (page) {
    if (!page.response) {
      return callback(page, null)
    }
    checkResponse(page.response, function (err, id) {
      if (err) {
        return callback(page)
      }
      return callback(id)
    })
  })
}
module.exports = sendRequest
