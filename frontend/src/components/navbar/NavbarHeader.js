import "./Navbar.css";

function NavbarMenu() {
  return (
    <div className="Navbar-top">
      <div className="Navbar-logo">
        <h1>Logo</h1>
      </div>
      <div className="Navbar-info">
        <div className="Navbar-info-line Navbar-info-top">
          <p>Customer Service </p> |
          <a href="tel:+18005553456" className="search-box-container-link">
            <span> 1.800.123.4567</span>
          </a>{" "}
          |
          <p>
            <a className="search-box-container-link">
              <span>Sign In</span>
            </a>
            {" or "}
            <a className="search-box-container-link">
              <span>Create an account</span>
            </a>
          </p>
        </div>
        <div className="Navbar-info-line Navbar-info-middle">
          FREE SHIPPING ON ALL ORDERS. NO MINIMUM PURCHASE
        </div>
        <div className="Navbar-info-line Navbar-info-bottom">
          <a className="search-box-container-link">
            <span>Shopping Cart</span>
          </a>{" "}
          |
          <a className="search-box-container-link">
            <span>Wish Lists</span>
          </a>{" "}
          |
          <form className="search-box-container">
            <input
              type="text"
              className="search-box"
              placeholder="Search"
            ></input>
            <button className="search-button">
              <span className="search-button-icon">&#9906;</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NavbarMenu;
