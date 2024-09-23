import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { AccountIcon, DropIcon, ToggleIcon } from "../Utils/SvgIcons";
import MegaMenu from "./MegaMenu";

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [showData, setShowData]= useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const handleToggleClose = () => {
    setIsToggleOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="nav-container relative flex items-center justify-between ">
          <div className="nav_logo">
            <NavLink to="/" className="nav-logo-link">
              <img src={logo} alt="" className="max-w-[174px]" />
            </NavLink>
          </div>
          <div>
            <ul
              className={`nav-menu ${
                isToggleOpen ? "open !block" : ""
              }`}
            >
              <button
                className="close-btn lg:hidden"
                onClick={handleToggleClose}
              >
                X
              </button>
              <li>
                <NavLink to="/" className="nav-menu-list">
                  Home
                </NavLink>
              </li>
              <li className="menu-wrap">
                <a href="" className="nav-menu-list !flex items-center gap-[8px]">
                  Top Attractions
                  <DropIcon />
                  </a>
                  <MegaMenu />
              </li>
              <li className="menu-wrap">
                <a href="" className="nav-menu-list !flex items-center gap-[8px] ">
                  Explore Canada
                  <DropIcon />
                  </a>
              </li>
              <li>
                <NavLink to="/ecology-check" className="nav-menu-list">
                  Ecology Check
                </NavLink>
              </li>
              <li>
                <NavLink to="/find-booking" className="nav-menu-list ">
                  Find Your Booking
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-[15px] lg:gap-[50px] justify-end ">
            <select id="currency_select" className="currency_select border-none text-[#212121] text-base font-[500] leading-[27.2px] ">
              <option value="CAD">CAD</option>
              <option value="USD">USD</option>
            </select>
            <div className="relative cursor-pointer  " onClick={()=> setShowData(!showData)}>  <AccountIcon /> 
            {showData && (
             <div className="triangle absolute z-[2] top-[48px] right-0 w-[200px] rounded-b-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
           <NavLink to="/sign-in" className="text-black  border-t border-[#e5e5e5] !rounded-b-[10px]  bg-white hover:bg-[#eee] text-sm w-full h-full inline-block py-[10px] pl-[30px]">
           Sign in/Sign up
           </NavLink>
           </div>
          )}
          </div>
            <p className="menuToggleBtn lg:hidden" onClick={handleToggleOpen}>
           
            <ToggleIcon />
          </p>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
