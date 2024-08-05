import React from "react";
import './UserProfile.css';

import Left from "../Left/Left";
import Navbar from '../Navbar/Navbar';
import User from '../User/User';

const UserProfile = () => {
    return (
        <Left>
            <Navbar title={"User Profile"} />
            <User
                name="Jaya Surya"
                id="surya4899"
                bio="Effortlessly Fabulous"
            />
        </Left>
    )
}


export default UserProfile;