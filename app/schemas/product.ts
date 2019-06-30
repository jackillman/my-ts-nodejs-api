import mongoose from 'mongoose';



 
const productSchema = new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    id:Number,
    title_ru:{
        type: String,
        required:true
    },
    title_en:{
        type: String,
        required:true
    },
    title_ua:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    }
  },{ autoIndex: true });


  export  const Product = mongoose.model('products', productSchema);