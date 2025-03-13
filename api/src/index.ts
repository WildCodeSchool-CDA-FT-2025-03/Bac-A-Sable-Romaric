import express from "express";
import "dotenv/config";
import router from "./router";
import cors from "cors";

const app = express();

const PORT = process.env.EXPRESS_SERVER_PORT || 3000;

app.use(cors({ origin: "http://localhost:5174" }));

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.info(`Server is running on port http://localhost:${PORT}`);
});
