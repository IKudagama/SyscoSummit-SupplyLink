const axios = require('axios');
const { productServiceUrl } = require('../config/config');
const authMiddleware = require('../utils/auth');

class ProductService {
  async getAllProducts() {
    const response = await axios.get(`${productServiceUrl}/products`);
    return response.data;
  }

  async getProductById(id) {
    const response = await axios.get(`${productServiceUrl}/products/${id}`);
    return response.data;
  }

  async createProduct(productData) {
    const response = await axios.post(`${productServiceUrl}/products`, productData);
    return response.data;
  };

  async updateProduct (id, productData) {
    try {
      const response = await axios.put(`${productServiceUrl}/products/${id}`, productData);
      return response.data;
  } catch (error) {
      console.error(`Error in productService.updateProduct: ${error.message}`);
      throw error;  // Rethrow to let the caller handle it
  }
};

  async deleteProduct(id) {
    await axios.delete(`${productServiceUrl}/products/${id}`);
  }
}

module.exports = new ProductService();
