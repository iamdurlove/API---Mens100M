const express = require('express');
const router = new express.Router();
const MensRanking = require('../models/mens');

router.get('/', async (req, res) => {
    res.send('Welcome from durlav');
});

//Handling POST requests
router.post('/mens', async (req, res) => {
    try {
        const addRecord = new MensRanking(req.body);
        const insertRecord = await addRecord.save();
        res.status(201).send(insertRecord);
    } catch (err) {
        res.status(500).send(err);
    }
});


//Handling GET requests
router.get('/mens', async (req, res) => {
    try {
        const getMens = await MensRanking.find({}).sort({ 'ranking': 1 });
        res.status(201).send(getMens);
    } catch (err) {
        res.status(500).send(err);
    }
});


//Handling GET requests for single data
router.get('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const getMens = await MensRanking.findById(_id);
        res.status(201).send(getMens);
    } catch (err) {
        res.status(500).send(err);
    }
});

//Handling PATCH requests for single data
router.patch('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const getMens = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(201).send(getMens);
    } catch (err) {
        res.status(500).send(err);
    }
});

//Handling DELETE requests for single data
router.delete('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const getMens = await MensRanking.findByIdAndDelete(_id);
        res.status(201).send(getMens);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;