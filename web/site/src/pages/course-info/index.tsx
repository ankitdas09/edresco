import NavBar from "../../global/components/navbar";
import "./styles/index.scss";
import Space from "../../global/components/space";

import Footer from "../../global/components/footer";

import ScrollToTop from "../../scrollToTop";

import DishaInfo from "./components/disha";

interface PropTypes {
    width: number;
    height: number;
}

const CourseInfoPage = (props: PropTypes) => {
    console.log(props);
    return (
        <section className="">
            <ScrollToTop />
            <NavBar />
            <Space amt={30} />
            <DishaInfo />
            <Space amt={30} />

            <Space amt={60} />
            <Footer />
        </section>
    );
};

export default CourseInfoPage;
