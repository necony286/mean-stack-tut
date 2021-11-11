import mongoose from "mongoose";

const Schema = mongoose.Schema;

let User = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  mail: {
    type: String,
  },
  type: {
    type: Number,
  },
});

export default mongoose.model("User", User, "users");
