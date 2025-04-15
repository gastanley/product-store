import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoute from './routes/product.route.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // allow us to parse the request.body as JSON

app.use("/api/products", productRoute); // use the product route for all the requests starting with /api/products

app.listen(5000, ()=>{
    connectDB();
    console.log('Server started at http://localhost:5000');
});