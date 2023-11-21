import { Parallax, Background } from 'react-parallax';
import img from "../../../assets/shop/banner2.jpg"

import Cover from '../../Shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import UseMenu from '../../../Hooks/UseMenu';
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const [menu] = UseMenu()

    const drinks = menu.filter(item => item.category === 'offered')
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
                    <TabList id='style-font' className="mt-10 text-center uppercase">
                        
                            <Tab className="tab text-2xl">Salad</Tab>
                            <Tab className="tab text-2xl">pizza</Tab>
                            <Tab className="tab text-2xl">soups</Tab>
                            <Tab className="tab text-2xl">desserts</Tab>
                            <Tab className="tab text-2xl">drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                    

                </Tabs>
            </div>

        </div>
    );
};

export default Order;