const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoidWpqd2FscmFqNTc5OCIsImEiOiJja3N6dnBpdmIwZ3ZjMnZtc2puaHdtNDFuIn0.aJAMRBRo8FjWxOpmUEyxHw`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("No Connection", undefined);
    } else if (response.body.features.length === 0) {
      callback("No location found!", undefined);
    } else {
      const [lat, lng] = response.body.features[0].center;
      const locationpl = response.body.features[0].place_name;
      callback(undefined, {
        latitude: lat,
        longitude: lng,
        location: locationpl,
      });
    }
  });
};

module.exports = geocode;
