import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={"nama-nav"}>
        Novan Arrijal Ghifari Hakim
      </NavLink>

      <ul className="list-nav">
        <li>
          <NavLink
            end
            to="/"
            className={({ isActive }) =>
              isActive ? "button-nav button-nav-aktif" : "button-nav"
            }
          >
            Beranda
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "button-nav button-nav-aktif" : "button-nav"
            }
          >
            Tentang Saya
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "button-nav button-nav-aktif" : "button-nav"
            }
          >
            Galeri
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "button-nav button-nav-aktif" : "button-nav"
            }
          >
            Kontak
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
