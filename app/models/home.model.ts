import mongoose from 'mongoose';
export default interface IHome extends mongoose.Document{
    _id:any;
    language:string;
    title:string;
    description:string;
}