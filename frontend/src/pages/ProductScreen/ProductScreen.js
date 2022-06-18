import { useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import productScreenStyle from './ProductScreen.module.css';
import FeaturedItems from '../../components/FeaturedItems/FeaturedItems';
import Rating from '../../components/rating/Rating';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        product: action.payload,
        devices: action.payload,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen(props) {
  const params = useParams();
  const { productId } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    devices: [],
    product: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/${productId}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
        console.log('fail');
      }
    };
    fetchData();
  }, [productId]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className={productScreenStyle.productScreenContainer}>
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
            <div className={productScreenStyle.productQuantityContainer}>
              <label
                htmlFor="quantity"
                className={productScreenStyle.productQuantityLabel}
              >
                Qty:
              </label>
              <input
                type="number"
                id="quantity"
                placeholder="1"
                min={1}
                className={productScreenStyle.productQuantity}
              />
            </div>
            <div className={productScreenStyle.productDeviceContainer}>
              <label
                htmlFor="device"
                className={productScreenStyle.productDeviceLabel}
              >
                Device:<span>*</span>
              </label>
              <select
                name="device"
                id="device"
                className={productScreenStyle.productDevice}
                required
                defaultValue={'------ Please choose an option ------'}
              >
                <option
                  value="------ Please choose an option ------"
                  className={productScreenStyle.productDeviceMainTitle}
                  disabled
                  hidden
                >
                  ------ Please choose an option ------
                </option>

                <optgroup
                  label="------ Apple ------"
                  className={productScreenStyle.productDeviceTitle}
                />
                <option
                  value="iPhone 13 Pro Max"
                  className={productScreenStyle.productDeviceOption}
                >
                  iPhone 13 Pro Max
                </option>
                <option
                  value="iPhone 13 Pro"
                  className={productScreenStyle.productDeviceOption}
                >
                  iPhone 13 Pro
                </option>
                <option
                  value="iPhone 13"
                  className={productScreenStyle.productDeviceOption}
                >
                  iPhone 13
                </option>
                <option
                  value="iPhone 13 Mini"
                  className={productScreenStyle.productDeviceOption}
                >
                  iPhone 13 Mini
                </option>
                <option
                  value="iPhone SE"
                  className={productScreenStyle.productDeviceOption}
                >
                  iPhone SE
                </option>
                <option
                  value="iPhone 12 Pro Max"
                  className={productScreenStyle.productDeviceOption}
                >
                  iPhone 12 Pro Max
                </option>
                <option
                  value="iPhone 12 Pro"
                  className={productScreenStyle.productDeviceOption}
                >
                  iPhone 12 Pro
                </option>
                <option
                  value="iPhone 12"
                  className={productScreenStyle.productDeviceOption}
                >
                  iPhone 12
                </option>
                <option
                  value="iPhone 12 Mini"
                  className={productScreenStyle.productDeviceOption}
                >
                  iPhone 12 Mini
                </option>

                <optgroup
                  label="------ Samsung ------"
                  className={productScreenStyle.productDeviceTitle}
                />
                <option
                  value="Samsung Galaxy S22 Ultra"
                  className={productScreenStyle.productDeviceOption}
                >
                  Samsung Galaxy S22 Ultra
                </option>
                <option
                  value="Samsung Galaxy S22+"
                  className={productScreenStyle.productDeviceOption}
                >
                  Samsung Galaxy S22+
                </option>
                <option
                  value="Samsung Galaxy S22"
                  className={productScreenStyle.productDeviceOption}
                >
                  Samsung Galaxy S22
                </option>
                <option
                  value="Samsung Galaxy S21 FE 5G"
                  className={productScreenStyle.productDeviceOption}
                >
                  Samsung Galaxy S21 FE 5G
                </option>
                <option
                  value="Samsung Galaxy S21 Ultra 5G"
                  className={productScreenStyle.productDeviceOption}
                >
                  Samsung Galaxy S21 Ultra 5G
                </option>
                <option
                  value="Samsung Galaxy S21 5G"
                  className={productScreenStyle.productDeviceOption}
                >
                  Samsung Galaxy S21 5G
                </option>

                <optgroup
                  label="------ Google ------"
                  className={productScreenStyle.productDeviceTitle}
                />
                <option
                  value="Google Pixel 6 Pro"
                  className={productScreenStyle.productDeviceOption}
                >
                  Google Pixel 6 Pro
                </option>
                <option
                  value="Google Pixel 6"
                  className={productScreenStyle.productDeviceOption}
                >
                  Google Pixel 6
                </option>
                <option
                  value="Google Pixel 5 Pro"
                  className={productScreenStyle.productDeviceOption}
                >
                  Google Pixel 5 Pro
                </option>
                <option
                  value="Google Pixel 5"
                  className={productScreenStyle.productDeviceOption}
                >
                  Google Pixel 5
                </option>
              </select>
            </div>
          </div>
          <h5 className={productScreenStyle.productPrice}>${product.price}</h5>
          <button className={productScreenStyle.productButton}>
            Add To Cart
          </button>
        </div>
      </div>
      <FeaturedItems mainTitle="Related Items" />
    </div>
  );
}

export default ProductScreen;
