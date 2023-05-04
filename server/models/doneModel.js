const mongoose = require("mongoose");

const DoneSchema = mongoose.Schema(
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
           unique:true,
           required:true
       },
       comment:{
           type:Array,
           
           required:false,
           unique:false
       }
        
    }
);

module.exports = mongoose.model("Done", DoneSchema);
