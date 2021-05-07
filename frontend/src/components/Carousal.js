import lp4 from "./images/madad4.png";
import lp3 from "./images/madad5.png";
import lp1 from './images/madad1.png';
import lp2 from './images/madad2.png';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    src: lp1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: lp2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
   {
     src: lp3,
   altText: 'Slide 2',
     caption: 'Slide 2'
 },
 {
  src: lp4,
altText: 'Slide 2',
  caption: 'Slide 2'
}
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="carousel-img" src={item.src} alt={item.altText} />
        
      </CarouselItem>
    );
  });

  return (
    <div className="container mt-5">
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default Example;