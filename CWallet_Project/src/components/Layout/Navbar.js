import React, { Component } from "react";
import { Link } from "react-router-dom";

import logoWallet from '../../images/dv6y2019345552019-04-142645832Happy-Wallet.jpg';
// import laptopIcon from '../images/pngfind.com-frost-frame-png-5112205.png'/;
import image3 from '../../images/cc61d19503e13c5e8d3a41c541a48321.png';
import lockIcon from '../../images/3923394cd604c032c111e28b18846470.jpg';
import floderGif from '../../images/073832a89e9d37b9fbac636cf0c9ead0.gif';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed navbar-container">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link to="/"
                            style={{
                                fontFamily: "'Josefin Sans', sans-serif",
                                textDecoration: "none"
                            }}
                            className="col s5 brand-logo left black-text">
                            <div className="logo-name-wrapper">
                                <img src={logoWallet} className="logoWallet" />
                                <span className="website-title">
                                    Certificate Wallet
                                </span>
                            </div>
                        </Link>

                        <div style={{ height: "15vh" }} className="container halign-wrapper">
                            <div className="row">
                                <div className="col s4 center-align nav-btn-container">
                                    <div className="col s6">
                                        <Link
                                            to="/register"
                                            style={{
                                                width: "140px",
                                                borderRadius: "3px",
                                                letterSpacing: "1.5px",
                                                color: "whitesmoke",
                                            }}
                                            className="btn btn-large waves-effect waves-light hoverable blue accent-3 nav-btn">
                                            Register
                                            </Link>
                                    </div>
                                    <div className="col s6">
                                        <Link
                                            to="/login"
                                            style={{
                                                width: "140px",
                                                borderRadius: "3px",
                                                letterSpacing: "1.5px",
                                                color: "whitesmoke",
                                                marginLeft: "45px"
                                            }}
                                            className="btn btn-large waves-effect waves-light hoverable blue accent-3 nav-btn ">
                                            Log In
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-body-wrapper">
                        <div className="homePageQuote">
                            Easy and secure access to all of your certificates
                            <div className="homePageSubQuote">
                                Store and download your certificates from any mobile device, tablet, or computer
                            </div>
                            <div className="btn-container">
                                <div className="homePageBtn">
                                    <Link
                                        to="/getstarted"
                                        style={{
                                            width: "200px",
                                            borderRadius: "3px",
                                            letterSpacing: "1.5px",
                                            fontSize: "18px",
                                            height: "53px",
                                            color: "whitesmoke"
                                        }}
                                        className="btn btn-large waves-effect waves-light hoverable blue accent-3 nav-btn">
                                        Get Started
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="img-container">
                            <img src={lockIcon} className="lockIcon" />
                            <img src={floderGif} className="floderGif" />
                            <div className="colorEffect">

                            </div>
                            <img src={image3} className="image3" />
                            {/* <img src={laptopIcon} className="laptopIcon" /> */}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbar;