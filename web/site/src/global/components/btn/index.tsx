import "./styles/index.scss";

interface PropTypes {
    text: string;
    width: number;
    height: number;
    type: "filled" | "outlined";
    bgColor: string;
    fgColor: string;
}

const Button = (props: PropTypes) => {
    return (
        <button
            className="btn"
            style={{
                width: props.width,
                height: props.height,
                backgroundColor: props.type === "filled" ? props.bgColor : "",
                color: props.fgColor,
                border: "none",
                borderRadius: 5,
                fontWeight: 700,
                cursor: "pointer",
            }}
        >
            {props.text}
        </button>
    );
};

export default Button;
