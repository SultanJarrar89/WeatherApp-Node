const request = require('request')

const geocode = (address, cb) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoic3VsdGFuODkiLCJhIjoiY2tsaG05c3M5MDV3eTJucG1kaHk1b29oOSJ9.QviNO-8V0feuCLy0YpsVHQ&limit=1`
  request({ url, json: true }, (err, { body }) => {
    if (err) {
      cb('Unable to connect to location services')
    } else if (body.message) {
      cb('Unable to find location,Try another search')
    } else {
      cb(null, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      })
    }
  })
}
module.exports = geocode
