import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./GoTop.scss";
const GoTop = () => {
  return (
    <motion.section
      className="button-wrapper"
      initial={{
        border: "1px solid #d6d6d6",
        color: "#d6d6d6",
      }}
      whileInView={{
        border: "1px solid #44444c",
        color: "#44444c",
      }}
      transition={{
        ease: "easeInOut",
        duration: 3, // Time for one animation cycle
        repeat: Infinity, // Repeat the animation infinitely
        repeatDelay: 1, // Delay before each repeat (in seconds)
      }}
      viewport={{ once: true, amount: 1 }}
    >
      <FontAwesomeIcon icon={faChevronUp} className="button-wrapper__button" />
    </motion.section>
  );
};

export default GoTop;
