import express from 'express';
import data from '../dataAllLocal.js';
import Devices from '../models/devicesModel.js';
import Product from '../models/productModel.js';
import Slideshow from '../models/slideshowModel.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/insert', async (req, res) => {
  await Product.deleteMany({});
  await Slideshow.deleteMany({});
  await Devices.deleteMany({});

  const products = await Product.insertMany(data.products);
  const slideshow = await Slideshow.insertMany(data.slideshow);
  const devices = await Devices.insertMany(data.devices);
  console.log('/insert');
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

  console.log('/all');
  res.send({
    products,
    slideshow,
    devices,
    // createdUsers,
  });
});
seedRouter.get('/products', async (req, res) => {
  const products = await Product.find();
  console.log('/products');
  res.send({
    products,
  });
});
seedRouter.get('/slideshow', async (req, res) => {
  const slideshow = await Slideshow.find();
  console.log('/slideshow');
  res.send({
    slideshow,
  });
});
seedRouter.get('/devices', async (req, res) => {
  const devices = await Devices.find();
  console.log('/devices');
  res.send({
    devices,
  });
});
seedRouter.get('/createdUsers', async (req, res) => {
  const createdUsers = await User.find();
  console.log('/createdUsers');
  res.send({
    createdUsers,
  });
});
seedRouter.get(`/:artist`, async (req, res) => {
  const artistLink = req.params.artist.replace('_', ' ');
  const artist = await Product.find({ artist: artistLink });
  console.log(req.params.artist);
  console.log(req.params.artist.replace('_', ' '));
  console.log('/:artist');
  res.send({
    artist,
  });
});
export default seedRouter;
