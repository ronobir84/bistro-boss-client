import FoodCard from "../../../Components/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10  lg:mx-28 lg:mr-10'>
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;