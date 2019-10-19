const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "njk");

const users = ["Luiz Cunha", "Thiago machele"];

app.get("/", (req, res) => {});

app.post("/check", (req, res, next) => {});

app.get("/major", (req, res) => {});

app.get("/minor", (req, res) => {});

app.listen(4000);

// req.paramns
// req.query
// req.body
