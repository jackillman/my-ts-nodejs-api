"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var ProductDetailRoutes = /** @class */ (function () {
    function ProductDetailRoutes() {
        var _this = this;
        this.file = 'DATA/products.json';
        this.encoding = 'utf8';
        this.getData = function (req, res, next) {
            //   res.json({pageName: this.pageName});
            console.log(req.params.id);
            var id = req.params.id;
            var data = _this.readJsonFileSync(_this.file, _this.encoding, id);
            res.send(data);
        };
        this.setData = function (req, res, next) {
            //   res.json({pageName: this.pageName});
            console.log(req.params.id);
            var id = req.params.id;
            var query = req.queryParams.title;
            res.send();
        };
        this.pageName = 'Products';
    }
    ProductDetailRoutes.prototype.readJsonFileSync = function (fileName, encoding, id) {
        if (typeof (encoding) == 'undefined') {
            encoding = 'utf8';
        }
        var filepath = path_1.default.join(__dirname, '../../' + fileName);
        // var filepath:any = __dirname + '../' + file;
        var file = fs_1.default.readFileSync(filepath, encoding);
        var fileparsed = JSON.parse(file);
        var book = fileparsed.filter(function (ids) { return ids.id == id; });
        return book;
    };
    return ProductDetailRoutes;
}());
exports.default = ProductDetailRoutes;
