import React from 'react';
import Footer from './Footer/Footer';
import Home from './Home';
import './MainHome.css';

const MainHome = () => {
    return (
        <div className="mainhome-container">
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default MainHome;