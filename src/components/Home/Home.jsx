import useTitle from "../../CustomHooks/useTitle";
import AnimatedSection from "../AOS-Animate/AnimatedSection";
import BannerSlider from "./BannerSlider";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Offerings from "./Offerings";
import ToyByCategory from "./ToyByCategory";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <AnimatedSection><BannerSlider></BannerSlider></AnimatedSection>
            <AnimatedSection><Gallery></Gallery></AnimatedSection>
            <AnimatedSection><ToyByCategory></ToyByCategory></AnimatedSection>
            <AnimatedSection><Offerings></Offerings></AnimatedSection>
            <AnimatedSection><Contact></Contact></AnimatedSection>
        </div>
    );
};

export default Home;