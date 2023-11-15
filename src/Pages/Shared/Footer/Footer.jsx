import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mt-20">


            <div className="lg:flex">
                <div>
                    <div className="bg-[#1F2937] lg:w-[800px] lg:h-[300px] text-white text-center lg:p-0 p-8 lg:pt-20 space-y-2">
                        <h2 className="text-3xl">CONTACT US</h2>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <h2>Mon - Fri: 08:00 - 22:00</h2>
                        <h3>Sat - Sun: 10:00 - 23:00</h3>
                    </div>
                </div>
                <div className="lg:w-[800px] lg:h-[300px] bg-[#111827] text-white text-center lg-p-0 p-6 lg:pt-20 ">
                    <div className="space-y-4">
                        <h2 className="text-3xl">Follow US</h2>
                        <p>Join us on social media</p>
                        <div className="flex justify-center gap-6 text-4xl ">
                            <a href="#"><FaFacebook ></FaFacebook></a>
                            <a href="#"><FaInstagram></FaInstagram></a>
                            <a href="#"><FaTwitter></FaTwitter></a>
                        </div>
                    </div>

                </div>
            </div>




            <div>
                <footer className="footer footer-center p-4 bg-[#151515] text-base-content">
                    <aside>
                        <p className="text-white text-xl">Copyright © CulinaryCloud. All rights reserved.</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;