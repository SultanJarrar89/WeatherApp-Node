const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

// geocode('bosten', (err, data) => {
//   console.log('ERROR', err)
//   console.log('DATA', data)
// })

forecast('3a7.7749', 'slksljsljs1a22.4194', (err, data) => {
  console.log('ERROR', err)
  console.log('DATA', data)
})
