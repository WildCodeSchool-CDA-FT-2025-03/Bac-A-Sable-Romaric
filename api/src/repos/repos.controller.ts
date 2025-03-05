import express, { Response } from "express";
import data from "../../data.json";

const repos = express.Router();

repos.get("/", (_, res: Response) => {
  res.status(200).json(data);
});

export default repos;
