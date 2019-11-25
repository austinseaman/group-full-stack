const express = require('express')
const campingRouter = express.Router()
const uuid = require('uuid/v4')
const Camping = require('../models/camping')


campingRouter.get('/', (req, res) => {
    
})

campingRouter.post('/', (req, res) => {
    req.body._id = uuid()
    const newCamping = new Camping(req.body)
    newCamping.save((err, camping) => {
        if(err) return res.status(500).send(err)
        return res.status(201).send(camping)
    })
})


module.exports = campingRouter