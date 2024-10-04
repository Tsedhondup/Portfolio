import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import "./Footers.scss";
const Footers = () => {
  return (
    <footer className="footer">
      <div className="author">
        <motion.h3
          className="author__statement"
          initial={{
            opacity: 0,
            borderBottom: "1px solid rgba(0,0,0,0)",
          }}
          whileInView={{
            opacity: 1,
            borderBottom: "1px solid #d6d6d6",

            transition: {
              ease: "linear",
              duration: 1.5,
              delay: 3,
              border: { delay: 3.5, duration: 1.5 },
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          Designed and Built by
        </motion.h3>
        <motion.h3
          className="author__name"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              ease: "linear",
              duration: 1,
              delay: 4,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          Tsering Dhondup
        </motion.h3>
      </div>
      <div className="socials">
        <motion.span
          className="socials__container"
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              ease: "linear",
              duration: 1.5,
              delay: 4.5,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            transform="grow-6"
            className="socials__container--icon"
          />
        </motion.span>
        <motion.span
          className="socials__container"
          initial={{
            opacity: 0,
            y: -60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              ease: "linear",
              duration: 1.5,
              delay: 4.5,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          <FontAwesomeIcon
            icon={faGithub}
            transform="grow-6"
            className="socials__container--icon"
          />
        </motion.span>
        <motion.span
          className="socials__container"
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              ease: "linear",
              duration: 1.5,
              delay: 4.5,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          <FontAwesomeIcon
            icon={faXTwitter}
            transform="grow-6"
            className="socials__container--icon"
          />
        </motion.span>
        <motion.span
          className="socials__container"
          initial={{
            opacity: 0,
            y: -60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              ease: "linear",
              duration: 1.5,
              delay: 4.5,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          <FontAwesomeIcon
            icon={faFacebook}
            transform="grow-6"
            className="socials__container--icon"
          />
        </motion.span>
        <motion.span
          className="socials__container"
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              ease: "linear",
              duration: 1.5,
              delay: 4.5,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          <FontAwesomeIcon
            icon={faInstagram}
            transform="grow-6"
            className="socials__container--icon"
          />
        </motion.span>
      </div>

      <div className="location-copyright">
        <motion.h3
          className="location-copyright__copyright"
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              ease: "linear",
              duration: 1.5,
              delay: 5,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          <FontAwesomeIcon
            icon={faCopyright}
            transform="shrink-1"
            className="location-copyright__copyright--icon"
          />
          <span> 2024</span>
        </motion.h3>

        <motion.h3
          className="location-copyright__location"
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              ease: "linear",
              duration: 1.5,
              delay: 5,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          <span className="location-copyright__location--name"> Toronto</span>
          <FontAwesomeIcon icon={faGlobeAmericas} />
        </motion.h3>
      </div>
    </footer>
  );
};
export default Footers;
