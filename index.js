require("dotenv").config();
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("<a href='https://twitter.com/0xSaksham'>Twitter-0xSaksham</a>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
