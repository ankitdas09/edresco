import NavBar from "../../global/components/navbar";
import "./styles/index.scss";
import Space from "../../global/components/space";
import Footer from "../../global/components/footer";
import ScrollToTop from "../../scrollToTop";
import Heading from "../../global/components/heading";

import Button from "../../global/components/btn";
interface PropTypes {
    width: number;
    height: number;
}

const ContactPage = (props: PropTypes) => {
    console.log(props);
    return (
        <section className="">
            <ScrollToTop />
            <NavBar />
            <div className="container-sm">
                <Space amt={20} />
                <div className="contact-main-container flex justify-center align-center">
                    <div className="contact-left">
                        <Heading
                            text="Reach out to us."
                            font="Raleway"
                            fontWeight={700}
                            size="1.5rem"
                            maxWidth={"100%"}
                        />
                        <Space amt={12} />
                        <Heading
                            text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                            font="Raleway"
                            fontWeight={400}
                            size="0.9rem"
                            maxWidth={450}
                        />
                        <Space amt={30} />
                        <input type="text" placeholder="Phone Number" className="input-main" />
                        <input type="text" placeholder="Name" className="input-main" />
                        <textarea placeholder="Enter query" className="input-main" rows={5} />
                        <Space amt={20} />
                        <Button
                            text="Submit"
                            width={90}
                            height={30}
                            type="filled"
                            bgColor="#0056B8"
                            fgColor="#fff"
                        />
                    </div>
                    <div className="contact-right">
                        <div className="contact-map-img"></div>
                    </div>
                </div>
                <Space amt={60} />
                <div className="contact-info-container bg-white drop-shadow rounded-rectangle">
                    <Heading
                        text="Contact Us"
                        font="Raleway"
                        fontWeight={700}
                        size="1.0rem"
                        maxWidth={"100%"}
                        center={true}
                    />
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default ContactPage;
