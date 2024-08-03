import React, { useState, useEffect, useRef } from "react";
import SidebarBackgroundSettings from "./SidebarBackgroundSettings/SidebarBackgroundSettings";
import Sidebar from "./Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from '@fortawesome/free-solid-svg-icons';
import bg_1 from '../assets/images/bg_1.jpg';

const ParentComponent = () => {
    const buttonRef = useRef(null);
    const sidebarRef = useRef(null);
    const [activeBadge, setActiveBadge] = useState(null);
    const [buttonWidth, setButtonWidth] = useState(0);
    const [showSidebar, setShowSidebar] = useState(false);
    const [bgImage, setBgImage] = useState(bg_1);
    const [bgImageState, setBgImageState] = useState(false);


    const handleBadgeChange = (badge) => {
        setActiveBadge(badge);
    };

    const handleSetBgImage = () => {
        setBgImageState(!bgImageState);
    }

    const handleBgImageChange = (imageSrc) => {
        setBgImage(imageSrc);
    };

    useEffect(() => {
        const updateButtonWidth = () => {
            if (buttonRef.current) {
                setButtonWidth(buttonRef.current.offsetWidth);
            }
        };

        updateButtonWidth();
        window.addEventListener('resize', updateButtonWidth);
        return () => window.removeEventListener('resize', updateButtonWidth);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showSidebar && sidebarRef.current && !sidebarRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setShowSidebar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showSidebar]);

    const toggleSidebar = () => {
        setShowSidebar(prevState => !prevState);
    };

    return (
        <div className="parent-container">
            <SidebarBackgroundSettings
                buttonWidth={buttonWidth}
                className={`${showSidebar ? 'show' : 'hide'}`}
                onBadgeChange={handleBadgeChange}
                onBgImageChange={handleBgImageChange}
                onHandleSetBgImage={handleSetBgImage}
            />
            <Sidebar
                activeBadge={activeBadge}
                bgImage={bgImage}
                className={`${bgImageState ? 'has_bg_image' : 'no_bg_image'}`}
            />
            <div className="fixed_btn_wrap">
                <button className="button fixed" ref={buttonRef} onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faCog} />
                </button>
            </div>
        </div>
    );
}

export default ParentComponent;
