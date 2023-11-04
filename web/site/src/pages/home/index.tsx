import NavBar from "../../global/components/navbar";
import "./styles/index.scss";
import Space from "../../global/components/space";
import HeroSection from "./components/hero";
import GoalsSection from "./components/goals";
import WhySection from "./components/why";
import StartPrepSection from "./components/start-prep";
import ScholarshipSection from "./components/scholarship";
import Footer from "../../global/components/footer";
import ScrollToTop from "../../scrollToTop";
interface PropTypes {
    width: number;
    height: number;
}

const HomePage = (props: PropTypes) => {
    return (
        <section
            style={{
                position: "relative",
            }}
        >
            <ScrollToTop />
            <NavBar />
            {/* {props.width >= 600 ? <Space amt={60} /> : <Space amt={30} />} */}
            <HeroSection />
            {/* {props.width >= 600 ? <Space amt={30} /> : <Space amt={60} />} */}
            <GoalsSection />
            {props.width >= 600 ? <Space amt={30} /> : <Space amt={30} />}
            <WhySection />
            {props.width >= 600 ? <Space amt={30} /> : <Space amt={30} />}
            <StartPrepSection />
            {props.width >= 600 ? <Space amt={30} /> : <Space amt={30} />}
            <ScholarshipSection />
            {props.width >= 600 ? <Space amt={30} /> : <Space amt={15} />}
            <Footer />
        </section>
    );
};

export default HomePage;
