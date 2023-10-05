import Card from "../../../../global/components/card";
import Heading from "../../../../global/components/heading";
import Space from "../../../../global/components/space";
import "./styles/index.scss";

const content: { heading: string; subheading: string }[] = [
    {
        heading: "100% Scholarship",
        subheading: "Based on E.A.S.T. Exam",
    },
    {
        heading: "Online Resources",
        subheading: "Access to unlimited all India test series packages",
    },
    {
        heading: "Expert Teachers",
        subheading: "Highly Experienced and Dedicated Faculties",
    },
    {
        heading: "Specialized Mentoring",
        subheading: "Anonymous mentoring and counselling from IITian/NITian",
    },
];

const GoalsSection = () => {
    return (
        <div className="goals container">
            <Heading
                text="Achieve your goals with us!"
                maxWidth={1300}
                size="1.4rem"
                fontWeight={700}
                font={"Raleway"}
                padding={"0 20px"}
            />
            <Space amt={30} />
            <div className="card-container">
                {content.map((c) => (
                    <Card width={290} height={180} heading={c.heading} subHeading={c.subheading} />
                ))}
            </div>
        </div>
    );
};

export default GoalsSection;
