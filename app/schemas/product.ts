import mongoose from 'mongoose';



 
const productSchema = new mongoose.Schema({
  _id:mongoose.Types.ObjectId,
    name:{
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    }
  },{ autoIndex: true });
  export  const Product = mongoose.model('products', productSchema);