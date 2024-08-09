import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import "./Contacts.scss";
const Contacts = () => {
  return (
    <section className="contacts">
      <h2 className="contacts__header">Contact me</h2>
      <div className="phone-email">
        <div className="phone-email__phone-container">
          <a href="tel:+1437245778">
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              transform="grow-10"
              className="phone-email__phone-container--icon"
            />
          </a>
          <a
            href="tel:+1437245778"
            className="phone-email__phone-container--text"
          >
            call
          </a>
        </div>
        <div className="phone-email__email-container">
          <a href="mailto:tyddhondup88@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              transform="grow-10"
              className="phone-email__email-container--text"
            />
          </a>
          <a
            href="mailto:tyddhondup88@gmail.com"
            className="phone-email__email-container--icon"
          >
            email
          </a>
        </div>
      </div>

      <div className="contacts__translucent-background"></div>
    </section>
  );
};
export default Contacts;
