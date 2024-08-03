import React from "react";
import './Button.css';

const Button = ({ isLink, isDownload, href, onClick, children, isBtnFill, className, isFixed }) => {
    const buttonClass = `button ${isBtnFill ? 'fill' : ''} ${className ? className : ''}`;
    const downloadClass = `button download ${isBtnFill ? 'fill' : 'bordered_btn'} ${className ? className : ''}`;

    if (isLink) {
        return (
            <a href={href} className={buttonClass}>
                {children}
            </a>
        );
    } else if (isDownload) {
        return (
            <a href={href} className={downloadClass} download>
                {children}
            </a>
        );
    }
    return (
        <button onClick={onClick} className={buttonClass}>
            {children}
        </button>
    );
}

export default Button;
