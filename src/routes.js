import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import pages
import { LoginPage, RegisterPage, LandingPage, ProfilePage } from './components/pages/index';

const routes = (
    <Router>
        <Route exact path="/" name="Home" component={LandingPage} />
        <Route exact path="/login" name="Login" component={LoginPage} />
        <Route exact path="/register" name="Register" component={RegisterPage} />
        <Route exact path="/profile" name="Profile" component={ProfilePage} />
    </Router>
);

export default routes;
