import { useState, useRef, useEffect } from "react";
import { DropArrow } from "../Utils/SvgIcons";
import packag from "../assets/package.jpg";

const Cart = () => {
  const [openDropdowns, setOpenDropdowns] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : false))
    );
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (openDropdowns[index]) {
          ref.style.maxHeight = ref.scrollHeight + "px";
          ref.style.opacity = "1";
        } else {
          ref.style.maxHeight = "0px";
          ref.style.opacity = "0";
        }
      }
    });
  }, [openDropdowns]);

  return (
    <div className="container cart-page">
      <div className="grid md:grid-cols-[minmax(0,1fr),383px] gap-[30px] pt-[50px] pb-[80px] ">
        <div>
          {/* First Dropdown */}
          <div
            className={`bg-white rounded-[10px] py-[30px] px-10 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.10)]  ${
              openDropdowns[0] ? "active" : ""
            }`}
          >
            <h2
              className="text-2xl flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown(0)}
            >
              {" "}
              Contact Details <DropArrow />{" "}
            </h2>
            <div
              ref={(el) => (contentRefs.current[0] = el)}
              className={`text-selecion overflow-hidden transition-[max-height] duration-500 ease-in-out`}
              style={{
                maxHeight: openDropdowns[0]
                  ? contentRefs.current[0]?.scrollHeight
                  : 0,
                opacity: openDropdowns[0] ? 1 : 0,
              }}
            >
              <div className="pt-[30px] grid md:flex md:flex-wrap md:gap-x-5 gap-y-[30px] ">
              <div className="md:w-[calc(50%-15px)]">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                     // value={formData.firstName}
                      //onChange={handleChange}
                    />
                  </div>
                  <div className="md:w-[calc(50%-15px)]">
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      //value={formData.lastName}
                      //onChange={handleChange}
                    />
                  </div>
                  <div className="md:w-[calc(50%-15px)]">
                    <label htmlFor="">Email Address</label>
                    <input
                      type="email"
                      name="emailAddress"
                      placeholder="Email Address"
                      //value={formData.email}
                      //onChange={handleChange}
                    />
                  </div>
                  <div className="md:w-[calc(60%-15px)]">
                    <label htmlFor="">Phone Code</label>
                    <input
                      type="text"
                      name="phoneCode"
                      placeholder="Phone Code"
                      //value={formData.firstName}
                      //onChange={handleChange}
                    />
                  </div>
                  <div className="md:w-[calc(40%-15px)]">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      //value={formData.firstName}
                      //onChange={handleChange}
                    />
                  </div>
                  <div>
                    <button className="button">Next</button>
                  </div>
              </div>
            </div>
          </div>

          {/* Second Dropdown */}
          <div
            className={`bg-white my-[30px] rounded-[10px] py-[30px] px-10 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.10)]  ${
              openDropdowns[1] ? "active" : ""
            }`}
          >
            <h2
              className="text-2xl flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown(1)}
            >   
              Activity Details <DropArrow />
            </h2>
            <div
              ref={(el) => (contentRefs.current[1] = el)}
              className={`text-selecion overflow-hidden transition-[max-height] duration-500 ease-in-out`}
              style={{
                maxHeight: openDropdowns[1]
                  ? contentRefs.current[1]?.scrollHeight
                  : 0,
                opacity: openDropdowns[1] ? 1 : 0,
              }}
            >
              <div className="pt-[30px] ">
                <p className="md:w-full">ADULT 1</p>
             <div className="grid md:grid-cols-2 md:gap-x-5 gap-y-[30px]  " >
             <div className="">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                     // value={formData.firstName}
                      //onChange={handleChange}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      //value={formData.lastName}
                      //onChange={handleChange}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="">Date of birth</label>
                    <input
                      type="date"
                      name="dob"
                      placeholder="Date of birth"
                      //value={formData.dob}
                      //onChange={handleChange}
                    />
                  </div>
             </div>
             <p className="pt-[30px] ">ADULT 2</p>
            <div className="grid md:grid-cols-2 md:gap-x-5 gap-y-[30px] ">
            <div className="">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                     // value={formData.firstName}
                      //onChange={handleChange}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      //value={formData.lastName}
                      //onChange={handleChange}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="">Date of birth</label>
                    <input
                      type="date"
                      name="dob"
                      placeholder="Date of birth"
                      //value={formData.dob}
                      //onChange={handleChange}
                    />
                  </div>
            </div>
                  <div>
                    <button className="button">Next</button>
                  </div>
              </div>
            </div>
          </div>

          <div
            className={`bg-white rounded-[10px] py-[30px] px-10 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.10)]  ${
              openDropdowns[2] ? "active" : ""
            }`}
          >
            <h2
              className="text-2xl flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown(2)}
            >
              {" "}
              Payment Details <DropArrow />{" "}
            </h2>
            <div
              ref={(el) => (contentRefs.current[2] = el)}
              className={`text-selecion overflow-hidden transition-[max-height] duration-500 ease-in-out`}
              style={{
                maxHeight: openDropdowns[2]
                  ? contentRefs.current[2]?.scrollHeight
                  : 0,
                opacity: openDropdowns[2] ? 1 : 0,
              }}
            >
              <div className="pt-[30px] grid md:flex md:flex-wrap md:gap-x-5 gap-y-[30px] ">
              <div className="md:w-[calc(50%-15px)]">
                    <label htmlFor="">Card Number</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Card Number"
                     // value={formData.firstName}
                      //onChange={handleChange}
                    />
                  </div>
                  <div className="md:w-[calc(50%-15px)]">
                    <label htmlFor="">Name on card</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Name on card"
                      //value={formData.lastName}
                      //onChange={handleChange}
                    />
                  </div>
                  <div className="md:w-[calc(50%-15px)]">
                    <label htmlFor="">CVV</label>
                    <input
                      type="number"
                      name="phoneCode"
                      placeholder="Phone Code"
                      //value={formData.firstName}
                      //onChange={handleChange}
                    />
                  </div>
                  <div></div>
                  <div className="md:w-[calc(50%-15px)]">
                    <label htmlFor="">Expire month</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Expire month"
                      //value={formData.firstName}
                      //onChange={handleChange}
                    />
                  </div>
                  <div className="md:w-[calc(50%-15px)]">
                    <label htmlFor="">Expire year</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Expire year"
                      //value={formData.firstName}
                      //onChange={handleChange}
                    />
                  </div>
                  <div className="md:w-[calc(50%-15px)]">
                    <label htmlFor="">Country</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Country"
                      //value={formData.firstName}
                      //onChange={handleChange}
                    />
                  </div>
                  <div className="md:w-[calc(50%-15px)]">
                    <label htmlFor="">Postal code</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Postal code"
                      //value={formData.firstName}
                      //onChange={handleChange}
                    />
                  </div>
            
                  <div>
                    <button className="button">Next</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-5 lg:p-[30px] rounded-[10px] bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]  ">
            <h4 className="border-b border-[#ECECEC] text-2xl mb-5 pb-4  ">
              Package Details
            </h4>
            <img src={packag} alt="" className="rounded-[10px] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
