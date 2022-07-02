import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import QuantityBox from '../../components/QuantityBox/QuantityBox';
import cartScreenStyle from './CartScreen.module.css';

const CartItem = (props) => {
  const [cartQty, setCartQty] = useState(props.item.quantity);

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${props.item.slug}`);
    if (data.quantityInStock < quantity) {
      window.alert('Sorry, Product is out of stock');
      return;
    }
    props.ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...props.item, quantity },
    });
  };

  const removeItemHandler = (item) => {
    props.ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

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
          <p className={cartScreenStyle.cartScreenItemDetailsDevice}>
            {props.item.device} phone case
          </p>
          <QuantityBox
            value={cartQty}
            setQty={setCartQty}
            item={props.item}
            max={props.item.quantityInStock}
            key={props.item._id}
            ctxDispatch={props.ctxDispatch}
            updateCartHandler={updateCartHandler}
            quantityBoxContainerStyle={
              cartScreenStyle.cartScreenItemDetailsQtyContainer
            }
            quantityBoxLabelStyle={cartScreenStyle.cartScreenItemDetailsQty}
            quantityBoxInputStyle={
              cartScreenStyle.cartScreenItemDetailsQtyInput
            }
          >
            <button
              className={cartScreenStyle.cartScreenItemDelete}
              onClick={() => removeItemHandler(props.item)}
            >
              {'  Delete'}
            </button>
          </QuantityBox>
        </div>
        <div className={cartScreenStyle.cartScreenItemDetail}>
          <p className={cartScreenStyle.cartScreenItemDetailsPrice}>
            ${props.item.price.toFixed(2)}
          </p>
          <p className={cartScreenStyle.cartScreenItemDetailsQtyInStock}>
            {props.item.quantityInStock} in stock
          </p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
