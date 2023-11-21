const FoodCard = ({ item }) => {
    const { _id, name, recipe, image, price } = item
    return (
        <div>
            <div className='w-[370px]'>
                <div>
                    <img className=""  src={image} alt="" />
                    
                </div>
                <div className='text-center  lg:pt-6 space-y-3 bg-[#F3F3F3] p-6'>
                    <h2 className='text-2xl'>{name}</h2>
                    
                    <p className='text-sm'>{recipe}</p>
                    <p className=" text-[#BB8506] font-bold"><span className="text-[#1F2937]">Price:</span> $ {price}</p>
                    <button className='text-[#BB8506] text-lg border-[#BB8506] bg-[#E8E8E8] border-b-4 hover:bg-[#1F2937] px-6 py-2 rounded-md '> add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;