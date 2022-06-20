import featuredItems from './FeaturedItems.module.css';
import Product from '../Product/Product';
import LoadingBox from '../LoadingBox/LoadingBox';
import ErrorBox from '../ErrorBox/ErrorBox';
import { useEffect, useReducer } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function FeaturedItems(props) {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/data');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data.products });
        console.log(result.data);
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
        console.log('FETCH_FAIL');
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <ErrorBox error={error} />
  ) : (
    <section className={featuredItems.featuredItemsContainer}>
      <h2 className={featuredItems.featuredItemsMainTitle}>
        {props.mainTitle}
      </h2>
      <div className={featuredItems.featuredItemsImgContainer}>
        {products.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>
    </section>
  );
}

export default FeaturedItems;
