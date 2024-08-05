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
      <h2 className="tech-stacks__header">Primary Tech stacks</h2>
      <div className="tech-stacks__tools">
        <FontAwesomeIcon icon={faHtml5} className="tech-stacks__tools--tech" />
        <FontAwesomeIcon icon={faCss3} className="tech-stacks__tools--tech" />
        <FontAwesomeIcon icon={faSass} className="tech-stacks__tools--tech" />
        <FontAwesomeIcon icon={faJs} className="tech-stacks__tools--tech" />
        <FontAwesomeIcon icon={faReact} className="tech-stacks__tools--tech" />
        <FontAwesomeIcon icon={faNodeJs} className="tech-stacks__tools--tech" />
        <img src={expressLogo} />
        <img src={mysqlLogo} />
        <img src={knexLogo} />

      </div>
    </section>
  );
};
export default TechStacks;
