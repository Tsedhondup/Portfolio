import {
  faCode,
  faLaptop,
  faDna,
  faVial,
  faBook,
  faHeadset,
  faCheckSquare,
  faHandPointRight,
  faLaptopHouse,
  faGlobeAmericas,
  faCoffee,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import educationImage from "../assets/image/education.png";
import journeyImage from "../assets/image/journey.png";
import certificateImage from "../assets/image/certificate.png";
import goalImage from "../assets/image/goal.png";
export const aboutData = [
  {
    id: "01",
    name: "education",
    header: "Background",
    body: "Growing up, I was always fascinated by natural sciences, particularly plant biology, which led me to pursue botany at the University of Delhi. Now, I hope to translate my scientific inquiry in phytology into tech by specializing in web development.",
    icons: [faDna, faLeaf, faVial],
    image: educationImage,
  },
  {
    id: "02",
    name: "coding",
    header: "Getting started with coding",
    body: "The story of an inspiring self-taught software developer on YouTube was enough to convince me to learn coding. However, what started as a hobby has evolved into a full-fledged passion, driving me to pursue a career transition in the tech industry.",
    icons: [faLaptop, faCode, faCoffee],
    image: journeyImage,
  },
  {
    id: "03",
    name: "certification",
    header: "Professional Development",
    body: "I begin to teach myself coding, only to be netted by Tutorial Hell. The need for a proper mentor to assist in honing my skills tailored to professional requirements was essential. I have committed time and resources to becoming a certified web developer by enrolling at BrainStation's Software Engineering Boot Camp in Toronto.",
    icons: [faBook, faHeadset, faCheckSquare],
    image: certificateImage,
  },
  {
    id: "04",
    name: "goal",
    header: "I aim to",
    body: "master both front-end and back-end technologies. I aspire to stay updated with industry trends, adopt best practices, and collaborate and contribute effectively with cross-functional teams to deliver high-quality, secure, and efficient web solutions that meet both user and business needs.",
    icons: [faHandPointRight, faLaptopHouse, faGlobeAmericas],
    image: goalImage,
  },
];
