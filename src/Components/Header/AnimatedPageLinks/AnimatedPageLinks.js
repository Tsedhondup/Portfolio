import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const AnimatedPageLinks = (props) => {
  return (
    <div className={`navigation-pages ${props.navPageClass}`}>
      <div className="navigation-pages__link-container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 1, duration: 1.5 },
          }}
          viewport={{ once: false, amount: 1 }}
          className="navigation-pages__link-container--author-name"
        >
          Tsering Dhondup
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, borderBottomWidth: 0 }}
          whileInView={{
            opacity: 1,
            borderBottomWidth: 1,
            transition: { delay: 0.8, duration: 0.5 },
          }}
          viewport={{ once: false, amount: 1 }}
        >
          <Link
            to="/"
            className="navigation-pages__link-container--home"
            onClick={props.handleNavButton}
          >
            Home
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, borderBottomWidth: 0 }}
          whileInView={{
            opacity: 1,
            borderBottomWidth: 1,
            transition: { delay: 0.6, duration: 0.5 },
          }}
          viewport={{ once: false, amount: 1 }}
        >
          <Link
            to="/About"
            className="navigation-pages__link-container--about"
            onClick={props.handleNavButton}
          >
            About
          </Link>
        </motion.div>

        {/* <motion.a
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
        </motion.a> */}
      </div>
      <motion.div
        initial={{ opacity: 0, borderBottomWidth: 0 }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: false, amount: 1 }}
        className="navigation-pages__hide-button-container"
      >
        <FontAwesomeIcon
          className="navigation-pages__hide-button-container--button"
          icon={faTimes}
          transform="grow-10"
          onClick={props.handleNavButton}
        />
      </motion.div>

      <div
        className="navigation-pages__shadow-element"
        onClick={props.handleNavButton}
      ></div>
    </div>
  );
};
export default AnimatedPageLinks;
