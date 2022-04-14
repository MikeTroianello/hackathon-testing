const mongoose = require("mongoose");
const User = require("../models/User.models");

let users = [
  {
    name: "Bob",
    age: 32,
    isStudent: false,
  },
  {
    name: "Jane",
    age: 31,
    isStudent: false,
  },
  {
    name: "Andy",
    age: 21,
    isStudent: true,
  },
  {
    name: "Juan",
    age: 23,
    isStudent: true,
  },
  {
    name: "Jess",
    age: 25,
    isStudent: false,
  },
  {
    name: "Kyle",
    age: 19,
    isStudent: true,
  },
];

mongoose
  .connect("mongodb://localhost/hackathonTest") //change hackathonTest to your db name
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

User.create(users)
  .then(function (results) {
    console.log("Users saved", results);
    mongoose.connection.close();
  })
  .catch(function (error) {
    console.log("Something went wrong", error.message);
    mongoose.connection.close();
  });
