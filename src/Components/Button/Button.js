import React, { useEffect, useState, useRef } from "react";
import './Button.css';

import SidebarBackgroundSettings from '../SidebarBackgroundSettings/SidebarBackgroundSettings';

const Button = ({ isLink, isDownload, href, onClick, children, isBtnFill, className, isFixed }) => {
    const buttonClass = `button ${isBtnFill ? 'fill' : ''} ${className ? className : ''}`;
    const downloadClass = `button download ${isBtnFill ? 'fill' : 'bordered_btn'} ${className ? className : ''}`;
    const fixedClass = `button ${isFixed ? 'fixed' : ''} ${className ? className : ''}`;

    // State and Ref for the button
    const buttonRef = useRef(null);
    const [buttonWidth, setButtonWidth] = useState(0);
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        if (buttonRef.current) {
            setButtonWidth(buttonRef.current.offsetWidth);
        }
    }, [buttonRef]);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

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
    } else if (isFixed) {
        return (
            <div className="fixed_btn_wrap">
                <button ref={buttonRef} className={fixedClass} onClick={toggleSidebar}>
                    {children}
                </button>
                <SidebarBackgroundSettings buttonWidth={buttonWidth} className={showSidebar ? 'show' : 'hide'} />
            </div>
        );
    }

    return (
        <button onClick={onClick} className={buttonClass}>
            {children}
        </button>
    );
}

export default Button;
