import Header from "../../Components/Header/Header";
import AboutFirst from "../../Components/AboutFirst/AboutFirst";
import Contacts from "../../Components/Contacts/Contacts";
import { useState } from "react";
const AboutPage = () => {
  const [isScroll, setIsScroll] = useState(false);
  const pageScrollHandler = () => {
    console.log("yes");
  };
  return (
    <>
      <Header isScroll={isScroll} />
      <AboutFirst setIsScroll={setIsScroll} />
      <Contacts />
    </>
  );
};
export default AboutPage;
