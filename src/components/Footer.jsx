import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col brand-col">
                    <h2 className="footer-logo">HungryDuck</h2>
                    <p>Building the future of hospitality.</p>
                </div>

                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/services">Services</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><Link to="/services">Turnkey Projects</Link></li>
                        <li><Link to="/services">Hotels & Resorts</Link></li>
                        <li><Link to="/services">Nightclubs</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Connect</h4>
                    <ul className="social-links">
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} HungryDuck. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
