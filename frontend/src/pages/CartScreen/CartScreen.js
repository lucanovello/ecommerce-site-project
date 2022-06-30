import { Fragment, useContext } from 'react';
import FeaturedItems from '../../components/FeaturedItems/FeaturedItems';
import { Store } from '../../Store';
import CartItem from './CartItem';
import cartScreenStyle from './CartScreen.module.css';

const CartScreen = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  return (
    <Fragment>
      <div className={cartScreenStyle.cartScreenContainer}>
        <h2 className={cartScreenStyle.cartScreenTitle}>Shopping Cart</h2>
        <div className={cartScreenStyle.cartScreenItemsContainer}>
          <ul className={cartScreenStyle.cartScreenItems}>
            {cart.cartItems.length > 0 ? (
              cart.cartItems.map((item) => (
                <CartItem
                  item={item}
                  key={item._id}
                  ctxDispatch={ctxDispatch}
                />
              ))
            ) : (
              <li className={cartScreenStyle.cartScreenItemNone}>
                No items in cart.
              </li>
            )}
          </ul>
          <div className={cartScreenStyle.cartScreenTotal}>
            <h2>
              Total: ({cart.cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
              items) : $
              {cart.cartItems
                .reduce((a, c) => a + c.price * c.quantity, 0)
                .toFixed(2)}
            </h2>
            <button className={cartScreenStyle.cartScreenCheckoutBtn}>
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
