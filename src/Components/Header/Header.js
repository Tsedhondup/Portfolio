import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon
            className="navigations-pages__hide-button"
            icon={faTimes}
            onClick={handleNavButton}
          />
        </div>
        {/* Toggle buttons */}
        <div className="nav-button-container">
          <FontAwesomeIcon
            icon={faBars}
            transform="grow-5"
            className="nav-button-container__open"
            onClick={handleNavButton}
          />
        </div>
      </nav>
    </section>
  );
};

export default Header;
