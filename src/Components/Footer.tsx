import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import payment from "../assets/payment-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0f6528] pt-[80px]">
      <div className="container ">
        <div className="flex gap-[30px] ">
          <div className="col-1 w-[25%]   ">
          <Link to='/'><img src={logo} alt="" className="max-w-[220px] "/></Link>
            
            <p className="text-white text-base leading-[30px] max-w-[282px] mt-3 ">The best souvenirs aren't bought, they're lived. Explorist connects you to the authentic Canada. Find the experiences that make you come alive.</p>
          </div>
          <div className="col-2 w-[25%]  ">
           <p className="text-[18px] text-white font-bold mb-5 ">For Suppliers & Vendors</p>
           <ul className="list-items">
            <li>
            <Link to='/'>Join our marketplace</Link>
            </li>
            <li> <Link to='/'>Supplier privacy Policy</Link></li>
            <li> <Link to='/'>Supplier acceptable policy</Link></li>
           
           </ul>
            </div>
          <div className="col-3 w-[25%]  ">
          <p className="text-[18px] text-white font-bold mb-5 ">For Users & Customers</p>
           <ul className="list-items">
            <li>
            <Link to='/'>Term & Conditions for site access</Link>
            </li>
            <li> <Link to='/'>Privacy policy</Link></li>
            <li> <Link to='/'>Cancellation And Refund Policy</Link></li>
            <li> <Link to='/'>Explorist marketplace services</Link></li>
            <li> <Link to='/'>Find my booking</Link></li>
           </ul>
           </div>
          <div className="col-4 w-[25%]  ">
          <p className="text-[18px] text-white font-bold mb-5 ">About Explorist.ca</p>
           <ul className="list-items">
            <li>
            <Link to='/'>About</Link>
            </li>
            <li> <Link to='/'>Blogs</Link></li>
            <li> <Link to='/'>Contact us</Link></li>
            <li> <Link to='/'>Founder’s message</Link></li>
           
           </ul>
          </div>

        </div>
        <div className="pt-[80px] pb-[10px] text-center copyright">
            <p className="text-white text-sm pb-[10px] leading-[26px] ">© 2024 Explorist.ca</p>
            <img src={payment} alt="" className="mx-auto"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
