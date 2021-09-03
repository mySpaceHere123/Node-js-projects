// const add = require("./utils.js");
// const sum = add(4, 3);
// console.log(sum);

// const validator = require("validator");
// console.log(validator.isEmail("ujjwal@gmail.com"));
// console.log(validator.isEmail("gmail.com"));

// console.log(validator.isURL("abcasd.in"));
// console.log(validator.isURL("abcasd@gmail.asdasd"));

const chalk = require("chalk");
const { argv } = require("yargs");
const yargs = require("yargs");
const { readNotes } = require("./notes.js");
const notes = require("./notes.js");
// console.log(getNotes());
// console.log(chalk.green.bold("Success."));

// console.log(process.argv[2]);
// console.log(process.argv);
// const command = process.argv[2];
// if (command === "Add") {
//   console.log("Adding notes.");
// } else if (command === "Remove") {
//   console.log("Removing notes.");
// }

//Customize yargs version
//yargs.version("1.1.0");

//console.log(process.argv);

//Creating add
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log("Title: " + argv.title);
    // console.log("Body: " + argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

//Creating remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    //console.log("Removing the note");
    notes.removeNotes(argv.title);
  },
});

//Creating List command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNotes();
  },
});

//Creating read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Title to be searched",
      demandOption: true,
      type: "String",
    },
  },
  handler() {
    //console.log("Reading a note");
    readNotes(argv.title);
  },
});

//console.log(yargs.argv);
yargs.parse();
