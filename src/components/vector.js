import React from "react";
import vector from "../assets/images/Vector.png"

const Vector = () => {
    return (
        <div data-testid="vector-image-design">
            <img className="vector-image" src={vector} alt="vector" />
        </div>
    );
}

export default Vector;