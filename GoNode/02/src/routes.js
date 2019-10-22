const express = require("express");

const routes = express.Router();

const usercontroller = require("./app/controllers/usercontroller");

routes.get("/signup", usercontroller.create);
routes.post("/signup", usercontroller.store);

module.exports = routes;
