import express, { Request, Response } from "express";
import validateRepo from "./repos.validator";
import data from "../../data.json";
import { Repos, Fields } from "./repos.types";

const repos = express.Router();

// GET route to hit all repos
repos.get("/", (req: Request, res: Response) => {
  // Filter by isPrivate
  let result = req.query.isPrivate
    ? data.filter((rep) => rep.isPrivate.toString() === req.query.isPrivate)
    : data;

  // Filter by limit
  if (req.query.limit && result.length > +req.query.limit) {
    result = result.slice(0, +req.query.limit);
  }

  // Filter by fields
  if (req.query.fields) {
    const fields = typeof req.query.fields === "string" ? req.query.fields.split(",") : [];

    // Map the result to the fields
    result = result.map((el: Repos) => {
      // Map return array [res, res, res, res]
      const res = fields.reduce((acc, field) => ({ ...acc, [field]: el[field] }), {}); // Array method return acc (string, number, object, array)

      return res; // {fields[0]: ..., fields[1]: ..., fields[2]: ...}
    }) as Repos[];
  }

  res.status(200).json(result);
});

// GET route to hit a repo by id
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
