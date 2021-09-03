const request = require("request");

const forecast = (lat, lng, callback) => {
  request(
    {
      url: `http://api.weatherstack.com/current?access_key=0818c1af383ff3d307fc9be0132d63cb&query=${lat},${lng}`,
      json: true,
    },
    (err, { body }) => {
      if (err) {
        callback("No Connection!", undefined);
      } else if (body.err) {
        callback("No location found!", undefined);
      } else {
        callback(
          undefined,
          `${[body.current.weather_descriptions]}. It is currently ${
            body.current.temperature
          } degrees out but it feels like ${body.current.feelslike}.`
        );
      }
    }
  );
};

module.exports = forecast;
