import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper as SwiperConatiner, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';









const Swiper =()=>{


    return(
        <>
           <SwiperConatiner
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://picsum.photos/id/203/1440/400'/></SwiperSlide>
        <SwiperSlide><img src='https://picsum.photos/id/206/1440/400'/></SwiperSlide>
        <SwiperSlide><img src='https://picsum.photos/id/255/1440/400'/></SwiperSlide>
        <SwiperSlide><img src='https://picsum.photos/id/208/1440/400'/></SwiperSlide>
        <SwiperSlide><img src='https://picsum.photos/id/209/1440/400'/></SwiperSlide>
        <SwiperSlide><img src='https://picsum.photos/id/223/1440/400'/></SwiperSlide>
        <SwiperSlide><img src='https://picsum.photos/id/283/1440/400'/></SwiperSlide>
        <SwiperSlide><img src='https://picsum.photos/id/243/1440/400'/></SwiperSlide>
        <SwiperSlide><img src='https://picsum.photos/id/253/1440/400'/></SwiperSlide>
      </SwiperConatiner>
        
        </>
    )

}

export default Swiper;