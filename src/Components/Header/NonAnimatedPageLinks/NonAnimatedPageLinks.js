import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const NonAnimatedPageLinks = (props) => {
  return (
    <div className={`navigation-pages ${props.navPageClass}`}>
      <div className="navigation-pages__link-container">
        <h2 className="navigation-pages__link-container--author-name">
          Tsering Dhondup
        </h2>
        <Link
          to="/"
          className="navigation-pages__link-container--home"
          onClick={props.handleNavButton}
        >
          Home
        </Link>
        <Link
          to="/About"
          className="navigation-pages__link-container--about"
          onClick={props.handleNavButton}
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
      <div className="navigation-pages__hide-button-container">
        <FontAwesomeIcon
          className="navigation-pages__hide-button-container--button"
          icon={faTimes}
          transform="grow-10"
          onClick={props.handleNavButton}
        />
      </div>

      <div
        className="navigation-pages__shadow-element"
        onClick={props.handleNavButton}
      ></div>
    </div>
  );
};
export default NonAnimatedPageLinks;
