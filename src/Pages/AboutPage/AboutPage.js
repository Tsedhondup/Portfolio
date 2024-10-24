import Header from "../../Components/Header/Header";
import AboutFirst from "../../Components/AboutFirst/AboutFirst";
import Contacts from "../../Components/Contacts/Contacts";
import { useState, useEffect } from "react";
import FontFaceObserver from "fontfaceobserver";

const AboutPage = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isAboutPageScroll, setIsAboutPageScroll] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [headerClass, setHeaderClass] = useState("header-opaque-about-page");
  // eslint-disable-next-line no-unused-vars
  const [headerClass2, setHeaderClass2] = useState(
    "header-opaque-about-2-page"
  );
  const [scrollPositionPoint, setScrollPositionPoint] = useState(0);

  // page scrolls to the top when a component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          scrollPositionPoint={scrollPositionPoint}
          isScroll={isScroll}
          isAboutPageScroll={isAboutPageScroll}
          headerClass={headerClass}
          isAboutPage={true}
        />
        <AboutFirst
          setIsScroll={setIsScroll}
          setIsAboutPageScroll={setIsAboutPageScroll}
          setScrollPositionPoint={setScrollPositionPoint}
        />
        <Contacts />
      </>
    );
  }
};
export default AboutPage;
