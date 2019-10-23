const express = require("express");
const multerConfig = require("./config/multer");
const upload = require("multer")(multerConfig);

const routes = express.Router();

const usercontroller = require("./app/controllers/usercontroller");
const sessioncontroller = require("./app/controllers/sessioncontroller");

routes.get("/", sessioncontroller.create);
routes.post("/signin", sessioncontroller.store);

routes.get("/signup", usercontroller.create);
routes.post("/signup", upload.single("avatar"), usercontroller.store);

routes.get("/app/dashboard", (req, res) => res.render("dashboard"));

module.exports = routes;
