import  fs  from "fs";
import path from 'path';

import { Product } from "../../schemas/product"


export default class ProductsRoutes {
    pageName:any;
    file:string = 'DATA/products.json';
    encoding:string = 'utf8';
    constructor(){
        this.pageName = 'Products'
    }

    public getDataFromMongo = (req:any, res:any, next:any) =>{
       
        Product.find({},function (err, item) {
            if (err) return console.error(err);
            console.log(item);
            res.send(item)
        })
    }

  }