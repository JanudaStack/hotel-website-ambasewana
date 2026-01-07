import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { navLinks } from "../../../constants";

import "../Navbar/Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation(); // Get current URL to see which page currently on
  const isBookingPage = location.pathname === "/booking";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <nav>
        <ul
          className="sidebar"
          style={{ display: isSidebarOpen ? "flex" : "none" }}
        >
          <li className="close-btn" onClick={toggleSidebar}>
            <i className="bx bx-x"></i>
          </li>

          {navLinks.map((link) => (
            <li key={link.id}>
              <HashLink smooth to={`/#${link.id}`} onClick={toggleSidebar}>
                {link.title}
              </HashLink>
            </li>
          ))}

        </ul>

        {/* --- Desktop Navbar --- */}
        <ul className="navbar">
          <li className="logo">
            <HashLink smooth to="/#hero">
              <img src="/assets/logo/logo-1.png" alt="site-logo" />
            </HashLink>
          </li>

          {/* Nav Links  */}
          {navLinks.map((link) => (
            <li key={link.id} className="hideOnMobile">
              <HashLink smooth to={`/#${link.id}`}>
                {link.title}
              </HashLink>
            </li>
          ))}

          <li className="menu-btn" onClick={toggleSidebar}>
            <a>
              <i className="bx bx-menu"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
