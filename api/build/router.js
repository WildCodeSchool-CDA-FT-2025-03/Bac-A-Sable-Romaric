"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const repos_controller_1 = __importDefault(require("./repos/repos.controller"));
const languages_controller_1 = __importDefault(require("./languages/languages.controller"));
const router = express_1.default.Router();
router.get("/", (_, res) => {
    res.status(200).send("All is good !");
});
router.use("/repos", repos_controller_1.default);
router.use("/languages", languages_controller_1.default);
exports.default = router;
