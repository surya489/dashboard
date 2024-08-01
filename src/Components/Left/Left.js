import React from "react";
import "./Left.css";

const Left = ({ children, className }) => {
    return (
        <div className={`${className ? className : ''} left`}>
            {children}
        </div >
    )
}

export default Left;