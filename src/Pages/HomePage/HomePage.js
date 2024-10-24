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
  const [scrollPositionPoint, setScrollPositionPoint] = useState(0);
  /*
   * THESE STATE VARIABLE ARE DESIGNED TO HANDLE DATA AVAILABILTY AND IMPROVE USER EXPERIENCE BY SEAMLESS PAGE LOADING
   */

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  if (Header && AboutSecond && TechStacks && Works && Contacts) {
    return (
      <>
        <Header
          isScroll={isScroll}
          headerClass={headerClass}
          scrollPositionPoint={scrollPositionPoint}
          setIsImageLoaded={setIsImageLoaded}
        />
        <HeroSection
          setIsScroll={setIsScroll}
          setIsImageLoaded={setIsImageLoaded}
          setScrollPositionPoint={setScrollPositionPoint}
        />
        setIsImageLoaded={setIsImageLoaded}
        <AboutSecond />
        setIsImageLoaded={setIsImageLoaded}
        <TechStacks />
        setIsImageLoaded={setIsImageLoaded}
        <Works />
        setIsImageLoaded={setIsImageLoaded}
        <Contacts isHomePage={true} />
      </>
    );
  }
};
export default HomePage;
