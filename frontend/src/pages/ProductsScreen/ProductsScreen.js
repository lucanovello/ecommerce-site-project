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
  const [searchParams, setSearchParams] = useSearchParams({ sort: 'featured' });
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
  const [currentQuery, setCurrentQuery] = useState([]);
  const [currentTitle, setCurrentTitle] = useState('All');
  const [currentSort, setCurrentSort] = useState(
    searchParams.get('sort') ? searchParams.get('sort') : 'featured'
  );

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
  };
  const sortParams = searchParams.get('sort');

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
    const finalQuery = {};

    const getResults = (key, value) => {
      const getResultsArr = [];
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product[key].toLowerCase() === value.toLowerCase())
          getResultsArr.push(product);
      }
      const sortedResults = getResultsArr.sort((a, b) => {
        const itemA = a[currentSort];
        const itemB = b[currentSort];
        if (itemA < itemB) {
          return currentSort === 'rating' ? 1 : -1;
        } else {
          return currentSort === 'rating' ? -1 : 1;
        }
      });

      setCurrentTitle(value.toLowerCase());
      setCurrentQuery(sortedResults);
    };

    queryParams.artist
      ? getResults('artist', queryParams.artist)
      : queryParams.genre
      ? getResults('category', queryParams.genre)
      : queryParams.nationality
      ? getResults('nationality', queryParams.nationality)
      : setCurrentQuery(
          products
            .sort((a, b) => {
              const itemA = a[currentSort];
              const itemB = b[currentSort];
              if (itemA < itemB) {
                return currentSort === 'rating' ? 1 : -1;
              } else {
                return currentSort === 'rating' ? -1 : 1;
              }
            })
            .slice(0, 70)
        );

    queryParams.artist && (finalQuery.artist = queryParams.artist);
    queryParams.genre && (finalQuery.genre = queryParams.genre);
    queryParams.nationality &&
      (finalQuery.nationality = queryParams.nationality);
    sortParams
      ? (finalQuery.sort = currentSort)
      : (finalQuery.sort = 'featured');

    console.log(finalQuery);
    setSearchParams(finalQuery);
  }, [
    queryParams.artist,
    queryParams.genre,
    queryParams.nationality,
    currentSort,
    sortParams,
    products,
    setSearchParams,
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
            <div
              className={
                productsScreenStyle.productsScreenResultsTextTitleSortWrapper
              }
            >
              <h2
                className={productsScreenStyle.productsScreenResultsTitle}
              >{`${currentTitle}`}</h2>
              <form className={productsScreenStyle.sortContainer}>
                <select
                  className={productsScreenStyle.sortSelect}
                  name="sort"
                  id="sort"
                  onChange={(e) => setCurrentSort(e.target.value.toLowerCase())}
                  value={sortParams ? `Sort by: ${sortParams}` : 'Sort by: '}
                >
                  <option
                    className={productsScreenStyle.sortOption}
                    value={sortParams ? `Sort by: ${sortParams}` : 'Sort by: '}
                    selected
                    disabled
                    hidden
                  >
                    {sortParams ? `Sort by: ${sortParams}` : 'Sort by: '}
                  </option>
                  <option
                    className={productsScreenStyle.sortOption}
                    value="featured"
                  >
                    Featured
                  </option>
                  <option
                    className={productsScreenStyle.sortOption}
                    value="name"
                  >
                    Name
                  </option>
                  <option
                    className={productsScreenStyle.sortOption}
                    value="artist"
                  >
                    Artist
                  </option>
                  <option
                    className={productsScreenStyle.sortOption}
                    value="category"
                  >
                    Genre
                  </option>
                  <option
                    className={productsScreenStyle.sortOption}
                    value="year"
                  >
                    Year
                  </option>
                  <option
                    className={productsScreenStyle.sortOption}
                    value="rating"
                  >
                    Avg Rating
                  </option>
                  <option
                    className={productsScreenStyle.sortOption}
                    value="price"
                  >
                    Price
                  </option>
                </select>
              </form>
            </div>
            {currentTitle === queryParams.artist ? (
              <p
                className={productsScreenStyle.productsScreenResultsDescription}
              >
                {currentQuery[0].description}
              </p>
            ) : null}
          </div>
          <div className={productsScreenStyle.productWrapper}>
            {currentQuery.slice(0, 70).map((product) => (
              <Product product={product} key={product._id}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsScreen;
