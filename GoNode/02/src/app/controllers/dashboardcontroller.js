const { user } = require("../models");

class dashboardcontroller {
  async index(req, res) {
    const providers = await user.findAll({ where: { provider: true } });

    return res.render("dashboard", { providers });
  }
}

module.exports = new dashboardcontroller();
