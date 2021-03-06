"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var HomeRoutes = /** @class */ (function () {
    function HomeRoutes() {
        var _this = this;
        this.file = 'DATA/home.json';
        this.encoding = 'utf8';
        this.getData = function (req, res, next) {
            //   res.json({pageName: this.pageName});
            var data = _this.readJsonFileSync(_this.file, _this.encoding);
            res.send(data);
        };
        this.pageName = 'home';
    }
    HomeRoutes.prototype.readJsonFileSync = function (file, encoding) {
        if (typeof (encoding) == 'undefined') {
            encoding = 'utf8';
        }
        var filepath = path_1.default.join(__dirname, '../../' + file);
        // var filepath:any = __dirname + '../' + file;
        var file = fs_1.default.readFileSync(filepath, encoding);
        return JSON.parse(file);
    };
    return HomeRoutes;
}());
exports.default = HomeRoutes;
