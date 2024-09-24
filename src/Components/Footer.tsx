import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import payment from "../assets/payment-icon.svg";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    // Initial check
    handleResize();
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const renderDropdownContent = (index: number, content: React.ReactNode) => {
    return (isMobile && openDropdownIndex === index) || !isMobile ? (
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          isMobile ? (openDropdownIndex === index ? 'max-h-screen' : 'max-h-0') : 'max-h-screen'
        } mb-3`}
      >
        {content}
      </div>
    ) : null;
  };

  return (
    <footer className="bg-[#0f6528] pt-[40px] md:pt-[80px]">
      <div className="container ">
        <div className="grid md:flex md:gap-[30px] ">
          <div className="col-1 md:w-[25%] mb-5 md:mb-0 ">
            <Link to="/">
              <img src={logo} alt="" className="lg:max-w-[220px] max-w-[190px] mx-auto md:mx-0" />
            </Link>

            <p className="text-white text-center md:text-start text-base leading-[30px] md:max-w-[282px] mt-3">
              The best souvenirs aren't bought, they're lived. Explorist connects you to the authentic Canada. Find the experiences that make you come alive.
            </p>
          </div>

          <div className="col-2 md:w-[25%]">
            <p
              className="dropdown text-[18px] text-white font-bold mb-2 md:mb-5"
              onClick={isMobile ? () => toggleDropdown(1) : undefined}
            >
              For Suppliers & Vendors
            </p>
            {renderDropdownContent(1, (
              <ul className="list-items">
                <li>
                  <Link to="/">Join our marketplace</Link>
                </li>
                <li>
                  <Link to="/">Supplier privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Supplier acceptable policy</Link>
                </li>
              </ul>
            ))}
          </div>

          <div className="col-3 md:w-[25%]">
            <p
              className="dropdown text-[18px] text-white font-bold mb-2 md:mb-5"
              onClick={isMobile ? () => toggleDropdown(2) : undefined}
            >
              For Users & Customers
            </p>
            {renderDropdownContent(2, (
              <ul className="list-items">
                <li>
                  <Link to="/">Term & Conditions for site access</Link>
                </li>
                <li>
                  <Link to="/">Privacy policy</Link>
                </li>
                <li>
                  <Link to="/">Cancellation And Refund Policy</Link>
                </li>
                <li>
                  <Link to="/">Explorist marketplace services</Link>
                </li>
                <li>
                  <Link to="/">Find my booking</Link>
                </li>
              </ul>
            ))}
          </div>

          <div className="col-4 md:w-[25%]">
            <p
              className="dropdown text-[18px] text-white font-bold mb-2 md:mb-5"
              onClick={isMobile ? () => toggleDropdown(3) : undefined}
            >
              About Explorist.ca
            </p>
            {renderDropdownContent(3, (
              <ul className="list-items">
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Blogs</Link>
                </li>
                <li>
                  <Link to="/">Contact us</Link>
                </li>
                <li>
                  <Link to="/">Founder’s message</Link>
                </li>
              </ul>
            ))}
          </div>
        </div>

        <div className="pt-[30px] md:pt-[80px] pb-[10px] text-center copyright">
          <p className="text-white text-sm pb-[10px] leading-[26px]">© 2024 Explorist.ca</p>
          <img src={payment} alt="" className="mx-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
