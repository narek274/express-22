var express = require("express");
const ProductController = require("../controllers/productController");
var router = express.Router();
const productController = new ProductController();

/* GET home page. */
router.get("/", productController.showAllData);

module.exports = router;
