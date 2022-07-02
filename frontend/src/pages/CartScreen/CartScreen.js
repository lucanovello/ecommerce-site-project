import { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FeaturedItems from '../../components/FeaturedItems/FeaturedItems';
import { Store } from '../../Store';
import CartItem from './CartItem';
import cartScreenStyle from './CartScreen.module.css';

const CartScreen = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const checkoutHandler = () => {
    navigate('signin?redirect=/shipping');
  };

  return (
    <Fragment>
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
                No items in cart.
              </li>
            )}
          </ul>
          <div className={cartScreenStyle.cartScreenTotal}>
            <h2>
              Total: (
              {cart.cartItems
                ? cart.cartItems.reduce((a, c) => a + c.quantity, 0)
                : 0}{' '}
              items) : $
              {cart.cartItems
                ? cart.cartItems
                    .reduce((a, c) => a + c.price * c.quantity, 0)
                    .toFixed(2)
                : (0).toFixed(2)}
            </h2>
            <button
              type="button"
              className={cartScreenStyle.cartScreenCheckoutBtn}
              onClick={checkoutHandler}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <FeaturedItems mainTitle="Related Items" />
    </Fragment>
  );
};

export default CartScreen;
