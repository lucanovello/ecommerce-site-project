import { Link } from 'react-router-dom';
import navbarStyle from './Navbar.module.css';

function NavbarMenu() {
  return (
    <div className={navbarStyle.navbarMainMenu}>
      <ul className={navbarStyle.navbarMenuOptions}>
        <Link className={navbarStyle.navbarMenuLink} to="/products">
          <li>Featured</li>
        </Link>
        <Link className={navbarStyle.navbarMenuLink} to="/products">
          <li>Best Sellers</li>
        </Link>
        <Link className={navbarStyle.navbarMenuLink} to="/products">
          <li>New Arrivals</li>
        </Link>
        <Link className={navbarStyle.navbarMenuLink} to="/products">
          <li>Trending</li>
        </Link>
        <Link className={navbarStyle.navbarMenuLink} to="/products">
          <li>Artists</li>
        </Link>
        <Link className={navbarStyle.navbarMenuLink} to="/products">
          <li>Genres</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavbarMenu;
