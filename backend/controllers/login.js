import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const login = async (req, res) => {
  try {
    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try Logging-In with Correct Credentials." });
      }
      const passCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!passCompare) {
        return res.status(400).json({ errors: "Incorrect Password" });
      }
      const data = {
        user: {
          id: userData._id,
        },
      };
      const authToken = jwt.sign(data,process.env.SECRET, { expiresIn: "30d" });
      res.json({
        success: true,
        authToken: authToken,
        user: data.user.id
      });
    } catch (err) {
      console.log(err);
      return res.json({ success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
