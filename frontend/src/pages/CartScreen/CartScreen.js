import { Fragment, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import FeaturedItems from '../../components/FeaturedItems/FeaturedItems';
import { Store } from '../../Store';
import CartItem from './CartItem';
import cartScreenStyle from './CartScreen.module.css';

const CartScreen = (props) => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const checkoutHandler = () => {
    navigate('/signin?redirect=/shipping');
  };

  return (
    <Fragment>
      <Helmet>
        <title>
          {props.headerTitle
            ? props.headerTitle
            : 'Luca Novello | Ecommerce Website'}
        </title>
      </Helmet>
      <div className={cartScreenStyle.cartScreenContainer}>
        <h2 className={cartScreenStyle.cartScreenTitle}>Shopping Cart</h2>
        <div className={cartScreenStyle.cartScreenItemsContainer}>
          <ul className={cartScreenStyle.cartScreenItems}>
            {cart.cartItems.length > 0 ? (
              cart.cartItems.map((item, index) => (
                <CartItem item={item} key={index} ctxDispatch={ctxDispatch} />
              ))
            ) : (
              <li className={cartScreenStyle.cartScreenItemNone}>
                {'Your cart is empty.'}
              </li>
            )}
          </ul>
          <div className={cartScreenStyle.cartScreenTotal}>
            <h2>
              {'Subtotal:'}
              <p>
                {cart.cartItems
                  ? `$${cart.cartItems
                      .reduce((a, c) => a + c.price * c.quantity, 0)
                      .toFixed(2)}`
                  : (0).toFixed(2)}
              </p>
            </h2>
            <button
              type="button"
              className={`${
                cart.cartItems.length > 0
                  ? cartScreenStyle.cartScreenCheckoutBtnActive
                  : cartScreenStyle.cartScreenCheckoutBtnDisabled
              } ${cartScreenStyle.cartScreenCheckoutBtn}`}
              onClick={checkoutHandler}
              disabled={cart.cartItems.length < 1}
            >
              {cart.cartItems.length > 0
                ? `Proceed to Checkout`
                : 'Cart is Empty'}
              <p>
                {`(${cart.cartItems.reduce(
                  (a, c) => a + c.quantity,
                  0
                )} items)`}
              </p>
            </button>
          </div>
        </div>
      </div>
      <FeaturedItems mainTitle="Related Items" />
    </Fragment>
  );
};

export default CartScreen;
