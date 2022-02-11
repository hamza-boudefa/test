var jwt = require("jsonwebtoken");
const users = require("../models/userSchema");

const userMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["auth"];
    console.log(token);
    if (!token) {
      return res.json({ message: "not autherized" });
    } else {
      var decoded = jwt.verify(token, process.env.privateKey);
      const userV = await users.findById(decoded.id);
      if (!userV) {
        return res.json({ message: "not autherized" });
      } else {
        next(); 
      } 
    }
  } catch (error) {
    console.log({ message: error });
  }
};

module.exports = userMiddleware;
