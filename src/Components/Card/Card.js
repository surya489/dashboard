import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Card.css';

const Card = ({ icon, title, text, status, statusIcon, iconColor }) => {
    return (
        <div className="dashboard_cards">
            <div className="card">
                <div className="card_info">
                    <div className='card_img_wrap'>
                        <FontAwesomeIcon icon={icon} size="3x" color={iconColor} />
                    </div>
                    <div className='card_text_wrap'>
                        <h4 className='f_14'>{title}</h4>
                        <h2 className='f_22'>{text}</h2>
                    </div>
                </div>
                <div className='card_status'>
                    <span className='line'></span>
                    <p><FontAwesomeIcon icon={statusIcon} /> {status}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
