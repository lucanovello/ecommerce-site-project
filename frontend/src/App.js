import { Route, Routes, useLocation } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home.js';
import ProductScreen from './pages/ProductScreen/ProductScreen.js';
import ProductsScreen from './pages/ProductsScreen/ProductsScreen.js';
import appStyle from './App.module.css';
import { useContext } from 'react';
import CartScreen from './pages/CartScreen/CartScreen';
import Footer from './components/Footer/Footer';
import SignInScreen from './pages/SignInScreen/SignInScreen';
import { Store } from './Store';
import ShippingScreen from './pages/ShippingScreen/ShippingScreen';
import SignUpScreen from './pages/SignInScreen/SignUpScreen';
import PaymentScreen from './pages/PaymentScreen/PaymentScreen';
import PlaceOrderScreen from './pages/PlaceOrderScreen/PlaceOrderScreen';
import OrderDetailsScreen from './pages/OrderDetailsScreen/OrderDetailsScreen';
import OrderHistoryScreen from './pages/OrderHistoryScreen/OrderHistoryScreen';
import ProfileScreen from './pages/ProfileScreen/ProfileScreen';

function App() {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;
    const location = useLocation();

    return (
        <div className={appStyle.App}>
            <ToastContainer
                position="bottom-center"
                transition={Flip}
                limit={1}
                className={appStyle.toastContainer}
                toastClassName={appStyle.toast}
                bodyClassName={appStyle.toastBody}
                progressClassName={appStyle.toastProgress}
                pauseOnHover={false}
                autoClose={700}
                newestOnTop={true}
                closeButton={false}
                draggable={true}
            />
            <Navbar userInfo={userInfo} />

            <main className={appStyle.AppBodyContainer}>
                <Routes>
                    <Route path="/" element={<Home headerTitle={`Luca Novello | Home`} />} exact />

                    <Route path="/products" element={<ProductsScreen />} exact />
                    <Route
                        path="/products/:slug"
                        element={<ProductScreen ctxDispatch={ctxDispatch} />}
                        exact
                    />
                    <Route path="/cart" element={<CartScreen />} exact />
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
                            <PlaceOrderScreen headerTitle={`Preview Order`} location={location} />
                        }
                        exact
                    />
                    <Route
                        path="/order/:id"
                        element={
                            <OrderDetailsScreen headerTitle={`Order Details`} location={location} />
                        }
                        exact
                    />
                    <Route
                        path="/orderhistory"
                        element={
                            <OrderHistoryScreen headerTitle={`Order History`} location={location} />
                        }
                        exact
                    />
                    <Route
                        path="/profile"
                        element={<ProfileScreen headerTitle={`Profile`} location={location} />}
                        exact
                    />
                </Routes>
            </main>
            <Footer location={location} />
        </div>
    );
}

export default App;
