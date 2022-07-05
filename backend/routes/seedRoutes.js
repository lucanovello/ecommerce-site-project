import express from 'express';
import data from '../data.js';
import Devices from '../models/devicesModel.js';
import Product from '../models/productModel.js';
import Slideshow from '../models/slideshowModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  await Slideshow.deleteMany({});
  await Devices.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  const slideshow = await Slideshow.insertMany(data.slideshow);
  const devices = await Devices.insertMany(data.devices);
  res.send({ createdProducts, slideshow, devices });
});

export default seedRouter;
