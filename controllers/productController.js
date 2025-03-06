const Product = require("../models/Product");

// Add Product
exports.addProduct = async (req, res) => {
  const { name, description, quantity, price } = req.body;
  try {
    const product = new Product({ name, description, quantity, price, createdBy: req.user._id });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update Product Status
exports.updateProductStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};