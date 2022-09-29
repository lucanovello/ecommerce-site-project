import express from 'express';
import Product from '../models/productModel.js';
import Category from '../models/categoryModel.js';

const categoryRouter = express.Router();

categoryRouter.get('/all', async (req, res) => {
  const category = await Category.find();
  console.log('/categories/all');
  res.send({ category });
});

categoryRouter.get(`/featuredCategory`, async (req, res) => {
  console.log(req.query.size);
  const category = await Category.aggregate([
    { $group: { _id: '$name' } },
    { $sample: { size: parseInt(req.query.size) } },
  ]);
  const results = [];

  for (let i = 0; i < category.length; i++) {
    const cat = await category[i]._id;

    const item = await Product.aggregate([
      { $match: { category: cat } },
      {
        $group: {
          _id: '$_id',
          name: { $first: '$name' },
          artist: { $first: '$artist' },
          category: { $first: '$category' },
          slug: { $first: '$slug' },
          image: { $first: '$image3' },
        },
      },
      { $sample: { size: 4 } },
    ]);
    results.push(item);
  }

  console.log('/categories/featuredCategory');
  res.send({
    results,
  });
});

export default categoryRouter;
