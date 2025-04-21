"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const router_1 = __importDefault(require("./router"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.EXPRESS_SERVER_PORT || 3000;
app.use((0, cors_1.default)({ origin: "http://localhost:5174" }));
app.use(express_1.default.json());
app.use("/api", router_1.default);
app.listen(PORT, () => {
    console.info(`Server is running on port http://localhost:${PORT}`);
});
