import { motion } from "framer-motion";
import { contactData } from "../../utilities/contactData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contacts.scss";
const Contacts = (props) => {
  // CREATE CONTACT URL
  const createUrl = (contactName, contactUrl) => {
    if (contactName === "email") {
      return `mailto:${contactUrl}`;
    }
    if (contactName === "phone") {
      return `tel:+${contactUrl}`;
    }
    if (contactName !== "email" && contactName !== "phone") {
      return contactUrl;
    }
  };
  let counterDuration = 2;

  // CREATE CONTACT ELEMENTS
  const contactElements = contactData.map((item) => {
    const durationTime = counterDuration;
    counterDuration = durationTime + 0.5;

    if (item.name === "email" || item.name === "phone") {
      return (
        <motion.div key={item.name} className="contacts__links">
          <motion.a
            href={createUrl(item.name, item.url)}
            target="_blank"
            rel="noopener noreferrer"
            className={`contacts__links--text`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: durationTime,
                ease: "linear",
              },
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {item.name === "email" ? "email" : "call"}
          </motion.a>
          <motion.a
            href={createUrl(item.name, item.url)}
            target="_blank"
            rel="noopener noreferrer"
            className="contacts__link-icon-container"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: durationTime,
                ease: "linear",
              },
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className={`contacts__link-icon-container--icon ${item.name}`}
            />
          </motion.a>
        </motion.div>
      );
    } else {
      // TO FIX ESlint ERROR
      return <></>;
    }
  });
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
          borderBottom: "1px solid #44444c",

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
      <div className="contacts__content">{contactElements}</div>
      {/*------------------- email section ------------------------ */}

      <div className="contacts__translucent-background"></div>
    </section>
  );
};
export default Contacts;
