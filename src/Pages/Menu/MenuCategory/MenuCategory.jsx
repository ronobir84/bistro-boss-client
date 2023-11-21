import { Link } from "react-router-dom";

import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items }) => {
    
    
    return (
        <div className="mt-20">
            {/* {title && <Cover img={CoverImg} title={title}></Cover>} */}
            <div className="mx-auto lg:w-4/12 lg:p-0 p-7 text-center">
                <h3 id="main-font" className="text-xl text-[#D99904] font-normal">---Don't miss---</h3>

                <div className="">
                    <h1 id="main-font" className="lg:text-[40px] text-3xl text-[#151515] font-normal mt-4 lg:border-y-4 border-y-2 lg:p-2.5 p-3">TODAY'S OFFER</h1>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 lg:mx-0 gap-8 mt-16'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <Link >
                    <button className="btn btn-outline px-12 border-0 border-b-4 mt-8">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;