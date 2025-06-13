import React from "react";
import './Footer.css';

const Footer = () => {
  return (
        <div className='final-container'>
            <div className='closing'>
                <div className='closing1'>
                    <img src="/logo.png" alt="" />
                    <p>Empowering businesses with cutting-edge AI solutions to drive innovation and growth.</p>
                </div>
                <div className='closing2'>
                    <div>
                    <p>Product</p>
                    <div className='you'>
                        <p>Feature</p>
                        <p>Template</p>
                        <p>Pricing</p>
                        <p>Tesmonals</p>
                    </div>
                    </div>
                    <div>
                    <p>Resources</p>
                    <div className='you'>
                        <p>Feature</p>
                        <p>Template</p>
                        <p>Pricing</p>
                        <p>Tesmonals</p>
                    </div>
                    </div>
                    <div>
                    <p>Company</p>
                    <div className='you'>
                        <p>Feature</p>
                        <p>Template</p>
                        <p>Pricing</p>
                        <p>Tesmonals</p>
                    </div>
                    </div>
                </div>
                <div className="closing3">
                    <h3>Newsletter</h3>
                    <div>
                        <input type="text" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                    <p>Subscribe to our newsletter for the latest AI insights and updates.</p>
                </div>
            </div>

            <div className='last-four'>
                <p>Artizence.com@2025</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Manage Cookies</p>
            </div>
        </div>
  );
};

export default Footer;
