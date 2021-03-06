import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import ScrollAnimation from "react-animate-on-scroll";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./OwlCarousel.css";
import "owl.carousel/dist/assets/owl.carousel.css";

import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

import registerImg from './images/register.jpg';
import searchImg from './images/search.jpg';
import connectImg from './images/connect.jpg';
import donateImg from './images/donate.jpg';
import authorizedImg from './images/authorized.jpg';
import servicesImg from './images/services.jpg';

const MyCarousel = () => {

    const[images] = useState([
    {
        img: registerImg,
        head: "Register",
        text: "Register on the portal to get required help in no time"
    },
    {
        img: searchImg,
        head: "Search",
        text: "Quick Search the required help by connecting with 100+ people"
    },
    {
        img: servicesImg,
        head:"Services",
        text:"Plasma, Blood, Oxygen, Food, Medicine and more"
    },
    {
        img: authorizedImg,
        head:"Authorize",
        text:"Our team will keep track of verified resources"
    },
    {
        img: connectImg,
        head:"Connect",
        text:"Our team will help you in connecting with the helper"
    },
    {
        img: donateImg,
        head:"Donate",
        text:"Help our nation by donating into the funds"
    },

]);

const responsive = {
    3000: {
        items: 4,
    },
    1400: {
        items: 3,
    },
    1024: {
        items: 2,
    },
    800: {
        items: 2,
    },
    0: {
        items: 1,
    },
};

return (
    <div className="OfferCar text-center mb-0 ">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <h1 className="mainTitle text-underline">HOW IT WORKS</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
            <OwlCarousel
                className="owl-theme"
                loop={true}
                nav={true}
                dots={false}
                autoplay={true}
                autoplayTimeout={4000}
                items={4}
                responsive={responsive}
            >
                {images.map((img) => {
                    return ( 
                        <Card className="card-height mr-1 ml-1">
                            <CardImg top className="card-feature" width="100%" src={img.img} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h2">{img.head}</CardTitle>
                                <CardText className="cardText">{img.text}</CardText>
                            </CardBody>
                        </Card>
                    );
                })}
            </OwlCarousel>
        </ScrollAnimation>
    </div>
);

};

export default MyCarousel;