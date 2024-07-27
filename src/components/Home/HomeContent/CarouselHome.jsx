import './carouselHome.scss';
import React from 'react';
import { Carousel } from 'antd';

export const CarouselHome=()=> {
  return (
    <>
      <div>
        <Carousel autoplay>
          <div>
            <img
              className="carousel-img"
              src="https://vtiacademy.edu.vn/upload/images/banner-web-vti.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="carousel-img"
              src="https://vtiacademy.edu.vn/upload/images/tuan-le-vang-1-04.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="carousel-img"
              src="https://vtiacademy.edu.vn/upload/images/z4670903331222-504b9722ad759713f35b7d9832a72675.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="carousel-img"
              src="https://vtiacademy.edu.vn/upload/images/z4670903336619-10cc183d2e4cff8879a8e72511a54c8a.jpg"
              alt=""
              // style={contentStyle}
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}