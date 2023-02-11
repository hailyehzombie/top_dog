import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const SwiperMain = () => {
  return (
    <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

            <div className="slide-main">
                <div className="slide-detail">
                  <i className="fa-solid fa-user"></i>
                  <h3>Salman Khan</h3>
                  <p> value that doesn’t make sense to include in your theme, use square brackets to generate a property</p>
                </div>
            </div>





        </SwiperSlide>
        <SwiperSlide>
        <div className="slide-main">
                <div className="slide-detail">
                  <i className="fa-solid fa-user"></i>
                  <h3>Sahrukh Khan</h3>
                  <p> value that doesn’t make sense to include in your theme, use square brackets to generate a property</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide-main">
                <div className="slide-detail">
                  <i className="fa-solid fa-user"></i>
                  <h3>Kareena</h3>
                  <p> value that doesn’t make sense to include in your theme, use square brackets to generate a property</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide-main">
                <div className="slide-detail">
                  <i className="fa-solid fa-user"></i>
                  <h3>Akhsay Kumar</h3>
                  <p> value that doesn’t make sense to include in your theme, use square brackets to generate a property</p>
                </div>
            </div>
        </SwiperSlide>
        
        
      </Swiper>
  )
}

export default SwiperMain