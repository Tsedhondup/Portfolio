import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSunRain,
  faCirclePlay,
  faEnvelopeCircleCheck,
  faCartFlatbed,
} from "@fortawesome/free-solid-svg-icons";
import brainflix from "../../assets/image/brainflix.jpg";
import jobTracker from "../../assets/image/job-tracker.jpg";
import weatherApp from "../../assets/image/weather-app.jpg";
import fiserv from "../../assets/image/fiserv.jpg";
import "./Works.scss";
const Works = () => {
  return (
    <section className="project-container">
      <h2 className="project-container__title">Projects</h2>
      <section>
        <h2>Personal works</h2>
        <div>
          <img src={jobTracker} alt="job-application-tracker-image" />
          <div>
            <h2>Email Reader</h2>
            <p>App for fetching reading email from mail server</p>
          </div>
        </div>

        <div>
          <img src={brainflix} alt="brainflix-app-image" />
          <div>
            <h2>BrainFlix</h2>
            <p>Video streaming website built on React and Node</p>
          </div>
        </div>
        <h2>Collaboration</h2>
        <div>
          <div>
            <img src={fiserv} alt="fiserv-app-image"/>
            <div>
              <h2>Restaurent App UI</h2>
              <p>Restaurent App UI built on React, Node and MySQL</p>
            </div>
          </div>

          <div>
            <img src={weatherApp} alt="weather-app-image"/>
            <div>
              <h2>Weather App</h2>
              <p>Weather App built on React using free weather API</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="project-container__project-content">
        <section className="projects">
          <FontAwesomeIcon
            icon={faCloudSunRain}
            transform="grow-15"
            className="projects__icon"
          />
          <FontAwesomeIcon
            icon={faCloudSunRain}
            transform="grow-30"
            className="projects__icon-tablet"
          />
          <h3 className="projects__header">Weather App</h3>
          <p className="projects__description">
            BrainStation Projects built on Reacts.js
          </p>
        </section>
        <section className="projects">
          <FontAwesomeIcon
            icon={faCirclePlay}
            transform="grow-15"
            className="projects__icon"
          />
          <FontAwesomeIcon
            icon={faCirclePlay}
            transform="grow-30"
            className="projects__icon-tablet"
          />
          <h3 className="projects__header">BrainFlix</h3>
          <p className="projects__description">
            BrainStation Projects built on Reacts.js
          </p>
        </section>
        <section className="projects">
          <FontAwesomeIcon
            icon={faEnvelopeCircleCheck}
            transform="grow-15"
            className="projects__icon"
          />
          <FontAwesomeIcon
            icon={faEnvelopeCircleCheck}
            transform="grow-30"
            className="projects__icon-tablet"
          />
          <h3 className="projects__header">Job Application Tracker</h3>
          <p className="projects__description">
            BrainStation Projects built on Reacts.js
          </p>
        </section>
        <section className="projects">
          <FontAwesomeIcon
            icon={faCartFlatbed}
            transform="grow-15"
            className="projects__icon"
          />
          <FontAwesomeIcon
            icon={faCartFlatbed}
            transform="grow-30"
            className="projects__icon-tablet"
          />
          <h3 className="projects__header">InStock</h3>
          <p className="projects__description">
            BrainStation Projects built on Reacts.js
          </p>
        </section>
      </section> */}
    </section>
  );
};
export default Works;
