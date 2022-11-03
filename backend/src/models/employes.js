const mongoose = require("mongoose");
const validator= require("validator");
const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid Email");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        // max:10,
        required:true,
        // unique:true
    },
    address:{
        type:String,
        required:true
    },
    level : {
        type: Number
        
        
    },
    department:{
        type: String

    },
    designation:{
        type: String
    }
})
// creating a new collection
const employee=new mongoose.model('employees',employeeSchema);
module.exports = employee;