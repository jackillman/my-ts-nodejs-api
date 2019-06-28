"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express = require("express");
var config_1 = __importDefault(require("./config"));
var about_1 = __importDefault(require("./pages/about/about"));
var home_1 = __importDefault(require("./pages/home/home"));
var products_1 = __importDefault(require("./pages/product/products"));
var product_detail_1 = __importDefault(require("./pages/product/product-detail"));
// Create a new express application instance
var app = express();
var homeRoutes = new home_1.default();
var aboutRoute = new about_1.default();
var productsRoute = new products_1.default();
var productDetailRoute = new product_detail_1.default();
app.get('/', homeRoutes.getData);
app.get('/about', aboutRoute.getData);
app.get('/products', productsRoute.getData);
app.get('/products/:id', productDetailRoute.getData);
app.post('/products/:id', productDetailRoute.setData);
app.get('*', homeRoutes.getData);
app.listen(config_1.default.PORT, function () {
    console.log("Example app listening on port " + config_1.default.PORT + "!");
});
