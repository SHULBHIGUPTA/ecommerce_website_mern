const Users = require('../models/userModel');

const userCtrl = {
register: async(req, res) => {
    try {
    const {name, email, password} = req.body;

    const user = await Users.findOne({email})
    if(user) return res.status(400).json({msg: "the email already exists"})

    if(password.length < 6)
    return res.status(400).json({msg: "password is at least 6 character"})
    res.json({msg: "register success"})
    } catch(err) {
       return res.status(500).json({msg: err.message})
    }

}
}
module.exports = userCtrl