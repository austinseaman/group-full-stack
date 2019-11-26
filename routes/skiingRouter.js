const express = require('express')
const skiingRouter = express.Router()
const uuid = require('uuid/v4')
const Items = require('../models/items')


skiingRouter.get('/', (req, res) => {
    Items.find((err, items) => {
        if(err){
            res.status(500) 
            return res.send(err)
        } 
        return res.status(200).send(items)
    })
})

// Posting
skiingRouter.post('/', (req, res) => {
    req.body._id = uuid()
    const newSkiing = new Items(req.body)
    newSkiing.save((err, skiing) => {
        if(err) return res.status(500).send(err)
        return res.status(201).send(skiing)
    })
})

//Get One
skiingRouter.get('/:_id', (req, res) => {
    const foundItem = Items.findById(req.params._id, (err, item) => {
        if(err){
            return res.status(500).send(err)
        } 
        return res.status(200).send(item)
    })
})

//Delete
skiingRouter.delete('/:_id', (req, res) => {
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
skiingRouter.put("/:_id", (req, res) => {
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


module.exports = skiingRouter