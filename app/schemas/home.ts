import mongoose from 'mongoose';

 
const homeSchema = new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    language:{
        type:String,
    },
    title: String,
    description: String
  });
  homeSchema.path('language').validate(function(language:string) {
    return language && language.length === 2;
  }, 'Location code must be 2 characters');

  export  const Home = mongoose.model('home_contents', homeSchema);