import React from "react";

import "./User.css";

import ProfilePic from "../../assets/images/profilepic.jpeg";
import UserBg from "../../assets/images/user_bg.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const User = ({ name, id, bio }) => {
    return (
        <div className="">
            <div className="f_size_0">
                <img src={UserBg} alt="bg" style={{ maxWidth: '300px' }} />
            </div>
            <div className="profile_pic">
                <img src={ProfilePic} alt="user_profile" />
            </div>
            <div className="user_details">
                <div>
                    <div className="user_name">{name}</div>
                    <div className="user_id">{id}</div>
                    <div className="user_bio">"{bio}"</div>
                </div>
            </div>
            <div className="user_footer">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faGooglePlusG} />
            </div>
        </div>
    )
}

export default User;