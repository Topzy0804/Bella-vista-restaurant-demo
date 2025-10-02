import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Bella Vista</h2>
        </div>
        <ul className={`nav-menu${menuOpen ? " open" : ""}`}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/order"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              Order
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/build-menu"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              Build Menu
            </NavLink>
          </li>
        </ul>
        <div
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={handleHamburgerClick}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
