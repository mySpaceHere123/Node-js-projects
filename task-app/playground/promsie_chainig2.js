require("../src/db/mongoose");
const Task = require("../src/models/task");
const User = require("../src/models/user");
// 6138c141c0682a0859242bba

// User.findByIdAndUpdate({ _id: "613e01a3904f9cffde37e999" }, { age: 16 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 16 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("613cb653466ed40ef98af203")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
