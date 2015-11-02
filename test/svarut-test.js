'use strict'

var tap = require('tap')
var SvarUt = require('../index')

tap.test('Options object must be supplied', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  SvarUt(options, function errorIfMissingOptions (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Options.mottaker must be supplied', function (test) {
  var options = {
    mottaker: false
  }
  var expectedErrorMessage = 'Missing required input: options.mottaker'
  SvarUt(options, function errorIfMissingOptionsMottaker (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Options.tittel must be supplied', function (test) {
  var options = {
    mottaker: 'post@t-fk.no',
    tittel: false
  }
  var expectedErrorMessage = 'Missing required input: options.tittel'
  SvarUt(options, function errorIfMissingOptionsTittel (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Options.dokumenter must be supplied', function (test) {
  var options = {
    mottaker: 'post@t-fk.no',
    tittel: 'This is a test',
    dokumenter: false
  }
  var expectedErrorMessage = 'Missing required input: options.dokumenter'
  SvarUt(options, function errorIfMissingOptionsDokumenter (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Options.dokumenter must be an array', function (test) {
  var options = {
    mottaker: 'post@t-fk.no',
    tittel: 'This is a test',
    dokumenter: 'This is not an array'
  }
  var expectedErrorMessage = 'Wrong input type: options.dokumenter must be an array'
  SvarUt(options, function errorIfOptionsDokumenterNotAnArray (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Options.config must be supplied', function (test) {
  var options = {
    mottaker: 'post@t-fk.no',
    tittel: 'This is a test',
    dokumenter: [1, 2, 3],
    config: false
  }
  var expectedErrorMessage = 'Missing required input: options.config'
  SvarUt(options, function errorIfMissingOptionsConfig (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
