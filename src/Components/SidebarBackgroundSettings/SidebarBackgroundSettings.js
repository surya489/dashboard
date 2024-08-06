import React, { useState, useEffect, forwardRef } from "react";
import './SidebarBackgroundSettings.css';

import bg_1 from '../../assets/images/bg_1.jpg';
import bg_2 from '../../assets/images/bg_2.jpg';
import bg_3 from '../../assets/images/bg_3.jpg';
import bg_4 from '../../assets/images/bg_4.jpg';

const SidebarBackgroundSettings = forwardRef(({ buttonWidth, className, onBadgeChange, onBgImageChange, onHandleSetBgImage }, ref) => {
    const initialBadge = localStorage.getItem('activeBadge') || 'secondary';
    const initialBgImage = localStorage.getItem('bgImage') || bg_1;
    const initialBgImageState = localStorage.getItem('bgImageState') === 'true';

    const [activeBadge, setActiveBadge] = useState(initialBadge);
    const [activeBgImage, setActiveBgImage] = useState(initialBgImage);
    const [bgImageState, setBgImageState] = useState(initialBgImageState);

    useEffect(() => {
        if (onBadgeChange) onBadgeChange(activeBadge);
    }, [activeBadge, onBadgeChange]);

    useEffect(() => {
        if (onBgImageChange) onBgImageChange(activeBgImage);
    }, [activeBgImage, onBgImageChange]);

    const handleBadgeClick = (badge) => setActiveBadge(badge);
    const handleCheckboxChange = () => {
        setBgImageState(prevState => !prevState);
        onHandleSetBgImage();
    };

    return (
        <div ref={ref} className={`background_settings ${activeBadge}`} style={{ right: buttonWidth + 10 + 'px' }}>
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
                    {['secondary', 'primary', 'azure', 'green', 'red', 'orange'].map(color => (
                        <span
                            key={color}
                            className={`badge badge_${color} ${activeBadge === color ? 'active' : ''}`}
                            onClick={() => handleBadgeClick(color)}
                        ></span>
                    ))}
                </div>
            </li>
            <li>
                <p className="align_c">Sidebar Images</p>
                <div className="d_flex mb_0 bg_img_wrap">
                    {[bg_1, bg_2, bg_3, bg_4].map((image, index) => (
                        <li key={index} className={`${activeBgImage === image ? 'activeImage' : ''}`} onClick={() => setActiveBgImage(image)}>
                            <span onClick={() => onBgImageChange(image)}>
                                <img src={image} alt="sidebar background" />
                            </span>
                        </li>
                    ))}
                </div>
            </li>
        </div>
    );
});

export default SidebarBackgroundSettings;
