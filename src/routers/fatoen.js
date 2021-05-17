const express = require('express')
const FaToEn = require('../models/fatoen')
const router = new express.Router()

router.post('/fatoen', async (req, res) => {
    const fatoen = new FaToEn(req.body)

    try {
        await fatoen.save()
        res.status(201).send(fatoen)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post('/fatoen/search', async (req, res) => {
    try {
        const enwords = await FaToEn.search(req.body.word.toLowerCase())
        res.send(enwords)
    } catch (e) {
        res.status(400).send()
    }
})

module.exports = router