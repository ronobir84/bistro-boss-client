import image from "../../../assets/home/featured.jpg"
import "./Featured.css"

const Featured = () => {
    
    return (

        
        <div>
            <div className="mt-20">
                <div id="main-image" className="hero min-h-screen bg-fixed">
                    <div className="hero-overlay bg-opacity-60">

                        <div className="mx-auto lg:w-4/12 lg:p-0 p-7  text-center mt-10 ">
                            <h3 id="main-font" className="text-xl text-[#D99904] font-normal">---Check it out---</h3>

                            <div className="">
                                <h1 id="main-font" className="lg:text-[40px] text-3xl text-white font-normal mt-4 lg:border-y-4 border-y-2 lg:p-2.5 p-3">FROM OUR MENU</h1>
                            </div>
                        </div>

                    </div>
                    <div className="hero-content text-center text-neutral-content ">
                        <div className="lg:pt-40 pt-14 lg:w-[90%]   lg:flex">
                            <div className="">
                                <img className="lg:w-[95%] rounded" src={image} alt="" />
                           </div>
                            <div className="lg:pt-32 pt-8">
                                <p className="mb-5 text-base text-white">March 20, 2023
                                    WHERE CAN I GET SOME?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                                <div>
                                    <button className="px-6 py-3 text-base uppercase hover:bg-[#1F2937] rounded-md border-[#fff] text-white border-b-4"><span>Read More</span></button>
                                </div>
                          </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Featured;