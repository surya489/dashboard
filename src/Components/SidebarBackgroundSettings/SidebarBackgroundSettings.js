import React, { useState } from "react";
import './SidebarBackgroundSettings.css';

import bg_1 from '../../assets/images/bg_1.jpg';
import bg_2 from '../../assets/images/bg_2.jpg';
import bg_3 from '../../assets/images/bg_3.jpg';
import bg_4 from '../../assets/images/bg_4.jpg';

const SidebarBackgroundSettings = ({ buttonWidth, className }) => {
    const [activeBadge, setActiveBadge] = useState(null);

    const handleBadgeClick = (badge) => {
        setActiveBadge(badge);
    };

    return (
        <div className={`${className ? className : ''} background_settings`} style={{ right: buttonWidth + 10 + 'px' }}>
            <li className="image_checkbox d_flex">
                <p>Background Image</p>
                <div>
                    <input type="checkbox" id="custom_checkbox" />
                    <label htmlFor='custom_checkbox' />
                </div>
            </li>
            <li className="d_flex filters_wrap">
                <p>Filters</p>
                <div className="d_flex mb_0">
                    <span
                        className={`badge badge_primary ${activeBadge === 'primary' ? 'active' : ''}`}
                        onClick={() => handleBadgeClick('primary')}
                    ></span>
                    <span
                        className={`badge badge_secondary ${activeBadge === 'secondary' ? 'active' : ''}`}
                        onClick={() => handleBadgeClick('secondary')}
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
                    <li>
                        <a href="/">
                            <img src={bg_1} alt="sidebar background" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={bg_2} alt="sidebar background" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={bg_3} alt="sidebar background" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={bg_4} alt="sidebar background" />
                        </a>
                    </li>
                </div>
            </li>
        </div>
    );
}

export default SidebarBackgroundSettings;
