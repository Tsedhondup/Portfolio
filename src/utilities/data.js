import portfolio from "../assets/image/portfolio.jpg";
import brainflix from "../assets/image/brainflix.jpg";
import jobTracker from "../assets/image/job-tracker.jpg";
import quiz from "../assets/image/quiz.jpg";
import bandsite from "../assets/image/band-site.jpg";
export const projectData = [
  {
    name: "portfolio",
    img: portfolio,
    url: "https://tseringdhondup.netlify.app/",
    repo: "https://github.com/Tsedhondup/Portfolio.git",
    description:
      " My Portfolio website deployed on Netlify, primarily built on React.js.",
  },
  {
    name: "brainflix",
    img: brainflix,
    url: "https://brain-flix-app.netlify.app/",
    repo: "https://github.com/Tsedhondup/tsering-dhondup-BrainFlix.git",
    description:
      "Showcasing my web developing skills, a video streaming web application built on React, connected to the backend server viaRESTful API built using Express in Node js.",
  },
  {
    name: "quiz",
    img: quiz,
    url: "https://tseringdhondupgeographyquiz.netlify.app/",
    repo: "https://github.com/Tsedhondup/Geography-quiz.git",
    description:
      "A geography quiz is an interactive quiz game, that allows players to guess the correct answer within time allocation.",
  },
  {
    name: "band-site",
    img: bandsite,
    url: "https://tseringdhondup-bandsite.netlify.app/",
    repo: "https://github.com/Tsedhondup/tsering-dhondup-bandsite.git",
    description:
      "Bandsite is a static website built as a part of the School Project at BrainStation's Software Engineering Bootcamp.",
  },
  {
    name: "email",
    img: jobTracker,
    url: "https://github.com/Tsedhondup/EmailReader.git",
    repo: "https://github.com/Tsedhondup/EmailReader.git",
    description:
      " Full-stack web application built on ReactJS that reads, and fetches emails from the Gmail mail server using IMAP and stores them in MySQL database.",
  },
];
