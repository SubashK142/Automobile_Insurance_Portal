import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Slideshow = () => {
  const settings = {
    
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 500, // Set autoplay speed in milliseconds
  };

  return (
    
    <>
    
    <Slider {...settings} style={{width:'100%',height:'100%',overflow:'hidden'}} className='hole'>
    <div className='slide1' >
    
    
      </div>
       <div>
       <img src="slide2.jpg" alt="Slide 2" />
            </div>
            <div>
            <img src="slide3.jpg" alt="Slide 3" />
            </div>
            <div>
            <img src="slide3.jpg" alt="Slide 3" />
            </div>
           <div>
         <img src="slide3.jpg" alt="Slide 3" />
    </div>
    
    
    </Slider>
    <Link to="/login">
    <h1 className='text'>Get Started</h1></Link>
    </>
  );
};

export default Slideshow;