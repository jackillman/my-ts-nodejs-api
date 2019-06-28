import  fs  from "fs";
import path from 'path';
import { Home } from "../../schemas/home"
import IHome from "../../models/home.model"
export default class HomeRoutes {
    pageName:any;
    file:string = 'DATA/home.json';
    encoding:string = 'utf8';
    constructor(){
        this.pageName = 'home'
    }
  
    // getData = (req:any, res:any, next:any) => {
    //  //   res.json({pageName: this.pageName});
    //  let data = this.readJsonFileSync(this.file,this.encoding)
    //  res.send(data)
    // }

    // readJsonFileSync(file:any, encoding:any){

    //     if (typeof (encoding) == 'undefined'){
    //         encoding = 'utf8';
    //     }
        
    //     var filepath:any = path.join(__dirname, '../../'+file);
    //     // var filepath:any = __dirname + '../' + file;
    //     var file:any = fs.readFileSync(filepath, encoding);
    //     return JSON.parse(file);
    // }
    public getDataFromMongo = (req:any, res:any, next:any) =>{
       
        Home.find({},function (err, item) {
            if (err) return console.error(err);
            console.log(item);
            res.send(item)
        })
    }
    
       
       
    
  }
