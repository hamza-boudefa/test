const users = require("../models/userSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");


const addNewUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const verifyUser = await users.findOne({ email });
    if (verifyUser) {
      return res.status(400).json({ message: "user already exists" });
    } else {
      const hashed = await bcrypt.hash(password, saltRounds);
      const newUser = new users({ ...req.body, password: hashed });
      await newUser.save();
      return res.json({ message: "user added successfully", newUser });
    }
  } catch (error) {
    return res.json({ message: error });
  }
};



const logIn = async (req, res) => {
  try { 
    const { email, password } = req.body;
    const userVerification = await users.findOne({ email });
    console.log(userVerification)
    if (!userVerification) {
      return res.json({ message: "bad cred" });
    } else { 
      const match = await bcrypt.compare(password, userVerification.password);
      if (!match) {
        return res.json({ message: "bad cred" });
      } else {
        var token = jwt.sign(
          { id: userVerification._id },
          process.env.privateKey
        );
        return res.json({
          message: "user logged in successfully",
          userId: userVerification._id,
          token,
        });

      }
    }
  } catch (error) {
    return res.json({ message: error });
  }
};

module.exports = {addNewUser,logIn};
