"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
// const url = "mongodb://localhost:27017/myapi";
// const mongoClient = new MongoClient(url, { useNewUrlParser: true });
// const objectId = require("mongodb").ObjectID;
const Schema = mongoose_1.default.Schema;
const HomeItem = new Schema({
    title: String,
    description: String
});
const Home = mongoose_1.default.model('HOME', HomeItem);
class HomeRoutes {
    constructor() {
        this.file = 'DATA/home.json';
        this.encoding = 'utf8';
        this.getData = (req, res, next) => {
            //   res.json({pageName: this.pageName});
            let data = this.readJsonFileSync(this.file, this.encoding);
            res.send(data);
        };
        this.getDataFromMongo = (req, res, next) => {
            Home.find({}, (err, data) => {
                console.log(data);
            });
            // var jamieAuthor = new Home {
            //         title: 'Jamie',
            //         description: 'Munro'
            // };
        };
        this.pageName = 'home';
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
exports.default = HomeRoutes;
