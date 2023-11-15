import React from 'react';

const SaladMenu = ({ item }) => {
    const { _id, name, recipe, image,  } = item
    return (
        <div className='mt-16'>
            <div className='lg:w-[350px] p-6 lg:p-0 '>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='text-center  lg:pt-6 space-y-3 bg-[#F3F3F3] p-6'>
                    <h2 className='text-2xl'>{name}</h2>
                    <p className='text-base'>{recipe}</p>
                    <button className='text-[#BB8506] text-lg border-[#BB8506] border-b-4 hover:bg-[#1F2937] px-6 py-2 rounded-md '> add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default SaladMenu;