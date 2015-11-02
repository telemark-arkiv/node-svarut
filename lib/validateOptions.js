'use strict'

function validateOptions (options) {
  if (!options) {
    throw new Error('Missing required input: options object')
  }

  if (!options.forsendelse) {
    throw new Error('Missing required input: options.forsendelse object')
  }

  if (!options.forsendelse.avgivendeSystem) {
    console.log('Missing required input: options.forsendelse.avgivendeSystem')
  }

  if (!options.tittel) {
    throw new Error('Missing required input: options.tittel')
  }

  return options.forsendelse
}

module.exports = validateOptions
