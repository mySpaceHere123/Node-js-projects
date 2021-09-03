const fs = require("fs");
const chalk = require("chalk");
const { debug } = require("console");

const getNotes = () => "Your notes.....";

const removeNotes = (title) => {
  const notes = loadNotes();
  const newNote = notes.filter(function (note) {
    if (note.title != title) return note;
  });
  if (newNote.length === notes.length)
    console.log(chalk.red.bold("No note with such title found!"));
  else {
    saveNotes(newNote);
    console.log(
      chalk.green.bold(`Note with tile ${chalk.red(title)} removed!`)
    );
  }
  //console.log(newNote);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    console.log("New note added!");
  } else {
    console.log("Notes title taken!");
  }
  saveNotes(notes);
  //console.log(notes);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer + "";
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length === 0)
    console.log(chalk.blue.inverse.bold("There is no note to list."));
  else console.log(chalk.blue.inverse.bold("Your Notes:-"));
  let i = 1;
  for (const { title, body } of notes) {
    console.log(`${i}.)\n----${title}----`);
    console.log(body);
    i++;
  }
};

const readNotes = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((note) => note.title === title);
  //console.log(foundNote);
  if (foundNote) {
    console.log(`----${title}----`);
    console.log(foundNote.body);
  } else console.log(chalk.red.bold("No note with such title exist!"));
};

module.exports = {
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
