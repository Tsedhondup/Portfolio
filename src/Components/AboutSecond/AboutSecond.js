import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import profileImage from "../../assets/image/tsering.png";
import "./AboutSecond.scss";
const AboutSecond = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setScreenWidth(window.innerWidth);
  //   });
  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("resize", () => {
  //       setScreenWidth(window.innerWidth);
  //     });
  //   };
  // }, []);
  return (
    <section className="about-second">
      <section className="about-second-content">
        <div className="about-second-content__image-container">
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 2, duration: 1 },
            }}
            viewport={{ once: false, amount: 1 }}
            className="about-second-content__image-container--shadow-element"
          ></motion.div> */}
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1.5, ease: "linear" },
            }}
            viewport={{ once: true, amount: 1 }}
            src={profileImage}
            alt="profile-image"
            className="about-second-content__image-container--img"
          />
        </div>

        <motion.p
          initial={{
            opacity: 0,
            y: screenWidth < 767 || screenWidth >= 950 ? 100 : 0,
            x: screenWidth >= 767 && screenWidth < 950 ? 100 : 0,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: true, amount: 1 }}
          className="about-second-content__texts"
        >
          "I bring your designs to life by developing them into fully functional
          websites. With attention to detail, I ensure each site is responsive
          and user-friendly."
          <Link to="/About" className="about-second-content__link">
            Read more
          </Link>
        </motion.p>
      </section>
    </section>
  );
};
export default AboutSecond;
