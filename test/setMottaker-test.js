'use strict'

var tap = require('tap')
var setMottaker = require('../lib/setMottaker')

tap.throws(
  function throwIfMissingOptions () {
    setMottaker()
  },
  {message: 'Missing required input: options object'},
  'Options object must be supplied'
)

tap.throws(
  function throwIfMissingOptionsType () {
    setMottaker({
      type: false
    })
  },
  {message: 'Missing required input: options.type'},
  'Options.type must be supplied'
)

tap.throws(
  function throwIfMissingOptionsNavn () {
    setMottaker({
      type: 'privatPerson',
      navn: false
    })
  },
  {message: 'Missing required input: options.navn'},
  'Options.navn must be supplied'
)

tap.throws(
  function throwIfMissingOptionsAdresse1 () {
    setMottaker({
      type: 'privatPerson',
      navn: 'Kårni Ball',
      adresse1: false
    })
  },
  {message: 'Missing required input: options.adresse1'},
  'Options.adresse1 must be supplied'
)

tap.throws(
  function throwIfMissingOptionsPostnr () {
    setMottaker({
      type: 'privatPerson',
      navn: 'Kårni Ball',
      adresse1: 'Lakstrappen 79',
      postnr: false
    })
  },
  {message: 'Missing required input: options.postnr'},
  'Options.postnr must be supplied'
)

tap.throws(
  function throwIfMissingOptionsPoststed () {
    setMottaker({
      type: 'privatPerson',
      navn: 'Kårni Ball',
      adresse1: 'Lakstrappen 79',
      postnr: 3681,
      poststed: false
    })
  },
  {message: 'Missing required input: options.poststed'},
  'Options.postnr must be supplied'
)

tap.throws(
  function throwIfMissingOptionsFodselsnummer () {
    setMottaker({
      type: 'privatPerson',
      navn: 'Kårni Ball',
      adresse1: 'Lakstrappen 79',
      postnr: 3681,
      poststed: 'Notodden',
      fodselsnr: false
    })
  },
  {message: 'Missing required input: id-number (fodselsnr og orgnr)'},
  'Options.fodselsnr must be supplied'
)
