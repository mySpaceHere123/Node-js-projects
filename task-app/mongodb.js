//CRUD-create, read, update, delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID=mongodb.ObjectID;

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-app";

const id = ObjectId();
// console.log(id.id.length);
// console.log(id.toHexString());
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true,
  },
  (error, client) => {
    if (error) {
      console.log("Failed");
    }
    const db = client.db(databaseName);
    // db.collection("users").insertOne(
    //   {
    //     name: "Her",
    //     age: "21",
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert data.");
    //     }
    //     console.log(result);
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "R",
    //       age: 12,
    //     },
    //     {
    //       name: "U",
    //       age: 15,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Error pushing");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Assignment",
    //       completed: true,
    //     },
    //     {
    //       description: "Cycling",
    //       completed: false,
    //     },
    //     {
    //       description: "Movie",
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Error uploading tasks.");
    //     }
    //     console.log(result.insertedIds);
    //   }
    // );

    //Reading

    // db.collection("users").findOne(
    //   { _id: new ObjectId("61388f0e798616da3ca59e87") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Error fetching");
    //     }
    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ name: "Ujjwal" })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ name: "Ujjwal" })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // db.collection("tasks").findOne(
    //   { _id: new ObjectId("61389680aeec6d124d739946") },
    //   (error, task) => {
    //     if (error) {
    //       return console.log(error);
    //     }
    //     console.log(task);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     console.log(tasks);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectId("61388f0e798616da3ca59e87"),
    //     },
    //     {
    //       $inc: {
    //         age: 12,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("tasks")
    // .updateMany(
    // {
    // completed: false,
    // },
    //   {
    //     $set: {
    //       completed: true,
    //     },
    //   }
    // )
    // .then((result) => {
    //   console.log(result);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });

    // db.collection("users")
    //   .deleteMany({
    //     age: "27" || 27,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
);
