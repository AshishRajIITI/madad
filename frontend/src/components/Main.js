import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Donors from './Donors'
import Seekers from "./Seekers";
import Awareness from "./Awareness";
//import ContactUs from "./";

function Main() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/home" component={Home} />
                <Route exact path="/donors" component={() => <Donors />} />
                <Route exact path="/seekers" component={Seekers} />
                <Route exact path="/awareness" component={Awareness} />
                {/* <Route exact path="/contactUs" component={ContactUs} /> */}
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );

}

export default Main;