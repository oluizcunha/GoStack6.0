const { user } = require("../models");

class sessioncontroller {
  async create(req, res) {
    return res.render("auth/signin");
  }

  // tive que utilizar user2 para não dar conflito com o require,
  // Lembrando que o user é utilizado para megar modelo do usuário

  async store(req, res) {
    const { email, password } = req.body;

    const user2 = await user.findOne({ where: { email } });

    if (!user2) {
      console.log("Usuário nao encontrado");
      return res.redirect("/");
    }

    if (!(await user2.checkPassword(password))) {
      console.log("Senha incorreta");
      return res.redirect("/");
    }

    req.session.user = user2;

    return res.redirect("/app/dashboard");
  }

  destroy(req, res) {
    req.session.destroy(() => {
      res.clearCookie("root");
      return res.redirect("/");
    });
  }
}

module.exports = new sessioncontroller();
