const express = require('express');
const db = require('../models/plantItemService');

const router = express.Router();

router.post('/', (req, res) => {
    db.createPlantItem(req, res);
});

router.get('/', (req, res) => {
    db.readPlantItems(req, res);
})

router.get('/:id', (req,res) => {

    db.readPlantItem(req,res);

})

router.delete('/:id',(req, res) => {

    db.deletePlantItem(req, res);

})

router.put('/:id', (req, res) => {
    db.updatePlantItem(req,res)
})

module.exports = router;