import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home.js';
import Products from './pages/Products/Products.js';
import ProductScreen from './pages/ProductScreen/ProductScreen.js';
import app from './App.module.css';
import { useEffect, useReducer } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, data: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function App() {
  const [{ loading, error, data }, dispatch] = useReducer(reducer, {
    data: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/data');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        console.log(result.data);
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
        console.log('FETCH_FAIL');
      }
    };
    fetchData();
  }, []);

  return (
    <main className={app.App}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home data={data} loading={loading} error={error} />}
          exact
        />
        <Route
          path="/products"
          element={<Products data={data} loading={loading} error={error} />}
        />
        <Route
          path="/products/:productId"
          element={
            <ProductScreen data={data} loading={loading} error={error} />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
