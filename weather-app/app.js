const request = require("request");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

// console.log(process.argv);
// const forecast = require("./utils/forecast");

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log(error);
//   } else if (response.body.error) {
//     console.log("Unable to find location.");
//   } else {
//     console.log(
// `${[response.body.current.weather_descriptions]}. It is currently ${
//   response.body.current.temperature
// } degrees out but it feels like ${response.body.current.feelslike}.`
//     );
//   }
// });
const inpFromUser = process.argv[2];

if (!inpFromUser) {
  console.log("Please provide address!");
} else {
  geocode(inpFromUser, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }
    // console.log(error, data);
    // console.log(data.latitude);
    forecast(longitude, latitude, (error, data2) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(data2);
    });
  });
}
