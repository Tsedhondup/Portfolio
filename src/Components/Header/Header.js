import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.scss";
const Header = () => {
  const [navPageClass, setNavPageClass] = useState("");
  const [isNavPageShow, setIsNavPageShow] = useState(false);
  // event handlers
  const handleNavButton = () => {
    if (!isNavPageShow) {
      setNavPageClass("navigation-pages-show");
      setIsNavPageShow(true);
    }
    if (isNavPageShow) {
      setNavPageClass("");
      setIsNavPageShow(false);
    }
  };
  return (
    <section className="header">
      <nav className="navigation">
        {/* Brand name */}
        <Link to="/" className="navigation__brand-name">
          TD
        </Link>
        {/* Pages links */}
        <div className={`navigation-pages ${navPageClass}`}>
          <Link to="/" className="navigation-pages__home">
            Home
          </Link>
          <Link to="/About" className="navigation-pages__about">
            About
          </Link>
          <span className="navigations-pages__resume">Resume</span>
          <button
            className="navigations-pages__hide-button"
            onClick={handleNavButton}
          >
            close
          </button>
        </div>
        {/* Toggle buttons */}
        <div className="nav-button-container">
          <button
            className="nav-button-container__open"
            onClick={handleNavButton}
          >
            open
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Header;
