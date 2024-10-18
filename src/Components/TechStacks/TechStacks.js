import { motion } from "framer-motion";
import { useState } from "react";
import "./TechStacks.scss";
import { skillsIcons } from "../../utilities/skill-icons";
const TechStacks = () => {
  // ANIMATION DURATION COUNTER
  let counterDuration = 0.5;
  const skillsElements = skillsIcons.map((item) => {
    let durationTime = counterDuration;

    counterDuration = durationTime + 0.1; // increment after each loop/map
    return (
      <motion.img
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.5, duration: durationTime, ease: "linear" },
        }}
        viewport={{ once: true, amount: 0.5 }}
        src={item.src}
        alt={item.name}
        className="tech-stack__tools--image"
      />
    );
  });
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
      <div className="tech-stacks__tools">{skillsElements}</div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5, ease: "linear" },
        }}
        viewport={{ once: true, amount: 1 }}
        className="tech-stacks__tools"
      >
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
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            alt="knex-logo"
            className="tech-stacks__tools--img tech-stacks__tools--knex"
          />
        </motion.span>
      </motion.div> */}
    </section>
  );
};
export default TechStacks;
