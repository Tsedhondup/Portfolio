import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faEnvelope,
  faGithub,
  facLinkedin,
  faXTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-solid-svg-icons";
import "./Contacts.scss";
const Contacts = () => {
  return (
    <section className="contacts">
      <h2>Say hello to me!</h2>
      <h2>Phone Call</h2>
      <h2>Write email</h2>
      <div className="contacts__translucent-background"></div>
    </section>
  );
};
export default Contacts;
