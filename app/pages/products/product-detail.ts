import  fs  from "fs";
import path from 'path';
import { Product } from "../../schemas/product"
export default class ProductDetailRoutes {
    pageName:any;
    file:string = 'DATA/products.json';
    encoding:string = 'utf8';
    constructor(){
        this.pageName = 'Products'
    }
  
    public getProductFromDB = (req:any, res:any, next:any) =>{

        Product.findOne({id: req.params.id},function (err, item) {
            if (err) return console.error(err);
            console.log(item);
            res.send(item)
        })
    }
    
    public updateProduct = (req:any, res:any, next:any) =>{

        Product.findOneAndUpdate({id:req.params.id},req.body, {new: true}, function (err, prod:any) {
            console.log("prod",prod)
            if (err) return console.error(err);

            res.send(prod)
            
        })
    }

    public deleteProduct = (req:any, res:any, next:any) =>{
        Product.remove({ id:req.params.id }, (err:any) => {
            if (!err) {
                  res.send("delete")
            }
            else {
                res.send(err)
            }
        });
    }
  }