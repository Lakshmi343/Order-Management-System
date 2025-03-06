const express = require("express");
const { addProduct, updateProductStatus } = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/add", authMiddleware(["manufacturer"]), addProduct);
router.put("/:id/status", authMiddleware(["manufacturer", "seller"]), updateProductStatus);

module.exports = router;