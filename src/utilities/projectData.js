import portfolio from "../assets/image/portfolio.jpg";
import brainflix from "../assets/image/brainflix.jpg";
import jobTracker from "../assets/image/job-tracker.jpg";
import quiz from "../assets/image/quiz.jpg";
import bandsite from "../assets/image/band-site.jpg";
import chef from "../assets/icons/chef.png";
export const projectData = [
  {
    id: "01",
    name: "portfolio",
    img: portfolio,
    url: "https://tseringdhondup.netlify.app/",
    repo: "https://github.com/Tsedhondup/Portfolio.git",
    description: " My Portfolio website deployed on Netlify.",
    tech: "React, SASS",
  },
  {
    id: "02",
    name: "brainflix",
    img: brainflix,
    url: "https://brain-flix-app.netlify.app/",
    repo: "https://github.com/Tsedhondup/tsering-dhondup-BrainFlix.git",
    description:
      "Showcasing my web developing skills, a video streaming web application built as a part of the School Project at BrainStation's Software Engineering Bootcamp.",
    tech: "React, SASS, Express, Node",
  },
  {
    id: "03",
    name: "quiz",
    img: quiz,
    url: "https://tseringdhondupgeographyquiz.netlify.app/",
    repo: "https://github.com/Tsedhondup/Geography-quiz.git",
    description:
      "A geography quiz is an interactive quiz game, that allows players to guess the correct answer within time allocation.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    id: "04",
    name: "band-site",
    img: bandsite,
    url: "https://tseringdhondup-bandsite.netlify.app/",
    repo: "https://github.com/Tsedhondup/tsering-dhondup-bandsite.git",
    description:
      "Bandsite is a static website built as a part of the School Project at BrainStation's Software Engineering Bootcamp.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    id: "05",
    name: "email reader",
    img: jobTracker,
    url: "https://github.com/Tsedhondup/EmailReader.git",
    repo: "https://github.com/Tsedhondup/EmailReader.git",
    description:
      " Full-stack web application that reads, and fetches emails from the Gmail mail server using IMAP and stores them in MySQL database.",
    tech: "React, SASS, Node, Express, MySQL, Knex ",
  },
  {
    id: "06",
    name: "unavailable",
    img: jobTracker,
    url: "https://github.com/Tsedhondup",
    repo: "https://github.com/Tsedhondup",
    description: "Project currently in making....",
    descriptionImage: chef,
    tech: "React, SASS, Node, Express, MySQL, Knex ",
  },
];
