const path = require("path");
class filecontroler {
  show(req, res) {
    const { file } = req.params;
    // não era para estar funcionando, pois ele volta o caminho de algum jeito muito doido
    const filepath = path.resolve("tmp", "uploads", file);

    console.log(filepath);
    console.log(file);
    return res.sendFile(filepath);
  }
}

module.exports = new filecontroler();
