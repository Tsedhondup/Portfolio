import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import AboutSecond from "../../Components/AboutSecond/AboutSecond";
import TechStacks from "../../Components/TechStacks/TechStacks";
import Works from "../../Components/Works/Works";
import Contacts from "../../Components/Contacts/Contacts";
import { useEffect, useState } from "react";
import FontFaceObserver from "fontfaceobserver";
const HomePage = () => {
  const [isScroll, setIsScroll] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [headerClass, setHeaderClass] = useState("header-opaque-home-page");
  const [scrollPositionPoint, setScrollPositionPoint] = useState(0);
  /*
   * THESE STATE VARIABLE ARE DESIGNED TO HANDLE DATA AVAILABILTY AND IMPROVE USER EXPERIENCE BY SEAMLESS PAGE LOADING
   */

  // eslint-disable-next-line no-unused-vars
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  // CREATE FontFaceObserver INSTANCE
  const font = new FontFaceObserver("Libre Franklin");
  useEffect(() => {
    font
      .load()
      .then(() => {
        setIsFontLoaded(true);
        return true;
      })
      .then((result) => {
        if (result) {
          setIsImageLoaded(true);
        }
        return true;
      })
      .then((result) => {
        if (result) {
          setHasLoaded(true);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (hasLoaded) {
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
