import mongoose from 'mongoose';
import IAbout from '../models/about.model';

const aboutSchema = new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    language:String,
    top_title: String,
    top_description1: String,
    top_description2: String,
    mid1_title: String,
    mid1_description1: String,
    mid1_description2: String,   
    mid2_title: String,
    mid2_list_title1: String,
    mid2_list_description1: String,
    mid2_list_title2: String,
    mid2_list_description2: String,
    mid2_list_title3: String,
    mid2_list_description3: String,
    bot_title: String,
    bot_description1: String,
    bot_description2: String,
    bot_description3: String,
    bot_description4: String
    
})
  export const About = mongoose.model<IAbout>('about_contents', aboutSchema);