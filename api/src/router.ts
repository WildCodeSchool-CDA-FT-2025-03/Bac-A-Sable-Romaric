import express, { Response } from "express";
import repos from "./repos/repos.controller";

const router = express.Router();

router.get("/", (_, res: Response) => {
  res.status(200).send("All is good !");
});

router.use("/repos", repos);

export default router;
