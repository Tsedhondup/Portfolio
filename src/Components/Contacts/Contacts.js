import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Contacts.scss";
const Contacts = (props) => {
  return (
    <section
      className={`${
        props.isHomePage ? "contact-home" : "contact-about"
      } contacts`}
    >
      <motion.h2
        className="contacts__header"
        initial={{
          opacity: 0,
          borderBottom: "1px solid rgba(0,0,0,0)",
        }}
        whileInView={{
          opacity: 1,
          borderBottom: "1px solid #d6d6d6",

          transition: {
            ease: "linear",
            duration: 1,
            delay: 1,
            borderBottom: { duration: 1.5, delay: 1.5 },
          },
        }}
        viewport={{ once: true, amount: 1 }}
      >
        Contact me
      </motion.h2>
      <div className="phone-email">
        <div className="phone-email__phone-container">
          <motion.a
            href="tel:+1437245778"
            className="phone-email__phone-container--text"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: { ease: "linear", duration: 1.5, delay: 2 },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            call
          </motion.a>
          <motion.a
            href="tel:+1437245778"
            initial={{
              x: 60,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { ease: "linear", duration: 1, delay: 2.5 },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            <FontAwesomeIcon
              icon={faPhoneFlip}
              transform="grow-10"
              className="phone-email__phone-container--icon"
            />
          </motion.a>
          {/* Icons for tablet */}
          <motion.a
            href="tel:+1437245778"
            className="phone-email__phone-container--tablet-icon"
            initial={{
              x: 60,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { ease: "linear", duration: 1, delay: 2.5 },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            <FontAwesomeIcon
              icon={faPhoneFlip}
              transform="grow-15"
              className="phone-email__phone-container---tablet-icon"
            />
          </motion.a>
        </div>
        {/*------------------- email section ------------------------ */}
        <div className="phone-email__email-container">
          <motion.a
            href="mailto:tyddhondup88@gmail.com"
            className="phone-email__email-container--text"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: { ease: "linear", duration: 1.5, delay: 3 },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            email
          </motion.a>
          <motion.a
            href="mailto:tyddhondup88@gmail.com"
            initial={{
              x: 60,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { ease: "linear", duration: 1, delay: 3.5 },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              transform="grow-10"
              className="phone-email__email-container--icon"
            />
          </motion.a>
          <motion.a
            href="mailto:tyddhondup88@gmail.com"
            className="phone-email__email-container--tablet-icon"
            initial={{
              x: 60,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { ease: "linear", duration: 1, delay: 3.5 },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              transform="grow-15"
              className="phone-email__email-container---tablet-icon"
            />
          </motion.a>
        </div>
      </div>

      <div className="contacts__translucent-background"></div>
    </section>
  );
};
export default Contacts;
