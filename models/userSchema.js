const mongoose = require("mongoose");
const { Schema } = mongoose;
require('mongoose-type-email');
mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid'


const userSchema = new Schema({
  firstName: { type: String, required: true  },
  lastName: { type: String, required: true  },
  email: {type: mongoose.SchemaTypes.Email},
  password: { type: String, required: true  }
});
 

module.exports = mongoose.model("User", userSchema);
