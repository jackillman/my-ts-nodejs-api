"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
}
Config.mongoPORT = `mongodb://jackill:jackill4771@ds137857.mlab.com:37857/sampleapi`;
Config.PORT = process.env.PORT || 3000;
exports.default = Config;
