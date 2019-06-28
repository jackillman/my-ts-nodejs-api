import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    top: {
        title: String,
        description1: String,
        description2: String
    },
    mid1: {
        title: String,
        description1: String,
        description2: String
    },
    mid2: {
        title: String,
        list: Array
    },
    bot: {
        title: String,
        description1: String,
        description2: String,
        description3: String,
        description4: String
    }
})
  export const About = mongoose.model('about_contents', aboutSchema);