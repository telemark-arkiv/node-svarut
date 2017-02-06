[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://travis-ci.org/telemark/node-svarut.svg?branch=master)](https://travis-ci.org/telemark/node-svarut)
# node-svarut

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/node-svarut.svg)](https://greenkeeper.io/)
Node module for SvarUt

More information on SvarUt [here](https://kurs.kommit.no/mod/page/view.php?id=193)

This module does *not* cover all methods in [ForsendelsesServiceV4](https://svarut.ks.no/tjenester/forsendelseservice/ForsendelsesServiceV4?wsdl)

Currently this module supports sending PDF-document(s) to private persons or organizations with SvarUt.

KS has plans to build a REST-API, so we will wait until this project is finished, to support the methods like retrieveForsendelseStatus, retrieveForsendelseHistorikk and setForsendelseLestAvEksterntSystem

## Installation
From npm

```sh
$ npm install svarut
```

From GitHub
```sh
$ git clone git@github.com:telemark/node-svarut.git
```

cd into directory and run the setup script

```sh
$ npm run setup
```

## Usage

```javascript
'use strict'

var svarUt = require('svarut')

var options = {
  config: {
    url: 'https://username:password@test.svarut.ks.no/tjenester/forsendelseservice/ForsendelsesServiceV4',
    action: 'http://www.ks.no/svarut/services/ForsendelsesServiceV4/sendForsendelse'
  },
  tittel: 'SvarUt testdokument',
  dokumenter: [
    {
      filsti: 'test/data/skoleskyss_avslag_vedtak.pdf',
      mimetype: 'application/pdf'
    },
    {
      filsti: 'test/data/skoleskyss_kvittering.pdf',
      mimetype: 'application/pdf'
    }
  ],
  forsendelse: {
    avgivendeSystem: 'node-svarut test',
    konteringskode: '1111',
    krevNiva4Innlogging: false,
    kryptert: false,
    kunDigitalLevering: false
  },
  mottaker: {
    type: 'privatPerson',
    // type: 'Organisasjon', // Hvis organisasjon
    navn: 'Terje Tverrtryne',
    adresse1: 'Skogsveien 42',
    adresse2: '',
    adresse3: '',
    postnr: '3710',
    poststed: 'Skien',
    fodselsnr: '01029400470'
    // orgnr: '940192226' // Hvis organisasjon
  },
  printkonfigurasjon: {
    brevtype: 'BPOST',
    fargePrint: true,
    tosidig: false
  }
}

svarUt(options, function (error, id) {
  if (error) {
    console.log(error)
  } else {
    console.log(id)
  }
})
```

Returns an array of ids

```javascript
['b53d8d15-75e8-4536-84d2-c275cc63f47e']
```
