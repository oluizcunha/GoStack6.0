const express = require("express");
const multerConfig = require("./config/multer");
const upload = require("multer")(multerConfig);

const routes = express.Router();

const authMiddleware = require("./app/middlewares/auth");
const guestMiddleware = require("./app/middlewares/guest");

const usercontroller = require("./app/controllers/usercontroller");
const sessioncontroller = require("./app/controllers/sessioncontroller");

routes.use((req, res, next) => {
  res.locals.flashSucces = req.flash("sucesso");
  res.locals.flashError = req.flash("Errouuu");

  return next();
});

routes.get("/", guestMiddleware, sessioncontroller.create);
routes.post("/signin", sessioncontroller.store);

routes.get("/signup", guestMiddleware, usercontroller.create);
routes.post("/signup", upload.single("avatar"), usercontroller.store);

routes.use("/app", authMiddleware);

routes.get("/app/logout", sessioncontroller.destroy);

routes.get("/app/dashboard", (req, res) => {
  console.log(req.session.user);
  res.render("dashboard");
});

module.exports = routes;
