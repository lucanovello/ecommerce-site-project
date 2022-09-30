import axios from 'axios';
import React, { Fragment, useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import ErrorBox from '../../components/ErrorBox/ErrorBox';
import FeaturedItems from '../../components/FeaturedItems/FeaturedItems';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import Product from '../../components/Product/Product';
import QueryMenu from '../../components/QueryMenu/QueryMenu';
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
  const [currentQuery, setCurrentQuery] = useState();
  const [currentTitle, setCurrentTitle] = useState('All');

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = {
    artist: searchParams.get('artist')
      ? searchParams.get('artist').toLowerCase()
      : '',
    genre: searchParams.get('genre')
      ? searchParams.get('genre').toLowerCase()
      : '',
    nationality: searchParams.get('nationality')
      ? searchParams.get('nationality').toLowerCase()
      : '',
    century: searchParams.get('century')
      ? searchParams.get('century').toLowerCase()
      : '',
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/all`);
        setCurrentQuery(result.data.products);
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

  useEffect(() => {
    const getResults = (key, value) => {
      const getResultsArr = [];
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product[key].toLowerCase() === value.toLowerCase())
          getResultsArr.push(product);
      }
      setCurrentTitle(value.toLowerCase());
      setCurrentQuery(getResultsArr);
    };

    queryParams.artist
      ? getResults('artist', queryParams.artist)
      : queryParams.genre
      ? getResults('category', queryParams.genre)
      : queryParams.nationality
      ? getResults('nationality', queryParams.nationality)
      : queryParams.century
      ? getResults('century', queryParams.century)
      : setCurrentQuery(products.slice(0, 35));
  }, [
    queryParams.artist,
    queryParams.genre,
    queryParams.nationality,
    queryParams.century,
    products,
  ]);

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

      <div className={productsScreenStyle.productsScreenInnerContainer}>
        <QueryMenu
          content={{ artists, categories, nationalities }}
          useSearchParams={{ setSearchParams }}
          queryParams={queryParams}
        />
        {/* RESULTS INNER SECTION */}
        <div className={productsScreenStyle.productsScreenResultsContainer}>
          <div className={productsScreenStyle.productsScreenResultsTextWrapper}>
            <h2
              className={productsScreenStyle.productsScreenResultsTitle}
            >{`${currentTitle}`}</h2>
            {currentTitle === queryParams.artist ? (
              <p
                className={productsScreenStyle.productsScreenResultsDescription}
              >
                {currentQuery[0].description}
              </p>
            ) : null}
          </div>
          <div className={productsScreenStyle.productWrapper}>
            {currentQuery.slice(0, 35).map((product) => (
              <Product product={product} key={product._id}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsScreen;
