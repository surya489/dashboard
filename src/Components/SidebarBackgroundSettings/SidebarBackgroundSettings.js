import React, { useState, useEffect } from "react";
import './SidebarBackgroundSettings.css';

import bg_1 from '../../assets/images/bg_1.jpg';
import bg_2 from '../../assets/images/bg_2.jpg';
import bg_3 from '../../assets/images/bg_3.jpg';
import bg_4 from '../../assets/images/bg_4.jpg';

const SidebarBackgroundSettings = ({ buttonWidth, className, onBadgeChange, onBgImageChange, onHandleSetBgImage }) => {
    const initialBadge = localStorage.getItem('activeBadge') || 'secondary';
    const initialBgImage = localStorage.getItem('bgImage') || bg_1;
    const initialBgImageState = localStorage.getItem('bgImageState') === 'true';

    const [activeBadge, setActiveBadge] = useState(initialBadge);
    const [activeBgImage, setActiveBgImage] = useState(initialBgImage);
    const [bgImageState, setBgImageState] = useState(initialBgImageState);

    const handleBadgeClick = (badge) => {
        setActiveBadge(badge);
    };

    const handleActiveBgImage = (activeImageClass) => {
        setActiveBgImage(activeImageClass);
    }

    // Notify parent component about the badge change
    useEffect(() => {
        if (onBadgeChange) {
            onBadgeChange(activeBadge);
        }
    }, [activeBadge, onBadgeChange]);

    useEffect(() => {
        if (onBgImageChange) {
            onBgImageChange(activeBgImage);
        }
    }, [activeBgImage, onBgImageChange]);

    const handleCheckboxChange = () => {
        setBgImageState(prevState => !prevState);
        onHandleSetBgImage();
    };

    return (
        <div className={`${className ? className : ''} background_settings`} style={{ right: buttonWidth + 10 + 'px' }}>
            <li className="image_checkbox d_flex">
                <p>Background Image</p>
                <div>
                    <input type="checkbox" id="custom_checkbox" checked={bgImageState} onChange={handleCheckboxChange} />
                    <label htmlFor='custom_checkbox' />
                </div>
            </li>
            <li className="d_flex filters_wrap">
                <p>Filters</p>
                <div className="d_flex mb_0">
                    <span
                        className={`badge badge_secondary ${activeBadge === 'secondary' ? 'active' : ''}`}
                        onClick={() => handleBadgeClick('secondary')}
                    ></span>
                    <span
                        className={`badge badge_primary ${activeBadge === 'primary' ? 'active' : ''}`}
                        onClick={() => handleBadgeClick('primary')}
                    ></span>
                    <span
                        className={`badge badge_azure ${activeBadge === 'azure' ? 'active' : ''}`}
                        onClick={() => handleBadgeClick('azure')}
                    ></span>
                    <span
                        className={`badge badge_green ${activeBadge === 'green' ? 'active' : ''}`}
                        onClick={() => handleBadgeClick('green')}
                    ></span>
                    <span
                        className={`badge badge_red ${activeBadge === 'red' ? 'active' : ''}`}
                        onClick={() => handleBadgeClick('red')}
                    ></span>
                    <span
                        className={`badge badge_orange ${activeBadge === 'orange' ? 'active' : ''}`}
                        onClick={() => handleBadgeClick('orange')}
                    ></span>
                </div>
            </li>
            <li>
                <p className="align_c">Sidebar Images</p>
                <div className="d_flex mb_0 bg_img_wrap">
                    <li className={`${activeBgImage === bg_1 ? 'activeImage' : ''}`} onClick={() => handleActiveBgImage(bg_1)}>
                        <span onClick={() => onBgImageChange(bg_1)}>
                            <img src={bg_1} alt="sidebar background" />
                        </span>
                    </li>
                    <li className={`${activeBgImage === bg_2 ? 'activeImage' : ''}`} onClick={() => handleActiveBgImage(bg_2)}>
                        <span onClick={() => onBgImageChange(bg_2)}>
                            <img src={bg_2} alt="sidebar background" />
                        </span>
                    </li>
                    <li className={`${activeBgImage === bg_3 ? 'activeImage' : ''}`} onClick={() => handleActiveBgImage(bg_3)}>
                        <span onClick={() => onBgImageChange(bg_3)}>
                            <img src={bg_3} alt="sidebar background" />
                        </span>
                    </li>
                    <li className={`${activeBgImage === bg_4 ? 'activeImage' : ''}`} onClick={() => handleActiveBgImage(bg_4)}>
                        <span onClick={() => onBgImageChange(bg_4)}>
                            <img src={bg_4} alt="sidebar background" />
                        </span>
                    </li>
                </div>
            </li>
        </div>
    );
}

export default SidebarBackgroundSettings;
