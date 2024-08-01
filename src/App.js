import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Button from './Components/Button/Button';
import Dashboard from './Components/Dashboard/Dashboard';
import UserProfile from './Components/UserProfile/UserProfile';
import TableList from './Components/TableList/TableList';
import Typography from './Components/Typography/Typography';
import Icons from './Components/Icons/Icons';
import Maps from './Components/Maps/Maps';
import Notifications from './Components/Notifications/Notifications';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <Button isFixed>
                    <FontAwesomeIcon icon={faCog} />
                </Button>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/user-profile" element={<UserProfile />} />
                    <Route path="/table-list" element={<TableList />} />
                    <Route path="/typography" element={<Typography />} />
                    <Route path="/icons" element={<Icons />} />
                    <Route path="/maps" element={<Maps />} />
                    <Route path="/notifications" element={<Notifications />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
