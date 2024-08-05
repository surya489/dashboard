import React, { useState, useEffect, useRef } from "react";
import SidebarBackgroundSettings from "./SidebarBackgroundSettings/SidebarBackgroundSettings";
import Sidebar from "./Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from '@fortawesome/free-solid-svg-icons';
import bg_1 from '../assets/images/bg_1.jpg';

const ParentComponent = () => {
    const buttonRef = useRef(null);
    const sidebarRef = useRef(null);
    const [activeBadge, setActiveBadge] = useState(localStorage.getItem('activeBadge') || 'primary');
    const [buttonWidth, setButtonWidth] = useState(0);
    const [showSidebar, setShowSidebar] = useState(false);
    const [bgImage, setBgImage] = useState(localStorage.getItem('bgImage') || bg_1);
    const [bgImageState, setBgImageState] = useState(localStorage.getItem('bgImageState') === 'true');

    const handleBadgeChange = (badge) => {
        setActiveBadge(badge);
        localStorage.setItem('activeBadge', badge);
    };

    const handleSetBgImage = () => {
        setBgImageState(!bgImageState);
        localStorage.setItem('bgImageState', !bgImageState);
    };

    const handleBgImageChange = (imageSrc) => {
        setBgImage(imageSrc);
        localStorage.setItem('bgImage', imageSrc);
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
