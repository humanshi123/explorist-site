import { NavLink } from "react-router-dom";
import LoginLeftComp from "../Components/LoginLeftComp";
import { GoogleIcon, LoginLogo } from "../Utils/SvgIcons";

const SignIn = () => {
    return (
<div className="container-wider max-w-[1295px] mx-auto p-[30px] ">
<div className="grid md:grid-cols-2 items-center gap-y-[30px] md:px-4 login-main-container">
       <LoginLeftComp />
            <div className="md:pl-10 lg:pl-[90px] ">
                <div className="text-center login-text">
                <LoginLogo />
                <p className="text-[#232323] text-3xl md:text-[36px] font-medium leading-[normal] my-[10px]">Welcome</p>
                <p className="text-[#75777D] mb-[10px]">Please Enter Your Credentials To Login To Your Account</p>
                <NavLink to="/signup " className="text-[#0F6528] mb-[10px] font-normal">
                Don’t Have Account? <b>Create One.</b>
                </NavLink>
                </div>
                <div className="mb-[25px]">
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" className="main-input" />
                </div>
                <div className="mb-[25px]">
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" className="main-input"/>
                </div>
                <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-[10px]">
                    <input type="checkbox" name="" id="" className="w-[20px] h-[20px] "/>
                    <label htmlFor="" className="!text-[#75777D] !mb-0">Keep Me Logged In</label>
                </div>
                <NavLink to="/forgot-password " className="text-[#0F6528] font-normal">
                Forgot Your Password?
                </NavLink>
                </div>
                <button className="btn">Login</button>
                <p className="my-[15px] text-center text-[#3d4151] text-sm ">or</p>
                <button className="flex text-[#232323] items-center border border-[#ccc] w-full h-[56px] rounded-[44px] gap-[14px] justify-center bg-white"><GoogleIcon />Login with Google</button>
                <NavLink to="/ " className="text-[#0F6528] font-normal text-center mt-[30px] inline-block w-full">
              <b>Go Back To Website</b>
                </NavLink>
            
            </div>
        </div>
</div>
    );
}

export default SignIn;
