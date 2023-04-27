// const User = require("../models/userModel");
const Todo = require("../models/todoModel");
const admin = "";

module.exports.todo = async (req, res, next) => {
    try {
        const { email } = req.body;
        const todo = await Todo.find({ email });
        if (!todo)
            return res.json({ msg: "no todo", status: false });


        // const todo = user.todo
        return res.json({ status: true, todo });
    } catch (ex) {
        next(ex);
    }
};
module.exports.setTodo = async (req, res, next) => {
    try {
        const { email, todo, index } = req.body;
        // const user = await User.findOne({ email });
        //   if (user.todo)
        //     return res.json({ msg: "no todo", status: false });
        console.log(req.body);
        const todoNew = await Todo.create({
            todo,
            email,
            index
        });
        console.log(todoNew)

        return res.json({ status: true, todoNew });
    } catch (ex) {
        next(ex);
    }
};
module.exports.setTodoAdmin = async (req, res, next) => {
    try {
        const { adminEmail, email, todo, index } = req.body;
        // const user = await User.findOne({ email });
        //   if (user.todo)
        //     return res.json({ msg: "no todo", status: false });
        if (adminEmail === admin) {
            console.log(req.body);
            const todoNew = await Todo.create({
                todo,
                email,
                index
            });
            console.log(todoNew)

            return res.json({ status: true, todoNew });
        }

    } catch (ex) {
        next(ex);
    }
};
module.exports.deleteTodo= async(req,res,next)=>{
    try{
        const{email,todo,index}=req.body;
        const todoDelete=await Todo.find({email,todo}).select([
            
                "_id"
            
        ]);
        const [id] = todoDelete;
        console.log(id)
        console.log(todoDelete)
        
        // console.log(todoDelete)
        if(!todoDelete){
            return res.json({ msg: "no todo to delete", status: false });
        }
        console.log(todoDelete)
        Todo.deleteOne({index},(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("deleted");
            }
        });
        return res.json({ status: true, todoDelete });
    }catch(ex){
        next(ex);
    }
    
};
