"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect(config_1.default.mongoPORT, { useNewUrlParser: true });
