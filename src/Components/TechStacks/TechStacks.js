import { delay, motion } from "framer-motion";
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
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, duration: durationTime, ease: "linear" },
        }}
        viewport={{ once: true, amount: 0.5 }}
        src={item.src}
        alt={item.name}
        className="icons-container__image"
      />
    );
  });
  if (skillsIcons) {
    return (
      <section className="tools">
        <motion.h2
          className="tools__header"
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
        >
          Skills and Tools
        </motion.h2>
        <motion.div
          className="tools__tools-content"
          initial={{
            y: 60,
            borderTop: "0px solid #d6d6d6",
            borderBottom: "0px solid #d6d6d6",
          }}
          whileInView={{
            y: 0,
            borderTop: "1px solid #d6d6d6",
            borderBottom: "1px solid #d6d6d6",
            transition: {
              duration: 1,
              ease: "linear",
              borderBottom: { delay: 2.2, duration: 1, ease: "linear" },
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          <div className="icons-container">{skillsElements}</div>
        </motion.div>
      </section>
    );
  }
};
export default TechStacks;
