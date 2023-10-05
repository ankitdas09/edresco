import NavBar from "../../global/components/navbar";
import "./styles/index.scss";
import Space from "../../global/components/space";
import HeroSection from "./components/hero";
import GoalsSection from "./components/goals";
import WhySection from "./components/why";
import StartPrepSection from "./components/start-prep";
interface PropTypes {
    width: number;
    height: number;
}

const HomePage = (props: PropTypes) => {
    return (
        <section>
            <NavBar />
            <Space amt={30} />
            <HeroSection />
            {props.width >= 600 ? <Space amt={150} /> : <Space amt={60} />}
            <GoalsSection />
            {props.width >= 600 ? <Space amt={100} /> : <Space amt={60} />}
            <WhySection />
            {props.width >= 600 ? <Space amt={100} /> : <Space amt={60} />}
            <StartPrepSection />
        </section>
    );
};

export default HomePage;
