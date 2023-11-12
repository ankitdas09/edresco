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
import { motion } from "framer-motion";
import { useEffect } from "react";
interface PropTypes {
    width: number;
    height: number;
}

const HomePage = (props: PropTypes) => {
    // const goalsRef = useRef(null);
    // const goalsInView = useInView(goalsRef, { once: true });

    useEffect(() => {}, []);

    return (
        <section
            style={{
                position: "relative",
            }}
        >
            <ScrollToTop />
            <NavBar />
            <HeroSection />
            <motion.div
                // ref={goalsRef}
                variants={{
                    initial: { opacity: 0.3, y: "150" },
                    final: { opacity: 1, y: 0 },
                }}
                initial="initial"
                animate="final"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                {props.width >= 600 ? <Space amt={30} /> : <Space amt={30} />}
                <GoalsSection />
            </motion.div>
            <motion.div
                // ref={goalsRef}
                variants={{
                    initial: { opacity: 0, y: "100" },
                    final: { opacity: 1, y: 0 },
                }}
                initial="initial"
                whileInView="final"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <WhySection />
            </motion.div>
            {/* {props.width >= 600 ? <Space amt={30} /> : <Space amt={60} />} */}
            {props.width >= 600 ? <Space amt={30} /> : <Space amt={30} />}
            <motion.div
                // ref={goalsRef}
                variants={{
                    initial: { opacity: 0, y: "100" },
                    final: { opacity: 1, y: 0 },
                }}
                initial="initial"
                whileInView="final"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <StartPrepSection />
            </motion.div>
            {props.width >= 600 ? <Space amt={30} /> : <Space amt={30} />}
            <motion.div
                // ref={goalsRef}
                variants={{
                    initial: { opacity: 0, y: "100" },
                    final: { opacity: 1, y: 0 },
                }}
                initial="initial"
                whileInView="final"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <ScholarshipSection />
            </motion.div>
            {props.width >= 600 ? <Space amt={30} /> : <Space amt={15} />}
            <Footer />
        </section>
    );
};

export default HomePage;
