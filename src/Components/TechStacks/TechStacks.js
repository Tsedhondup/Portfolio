import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import expressLogo from "../../assets/image/express.png";
import mysqlLogo from "../../assets/image/mysql.png";
import knexLogo from "../../assets/image/knex.png";

import "./TechStacks.scss";
const TechStacks = () => {
  return (
    <section className="tech-stacks">
      <h2 className="tech-stacks__header">Primary skill sets</h2>
      <div className="tech-stacks__tools">
        <FontAwesomeIcon
          icon={faHtml5}
          transform="grow-15"
          className="tech-stacks__tools--tech"
        />
        <FontAwesomeIcon
          icon={faCss3}
          transform="grow-15"
          className="tech-stacks__tools--tech"
        />
        <FontAwesomeIcon
          icon={faSass}
          transform="grow-15"
          className="tech-stacks__tools--tech"
        />
        <FontAwesomeIcon
          icon={faJs}
          transform="grow-15"
          className="tech-stacks__tools--tech"
        />
        <FontAwesomeIcon
          icon={faReact}
          transform="grow-15"
          className="tech-stacks__tools--tech"
        />
        <FontAwesomeIcon
          icon={faNodeJs}
          transform="grow-15"
          className="tech-stacks__tools--tech"
        />
        {/* Icons for tablet  */}
        <FontAwesomeIcon
          icon={faHtml5}
          transform="grow-30"
          className="tech-stacks__tools--tech-tablet"
        />
        <FontAwesomeIcon
          icon={faCss3}
          transform="grow-15"
          className="tech-stacks__tools--tech-tablet"
        />
        <FontAwesomeIcon
          icon={faSass}
          transform="grow-30"
          className="tech-stacks__tools--tech-tablet"
        />
        <FontAwesomeIcon
          icon={faJs}
          transform="grow-30"
          className="tech-stacks__tools--tech-tablet"
        />
        <FontAwesomeIcon
          icon={faReact}
          transform="grow-30"
          className="tech-stacks__tools--tech-tablet"
        />
        <FontAwesomeIcon
          icon={faNodeJs}
          transform="grow-30"
          className="tech-stacks__tools--tech-tablet"
        />
        <img
          src={expressLogo}
          alt="express-logo"
          className="tech-stacks__tools--tech"
        />
        <img
          src={mysqlLogo}
          alt="mysql-logo"
          className="tech-stacks__tools--tech"
        />
        <img
          src={knexLogo}
          alt="knex-logo"
          className="tech-stacks__tools--tech"
        />
      </div>
    </section>
  );
};
export default TechStacks;
