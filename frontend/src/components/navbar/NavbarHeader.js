import navbarStyle from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingBag, MdShoppingBag } from 'react-icons/md';
import { RiHeartAddLine, RiPhoneFill } from 'react-icons/ri';
import { useContext } from 'react';
import { Store } from '../../Store';

function NavbarMenu() {
  const { state } = useContext(Store);
  const { cart } = state;
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
              <RiPhoneFill className={navbarStyle.searchBoxIcons} />{' '}
              1.800.123.4567
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

        <div className={`${navbarStyle.NavbarInfoLine}`}>
          <Link to="/cart" className={navbarStyle.searchBoxContainerLink}>
            <span>
              {cart.cartItems.length > 0 ? (
                <div>
                  <MdShoppingBag className={navbarStyle.searchBoxIcons} />
                  <div className={navbarStyle.shoppingCartQuantityWrapper}>
                    <div className={navbarStyle.shoppingCartQuantity}>
                      {cart.cartItems.length}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <MdOutlineShoppingBag
                    className={navbarStyle.searchBoxIcons}
                  />
                </div>
              )}
              Shopping Cart
            </span>
          </Link>{' '}
          |
          <Link to="/" className={navbarStyle.searchBoxContainerLink}>
            <span>
              <RiHeartAddLine className={navbarStyle.searchBoxIcons} /> Wish
              Lists
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
