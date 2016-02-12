'use strict'

var svarUt = require('./index.js')

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
  /*
  mottaker: [
    {
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
    {
      type: 'privatPerson',
      // type: 'Organisasjon', // Hvis organisasjon
      navn: 'Terje Tverrtryne2',
      adresse1: 'Skogsveien 42',
      adresse2: '',
      adresse3: '',
      postnr: '3710',
      poststed: 'Skien',
      fodselsnr: '01029400470'
      // orgnr: '940192226' // Hvis organisasjon
    }
  ],
  */
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
    console.error(error)
  } else {
    console.log(id)
  }
})
