import { useParams } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/Moraine.jpg";
import img2 from "../assets/newsletter.gif";
import img3 from "../assets/loginimg.png";
import img4 from "../assets/about4.jpg";
import { ClockIcon, MessageIcon, MobileIcon, WishListIcon } from "../Utils/SvgIcons";

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const sliderData = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img1 },
    { id: 6, image: img2 },
    { id: 7, image: img3 },
  ];

  return (
    <div>
      <div>
        <Swiper
          navigation={false}
          pagination={{
            type: "bullets",
            clickable: true,
            bulletActiveClass: "bg-[#0F6528] opacity-100",
          }}
          className="pb-9"
          autoplay={false}
          slidesPerView={1}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 1.2,
            },
            1100: {
              slidesPerView: 3.8,
            },
          }}
        >
          {sliderData.map((data) => (
            <SwiperSlide key={data.id}>
              <div>
                <img
                  src={data.image}
                  alt=""
                  className="aspect-[3/2] object-cover "
                />{" "}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container">
        <div className="grid py-[80px] md:grid-cols-[minmax(0,1fr),384px] gap-5">
          <div>
            <div className="flex items-center mb-[10px]  ">
              <p className="leading-4 pr-[10px] border-r border-[#8c8c8c] ">Badge of Excellence</p>
              <p className="pl-[10px] leading-4  ">America,Toronto</p>
            </div>
            <div className="border-y border-[#d9d9d9] py-[11px] ">
              <ul className="flex items-center space-x-5 ">
                <li className="flex items-center gap-[5px] "> 
                  <ClockIcon />
                  <span>8 hours (approx.)</span>
                </li>
                <li className="flex items-center gap-[5px] ">
                  <MobileIcon/>
                  <span>Mobile ticket</span>
                </li>
                <li className="flex items-center gap-[5px] "><MessageIcon />
                <span>Offered in: English</span></li>
              </ul>
            </div>
            <div className="flex gap-5 justify-between mt-5 mb-[10px]">
            <h2 className=" text-4xl leading-[normal] w-full  ">Private full day tour to Niagara Falls from Toronto - Hotel pick up and drop off</h2>
          <span className="min-w-[36px]"><WishListIcon/></span>
            </div>
            <p>Enjoy a private visit to the stunning Niagara Falls with this private experience from Toronto. Your private driver will pick you up in your desired place in the city and driver approximately 90 minutes until you reach the Falls. You will visit the Niagara Falls with a licensed tour guide, expert in the history and facts. Your private tour includes a visit to a local winery in Niagara and visit to the Town of Niagara.</p>
            <p className="leading-4 pl-[10px]">{productId} </p>

          </div>
          <div>
            <div className="sticky top-5 ">
              <div className="p-5 lg:p-[30px] rounded-[10px] bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]  ">
                <div className="h-[100px] w-20 bg-lime-400 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
