const mongoose = require("mongoose");

const login = mongoose.Schema({

   email:{
    type: String
   },
   password:{
    type: String
   }
},{timestamp:true})

const loginModel = mongoose.model("login",login)
module.exports = loginModel