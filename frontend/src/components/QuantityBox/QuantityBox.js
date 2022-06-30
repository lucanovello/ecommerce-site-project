import { useState } from 'react';
import quantityBoxStyle from './QuantityBox.module.css';

const QuantityBox = (props) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const onClickMinusHandler = () => {
    props.value > 1 && props.setQty(props.value - 1);
  };
  const onClickPlusHandler = () => {
    props.value >= props.max
      ? props.setQty(props.value)
      : props.setQty(props.value + 1);
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
          onMouseDown={(e) => {
            props.value > 1 && setIsMouseDown(true);
            onClickMinusHandler();
            console.log(e);
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
            setIsMouseDown(true);
            onClickPlusHandler();
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
