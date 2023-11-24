import { Helmet } from "react-helmet-async";
import loginImg from "../../assets/others/authentication2.png"
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
    }

    return (
        <div>
            <Helmet>
                <title>SignUp</title>
            </Helmet>
            <div id="main-login" className="hero  min-h-screen mx-auto ">
                <div id="back-img" className="hero-content m-16 flex-row-reverse flex-shrink-0 shadow-2xl ">
                    <div className="">
                        <img src={loginImg} alt="" />

                    </div>

                    <div className="card w-full  max-w-lg  ">
                        <h2 id="style-font" className="text-4xl font-bold text-black text-center mt-8">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span id="style-font" className="label-text text-xl">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Type here" className="input input-bordered" />
                                {errors.name && <span id="style-font" className="text-red-600">Name is required</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span id="style-font" className="label-text text-xl">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Type here" className="input input-bordered" />
                                {errors.email && <span id="style-font" className="text-red-600">Email is required</span>}

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span id="style-font" className="label-text text-[#5D5FEF] text-xl">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} name="password" placeholder="Enter your password" className="input input-bordered" />
                                {errors.password?.type === "required" && (<p id="style-font" className="text-red-600">Password  is required</p>)}
                                {errors.password?.type === "minLength" && (<p id="style-font" className="text-red-600">Password must be 6  Characters</p>)}
                                {errors.password?.type === "maxLength" && (<p id="style-font" className="text-red-600">Password must be less then 20 Characters</p>)}
                                {errors.password?.type === "pattern" && (<p id="style-font" className="text-red-600 text-sm">Password must have one uppercase one lower case, one number and one special Characters </p>)}
                            </div>



                            <div className="form-control mt-6">

                                <input id="style-font" className="btn btn-info py-3 text-xl " type="submit" value="Sign Up" />
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