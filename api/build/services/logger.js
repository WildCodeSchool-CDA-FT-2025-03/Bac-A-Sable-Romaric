"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const toCSV = winston_1.format.printf(({ timestamp, level, message }) => `${timestamp},${level},${JSON.stringify(message)}`);
const loggerTransporter = [];
if (process.env.NODE_ENV !== "production") {
    // System log used console
    loggerTransporter.push(new winston_1.transports.Console({
        format: winston_1.format.json(),
    }));
}
else {
    // System log used file
    loggerTransporter.push(new winston_1.transports.File({
        filename: "log/error.log",
        level: "error",
        format: winston_1.format.combine(winston_1.format.timestamp(), toCSV),
    }));
}
const logger = (0, winston_1.createLogger)({
    level: "error",
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
    transports: loggerTransporter,
});
exports.default = logger;
