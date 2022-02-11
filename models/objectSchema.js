const mongoose = require("mongoose");
const { Schema } = mongoose;
require('mongoose-type-email');


const objectsSchema = new Schema({
  name: { type: String, required: true  },
  Description: { type: String, required: true  },
  price: {type: Number, min:50, max:150 ,required: true },
  colors: [{ type: String }]
});

module.exports = mongoose.model("Objects", objectsSchema);
