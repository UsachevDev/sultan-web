import React from "react";
import "./Icons.scss";

const Icon = ({ name, color = "white" }) => {
    const iconClasses = `ui-icon ui-icon--${name} ui-icon--${color}`;
    
    return <span className={iconClasses} />;
};

export default Icon;
