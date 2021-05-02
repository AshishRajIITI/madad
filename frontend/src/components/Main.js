import React from "react";
import { Redirect, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Donors from './Donors'
import Seekers from "./Seekers";
import Contactus from "./Contactus";
// import Awareness from "./Awareness";

function Main() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/home" component={Home} />
                <Route exact path="/donors" component={() => <Donors />} />
                <Route exact path="/seekers" component={Seekers} />
                <Route exact path="/contactus" component={Contactus} />
                <Route exact path="/awareness" component={Awareness} /> 
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );
    
}

export default Main;
