import NavBar from "../../global/components/navbar";
import "./styles/index.scss";
import Space from "../../global/components/space";
import HeroSection from "./components/hero";
import GoalsSection from "./components/goals";
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
        </section>
    );
};

export default HomePage;
