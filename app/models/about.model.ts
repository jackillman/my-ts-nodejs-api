
import mongoose from 'mongoose';
export default interface IAbout extends mongoose.Document{
    _id:any,
    language:string,
    top_title: string,
    top_description1: string,
    top_description2: string,
    mid1_title: string,
    mid1_description1: string,
    mid1_description2: string,   
    mid2_title: string,
    mid2_list_title1: string,
    mid2_list_description1: string,
    mid2_list_title2: string,
    mid2_list_description2: string,
    mid2_list_title3: string,
    mid2_list_description3: string,
    bot_title: string,
    bot_description1: string,
    bot_description2: string,
    bot_description3: string,
    bot_description4: string
}



