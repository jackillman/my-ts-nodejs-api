"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class ProductsRoutes {
    constructor() {
        this.file = 'DATA/products.json';
        this.encoding = 'utf8';
        this.getData = (req, res, next) => {
            //   res.json({pageName: this.pageName});
            let data = this.readJsonFileSync(this.file, this.encoding);
            res.send(data);
        };
        this.pageName = 'Products';
    }
    readJsonFileSync(file, encoding) {
        if (typeof (encoding) == 'undefined') {
            encoding = 'utf8';
        }
        var filepath = path_1.default.join(__dirname, '../../' + file);
        // var filepath:any = __dirname + '../' + file;
        var file = fs_1.default.readFileSync(filepath, encoding);
        return JSON.parse(file);
    }
}
exports.default = ProductsRoutes;
