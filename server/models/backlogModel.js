const mongoose = require("mongoose");

const BacklogSchema = mongoose.Schema(
    {
        backlog: {
             type: String, 
             required: true ,
        },
        email: {
            type: String,
            required: true,
            max: 50,
           
        },
        index:{
            type:Number,
            unique:true,
            required:true
        }
        
    }
);

module.exports = mongoose.model("Backlog", BacklogSchema);
