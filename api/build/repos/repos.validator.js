"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRepoUpdate = exports.validateRepo = void 0;
const joi_1 = __importDefault(require("joi"));
const logger_1 = __importDefault(require("../services/logger"));
// Schema to validate the data of the repo for creation
const schema = joi_1.default.object({
    createdAt: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    diskUsage: joi_1.default.number().required(),
    id: joi_1.default.string(),
    isPrivate: joi_1.default.boolean().required(),
    languages: joi_1.default.array().items(joi_1.default.object({
        size: joi_1.default.number(),
        node: joi_1.default.object({
            name: joi_1.default.string(),
        }),
    })),
    name: joi_1.default.string().required(),
    updatedAt: joi_1.default.string().required(),
    url: joi_1.default.string().required(),
});
// Schema for partial updates - all fields are optional
const updateSchema = joi_1.default.object({
    createdAt: joi_1.default.string(),
    description: joi_1.default.string(),
    diskUsage: joi_1.default.number(),
    id: joi_1.default.string(),
    isPrivate: joi_1.default.boolean(),
    languages: joi_1.default.array().items(joi_1.default.object({
        size: joi_1.default.number(),
        node: joi_1.default.object({
            name: joi_1.default.string(),
        }),
    })),
    name: joi_1.default.string(),
    updatedAt: joi_1.default.string(),
    url: joi_1.default.string(),
});
// Middleware to validate the data of the repo for creation
const validateRepo = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        logger_1.default.error({ error: { msg: `Validation repo, ${error.details[0].message}` } });
        res.status(422).json(error);
    }
    else {
        next();
    }
};
exports.validateRepo = validateRepo;
// Middleware to validate partial updates
const validateRepoUpdate = (req, res, next) => {
    const { error } = updateSchema.validate(req.body);
    if (error) {
        logger_1.default.error({ error: { msg: `Validation repo update, ${error.details[0].message}` } });
        res.status(422).json(error);
    }
    else {
        next();
    }
};
exports.validateRepoUpdate = validateRepoUpdate;
