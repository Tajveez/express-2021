const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello");
  res.sendStatus(403);
  // res.send("Hello");
});

app.listen(3000);
