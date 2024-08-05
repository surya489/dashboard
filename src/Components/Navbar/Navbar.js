import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faGlobe, faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Button from "../Button/Button";

const Navbar = ({ title }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="nav_wrap">
            <div className="nav_left">
                <ul className="nav_left_wrap">
                    <li className="nav_left_items">
                        <Button href="/" isLink className="custom_btn">{title}</Button>
                    </li>
                    <li className="nav_left_items">
                        <span><FontAwesomeIcon icon={faTachometerAlt} /></span>
                    </li>
                    <li className="nav_left_items">
                        <span><FontAwesomeIcon icon={faGlobe} /></span>
                    </li>
                    <li className="nav_left_items">
                        <Button isLink className=''>
                            <span><FontAwesomeIcon icon={faSearch} /></span>
                            <span>Search</span>
                        </Button>
                    </li>
                </ul>
            </div>
            <div className="nav_right">
                <ul className="nav_right_wrap">
                    <li className="nav_right_items">
                        Account
                    </li>
                    <li className={`${isDropdownVisible ? 'show' : 'hide'} nav_right_items dropdown`} onClick={toggleDropdown}>
                        <span>Dropdown</span>
                        <span><FontAwesomeIcon icon={faChevronDown} /></span>
                        {isDropdownVisible && (
                            <ul className="dropdown_menu">
                                <li>
                                    <a href="/">Action</a>
                                </li>
                                <li>
                                    <a href="/">Another action</a>
                                </li>
                                <li>
                                    <a href="/">Something</a>
                                </li>
                                <li>
                                    <a href="/">Something else here</a>
                                </li>
                                <li>
                                    <a href="/">Separated link</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="nav_right_items">
                        Log Out
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
