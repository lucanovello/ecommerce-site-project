import React, { useState } from 'react';
import queryMenuStyle from './QueryMenu.module.css';

function QueryMenu(props) {
  const [artistExpand, setArtistExpand] = useState(true);
  const [categoryExpand, setCategoryExpand] = useState(true);
  const [nationalityExpand, setNationalityExpand] = useState(true);

  const { artists, categories, nationalities } = props.content;
  const { setSearchParams } = props.useSearchParams;
  const {
    artist: artistQuery,
    genre: genreQuery,
    nationality: nationalityQuery,
    century: centuryQuery,
  } = props.queryParams;

  console.log(props.queryParams);
  return (
    <div className={queryMenuStyle.queryMenuContainer}>
      <div
        className={queryMenuStyle.queryMenuTitleWrapper}
        onClick={(e) => {
          setArtistExpand(!artistExpand);
        }}
      >
        <h4 className={queryMenuStyle.queryMenuQueryTitle}>Artists</h4>
        <p className={queryMenuStyle.queryMenuQueryExpand}>
          {!artistExpand ? '+' : '-'}
        </p>
      </div>
      <div
        className={`${queryMenuStyle.queryMenuQueryItemsContainer} ${
          !artistExpand && queryMenuStyle.collapse
        }`}
      >
        {}
        {artists.map((artist, index) => (
          <div className={queryMenuStyle.queryMenuQueryItem} key={index}>
            <input
              type="radio"
              className={queryMenuStyle.queryMenuQueryCheckbox}
              id={artist}
              name="filter"
              data-category="artist"
              onClick={(e) => {
                setSearchParams({ artist: e.target.id.toLowerCase() });
              }}
              defaultChecked={artist && artist === artistQuery ? true : false}
            />

            <label
              htmlFor={artist}
              className={queryMenuStyle.queryMenuQueryCheckboxLabel}
            >
              {artist}
            </label>
          </div>
        ))}
      </div>
      <div
        className={queryMenuStyle.queryMenuTitleWrapper}
        onClick={(e) => {
          setCategoryExpand(!categoryExpand);
        }}
      >
        <h4 className={queryMenuStyle.queryMenuQueryTitle}>Categories</h4>
        <p className={queryMenuStyle.queryMenuQueryExpand}>
          {!categoryExpand ? '+' : '-'}
        </p>
      </div>
      <div
        className={`${queryMenuStyle.queryMenuQueryItemsContainer} ${
          queryMenuStyle.nonScrollable
        } ${!categoryExpand && queryMenuStyle.collapse}`}
      >
        {categories.map((category, index) => (
          <div className={queryMenuStyle.queryMenuQueryItem} key={index}>
            {artists ? true : false}
            <input
              type="radio"
              className={queryMenuStyle.queryMenuQueryCheckbox}
              id={category}
              name="filter"
              data-category="category"
              onClick={(e) => {
                setSearchParams({ genre: e.target.id.toLowerCase() });
              }}
              defaultChecked={
                category && category === genreQuery ? true : false
              }
            />
            <label
              htmlFor={category}
              className={queryMenuStyle.queryMenuQueryCheckboxLabel}
            >
              {category}
            </label>
          </div>
        ))}
      </div>
      <div
        className={queryMenuStyle.queryMenuTitleWrapper}
        onClick={(e) => {
          setNationalityExpand(!nationalityExpand);
        }}
      >
        <h4 className={queryMenuStyle.queryMenuQueryTitle}>Nationality</h4>
        <p className={queryMenuStyle.queryMenuQueryExpand}>
          {!nationalityExpand ? '+' : '-'}
        </p>
      </div>
      <div
        className={`${queryMenuStyle.queryMenuQueryItemsContainer} ${
          queryMenuStyle.nonScrollable
        } ${!nationalityExpand && queryMenuStyle.collapse}`}
      >
        {nationalities.map((nationality, index) => (
          <div className={queryMenuStyle.queryMenuQueryItem} key={index}>
            <input
              type="radio"
              className={queryMenuStyle.queryMenuQueryCheckbox}
              id={nationality}
              name="filter"
              data-category="nationality"
              onClick={(e) => {
                setSearchParams({ nationality: e.target.id.toLowerCase() });
              }}
              defaultChecked={
                nationality && nationality === nationalityQuery ? true : false
              }
            />
            <label
              htmlFor={nationality}
              className={queryMenuStyle.queryMenuQueryCheckboxLabel}
            >
              {nationality}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QueryMenu;
