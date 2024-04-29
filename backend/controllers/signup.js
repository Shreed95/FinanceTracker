import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  try {
    let userData = await User.findOne({ email });
    if (userData) {
      return res
        .status(400)
        .json({ errors: "User With Same E-mail Address Exists" });
    }
    let userdata = await User.findOne({ name });
    if (userdata) {
      return res.status(400).json({ errors: "User With Same Username Exists" });
    }
  } catch (err) {
    console.log(err);
    return res.json({ success: false });
  }

  const salt = await bcrypt.genSalt(10);
  let securePassword = await bcrypt.hash(req.body.password, salt);

  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: securePassword,
    });
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    return res.json({ success: false });
  }
};
