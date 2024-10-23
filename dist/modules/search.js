"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const utils_1 = __importDefault(require("./utils"));
const searchPath = "/fsearch";
const search = async (query, page = 1) => {
    return await (0, utils_1.default)(searchPath, "POST", {
        query,
        page,
    });
};
exports.search = search;
