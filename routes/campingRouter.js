const express = require('express')
const campingRouter = express.Router()
const uuid = require('uuid/v4')
const Items = require('../models/items')


campingRouter.get('/', (req, res) => {
    Items.find((err, items) => {
        if(err){
            res.status(500) 
            return res.send(err)
        } 
        return res.status(200).send(items)
    })
})

// Posting
campingRouter.post('/', (req, res) => {
    req.body._id = uuid()
    const newCamping = new Items(req.body)
    newCamping.save((err, camping) => {
        if(err) return res.status(500).send(err)
        return res.status(201).send(camping)
    })
})

//Get One
campingRouter.get('/:_id', (req, res) => {
    const foundItem = Items.findById(req.params._id, (err, item) => {
        if(err){
            return res.status(500).send(err)
        } 
        return res.status(200).send(item)
    })
})

//Delete
campingRouter.delete('/:_id', (req, res) => {
    Items.findOneAndRemove({_id: req.params._id}, (err, item) => {
    if(err){
        res.status(500).send(err)
    }
    const response = {
        message: "Item successfully deleted",
        id: item._id
    }
    return res.status(200).send(response)
    })
})

//Put Edit
campingRouter.put("/:_id", (req, res) => {
    Items.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true},
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

module.exports = campingRouter