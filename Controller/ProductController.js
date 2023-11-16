const Product = require("../models/productModel");


async function createProduct(req,res){
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({apierror:error});
        
    }
}

async function updateProduct(req , res)
{
    try {
        const {id} = req.parmas;
        const updateProduct = await Product.findByIdAndUpdate(id ,req.body , {new : true});
       res.json(updateProduct);
    } catch (error) {
        res.status(500).json({apierror:error});
        
    }
}

async function getAllProducts(req , res)
{
    try {
        const products = await Product.find();
       res.json(products);
    } catch (error) {
        res.status(500).json({apierror:error});
        
    }
}


async function deleteProduct(req , res)
{
    try {
        const {id} = req.parmas;
        const updateProduct = await Product.findByIdAndUpdate(id ,req.body , {new : true});
       res.json(updateProduct);
    } catch (error) {
        res.status(500).json({apierror:error});
        
    }
}




module.exports = {
    createProduct
}