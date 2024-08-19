import "./HeroSection.scss";
import { useRef, useEffect } from "react";
import profileImage from "../../assets/image/tsering.png";
const HeroSection = (props) => {
  // Element reference
  const refElement = useRef(null);
  const handleScroll = () => {
    const currentElement = refElement.current; // current ref element stored
    const rect = currentElement.getBoundingClientRect(); // get ref element position
    rect.top <= -0.5 ? props.setIsScroll(true) : props.setIsScroll(false);
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   // Clean up the event listener when the component unmounts

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <section className="hero-container" ref={refElement}>
      <section className="hero-content">
        <div>
          <h1 className="hero-content__name">
            <span className="hero-content__name--first">Hi, I'm Tsering</span>
            <span className="hero-content__name--last">Dhondup</span>
          </h1>
          <h3 className="hero-content__title">
            A Front-End Developer from
            <span className="hero-content__title--city">Toronto</span>
          </h3>
        </div>

        <div className="image-container">
          <img
            src={profileImage}
            alt="profile-image"
            className="image-container__image"
          />
          <div className="image-container__shadow-element"></div>
        </div>
      </section>
    </section>
  );
};
export default HeroSection;
