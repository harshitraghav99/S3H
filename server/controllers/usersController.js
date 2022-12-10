const User = require("../model/userModel")
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
    try{
        const { username, email, password } = req.body;
    const emailCheck = await User.findOne({ email })
    if (emailCheck) {
        return res.json({ msg: "email already used", status: false })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        email,
        username,
        password: hashedPassword,

    })
    delete user.password;
    return res.json({status:true,user})

    }catch (e){
        next(e);
    }
}
module.exports.login = async (req, res, next) => {
    try{
        const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
        return res.json({ msg: "Incorrect Email and Password", status: false })
    }
    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.json({ msg: "Incorrect Email and Password", status: false })
    }
    delete user.password
    
    return res.json({status:true,user})

    }catch (e){
        next(e);
    }
}
