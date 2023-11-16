import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items}) => {
    return (
        <div className="mt-20">

            <div className="mx-auto lg:w-4/12 lg:p-0 p-7 text-center">
                <h3 id="main-font" className="text-xl text-[#D99904] font-normal">---Don't miss---</h3>

                <div className="">
                    <h1 id="main-font" className="lg:text-[40px] text-3xl text-[#151515] font-normal mt-4 lg:border-y-4 border-y-2 lg:p-2.5 p-3">TODAY'S OFFER</h1>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 lg:mx-0 gap-10 mt-16'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;