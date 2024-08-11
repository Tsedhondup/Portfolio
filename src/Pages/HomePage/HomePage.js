import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import AboutSecond from "../../Components/AboutSecond/AboutSecond";
import TechStacks from "../../Components/TechStacks/TechStacks";
import Works from "../../Components/Works/Works";
import Contacts from "../../Components/Contacts/Contacts";
import { useState } from "react";
const HomePage = () => {
  const [isScroll, setIsScroll] = useState(false);

  return (
    <>
      <Header />
      <HeroSection />
      <AboutSecond />
      <TechStacks />
      <Works />
      <Contacts />
    </>
  );
};
export default HomePage;
