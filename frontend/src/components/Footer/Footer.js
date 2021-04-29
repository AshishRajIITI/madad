import './Footer.css';
import { Row, Col } from "reactstrap";
import { GrFacebook, GrInstagram, GrTwitter, GrLinkedin } from "react-icons/gr";
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="footer bg-primary">
      <Row className="footer-row">
        <Col className="footer-title">Madad</Col>
        <Col>
          <p>Quick Links</p>
          <ul>
            <li className="list-unstyled">
              <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019?gclid=Cj0KCQjwsqmEBhDiARIsANV8H3Z9S2QOOEpwE5kNxleFkJ0lr57jaTgfQk7WJOBPfwKZ-XJP8ZJib-4aAqSgEALw_wcB" target="_blank">WHO</a>
            </li>
            <li className="list-unstyled">
              <a href="https://www.aarogyasetu.gov.in/" target="_blank">Arogya Setu</a>
            </li>
            <li className="list-unstyled">
              <a href="https://www.mohfw.gov.in/" target="_blank">Ministry of Health</a>
            </li>
            <li className="list-unstyled">
              <a href="https://www.nhp.gov.in/" target="_blank">National Health Portal</a>
            </li>
          </ul>
        </Col>
        <Col>
          <p>Categories</p>
          <ul>
            <li className="list-unstyled">
              <a href="">Donor</a>
            </li>
            <li className="list-unstyled">
              <a href="">Seeker</a>
            </li>
            <li className="list-unstyled">
              <a href="">Awareness</a>
            </li>
            <li className="list-unstyled">
              <a href="">Contact Us</a>
            </li>
          </ul>
        </Col>
        <Col>
          <p>Reach Us</p>
          <ul>
            <li className="list-unstyled">
              <a href="">
                <GrFacebook />
              </a>
            </li>
            <li className="list-unstyled">
              <a href="">
                <GrTwitter />
              </a>
            </li>
            <li className="list-unstyled">
              <a href="">
                <GrInstagram />
              </a>
            </li>
            <li className="list-unstyled">
              <a href="">
                <GrLinkedin />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <div className="copyright">
          <span><BiCopyright size={25} /></span> Copyright: {new Date().getFullYear()}
        </div>
      </Row>
    </footer>
  );
};

export default Footer;
