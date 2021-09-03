const { error } = require("console");
const { Http2ServerRequest } = require("http");
const http = require("http");
const [lat, lng] = [25, 61];
const url = `http://api.weatherstack.com/current?access_key=0818c1af383ff3d307fc9be0132d63cb&query=${lat},${lng}`;

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    console.log(data);
  });
});

request.on("error", (error) => {
  console.log("Error: ", error);
});

request.end();
