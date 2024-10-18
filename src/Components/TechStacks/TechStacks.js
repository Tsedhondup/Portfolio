import { motion } from "framer-motion";
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
        className="tools__tools-content--image"
      />
    );
  });
  return (
    <section className="tools">
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
        className="tools__header"
      >
        Skills and Tools
      </motion.h2>
      <div className="tools__tools-content">{skillsElements}</div>
    </section>
  );
};
export default TechStacks;
