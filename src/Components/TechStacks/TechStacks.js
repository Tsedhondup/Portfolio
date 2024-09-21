import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import expressLogo from "../../assets/image/express.png";
import mysqlLogo from "../../assets/image/mysql.png";
import knexLogo from "../../assets/image/knex.png";
import { motion } from "framer-motion";
import { useState } from "react";
import "./TechStacks.scss";
const TechStacks = () => {
  // eslint-disable-next-line no-unused-vars
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  return (
    <section className="tech-stacks">
      {/* Mobile header */}
      <motion.h2
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "linear",
          },
        }}
        viewport={{ once: true, amount: 1 }}
        className="tech-stacks__header"
      >
        Primary skill sets
      </motion.h2>
      {/* Screen Width greater than mobile witdh = 320px */}
      {/* <motion.h2
        initial={{
          opacity: 0,
          x: -70,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            ease: "linear",
          },
        }}
        viewport={{ once: true, amount: 1 }}
        className="tech-stacks__header-tablet"
      >
        Primary skill sets
      </motion.h2> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5, ease: "linear" },
        }}
        viewport={{ once: true, amount: 1 }}
        className="tech-stacks__tools"
      >
        {/* Icons  */}
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: { duration: 1, ease: "linear" },
          }}
          viewport={{ once: true, amount: 1 }}
          className="tech-stacks__tools--tech"
        >
          <FontAwesomeIcon
            icon={faHtml5}
            className="tech-stacks__tools--icon tech-stacks__tools--html"
          />
        </motion.span>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: { duration: 1.2, ease: "linear" },
          }}
          viewport={{ once: true, amount: 1 }}
          className="tech-stacks__tools--tech"
        >
          <FontAwesomeIcon
            icon={faCss3}
            className="tech-stacks__tools--icon tech-stacks__tools--css"
          />
        </motion.span>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: { duration: 1.4, ease: "linear" },
          }}
          viewport={{ once: true, amount: 1 }}
          className="tech-stacks__tools--tech"
        >
          <FontAwesomeIcon
            icon={faSass}
            className="tech-stacks__tools--icon tech-stacks__tools--sass"
          />
        </motion.span>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: { duration: 1.6, ease: "linear" },
          }}
          viewport={{ once: true, amount: 1 }}
          className="tech-stacks__tools--tech"
        >
          <FontAwesomeIcon
            icon={faJs}
            className="tech-stacks__tools--icon tech-stacks__tools--js"
          />
        </motion.span>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: { duration: 1.8, ease: "linear" },
          }}
          viewport={{ once: true, amount: 1 }}
          className="tech-stacks__tools--tech"
        >
          <FontAwesomeIcon
            icon={faReact}
            className="tech-stacks__tools--icon tech-stacks__tools--react"
          />
        </motion.span>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: { duration: 2, ease: "linear" },
          }}
          viewport={{ once: true, amount: 1 }}
          className="tech-stacks__tools--tech"
        >
          <FontAwesomeIcon
            icon={faNodeJs}
            className="tech-stacks__tools--icon tech-stacks__tools--node"
          />
        </motion.span>

        <motion.span
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: { duration: 2.2, ease: "linear" },
          }}
          viewport={{ once: true, amount: 1 }}
          className="tech-stacks__tools--tech"
        >
          <img
            src={expressLogo}
            alt="express-logo"
            className="tech-stacks__tools--img tech-stacks__tools--express"
          />
        </motion.span>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: { duration: 2.4, ease: "linear" },
          }}
          viewport={{ once: true, amount: 1 }}
          className="tech-stacks__tools--tech"
        >
          <img
            src={mysqlLogo}
            alt="mysql-logo"
            className="tech-stacks__tools--img tech-stacks__tools--mysql"
          />
        </motion.span>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: { duration: 2.8, ease: "linear" },
          }}
          viewport={{ once: true, amount: 1 }}
          className="tech-stacks__tools--tech"
        >
          <img
            src={knexLogo}
            alt="knex-logo"
            className="tech-stacks__tools--img tech-stacks__tools--knex"
          />
        </motion.span>
      </motion.div>
    </section>
  );
};
export default TechStacks;
