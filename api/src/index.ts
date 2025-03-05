import express from "express";
import "dotenv/config";
import router from "./router";

const app = express();

const PORT = process.env.EXPRESS_SERVER_PORT || 3000;

app.use("/api", router);

app.listen(PORT, () => {
  console.info(`Server is running on port http://localhost:${PORT}`);
});
