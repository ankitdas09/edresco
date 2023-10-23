import { useNavigate } from "react-router-dom";
import "./styles/index.scss";

interface PropTypes {
    text: string;
    width: number;
    height: number;
    type: "filled" | "outlined";
    bgColor: string;
    fgColor: string;
    linkTo?: string;
    disabled?: boolean;
}

const Button = (props: PropTypes) => {
    const navigate = useNavigate();
    return (
        <button
            className="btn hover-effect"
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
            disabled={props.disabled ? props.disabled : false}
            onClick={() => {
                if (!props.linkTo) return;
                navigate(props.linkTo);
            }}
        >
            {props.text}
        </button>
    );
};

export default Button;
