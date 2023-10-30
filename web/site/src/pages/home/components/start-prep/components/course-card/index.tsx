import Heading from "../../../../../../global/components/heading";
import "./styles/index.scss";

interface PropTypes {
    text: string;
    class: string;
}

const CourseCard = (props: PropTypes) => {
    return (
        <div className="course-card">
            <Heading
                text={props.text}
                fontWeight={700}
                font="Montserrat"
                size="1.1rem"
                maxWidth={100}
                center={true}
            />
            <Heading
                text={props.class}
                fontWeight={400}
                font="PT Sans"
                size="0.75rem"
                maxWidth={100}
                center={true}
            />
        </div>
    );
};

export default CourseCard;
