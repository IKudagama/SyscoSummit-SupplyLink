const axios = require('axios');
const { userServiceUrl } = require('../config/config');

class UserService {
  


  async getAllUsers() {
    const response = await axios.get(`${userServiceUrl}/api/users`);
    return response.data;
  }

  async getUserById(id) {
    const response = await axios.get(`${userServiceUrl}/api/users/${id}`);
    return response.data;
  }

  async createUser(userData) {
    const response = await axios.post(`${userServiceUrl}/api/users`, userData);
    return response.data;
  }

  async deleteUser(id) {
    await axios.delete(`${userServiceUrl}/api/users/${id}`);
  }
}

module.exports = new UserService();
