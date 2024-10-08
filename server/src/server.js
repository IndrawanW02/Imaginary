import express from "express";
import { createClient } from "pexels";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const client = createClient(process.env.PEXELS_API_KEY);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.get("/search", (req, res) => {
  const query = req.query.query;
  client.photos.search({ query, per_page: 50 }).then((response) => {
    res.json(response.photos);
  });
});
