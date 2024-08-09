import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footers.scss";
const Footers = () => {
  return (
    <footer className="footer">
      <div className="author">
        <h3 className="author__statement">Designed and Built by </h3>
        <h3 className="author__name">Tsering Dhondup</h3>
      </div>
      <div className="socials">
        <FontAwesomeIcon
          icon={faLinkedin}
          transform="grow-6"
          className="socials__icon"
        />
        <FontAwesomeIcon
          icon={faGithub}
          transform="grow-6"
          className="socials__icon"
        />
        <FontAwesomeIcon
          icon={faXTwitter}
          transform="grow-6"
          className="socials__icon"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          transform="grow-6"
          className="socials__icon"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          transform="grow-6"
          className="socials__icon"
        />
      </div>

      <div className="location-copyright">
        <h3 className="location-copyright__copyright">
          <FontAwesomeIcon
            icon={faCopyright}
            transform="shrink-1"
            className="location-copyright__copyright--icon"
          />
          <span> 2024</span>
        </h3>
        <h3 className="location-copyright__location">
          <span className="location-copyright__location--name"> Toronto</span>
          <FontAwesomeIcon icon={faGlobeAmericas} />
        </h3>
      </div>
    </footer>
  );
};
export default Footers;
