import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import UserProfile from './Components/UserProfile/UserProfile';
import TableList from './Components/TableList/TableList';
import Typography from './Components/Typography/Typography';
import Icons from './Components/Icons/Icons';
import Maps from './Components/Maps/Maps';
import Notifications from './Components/Notifications/Notifications';
import ParentComponent from './Components/ParentComponent';

const App = () => {
    return (
        <Router>
            <div className="App">
                <ParentComponent />
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
