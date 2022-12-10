const mongoose = require('mongoose')
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        max:20,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:20
    },
    
});
module.exports = mongoose.model("Users",userSchema);