import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from "../../../assets/menu/banner3.jpg"
import UseMenu from '../../../Hooks/UseMenu';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = UseMenu()
    const offer = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Our Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <div className='lg:mx-36'>
                <MenuCategory items={offer}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;