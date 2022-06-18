import navbarStyle from './Navbar.module.css';

function NavbarMenu() {
  return (
    <div className={navbarStyle.NavbarMainMenu}>
      <ul className={navbarStyle.NavbarMenuOptions}>
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
