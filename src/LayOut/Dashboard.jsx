import { FaBars, FaCalendarAlt, FaCalendarCheck,  FaEnvelope,  FaHome,   FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex gap-11 block">
            {/* dashboard side bar */}
            <div className="w-80 min-h-screen bg-[#D1A054] fixed ">
                <div id="style-font" className="cursor-pointer pl-12 pt-10">

                    <h2 className="lg:text-3xl text-xl font-bold">BISTRO BOSS</h2>
                    <h4 className="lg:text-xl text-base font-semibold">R <span>E</span> <span>S</span> <span>T</span> <span>A</span> <span>U</span> <span>R</span> <span>A</span> <span>N</span> <span>T</span></h4>
                </div>
                <ul className="menu space-y-4 p-8 pt-6">
                    <li>
                        <NavLink to="dashboard/userHome">
                            <FaHome className="text-2xl"></FaHome>
                            <span id="style-font" className="text-2xl uppercase">User Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="dashboard/reservation">
                            <FaCalendarAlt className="text-2xl"></FaCalendarAlt>
                            <span id="style-font" className="text-2xl uppercase">Reservation</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="dashboard/cart">
                            <FaShoppingCart className="text-2xl"></FaShoppingCart>
                            <span id="style-font" className="text-2xl uppercase">My Cart</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="dashboard/bookings">
                            <FaCalendarCheck className="text-2xl"></FaCalendarCheck>
                            <span id="style-font" className="text-2xl uppercase">my booking</span>
                        </NavLink>
                    </li>
                    <div className="divider divider-neutral"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome className="text-2xl"></FaHome>
                            <span id="style-font" className="text-2xl uppercase">Home</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/menu">
                            <FaBars className="text-2xl"></FaBars>
                            <span id="style-font" className="text-2xl uppercase">Menu</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">
                            <FaShoppingBag className="text-2xl"></FaShoppingBag>
                            <span id="style-font" className="text-2xl uppercase">Shop</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <FaEnvelope className="text-2xl"></FaEnvelope>
                            <span id="style-font" className="text-2xl uppercase">Contact</span>
                        </NavLink>
                    </li>
                </ul>

                
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-16 relative left-80">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;