import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import data from "./data"
import Item from './Item';
import './styles.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@mui/material/Button';


const Blogs = () => {
  let cardWidth = 250;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const settings = {
    speed: 500,
    slidesToShow: Math.floor(windowWidth / cardWidth),
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="container">
      <h2>Blogs</h2>
      <Slider style={{padding: '50px 0px' }} {...settings}>
        {
          data.map((item, idx) => (
            <Item key = {idx} imagePath={item.path} title={item.title} body={item.body} cardWidth={cardWidth}/>
          ))
        }
      </Slider>
      <Button className="view-all-button"><b>View All</b></Button>
    </div>
  );
};

export default Blogs
