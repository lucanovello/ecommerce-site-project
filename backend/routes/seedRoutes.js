import express from 'express';
import data from '../dataAllLocal.js';
import Devices from '../models/devicesModel.js';
import Product from '../models/productModel.js';
import Slideshow from '../models/slideshowModel.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/insert', async (req, res) => {
  await Product.deleteMany({});
  // await Slideshow.deleteMany({});
  // await Devices.deleteMany({});

  const products = await Product.insertMany(data.products);
  const slideshow = await Slideshow.find();
  const devices = await Devices.find();
  console.log('SEED_/');
  res.send({
    slideshow,
    products,
    devices,
  });
});
seedRouter.get('/all', async (req, res) => {
  const products = await Product.find();
  const slideshow = await Slideshow.find();
  const devices = await Devices.find();

  console.log('SEED_ALL');
  res.send({
    products,
    slideshow,
    devices,
    // createdUsers,
  });
});
seedRouter.get('/products', async (req, res) => {
  // await Product.deleteMany({});
  const products = await Product.find();
  console.log('SEED_PRODUCTS');
  res.send({
    products,
  });
});
seedRouter.get('/slideshow', async (req, res) => {
  // await Slideshow.deleteMany({});
  const slideshow = await Slideshow.find();
  console.log('SEED_SLIDESHOW');
  res.send({
    slideshow,
  });
});
seedRouter.get('/devices', async (req, res) => {
  // await Devices.deleteMany({});
  const devices = await Devices.find();
  console.log('SEED_DEVICES');
  res.send({
    devices,
  });
});
seedRouter.get('/createdUsers', async (req, res) => {
  // await User.deleteMany({});
  const createdUsers = await User.find();
  console.log('SEED_USERS');
  res.send({
    createdUsers,
  });
});

export default seedRouter;
