import "./Navbar.css";
import NavbarMenu from "./NavbarMenu";
import NavbarHeader from "./NavbarHeader";

function Navbar() {
  return (
    <div className="Navbar">
      <NavbarHeader />
      <NavbarMenu />
    </div>
  );
}

export default Navbar;
