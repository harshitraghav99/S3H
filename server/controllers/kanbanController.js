// const User = require("../models/userModel");
const Todo = require("../models/todoModel");
const Backlog = require("../models/backlogModel");
const Done = require("../models/doneModel")
const admin = "";

module.exports.getTodo = async (req, res, next) => {
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
    // try{
    //     const{email,todo,index}=req.body;
    //     const todoDelete=await Todo.find({email,todo}).select([
            
    //             "_id"
            
    //     ]);
    //     const [id] = todoDelete;
    //     console.log(id)
    //     console.log(todoDelete)
        
    //     // console.log(todoDelete)
    //     if(!todoDelete){
    //         return res.json({ msg: "no todo to delete", status: false });
    //     }
    //     console.log(todoDelete)
    //     Todo.deleteOne({index},(err)=>{
    //         if(err){
    //             console.log(err);
    //         }
    //         else{
    //             console.log("deleted");
    //         }
    //     });
    //     return res.json({ status: true, todoDelete });
    // }catch(ex){
    //     next(ex);
    // }
    const reqBody = req.body;
    console.log("body delete ");
    console.log(reqBody);
    console.log("body delete ");

    const todo = await Todo.deleteOne({ index: reqBody.index , email:reqBody.email }).then(result => {
        console.log(result);
        res.status(200).json({message: "Post deleted"});
      });
    
};
module.exports.getBacklog = async (req, res, next) => {
    try {
        const { email } = req.body;
        const backlog = await Backlog.find({ email });
        if (!backlog)
            return res.json({ msg: "no backlog", status: false });


        // const todo = user.todo
        return res.json({ status: true, backlog });
    } catch (ex) {
        next(ex);
    }
};
module.exports.setBacklog = async (req, res, next) => {
    try {
        const { email, backlog, index } = req.body;
        // const user = await User.findOne({ email });
        //   if (user.todo)
        //     return res.json({ msg: "no todo", status: false });
        console.log(req.body);
        const backlogNew = await Backlog.create({
            backlog,
            email,
            index
        });
        console.log(backlogNew)

        return res.json({ status: true, backlogNew });
    } catch (ex) {
        next(ex);
    }
};

module.exports.deleteBacklog= async(req,res,next)=>{
    // try{
    //     const{email,todo,index}=req.body;
    //     const todoDelete=await Todo.find({email,todo}).select([
            
    //             "_id"
            
    //     ]);
    //     const [id] = todoDelete;
    //     console.log(id)
    //     console.log(todoDelete)
        
    //     // console.log(todoDelete)
    //     if(!todoDelete){
    //         return res.json({ msg: "no todo to delete", status: false });
    //     }
    //     console.log(todoDelete)
    //     Todo.deleteOne({index},(err)=>{
    //         if(err){
    //             console.log(err);
    //         }
    //         else{
    //             console.log("deleted");
    //         }
    //     });
    //     return res.json({ status: true, todoDelete });
    // }catch(ex){
    //     next(ex);
    // }
    const reqBody = req.body;
    console.log("body delete ");
    console.log(reqBody);
    console.log("body delete ");

    const backlog = await Backlog.deleteOne({ index: reqBody.index , email:reqBody.email }).then(result => {
        console.log(result);
        res.status(200).json({message: "Post deleted"});
      });
    
};
module.exports.getDone = async (req, res, next) => {
    try {
        const { email } = req.body;
        const done = await Done.find({ email });
        if (!done)
            return res.json({ msg: "no done", status: false });


        // const todo = user.todo
        return res.json({ status: true, done });
    } catch (ex) {
        next(ex);
    }
};
module.exports.setDone = async (req, res, next) => {
    try {
        const { email, done, index } = req.body;
        // const user = await User.findOne({ email });
        //   if (user.todo)
        //     return res.json({ msg: "no todo", status: false });
        console.log(req.body);
        const doneNew = await Done.create({
            done,
            email,
            index
        });
        console.log(doneNew)

        return res.json({ status: true, doneNew });
    } catch (ex) {
        next(ex);
    }
};

module.exports.deleteTodo= async(req,res,next)=>{
    // try{
    //     const{email,todo,index}=req.body;
    //     const todoDelete=await Todo.find({email,todo}).select([
            
    //             "_id"
            
    //     ]);
    //     const [id] = todoDelete;
    //     console.log(id)
    //     console.log(todoDelete)
        
    //     // console.log(todoDelete)
    //     if(!todoDelete){
    //         return res.json({ msg: "no todo to delete", status: false });
    //     }
    //     console.log(todoDelete)
    //     Todo.deleteOne({index},(err)=>{
    //         if(err){
    //             console.log(err);
    //         }
    //         else{
    //             console.log("deleted");
    //         }
    //     });
    //     return res.json({ status: true, todoDelete });
    // }catch(ex){
    //     next(ex);
    // }
    const reqBody = req.body;
    console.log("body delete ");
    console.log(reqBody);
    console.log("body delete ");

    const done = await Done.deleteOne({ index: reqBody.index , email:reqBody.email }).then(result => {
        console.log(result);
        res.status(200).json({message: "Post deleted"});
      });
    
};
