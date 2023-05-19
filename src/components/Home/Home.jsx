import BannerSlider from "./BannerSlider";
import Gallery from "./Gallery";
import ToyByCategory from "./ToyByCategory";

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <Gallery></Gallery>
            <ToyByCategory></ToyByCategory>
        </div>
    );
};

export default Home;