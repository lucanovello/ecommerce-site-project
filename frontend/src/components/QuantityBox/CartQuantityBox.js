import axios from 'axios';
import { useState } from 'react';
import quantityBoxStyle from './QuantityBox.module.css';

const QuantityBox = (props) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  //   props.setQty(props.item.quantity);

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

  window.onmouseup = () => setIsMouseDown(false);
  return (
    <div className={props.quantityBoxContainerStyle}>
      <label htmlFor="qty" className={props.quantityBoxLabelStyle}>
        Qty:
      </label>
      <div className={quantityBoxStyle.quantityBoxInputContainer}>
        <button
          className={`
          ${quantityBoxStyle.quantityBoxInputButtonMinus}
           ${
             isMouseDown
               ? quantityBoxStyle.quantityBoxInputButtonHover
               : quantityBoxStyle.quantityBoxInputButton
           }`}
          onMouseDown={() => {
            if (props.value > 1) {
              setIsMouseDown(true);
              updateCartHandler(props.item, props.value - 1);
              props.setQty(props.value - 1);
            }
          }}
        >
          -
        </button>
        <input
          type="number"
          id="qty"
          value={props.value}
          placeholder="1"
          min={1}
          max={999}
          step={1}
          className={`${quantityBoxStyle.quantityBoxInput} ${quantityBoxStyle.removeArrows}`}
          disabled
        />
        <button
          className={`${
            isMouseDown
              ? quantityBoxStyle.quantityBoxInputButtonHover
              : quantityBoxStyle.quantityBoxInputButton
          } ${quantityBoxStyle.quantityBoxInputButtonPlus}`}
          onMouseDown={(e) => {
            if (props.value < props.item.quantityInStock) {
              updateCartHandler(props.item, props.value + 1);
              props.setQty(props.value + 1);
            }
          }}
        >
          +
        </button>
      </div>
      {props.children}
    </div>
  );
};

export default QuantityBox;
