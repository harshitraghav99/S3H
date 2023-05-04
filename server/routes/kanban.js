const {
    getTodo,
    // done,
    setTodo,
    deleteTodo,
    getBacklog,
    getDone,
    setBacklog,
    setDone,
    deleteBacklog,
    deleteDone
    
  } = require("../controllers/kanbanController");
  
  const router = require("express").Router();
  
  router.post("/setTodo", setTodo);
  router.get("/getTodo", getTodo);
  router.delete("/deleteTodo",deleteTodo);
  router.post("/setBacklog", setBacklog);
  router.get("/getBacklog", getBacklog);
  router.delete("/deleteBacklog",deleteBacklog);
  router.post("/setDone", setDone);
  router.get("/getDone", getDone);
  router.delete("/deleteDone",deleteDone);
//   router.get("/done", done);
//   router.post("/done", done);
//   router.post("/register", register);
//   router.get("/allusers/:id", getAllUsers);
//   router.post("/setavatar/:id", setAvatar);
//   router.get("/logout/:id", logOut);
  
  module.exports = router;
  