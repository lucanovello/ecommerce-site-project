import express from 'express';
import Product from '../models/productModel.js';

const featuredItemsRouter = express.Router();

featuredItemsRouter.get('/', async (req, res) => {
  const products = await Product.find({ rating: 5 });
  const featuredItems = [
    products[Math.floor(Math.random() * products.length)],
    products[Math.floor(Math.random() * products.length)],
    products[Math.floor(Math.random() * products.length)],
    products[Math.floor(Math.random() * products.length)],
    products[Math.floor(Math.random() * products.length)],
  ];

  console.log('/featuredItems');
  res.send({ featuredItems });
});

export default featuredItemsRouter;
