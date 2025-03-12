import express, { Response } from "express";

import repos from "./repos/repos.controller";
import languages from "./languages/languages.controller";

const router = express.Router();

router.get("/", (_, res: Response) => {
  res.status(200).send("All is good !");
});

router.use("/repos", repos);
router.use("/languages", languages);
export default router;
