'use strict'

function setMottaker (options) {
  if (!options) {
    throw new Error('Missing required input: options object')
  }

  if (!options.type) {
    throw new Error('Missing required input: options.type')
  }

  if (!options.navn) {
    throw new Error('Missing required input: options.navn')
  }

  if (!options.postnr) {
    throw new Error('Missing required input: options.postnr')
  }

  if (!options.poststed) {
    throw new Error('Missing required input: options.poststed')
  }

  if (!options.fodselsnr && !options.orgnr) {
    throw new Error('Missing required input: id-number (fodselsnr og orgnr)')
  }

  var mottaker = {
    '_xsi:type': 'ns2:' + options.type,
    '_xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance'
  }
  delete options.type
  Object.assign(mottaker, options)

  return mottaker
}

module.exports = setMottaker
