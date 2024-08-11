import "./HeroSection.scss";
import { useRef, useEffect } from "react";
const HeroSection = (props) => {
  // Element reference
  const refElement = useRef(null);
  const handleScroll = () => {
    const currentElement = refElement.current; // current ref element stored
    const rect = currentElement.getBoundingClientRect(); // get ref element position
    rect.top <= -10 ? props.setIsScroll(true) : props.setIsScroll(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component unmounts

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="hero-container">
      <section className="hero-content">
        <h1 className="hero-content__name">
          <span className="hero-content__name--first" ref={refElement}>
            Hi, I'm Tsering
          </span>
          <span className="hero-content__name--last">Dhondup</span>
        </h1>
        <h3 className="hero-content__title">
          A Front-End Developer from
          <span className="hero-content__title--city">Toronto</span>
        </h3>
      </section>
    </section>
  );
};
export default HeroSection;
