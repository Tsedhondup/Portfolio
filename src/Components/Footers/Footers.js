import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const Footers = () => {
  return (
    <footer>
      <h3>TseringDhondup</h3>
      <h3>Toronto</h3>
      <div className="socials">
        <FontAwesomeIcon icon={faLinkedin} className="socials__linkedIn" />
        <FontAwesomeIcon icon={faGithub} className="socials__github" />
        <FontAwesomeIcon icon={faTwitter} className="socials__x-twitter" />
        <FontAwesomeIcon icon={faFacebook} className="socials__facebook" />
        <FontAwesomeIcon icon={faInstagram} className="socials__instagram" />
      </div>
    </footer>
  );
};
export default Footers;
