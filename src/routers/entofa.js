const express = require('express')
const EnToFa = require('../models/entofa')
const router = new express.Router()

router.post('/entofa', async (req, res) => {
    const entofa = new EnToFa(req.body)

    try {
        await entofa.save()
        res.status(201).send(entofa)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post('/entofa/search', async (req, res) => {
    try {
        const fawords = await EnToFa.find({en: { '$regex': req.body.word }}, 'en fa', { sort: {en: 1} })
        console.log(fawords)

        res.send(fawords)
    } catch (e) {
        res.status(400).send()
    }
})

module.exports = router