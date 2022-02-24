import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { logoutUser } from "../../actions/authActions";
import App from '../App';

import logoWallet from '../../images/dv6y2019345552019-04-142645832Happy-Wallet.jpg';

import './Dashboard.css';



class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            toggle: false,
            file: "",
            imagePreviewUrl: "",
            fileList: []
        }
    }
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    handleImageChange = (e) => {
        e.preventDefault()
        let reader = new FileReader();
        reader.onload = () => {
            this.setState({ imagePreviewUrl: reader.result })
        }
        reader.readAsDataURL(e.target.files[0])
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { file, imagePreviewUrl, fileList } = this.state;
        fileList.push(imagePreviewUrl)
        this.setState({ fileList })
    }

    toggleHandler = () => {
        const { toggle } = this.state
        this.setState({ toggle: !toggle })
    }

    render() {
        const { user } = this.props.auth;
        return (
            <div>

                <div className="navbar-fixed navbar-container">
                    <nav className="z-depth-0">
                        <div className="nav-wrapper white">
                            <Link to="/dashboard"
                                style={{
                                    fontFamily: "'Josefin Sans', sans-serif",
                                    textDecoration: "none"
                                }}
                                className="col s5 brand-logo left black-text">
                                <img src={logoWallet} className="logoWallet" />
                                <span className="website-title">
                                    Certificate Wallet
                                </span>
                            </Link>
                            <div className="col s4 right-align nav-btn-container">
                                <div className="col s6 col-wrapper">
                                    <button
                                        style={{
                                            width: "150px",
                                            borderRadius: "3px",
                                            letterSpacing: "1.5px",
                                            color: "whitesmoke"
                                        }}
                                        onClick={this.onLogoutClick}
                                        className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                        Logout
                                    </button>
                                </div>

                            </div>
                        </div>
                    </nav>
                </div>

                <div className="header">
                    <nav className="nav-wrapper">
                        <NavLink activeClassName="active" className="nav-home-btn" to="/dashboard" exact={true}>
                            Home
                        </NavLink>
                        <NavLink activeClassName="active" className="nav-home-Listbtn" to="/list">
                            Files List
                        </NavLink>
                    </nav>
                </div>

                <App />

            </div >
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);