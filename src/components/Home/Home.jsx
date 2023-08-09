import useTitle from "../../CustomHooks/useTitle";
import AnimatedSection from "../AOS-Animate/AnimatedSection";
import BannerSlider from "./BannerSlider";
import BrandPartners from "./BrandPartners";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Offerings from "./Offerings";
import Stats from "./Stats";
import ToyByCategory from "./ToyByCategory";

// N.B.: The routes below wrapped with <AnimatedSection> to show AOS effect.

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <AnimatedSection>
        <BannerSlider></BannerSlider>
      </AnimatedSection>
      <AnimatedSection>
        <Gallery></Gallery>
      </AnimatedSection>
      <AnimatedSection>
        <ToyByCategory></ToyByCategory>
      </AnimatedSection>
      <AnimatedSection>
        <BrandPartners></BrandPartners>
      </AnimatedSection>
      <AnimatedSection>
        <Stats></Stats>
      </AnimatedSection>
      <AnimatedSection>
        <Offerings></Offerings>
      </AnimatedSection>
      <AnimatedSection>
        <Contact></Contact>
      </AnimatedSection>
    </div>
  );
};

export default Home;
