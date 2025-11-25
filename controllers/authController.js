const fs = require("fs").promises;
const path = require("path");

class AuthController {
  async binController(req, res) {
    let data = null;

    try {
      const file = await fs.readFile(
        path.join(__dirname, "..", "db", "bin.json"),
        "utf-8"
      );
      data = JSON.parse(file);
    } catch (err) {
      data = null;
    }

    res.render("bin", { data });
  }

  async addToBin(req, res) {
    const data = await req.app.locals.service.product.addToBin(req.body);

    res.render("bin", { data });

  }
}

module.exports = AuthController;
