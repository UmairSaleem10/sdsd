const express = require('express');
const router = express.Router();
const productConstroller  = require("../controllers/productController");

router.post('./product',productConstroller.createProduct);

module.exports = router;