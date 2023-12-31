import NavBar from "../../global/components/navbar";
import "./styles/index.scss";
import Space from "../../global/components/space";
import Footer from "../../global/components/footer";
import ScrollToTop from "../../scrollToTop";
import Heading from "../../global/components/heading";
import ObjectiveCard from "./components/objective-card";
import Button from "../../global/components/btn";

interface PropTypes {
    width: number;
    height: number;
}

const content = [
    {
        heading: "Upto 100% Scholarship",
        subHeading: "Based on E.A.S.T. Exam",
        img: "/scholarship-icons/15.png",
    },
    {
        heading: "10 out of 100",
        subHeading: "Free coaching for competitive Exam",
        img: "/scholarship-icons/16.png",
    },
    {
        heading: "Exposure",
        subHeading: "Top performing students get a chance to visit ISRO/IITs/AIIMSs free of cost",
        img: "/scholarship-icons/19.png",
    },
    {
        heading: "Upto Rs.1,00,000",
        subHeading: "Cash prize at national level",
        img: "/scholarship-icons/20.png",
    },
    {
        heading: "Media Coverage",
        subHeading: "At local and national level",
        img: "/scholarship-icons/18.png",
    },
    { heading: "Top 3", subHeading: "Exciting Prizes & Goodies", img: "/scholarship-icons/17.png" },
    {
        heading: "Participation",
        subHeading: "Certificate for all",
        img: "/scholarship-icons/certificate.svg",
    },
];
const contentObj = [
    {
        heading: "Centralized Exam",
        text: "E.A.S.T. offers a unified test for students from diverse backgrounds, ensuring fairness in opportunities based on performance.",
        img: "guidance.svg",
    },
    {
        heading: "Education Equity",
        text: "E.A.S.T. narrows the education gap by supporting talented students regardless of their socio-economic status.",
        img: "a-grade.svg",
    },
    {
        heading: "Guidance Hub",
        text: "E.A.S.T. provides valuable insights into learning paths and career options, helping students make informed choices.",
        img: "coaching.svg",
    },
    {
        heading: "Recognition Platform",
        text: "E.A.S.T. celebrates students' achievements beyond academics, motivating excellence in various fields.",
        img: "face-recognition.svg",
    },
];

const ScholarshipPage = (props: PropTypes) => {
    return (
        <section className="bg-blue">
            <ScrollToTop />
            <NavBar variant="white" />
            {props.width >= 600 ? <Space amt={80} /> : <Space amt={0} />}
            <div className="container bg-white drop-shadow rounded-rectangle">
                <div className="flex justify-around align-center east-container">
                    <div className="east-left">
                        <Heading
                            text="E.A.S.T."
                            font="Montserrat"
                            size="3rem"
                            fontWeight={900}
                            letterSpacing={8}
                            maxWidth={500}
                        />
                        <Heading
                            text="SCHOLARSHIP TEST"
                            font="Montserrat"
                            size="1.4rem"
                            fontWeight={400}
                            letterSpacing={8}
                            maxWidth={500}
                        />
                        <Space amt={30} />
                        <Heading
                            text="Organized by IITians,NITians grads, E.A.S.T. is an Edresco Admission cum Scholarship Test backed by the Edresco primarily to search talented candidates, provide recognition and exposure, and extend maximum support to the unprivileged and deserved through scholarships, so that more and more students can fulfill their dream of a better education."
                            font="PT Sans"
                            size="0.9rem"
                            fontWeight={400}
                            maxWidth={500}
                        />
                        <Space amt={10} />
                        <Heading
                            text="Support to the unprivileged and deserved through scholarships, so that more and more students can fulfill their dream of a better education."
                            font="PT Sans"
                            size="0.9rem"
                            fontWeight={400}
                            maxWidth={500}
                        />
                        <Space amt={30} />
                        <Button
                            text="Register"
                            bgColor="#0056B8"
                            fgColor="#fff"
                            width={150}
                            height={35}
                            type="filled"
                            linkTo="/register"
                        />
                    </div>
                    <div className="east-right">
                        <div className="img-container"></div>
                    </div>
                </div>
            </div>
            <Space amt={30} />
            <div className="benefits-container container">
                <div className="container flex justify-center align-center">
                    <Heading
                        text="Benefits for Students in Edresco (through E.A.S.T.)"
                        font="Montserrat"
                        size="1.4rem"
                        fontWeight={500}
                        maxWidth={600}
                        color="#fff"
                        center={true}
                    />
                </div>
                <Space amt={24} />
                <div className="container">
                    <div className="east-benefits-card-container flex justify-center align-center wrap">
                        {content.map((c) => (
                            <div className="east-benefit-card bg-white drop-shadow rounded-rectangle flex flex-column justify-center align-center hover-effect">
                                <div className="top">
                                    <img src={c.img} alt="" />
                                </div>
                                <div className="bottom">
                                    <Heading
                                        text={c.heading}
                                        font="PT Sans"
                                        size="1.14rem"
                                        fontWeight={800}
                                        maxWidth={280}
                                        center={true}
                                    />
                                    <Heading
                                        text={c.subHeading}
                                        font="PT Sans"
                                        size="0.9rem"
                                        fontWeight={500}
                                        maxWidth={260}
                                        center={true}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {props.width >= 600 ? <Space amt={30} /> : <Space amt={15} />}
            <div className="objectives-of-east bg-white drop-shadow container rounded-rectangle">
                <Space amt={30} />
                <Heading
                    text="Objectives of EAST"
                    font="Montserrat"
                    size="1.4rem"
                    fontWeight={600}
                    maxWidth={"100%"}
                    center={true}
                    underline={true}
                />
                <div className="objectives grid-2c">
                    {contentObj.map((c) => (
                        <ObjectiveCard img={c.img} heading={c.heading} text={c.text} />
                    ))}
                </div>
                <Space amt={30} />
            </div>
            {props.width >= 600 ? <Space amt={30} /> : <Space amt={15} />}
            <Footer />
        </section>
    );
};

export default ScholarshipPage;
