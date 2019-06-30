import  fs  from "fs";
import path from 'path';
import { About } from "../../schemas/about"
// import IHome from "../../models/home.model"
export default class AboutRoutes {
    pageName:any;
    file:string = 'DATA/about-content.json';
    encoding:string = 'utf8';
    constructor(){
        this.pageName = 'about'
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
       
        About.find({},function (err, item) {
            if (err) return console.error(err);
            console.log(item);
            res.send(item)
        })
    }

    public editDataInDoc:any = (req:any, res:any, next:any) =>{

        let language:string = req.params.lang;
        // let query = req.query;
        let body = req.body;
         About.find({},function (err, items) {
             if (err) return console.error(err);
             items.forEach( (item:any)=> {
                 if(item.language === language) {
                    let uptobj:any ={}
                    for(let prop in item) {
                        for(let bodyItem in body) {
                            if(prop === bodyItem) {
                                if(prop==="language") continue
                                uptobj[prop]= body[bodyItem];
                            }
                        }
                    }

                    About.updateOne({language: language},uptobj, function(err:any, affected:any, resp:any) {
                        About.find({language: language},function (err, items) {
                            items.forEach( (el:any)=> {
                                if(el.language === language ) res.send(el)
                            })
                        })
                        
                    })
                 }
             })
         })
     }  


}

// module.exports = AboutRoutes;
