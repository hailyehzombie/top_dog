import React from "react";
import SwiperMain from "./slider/SwiperMain";
// Import Swiper React components



const Review = () => {
    return (
        <div className="review-main">

            <div className="review-wrapper">

                <div className="heading-main">
                    <h1 className="main-heading">Review</h1>
                    <div className="heading-line"></div>
                </div>

                <div className="swiper-main">
                    <SwiperMain />
                </div>

            </div>







        </div>
    )
}

export default Review