const express = require("express");
const Task = require("../models/task");
const router = new express.Router();
const bcrypt = require("bcryptjs");

// router.get("/tasks", (req, res) => {
//   res.send("helo");
// });

router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);

  // task
  //   .save()
  //   .then((result) => {
  //     res.status(201).send(result);
  //   })
  //   .catch((err) => {
  //     res.status(400).send(err);
  //   });
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/tasks", async (req, res) => {
  // Task.find()
  //   .then((task) => {
  //     res.send(task);
  //   })
  //   .catch((error) => {
  //     res.send(error);
  //   });

  try {
    const tasks = await Task.find({});
    res.status(201).send(tasks);
  } catch (error) {
    res.status(400).send();
  }
});

router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;

  // Task.findById(_id)
  //   .then((task) => {
  //     res.send(task);
  //   })
  //   .catch((error) => {
  //     res.send(error);
  //   });

  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
});

router.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["completed", "description"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid Update" });
  }
  try {
    const task = await Task.findById(req.params.id);

    updates.forEach((update) => {
      user[update] = req.body[update];
    });
    await task.save();

    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
