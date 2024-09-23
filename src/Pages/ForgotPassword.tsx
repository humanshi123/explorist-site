import { NavLink } from "react-router-dom";
import LoginLeftComp from "../Components/LoginLeftComp";
import { LoginLogo } from "../Utils/SvgIcons";

const ForgotPassword = () => {
    return (
<div className="container-wider max-w-[1295px] mx-auto p-[30px] ">
<div className="grid md:grid-cols-2 items-center gap-y-[30px] md:px-4 login-main-container">
       <LoginLeftComp />
            <div className="md:pl-10 lg:pl-[90px] ">
                <div className="text-center login-text">
                <LoginLogo />
                <p className="text-[#232323] text-3xl md:text-[36px] font-medium leading-[normal] my-[10px]">Forgot Password ?</p>
                <p className="text-[#75777D] mb-[10px]">Enter Your Email Address To Continue Resetting Your Password</p>
        
                </div>
                <div className="mb-[25px]">
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" className="main-input" />
                </div>
            
                <button className="btn">Continue</button>
          
                <NavLink to="/sign-in " className="text-[#75777D] font-normal text-center mt-[30px] inline-block w-full">
                Remember Password?<span className="text-[#0F6528] "> Sign In</span>
                </NavLink>
            
            </div>
        </div>
</div>
    );
}
export default ForgotPassword;
