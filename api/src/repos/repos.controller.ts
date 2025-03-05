import express, { Request, Response } from "express";
import data from "../../data.json";
import { Repos } from "./repos.types";

const repos = express.Router();

// GET route to recover all repos
repos.get("/", (_, res: Response) => {
  res.status(200).json(data);
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
repos.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.status(200).send("Tout est ok pour l'ajout d'un repo");
});

export default repos;
