interface PropTypes {
    text: string;
    size: string;
    fontWeight: number;
    maxWidth: number;
    font: "Raleway" | "PT Sans";
}
const Heading = (props: PropTypes) => {
    return (
        <p
            style={{
                fontFamily: props.font,
                fontWeight: props.fontWeight,
                color: "#3E3E3E",
                maxWidth: props.maxWidth,
                fontSize: props.size,
            }}
        >
            {props.text}
        </p>
    );
};

export default Heading;
