const { user } = require("../models");

class usercontroller {
  create(req, res) {
    return res.render("auth/signup");
  }

  async store(req, res) {
    const { filename } = req.file;

    await user.create({ ...req.body, avatar: filename });

    return res.redirect("/");
  }
}

module.exports = new usercontroller();
