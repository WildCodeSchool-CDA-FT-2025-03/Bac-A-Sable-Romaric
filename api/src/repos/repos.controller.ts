import express, { Response } from "express";
import data from "../../data.json";

const repos = express.Router();

// GET route to recover all repos
repos.get("/", (_, res: Response) => {
  res.status(200).json(data);
});

// GET route to recover a repo by id
repos.get("/:reposid", (req, res) => {
  const repo = data.find((rep) => rep.id === req.params.reposid);
  res.status(200).json(repo);
});

export default repos;
