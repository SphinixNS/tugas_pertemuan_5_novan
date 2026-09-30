import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={"nav-nama"}>
        Novan Arrijal Ghifari Hakim
      </NavLink>

      <ul class="nav-link">
        <li>
          <NavLink to="/" className={"nav-button"}>
            Beranda
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={"nav-button"}>
            Tentang Saya
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className={"nav-button"}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={"nav-button"}>
            Kontak
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
