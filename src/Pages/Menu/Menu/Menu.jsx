import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from "../../../assets/menu/banner3.jpg"
import UseMenu from '../../../Hooks/UseMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertsImg from "../../../assets/menu/dessert-bg.jpeg"
import Desserts from './desserts/desserts';
import DessertsCategory from '../DessertsCategory/DessertsCategory';
import Pizza from '../Pizza/Pizza';
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import PizzaCategory from '../PizzaCategory/PizzaCategory';
import Salads from '../Salads/Salads';
import saladImg from "../../../assets/menu/salad-bg.jpg"
import SaladsCategory from '../SaladsCategory/SaladsCategory';
import Soups from '../Soups/Soups';
import soupsImg from "../../../assets/menu/soup-bg.jpg"
import SoupsCateGory from '../SoupsCateGory/SoupsCateGory';

const Menu = () => {
    const [menu] = UseMenu()
    const offer = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Our Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/* offer menu item */}
            <div className='lg:mx-36'>
                <MenuCategory items={offer}></MenuCategory>
            </div>
            {/* dessert menu item  */}
            <Desserts img={dessertsImg} title="Desserts"></Desserts>
            <div className='lg:mx-36'>
                <DessertsCategory items={desserts}></DessertsCategory>
            </div>
            {/* pizza menu item */}
            <Pizza img={pizzaImg} title="Pizza"></Pizza>
            <div className='lg:mx-36'>
                <PizzaCategory items={pizza}></PizzaCategory>
            </div>
            {/* Salads menu item */}
            <Salads img={saladImg} title="Salads"></Salads>
            <div className='lg:mx-36'>
                <SaladsCategory items={salad}></SaladsCategory>
            </div>
            {/* Soups menu item  */} 
            <Soups img={soupsImg} title="Soups"></Soups>
            <div className='lg:mx-36'>
<SoupsCateGory items={soup}></SoupsCateGory>
            </div>
        </div>
    );
};

export default Menu;