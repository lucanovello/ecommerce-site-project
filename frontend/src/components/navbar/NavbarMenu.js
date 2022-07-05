import navbarStyle from './Navbar.module.css';

function NavbarMenu() {
  return (
    <div className={navbarStyle.navbarMainMenu}>
      <ul className={navbarStyle.navbarMenuOptions}>
        <li>Featured</li>
        <li>Best Sellers</li>
        <li>New Arrivals</li>
        <li>Trending</li>
        <li>Artists</li>
        <li>Genres</li>
      </ul>
    </div>
  );
}

export default NavbarMenu;
