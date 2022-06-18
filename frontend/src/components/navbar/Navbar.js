import navbarStyle from './Navbar.module.css';
import NavbarMenu from './NavbarMenu';
import NavbarHeader from './NavbarHeader';

function Navbar() {
  return (
    <div className={navbarStyle.Navbar}>
      <NavbarHeader />
      <NavbarMenu />
    </div>
  );
}

export default Navbar;
