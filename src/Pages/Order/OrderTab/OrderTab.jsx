import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import "./OrderTab.css"
const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div className=''>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10  lg:mx-28 lg:mr-10">
                {
                    items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {/* <SwiperSlide>
                    
                </SwiperSlide> */}
                
            </Swiper>
        </div>
    );
};

export default OrderTab;