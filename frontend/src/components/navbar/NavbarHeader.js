import navbarStyle from './Navbar.module.css';
import { Link } from 'react-router-dom';

function NavbarMenu() {
  return (
    <div className={navbarStyle.NavbarTop}>
      <div className={navbarStyle.NavbarLogo}>
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <div className={navbarStyle.NavbarInfo}>
        <div
          className={`${navbarStyle.NavbarInfoLine} ${navbarStyle.NavbarInfoTop}`}
        >
          <p>Customer Service </p>
          <Link
            to="tel:+18005553456"
            className={navbarStyle.searchBoxContainerLink}
          >
            <span>
              <i className="fa-solid fa-phone"></i> 1.800.123.4567
            </span>
          </Link>{' '}
          |
          <p>
            <Link to="/" className={navbarStyle.searchBoxContainerLink}>
              <span>Sign In</span>
            </Link>
            {' or '}
            <Link to="/" className={navbarStyle.searchBoxContainerLink}>
              <span>Create an account</span>
            </Link>
          </p>
        </div>
        <div
          className={`${navbarStyle.NavbarInfoLine} ${navbarStyle.NavbarInfoMiddle}`}
        >
          FREE SHIPPING ON ALL ORDERS. NO MINIMUM PURCHASE
        </div>
        <div
          className={`${navbarStyle.NavbarInfoLine} ${navbarStyle.NavbarInfoBottom}`}
        >
          <Link to="/" className={navbarStyle.searchBoxContainerLink}>
            <span>
              <i className="fa-solid fa-bag-shopping"></i> Shopping Cart
            </span>
          </Link>{' '}
          |
          <Link to="/" className={navbarStyle.searchBoxContainerLink}>
            <span>
              <i className="fa-solid fa-clipboard-check"></i> Wish Lists
            </span>
          </Link>{' '}
          |
          <form className={navbarStyle.searchBoxContainer}>
            <input
              type="text"
              className={navbarStyle.searchBox}
              placeholder="Search"
            ></input>
            <button className={navbarStyle.searchButton}>
              <span className={navbarStyle.searchButtonIcon}>&#9906;</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NavbarMenu;
