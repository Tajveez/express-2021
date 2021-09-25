const express = require("express");
const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");

// app.get("/", logger, logger, logger, (req, res) => {
//   console.log("Hello");

//   // res.status(403).json({
//   //   status: 403,
//   //   message: "Access to this page forbidden",
//   // });

//   // res.download("package.json");

//   res.render("index", {
//     text: "World",
//   });
//   // res.send("Hello");
// });

app.use(logger)

const userRouter = require('./routes/users')
app.use('/users', userRouter)

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.listen(3000);
