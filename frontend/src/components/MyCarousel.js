import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import ScrollAnimation from "react-animate-on-scroll";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./OwlCarousel.css";
import "owl.carousel/dist/assets/owl.carousel.css";

import step1  from "./images/step1.jpg";
import step2  from "./images/step2.jpg";
import step3  from "./images/step3.jpg";
import step5  from "./images/step5.jpg";
import step6  from "./images/step6.jpg";

const MyCarousel = () => {

    const[images] = useState([
    {
        img: step1,
    },
    {
        img: step2,
    },
    {
        img: step3,
    },
    {
        img: step5,
    },
    {
        img: step6,
    },

]);

const responsive = {
    3000: {
        items: 5,
    },
    1400: {
        items: 4,
    },
    1024: {
        items: 3,
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
                       
                            <div className="off card mx-3 mb-0">
                                <div className="image-holder">
                                    <img
                                        className="card-img-top"
                                        src={img.img}
                                        alt="Card image cap"
                                    />
                                </div>
                            </div>
                       
                    );
                })}
            </OwlCarousel>
        </ScrollAnimation>
    </div>
);

};

export default MyCarousel;