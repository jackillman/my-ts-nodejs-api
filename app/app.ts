// lib/app.ts
import express  from 'express';
import Config from './config';
import mongoose from 'mongoose';
import AboutRoute  from './pages/about/about';
import HomeRoute  from './pages/home/home';

import ProductRouter from "./pages/product/index"
import birds from './birds'
// const MongoClient = require("mongodb").MongoClient;
// const objectId = require("mongodb").ObjectID;
// Create a new express application instance
const app: express.Application = express();



  mongoose.connect("mongodb://jack:qwerty12345@ds137857.mlab.com:37857/sampleapi", { useNewUrlParser: true }, function(err){
      if(err) return console.log(err);
  })
 


//   var query = Home.find({});
//   console.log(query)
//   query.exec(function (err, docs) {
//     console.log(docs)
//     // called when the `query.complete` or `query.error` are called
//     // internally
//   });
 
    app.listen(3000, function(){
      console.log("Сервер ожидает подключения...");
  });
 





// app.listen(Config.PORT, function () {
//   console.log(`Example app listening on port ${Config.PORT}!`);
// });


let homeRoute = new HomeRoute();
let aboutRoute = new AboutRoute();

app.get('/', homeRoute.getDataFromMongo);
app.get('/about', aboutRoute.getDataFromMongo);

app.use('/products', ProductRouter );

app.use('/birds', birds);