import express from 'express';
import data from './data.js';

const app = express();

app.get('/api', (req, res) => {
  res.send(data);
});
app.get(`/api/products/:slug`, (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send({
      product,
      devices: data.devices,
    });
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
