import { useState } from "react";
import { motion } from "framer-motion";
import "./Maintanance.scss";
const Maintanance = () => {
  const [popUpHideClass, setPopUpHideClass] = useState("");

  const handlePopUpClass = () => {
    setPopUpHideClass("about-first__pop-up-hide");
  };
  return (
    <div className={`about-first__pop-up ${popUpHideClass}`}>
      <motion.p
        className="about-first__pop-up--text"
        initial={{
          opacity: 0,
          y: -60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            ease: "linear",
            duration: 1,
            delay: 1,
          },
        }}
        viewport={{ once: true, amount: 1 }}
      >
        page under maintanance !!
      </motion.p>
      <motion.button
        className="about-first__pop-up--button"
        onClick={handlePopUpClass}
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            ease: "linear",
            duration: 1,
            delay: 1,
          },
        }}
        viewport={{ once: true, amount: 1 }}
      >
        close
      </motion.button>
    </div>
  );
};
export default Maintanance;
