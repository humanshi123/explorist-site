import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { AccountIcon, DropIcon, ToggleClose, ToggleIcon } from "../Utils/SvgIcons";
import MegaMenu from "./MegaMenu";
import { MegaMenuData } from "../Utils/MegaMenuData"; // Assuming your data is imported from here

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);  
  const [showMegaMenu, setShowMegaMenu] = useState<string | null>(null);
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
    setIsToggleOpen(false);
  };

  const handleMegaMenuToggle = (menuKey: string) => {
    setShowMegaMenu(menuKey === showMegaMenu ? null : menuKey);
  };
  useEffect(() => {
    if (isToggleOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  });
  return (
    <header>
      <div className="container relative">
        <div className="nav-container py-[15px] lg:py-0 flex items-center justify-between">
          <div className="nav_logo">
            <NavLink to="/" className="nav-logo-link">
              <img src={logo} alt="Logo" className="max-w-[174px]" />
            </NavLink>
          </div>
          <div>
            <ul className={`nav-menu ${isToggleOpen ? "open !block" : ""}`}>
              <button className="close-btn hidden" onClick={handleToggleClose}>
                <ToggleClose />
              </button>
              <li onClick={handleMenuItemClick}>
                <NavLink to="/" className="nav-menu-list">
                  Home
                </NavLink>
              </li>

              {/* First MegaMenu for Top Attractions */}
              <li
                className="menu-wrap lg:hover:block"
                onMouseEnter={() => window.innerWidth >= 1024 && setShowMegaMenu('topAttractions')}
                onMouseLeave={() => window.innerWidth >= 1024 && setShowMegaMenu(null)}
              >
                <a
                  href="#"
                  className="nav-menu-list !flex items-center gap-[8px] justify-between lg:justify-start"
                  onClick={() => handleMegaMenuToggle('topAttractions')}
                >
                  Top Attractions
                  <DropIcon />
                </a>
                {showMegaMenu === 'topAttractions' && <MegaMenu categories={MegaMenuData.topAttractions} />}
              </li>
              <li
                className="menu-wrap lg:hover:block"
                onMouseEnter={() => window.innerWidth >= 1024 && setShowMegaMenu('exploreCanada')}
                onMouseLeave={() => window.innerWidth >= 1024 && setShowMegaMenu(null)}
              >
                <a
                  href="#"
                  className="nav-menu-list !flex items-center gap-[8px] justify-between lg:justify-start"
                  onClick={() => handleMegaMenuToggle('exploreCanada')}
                >
                  Explore Canada
                  <DropIcon />
                </a>
                {showMegaMenu === 'exploreCanada' && <MegaMenu categories={MegaMenuData.exploreCanada} />}
              </li>

              <li onClick={handleMenuItemClick}>
                <NavLink to="/ecology-check" className="nav-menu-list">
                  Ecology Check
                </NavLink>
              </li>
              <li onClick={handleMenuItemClick}>
                <NavLink to="/find-booking" className="nav-menu-list">
                  Find Your Booking
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-[15px] lg:gap-[50px] justify-end">
            <select id="currency_select" className="currency_select border-none text-[#212121] text-base font-[500] leading-[27.2px]">
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
