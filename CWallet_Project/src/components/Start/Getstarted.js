import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logoWallet from '../../images/dv6y2019345552019-04-142645832Happy-Wallet.jpg';
import accessIcon from '../../images/easy-icon-8.png';
import secureIcon from '../../images/kisspng-password-manager-user-computer-icons-password-safe-safe-5ab63a34a95e01.4146786915218918926937.png';

import './Getstarted.css'

class getStarted extends Component {
    render() {
        return (
            <div>
                <div className="navbar-fixed navbar-container">
                    <nav className="z-depth-0">
                        <div className="nav-wrapper white">
                            <Link to="/"
                                style={{
                                    fontFamily: "'Josefin Sans', sans-serif",
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
                    </nav>
                </div>
                <div className="img-text-wrapper">
                    <div className="img-wrapper">
                        <img src={accessIcon} className="accessIcon" />
                    </div>
                    <div className="text-wrapper">
                        <div className="Quote">
                            Easy access to all of your content
                        </div>
                        <div className="subQuote">
                            With Certificate Wallet, you can store, and access your content from any where.
                        </div>
                    </div>
                </div>

                <div className="img-text-wrapper2">

                    <div className="text-wrapper">
                        <div className="Quote2">
                            Secure access to all of your content
                        </div>
                        <div className="subQuote2">
                            Certificate Wallet provides you a secure storage space for your content.
                        </div>
                    </div>
                    <div className="img-wrapper">
                        <img src={secureIcon} className="secureIcon" />
                    </div>
                </div>

            </div>

        );
    }
}

export default getStarted;