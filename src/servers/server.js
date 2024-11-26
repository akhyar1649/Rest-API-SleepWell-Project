const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const host = "localhost";
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://${host}:${port}`);
});
