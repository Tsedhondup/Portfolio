import "./HeroSection.scss";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImage from "../../assets/image/tsering.png";
import { contactData } from "../../utilities/contactData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HeroSection = (props) => {
  // ELEMENT REFERENCE
  const refElement = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    // CLEAN UP THE EVENT LISTENER AFTER COMPONET IS MOUNT
    return () => {
      window.removeEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
      });
    };
  }, []);
  // ADD SCROLL EVEN LISTENER TO WINDOW OBJECT
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (refElement.current) {
        const elementPosition = refElement.current.getBoundingClientRect();
        elementPosition.top <= -180
          ? props.setIsScroll(true)
          : props.setIsScroll(false);
      }
    });
  }, [props]);

  // CREATE CONTACT URL
  const createContactUrl = (contactName, contactUrl) => {
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
  // CREATE CONTACT ELEMENTS
  let counterDuration = 0.5;
  const socialElements = contactData.map((item) => {
    const durationTime = counterDuration;
    counterDuration = durationTime + 0.3;

    if (item.name !== "email" && item.name !== "phone") {
      return (
        <motion.a
          initial={{
            y: -60,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              ease: "easeIn",
              duration: durationTime,
              delay: 0.2,
            },
          }}
          viewport={{ once: true, amount: 1 }}
          key={item.id}
          className={`hero-container__contacts--link ${item.name}`}
          href={createContactUrl(item.name, item.url)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={item.icon} />
        </motion.a>
      );
    } else {
      // TO FIX ESlint ERROR
      return <></>;
    }
  });

  return (
    <section className="hero-container" ref={refElement}>
      <section className="hero-content">
        <div>
          <h1 className="hero-content__name">
            <span className="hero-content__name--first">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.1,
                  delay: 0.5,
                  ease: "easeOut",
                }}
                className="hero-content__name--first-a"
              >
                Hi,
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                  delay: 1,
                  ease: "easeOut",
                }}
                className="hero-content__name--first-b"
              >
                I'm
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 1.5,
                  ease: "easeOut",
                }}
                className="hero-content__name--first-c"
              >
                Tsering
              </motion.span>
            </span>
            <motion.span
              initial={{ opacity: 0, color: "#8c8c8c" }}
              animate={{ opacity: 1, color: "#000000" }}
              transition={{
                duration: 3,
                delay: 2,
                ease: "linear",
                color: {
                  duration: 3,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
              className="hero-content__name--last"
            >
              Dhondup
            </motion.span>
          </h1>
          <motion.h3
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2.5,
              delay: 3,
              ease: "easeOut",
            }}
            className="hero-content__title"
          >
            A Full-stack Web Developer from
            <motion.span
              initial={{ opacity: 0, x: screenWidth >= 950 ? -60 : 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.5,
                delay: 3,
                ease: "easeOut",
              }}
              className="hero-content__title--city"
            >
              Toronto
            </motion.span>
          </motion.h3>
        </div>

        <div className="image-container">
          <motion.img
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.6,
              ease: "linear",
            }}
            src={profileImage}
            alt="profile-image"
            className="image-container__image"
          />
          <div className="image-container__shadow-element"></div>
        </div>
      </section>
      <section className="hero-container__contacts">{socialElements}</section>
    </section>
  );
};
export default HeroSection;
