import React from "react";
import Heading from "../../../../global/components/heading";

const GoalsSection = () => {
    return (
        <div className="goals container">
            <Heading
                text="Achieve your goals with us!"
                maxWidth={600}
                size="1.4rem"
                fontWeight={700}
                font={"Raleway"}
            />
        </div>
    );
};

export default GoalsSection;
