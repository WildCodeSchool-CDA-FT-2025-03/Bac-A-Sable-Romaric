import express, { Request, Response } from "express";
import validateRepo from "./repos.validator";
import data from "../../data.json";
import { Repos } from "./repos.types";

const repos = express.Router();

// GET route to recover all repos
repos.get("/", (req: Request, res: Response) => {
  console.log("Hit all repo controller");
  console.log(req.query);

  let result = req.query.isPrivate
    ? data.filter((rep) => rep.isPrivate.toString() === req.query.isPrivate)
    : data;

  if (req.query.limit) {
    result = result.slice(0, +req.query.limit);
  }
  res.status(200).json(result);
});

// GET route to recover a repo by id
repos.get("/:reposid", (req: Request, res: Response) => {
  const repo = data.find((rep) => rep.id === req.params.reposid) as Repos;

  if (repo) {
    res.status(200).json(repo);
  } else {
    res.sendStatus(404);
  }
});

// POST route to insert a new repo
repos.post("/", validateRepo, (req: Request, res: Response) => {
  const newId = Math.ceil(Math.random() * 1000000).toString();
  data.push({ id: newId, ...req.body });
  res.status(201).json({ message: "Repo created successfully", id: newId });
});

export default repos;
