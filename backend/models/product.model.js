import mangoose from 'mongoose';

const productSchema = new mangoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // credatedAt and updatedAt
});

const Product = mangoose.model('Product', productSchema); // Product is the name of the model or the collection and productSchema is the schema
// convert Product into products collection in the database
export default Product;