
import { useContext, useEffect, useState } from "react";
import loginImg from "../../assets/others/authentication2.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
const Login = () => {

    const [disabled, setDisable] = useState(true)

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handelLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                Swal.fire({
                    title: "User Login Successful",
                    showClass: {
                        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
                    },
                    hideClass: {
                        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
                    }
                }); 
                navigate(from, { replace: true });
            })
    }
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }
    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div id="main-login" className="hero  min-h-screen mx-auto ">
                <div id="back-img" className="hero-content m-16 flex flex-shrink-0 shadow-2xl ">
                    <div className="">
                        <img src={loginImg} alt="" />

                    </div>

                    <div className="card w-full  max-w-lg  ">
                        <h2 id="style-font" className="text-4xl font-bold text-black text-center mt-8">Login</h2>
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span id="style-font" className="label-text text-xl">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Type here" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span id="style-font" className="label-text text-xl">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span id="style-font" className="label-text text-[#5D5FEF] text-xl">Reload Captcha</span>
                                </label>
                                <input type="text" onBlur={handleValidateCaptcha} name="captcha" placeholder="Type here" className="input input-bordered" />
                            </div>

                            <div className="form-control flex">
                                <div className="flex gap-8">
                                    <div>
                                        <label className="label">
                                            < LoadCanvasTemplate reloadText="" reloadColor="" />
                                        </label>
                                    </div>
                                    <div>
                                        

                                    </div>
                                </div>

                            </div>

                            <div className="form-control mt-6">

                                <input id="style-font" disabled={disabled} className="btn btn-info py-3 text-xl cursor-pointer" type="submit" value="Login" />
                            </div>
                        </form>
                        <Link><h2 className="text-xl text-center text-[#D1A054]">New here? Create a New Account</h2></Link>

                        <div className="text-center mt-2">
                            <Link to="/signUp"> <h2 className="text-xl hover:text-[#D1A054] hover:underline">Or sign in with</h2></Link>
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

export default Login;