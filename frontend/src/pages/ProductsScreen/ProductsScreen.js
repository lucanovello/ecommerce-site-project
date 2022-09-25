import axios from 'axios';
import React, { Fragment, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ErrorBox from '../../components/ErrorBox/ErrorBox';
import FeaturedItems from '../../components/FeaturedItems/FeaturedItems';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import Product from '../../components/Product/Product';
import { getError } from '../../utils';
import productsScreenStyle from './ProductsScreen.module.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        products: action.payload.products,
        artists: action.payload.artist,
        categories: action.payload.category,
        nationalities: action.payload.nationality,
        loading: false,
        error: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductsScreen(props) {
  const [
    { loading, error, products, artists, categories, nationalities },
    dispatch,
  ] = useReducer(reducer, {
    products: [],
    artists: [],
    categories: [],
    nationalities: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/`);
        console.log(result);
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: result.data,
        });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <Fragment>
      <ErrorBox error={error} />
      <FeaturedItems mainTitle="Related Items" />
    </Fragment>
  ) : (
    <div className={productsScreenStyle.productsScreenOuterContainer}>
      <Helmet>
        <title>{props.headerTitle ? props.headerTitle : 'Products Page'}</title>
      </Helmet>
      {/* MAIN TITLE */}
      {/* <div className={productsScreenStyle.productsScreenMainTitle}>SEARCH</div> */}

      {/* SEARCH OUTER SECTION */}
      <div className={productsScreenStyle.productsScreenInnerContainer}>
        {/* QUERY INNER SECTION */}
        <div className={productsScreenStyle.productsScreenQueryContainer}>
          <h4 className={productsScreenStyle.productsScreenQueryTitle}>
            Artists
          </h4>
          <ul className={productsScreenStyle.productsScreenQueryListWrapper}>
            {artists.slice(0, 30).map((artist, index) => (
              <li
                className={productsScreenStyle.productsScreenQueryListItem}
                key={index}
              >
                <Link
                  className={productsScreenStyle.navbarMenuLink}
                  to="/products"
                >
                  {artist}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className={productsScreenStyle.productsScreenQueryTitle}>
            Categories
          </h4>
          <ul className={productsScreenStyle.productsScreenQueryListWrapper}>
            {categories.map((category, index) => (
              <li
                className={productsScreenStyle.productsScreenQueryListItem}
                key={index}
              >
                {' '}
                <Link
                  className={productsScreenStyle.navbarMenuLink}
                  to="/products"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className={productsScreenStyle.productsScreenQueryTitle}>
            Nationality
          </h4>
          <ul className={productsScreenStyle.productsScreenQueryListWrapper}>
            {nationalities.map((nationality, index) => (
              <li
                className={productsScreenStyle.productsScreenQueryListItem}
                key={index}
              >
                <Link
                  className={productsScreenStyle.navbarMenuLink}
                  to="/products"
                >
                  {nationality}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RESULTS INNER SECTION */}
        <div className={productsScreenStyle.productsScreenResultsContainer}>
          <div className={productsScreenStyle.productWrapper}>
            {products.slice(0, 30).map((product) => (
              <Product product={product} key={product._id}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsScreen;
