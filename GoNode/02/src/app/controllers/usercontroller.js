const { user } = require("../models");

class usercontroller {
  create(req, res) {
    return res.render("auth/signup");
  }

  async store(req, res) {
    await user.create(req.body);

    return res.redirect("/");
  }
}

module.exports = new usercontroller();
