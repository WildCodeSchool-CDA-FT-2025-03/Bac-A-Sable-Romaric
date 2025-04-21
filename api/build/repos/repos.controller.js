"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const repos_validator_1 = require("./repos.validator");
const data_json_1 = __importDefault(require("../../data.json"));
const logger_1 = __importDefault(require("../services/logger"));
const repos = express_1.default.Router();
let reposState = data_json_1.default;
// GET route to hit all repos
repos.get("/", (req, res) => {
    // Filter by isPrivate
    let result = req.query.isPrivate
        ? reposState.filter((rep) => rep.isPrivate.toString() === req.query.isPrivate)
        : reposState;
    // Pagination
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    // Apply pagination
    const paginatedResult = result.slice(startIndex, endIndex);
    // Filter by fields
    if (req.query.fields) {
        const fields = typeof req.query.fields === "string" ? req.query.fields.split(",") : [];
        // Map the result to the fields
        result = paginatedResult.map((el) => {
            // Map return array [res, res, res, res]
            const res = fields.reduce((acc, field) => (Object.assign(Object.assign({}, acc), { [field]: el[field] })), {}); // Array method return acc (string, number, object, array)
            return res; // {fields[0]: ..., fields[1]: ..., fields[2]: ...}
        });
    }
    else {
        result = paginatedResult;
    }
    res.status(200).json(result);
});
// GET route to hit a repo by id
repos.get("/:reposid", (req, res) => {
    const repo = reposState.find((rep) => rep.id === req.params.reposid);
    if (repo) {
        res.status(200).json(repo);
    }
    else {
        logger_1.default.error({ error: { msg: `Route GET, repo not found, id:${req.params.reposid}` } });
        res.sendStatus(404);
    }
});
// POST route to insert a new repo
repos.post("/", repos_validator_1.validateRepo, (req, res) => {
    const newId = Math.ceil(Math.random() * 1000000).toString();
    reposState.push(Object.assign({ id: newId }, req.body));
    res.status(201).json({ message: "Repo created successfully", id: newId });
});
// DELETE route to delete a repo by id
repos.delete("/:reposId", (req, res) => {
    if (reposState.some((repo) => repo.id === req.params.reposId)) {
        reposState = reposState.filter((repo) => repo.id !== req.params.reposId);
        console.info("Repo deleted successfully");
        res.status(204);
    }
    else {
        logger_1.default.error({ error: { msg: `Route DELETE, repo not found, id:${req.params.reposId}` } });
        res.sendStatus(404);
    }
});
// PUT route to update a repo by id
repos.put("/:reposId", repos_validator_1.validateRepoUpdate, (req, res) => {
    const repoIndex = reposState.findIndex((repo) => repo.id === req.params.reposId);
    if (repoIndex === -1) {
        logger_1.default.error({ error: { msg: `Route PUT, repo not found, id: ${req.params.reposId}` } });
        res.sendStatus(404);
        return;
    }
    // Update only the provided fields while keeping existing data
    reposState[repoIndex] = Object.assign(Object.assign({}, reposState[repoIndex]), req.body);
    res.status(200).json({
        message: "Repo updated successfully",
        repo: reposState[repoIndex],
    });
});
exports.default = repos;
