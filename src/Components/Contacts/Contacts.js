import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./Contacts.scss";
const Contacts = () => {
  return (
    <section className="contacts">
      <h2>Say hello to me!</h2>
      <div className="phone-email">
        <FontAwesomeIcon
          icon={faMobileScreenButton}
          className="phone-email__phone"
        />
        <FontAwesomeIcon icon={faEnvelope} className="phone-email__email" />
      </div>
      <div className="socials">
        <FontAwesomeIcon icon={faLinkedin} className="socials__linkedIn" />
        <FontAwesomeIcon icon={faGithub} className="socials__github" />
        <FontAwesomeIcon icon={faTwitter} className="socials__x-twitter" />
        <FontAwesomeIcon icon={faFacebook} className="socials__facebook" />
        <FontAwesomeIcon icon={faInstagram} className="socials__instagram" />
      </div>
      <div className="contacts__translucent-background"></div>
    </section>
  );
};
export default Contacts;
