import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { AccountIcon, DropIcon, ToggleIcon } from "../Utils/SvgIcons";
import MegaMenu from "./MegaMenu";

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

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
            <NavLink to="/login" className="text-black text-xs">
            <AccountIcon />
            </NavLink>
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
