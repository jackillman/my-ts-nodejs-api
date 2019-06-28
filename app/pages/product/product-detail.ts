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
  
    // getData = (req:any, res:any, next:any) => {
    //  //   res.json({pageName: this.pageName});
    //     console.log(req.params.id)
    //     const id = req.params.id;
    //     let data = this.readJsonFileSync(this.file,this.encoding,id)
    //     res.send(data)
    // }
    // setData = (req:any, res:any, next:any) => {
    //     //   res.json({pageName: this.pageName});
    //        console.log(req.params.id)
    //        const id = req.params.id;
    //        const query = req.queryParams.title;
           
    //        res.send()
    //    }
    // readJsonFileSync(fileName:any, encoding:any,id:any){

    //     if (typeof (encoding) == 'undefined'){
    //         encoding = 'utf8';
    //     }
        
    //     let filepath:any = path.join(__dirname, '../../'+fileName);
    //     // var filepath:any = __dirname + '../' + file;
    //     let file:any = fs.readFileSync(filepath, encoding);
    //     let fileparsed = JSON.parse(file);
    //     let book = fileparsed.filter( (ids:any)=>ids.id==id)

    //     return book;
    // }
    public getDataFromMongo = (req:any, res:any, next:any) =>{
        const nameProd = req.params.name;
        console.log(nameProd)
        Product.findOne({name:nameProd},function (err, item) {
            if (err) return console.error(err);
            console.log(item);
            res.send(item)
        })
    }
    
    public updateProductDataInMongo = (req:any, res:any, next:any) =>{
        console.log(req.body)
        const nameProd = req.params.name;

        Product.findOneAndUpdate({name:nameProd},req.body, {new: true}, function (err, prod:any) {
            console.log("prod",prod)
            if (err) return console.error(err);
            
            // prod.save( (e:any,resp:any)=> {
            //     if(e) return console.error(e);
                
            //     console.log(resp)
            //     res.send(resp)
            // })
            res.send(prod)
            
        })
    }
  }