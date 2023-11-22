import { FaPaperPlane } from "react-icons/fa";

const ContactFrom = () => {
    return (
        <div>
            <div className="mx-auto lg:w-4/12 lg:p-0 p-7 text-center mt-16">
                <h3 id="main-font" className="text-xl text-[#D99904] font-normal">---Send Us a Message---</h3>
                <div className="">
                    <h1 id="main-font" className="lg:text-[40px] text-3xl text-[#151515] font-normal mt-4 lg:border-y-4 border-y-2 lg:p-2.5 p-3">CONTACT FORM</h1>
                </div>
            </div>

            <div className="bg-[#F3F3F3] mx-24 p-20 gap-4 mt-16">


                <form >
                    {/* form row */}
                    <div className="md:flex mt-6">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Name*</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered w-full" />
                            </label>
                        </div>

                        {/* form Available Quantity row */}
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Email*</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="quantity" placeholder="Enter your email" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form Photo row */}
                    <div className="">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Phone*</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="photo" placeholder="Enter your phone number" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* //massage */}
                    <div className="">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Message*</span>
                            </label>
                            <label className="input-group">

                                {/* <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full " /> */}
                                <textarea className="w-full p-4 text-[#A1A1A1] text-base" name="textarea" id="" cols="25" rows="8">Write your message here</textarea>
                            </label>
                        </div>
                        <div className="flex gap-6 ">
                            <input className="w-7 h-7 mt-4" type="checkbox" name="" id="" />
                            <h2 className="mt-4 text-xl">I'm not a robot</h2>
                        </div>
                    </div>

                    <div className="pt-8">
                        <div className="mt-4 py-3 text-white text-xl justify-center w-1/4 mx-auto  flex gap-4 bg-gradient-to-r from-[#835D23] to-[#B58130] ">
                            <button className="">Send Message</button>
                            <FaPaperPlane></FaPaperPlane>
                        </div>
                    </div>
                </form>
                


            </div>
            {/* bg-gradient-to-r from-[#835D23] to-[#B58130]  */}
        </div>
    );
};

export default ContactFrom;