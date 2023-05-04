// const User = require("../models/userModel");
const Todo = require("../models/todoModel");
const Backlog = require("../models/backlogModel");
const Done = require("../models/doneModel")
const admin = "";

module.exports.getTodo = async (req, res, next) => {
    try {
        const { createdBy } = req.body;
        const todo = await Todo.find({ createdBy });
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
        const { createdBy,description , id,comment } = req.body;
        // const user = await User.findOne({ createdBy });
        //   if (user.todo)
        //     return res.json({ msg: "no todo", status: false });
        console.log(req.body);
        const todoNew = await Todo.create({
            description,
            createdBy,
            id,
            comment
        });
        console.log(todoNew)

        return res.json({ status: true, todoNew });
    } catch (ex) {
        next(ex);
    }
};
module.exports.setTodoAdmin = async (req, res, next) => {
    try {
        const { admincreatedBy, createdBy, todo, index } = req.body;
        // const user = await User.findOne({ createdBy });
        //   if (user.todo)
        //     return res.json({ msg: "no todo", status: false });
        if (admincreatedBy === admin) {
            console.log(req.body);
            const todoNew = await Todo.create({
                todo,
                createdBy,
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
    //     const{createdBy,todo,index}=req.body;
    //     const todoDelete=await Todo.find({createdBy,todo}).select([
            
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

    const todo = await Todo.deleteOne({ description: reqBody.description , createdBy:reqBody.createdBy }).then(result => {
        console.log(result);
        res.status(200).json({message: "Post deleted"});
      });
    
};
module.exports.getBacklog = async (req, res, next) => {
    try {
        const { createdBy } = req.body;
        const backlog = await Backlog.find({ createdBy });
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
        const { createdBy, description, id ,comment} = req.body;
        // const user = await User.findOne({ createdBy });
        //   if (user.todo)
        //     return res.json({ msg: "no todo", status: false });
        console.log(req.body);
        const backlogNew = await Backlog.create({
            description,
            createdBy,
            id,
            comment
        });
        console.log(backlogNew)

        return res.json({ status: true, backlogNew });
    } catch (ex) {
        next(ex);
    }
};

module.exports.deleteBacklog= async(req,res,next)=>{
    // try{
    //     const{createdBy,todo,index}=req.body;
    //     const todoDelete=await Todo.find({createdBy,todo}).select([
            
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

    const backlog = await Backlog.deleteOne({ description: reqBody.description , createdBy:reqBody.createdBy }).then(result => {
        console.log(result);
        res.status(200).json({message: "Post deleted"});
      });
    
};
module.exports.getDone = async (req, res, next) => {
    try {
        const { createdBy } = req.body;
        const done = await Done.find({ createdBy });
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
        const { createdBy, description, id,comment } = req.body;
        // const user = await User.findOne({ createdBy });
        //   if (user.todo)
        //     return res.json({ msg: "no todo", status: false });
        console.log(req.body);
        const doneNew = await Done.create({
            description,
            createdBy,
            id,
            comment
        });
        console.log(doneNew)

        return res.json({ status: true, doneNew });
    } catch (ex) {
        next(ex);
    }
};

module.exports.deleteDone= async(req,res,next)=>{
    // try{
    //     const{createdBy,todo,index}=req.body;
    //     const todoDelete=await Todo.find({createdBy,todo}).select([
            
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

    const done = await Done.deleteOne({ description: reqBody.description , createdBy:reqBody.createdBy }).then(result => {
        console.log(result);
        res.status(200).json({message: "Post deleted"});
      });
    
};
