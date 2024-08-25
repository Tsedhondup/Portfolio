import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import AboutSecond from "../../Components/AboutSecond/AboutSecond";
import TechStacks from "../../Components/TechStacks/TechStacks";
import Works from "../../Components/Works/Works";
import Contacts from "../../Components/Contacts/Contacts";
import { useState } from "react";
const HomePage = () => {
  const [isScroll, setIsScroll] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [headerClass, setHeaderClass] = useState("header-opaque-home-page");

  return (
    <>
      <Header isScroll={isScroll} headerClass={headerClass} />
      <HeroSection setIsScroll={setIsScroll} />
      <AboutSecond />
      <TechStacks />
      <Works />
      <Contacts />
    </>
  );
};
export default HomePage;
