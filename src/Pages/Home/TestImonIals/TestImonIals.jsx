
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./TestImonIals.css"
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

import { FaPause } from "react-icons/fa";
const TestImonIals = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mt-20">
            <div>


                <div className="mx-auto lg:w-4/12 lg:p-0 p-7  text-center mt-10">
                    <h3 id="main-font" className="text-xl text-[#D99904] font-normal">---What Our Clients Say---</h3>

                    <div className="">
                        <h1 id="main-font" className="lg:text-[40px] text-3xl text-[#151515] font-normal mt-4 lg:border-y-4 border-y-2 lg:p-2.5 p-3">TESTIMONIALS</h1>
                    </div>
                </div>
                <div>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        
                        {
                            reviews.map(review => <SwiperSlide key={review._id}>
                                <div className='lg:m-24 m-10 lg:space-y-0 space-y-4'>
                                    <Rating className='mx-auto lg:mt-0 mt-10  lg:mb-10'
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <FaPause className='text-6xl mx-auto lg:mb-6'></FaPause>
                                    <p className='text-xl text-[#444]'>{review.details}</p>
                                    <h2 className='text-3xl text-[#CD9003] mt-8'>{review.name}</h2>
                                </div>
                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TestImonIals;