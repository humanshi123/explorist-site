import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { AccountIcon, DropIcon, ToggleClose, ToggleIcon } from "../Utils/SvgIcons";
import MegaMenu from "./MegaMenu";

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [showData, setShowData] = useState(false);

  // Handle body overflow when the sidebar is open
  useEffect(() => {
    if (isToggleOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isToggleOpen]);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const handleToggleClose = () => {
    setIsToggleOpen(false);
  };

  const handleMenuItemClick = () => {
    setIsToggleOpen(false); // Close the sidebar on menu item click
  };

  return (
    <header>
      <div className="lg:container relative p-[15px] lg:p-0">
        <div className="nav-container flex items-center justify-between ">
          <div className="nav_logo">
            <NavLink to="/" className="nav-logo-link">
              <img src={logo} alt="" className="max-w-[174px]" />
            </NavLink>
          </div>
          <div>
            <ul
              className={`nav-menu ${isToggleOpen ? "open !block" : ""}`}
            >
              <button
                className="close-btn hidden"
                onClick={handleToggleClose}
              >
                <ToggleClose />
              </button>
              <li onClick={handleMenuItemClick}>
                <NavLink to="/" className="nav-menu-list">
                  Home
                </NavLink>
              </li>
              <li className="menu-wrap" onClick={handleMenuItemClick}>
                <a href="#" className="nav-menu-list !flex items-center gap-[8px]">
                  Top Attractions
                  <DropIcon />
                </a>
                <MegaMenu />
              </li>
              <li className="menu-wrap" onClick={handleMenuItemClick}>
                <a href="#" className="nav-menu-list !flex items-center gap-[8px] ">
                  Explore Canada
                  <DropIcon />
                </a>
              </li>
              <li onClick={handleMenuItemClick}>
                <NavLink to="/ecology-check" className="nav-menu-list">
                  Ecology Check
                </NavLink>
              </li>
              <li onClick={handleMenuItemClick}>
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
            <div className="relative cursor-pointer" onClick={() => setShowData(!showData)}>
              <AccountIcon />
              {showData && (
                <div className="triangle absolute z-[2] top-[48px] right-0 w-[200px] rounded-b-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                  <NavLink
                    to="/sign-in"
                    className="text-black border-t border-[#e5e5e5] !rounded-b-[10px] bg-white hover:bg-[#eee] text-sm w-full h-full inline-block py-[10px] pl-[30px]"
                  >
                    Sign in/Sign up
                  </NavLink>
                </div>
              )}
            </div>
            <p className="menuToggleBtn lg:hidden" onClick={handleToggleOpen}>
              {isToggleOpen ? <ToggleClose /> : <ToggleIcon />}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
