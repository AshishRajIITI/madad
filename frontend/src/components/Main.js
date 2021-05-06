import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Donors from './Donors'
import Seekers from "./Seekers";
import Contactus from "./Contactus";
import Awareness from "./Awareness";
import Profile from "./Profile";

import Example from "./providerForm";


import CMFund from "./CMFund";
import Donate from "./donate";
import tnc from "./tnc";

function Main() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/home" component={Home} />
                <Route exact path="/donors" component={() => <Donors />} />
                <Route exact path="/seekers" component={Seekers} />
                <Route exact path="/contactus" component={Contactus} />
                <Route exact path="/donate" component={Donate} />
                <Route exact path="/tnc" component={tnc} />
                <Route exact path="/cmfund" component={CMFund} />
                <Route exact path="/awareness" component={Awareness} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/donorReg" component={()=><Example type="0" />} />
                <Route exact path="/seekerReg" component={()=><Example type="1" />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );

}

export default Main;
