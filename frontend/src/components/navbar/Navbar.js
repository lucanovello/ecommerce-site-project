import navbarStyle from './Navbar.module.css';
import NavbarMenu from './NavbarMenu';
import NavbarHeader from './NavbarHeader';
import Header from './Header';

function Navbar() {
  return (
    <div className={navbarStyle.navbar}>
      <Header text="Free shipping on all orders. No minimum purchase" />
      <NavbarHeader />
      <NavbarMenu />
    </div>
  );
}

export default Navbar;
