import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptop,
  faDna,
  faSeedling,
  faVial,
  faBook,
  faHeadset,
  faCheckSquare,
  faHandPointRight,
  faLaptopHouse,
  faGlobeAmericas,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import profilePic from "../../assets/image/tsering.png";
import "./AboutFirst.scss";
const AboutFirst = (props) => {
  // Element reference
  const refElement = useRef(null);
  const handleScroll = () => {
    const currentElement = refElement.current; // current ref element stored
    const rect = currentElement.getBoundingClientRect(); // get ref element position
    rect.top <= -100 ? props.setIsScroll(true) : props.setIsScroll(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component unmounts

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="about-first">
      <div className="about-first__image-container" ref={refElement}>
        <div className="about-first__image-container--img-wrapper">
          <img
            src={profilePic}
            alt="author-photo"
            className="about-first__image-container--img"
          />
        </div>

        <h2 className="about-first__image-container--text">About me</h2>
      </div>

      <section className="about-text-container">
        <h2 className="about-first__mobile-header">About Me</h2>
        {/* Untold story */}
        <section className="about-text about-text-education">
          <h2 className="about-text__title">Education</h2>

          <p className="about-text__para">
            First division botany graduates from University of Delhi
          </p>
          {/* Icons */}
          <div className="about-text__icon-container">
            <FontAwesomeIcon
              icon={faDna}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-dna"
            />
            <FontAwesomeIcon
              icon={faSeedling}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-leaf"
            />
            <FontAwesomeIcon
              icon={faVial}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-vial"
            />
          </div>
        </section>
        {/* Earliest coding journey */}
        <section className="about-text about-text-journey">
          <h3 className="about-text__title">Earliest coding journey</h3>

          <p className="about-text__para">
            I came across a video on YouTube about a young and successful
            self-taught software developer. As influential and inspiring as the
            video was, I was rather excited to learn coding as a hobby and feed
            my curiosities.
          </p>
          {/* Icons */}
          <div className="about-text__icon-container about-text__icon-container-2">
            <FontAwesomeIcon
              icon={faLaptop}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-laptop"
            />
            <FontAwesomeIcon
              icon={faCode}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-code"
            />
            <FontAwesomeIcon
              icon={faCoffee}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-coffee"
            />
          </div>
        </section>
        {/* Becoming a certified developer! */}
        <section className="about-text about-text-certification">
          <h3 className="about-text__title">Becoming a certified developer!</h3>

          <p className="about-text__para">
            Teaching myself to code was of great success, and it continues to be
            my greatest strength in keeping up with ever-changing technologies
            that are paramount. However, the need for a proper mentor to assist
            in honing my skills tailored to professional requirements was vital.
            I take pride in investing time and resources in joining the Software
            Engineering Boot Camp at BrainStation, Toronto'
          </p>
          {/* Icons */}
          <div className="about-text__icon-container ">
            <FontAwesomeIcon
              icon={faBook}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-book"
            />
            <FontAwesomeIcon
              icon={faHeadset}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-head-set"
            />
            <FontAwesomeIcon
              icon={faCheckSquare}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-check-square"
            />
          </div>
        </section>
        {/* What next */}
        <section className="about-text about-text-goals">
          <h3 className="about-text__title">What next</h3>

          <p className="about-text__para">
            As a full-stack developer, I aim to secure a role in a dynamic tech
            company to enhance my skills in modern frameworks. I plan to
            continuously improve my knowledge through advanced courses,
            certifications, and hands-on projects. My long-term goal is to grow
            into a senior developer role and mentor others.
          </p>
          {/* Icons */}
          <div className="about-text__icon-container about-text__icon-container-4">
            <FontAwesomeIcon
              icon={faHandPointRight}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-point-right"
            />
            <FontAwesomeIcon
              icon={faLaptopHouse}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-house"
            />
            <FontAwesomeIcon
              icon={faGlobeAmericas}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-globe"
            />
          </div>
        </section>
      </section>
    </section>
  );
};
export default AboutFirst;
