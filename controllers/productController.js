class ProductController {
  async showAllData(req, res) {
    const data = await req.app.locals.service.product.showAllData(req.query);

    res.render("index", { data });
  }
}
module.exports = ProductController;
