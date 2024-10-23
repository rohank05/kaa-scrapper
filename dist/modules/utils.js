"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const request = (url, method, data) => {
    return new Promise((resolve, reject) => {
        fetch(`${config_1.default.baseUrl}${url}`, {
            method,
            body: data ? JSON.stringify(data) : undefined,
            headers: { "Content-Type": "application/json" },
        })
            .then(async (response) => {
            if (!response.ok)
                reject(new Error(`HTTP error! status: ${response.status}`));
            resolve((await response.json()));
        })
            .catch(reject);
    });
};
exports.default = request;
