const express = require('express');
const Products = require('../models/product')
const router = express.Router();

router.get('/', async (req, res, next) => {

    const products = await Products.find();
    if (products)
    res.json(products);
    throw res.json(error);
})

router.post('/', async (req, res, next) => {
    //Products.save(req.body);
    //res.json(products);
    console.log(req.body);
    if (req.body) {
        var result = await Products.save(req.body);
        if (!result) 
        res.status(500).json(error);
        res.json(result);
    }
    
})

module.exports = router;