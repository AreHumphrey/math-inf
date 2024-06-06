import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './pages/App';
import Profile from './pages/Profile';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};

export default Main;
