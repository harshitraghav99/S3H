const ContactUs = require("../models/contactModel");
module.exports.setContactUs=async(req,res,next)=>{
try {
    const { firstname, secondname, email ,phone,message } = req.body;
    
    const contactus = await ContactUs.create({
      email,
      firstname,
      secondname,
      message,
      phone
    });
    return res.json({ status: true, contactus });
  } catch (ex) {
    return res.json({ status: false,ex });
    next(ex);
  }
};

module.exports.getContactUs=async(req,res,next)=>{
    try{
        const messages = await ContactUs.find();
        res.send(messages);
    }catch(e){
        res.send(e);
    }
}