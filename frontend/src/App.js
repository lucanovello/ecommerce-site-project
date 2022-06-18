import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home.js';
import Products from './pages/Products/Products.js';
import ProductScreen from './pages/ProductScreen/ProductScreen.js';
import app from './App.module.css';

function App() {
  return (
    <main className={app.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductScreen />} />
      </Routes>
    </main>
  );
}

export default App;
