import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/data', (req, res) => {
  res.send(data);
});
app.get(`/api/data/products/:productId`, (req, res) => {
  const product = data.products.find((x) => x.id === req.params.productId);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
