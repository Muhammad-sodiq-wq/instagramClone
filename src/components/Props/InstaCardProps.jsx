import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
// import post from "./../assets/Rectangle.png";
// import man from './../assets/images.jpg';
import { Ellipsis, ExternalLink, Heart, MessageCircle, Bookmark, } from "lucide-react";


function InstaCardProps({ userImg, userName, postImage, likeCount, userDescription }) {
    return (
        <div className="max-w-md mx-auto bg-white border rounded-md">

            <div className="flex items-center justify-between p-3">

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-400 overflow-hidden">
                        <img src={userImg} alt="Profile" />
                    </div>
                    <p className="font-semibold text-sm">{userName}</p>
                </div>

            </div>

            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full aspect-square"
            >
                <SwiperSlide>
                    <img
                        src={postImage}
                        alt="Instagram post"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-full bg-gray-300"><img src={postImage} alt="Instagram post" className="w-full h-full object-cover" /></div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-full bg-gray-400"><img src={postImage} alt="Instagram post" className="w-full h-full object-cover" /></div>
                </SwiperSlide>
            </Swiper>

            <div className="flex justify-between p-3">
                <div className="flex gap-4">

                    <Heart />
                    <MessageCircle />
                    <ExternalLink />
                </div>
                <Bookmark />
            </div>

            <div className="px-3 pb-4 text-sm">
                <p className="font-semibold">
                    <img src={userImg} alt="Profile" className="w-6 h-6 rounded-full inline mr-2" />
                    Liked: {likeCount}
                </p>

                <p>
                    <span className="font-semibold">{userName} </span>
                    {userDescription}
                </p>
            </div>

        </div>
    );
}

export default InstaCardProps;
