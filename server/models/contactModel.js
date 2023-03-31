const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    
  },
  secondname: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    
  },
  email: {
    type: String,
    required: true,
    
    max: 50,
  },
  phone: {
    type: Number,
    required: true,
    min: 10,
  },
  message: {
    type: String,
    required: true
  }
  // _id:{
  //   type:
  // }
});

module.exports = mongoose.model("ContactUs", contactSchema);
