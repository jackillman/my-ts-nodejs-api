import mongoose from 'mongoose';



 
const homeSchema = new mongoose.Schema({
  _id:mongoose.Types.ObjectId,
    title:{
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    }
  });
  export  const Home = mongoose.model('home_contents', homeSchema);