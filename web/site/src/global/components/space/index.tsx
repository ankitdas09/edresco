import React from "react";

interface PropTypes {
    amt: number;
}
const Space = (props: PropTypes) => {
    return <div style={{ margin: props.amt }}></div>;
};

export default Space;
