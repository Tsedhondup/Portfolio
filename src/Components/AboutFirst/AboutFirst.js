import {
  faHistory,
  faCode,
  faGraduationCap,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";
import profilePic from "../../assets/image/tsering3.jpg";
import "./AboutFirst.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AboutFirst = () => {
  return (
    <section className="about-second">
      <h1 className="about-second__header">About me </h1>
      <div className="about-second__image">
        <img src={profilePic} alt="author-photo" />
      </div>
      <section className="about-text-container">
        {/* Untold story */}
        <section className="about-text">
          <div className="about-text__title">
            <h2 className="about-text__title--text">Untold Story</h2>
            <FontAwesomeIcon
              icon={faHistory}
              className="about-text__title--icon"
            />
          </div>
          <p>
            'My earliest quest for a career began at the University of Delhi,
            where I studied plant biology, ecology, and genetics. Their
            education includes rigorous coursework, laboratory work, and field
            research, developing a strong foundation in scientific analysis and
            research methodologies'
          </p>
        </section>
        {/* Earliest coding journey */}
        <section className="about-text">
          <div className="about-text__title">
            <h2 className="about-text__title--text">Earliest coding journey</h2>
            <FontAwesomeIcon
              icon={faCode}
              className="about-text__title--icon"
            />
          </div>
          <p>
            'I came across a video on YouTube about a young and successful
            self-taught software developer. As influential and inspiring as the
            video was, I was rather excited to learn coding as a hobby and feed
            my curiosities.'
          </p>
        </section>
        {/* Becoming a certified developer! */}
        <section className="about-text">
          <div className="about-text__title">
            <h2 className="about-text__title--text">
              Becoming a certified developer!
            </h2>
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="about-text__title--icon"
            />
          </div>
          <p>
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
            <h2 className="about-text__title--text">What next</h2>
            <FontAwesomeIcon
              icon={faFlagCheckered}
              className="about-text__title--icon"
            />
          </div>
          <p>
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
