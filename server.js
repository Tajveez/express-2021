const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Hello");

  // res.status(403).json({
  //   status: 403,
  //   message: "Access to this page forbidden",
  // });

  // res.download("package.json");

  res.render("index", {
    textz: "World",
  });
  // res.send("Hello");
});

app.listen(3000);
