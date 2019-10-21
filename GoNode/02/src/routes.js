const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send("criando server inicial");
});

module.exports = routes;
