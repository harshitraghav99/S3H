const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
    {
        description: {
            type: String, 
            required: true ,
       },
       createdBy: {
           type: String,
           required: true,
           max: 50,
          
       },

       id:{
           type:Number,
           unique:false,
           required:true
       },
       comment:{
           type:Array,
           required:false,
           unique:false
           
       }
        
    }
);

module.exports = mongoose.model("Todo", TodoSchema);
