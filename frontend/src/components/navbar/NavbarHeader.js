import navbarStyle from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingBag, MdShoppingBag } from 'react-icons/md';
import { RiHeartAddLine, RiPhoneFill } from 'react-icons/ri';
import { useContext } from 'react';
import { Store } from '../../Store';
import { FaSearch } from 'react-icons/fa';

function NavbarMenu(props) {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
  };

  return (
    <div className={navbarStyle.navbarTop}>
      <div className={navbarStyle.navbarLogo}>
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <div className={navbarStyle.navbarInfoContainer}>
        <div className={navbarStyle.navbarInfoLine}>
          <div className={navbarStyle.customerServiceContainer}>
            <p>Customer Service</p>
            <RiPhoneFill className={navbarStyle.navbarIcons} />{' '}
            <Link
              to="tel:+18005553456"
              className={navbarStyle.searchBoxContainerLink}
            >
              <p>{'1.800.123.4567'}</p>
            </Link>
            <p className={navbarStyle.separators}>{' | '}</p>
          </div>
          {props.userInfo ? (
            <div className={navbarStyle.profileLinkContainer}>
              <p className={navbarStyle.profileLinkTitle}>
                {' '}
                {props.userInfo.name}
              </p>
              <div className={navbarStyle.profileLinkDropdownContainer}>
                <Link to={'/profile'} className={navbarStyle.profileLink}>
                  Profile
                </Link>
                <Link to={'/orderhistory'} className={navbarStyle.profileLink}>
                  Order History
                </Link>
                <Link
                  to={'#signout'}
                  onClick={signoutHandler}
                  className={navbarStyle.profileLink}
                >
                  Sign Out
                </Link>
              </div>
            </div>
          ) : (
            <div className={navbarStyle.customerServiceContainer}>
              <Link to="/signin" className={navbarStyle.searchBoxContainerLink}>
                Sign In
              </Link>
              {' or '}
              <Link to="/signup" className={navbarStyle.searchBoxContainerLink}>
                {'Create an account'}
              </Link>
            </div>
          )}
        </div>

        <div className={navbarStyle.navbarInfoLine}>
          <div className={navbarStyle.customerServiceContainer}>
            <Link to="/cart">
              {cart.cartItems.length > 0 ? (
                <div className={navbarStyle.customerServiceContainer}>
                  <div className={navbarStyle.shoppingCartQuantityWrapper}>
                    <MdShoppingBag
                      className={navbarStyle.navbarIconsShopping}
                    />
                    <p className={navbarStyle.shoppingCartQuantity}>
                      {cart.cartItems.length}
                    </p>
                  </div>
                  <p className={navbarStyle.searchBoxContainerLink}>
                    Shopping Cart
                  </p>
                </div>
              ) : (
                <div className={navbarStyle.customerServiceContainer}>
                  <div className={navbarStyle.shoppingCartQuantityWrapper}>
                    <MdOutlineShoppingBag
                      className={navbarStyle.navbarIconsShopping}
                    />
                  </div>
                  <p className={navbarStyle.searchBoxContainerLink}>
                    Shopping Cart
                  </p>
                </div>
              )}
            </Link>
          </div>

          <p className={navbarStyle.separators}>{' | '}</p>

          <Link to="/">
            <div className={navbarStyle.customerServiceContainer}>
              <RiHeartAddLine className={navbarStyle.navbarIcons} />
              <p className={navbarStyle.searchBoxContainerLink}>
                {'Wish Lists'}
              </p>
            </div>
          </Link>

          <p className={navbarStyle.separators}>{' | '}</p>

          <div className={navbarStyle.customerServiceContainer}>
            <form className={navbarStyle.searchBoxContainer}>
              <input
                type="search"
                className={navbarStyle.searchBox}
                placeholder="Search..."
              ></input>
              <button className={navbarStyle.searchButton}>
                <FaSearch className={navbarStyle.searchButtonIcon} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarMenu;
