import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import StoryAvatar from "./Props/StoryAvatar.jsx";
import wtkd from "./../assets/wtkd.jpg";
import cj from "./../assets/cj.jpg";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Storis = () => {
    return (
        <div className="flex justify-center">
            <Swiper
                modules={[Navigation]}
                navigation={
                    {
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }
                } spaceBetween={16} slidesPerView={5} className="w-full max-w-xl pt-5  ">
                <SwiperSlide>
                    <StoryAvatar img={wtkd} title="worldtaek" />
                </SwiperSlide>

                <SwiperSlide>
                    <StoryAvatar img={cj} title="cj.nickolas" />
                </SwiperSlide>

                <SwiperSlide>
                    <StoryAvatar img={wtkd} title="worldtaek" />
                </SwiperSlide>

                <SwiperSlide>
                    <StoryAvatar img={wtkd} title="worldtaek" />
                </SwiperSlide>

                <SwiperSlide>
                    <StoryAvatar img={wtkd} title="worldtaek" />
                </SwiperSlide>

                <SwiperSlide>
                    <StoryAvatar img={wtkd} title="worldtaek" />
                </SwiperSlide>
                <button className="swiper-button-next"><ChevronRight /></button>
                <button className="swiper-button-prev"><ChevronLeft /></button>
            </Swiper>

        </div >
    );
};

export default Storis;
