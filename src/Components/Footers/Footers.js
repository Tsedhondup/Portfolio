import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./Footers.scss";
const Footers = () => {
  return (
    <footer className="footer">
      <div className="socials">
        <FontAwesomeIcon icon={faLinkedin} className="socials__linkedIn" />
        <FontAwesomeIcon icon={faGithub} className="socials__github" />
        <FontAwesomeIcon icon={faTwitter} className="socials__x-twitter" />
        <FontAwesomeIcon icon={faFacebook} className="socials__facebook" />
        <FontAwesomeIcon icon={faInstagram} className="socials__instagram" />
      </div>
      <div className="author">
        <h3 className="author__designer">Designed and built by </h3>
        <h3 className="author__name">TseringDhondup</h3>
      </div>

      <div className="location-copyright">
        <h3 className="location-copyright__copyright">
          copyright2024 <FontAwesomeIcon icon={faCopyright} />
        </h3>
        <h3 className="location-copyright__location">Toronto</h3>
      </div>
    </footer>
  );
};
export default Footers;
