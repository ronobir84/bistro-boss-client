import MenuItem from "../../Shared/MenuItem/MenuItem";

const DessertsCategory = ({items}) => {
    return (
        <div className="mt-20">
            
            
            <div className='grid lg:grid-cols-2 lg:mx-0 gap-10 mt-16'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline px-10 border-0 border-b-4 mt-8">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default DessertsCategory;