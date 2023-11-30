
import { useContext, useState } from "react";
import { FaAlignJustify, FaTimes, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import icon from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png"
import { AuthContext } from "../../../Providers/AuthProvider";
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navLinks = (
        <>
            <li><Link to="/" className="hover:text-[#EEFF25]">Home</Link></li>
            <li><Link to="/contact" className="hover:text-[#EEFF25]">CONTACT us</Link></li>
            <li><Link to="/menu" className="hover:text-[#EEFF25]">Our Menu</Link></li>
            <li><Link to="/order" className="hover:text-[#EEFF25]">Our Shop</Link></li>
            <li><Link to="/secret" className="hover:text-[#EEFF25]">Secret</Link></li>
            
           
            {
                user ? <>
                    {/* <span>{user?.displayName}</span> */}
                    <button id="main-font" onClick={handelLogOut} className="hover:text-[#EEFF25] uppercase">LogOut</button>
                </>  : <>
                        <li> <Link to="/login" className="hover:text-[#EEFF25]">Login</Link></li>

                    </>
            }
        </>
    )
    return (
        <div className="">

            <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-30 hover:text-[#EEFF25] rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div id="style-font" className="cursor-pointer items-center text lg:pl-12 pl-40  ">

                        <h2 className="text-2xl ">BISTRO BOSS</h2>
                        <h4 className="text-xl ">R <span>E</span> <span>S</span> <span>T</span> <span>A</span> <span>U</span> <span>R</span> <span>A</span> <span>N</span> <span>T</span></h4>
                    </div>
                </div>

                <div className=" hidden lg:pl-80   lg:flex">
                    <ul id="main-font" className="gap-10 uppercase flex    font-bold ">
                        {navLinks}
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <div className="flex  lg:pl-80 gap-6 ">
                        
                        
                            <Link to="/">
                                <button className="flex border p-2">
                                    <FaShoppingCart className="text-3xl"></FaShoppingCart>
                                    <div className="badge badge-secondary mt-1">+0</div>
                                </button>

                            </Link>
                            
                        

                        <div className="relative cursor-pointer w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBar;