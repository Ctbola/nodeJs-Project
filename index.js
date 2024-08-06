const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/task")
  .then(() => console.log("Database is Connercted"))
  .catch((err) => console.error(err));

const User = require("./model/User.js");
const Task = require("./model/Task.js");

async function db() {
  try {
    const user = new User({
      name: "ariyan",
      age: 40,
      email: "lakindu18@gmail.com",
      password: "123456",
    });
    
    await user.save();
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
  
}
db();

