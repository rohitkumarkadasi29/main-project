import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import PrivateRoute from "../components/private-route/PrivateRoute";
import App from '../components/App';
import Header from '../components/Header';
import FilesList from '../components/FilesList';
import LandingPage from '../components/Layout/Landing';
import store from "../store";
import Getstarted from '../components/Start/Getstarted';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Dashboard from '../components/dashboard/Dashboard';

// Check for token to keep user logged in
if (localStorage.jwtToken) {

  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds

  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter>
      {/* <div className="container"> */}
      {/* <Header /> */}
      {/* <div className="main-content"> */}

      <Route path="/" exact={true} component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/getstarted" component={Getstarted} />

      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        {/* <PrivateRoute exact path="/header" component={Header} /> */}
      </Switch>

      <div className="container">
        <Route path="/header" exact={true} component={Header} />
        <div className="main-content">
          {/* <Route path="/app" exact={true} component={App} /> */}
          <Route path="/list" component={FilesList} />
        </div>
      </div>

      {/* </div> */}
      {/* </div> */}
    </BrowserRouter>
  </Provider>
);

export default AppRouter;
