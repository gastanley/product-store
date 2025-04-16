import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoute from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // allow us to parse the request.body as JSON

app.use("/api/products", productRoute); // use the product route for all the requests starting with /api/products

app.listen(PORT, ()=>{
    connectDB();
    console.log('Server started at http://localhost:'+PORT);
});