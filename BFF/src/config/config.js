require('dotenv').config();

module.exports = {
  productServiceUrl: process.env.PRODUCT_SERVICE_URL,
//   cartServiceUrl: process.env.CART_SERVICE_URL,
//   userServiceUrl: process.env.USER_SERVICE_URL,
//   categoryServiceUrl: process.env.CATEGORY_SERVICE_URL,
  port: process.env.PORT || 3000,

  COGNITO_REGION: process.env.COGNITO_REGION,
  COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
  COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID,
  JWT_SECRET: process.env.JWT_SECRET || "your-secret-key",
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",

  


};
