"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class ProductDetailRoutes {
    constructor() {
        this.file = 'DATA/products.json';
        this.encoding = 'utf8';
        this.getData = (req, res, next) => {
            //   res.json({pageName: this.pageName});
            console.log(req.params.id);
            const id = req.params.id;
            let data = this.readJsonFileSync(this.file, this.encoding, id);
            res.send(data);
        };
        this.setData = (req, res, next) => {
            //   res.json({pageName: this.pageName});
            console.log(req.params.id);
            const id = req.params.id;
            const query = req.queryParams.title;
            res.send();
        };
        this.pageName = 'Products';
    }
    readJsonFileSync(fileName, encoding, id) {
        if (typeof (encoding) == 'undefined') {
            encoding = 'utf8';
        }
        let filepath = path_1.default.join(__dirname, '../../' + fileName);
        // var filepath:any = __dirname + '../' + file;
        let file = fs_1.default.readFileSync(filepath, encoding);
        let fileparsed = JSON.parse(file);
        let book = fileparsed.filter((ids) => ids.id == id);
        return book;
    }
}
exports.default = ProductDetailRoutes;
