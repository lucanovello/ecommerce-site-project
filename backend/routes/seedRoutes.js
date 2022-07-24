import express from 'express';
import data from '../data.js';
import Devices from '../models/devicesModel.js';
import Product from '../models/productModel.js';
import Slideshow from '../models/slideshowModel.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  await Slideshow.remove({});
  await Devices.remove({});

  const createdProducts = await Product.insertMany(data.products);
  const slideshow = await Slideshow.insertMany(data.slideshow);
  const devices = await Devices.insertMany(data.devices);
  console.log('SEED_/');
  res.send({
    createdProducts,
    slideshow,
    devices,
  });
});
seedRouter.get('/all', async (req, res) => {
  await Product.remove({});
  await Slideshow.remove({});
  await Devices.remove({});

  const createdProducts = await Product.insertMany(data.products);
  const slideshow = await Slideshow.insertMany(data.slideshow);
  const devices = await Devices.insertMany(data.devices);

  console.log('SEED_ALL');
  res.send({
    createdProducts,
    slideshow,
    devices,
    // createdUsers,
  });
});
seedRouter.get('/products', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  console.log('SEED_PRODUCTS');
  res.send({
    createdProducts,
  });
});
seedRouter.get('/slideshow', async (req, res) => {
  await Slideshow.remove({});
  const slideshow = await Slideshow.insertMany(data.slideshow);
  console.log('SEED_SLIDESHOW');
  res.send({
    slideshow,
  });
});
seedRouter.get('/devices', async (req, res) => {
  await Devices.remove({});
  const devices = await Devices.insertMany(data.devices);
  console.log('SEED_DEVICES');
  res.send({
    devices,
  });
});
seedRouter.get('/createdUsers', async (req, res) => {
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  console.log('SEED_USERS');
  res.send({
    createdUsers,
  });
});

export default seedRouter;
