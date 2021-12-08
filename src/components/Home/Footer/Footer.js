import React from 'react';
import waveimg from '../../../assets/Home/shape-bg.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-parent">
               <img src={waveimg} alt="" />
            </div>
        </div>
    );
};

export default Footer;