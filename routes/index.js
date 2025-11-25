var express = require("express");
const ProductController = require("../controllers/productController");
const AuthController = require("../controllers/authController");
var router = express.Router();
const productController = new ProductController();
const authController = new AuthController()
/* GET home page. */
router.get("/", productController.showAllData);
router.get("/bin", authController.binController);
router.post("/bin", authController.addToBin);

module.exports = router;
