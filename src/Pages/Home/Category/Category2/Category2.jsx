import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import './Styles.css'


import img1 from "../../../../assets/home/slide1.jpg"
import img2 from "../../../../assets/home/slide2.jpg"
import img3 from "../../../../assets/home/slide3.jpg"
import img4 from "../../../../assets/home/slide4.jpg"
import img5 from "../../../../assets/home/slide5.jpg"
import img6 from "../../../../assets/home/slide3.jpg"
import img7 from "../../../../assets/home/slide2.jpg"
import img8 from "../../../../assets/home/slide1.jpg"




const Category2 = () => {
    return (
        <div>
            <div className='lg:hidden'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
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
                        <img src={img1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ img4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ img5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6 } />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img7} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img8} />
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    );
};

export default Category2;