import { Parallax, Background } from 'react-parallax';
import img from "../../../assets/shop/banner2.jpg"

import Cover from '../../Shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';


const Order = () => {


    return (
        <div>
            <Helmet>
                <title>OUR SHOP</title>
            </Helmet>
            <Cover img={img} title="OUR SHOP"></Cover>
            <div>
                <div id='style-font' className="tabs tabs-bordered  justify-center mt-16  uppercase space-x-4">
                    <a className="tab text-2xl text-black hover:border-[#BB8506] hover:border-b-4  hover:text-[#BB8506]">Salad</a>

                    <a className="tab text-2xl text-black hover:border-[#BB8506] hover:border-b-4  hover:text-[#BB8506]">pizza</a>
                    <a className="tab text-2xl text-black hover:border-[#BB8506] hover:border-b-4  hover:text-[#BB8506]">soups</a>
                    <a className="tab text-2xl text-black hover:border-[#BB8506] hover:border-b-4  hover:text-[#BB8506]">desserts</a>
                    <a className="tab text-2xl text-black hover:border-[#BB8506] hover:border-b-4  hover:text-[#BB8506]" >drinks</a>
                </div>
            </div>

        </div>
    );
};

export default Order;