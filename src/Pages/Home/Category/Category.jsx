import { Swiper, SwiperSlide } from 'swiper/react';




import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';




import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"
import img6 from "../../../assets/home/slide2.jpg"
import img7 from "../../../assets/home/slide4.jpg"
import img8 from "../../../assets/home/slide1.jpg"
import Category2 from './Category2/Category2';



const Category = () => {
    return (


        <div className="mt-20">
            <div className="mx-auto lg:w-3/12 lg:p-0 p-7  text-center">
                <h3 id="main-font" className="text-xl text-[#D99904] font-normal">---From 11:00am to 10:00pm---</h3>

                <div className="">
                    <h1 id="main-font" className="lg:text-[40px] text-3xl lg:p-2.5 p-3 text-[#151515] font-normal mt-4 lg:border-y-4 border-y-2">ORDER ONLINE</h1>
                </div>
            </div>
            {/* */}

            <div className='hidden lg:block '>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[ Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='rounded-md'>
                        <img src={img1} alt="" />
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                        

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                       
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" />
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} alt="" />
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img7} alt="" />
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img8} alt="" />
                       
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                        
                    </SwiperSlide>
                </Swiper>
            </div>



   



            <div>
                <Category2></Category2>
            </div>
        </div>

    );
};

export default Category;