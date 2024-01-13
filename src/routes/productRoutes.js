const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/products', productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.get('/products/search/:query', productController.searchProducts);

// Default route for the root URL
router.get('/', (req, res) => {
  res.send('Welcome to the E-commerce API!');
});

module.exports = router;
