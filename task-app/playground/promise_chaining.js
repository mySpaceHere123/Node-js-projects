require("../src/db/mongoose");
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

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("613e01bee45fd469d01f1008", 12)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
