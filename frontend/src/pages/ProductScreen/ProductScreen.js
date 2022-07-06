import {
  useReducer,
  useEffect,
  useContext,
  Fragment,
  useState,
  useRef,
} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import productScreenStyle from './ProductScreen.module.css';
import Rating from '../../components/Rating/Rating';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import ErrorBox from '../../components/ErrorBox/ErrorBox';
import Devices from './Devices';
import { Store } from '../../Store';
import FeaturedItems from '../../components/FeaturedItems/FeaturedItems';
import QuantityBox from '../../components/QuantityBox/QuantityBox';
import { Helmet } from 'react-helmet-async';
import { getError } from '../../utils';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        product: action.payload.product,
        loading: false,
        error: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen(props) {
  const [productQty, setProductQty] = useState(1);
  const [isDeviceValid, setIsDeviceValid] = useState(false);
  const [isSubmitValid, setIsSubmitValid] = useState(false);
  const device = useRef(null);
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/${slug}`);
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: result.data,
        });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
        console.log(err);
      }
    };
    fetchData();
    setProductQty(1);
    setIsDeviceValid(false);
    setIsSubmitValid(false);
  }, [slug]);

  useEffect(() => {
    if (product.quantityInStock > 0 && isDeviceValid) {
      setIsSubmitValid(true);
      return;
    }
    setIsSubmitValid(false);
  }, [product.quantityInStock, isDeviceValid, slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async () => {
    const itemExists = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = itemExists ? itemExists.quantity + productQty : productQty;
    const { data } = await axios.get(`/api/products/${slug}`);
    if (data.quantityInStock < quantity) {
      window.alert('Sorry, product is out of stock');
      return;
    }
    if (!isDeviceValid) {
      window.alert('Please select a device');
      return;
    }

    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: {
        ...product,
        sku: `${product.slug}_${device.current.value
          .replace(/\s+/g, '-')
          .toLowerCase()}`,
        quantity: quantity,
        device: device.current.value,
      },
    });
    setProductQty(1);
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <Fragment>
      <ErrorBox error={error} />
      <FeaturedItems mainTitle="Related Items" />
    </Fragment>
  ) : (
    <div className={productScreenStyle.productScreenContainer}>
      <Helmet>
        <title>{`${product.name} Phone Case`}</title>
      </Helmet>
      <div className={productScreenStyle.productContainer}>
        <img
          className={productScreenStyle.productImage}
          src={product.image}
          alt="product"
        />
        <div className={productScreenStyle.productDetails}>
          <h4 className={productScreenStyle.productTitle}>{product.name}</h4>
          <h5 className={productScreenStyle.productArtist}>{product.artist}</h5>
          <p className={productScreenStyle.productDescription}>
            {product.description}
          </p>
          <Rating
            class={productScreenStyle.productRating}
            rating={product.rating}
            numReviews={product.numReviews}
          />

          <div className={productScreenStyle.productOptionsContainer}>
            <div className={productScreenStyle.productQuantityBoxContainer}>
              <QuantityBox
                value={productQty}
                setQty={setProductQty}
                item={product}
                ctxDispatch={false}
                quantityBoxContainerStyle={
                  productScreenStyle.productQuantityContainer
                }
                quantityBoxLabelStyle={productScreenStyle.productQuantityLabel}
                quantityBoxInputStyle={productScreenStyle.productQuantity}
              />
              <p className={productScreenStyle.productScreenStyleQtyInStock}>
                {product.quantityInStock} in stock
              </p>
            </div>
            <Devices
              devices={props.data.devices}
              className={productScreenStyle.productDeviceContainer}
              refValue={device}
              setIsDeviceValid={setIsDeviceValid}
            />
            <h5 className={productScreenStyle.productPrice}>
              ${product.price}
            </h5>
            <button
              type="button"
              className={`${productScreenStyle.productButton}
              ${
                isSubmitValid
                  ? productScreenStyle.productButtonActive
                  : productScreenStyle.productButtonDisabled
              }`}
              onClick={() => isSubmitValid && addToCartHandler()}
              disabled={!isSubmitValid}
            >
              {product.quantityInStock < 1
                ? 'Out of Stock'
                : !isSubmitValid
                ? 'Please select a device'
                : 'Add To Cart'}
            </button>
          </div>
        </div>
      </div>
      <FeaturedItems mainTitle="Related Items" />
    </div>
  );
}

export default ProductScreen;
