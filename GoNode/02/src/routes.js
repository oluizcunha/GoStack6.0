const express = require("express");
const multerConfig = require("./config/multer");
const upload = require("multer")(multerConfig);

const routes = express.Router();

const usercontroller = require("./app/controllers/usercontroller");

routes.get("/signup", usercontroller.create);
routes.post("/signup", upload.single("avatar"), usercontroller.store);

module.exports = routes;
