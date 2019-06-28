import Config from "./config";
import mongoose from 'mongoose';

mongoose.connect(Config.mongoPORT, {useNewUrlParser: true});