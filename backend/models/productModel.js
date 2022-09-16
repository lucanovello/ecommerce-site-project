import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true },
    sku: { type: String, required: true },
    name: { type: String, required: true },
    artist: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: Number, required: true },
    nationality: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    image2: { type: String, required: false },
    image3: { type: String, required: false },
    price: { type: Number, required: true },
    tags: { type: String, required: false },
    rating: { type: Number, required: false },
    numReviews: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
