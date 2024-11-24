const axios = require('axios');
const { cartServiceUrl } = require('../config/config');

class CartService {
  async getAllCarts() {
    const response = await axios.get(`${cartServiceUrl}/api/carts`);
    return response.data;
  }

  async getCartById(id) {
    const response = await axios.get(`${cartServiceUrl}/api/carts/${id}`);
    return response.data;
  }

  async createCart(cartData) {
    const response = await axios.post(`${cartServiceUrl}/api/carts`, cartData);
    return response.data;
  }

  async deleteCart(id) {
    await axios.delete(`${cartServiceUrl}/api/carts/${id}`);
  }
}

module.exports = new CartService();
