import { Helmet } from "react-helmet-async";
import loginImg from "../../assets/others/authentication2.png"
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <Helmet>
                <title>SignUp</title>
            </Helmet>
            <div id="main-login" className="hero  min-h-screen mx-auto ">
                <div id="back-img" className="hero-content m-16 flex flex-shrink-0 shadow-2xl ">
                    <div className="">
                        <img src={loginImg} alt="" />

                    </div>

                    <div className="card w-full  max-w-lg  ">
                        <h2 className="text-4xl font-bold text-black text-center mt-8">Login</h2>
                        <form  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Type here" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#5D5FEF] text-xl">Reload Captcha</span>
                                </label>
                                <input type="text"  name="captcha" placeholder="Type here" className="input input-bordered" />
                            </div>

                            

                            <div className="form-control mt-6">

                                <input  className="btn btn-info py-3 text-xl " type="submit" value="Login" />
                            </div>
                        </form>
                        <Link><h2 className="text-xl text-center text-[#D1A054]">Already registered? Go to log in</h2></Link>

                        <div className="text-center mt-2">
                            <Link to="/Login"> <h2 className="text-xl hover:text-[#D1A054] hover:underline">Or Login with</h2></Link>
                        </div>
                        <div className="flex gap-10 justify-center mt-2">

                            <FaFacebookF className="border-4 text-[#444444] text-6xl p-2 rounded-full"></FaFacebookF>
                            <FaGoogle className="border-4 text-[#444444] text-6xl p-2 rounded-full"></FaGoogle>
                            <FaGithub className="border-4 text-[#444444] text-6xl p-2 rounded-full"></FaGithub>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default SignUp;