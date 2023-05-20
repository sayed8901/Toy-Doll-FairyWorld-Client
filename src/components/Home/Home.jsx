import AnimatedSection from "../AOS-Animate/AnimatedSection";
import BannerSlider from "./BannerSlider";
import Gallery from "./Gallery";
import ToyByCategory from "./ToyByCategory";


const Home = () => {
    return (
        <div>
            <AnimatedSection><BannerSlider></BannerSlider></AnimatedSection>
            <AnimatedSection><Gallery></Gallery></AnimatedSection>
            <AnimatedSection><ToyByCategory></ToyByCategory></AnimatedSection>
        </div>
    );
};

export default Home;