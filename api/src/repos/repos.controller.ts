import express, { Request, Response, NextFunction } from "express";
import Joi from "joi";
import data from "../../data.json";
import { Repos } from "./repos.types";

const repos = express.Router();

// Schema to validate the data of the repo
const schema = Joi.object({
  url: Joi.string().required(),
  isPrivate: Joi.boolean().required(),
  languages: Joi.array().items(
    Joi.object({
      size: Joi.number().required(),
      node: Joi.object({
        name: Joi.string(),
      }),
    })
  ),
});

// Middleware to validate the data of the repo
const validateRepo = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(422).json({ errorMessage: error.message });
  } else {
    next();
  }
};

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
repos.post("/", validateRepo, (req: Request, res: Response) => {
  const newId = Math.ceil(Math.random() * 1000000).toString();
  data.push({ id: newId, ...req.body });
  res.status(201).json({ message: "Repo created successfully", id: newId });
});

export default repos;
