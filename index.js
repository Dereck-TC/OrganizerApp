const path = require('path')

const express = require('express')
const port = 4000

const users = require('./routes/users')
const app = express()

app.use("/static", express.static(path.join(__dirname,"static")))
app.use(express.json())

app.use(users)

app.get("/", function(req, res){
    return res.sendFile(path.join(__dirname,"views","index.html")) //cambiar inicio de web
})

app.listen(port,
    ()=>{
        console.log("listening on http://localhost:"+port)
    })