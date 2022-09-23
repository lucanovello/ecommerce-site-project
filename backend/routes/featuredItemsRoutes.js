import express from 'express';
import Product from '../models/productModel.js';

const featuredItemsRouter = express.Router();

featuredItemsRouter.get('/', async (req, res) => {
  const products = await Product.find({ isfeatured: true });

  const featuredItems = [];
  const arr = [];
  while (featuredItems.length < 5) {
    let randInt = Math.floor(Math.random() * products.length);
    if (arr.indexOf(randInt) === -1) {
      arr.push(randInt);
      featuredItems.push(products[randInt]);
    }
  }

  console.log('/featuredItems');
  res.send({ featuredItems });
});

export default featuredItemsRouter;
