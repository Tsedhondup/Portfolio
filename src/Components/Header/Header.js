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
          <div className="navigation-pages__link-container">
            <Link to="/" className="navigation-pages__link-container--home">
              Home
            </Link>
            <Link
              to="/About"
              className="navigation-pages__link-container--about"
            >
              About
            </Link>
            <a
              href="https://www.linkedin.com/in/tsering-dhondup-078084161/"
              className="navigation-pages__link-container--resume"
            >
              Resume
            </a>
          </div>

          <FontAwesomeIcon
            className="navigation-pages__hide-button"
            icon={faTimes}
            transform="grow-10"
            onClick={handleNavButton}
          />
          <div
            className="navigation-pages__shadow-element"
            onClick={handleNavButton}
          ></div>
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
