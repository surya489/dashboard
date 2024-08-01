import React from "react";
import './Right.css';

const Right = ({ children, className }) => {
    return (
        <div className={`${className ? className : ''} right`}>
            {children}
        </div>
    )
}

export default Right;