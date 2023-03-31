const {
    todo,
    // done,
    setTodo,
    deleteTodo
    
  } = require("../controllers/kanbanController");
  
  const router = require("express").Router();
  
  router.post("/setTodo", setTodo);
  router.get("/todo", todo);
  router.delete("/deleteTodo",deleteTodo);
//   router.get("/done", done);
//   router.post("/done", done);
//   router.post("/register", register);
//   router.get("/allusers/:id", getAllUsers);
//   router.post("/setavatar/:id", setAvatar);
//   router.get("/logout/:id", logOut);
  
  module.exports = router;
  