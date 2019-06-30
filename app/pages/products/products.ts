import  fs  from "fs";
import path from 'path';

import { Product } from "../../schemas/product"
import { ObjectID } from "mongodb";


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

    public createProduct = (req:any, res:any, next:any) =>{

        Product.find({},function (err, items) {
            if (err) return console.error(err);
            let product = items.filter( (item:any)=> {
                 if(item.id == req.params.id) return item
            })
        if(product.length) {
            res.send(product)
        } else {
            let obj = {_id:  new ObjectID(),...req.body}
            let newProduct = new Product(obj);
            newProduct.save( (err,doc)=> {
                res.send(doc)
            } )   
        }
       
    })
}  
  }