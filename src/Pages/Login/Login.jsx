
import loginImg from "../../assets/others/authentication2.png"
const Login = () => {
    const handelLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div>
            <div id="main-login" className="hero  min-h-screen mx-auto ">
                <div id="back-img" className="hero-content flex flex-shrink-0 shadow-2xl ">
                    <div className="">
                        <img src={loginImg} alt="" />
                    </div>
                    <div  className="card  w-full max-w-lg  ">
                        <form onSubmit={handelLogin} className="card-body">
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
                                </label>
                                <input type="text" placeholder="" className="input input-bordered"/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#5D5FEF] font-semibold">Reload Captcha</span>
                                </label>
                                <input type="password"  placeholder="Type here" className="input input-bordered"  />

                            </div>
                            

                            <div className="form-control mt-6">
                                
                                <input className="bg-[#D1A054B2] py-3 rounded-md text-xl text-white cursor-pointer" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;