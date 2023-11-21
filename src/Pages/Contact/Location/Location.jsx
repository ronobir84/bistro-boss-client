import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

const Location = () => {
    return (
        <div>
            <div>
                <div className="mt-16">
                    <div className="mx-auto lg:w-3/12 lg:p-0 p-7  text-center">
                        <h3 id="main-font" className="text-xl text-[#D99904] font-normal">---Visit Us---</h3>

                        <div className="">
                            <h1 id="main-font" className="lg:text-[38px] text-3xl lg:p-2.5 p-3 text-[#151515] font-normal mt-4 lg:border-y-4 border-y-2">OUR LOCATION</h1>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10">
                    <div className="w-96 h-[310px] border ">
                        <div className="bg-[#D1A054] px-[168px]   py-3 ">
                            <FaPhoneAlt className="text-4xl   text-white "></FaPhoneAlt>
                        </div>
                        <div className="px-8 pb-8">
                            <div className="bg-[#F3F3F3]  p-20 text-center">
                                <h2 className="text-2xl text-black font-medium">PHONE</h2>
                                <p className="text-base pt-2 text-black">+38 (012) 34 56 789</p>
                            </div>
                        </div>
                    </div>


                    <div className="w-96 h-[310px] border ">
                        <div className="bg-[#D1A054] px-[168px]   py-3 ">
                            <FaMapMarkerAlt className="text-4xl   text-white "></FaMapMarkerAlt>
                        </div>
                        <div className="px-8 pb-8">
                            <div className="bg-[#F3F3F3]  p-20 text-center">
                                <h2 className="text-2xl text-black font-medium">ADDRESS</h2>
                                <p className="text-base pt-2 text-black">+38 (012) 34 56 789</p>
                            </div>
                        </div>
                    </div>


                    <div className="w-96 h-[310px] border ">
                        <div className="bg-[#D1A054] px-[168px]   py-3 ">
                            <FaRegClock className="text-4xl   text-white "></FaRegClock>
                        </div>
                        <div className="px-8  pb-8">
                            <div className="bg-[#F3F3F3]  p-20 text-center">
                                <h2 className="text-2xl text-black font-medium">WORKING </h2>
                                <input className="pt-2" type="date" name="" id="" />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;