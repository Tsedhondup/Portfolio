import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHistory,
  faCode,
  faLaptop,
  faMugHot,
  faDna,
  faSeedling,
  faMicroscope,
  faVial,
  faBook,
  faHeadset,
  faGraduationCap,
  faCheckSquare,
  faFlagCheckered,
  faHandPointRight,
  faLaptopHouse,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";
import profilePic from "../../assets/image/tsering.png";
import "./AboutFirst.scss";
const AboutFirst = () => {
  return (
    <section className="about-first">
      {/* <h2 className="about-first__mobile-header-1">About Me</h2> */}
      <div className="about-first__image-container">
        <h2 className="about-first__image-container--mobile-header-2">
          About <br /> me
        </h2>
        <img
          src={profilePic}
          alt="author-photo"
          className="about-first__image-container--img"
        />
      </div>
      <section className="about-text-container">
        {/* Untold story */}
        <section className="about-text">
          <div className="about-text__title">
            <h3 className="about-text__title--text">Educational background</h3>
            <FontAwesomeIcon
              icon={faHistory}
              className="about-text__title--icon"
            />
          </div>
          <p className="about-text__para">
            'Botany graduate from the University of Delhi'
          </p>
        </section>
        {/* Earliest coding journey */}
        <section className="about-text">
          <div className="about-text__title">
            <h3 className="about-text__title--text">Earliest coding journey</h3>
            <FontAwesomeIcon
              icon={faCode}
              className="about-text__title--icon"
            />
          </div>
          <p className="about-text__para">
            'I came across a video on YouTube about a young and successful
            self-taught software developer. As influential and inspiring as the
            video was, I was rather excited to learn coding as a hobby and feed
            my curiosities.'
          </p>
        </section>
        {/* Becoming a certified developer! */}
        <section className="about-text">
          <div className="about-text__title">
            <h3 className="about-text__title--text">
              Becoming a certified developer!
            </h3>
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="about-text__title--icon"
            />
          </div>
          <p className="about-text__para">
            'eaching myself to code was of great success, and it continues to be
            my greatest strength in keeping up with ever-changing technologies
            that are paramount. However, the need for a proper mentor to assist
            in honing my skills tailored to professional requirements was vital.
            I take pride in investing time and resources in joining the Software
            Engineering Boot Camp at BrainStation, Toronto'
          </p>
        </section>
        {/* What next */}
        <section className="about-text">
          <div className="about-text__title">
            <h3 className="about-text__title--text">What next</h3>
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="about-text__title--icon"
            />
          </div>
          <p className="about-text__para">
            As a full-stack developer, I aim to secure a role in a dynamic tech
            company to enhance my skills in modern frameworks. I plan to
            continuously improve my knowledge through advanced courses,
            certifications, and hands-on projects. My long-term goal is to grow
            into a senior developer role and mentor others.
          </p>
        </section>
      </section>
    </section>
  );
};
export default AboutFirst;
