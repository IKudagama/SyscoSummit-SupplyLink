const productService = require('../services/productService');

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async(req,res,next)=>{
  try {
    const { id } = req.params;  // Get the product ID from URL
    const productData = req.body;  // Get updated product data from request body

    // Call the service function to update the product
    const updatedProduct = await productService.updateProduct(id, productData);

    if (updatedProduct) {
        res.status(200).json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
} catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'An error occurred while updating the product' });
}
};

exports.deleteProduct = async (req, res, next) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
