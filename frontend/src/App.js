import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home.js';
import Products from './pages/Products/Products.js';
import ProductScreen from './pages/ProductScreen/ProductScreen.js';
import app from './App.module.css';
import { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import CartScreen from './pages/CartScreen/CartScreen';
import Footer from './components/Footer/Footer';
import SignInScreen from './pages/SignInScreen/SignInScreen';
import { Store } from './Store';
import ShippingScreen from './pages/ShippingScreen/ShippingScreen';
import SignUpScreen from './pages/SignInScreen/SignUpScreen';

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
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const [{ loading, error, data }, dispatch] = useReducer(reducer, {
    data: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/seed');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <main className={app.App}>
      <ToastContainer position="bottom-center" limit={1} />
      <Navbar userInfo={userInfo} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data.createdProducts}
              loading={loading}
              error={error}
              className={app.contentMargin}
              headerTitle={`Luca Novello | This is a homepage ;D`}
            />
          }
          exact
        />
        <Route
          path="/products"
          element={
            <Products
              data={data.createdProducts}
              loading={loading}
              error={error}
              className={app.contentMargin}
              headerTitle={`Luca Novello | This is a products page ;D`}
            />
          }
        />
        <Route
          path="/products/:slug"
          element={
            <ProductScreen
              data={data}
              loading={loading}
              error={error}
              className={app.contentMargin}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartScreen
              data={data}
              cart={cart}
              ctxDispatch={ctxDispatch}
              loading={loading}
              error={error}
              className={app.contentMargin}
              headerTitle={`Luca Novello | This is a cart page ;D`}
            />
          }
          exact
        />
        <Route
          path="/signup"
          element={
            <SignUpScreen
              loading={loading}
              error={error}
              className={app.contentMargin}
            />
          }
          exact
        />
        <Route
          path="/signin"
          element={
            <SignInScreen
              loading={loading}
              error={error}
              className={app.contentMargin}
            />
          }
          exact
        />
        <Route
          path="/shipping"
          element={
            <ShippingScreen
              data={data}
              cart={cart}
              ctxDispatch={ctxDispatch}
              loading={loading}
              error={error}
              className={app.contentMargin}
              headerTitle={`Luca Novello | This is a cart page ;D`}
            />
          }
          exact
        />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
