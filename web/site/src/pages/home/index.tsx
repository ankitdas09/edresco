import NavBar from "../../global/components/navbar";
import "./styles/index.scss";
import Space from "../../global/components/space";
import HeroSection from "./components/hero";
import GoalsSection from "./components/goals";

const HomePage = () => {
    return (
        <section>
            <NavBar />
            <Space amt={30} />
            <HeroSection />
            <Space amt={150} />
            <GoalsSection />
        </section>
    );
};

export default HomePage;
