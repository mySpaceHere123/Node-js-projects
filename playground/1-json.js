const fs = require("fs");
const { parse } = require("path/posix");
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// fs.writeFileSync("1-json.json", bookJSON);

// const parseJSON = JSON.parse(bookJSON);
// console.log(parseJSON);
// console.log(parseJSON.author);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer + "";

// const data = JSON.parse(dataJSON);
// console.log(data);

const stringJSON = fs.readFileSync("1-json.json") + "";
//console.log(stringJSON);
const parseJSON = JSON.parse(stringJSON);
//console.log(parseJSON);
parseJSON.name = "Ujjwal";
parseJSON.planet = "Mars";
parseJSON.age = 20;
//console.log(parseJSON);
fs.writeFileSync("1-json.json", JSON.stringify(parseJSON));
