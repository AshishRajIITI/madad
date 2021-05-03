import React from "react";
import { Redirect, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Donors from './Donors'
import Seekers from "./Seekers";
import Contactus from "./Contactus";
import Awareness from "./Awareness";
<<<<<<< HEAD
// import SearchEngine from "./searchEngine";
import MyCarousel from "./MyCarousel";
=======
import SearchEngine from "./searchEngine";
>>>>>>> ca5e6cee1cdc97a1f7ed6a132808b94ee1ab705a

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
<<<<<<< HEAD
                <Route exact path="/donate" component={MyCarousel} />
=======
                <Route exact path="/search" component={SearchEngine} />
>>>>>>> ca5e6cee1cdc97a1f7ed6a132808b94ee1ab705a
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );

}

export default Main;
