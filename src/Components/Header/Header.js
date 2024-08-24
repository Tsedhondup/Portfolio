import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
const Header = (props) => {
  const [navPageClass, setNavPageClass] = useState("");
  const [isNavPageShow, setIsNavPageShow] = useState(false);
  const [elememtPosition, setElementPosition] = useState("");
  const elementRef = useRef(null);
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
  const handleNavLinkPosition = () => {};
  return (
    <motion.section
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1.2,
        delay: 4.2,
        ease: "easeOut",
      }}
      className={`header ${props.isScroll ? props.headerClass : ""} ${
        props.windowWitdh
      }`}
    >
      <motion.nav
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 1,
          ease: "easeOut",
        }}
        className="navigation"
      >
        {/* Brand name */}
        <Link to="/" className="navigation__brand-name">
          TD
        </Link>
        {/* Pages links */}

        <div className={`navigation-pages ${navPageClass}`} ref={elementRef}>
          <div className="navigation-pages__link-container">
            <motion.h2
              initial={{ opacity: 0, borderBottomWidth: 0 }}
              whileInView={{
                opacity: 1,
                borderWidth: 1,
                transition: { delay: 2, duration: 1.5 },
              }}
              viewport={{ once: false, amount: 1 }}
              className="navigation-pages__link-container--author-name"
            >
              Tsering Dhondup
            </motion.h2>
            <motion.Link
              initial={{ opacity: 0, borderBottomWidth: 0 }}
              whileInView={{
                opacity: 1,
                borderWidth: 1,
                transition: { delay: 0.8, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 1 }}
              to="/"
              className="navigation-pages__link-container--home"
              onClick={handleNavButton}
            >
              Home
            </motion.Link>
            <motion.Link
              initial={{ opacity: 0, borderBottomWidth: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 1 }}
              to="/About"
              className="navigation-pages__link-container--about"
              onClick={handleNavButton}
            >
              About
            </motion.Link>
            <motion.a
              initial={{ opacity: 0, borderBottomWidth: 0 }}
              whileInView={{
                opacity: 1,
                borderBottomWidth: 1,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 1 }}
              href="https://www.linkedin.com/in/tsering-dhondup-078084161/"
              className="navigation-pages__link-container--resume"
            >
              Resume
            </motion.a>
          </div>
          <motion.div
            initial={{ opacity: 0, borderBottomWidth: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 1 }}
          >
            <FontAwesomeIcon
              className="navigation-pages__hide-button"
              icon={faTimes}
              transform="grow-10"
              onClick={handleNavButton}
            />
          </motion.div>

          <div
            className="navigation-pages__shadow-element"
            onClick={() => {
              handleNavButton();
              handleNavLinkPosition();
            }}
          ></div>
        </div>
        {/* Toggle buttons */}
        <div className="nav-button-container">
          <FontAwesomeIcon
            icon={faBars}
            transform="grow-5"
            className="nav-button-container__open"
            onClick={() => {
              handleNavButton();
              handleNavLinkPosition();
            }}
          />
        </div>
      </motion.nav>
    </motion.section>
  );
};

export default Header;
