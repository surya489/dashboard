import React from "react";
import './UserProfile.css';

import Left from "../Left/Left";
import Navbar from '../Navbar/Navbar';
import User from '../User/User';
import Form from "../Form/Form";

const UserProfile = () => {
    return (
        <Left>
            <Navbar title={"User Profile"} />
            <div className="d_flex align_s m_0">
                <Form title='Edit Profile' className='col_8' formId='edit_profile' />
                <User
                    name="Jaya Surya"
                    id="surya4899"
                    bio="Effortlessly Fabulous"
                    className='col_4'
                />
            </div>
        </Left>
    )
}


export default UserProfile;