import "./styles/index.scss";
interface PropTypes {
    text: string;
    size: string;
    fontWeight: number;
    maxWidth: number;
    font: "Raleway" | "PT Sans";
    padding?: string;
    color?: string;
}
const Heading = (props: PropTypes) => {
    return (
        <p
            className="heading"
            style={{
                fontFamily: props.font,
                fontWeight: props.fontWeight,
                color: props.color ? props.color : "#3E3E3E",
                maxWidth: props.maxWidth,
                fontSize: props.size,
                padding: props.padding,
            }}
        >
            {props.text}
        </p>
    );
};

export default Heading;
