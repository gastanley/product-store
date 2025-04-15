import express from 'express'
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js'

const router = express.Router()

// GET Route
router.get("/", getProducts);

// POST Route
router.post("/", createProduct);

// UPDATE Route: put for updating the entire object, patch for updating a part of the object
router.put("/:id", updateProduct);

// DELETE Route
router.delete("/:id", deleteProduct);

export default router;