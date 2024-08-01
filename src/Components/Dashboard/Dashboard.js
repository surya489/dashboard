import React from "react";
import "./Dashboard.css";
import { faChartPie, faLightbulb, faBezierCurve, faHeart, faSyncAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import Left from "../Left/Left";
import NavBar from "../Navbar/Navbar";
import Card from "../Card/Card";

const Dashboard = () => {
    return (
        <Left>
            <NavBar />
            <div className="dashboard_cards_wrap">
                <Card
                    icon={faChartPie}
                    iconColor="orange"
                    title="Number"
                    text="150GB"
                    status="Update Now"
                    statusIcon={faSyncAlt}
                />
                <Card
                    icon={faLightbulb}
                    iconColor="#87cb16"
                    title="Revenue"
                    text="$ 1,345"
                    status="Update Now"
                    statusIcon={faCalendarAlt}
                />
                <Card
                    icon={faBezierCurve}
                    iconColor="#ff4a55"
                    title="Errors"
                    text="23"
                    status="Update Now"
                    statusIcon={faSyncAlt}
                />
                <Card
                    icon={faHeart}
                    iconColor="#1d62f0"
                    title="Followers"
                    text="+45K"
                    status="Update Now"
                    statusIcon={faSyncAlt}
                />
            </div>
        </Left>
    )
}

export default Dashboard;
