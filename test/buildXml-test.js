'use strict'

var tap = require('tap')
var buildXml = require('../lib/buildXml')

tap.throws(
  function throwIfMissingOptions () {
    buildXml()
  },
  {message: 'Missing required input: options object'},
  'Options object must be supplied'
)
