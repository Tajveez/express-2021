const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello");

  // res.status(403).json({
  //   status: 403,
  //   message: "Access to this page forbidden",
  // });

  // res.download("package.json");

  res.render("index");
  // res.send("Hello");
});

app.listen(3000);
