'use strict'

var tap = require('tap')
var setDokumenter = require('../lib/setDokumenter')

tap.throws(
  function throwIfMissingOptions () {
    setDokumenter()
  },
  {message: 'Missing required input: options object'},
  'Options object must be supplied'
)

tap.throws(
  function throwIfMissingOptionsDokumenter () {
    setDokumenter({
      dokumenter: false
    })
  },
  {message: 'Missing required input: options.dokumenter'},
  'Options.dokumenter must be supplied'
)

tap.throws(
  function throwIfOptionsDokumenterNotAnArray () {
    setDokumenter({
      dokumenter: 'This is not an array'
    })
  },
  {message: 'Wrong input type: options.dokumenter must be an array'},
  'Options.dokumenter must be an array'
)
