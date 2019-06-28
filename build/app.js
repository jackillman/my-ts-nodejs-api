"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
const express = require("express");
const about_1 = __importDefault(require("./pages/about/about"));
const home_1 = __importDefault(require("./pages/home/home"));
const products_1 = __importDefault(require("./pages/product/products"));
const product_detail_1 = __importDefault(require("./pages/product/product-detail"));
// const MongoClient = require("mongodb").MongoClient;
// const objectId = require("mongodb").ObjectID;
// Create a new express application instance
const app = express();
app.listen(3000, function () {
    console.log("Сервер ожидает подключения...");
});
// app.listen(Config.PORT, function () {
//   console.log(`Example app listening on port ${Config.PORT}!`);
// });
let homeRoutes = new home_1.default();
let aboutRoute = new about_1.default();
let productsRoute = new products_1.default();
let productDetailRoute = new product_detail_1.default();
// app.get('/', homeRoutes.getDataFromMongo);
// app.get('/about', aboutRoute.getData);
// app.get('/products', productsRoute.getData);
// app.get('/products/:id', productDetailRoute.getData);
// app.post('/products/:id', productDetailRoute.setData);
// app.get('*', homeRoutes.getDataFromMongo);
