import express, { Request, Response } from "express";
import { validateRepo, validateRepoUpdate } from "./repos.validator";
import data from "../../data.json";
import { Repos, Fields } from "./repos.types";

const repos = express.Router();

let reposState = data;

// GET route to hit all repos
repos.get("/", (req: Request, res: Response) => {
  // Filter by isPrivate
  let result = req.query.isPrivate
    ? reposState.filter((rep) => rep.isPrivate.toString() === req.query.isPrivate)
    : reposState;

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
  const repo = reposState.find((rep) => rep.id === req.params.reposid) as Repos;

  if (repo) {
    res.status(200).json(repo);
  } else {
    res.sendStatus(404);
  }
});

// POST route to insert a new repo
repos.post("/", validateRepo, (req: Request, res: Response) => {
  const newId = Math.ceil(Math.random() * 1000000).toString();
  reposState.push({ id: newId, ...req.body });
  res.status(201).json({ message: "Repo created successfully", id: newId });
});

// DELETE route to delete a repo by id
repos.delete("/:reposId", (req: Request, res: Response) => {
  reposState = reposState.filter((repo) => repo.id !== req.params.reposId);
  console.info("Repo deleted successfully");
  res.status(204);
});

// PUT route to update a repo by id
repos.put("/:reposId", validateRepoUpdate, (req: Request, res: Response): void => {
  const repoIndex = reposState.findIndex((repo) => repo.id === req.params.reposId);

  if (repoIndex === -1) {
    res.status(404).json({ message: "Repo not found" });
    return;
  }

  // Update only the provided fields while keeping existing data
  reposState[repoIndex] = {
    ...reposState[repoIndex],
    ...req.body,
  };

  res.status(200).json({
    message: "Repo updated successfully",
    repo: reposState[repoIndex],
  });
});

export default repos;
