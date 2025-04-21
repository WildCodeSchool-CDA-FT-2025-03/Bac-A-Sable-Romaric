"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_json_1 = __importDefault(require("../../data.json"));
const languages = express_1.default.Router();
languages.get("/", (req, res) => {
    const languages = data_json_1.default.reduce((acc, repo) => {
        repo.languages.forEach((lang) => {
            if (!acc.includes(lang.node.name)) {
                acc.push(lang.node.name);
            }
            return acc;
        });
        return acc;
    }, []);
    res.status(200).json(languages);
});
exports.default = languages;
