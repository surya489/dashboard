import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faTable, faIcons, faMap, faBell, faRocket, faClipboard } from '@fortawesome/free-solid-svg-icons';

import './Sidebar.css';

import Right from '../Right/Right';
import Button from '../Button/Button';

const Sidebar = () => {
    return (
        <Right>
            <div className="sidebar">
                <div className='sidbar_wrap'>
                    <div className="logo">CREATIVE TIM</div>
                    <ul>
                        <li>
                            <Link to="/">
                                <span><FontAwesomeIcon icon={faTachometerAlt} /></span>
                                <span className="f_16">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user-profile">
                                <span><FontAwesomeIcon icon={faUser} /></span>
                                <span className="f_16">User Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/table-list">
                                <span><FontAwesomeIcon icon={faTable} /></span>
                                <span className="f_16">Table List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/typography">
                                <span><FontAwesomeIcon icon={faClipboard} /></span>
                                <span className="f_16">Typography</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/icons">
                                <span><FontAwesomeIcon icon={faIcons} /></span>
                                <span className="f_16">Icons</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/maps">
                                <span><FontAwesomeIcon icon={faMap} /></span>
                                <span className="f_16">Maps</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/notifications">
                                <span><FontAwesomeIcon icon={faBell} /></span>
                                <span className="f_16">Notifications</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='btn_wrap'>
                    <Button href="/" isLink className="custom_btn">
                        <span><FontAwesomeIcon icon={faRocket} /></span>
                        <span className="f_16">Custom Button</span>
                    </Button>
                </div>
            </div>
        </Right>
    );
}

export default Sidebar;
