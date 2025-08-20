import { useState } from "react";
import Nav from "../nav/Nav";
import { RemoveScroll } from "react-remove-scroll";
import "./style.css";

import { FaXing } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
	setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a href="" className="logo">
            Andrey
          </a>
          <RemoveScroll enabled={isMenuOpen}>
            <Nav isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick}/>
          </RemoveScroll>
          <div className="nav-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaXing /> : <FaBarsStaggered />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
