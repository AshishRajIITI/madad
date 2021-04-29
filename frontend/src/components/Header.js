import React from "react";
import './Header.css';

const Header =() =>{
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-primary" style = {{height : 70}}>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#"><b>MADAD</b></a>
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active" >
                            <a class="nav-link" href="#" style = {{color:"white"}}>Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style = {{color:"white" }}>Donor</a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-link" href="#" style = {{color:"white" }}>Seeker</a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-link" href="#" style = {{color:"white" }}>Awareness</a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-link" href="#" style = {{color:"white" }}>Contact Us</a>
                        </li>

                    </ul>
                </div>
            </nav>
        );
}
export default Header;
