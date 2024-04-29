import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  income: [{
    type: {
      des: { type: String },
      amt: { type: Number },
    }
  }],
  expense: [{
    type: {
      des: { type: String },
      amt: { type: Number },
    }
  }],
  budget: {
    type: Number,
    default: 0,
  }
});


const User = mongoose.model("User", UserSchema);
export default User;