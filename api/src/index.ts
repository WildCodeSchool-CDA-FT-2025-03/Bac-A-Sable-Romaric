import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.EXPRESS_SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.info(`Server is running on port http://localhost:${PORT}`);
});
