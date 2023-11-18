import { Parallax, Background } from 'react-parallax';
import img from "../../../assets/shop/banner2.jpg"

import Cover from '../../Shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import UseMenu from '../../../Hooks/UseMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const [menu] = UseMenu()

    const offer = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>OUR SHOP</title>
            </Helmet>
            <Cover img={img} title="OUR SHOP"></Cover>
            <div>


                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <div id='style-font' className='flex justify-center mt-16  uppercase space-x-4'>
                            <Tab className="tab text-2xl text-black hover:border-[#BB8506] hover:border-b-4  hover:text-[#BB8506]">Salad</Tab>
                            <Tab className="tab text-2xl text-black hover:border-[#BB8506] hover:border-b-4  hover:text-[#BB8506]">pizza</Tab>
                            <Tab className="tab text-2xl text-black hover:border-[#BB8506] hover:border-b-4  hover:text-[#BB8506]">soups</Tab>
                            <Tab className="tab text-2xl text-black hover:border-[#BB8506] hover:border-b-4  hover:text-[#BB8506]">desserts</Tab>
                            <Tab className="tab text-2xl text-black hover:border-[#BB8506] hover:border-b-4  hover:text-[#BB8506]">drinks</Tab>
                        </div>
                    </TabList>
                    <TabPanel>
                        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10  mx-28 mr-10'>
                            {
                                salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel>C</TabPanel>
                    <TabPanel>D</TabPanel>
                    <TabPanel>E</TabPanel>

                </Tabs>
            </div>

        </div>
    );
};

export default Order;