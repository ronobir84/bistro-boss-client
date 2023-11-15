import React, { useEffect, useState } from 'react';
import SaladMenu from '../../Shared/SaladMenu/SaladMenu';


const Salad = () => {
    const [salad, setSalad] = useState([])


    useEffect(() => {
        fetch('menu.json')
            .then(response => response.json())
            .then(data => {
                const saladItems = data.filter(item => item.category === "salad")
                setSalad(saladItems)
            })
    }, [])


    return (
        <div className='mt-20'>
            <div>
                <div className="mx-auto lg:w-4/12 lg:p-0 p-7 text-center">
                    <h3 id="main-font" className="text-xl text-[#D99904] font-normal">---Should Try---</h3>
                    <div className="">
                        <h1 id="main-font" className="lg:text-[40px] text-3xl text-[#151515] font-normal mt-4 lg:border-y-4 border-y-2 lg:p-2.5 p-3">CHEF RECOMMENDS</h1>
                    </div>
                </div>


                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-6 lg:ml-10'>
                    {
                        salad.map(item => <SaladMenu key={item._id} item={item}></SaladMenu>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Salad;