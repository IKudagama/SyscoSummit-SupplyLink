const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./src/utils/errorHandler');
const productRoutes = require('./src/routes/productRoutes');
// const cartRoutes = require('.src/routes/cartRoutes');
// const userRoutes = require('.src/routes/userRoutes');
// const categoryRoutes = require('.src/routes/categoryRoutes');
const authRoutes = require('./src/routes/authRoute');

const app = express();
app.use(bodyParser.json());

app.use('/products', productRoutes);
// app.use('/api/carts', cartRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/categories', categoryRoutes);
app.use('/auth',authRoutes);

app.use(errorHandler);

module.exports = app;
 