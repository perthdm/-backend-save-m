import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser = require("body-parser");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(cors<Request>());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/get-user", (req: Request, res: Response) => {
  res.json({
    items: [
      {
        id: 1,
        firstname: "eakkasit",
        lastname: "praprutkittorn",
        age: 25,
        job: "dev",
      },
      {
        id: 2,
        firstname: "supisara",
        lastname: "prasitinawa",
        age: 25,
        job: "dev",
      },
    ],
    total: 2,
  });
});

app.post("/login", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    status: 200,
    message: "OK!",
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
