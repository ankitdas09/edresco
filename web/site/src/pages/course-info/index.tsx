import NavBar from "../../global/components/navbar";
import "./styles/index.scss";
import Space from "../../global/components/space";

import Footer from "../../global/components/footer";
import ScrollToTop from "../../scrollToTop";
import DishaInfo from "./components/disha";
import ParishramInfo from "./components/parishram";
import FresherInfo from "./components/fresher";
import TargetInfo from "./components/target";
import { useLocation } from "react-router-dom";

interface PropTypes {
    width: number;
    height: number;
}

const CourseInfoPage = (props: PropTypes) => {
    console.log(props);
    const location = useLocation();
    const allPagesMeta = ["#disha", "#parishram", "#fresher", "#target"];
    return (
        <section className="">
            <ScrollToTop />
            <NavBar />
            <Space amt={60} />
            {!allPagesMeta.includes(location.hash.toLowerCase()) ? (
                <>
                    <DishaInfo />
                    <br />
                    <hr />
                    <ParishramInfo />
                    <br />
                    <hr />
                    <FresherInfo />
                    <br />
                    <hr />
                    <TargetInfo />
                </>
            ) : (
                <>
                    {location.hash.toLowerCase() === "#disha" && <DishaInfo />}
                    <Space amt={60} />
                    {location.hash.toLowerCase() === "#parishram" && <ParishramInfo />}
                    <Space amt={60} />
                    {location.hash.toLowerCase() === "#fresher" && <FresherInfo />}
                    <Space amt={60} />
                    {location.hash.toLowerCase() === "#target" && <TargetInfo />}
                    <Space amt={60} />
                </>
            )}
            <Footer />
        </section>
    );
};

export default CourseInfoPage;
