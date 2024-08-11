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
  useEffect(() => {
    window.addEventListener("scroll", () => {
      
    });
  }, []);
  return (
    <section className="about-first">
      <div className="about-first__image-container" ref={refElement}>
        <h2 className="about-first__image-container--mobile-header-2">
          About <br /> me
        </h2>
        <img
          src={profilePic}
          alt="author-photo"
          className="about-first__image-container--img"
        />
        <div className="about-first__image-container--shadow-el"></div>
      </div>
      <h2 className="about-first__mobile-header-1">About Me</h2>

      <section className="about-text-container">
        {/* Untold story */}
        <section className="about-text">
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
              className="about-text__icon-container--icons about-text__icon-container--icon-scope"
            />
          </div>
        </section>
        {/* Earliest coding journey */}
        <section className="about-text">
          <h3 className="about-text__title">Earliest coding journey</h3>

          <p className="about-text__para">
            'I came across a video on YouTube about a young and successful
            self-taught software developer. As influential and inspiring as the
            video was, I was rather excited to learn coding as a hobby and feed
            my curiosities.'
          </p>
          {/* Icons */}
          <div className="about-text__icon-container about-text__icon-container-2">
            <FontAwesomeIcon
              icon={faLaptop}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-scope"
            />
            <FontAwesomeIcon
              icon={faCode}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-dna"
            />
            <FontAwesomeIcon
              icon={faCoffee}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-leaf"
            />
          </div>
        </section>
        {/* Becoming a certified developer! */}
        <section className="about-text">
          <h3 className="about-text__title">Becoming a certified developer!</h3>

          <p className="about-text__para">
            'eaching myself to code was of great success, and it continues to be
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
              className="about-text__icon-container--icons about-text__icon-container--icon-dna"
            />
            <FontAwesomeIcon
              icon={faHeadset}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-leaf"
            />
            <FontAwesomeIcon
              icon={faCheckSquare}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-scope"
            />
          </div>
        </section>
        {/* What next */}
        <section className="about-text">
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
              className="about-text__icon-container--icons about-text__icon-container--icon-dna"
            />
            <FontAwesomeIcon
              icon={faLaptopHouse}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-leaf"
            />
            <FontAwesomeIcon
              icon={faGlobeAmericas}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-scope"
            />
          </div>
        </section>
      </section>
    </section>
  );
};
export default AboutFirst;
