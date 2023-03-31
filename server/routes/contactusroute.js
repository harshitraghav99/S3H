const {
   setContactUs,
   getContactUs
  } = require("../controllers/contactController");
  
  const router = require("express").Router();
  
  router.post("/setContactUs", setContactUs);
  router.get("/getContactUs", getContactUs);

  
  module.exports = router;
  