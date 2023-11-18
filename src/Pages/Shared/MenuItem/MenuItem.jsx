

const MenuItem = ({ item }) => {
    const {_id, name, recipe, image, category, price} = item
    return (
        <div className="">
            <div className="flex space-x-3 mx-8   lg:mx-0 lg:space-x-8">
                <div>
                    <img style={{borderRadius: '0 200px 200px 200px'}} className="lg:w-[130px] w-[120px]" src={image} alt="" />
                </div>
                <div className="">
                    <h2 id="style-font" className="lg:text-2xl text-base  uppercase">{name}------------------</h2>
                    <p id="main-font" className="text-sm text-[#737373]">{ recipe}</p>
                </div>
                <p id="main-font" className="text-[#BB8506] text-xl ">${price}</p>
            </div>
            
        </div>
    );
};

export default MenuItem;