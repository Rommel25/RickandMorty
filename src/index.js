import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Router} from "./Routage/Router";
import {Route} from "react-router-dom";
import {PrivateRoute} from "./Components/privateRoute";
import {PersonnageFavoris} from "./Components/PersonnageFavoris";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
);
