import NavBar from "../../global/components/navbar";
import "./styles/index.scss";
import Space from "../../global/components/space";

import Footer from "../../global/components/footer";

import ScrollToTop from "../../scrollToTop";
import Heading from "../../global/components/heading";
interface PropTypes {
    width: number;
    height: number;
}

const AboutPage = (props: PropTypes) => {
    console.log(props);
    return (
        <section className="">
            <ScrollToTop />
            <NavBar />
            <Space amt={30} />
            <div className="container-sm">
                <div className="flex justify-center align-start column-on-mobile">
                    <div className="about-left flex-3">
                        <Heading
                            text="ABOUT US"
                            letterSpacing={8}
                            fontWeight={800}
                            size="0.75rem"
                            maxWidth={300}
                            font="Raleway"
                            mLeft="3px"
                        />
                        <Space amt={10} />
                        <Heading
                            text="Helping students "
                            secondaryText="succeed "
                            trailingText="through integrated coaching."
                            secondaryTextColor="#4A7D3A"
                            letterSpacing={0}
                            fontWeight={300}
                            size="2rem"
                            maxWidth={300}
                            font="Raleway"
                        />
                        <Space amt={10} />
                        <Heading
                            text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
                            letterSpacing={0}
                            fontWeight={400}
                            size="0.9rem"
                            maxWidth={"80%"}
                            font="PT Sans"
                        />
                    </div>
                    <div className="about-right flex-2">
                        <img src="about-img.png" className="img-fluid" />
                    </div>
                </div>
                <Space amt={60} />
                <div className="flex justify-center align-start column-reverse-on-mobile">
                    <div className="about-left flex-3">
                        <img src="about-img2.png" className="img-fluid" />
                    </div>
                    <div className="about-right flex-2">
                        <Heading
                            text="OUR MISSION"
                            letterSpacing={8}
                            fontWeight={800}
                            size="0.75rem"
                            maxWidth={300}
                            font="Raleway"
                            mLeft="3px"
                        />
                        <Space amt={10} />
                        <Heading
                            text="Revolutionise teaching, make it "
                            secondaryText="accessible."
                            secondaryTextColor="#0056B8"
                            letterSpacing={0}
                            fontWeight={300}
                            size="2rem"
                            maxWidth={300}
                            font="Raleway"
                        />
                        <Space amt={10} />
                        <Heading
                            text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. "
                            letterSpacing={0}
                            fontWeight={400}
                            size="0.9rem"
                            maxWidth={"80%"}
                            font="PT Sans"
                        />
                        <Space amt={10} />
                        <Heading
                            text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. "
                            letterSpacing={0}
                            fontWeight={400}
                            size="0.9rem"
                            maxWidth={"80%"}
                            font="PT Sans"
                        />
                    </div>
                </div>
                <Space amt={60} />
                <div className="flex justify-center align-start column-on-mobile">
                    <div className="about-left flex-3">
                        <Heading
                            text="Our "
                            secondaryText="Values"
                            secondaryTextColor="#4A7D3A"
                            letterSpacing={0}
                            fontWeight={300}
                            size="2rem"
                            maxWidth={300}
                            font="Raleway"
                        />
                        <Space amt={10} />
                        <Heading
                            text="We build optimal solutions. Catering to all academic needs of a learner, our products save parents any ancillary expense. The money thus saved gets reinvested in other aspects of their development."
                            letterSpacing={0}
                            fontWeight={400}
                            size="0.9rem"
                            maxWidth={"80%"}
                            font="PT Sans"
                        />
                        <Space amt={10} />
                        <Heading
                            text="We focus on improving learning outcomes. While trying to meet this objective, our solutions are also designed such that they work in local communities."
                            letterSpacing={0}
                            fontWeight={400}
                            size="0.9rem"
                            maxWidth={"80%"}
                            font="PT Sans"
                        />
                        <Space amt={10} />
                        <Heading
                            text="We are reliable. We guard and conserve our stakeholder's resources with the same
                            vigilance as we would guard and conserve our own."
                            letterSpacing={0}
                            fontWeight={400}
                            size="0.9rem"
                            maxWidth={"80%"}
                            font="PT Sans"
                        />
                        <Space amt={10} />
                        <Heading
                            text="We are there for the long run. We believe in partnerships with our employees, customers. vendors, governing bodies and other stakeholders to strengthen the ecosystem. "
                            letterSpacing={0}
                            fontWeight={400}
                            size="0.9rem"
                            maxWidth={"80%"}
                            font="PT Sans"
                        />
                        <Space amt={10} />
                    </div>
                    <div className="about-right flex-2">
                        <Heading
                            text="Our "
                            secondaryText="Vision"
                            secondaryTextColor="#0056B8"
                            letterSpacing={0}
                            fontWeight={300}
                            size="2rem"
                            maxWidth={300}
                            font="Raleway"
                        />
                        <Space amt={10} />
                        <Heading
                            text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
                            letterSpacing={0}
                            fontWeight={400}
                            size="0.9rem"
                            maxWidth={"80%"}
                            font="PT Sans"
                        />
                        <Space amt={10} />
                        <Heading
                            text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
                            letterSpacing={0}
                            fontWeight={400}
                            size="0.9rem"
                            maxWidth={"80%"}
                            font="PT Sans"
                        />
                        <Space amt={10} />
                    </div>
                </div>
            </div>
            <Space amt={60} />
            <Footer />
        </section>
    );
};

export default AboutPage;
