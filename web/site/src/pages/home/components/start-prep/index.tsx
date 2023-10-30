import Button from "../../../../global/components/btn";
import Heading from "../../../../global/components/heading";
import Space from "../../../../global/components/space";
import CourseCard from "./components/course-card";

import "./styles/index.scss";

const content = ["Pre Foundation Course", "Foundation Course", "Fresher Course", "Dropper Course"];

const StartPrepSection = () => {
    return (
        <div className="start-prep-container container flex">
            <div className="start-prep-left">
                <Heading
                    text="Start the Preparations!"
                    size="1.8rem"
                    fontWeight={600}
                    font="Montserrat"
                    maxWidth={1000}
                />
                <Space amt={24} />
                <Heading
                    text={
                        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
                    }
                    size="1rem"
                    font="PT Sans"
                    fontWeight={400}
                    maxWidth={500}
                />
                <Heading
                    text={"Join us now and start achieving your goals."}
                    size="1rem"
                    font="PT Sans"
                    fontWeight={400}
                    maxWidth={500}
                />
                <Space amt={10} />
                <Heading
                    text={"For more info"}
                    size="1rem"
                    font="PT Sans"
                    fontWeight={400}
                    maxWidth={500}
                />
                <Space amt={24} />
                <Button
                    text="Join Now!"
                    width={170}
                    height={45}
                    fontSize="1rem"
                    type="filled"
                    bgColor="#0056B8"
                    fgColor="#fff"
                    linkTo="courses"
                />
            </div>
            <div className="start-prep-right">
                <div className="course-card-container">
                    {content.map((c, idx) => (
                        <CourseCard text={c} key={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StartPrepSection;
