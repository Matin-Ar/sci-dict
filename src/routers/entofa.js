const express = require('express')
const EnToFa = require('../models/entofa')
const router = new express.Router()

router.post('/entofa', async (req, res) => {
    try {
        const entofa = new EnToFa(req.body)
        await entofa.save()
        res.status(201).send(entofa)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/entofa', async (req, res) => {
    try {
        const word = await EnToFa.findOne({ en: req.body.word })
        await word.remove()
        res.send({ message: "Deleted !"})
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get('/entofa/search', async (req, res) => {
    try {
        const words = await EnToFa.find({en: { '$regex': req.query.q }}, 'en fa', { sort: {en: 1}, limit: parseInt(req.query.limit)})
        res.send(words)
    } catch (e) {
        res.status(400).send()
    }
})

module.exports = router