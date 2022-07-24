import express from 'express';
import data from '../data.js';
import Devices from '../models/devicesModel.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  console.log('/product');
  res.send({ products });
});

productRouter.get(`/:slug`, async (req, res) => {
  await Devices.deleteMany({});
  const devices = await Devices.insertMany(data.devices);
  const product = await Product.findOne({ slug: req.params.slug });
  console.log('SEED_/products/:slug');
  if (product) {
    console.log('/products/:slug');
    res.send({
      product,
      devices,
    });
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default productRouter;
