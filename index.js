const express  = require("express")
const cors  = require("cors")
const bodyparser  = require("body-parser")
require("../Bakend/connection/connection")
const userRoute = require( "../Bakend/Routes/userRoute")
const app = express()
const path = require('path');

 
app.use(express.json())
app.use(cors())
app.use(bodyparser.json())
const port = 5000;

app.use("/",userRoute)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.listen(port,()=> console.log("server started"))