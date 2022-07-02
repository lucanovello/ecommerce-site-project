import quantityBoxStyle from './QuantityBox.module.css';

const QuantityBox = (props) => {
  return (
    <div className={props.quantityBoxContainerStyle}>
      <label htmlFor="qty" className={props.quantityBoxLabelStyle}>
        Qty:
      </label>
      <div className={quantityBoxStyle.quantityBoxInputContainer}>
        <button
          type="button"
          className={`${
            props.value === 1
              ? quantityBoxStyle.quantityBoxInputButtonDisabled
              : quantityBoxStyle.quantityBoxInputButtonActive
          } 
          ${quantityBoxStyle.quantityBoxInputButtonMinus}
           ${quantityBoxStyle.quantityBoxInputButton}`}
          onMouseDown={() => {
            props.setQty(props.value - 1);
            props.ctxDispatch &&
              props.updateCartHandler(props.item, props.value - 1);
          }}
          disabled={props.value <= 1}
        >
          -
        </button>
        <input
          type="number"
          id="qty"
          value={props.item.quantityInStock > 0 ? props.value : 0}
          placeholder="1"
          min={1}
          max={999}
          step={1}
          className={`${quantityBoxStyle.quantityBoxInput} ${quantityBoxStyle.removeArrows}`}
          disabled
        />
        <button
          type="button"
          className={`${
            props.value >= props.item.quantityInStock
              ? quantityBoxStyle.quantityBoxInputButtonDisabled
              : quantityBoxStyle.quantityBoxInputButtonActive
          } ${quantityBoxStyle.quantityBoxInputButton} ${
            quantityBoxStyle.quantityBoxInputButtonPlus
          }`}
          onMouseDown={() => {
            props.setQty(props.value + 1);
            props.ctxDispatch &&
              props.updateCartHandler(props.item, props.value + 1);
          }}
          disabled={props.value >= props.item.quantityInStock}
        >
          +
        </button>
      </div>
      {props.children}
    </div>
  );
};

export default QuantityBox;
