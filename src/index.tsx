import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import Profile from "./pages/Profile";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Router>
            <Main />
       
        </Router>
    </React.StrictMode>
);

reportWebVitals();
