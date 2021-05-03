import { GrFacebook, GrInstagram, GrTwitter, GrLinkedin } from "react-icons/gr";
import { BiCopyright } from 'react-icons/bi';

import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (

    <div className="footer">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/donors">Donors</Link></li>
              <li><Link to="/seekers">Seekers</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
          <p>Quick Links</p>
          <ul>
            <li className="list-unstyled">
              <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019?gclid=Cj0KCQjwsqmEBhDiARIsANV8H3Z9S2QOOEpwE5kNxleFkJ0lr57jaTgfQk7WJOBPfwKZ-XJP8ZJib-4aAqSgEALw_wcB" >WHO</a>
            </li>
            <li className="list-unstyled">
              <a href="https://www.aarogyasetu.gov.in/">Arogya Setu</a>
            </li>
            <li className="list-unstyled">
              <a href="https://www.mohfw.gov.in/">Ministry of Health</a>
            </li>
            <li className="list-unstyled">
              <a href="https://www.nhp.gov.in/">National Health Portal</a>
            </li>
          </ul>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <ul className="nav">
                <li className="list-unstyled p-5">
                  <a href="https://www.iiti.ac.in/">
                    <GrFacebook />
                  </a>
                </li>
                <li className="list-unstyled p-5">
                  <a href="https://twitter.com/MADAD34598902">
                    <GrTwitter />
                  </a>
                </li>
                <li className="list-unstyled p-5">
                  <a href="https://www.iiti.ac.in/">
                    <GrInstagram />
                  </a>
                </li>
                <li className="list-unstyled p-5">
                  <a href="https://www.iiti.ac.in/">
                    <GrLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
        <p className="text-muted"><small>Disclaimer: The user understands that the data provided on this website is collected and verified by volunteers to the best of their ability. However we sincerely request the users to reverify and confirm the identity of any vendor or service provider. Since Madad.in is a non-profit initiatives, supported by a team of SnT Council, IIT Indore, we do not ask for any donation or monetary support. Any commercial/ financial deal or purchase must be done by the user on his/her ability to judge the information. IIT Indore is not liable/ responsible in any way for any loss/damage of any kind (direct/ indirect/ consequential or otherwise). The user must understand that the real-time verification of the data is neither a responsibility, nor a liability of the SnTC/IIT Indore in any manner whatsoever.
        </small>
        </p>
  </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p className="text-muted"><BiCopyright></BiCopyright> Copyright 2021 MADAD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

