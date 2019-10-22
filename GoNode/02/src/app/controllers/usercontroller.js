const { user } = require("../models");

class usercontroller {
  create(req, res) {
    return res.render("auth/signup");
  }

  async store(req, res) {
    req.body.avatar = "imgFake.jpg";
    await user.create(req.body);

    return res.redirect("/");
  }
}

module.exports = new usercontroller();
