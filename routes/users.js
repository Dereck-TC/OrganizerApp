const express = require('express')
const User = require('../models/user')
const Event = require('../models/events')
const view = require("../helpers/views")
const database = require("../libs/database")

const router = express.Router()

router.get("/users", async function(req, res){
    const user = new User(req.body)
    const result = await user.listar()
    return res.json(result)
})
router.post("/activitys", async function(req, res){
    const event = new Event(req.body)
    const result = await event.listarevent()
    return res.json(result)
})
router.post("/registro", async function (req, res){
    const user = new User(req.body)
    return res.json(await user.save())

})

router.post("/addEvent", async function (req, res){
    // const body = req.body
    // database.connection.query(
    //     "INSERT INTO users(??) VALUES(?) ",
    //     [Object.keys(body),Object.values(body)])

    // return res.json({message:"SUCCESS"})
    const event = new Event(req.body)
    return res.json(await event.addevent())
})

module.exports = router