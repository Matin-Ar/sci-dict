const express = require('express')
const FaToEn = require('../models/fatoen')
const router = new express.Router()

router.post('/fatoen', async (req, res) => {
    try {
        const fatoen = new FaToEn(req.body)
        await fatoen.save()
        res.status(201).send(fatoen)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/fatoen', async (req, res) => {
    try {
        const word = await FaToEn.findOne({ fa: req.body.word })
        await word.remove()
        res.send({ message: "Deleted !"})
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post('/fatoen/search', async (req, res) => {
    try {
        const words = await FaToEn.find({fa: { '$regex': req.query.q }}, 'en fa', { sort: {fa: 1}, limit: parseInt(req.query.limit)})
        res.send(words)
    } catch (e) {
        res.status(400).send()
    }
})

module.exports = router