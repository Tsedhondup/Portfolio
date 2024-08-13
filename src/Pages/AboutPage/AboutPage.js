import Header from "../../Components/Header/Header";
import AboutFirst from "../../Components/AboutFirst/AboutFirst";
import Contacts from "../../Components/Contacts/Contacts";
import { useState } from "react";
const AboutPage = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [headerClass, setHeaderClass] = useState("header-opaque-home-page");

  return (
    <>
      <Header isScroll={isScroll} headerClass={headerClass} />
      <AboutFirst setIsScroll={setIsScroll} />
      <Contacts />
    </>
  );
};
export default AboutPage;
