import Contact from "./Contact";
import Footer from "../components/Footer";
import Landing from "./Landing";
import Section from "../components/Section";
import Work from "./Works";
import colors from "tailwindcss/colors";

const MainPage = () => {
  return (
    <>
      <Section backgroundColor={colors.neutral[900]}>
        <Landing />
      </Section>
      <Work />
      <Section
        className="flex justify-center"
        backgroundColor={colors.gray[100]}
      >
        <Contact />
      </Section>
      <Footer />
    </>
  );
};

export default MainPage;
