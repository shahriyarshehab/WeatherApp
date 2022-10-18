const express= require('express')
const cors= require('cors')
const bodyParser= require('body-parser')
const mongoose= require('mongoose')


const app = express()

app.get('/',(req,rezs) => {
  req.send("<h1>App Is Running</h1>")
})

const PORT = process.env.PORT || 4444;

app.listen(PORT, ()=> {
  console.log("APP is running on PORT" + PORT)
})