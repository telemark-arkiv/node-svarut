'use strict'

var tap = require('tap')
var sendRequest = require('../lib/sendRequest')

tap.test('Options object must be supplied', function (test) {
  var options = false
  var xmlRequest = true
  var expectedErrorMessage = 'Missing required input: options object'
  sendRequest(options, xmlRequest, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('xmlRequest must be supplied', function (test) {
  var options = true
  var xmlRequest = false
  var expectedErrorMessage = 'Missing required input: xmlRequest'
  sendRequest(options, xmlRequest, function errorIfMissingOptionsMottaker (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
