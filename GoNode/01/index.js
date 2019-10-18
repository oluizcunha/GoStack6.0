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

app.get("/", (req, res) => {
  return res.render(`list`, { users });
});

app.get("/new", (req, res) => {
  return res.render("new");
});

app.post("/create", (req, res) => {
  console.log(req.body);
  return res.send("ok");
});

app.listen(4000);

// req.paramns
// req.query
//
