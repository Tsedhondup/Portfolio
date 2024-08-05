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
        <FontAwesomeIcon
          icon={faMobileScreenButton}
          transform="grow-10"
          className="phone-email__phone"
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          transform="grow-10"
          className="phone-email__email"
        />
      </div>

      <div className="contacts__translucent-background"></div>
    </section>
  );
};
export default Contacts;
