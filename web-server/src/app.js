const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("../src/utils/geocode");
const forecast = require("../src/utils/forecast");
const { error } = require("console");

const app = express();

//Define paths for Express config
const publicdirectory = path.join(__dirname, "../public/");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup handlebar engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(path.join(__dirname, "../public/")));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App.",
    name: "Ujjwal Raj",
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send("Error:Provide search item.");
  }
  res.send({
    products: [],
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Me", name: "Ujjwal Raj." });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send("No address Provided.");
  }
  geocode(req.query.address, (error, data1) => {
    if (error) {
      return res.send({ error });
    }
    const { latitude, longitude, location_ } = data1;
    forecast(longitude, latitude, (error, data) => {
      if (error) {
        return res.send(error);
      }
      const { summary } = data;
      res.send({
        forecast: summary,
        location: location_,
        address: req.query.address,
      });
    });
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    email: "abc@gmail.com",
    name: "Ujjwal",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Help Article not found.",
    name: "Ujjwal",
  });
});

app.get("*", (req, res) => {
  res.render("404", { title: "Page not found.", name: "Ujjwal" });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
