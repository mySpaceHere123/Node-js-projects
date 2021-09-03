console.log("Loaded");

// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

const weatherForm = document.querySelector(".location");
const search = document.querySelector(".input");
const loc = document.querySelector(".loc");
const forc = document.querySelector(".forc");
const er = document.querySelector(".error");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  search.value = "";

  const url = `http://localhost:3000/weather?address=${location}`;
  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        er.textContent = data.error;
        loc.textContent = "";
        forc.textContent = "";
      } else {
        er.textContent = "";
        loc.textContent = data.location;
        forc.textContent = data.forecast;
      }
    });
  });
});
