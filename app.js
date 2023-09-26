const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRouter = require("./routes/blogRoutes");

const dbURL =
  "mongodb+srv://shranik:shranik123@blogs.rxpuwm7.mongodb.net/node-blogs";

app.set("view engine", "ejs");

mongoose
  .connect(dbURL)
  .then((result) => {
    console.log("database connected");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

app.use("/blogs", blogRouter);

app.use((req, res) => {
  res.status(404).render("404", {
    title: "404",
  });
});
