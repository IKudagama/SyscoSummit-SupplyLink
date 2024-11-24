const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();
const authMiddleware = require('../utils/auth');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id',productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
