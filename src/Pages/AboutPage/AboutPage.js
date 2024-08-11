import Header from "../../Components/Header/Header";
import AboutFirst from "../../Components/AboutFirst/AboutFirst";
import Contacts from "../../Components/Contacts/Contacts";
import { useState } from "react";
const AboutPage = () => {
  const [isScroll, setIsScroll] = useState(false);
  const pageScrollHandler = () => {};
  return (
    <>
      <Header isScroll={isScroll} />
      <AboutFirst pageScrollHandler={pageScrollHandler} />
      <Contacts pageScrollHandler={pageScrollHandler} />
    </>
  );
};
export default AboutPage;
