import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <section className="header">
      <nav className="navigation">
        {/* Brand name */}
        <Link to="/" className="navigation__brand-name">
          TD
        </Link>
        {/* Pages links */}
        <div className="navigation-pages">
          <Link to="/" className="navigation-pages__home">
            Home
          </Link>
          <Link to="/About" className="navigation-pages__about">
            About
          </Link>
          <span className="navigations-pages__resume">Resume</span>
        </div>
        {/* Toggle buttons */}
        <div className="nav-button-container">
          <button className="nav-button-container__open">open</button>
          <button className="nav-button-container__close">close</button>
        </div>
      </nav>
    </section>
  );
};

export default Header;
