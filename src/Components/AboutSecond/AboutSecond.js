import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

import profileImage from "../../assets/image/tsering.png";
import "./AboutSecond.scss";
const AboutSecond = () => {
  // eslint-disable-next-line no-unused-vars
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  return (
    <section className="about-second">
      <section className="about-second-content">
        <div className="about-second-content__image-container">
          <motion.img
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.5, ease: "linear" },
            }}
            viewport={{ once: true, amount: 0.2 }}
            src={profileImage}
            alt="profile-image"
            className="about-second-content__image-container--img"
          />
        </div>

        <motion.p
          initial={{
            opacity: 0,
            y: 60,
            lineHeight: "3em",
          }}
          whileInView={{
            opacity: 2,
            y: 0,
            lineHeight: "1.3em",
            transition: {
              duration: 1.5,
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="about-second-content__texts"
        >
          " Botany graduate with a background in plant science, now
          transitioning into the tech industry as a full-stack web developer. I
          am passionate about creating responsive, user-centric web applications
          and leveraging technology to develop innovative digital solutions. "
          <Link to="/About" className="about-second-content__link">
            Read more...
          </Link>
        </motion.p>
      </section>
    </section>
  );
};
export default AboutSecond;
