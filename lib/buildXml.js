'use strict'

var EasyXml = require('easyxml')
var setDokumenter = require('./setDokumenter')
var setMottaker = require('./setMottaker')
var validateOptions = require('./validateOptions')

var serializer = new EasyXml({
  rootElement: 'soap:Envelope',
  indent: 0,
  unwrappedArrays: true
})

function buildXml (options) {
  var dokumenter = setDokumenter(options)
  var mottaker = setMottaker(options.mottaker)
  validateOptions(options)
  var obj = {
    '_xmlns:soap': 'http://schemas.xmlsoap.org/soap/envelope/',
    'soap:Body': {
      'ns2:sendForsendelse': {
        '_xmlns:ns2': 'http://www.ks.no/svarut/services',
        forsendelse: {
          avgivendeSystem: options.forsendelse.avgivendeSystem,
          konteringskode: options.forsendelse.konteringskode,
          krevNiva4Innlogging: options.forsendelse.krevNiva4Innlogging,
          kryptert: options.forsendelse.kryptert,
          dokumenter,
          mottaker: mottaker,
          printkonfigurasjon: options.printkonfigurasjon,
          tittel: options.tittel
        }
      }
    }
  }

  var xml = serializer.render(obj)
  xml = xml.replace(/\n/g, '')
  var xmlRequest = {
    request: xml,
    url: options.config.url,
    action: options.config.action,
    contentType: 'application/soap+xml'
  }
  return xmlRequest
}

module.exports = buildXml
