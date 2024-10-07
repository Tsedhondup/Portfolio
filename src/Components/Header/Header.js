import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/image/logo2.PNG";

// Components
import AnimatedPageLinks from "./AnimatedPageLinks/AnimatedPageLinks";
import NonAnimatedPageLinks from "./NonAnimatedPageLinks/NonAnimatedPageLinks";
import "./Header.scss";
const Header = (props) => {
  const [navPageClass, setNavPageClass] = useState("");
  const [isNavPageShow, setIsNavPageShow] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth >= 767 ? false : true
  );
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

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth >= 767 ? false : true);
    });
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth >= 767 ? false : true);
      });
    };
  }, []);
  return (
    <motion.section
      className={`header ${props.isScroll ? props.headerClass : ""} ${
        props.windowWitdh
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1.2,
        delay: 4,
        ease: "easeOut",
      }}
    >
      <motion.nav
        className="navigation"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 1,
          ease: "easeOut",
        }}
      >
        {/* Brand name */}
        <Link to="/" className="navigation__brand-name">
          <img
            src={logo}
            alt="brand-logo"
            className="navigation__brand-name--logo"
          />
        </Link>
        {/* Pages links */}
        <section>
          {isMobile ? (
            <AnimatedPageLinks
              handleNavButton={handleNavButton}
              navPageClass={navPageClass}
            />
          ) : (
            <NonAnimatedPageLinks
              handleNavButton={handleNavButton}
              navPageClass={navPageClass}
            />
          )}
        </section>
        {/* Toggle buttons */}
        <div className="nav-button-container">
          <FontAwesomeIcon
            icon={faBars}
            transform="grow-5"
            className="nav-button-container__open"
            onClick={handleNavButton}
          />
        </div>
      </motion.nav>
    </motion.section>
  );
};

export default Header;
