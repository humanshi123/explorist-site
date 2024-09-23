import { NavLink } from "react-router-dom";
import LoginLeftComp from "../Components/LoginLeftComp";
import { LoginLogo } from "../Utils/SvgIcons";

const SignUp = () => {
    return (
<div className="container-wider max-w-[1295px] mx-auto p-[30px] ">
<div className="grid md:grid-cols-2 items-center gap-y-[30px] md:px-4 login-main-container">
       <LoginLeftComp />
            <div className="md:pl-10 lg:pl-[90px] ">
                <div className="text-center login-text">
                <LoginLogo />
                <p className="text-[#232323] text-3xl md:text-[36px] font-medium leading-[normal] my-[10px]">Sign Up!!</p>
                <p className="text-[#75777D] mb-[10px]">Please Enter Your Details To Create Your New Account</p>
                </div>
                <div className="mb-[25px] mt-3 md:flex gap-[15px]">
                <div className="w-full">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="" id="" className="main-input" />
                </div>
                <div className="w-full">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="" id="" className="main-input" />
                </div>
                </div>
                <div className="mb-[25px]">
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" className="main-input" />
                </div>
                <div className="mb-[25px]">
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" className="main-input"/>
                </div>
                <div className="mb-[25px]">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="" id="" className="main-input"/>
                </div>
                <button className="btn">Sign Up</button>
                <NavLink to="/sign-in " className="text-[#0F6528] mt-[30px]  font-normal text-center inline-block w-full">
                Already Have An Account?<b>Sign In</b>
                </NavLink>       
                <NavLink to="/ " className="text-[#0F6528] font-normal text-center inline-block w-full">
              <b>Go Back To Website</b>
                </NavLink>
            
            </div>
        </div>
</div>
    );
}

export default SignUp;
