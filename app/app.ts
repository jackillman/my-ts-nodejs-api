// lib/app.ts
import express  from 'express';
import Config from './config';
import mongoose from 'mongoose';
import AboutRoute  from './pages/about/about';
import HomeRoute  from './pages/home/home';

import ProductRouter from "./pages/product/index"
import birds from './birds';
import bodyParser  from 'body-parser'
// const MongoClient = require("mongodb").MongoClient;
// const objectId = require("mongodb").ObjectID;
// Create a new express application instance
const app: express.Application = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
// home routes
app.get('/api/home', homeRoute.getAllDataLangs);
app.put('/api/home/:lang', homeRoute.editDataInDoc);
app.post('/api/home/:newLang', homeRoute.createHomeLangContent);
app.delete('/api/home/:delLang', homeRoute.deleteHomeLang);

app.get('/api/about', aboutRoute.getDataFromMongo);
app.put('/api/about/:lang', aboutRoute.editDataInDoc);


app.use('/api/products', ProductRouter );

app.use('/birds', birds);