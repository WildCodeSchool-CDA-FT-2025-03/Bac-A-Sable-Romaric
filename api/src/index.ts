import express from "express";
import "dotenv/config";
import router from "./router";
import cors from "cors";

const app = express();

const PORT = process.env.EXPRESS_SERVER_PORT || 3000;

const corsOptions =
  process.env.NODE_ENV === "production"
    ? { origin: true } // Allow all origins in production
    : { origin: "http://localhost:4173" };

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.info(`Server is running on port http://localhost:${PORT}`);
});
