import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import ApplicationViews from './ApplicationViews';

ReactDOM.render((
    <Router>
        <ApplicationViews />
    </Router>
), document.getElementById('root'));