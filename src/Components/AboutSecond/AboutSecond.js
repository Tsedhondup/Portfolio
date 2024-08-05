import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../../assets/image/tsering.png";
import "./AboutSecond.scss";
const AboutSecond = () => {
  return (
    <section className="about-second">
      <img
        src={profileImage}
        alt="profile-image"
        className="about-second__img"
      />
      <FontAwesomeIcon
        icon={faStarOfLife}
        className="about-second__star-of-life"
      />
      <p className="about-second__texts">
        "I've always been fascinated by the power of the web to connect, inform,
        and inspire. What started as a curiosity and hobby has evolved into a
        full-fledged passion, driving me to pursue a career transition into the
        tech industry where I can play a part in shaping the digital landscape."
        <Link to="/About" className="about-second__link">
          Read more
        </Link>
      </p>
    </section>
  );
};
export default AboutSecond;
