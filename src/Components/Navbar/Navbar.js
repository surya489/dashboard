import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faGlobe, faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Button from "../Button/Button";

const Navbar = ({ title, isSeparateLink }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [dropDownHeight, setDropDownHeight] = useState(0);
    const dropDownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleClickOutside = (e) => {
        if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
            setIsDropdownVisible(false);
        }
    };

    useEffect(() => {
        const updateDropDownHeight = () => {
            if (dropDownRef.current) {
                setDropDownHeight(dropDownRef.current.scrollHeight);
            }
        };

        if (isDropdownVisible) {
            updateDropDownHeight();
        }

        window.addEventListener('resize', updateDropDownHeight);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('resize', updateDropDownHeight);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownVisible, dropDownHeight]);

    return (
        <div className="nav_wrap">
            <div className="nav_left">
                <ul className="nav_left_wrap">
                    <li className="nav_left_items">
                        <Button href="/" isLink className="custom_link_btn">{title}</Button>
                    </li>
                    <li className="nav_left_items">
                        <Button isLink className="custom_link_btn">
                            <span><FontAwesomeIcon icon={faTachometerAlt} /></span>
                        </Button>
                    </li>
                    <li className="nav_left_items">
                        <Button isLink className="custom_link_btn">
                            <span><FontAwesomeIcon icon={faGlobe} /></span>
                            <span className="notification">5</span>
                        </Button>
                    </li>
                    <li className="nav_left_items">
                        <Button isLink className='custom_link_btn'>
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
                        <div ref={dropDownRef}>Dropdown
                            <span><FontAwesomeIcon icon={faChevronDown} /></span>
                        </div>
                        {isDropdownVisible && (
                            <div className="dropdown_menu" style={{ top: dropDownHeight + 17 + 'px' }}>
                                <ul>
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
                                    {isSeparateLink && (
                                        <li className="separate_link">
                                            <a href="/">Separated link</a>
                                        </li>
                                    )}
                                </ul>
                            </div>
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
