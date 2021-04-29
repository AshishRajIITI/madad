import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";
import Home from "./Home";


const Main = () => {

    return (
        <div>
            <Header />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;