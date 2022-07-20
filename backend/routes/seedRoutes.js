import express from 'express';
import data from '../data.js';
import Devices from '../models/devicesModel.js';
import Product from '../models/productModel.js';
import Slideshow from '../models/slideshowModel.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  await Slideshow.deleteMany({});
  await Devices.deleteMany({});
  await User.deleteMany({});
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
  await Product.deleteMany({});
  await Slideshow.deleteMany({});
  await Devices.deleteMany({});
  await User.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  const slideshow = await Slideshow.insertMany(data.slideshow);
  const devices = await Devices.insertMany(data.devices);
  const createdUsers = await User.insertMany(data.users);
  console.log('SEED_ALL');
  res.send({
    createdProducts,
    slideshow,
    devices,
    createdUsers,
  });
});
seedRouter.get('/products', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  console.log('SEED_PRODUCTS');
  res.send({
    createdProducts,
  });
});
seedRouter.get('/slideshow', async (req, res) => {
  await Slideshow.deleteMany({});
  const slideshow = await Slideshow.insertMany(data.slideshow);
  console.log('SEED_SLIDESHOW');
  res.send({
    slideshow,
  });
});
seedRouter.get('/devices', async (req, res) => {
  await Devices.deleteMany({});
  const devices = await Devices.insertMany(data.devices);
  console.log('SEED_DEVICES');
  res.send({
    devices,
  });
});
seedRouter.get('/createdUsers', async (req, res) => {
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);
  console.log('SEED_USERS');
  res.send({
    createdUsers,
  });
});

export default seedRouter;
