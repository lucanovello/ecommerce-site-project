import { Route, Routes, useHistory, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home.js';
import ProductScreen from './pages/ProductScreen/ProductScreen.js';
import app from './App.module.css';
import { useContext, useEffect, useReducer } from 'react';
import CartScreen from './pages/CartScreen/CartScreen';
import Footer from './components/Footer/Footer';
import SignInScreen from './pages/SignInScreen/SignInScreen';
import { Store } from './Store';
import ShippingScreen from './pages/ShippingScreen/ShippingScreen';
import SignUpScreen from './pages/SignInScreen/SignUpScreen';
import PaymentScreen from './pages/PaymentScreen/PaymentScreen';
import PlaceOrderScreen from './pages/PlaceOrderScreen/PlaceOrderScreen';
import { getError } from './utils';
import axios from 'axios';
import OrderDetailsScreen from './pages/OrderDetailsScreen/OrderDetailsScreen';
import OrderHistoryScreen from './pages/OrderHistoryScreen/OrderHistoryScreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const location = useLocation();

  return (
    <main className={app.App}>
      <ToastContainer position="bottom-center" limit={1} />
      <Navbar userInfo={userInfo} />
      <Routes>
        <Route
          path="/"
          element={
            <Home headerTitle={`Luca Novello | Home`} location={location} />
          }
          exact
        />

        <Route
          path="/products/:slug"
          element={
            <ProductScreen ctxDispatch={ctxDispatch} location={location} />
          }
        />
        <Route
          path="/cart"
          element={
            <CartScreen
              cart={cart}
              ctxDispatch={ctxDispatch}
              headerTitle={`Cart`}
              location={location}
            />
          }
          exact
        />
        <Route path="/signup" element={<SignUpScreen />} exact />
        <Route path="/signin" element={<SignInScreen />} exact />
        <Route
          path="/shipping"
          element={
            <ShippingScreen
              cart={cart}
              ctxDispatch={ctxDispatch}
              headerTitle={`Shipping Address`}
              location={location}
            />
          }
          exact
        />
        <Route
          path="/payment"
          element={
            <PaymentScreen headerTitle={`Payment Method`} location={location} />
          }
          exact
        />
        <Route
          path="/placeorder"
          element={
            <PlaceOrderScreen
              headerTitle={`Preview Order`}
              location={location}
            />
          }
          exact
        />
        <Route
          path="/order/:id"
          element={
            <OrderDetailsScreen
              headerTitle={`Order Details`}
              location={location}
            />
          }
          exact
        />
        <Route
          path="/orderhistory"
          element={
            <OrderHistoryScreen
              headerTitle={`Order History`}
              location={location}
            />
          }
          exact
        />
      </Routes>
      <Footer location={location} />
    </main>
  );
}

export default App;
