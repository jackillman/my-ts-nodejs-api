import  fs  from "fs";
import path from 'path';
import { Home } from "../../schemas/home"
import IHome from "../../models/home.model"
import { ObjectID } from "mongodb";
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


    public editDataInDoc:any = (req:any, res:any, next:any) =>{

       let language:any = req.params.lang;
        Home.find({},function (err, items) {
            console.log(items)
            if (err) return console.error(err);
            items.forEach( (item:any)=> {
                if(item.language == language) {
                    const updatedItem= {
                        id: item.id,
                        language:language,
                        title: req.body.title || item.title,
                        description: req.body.description || item.description,
                    };
                    Home.updateOne({language: item.language},updatedItem, function(err:any, affected:any, resp:any) {
                        console.log(updatedItem);
                        res.send(updatedItem)
                     })
                }
            })
        })
    }  

    public createHomeLangContent = (req:any, res:any, next:any) =>{

            let language:string = req.params.newLang;
            Home.find({},function (err, items) {
                console.log(items)
                if (err) return console.error(err);
                let lang = items.filter( (item:any)=> {
                    if(item.language == language) {
                        return item
                    }
            })

            if(lang.length) {
                res.send(lang)
            } else {
                let obj = {_id:  new ObjectID(),...req.body}
                let newHome = new Home(obj);
                newHome.save( (err,doc)=> {
                    res.send(doc)
                } )   
            }
           
        })
    }  

    
  }
