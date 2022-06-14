import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Slideshow from './components/slideshow/Slideshow';
import FeaturedItems from './components/featuredItems/FeaturedItems';
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import Product from './pages/Product.js';
import './App.css';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/products" element={<Products />} exact />
        <Route path="/products/:productId" element={<Product />} exact />
      </Routes>
    </main>
  );
}

export default App;
