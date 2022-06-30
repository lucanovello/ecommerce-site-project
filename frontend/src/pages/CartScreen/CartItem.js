import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartQuantityBox from '../../components/QuantityBox/CartQuantityBox';
import cartScreenStyle from './CartScreen.module.css';

const CartItem = (props) => {
  const [cartQty, setCartQty] = useState(props.item.quantity);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    setSubTotal(cartQty * props.item.price);
  }, [cartQty, props.item.price]);

  return (
    <li className={cartScreenStyle.cartScreenItem} key={props.item._id}>
      <img
        src={props.item.image}
        alt={props.item.name}
        className={cartScreenStyle.cartScreenItemImage}
      />
      <div className={cartScreenStyle.cartScreenItemDetails}>
        <div me={cartScreenStyle.cartScreenItemDetail}>
          <Link to={`/products/${props.item.slug}`}>
            <h4 className={cartScreenStyle.cartScreenItemDetailsName}>
              {props.item.name}
            </h4>
          </Link>
          <p className={cartScreenStyle.cartScreenItemDetailsArtist}>
            {props.item.artist}
          </p>
          <CartQuantityBox
            value={cartQty}
            setQty={setCartQty}
            item={props.item}
            max={props.item.quantityInStock}
            key={props.item._id}
            ctxDispatch={props.ctxDispatch}
            quantityBoxContainerStyle={
              cartScreenStyle.cartScreenItemDetailsQtyContainer
            }
            quantityBoxLabelStyle={cartScreenStyle.cartScreenItemDetailsQty}
            quantityBoxInputStyle={
              cartScreenStyle.cartScreenItemDetailsQtyInput
            }
          >
            <button className={cartScreenStyle.cartScreenItemDelete}>
              {'  Delete'}
            </button>
          </CartQuantityBox>
        </div>
        <div className={cartScreenStyle.cartScreenItemDetail}>
          <p className={cartScreenStyle.cartScreenItemDetailsPrice}>
            ${subTotal.toFixed(2)}
          </p>
          <p className={cartScreenStyle.cartScreenItemDetailsQtyInStock}>
            {props.item.quantityInStock - cartQty} Left in stock
          </p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
