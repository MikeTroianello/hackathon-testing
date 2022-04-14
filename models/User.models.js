const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isStudent: {
      type: Boolean,
    },
    age: {
      type: Number,
    },
    //Stay inside these braces
  },

  //Stay above this line
  {
    timeseries: true,
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
