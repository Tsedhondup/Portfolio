import Header from "../../Components/Header/Header";
import AboutFirst from "../../Components/AboutFirst/AboutFirst";
import Contacts from "../../Components/Contacts/Contacts";
import { useState, useEffect } from "react";
const AboutPage = () => {
  const [isScroll, setIsScroll] = useState(false);
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
  return (
    <>
      <Header
        scrollPositionPoint={scrollPositionPoint}
        isScroll={isScroll}
        headerClass={headerClass}
        isAboutPage={true}
      />
      <AboutFirst
        setIsScroll={setIsScroll}
        setScrollPositionPoint={setScrollPositionPoint}
      />
      <Contacts />
    </>
  );
};
export default AboutPage;
