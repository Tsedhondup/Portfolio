import Header from "../../Components/Header/Header";
import AboutFirst from "../../Components/AboutFirst/AboutFirst";
import Contacts from "../../Components/Contacts/Contacts";
import { useState } from "react";
const AboutPage = () => {
  const [isScroll, setIsScroll] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [headerClass, setHeaderClass] = useState("header-opaque-about-page");
  // eslint-disable-next-line no-unused-vars
  const [headerClass2, setHeaderClass2] = useState(
    "header-opaque-about-2-page"
  );
  const [scrollPositionPoint, setScrollPositionPoint] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [windowWitdh, setWindowWitdh] = useState(window.innerWidth);

  return (
    <>
      <Header
        scrollPositionPoint={scrollPositionPoint}
        isScroll={isScroll}
        headerClass={headerClass}
        windowWitdh={`${windowWitdh > 1280 ? headerClass2 : ""}`}
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
