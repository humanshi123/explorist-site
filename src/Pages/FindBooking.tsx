import banner from "../assets/find-banner.png";
import Search from "../Components/Search";
import { DiscoverSection, NewsLetterSection } from "./Home";

const FindBooking = () => {
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
            <Search />
           </div>
            </div>
            </div>
            </div>
           </section>
           <DiscoverSection/>
           <NewsLetterSection />
        </div>
    );
}

export default FindBooking;
