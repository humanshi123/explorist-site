import { useState } from "react";
import banner from "../assets/find-banner.png";
import Search from "../Components/Search";
import { DiscoverSection, NewsLetterSection } from "./Home";
import Modal from 'react-modal'; 
import { CustomerAdult, CustomerCalender, CustomerEmail, CustomerName } from "../Utils/SvgIcons";

const Details =[
    {
        id: 1,
        icon: <CustomerName/> ,
        text: "Name",
    },
    {
        id: 1,
        icon: <CustomerEmail/>, 
        text: "abcd123@gmail.com",
    },
    {
        id: 1,
        icon: <CustomerAdult/> ,
        text: "1 ADULT",
    },
    {
        id: 1,
        icon: <CustomerCalender/>,
        text: "08:25",
    },
]
const FindBooking = () => {
const[isPopupOpen, setIsPopupOpen] = useState(false)

const closePopup=() =>{
    setIsPopupOpen(false);
}
const openPopup =() => {
    setIsPopupOpen(true);
}

    return (
        <div className="find-booking">
           <section className="pb-10 md:pb-[80px]">
            <div className="container">
            <div className="relative  ">
            <img src={banner} alt="" className="rounded-[10px] min-h-[300px] object-cover  " />
            <div className="absolute inset-0 grid place-items-center items-center ">
           <div className="text-center w-full px-5">
           <h2 className="text-white shadow-text ">Find Your Booking</h2>
            <p className="text-white mb-[26px] ">Discover and locate your booked tour</p>
            <Search click={openPopup}/>
           </div>
            </div>
            </div>
            </div>
           </section>

      <Modal
      isOpen={isPopupOpen}
      onRequestClose={closePopup}
      contentLabel="Update Assignment"
      bodyOpenClassName='overflow-hidden'
      className="modal max-w-[1200px] bg-white p-5 md:py-[30px] md:px-[50px] mx-auto rounded-[10px] w-full shadow-[0px_0px_35px_0px_rgba(15,101,40,0.1)] max-h-[90vh] overflow-y-auto  "
      overlayClassName="w-full h-full fixed inset-0 px-3 bg-black bg-opacity-30 flex items-center justify-center"
    >
    <div className="flex  justify-between items-center pb-3 border-b border-[#d9d9d9]">
    <h3>Tour Booking Details </h3>
    <button onClick={closePopup} className="bg-[#1c9d41] px-[8px] text-white rounded-[4px] ">X</button>
    </div>
    <div className="grid items-cente gap-4 md:grid-cols-[2fr_1fr] mt-5 ">
        <div className="flex gap-4 md:gap-[30px] items-center ">
            <div className="min-w-[60px] md:min-w-[100px]"><img src={banner} alt="" className="aspect-square w-[60px] md:w-[100px] object-cover rounded-[10px]  " /></div>
            <h3 className="text-lg md:text-2xl font-DmSans font-bold w-full leading-[normal] ">St. John's, Quidi Vidi Village & Signal Hill Small Group Tour</h3>
        </div>
        <div className="md:text-right">
        <button className="underline text-sm  ">Cancel Booking</button>
        <p className="mt-2 text-lg md:text-xl leading-[normal] text-[#0f6528] font-bold uppercase  ">CONFIRMED</p>
        <span className="text-[#322E2E] text-sm md:text-base ">Booking I’d</span>
        <p className="text-[#322E2E] font-bold text-lg md:text-xl leading-[normal] mt-2  ">BR-597045285</p>
        </div>
    </div>

    <div className="my-[30px] ">
        <p className="mb-4 text-[#1e1e1e] text-lg md:text-xl font-semibold ">Name of the customer</p>
        <div>
          {Details.map((data)=>(
            <p className="flex items-center gap-[10px] my-3 text-[#322E2E] text-sm md:text-base ">{data.icon} {data.text} </p>
          ))}
        </div>
    </div>
    <div className="border-t border-[#d9d9d9] pt-[18px] flex justify-between items-center ">
        <p className="text-lg md:text-2xl font-bold text-[#1e1e1e]  ">Package total</p>
        <p className="text-lg md:text-2xl font-bold text-[#0F6528]  ">CA$ 114</p>
    </div>

    </Modal>

           <DiscoverSection/>
           <NewsLetterSection />
        </div>
    );
}

export default FindBooking;
