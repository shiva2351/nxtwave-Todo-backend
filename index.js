const express = require("express");
const dotEnv=require("dotenv")
var cors = require('cors')
const bodyParser=require("body-parser")

const app =express()
app.use(bodyParser.json())
app.use(cors())
app.get('/',(req,res)=>{
  res.send('server is ready');
});
const PORT=process.env.PORT || 3000
dotEnv.config()


app.listen(PORT,()=>{
  console.log("server started and running at 5000")
 
})