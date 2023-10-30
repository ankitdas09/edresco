import Button from "../../../../global/components/btn";
import Heading from "../../../../global/components/heading";
import Space from "../../../../global/components/space";
import CourseCard from "./components/course-card";

import "./styles/index.scss";

const content = ["Disha", "Parishram", "Fresher", "Achiever", "Target"];

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
                <div className="flex justify-center align-center">
                    <div className="course-card-right-triple">
                        <CourseCard text={content[0]} class="For class 9" key={0} />
                        <CourseCard text={content[1]} class="For class 10" key={1} />
                        <CourseCard text={content[2]} class="For class 11" key={2} />
                    </div>
                    <div className="course-card-right-double">
                        <CourseCard text={content[3]} class="For class 12" key={3} />
                        <CourseCard text={content[4]} class="For Droppers" key={4} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPrepSection;
