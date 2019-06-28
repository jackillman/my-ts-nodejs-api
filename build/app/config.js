"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.mongoPORT = "mongodb://jackill:jackill4771@ds137857.mlab.com:37857/sampleapi";
    Config.PORT = process.env.PORT || 3000;
    return Config;
}());
exports.default = Config;
