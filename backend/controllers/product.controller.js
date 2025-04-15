import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req,res)=>{
    try{
        const products = await Product.find({}); // find all the products
        res.status(200).json({success: true, data: products}); // send the products as a response
    } catch (error) {
        console.log("Error in fetching products:", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const createProduct = async (req,res)=>{
    const product = req.body; // user will send this data

    if (!product.name || !product.price || !product.image){
        return res.status(400).json({message: "Please provide all fields"});
    }

    const newProduct = new Product(product); // create a new product

    try{
        await newProduct.save(); // save the product to the database
        res.status(201).json({success: true, data: newProduct}); // send the newly created product as a response
    } catch (error) {
        console.log("Error in Create product:", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const updateProduct = async (req,res)=>{
    const { id } = req.params; // destructure the id from the request params

    const product = req.body; // user will send this data

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid product id"});
    }

    try {
        const updateProduct = await Product.findByIdAndUpdate(id, product, { new: true }); // find the product by id and update it
        return res.status(200).json({success: true, data: updateProduct}); // send the updated product as a response
    } catch (error) {
        return res.status(500).json({success: false, message: "Server error"});

    }
}

export const deleteProduct = async (req,res)=>{
    const { id } = req.params; // destructure the id from the request params

    console.log ("id", id);

    try{
        const product = await Product.findByIdAndDelete(id); // find the product by id and delete it
        if (!product){
            return res.status(404).json({success: false, message: "Product not found"});
        }
        res.status(200).json({success: true, message: "Product deleted successfully"});
    } catch (error) {
        console.log("Error in deleting product:", error.message);
        res.status(404).json({success: false, message: "Product not found"});
    }
}