import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import "dotenv/config";

const app = express();

app.use(cors());
const port = process.env.PORT || 7000;
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}
connectToMongoDB();
app.get("/", (req, res) => {
  res.send({ message: "Hello Studio Space" });
});
app.get("/test", (req, res) => {
  res.send({ message: "Test API" });
});
app.listen(port, () => {
  console.log(`server on running on port ${port}`);
});
